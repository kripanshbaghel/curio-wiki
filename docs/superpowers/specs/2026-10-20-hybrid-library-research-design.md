# Curio Wiki — Hybrid Topic Library + Live Discovery + Research-Session Lifecycle

Design · 2026-10-20 · status: draft for approval

## Intent

Curio Wiki currently has 21 curated topics and a working hybrid search (curated match + Wikipedia/YouTube/web in one request). The goal is to make it a comprehensive STEM learning resource: **~300 curated topics (≥50 per subject)**, a **reusable topic learning page** that works for curated *and* externally discovered topics, **search on every subject page**, and a **real temporary research-data lifecycle** so external discovery never becomes unbounded memory/storage growth. All of this while preserving the existing design, auth, adapters, and tests.

## Goals

1. ≥50 meaningful curated topics per subject (6 subjects, ~300 total), organized by category, zero duplicates, no placeholders.
2. Hybrid architecture: curated library for browsing; live external discovery for anything missing — one combined search, no per-source hopping.
3. Dedicated learning page (reusable template) reachable from search for both curated and external topics, ordered learning-first: title → YouTube video → readable Wikipedia intro → related topics → resources/experiments.
4. Subject-page search bars (same component as homepage), cross-subject results.
5. Pagination + category filtering so large listings stay usable and the full library is never shipped to the browser.
6. Research-session lifecycle: session-scoped server cache of fetched research with explicit "Finish researching" cleanup, idle expiry, TTL, request cancellation — never touching curated content, accounts, or saved resources.
7. All gates green: tsc, eslint, vitest (unit + integration), playwright e2e, production build; live smoke verification for configured providers.

## Non-goals / anti-goals

- No UI redesign; no new component library; no new runtime dependencies (Playwright already exists).
- No Supabase tables for topics (local structured files remain the store — content is build-validated, reviewable in git, no new infra).
- No promotion of discovered topics into curated records (saving stays the explicit `/api/saved` flow).
- No mock/live conflation: mocks only in tests, live claims only after live runs.
- No client-side download of the whole library.

## Constraints (from current codebase, verified)

- Topic records: `src/content/types.ts` `Topic` (slug/title/subject/summary/aliases/keyConcepts/equations/relatedExperimentSlugs/wikipediaTitle/collectionSlugs). **Missing vs. requirements: `category`, related-topic slugs, difficulty.** Adding fields is a breaking schema change for existing 21 topics → migration step.
- Seeds aggregated in `src/content/topics.ts` from two files (~920 lines) validated by Zod at module load (`parseContent`).
- Search: `runUnifiedSearch` (orchestrator) returns single best `topic` match + live sections with per-source `SourceResult` isolation; `/api/search` adds validation + rate limit + `only=` retry.
- Topic page `/topics/[slug]` is curated-only and renders header → concepts → equations → experiments → collections → WikipediaPanel (footer order, not learning-first).
- `src/lib/cache.ts` `cachedFetch` — module-level TTL Map with inflight dedupe; already used by adapters.
- Subject pages render all their topics in one grid (fine at 50, needs pagination), no search bar.
- E2E/auth/RLS must not regress.

## Decisions (the how)

### D1 — Topic data stays in local structured files

One file per subject: `src/content/topics-{physics,chemistry,biology,mathematics,technology,engineering}.ts`, aggregated by `topics.ts`. Rationale: zero infra, build-time Zod validation, git-reviewable content, already the proven pattern. 300 topics ≈ 6–9k lines — well within module-load parse budget (parseContent of 21 topics is already exercised at every test/build).

**Schema additions** (one Zod + type change, then content migration):

- `category: string` (required) — drawn from a per-subject taxonomy constant (e.g. Physics: `mechanics | waves | optics | electricity | thermodynamics | modern-physics | astronomy` …). Taxonomy lives in `src/content/categories.ts` keyed by subject; schema validates category ∈ subject's set.
- `relatedSlugs: string[]` (required, may be empty) — explicit cross-links; validation asserts every slug resolves (cross-reference test like experiments).
- `difficulty?: 'beginner' | 'intermediate' | 'advanced'` — optional.
- `sources?: SourceLink[]` — optional attribution: the topic's Wikipedia article plus 1–2 reputable references (university course pages, NASA/NOAA/NIST/IEEE/ACS etc.). Rendered as a "Sources" block with links; factual descriptions must be consistent with them. Distinct from live external-API content, which is always labelled as such.
- `wikipediaTitle` **stays required** — authors must set it (obvious canonical article title); content tasks include a batch **live existence check** (`scripts/verify-wikipedia-titles.ts`, MediaWiki `action=query&titles=` batched 50/request) that fails any title with no article, which is then re-titled or the topic dropped. Runtime 404s still render the existing honest empty state. No fabricated links ship.
- Existing `aliases`, `keyConcepts`, `equations`, `wikipediaTitle`, experiment/collection links stay.
- Duplicates guard: test asserts globally unique slugs and unique (case-insensitive) titles across the whole library.

**Retrieval/pagination**: all server-side. `getTopicsPage({ subject?, category?, q?, collection?, page, pageSize })` in `src/content/topics.ts` filters/sorts and slices; `/topics` becomes a **single flat grid** with filter controls (subject chips, category select, `q`, plus honoring the existing `?collection=` links from homepage/topic cards — currently silent no-ops, fixed here) and searchParams-driven pagination (24/page). `/subjects/[slug]` reuses the same helper scoped to its subject with category chips + pagination, keeping its header/featured-experiments layout. Nothing client-side loads the library.

### D2 — Hybrid search upgrade (search experience)

Extend the orchestrator, don't replace it:

- `matchTopic` → `matchTopics(query, limit)` returning ranked **multiple** curated matches (keeps best-match as `results.topic` for the overview card, adds `results.topics: TopicBrief[]` for a "Curated topics" section).
- Query normalization already handles case/whitespace; extend `normalizeQuery` lightly for possessives (`newton's laws` → also match `newton laws`) in curated matching — no stemming library.
- Result de-duplication: Wikipedia section already keyed by article; video/web sections dedupe by URL; curated topics that appear in the overview are excluded from other sections (by construction).
- HTML-entity safety: shared `decodeText()` (numeric + named entities, no HTML parsing) applied to external titles at the adapter boundary (`youtube.ts`, `web.ts`, `wikipedia.ts` normalization), so `&amp;`/`&#39;` never render. No `dangerouslySetInnerHTML` anywhere.
- Curated topics in search results get a consistent **"Open topic page"** action (existing TopicCard/link pattern).

### D3 — Reusable learning page template + external discovery URL

- **External topics**: `/learn?q=<query>` — server component; validates+normalizes `q`; runs `runUnifiedSearch` (through the research store when `rs` present, see D5); **redirects to `/topics/<slug>` only on exact title or exact alias match** (canonical URL for genuine curated topics); looser matches do **not** redirect — the page renders external learning content with the matched curated topic surfaced as a prominent "Related curated topic" card. Multiple matches: best-ranked wins the card.
- **Curated topics**: `/topics/<slug>` refactored to render the same `TopicLearningView` component with curated data first, then curated extras (key concepts, equations) in the learning order below Wikipedia.
- **Entry point from search (external results)**: the featured-video slot, Wikipedia section, and web-resources section on `/search` each gain an "Open learning page" link → `/learn?q=<encodeURIComponent(result title)>&rs=<sessionId>` via a small client `LearnLink` wrapper (session id from `useResearchSession()`). Curated topic results keep their existing "Open topic page" → `/topics/<slug>` action. No other result cards change shape.
- **YouTube cost control on curated topic pages**: the featured video on `/topics/<slug>` is fetched **client-side after page load** via `POST/GET /api/search?only=youtube&q=<title>` (AbortController-guarded, adapter-cached) — topic-page TTFB and SSR stay Wikipedia-only, and quota is spent only when a visitor actually views the topic. `/learn` keeps the server-side fetch (it *is* the dedicated research page, session-cached so reloads don't re-hit). Adapter search-cache TTL raised from 6h in-memory assumptions to also emit CDN `s-maxage` where applicable; the ~100 searches/day free-tier ceiling is documented honestly in `docs/deployment.md`.
- **`TopicLearningView` order** (per spec §4): title + subject/category badges → featured YouTube video (player + title/channel + "Open on YouTube" + alternates + honest empty state) → Wikipedia intro as readable paragraphs (article title, 2–4 paragraphs split on blank lines from the PCS extract, attribution link + CC BY-SA) → related topics (curated links; for external: Wikipedia `morelike`-derived links + curated suggestions) → web resources (external) / related experiments + collections (curated).
- Video selection: first YouTube result with valid id and non-short duration heuristic is unreliable — take top result, fall back to next on embed failure (client checks iframe load / uses error state); "alternative videos" row uses remaining results. All data comes from the existing adapter — nothing hardcoded.
- Wikipedia paragraphs: PCS `/page/summary` `extract` is one paragraph; additionally fetch intro wikitext via `action=query&prop=extracts&explaintext` (same official API, cached) to get 2–4 paragraphs. If summary exists but intro fails, render summary alone. Attribution: title link + `WikiAttribution` component (already exists).
- Search-page video cards and existing video UI are untouched (§7).

### D4 — Subject-page search bars

Reuse `<SearchBox>` (the homepage component) on each `/subjects/[slug]` under the intro, same Container/spacing pattern. Submits to `/search?q=` (global, not subject-scoped — cross-subject requirement). Optional subject chips on results remain filters, never silent restrictors. Enter + button both submit (existing component behavior verified).

### D5 — Research-session lifecycle (temporary data)

**Resolved flow (builder-check round 1):**

- **Session id**: a UUID generated client-side, kept in `sessionStorage` (per-tab). `useResearchSession()` hook provides it; it is only threaded into `/learn` links and research API calls — `/search` server rendering stays session-less (fresh run; adapter-level `cachedFetch` still dedupes provider calls).
- **First visit to `/learn` without `rs`**: server renders normally (one provider run, not stored). A tiny client component on the page then `router.replace`s the URL to add `?rs=<id>` — from then on reload/back hit the store. `/learn` with a well-formed `rs`: lookup `(rs, q)` → on miss, fetch **and store** (a valid UUID *is* the registration; no separate create call).
- **Writes after end**: `end` tombstones the session id in a bounded LRU tombstone set; the store refuses writes/reads for tombstoned ids → late/duplicate responses cannot resurrect a finished session.
- **Retries**: `POST /api/research { sessionId, query, only? }` re-runs only the requested provider sections and stores the merged payload under the same `(rs, q)` key (mirrors `/api/search?only=` semantics, but session-aware). The search page's existing client retries keep using `/api/search` (unchanged behavior, no session).
- **Observable contract for tests**: after `POST /api/research/end`, a subsequent `POST /api/research` for that session returns **410 Gone** (tombstoned) — unit/integration tests assert store internals directly (mocked providers); e2e asserts the 410 contract + UI behavior. No read-only introspection endpoint is exposed.

**Where data lives** (documented in code + `docs/research-cache.md`):

| Layer | What | Lifetime |
|---|---|---|
| `cachedFetch` adapter cache (existing) | raw provider responses | TTL (existing, ~60s), never user-scoped |
| **Research store (new)** `src/lib/research-session.ts` | assembled `SearchResponse` per (sessionId, query) | entry TTL 10 min; session idle expiry 15 min; max 50 sessions (LRU eviction), max 12 entries/session |
| `/learn` page render | nothing retained (server renders per request; hits research store first) | request scope |
| Browser | session id in `sessionStorage`; no result payloads accumulated client-side | cleared on "Finish researching" / sessionStorage at session end |

**Mechanics**:

- `POST /api/research` `{ sessionId, query }` → runs `runUnifiedSearch`, stores payload under session (this is what the client uses for section retries), returns payload.
- `GET`-side: `/learn?q=&rs=<sessionId>` — server page looks up `(rs, q)` in the research store before calling providers (reload/back within session → cache hit, no provider re-hit).
- **"Finish researching"** button on `/learn` → `POST /api/research/end` `{ sessionId }` → deletes all entries for that session server-side + clears `sessionStorage` client-side + `router.push('/')`. This is a real server deletion, not just a UI clear. Pages without a started session simply navigate away (nothing to clear).
- **Expiry**: lazy sweep on every store access + a `setInterval` sweep (dev-safe, unref'd) removing idle sessions and expired entries. Abandoned tabs are covered by idle expiry (no reliance on tab-close events).
- **Cancellation**: `/api/search` and `/api/research` handlers create `AbortController`s with a timeout; the client search/retry fetches use `AbortController` tied to component unmount; stale responses discarded (ignore after abort) — late responses can't resurrect finished sessions (store refuses writes for unknown/finished session ids via a per-session generation token).
- **Refcounting**: entries are only deleted by (a) explicit end for their own session, (b) TTL/idle expiry of *that* session. Sessions are per-tab ids, so one page's finish never touches another tab's active session. Curated library, accounts, saved resources are never inputs to this store.
- Store is a module `Map` (same deployment model as the existing `cachedFetch`) — documented limitation for multi-instance serverless.

### D6 — Content authoring strategy (batches)

- 6 subjects × ~50 topics, authored by parallel general subagents (one batch per subject, files split when >~800 lines), each instructed: real textbooks-standard science grounded in the topic's Wikipedia article and named authoritative sources (university/agency pages) with `sources` links recorded; stable kebab-case slugs, meaningful 1–2 sentence summaries, 3–5 key concepts, `wikipediaTitle` = best canonical article title (live-verified afterwards per D1), `relatedSlugs` pointing within-library after batch merge. **Every batch is validated before the next starts** — schema + counts + uniqueness + cross-refs + live title check + a fresh reviewer subagent fact-sample — and only then committed.
- Two-pass validation: (1) per-batch schema validation via `parseContent`; (2) library-wide audit tests: unique slugs/titles/aliases, relatedSlugs resolve, category ∈ taxonomy, cross-reference integrity, spot-check factual review by a reviewer subagent on a sample + full summary skim.
- Existing 21 topics migrated (category + relatedSlugs added) in the first content task.
- Topic counts: exactly what passes validation — no filler; targets are floors ("≥50"), not quotas to pad.

## Verification plan (summary; full steps in the implementation plan)

- Unit/integration: schema & cross-ref tests (extended), research-store lifecycle tests (insert/expire/end/tombstone-refusal/inter-session isolation), orchestrator multi-topic match + exact-vs-loose redirect tiers, entity decoding, pagination + collection-filter math, `verify-wikipedia-titles` batch logic (mocked HTTP).
- E2E additions: subject-page search bar → cross-subject results; `/learn?q=<concept absent from curated library>` renders video-first learning page with Wikipedia paragraphs; `POST /api/research` → `end` → `POST` returns 410; "Finish researching" navigates away cleanly; existing 9 specs stay green.
- Live: `smoke:*` scripts + live `/learn` manual check with real keys; failure of any provider → honest section error, page intact.
- Gates: `tsc`, `eslint`, `vitest`, `playwright test`, `npm run build` all green.

## What's left to the builder (builder's call)

- Exact per-subject category taxonomy wording (structure fixed by D1).
- Pagination page size and control placement (existing design tokens/SectionHeader patterns).
- Precise file splits for content batches.
- All test fixtures/mocking mechanics (must follow existing `vi.mock` patterns).
- Sweep timer wiring details (lazy-sweep correctness is the tested contract).
