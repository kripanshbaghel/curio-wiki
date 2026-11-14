# Hybrid Topic Library + Live Discovery + Research Lifecycle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Grow Curio Wiki to ~300 validated curated STEM topics (≥50/subject), add a reusable learning page for curated *and* externally discovered topics, put search on every subject page, and implement a real research-session cache lifecycle — without changing the existing design, auth, adapters, or video page.

**Architecture:** Topics stay in build-validated local files (one per subject) behind a server-side query service (filter/search/paginate). The existing orchestrator is extended (multi-topic ranked matches + exact-match tier for canonical redirects). One `TopicLearningView` renders both `/topics/[slug]` and `/learn?q=` in learning order (video → Wikipedia → related → resources). A module-level research store keyed by per-tab UUID session id caches assembled search payloads with TTL/idle expiry and an explicit end (tombstone) API.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript strict, Tailwind v4 tokens, Zod 4, Vitest 5 + Testing Library, Playwright, existing adapters (Wikipedia/YouTube/Tavily-Brave), Supabase untouched.

**Spec:** `docs/superpowers/specs/2026-10-20-hybrid-library-research-design.md`

## Global Constraints

- No new runtime dependencies. No design-system change: semantic tokens only, existing `src/components/ui` kit, `Container`, literal subject accent classes.
- Secrets stay server-side; only `NEXT_PUBLIC_SUPABASE_*` may reach the browser.
- Tests never hit live APIs (mock `fetch`); live verification happens via scripts/manual runs and is reported separately.
- TDD: failing test → implement → pass → commit, per task. Ledger: `task-start` / `task-done` per plan task.
- Pre-commit gate every task: `npx tsc --noEmit && npx eslint . && npx vitest run` (add `npm run build` before final).
- Content batches: **validate each subject before starting the next**; no filler/placeholder topics; ≥50 per subject, no duplicates, every `category` from the taxonomy, every `relatedSlugs` entry resolvable at commit time, every `wikipediaTitle` live-verified.
- External API content is always labelled and attributed; curated content carries `sources`; never mix the two silently.
- Never write discovered/external results to Supabase or the curated catalog. Saved items go only through the existing explicit `/api/saved` flow.
- Preserve: homepage, nav, dark theme, subject cards, `/videos`, auth/RLS, existing e2e specs (9) and all 146 tests.

## Review Focus

- A topic with an unknown/blank `category` or a dangling `relatedSlug` must fail the build/tests, not render silently (Task 1).
- Duplicate titles/slugs/aliases introduced by parallel authoring must fail library-wide (Task 1, re-run per batch).
- `/learn` must redirect only on **exact** curated match and must **not** redirect on loose matches (Task 9 tiers, Task 12 e2e).
- Ending one research session must never delete another tab's active session, and an ended session must never resurrect via a late write (Task 11 unit/integration, Task 14 e2e 410).
- External titles containing `&amp;`/`&#39;` must render decoded; never inject API HTML (Task 9 unit + Task 14 e2e).
- Any single provider failing must leave the rest of the page intact with an honest section error (Task 10/12 tests; existing orchestrator isolation).
- Special characters (`'`, `+`, unicode) in a subject-page search must round-trip correctly to `/search` (Task 13 e2e).
- No suitable video/article for an obscure query → honest empty state, page continues (Task 10 unit, Task 12/14 e2e).

---

### Task 1: Topic schema evolution + taxonomy + per-subject seed files + title verifier

**Files:**
- Create: `src/content/categories.ts`, `src/lib/verify/wikipedia-titles.ts`, `scripts/verify-wikipedia-titles.ts`
- Modify: `src/content/types.ts`, `src/content/schema.ts`, `src/content/topics.ts`, `src/app/topics/[slug]/page.tsx`, all seed files (split into `topics-physics.ts`, `topics-chemistry.ts`, `topics-biology.ts`, `topics-mathematics.ts`, `topics-technology.ts`, `topics-engineering.ts`; delete `topics-physical-math.ts`, `topics-bio-tech-eng.ts`)
- Test: `tests/unit/content-schema.test.ts` (extend), `tests/unit/content-catalog.test.ts` (create), `tests/unit/wikipedia-titles.test.ts` (create)

**Interfaces:**
- Produces:
  - `SUBJECT_CATEGORIES: Record<SubjectKey, readonly string[]>` and `isCategoryForSubject(subject, category): boolean` in `src/content/categories.ts` (exact sets: physics `mechanics, motion-and-forces, energy, gravity, fluids-and-buoyancy, waves-and-sound, optics, electricity-and-magnetism, thermodynamics, modern-physics, astronomy`; chemistry `atomic-structure, periodic-table, chemical-bonding, reactions, acids-and-bases, solutions, stoichiometry, organic-chemistry, electrochemistry, thermochemistry`; biology `cells, genetics, evolution, ecology, human-biology, microorganisms, plants, anatomy-and-physiology, molecular-biology`; mathematics `arithmetic, algebra, geometry, trigonometry, calculus, probability, statistics, number-theory, vectors-and-matrices, discrete-mathematics`; technology `computer-hardware, operating-systems, programming, algorithms, databases, networks, cybersecurity, artificial-intelligence, robotics, electronics`; engineering `mechanical-engineering, electrical-engineering, civil-engineering, chemical-engineering, aerospace-engineering, biomedical-engineering, materials, structures, circuits, design-principles`).
  - `Topic` gains `category: string`, `relatedSlugs: string[]`, `difficulty?: 'beginner' | 'intermediate' | 'advanced'`, `sources?: SourceLink[]`.
  - `missingWikipediaTitles(titles: string[], fetchImpl?: typeof fetch): Promise<string[]>` in `src/lib/verify/wikipedia-titles.ts` (batches 50, `action=query&format=json&redirects=1&titles=a|b`, returns titles whose page has `missing`/`invalid`).

- [ ] **Step 1: Write failing schema tests** in `tests/unit/content-schema.test.ts`:

```ts
it('rejects a category outside the subject taxonomy', () => {
  expect(() => parseTopic(baseTopic({ subject: 'physics', category: 'organic-chemistry' }))).toThrow();
});
it('requires relatedSlugs to be an array of slugs', () => {
  expect(() => parseTopic(baseTopic({ relatedSlugs: ['Not A Slug'] }))).toThrow();
});
it('accepts optional difficulty and sources', () => {
  const t = parseTopic(baseTopic({ difficulty: 'advanced', sources: [{ label: 'NASA', url: 'https://www.nasa.gov/' }] }));
  expect(t.sources?.[0].label).toBe('NASA');
});
```

(The file already has `baseTopic`-style fixtures from Task 2 of the original build — reuse/extend them; keep the existing 7 fixture tests intact.)

- [ ] **Step 2: Run tests — expect failures** (`parseTopic` ignores/accepts unknown fields today). Run: `npx vitest run tests/unit/content-schema.test.ts`.

- [ ] **Step 3: Implement taxonomy + schema** — add `categories.ts` (exact sets above), extend `Topic` and `topicSchema` (`category` required + superRefine membership; `relatedSlugs` slug regex array default `[]`; `difficulty` enum optional; `sources` optional `{label, url}` with http(s) URL validation).

- [ ] **Step 4: Split seeds per subject and migrate the 21 existing topics** — every existing topic gets a valid `category`, `relatedSlugs` (2–4 existing topic slugs), and `sources` (Wikipedia article + one reputable reference). `topics.ts` imports the six files. No content change beyond new fields.

- [ ] **Step 5: Add catalog audit test** `tests/unit/content-catalog.test.ts`:

```ts
it('has globally unique slugs, titles and aliases', () => { /* lowercase-compare across topics */ });
it('every relatedSlug resolves to a topic', () => { /* set membership */ });
it('every topic category belongs to its subject', () => { /* isCategoryForSubject */ });
it('every curated topic has a non-trivial description (>= 20 chars)', () => {});
```

- [ ] **Step 6: Title verifier + test** — write `tests/unit/wikipedia-titles.test.ts` stubbing `fetch` to return one `missing` page and one normal page; assert `missingWikipediaTitles(['Missing Page','Photosynthesis'])` → `['Missing Page']`. Implement batch client; script prints per-subject results and exits 1 on misses. Also render `sources` in a "Sources" block on `/topics/[slug]` and switch related topics to `topic.relatedSlugs`.

- [ ] **Step 7: Gates + commit** — `npx tsc --noEmit && npx eslint . && npx vitest run`. Commit: `feat(content): topic categories, related links, sources attribution + per-subject seeds`.

---

### Task 2: Library query service + filterable/paginated `/topics` and subject pages

**Files:**
- Modify: `src/content/topics.ts`, `src/app/topics/page.tsx`, `src/app/subjects/[slug]/page.tsx`
- Create: `src/components/topic/topic-filter-bar.tsx`, `src/components/ui/pagination.tsx`
- Test: `tests/unit/topics-library.test.ts`

**Interfaces:**
- Produces: `TOPIC_PAGE_SIZE = 24`; `getTopicsPage(query?: TopicsQuery): TopicsPageResult` where

```ts
interface TopicsQuery { subject?: SubjectKey; category?: string; q?: string; collection?: string; page?: number; pageSize?: number }
interface TopicsPageResult { items: Topic[]; total: number; page: number; pageCount: number; pageSize: number }
```

Semantics: filter by subject/category/collection (`collection` via `collections` membership), `q` case-insensitive substring on title/aliases/category; stable sort (subject order, then title `localeCompare`); `page` clamped to `[1, max(1, ceil(total/pageSize))]`; `pageSize` default `TOPIC_PAGE_SIZE`, clamped `1..100`.
- Produces components: `<TopicFilterBar subjects={...} categories={...} current={{subject,category,q}} basePath="/topics" />` (GET form: search input named `q`, category select, subject chips as links) and `<Pagination page={n} pageCount={m} makeHref={(p)=>string} />`.

- [ ] **Step 1: Failing tests** — pagination slicing (`page 2` returns items 25–48), page clamp beyond `pageCount`, subject+category filter, `q` alias match (`'newton'` finds topic with alias `"Newton's laws"`), collection filter returns exactly the collection's topics (and `total` matches), unknown subject → empty page not crash.
- [ ] **Step 2: Run** `npx vitest run tests/unit/topics-library.test.ts` → FAIL.
- [ ] **Step 3: Implement** `getTopicsPage` + both components (existing UI tokens; `SectionHeader`/`Card`/`Button` patterns; pagination links preserve other searchParams).
- [ ] **Step 4: Rewire pages** — `/topics` becomes one filtered grid honoring `?subject=&category=&q=&collection=&page=` (fixes existing silent `?collection=` links from homepage and topic pages); `/subjects/[slug]` keeps header + featured experiments, but its topic grid gains a scoped `q` search input, category chips and pagination (`basePath=/subjects/<slug>`) so each subject's listing is itself searchable and filterable.
- [ ] **Step 5: Pass tests, gates, commit** — `feat(topics): server-side filtering, search and pagination for the topic library`.

---

### Tasks 3–8: Content batches (one subject each, validated before the next)

Pattern applies to each task (3 Physics, 4 Chemistry, 5 Biology, 6 Mathematics, 7 Technology, 8 Engineering).

**Files:** Modify `src/content/topics-<subject>.ts`; extend `tests/unit/content-catalog.test.ts`.

**Interfaces:** `Topic` fields from Task 1 unchanged. Category sets per subject from `SUBJECT_CATEGORIES`.

- [ ] **Step 1: Author** — dispatch two `general` subagents (25–30 topics each) with the shared brief: real, canonical STEM topics covering the spec's mandated areas (Physics: mechanics, motion, forces, energy, gravity, fluids, buoyancy, waves, sound, optics, electricity, magnetism, thermodynamics, modern physics, astronomy — etc. per subject per spec §1); stable kebab-case slug; 1–2 sentence factual summary grounded in the topic's Wikipedia article; 3–5 key concepts; `category` from the subject's set (spread across all categories); `wikipediaTitle` = canonical article; `sources` = Wikipedia URL + 1–2 authoritative references (universities, NASA/NOAA/NIST/ACS/IEEE etc.); `relatedSlugs` = 2–4 slugs from topics that already exist in the repo (cross-subject links allowed only to existing topics). Forbidden: placeholder text, invented equations/claims, duplicates of existing topics, "Introduction to X" filler.
- [ ] **Step 2: Merge + validate schema** — `npx vitest run tests/unit/content-schema.test.ts tests/unit/content-catalog.test.ts` (uniqueness and cross-refs must stay green across the growing library).
- [ ] **Step 3: Add the subject's floor test** — e.g.

```ts
it('has at least 50 physics topics', () => {
  expect(topics.filter((t) => t.subject === 'physics').length).toBeGreaterThanOrEqual(50);
});
```

plus per-category coverage: every declared physics category has ≥1 topic.
- [ ] **Step 4: Live Wikipedia title verification** — `npx tsx scripts/verify-wikipedia-titles.ts physics`; every title must PASS (fix or drop failures, re-run).
- [ ] **Step 5: Fact-sample review** — dispatch one fresh reviewer subagent over the batch file: flag fabricated claims, wrong categories, vague summaries, duplicate concepts; apply fixes.
- [ ] **Step 6: Gates + commit** — `npx tsc --noEmit && npx eslint . && npx vitest run`; commit `content: <subject> library — N validated topics`.

---

### Task 9: Search upgrade — multi-topic ranked matches + entity decoding

**Files:**
- Create: `src/lib/text.ts`
- Modify: `src/lib/search/types.ts`, `src/lib/search/orchestrator.ts`, `src/lib/search/normalize.ts`, `src/lib/adapters/{wikipedia,youtube,web}.ts` (decode text at normalization), `src/components/search/search-results.tsx` (render "Curated topics" list)
- Test: `tests/unit/decode-entities.test.ts` (create), `tests/unit/orchestrator.test.ts` (extend existing)

**Interfaces:**
- Produces: `decodeEntities(input: string): string` (named + decimal + hex entities, single pass, no HTML parsing).
- Produces: `TopicMatchTier = 'exact-title' | 'exact-alias' | 'partial-title' | 'partial-alias'`; `results.topics?: TopicMatch[]` (max 6, ranked, deduped); `findExactTopicMatch(query): TopicMatch | undefined` exported from orchestrator (exact tiers only; possessive/apostrophe-insensitive comparison).
- `results.topic` keeps today's shape (best match) for the overview card.

- [ ] **Step 1: Failing tests** — `decodeEntities('Tom &amp; Jerry &#39;s &quot;lab&quot; &lt;3') === 'Tom & Jerry \'s "lab" <3'`; double-encoded input decodes once; adapter-normalized YouTube title has no `&amp;` (stub fetch); orchestrator returns `topics` with exact title first and >1 result for `'wave'`; duplicate video/web URLs are collapsed to one entry per section; `findExactTopicMatch("Newton's Laws of Motion")` matches case/apostrophe variants, `findExactTopicMatch('newton laws')` is exact-title via normalization, and `findExactTopicMatch('wave')` is `undefined` (partial).
- [ ] **Step 2: Run → FAIL.**
- [ ] **Step 3: Implement** — entity decoder used in adapter normalization (`youtube.ts` title/description, `web.ts` title/snippet, `wikipedia.ts` displaytitle/extract); `matchTopics()` scoring (exact title 4, exact alias 3, partial title 2, partial alias 1; tie-break slug); orchestrator sets `results.topics` always (empty array when no match) and `results.topic` = first.
- [ ] **Step 4: Search results UI** — a "Curated topics" section above experiments: up to 6 compact cards linking to `/topics/<slug>` with existing TopicCard styling; the existing "Topic overview" card stays as today for the best match.
- [ ] **Step 5: Gates + commit** — `feat(search): ranked curated topic results and HTML-entity-safe external text`.

---

### Task 10: Wikipedia intro adapter + reusable learning view + curated topic page reorder

**Files:**
- Modify: `src/lib/adapters/wikipedia.ts`, `src/lib/adapters/wikipedia.schemas.ts`, `src/app/topics/[slug]/page.tsx`, `src/components/topic/wikipedia-panel.tsx`
- Create: `src/components/topic/topic-learning-view.tsx`, `src/components/topic/topic-video.tsx` (client), `src/components/topic/wikipedia-article.tsx`
- Test: `tests/unit/wikipedia-intro.test.ts` (create), `tests/unit/topic-video.test.tsx` (create), `tests/unit/learning-view.test.tsx` (create)

**Interfaces:**
- Produces: `getWikipediaIntro(title: string): Promise<WikipediaIntro | null>` where `WikipediaIntro = { title: string; paragraphs: string[]; url: string }` — MediaWiki `action=query&prop=extracts&exintro=1&explaintext=1&redirects=1&titles=<title>` (official API, cached 1h via `cachedFetch`); `paragraphs` = non-empty lines split on `\n+`, trimmed, HTML-free; `null` when missing/invalid.
- Produces: `<TopicLearningView props>` slot-based layout: header (`title`, `subject`, `category`, `difficulty?`, `summary`, `curated: boolean`), then `video` → `wikipedia` → `extras` (curated concepts/equations) → `related` → `resources`. Section headings fixed: "Watch", "From Wikipedia", "Related topics", "Resources" (so existing e2e heading assertions keep working).
- Produces: `<TopicVideo query: string />` client component — fetches `/api/search?only=youtube&q=<query>` on mount with `AbortController` (abort on unmount), renders first playable video (`VideoPlayer` reuse), title + channel + "Open on YouTube", up to 3 alternative links, honest empty state; a `findPlayableVideo(videos)` helper filters invalid ids.
- Produces: `<WikipediaArticle article: WikipediaIntro | null, fallbackSummary?: string />` — title link + paragraphs (first URL cited via existing attribution component) + "Read the full article on Wikipedia"; honest error text when null.

- [ ] **Step 1: Failing tests** — intro parsing (stub fetch: explaintext with blank lines → 3 paragraphs, no `<` characters); `findPlayableVideo` skips invalid ids and returns first valid; `TopicVideo` renders empty state when API returns `[]`; unmounting `TopicVideo` aborts its in-flight fetch (assert `signal.aborted`); `WikipediaArticle` paragraphs render as separate `<p>` and contain the attribution link.
- [ ] **Step 2: Run → FAIL.**
- [ ] **Step 3: Implement adapter + components.** Keep `WikipediaPanel` for the search page; topic page now uses `WikipediaArticle`.
- [ ] **Step 4: Reorder `/topics/[slug]`** to `TopicLearningView`: title/subject/category → `TopicVideo query={topic.title}` → `WikipediaArticle` from `getWikipediaIntro(topic.wikipediaTitle)` (fall back to existing summary service) → key concepts + equations (extras) → related topics via `relatedSlugs` → experiments/collections/sources. Keep `generateMetadata` and 404 behavior.
- [ ] **Step 5: Gates + commit** — `feat(topic): reusable learning layout with video-first curated topic pages`.

---

### Task 11: Research-session store + API + lifecycle docs

**Files:**
- Create: `src/lib/research-session.ts`, `src/app/api/research/route.ts`, `src/app/api/research/end/route.ts`, `docs/research-cache.md`
- Test: `tests/integration/research-session.test.ts`, `tests/integration/research-api.test.ts`

**Interfaces:**
- Produces (store):

```ts
export const RESEARCH_ENTRY_TTL_MS = 10 * 60_000;
export const RESEARCH_SESSION_IDLE_MS = 15 * 60_000;
export const RESEARCH_MAX_SESSIONS = 50;
export const RESEARCH_MAX_ENTRIES_PER_SESSION = 12;
export function getResearch(sessionId: string, key: string): SearchResponse | undefined;
export function putResearch(sessionId: string, key: string, value: SearchResponse): boolean; // false if tombstoned/malformed
export function endResearchSession(sessionId: string): number;
export function isSessionEnded(sessionId: string): boolean;
export function sweepResearch(now?: number): void;
export function __clearResearchForTests(): void;
```

Session ids must match `/^[0-9a-f-]{36}$/i`; tombstones stored in a bounded LRU (max 100). Access refreshes entry `lastAccess`; idle-expired sessions drop all entries; bounded maps evict LRU. A module `setInterval` sweep (30s, `.unref()` when available) runs in addition to lazy sweep on each call.
- Produces (API):
  - `POST /api/research` body `{ sessionId, query, only? }` → `200 { results }` (stores merged payload), `400` invalid body/query (reuse `normalizeQuery` reasons), `410 { error: 'session_ended' }` tombstoned, `429` rate-limited (reuse existing limiter), `500` only for store failures.
  - `POST /api/research/end` body `{ sessionId }` → `200 { cleared: number }`; `400` malformed id. Calling end twice is idempotent (`cleared: 0`).
  - Note: `only=` merges into an existing entry when present; otherwise stores a fresh full response.

- [ ] **Step 1: Failing store tests** — put/get round-trip; TTL expiry (advance fake time past 10 min → `undefined`); idle expiry (session idle 15 min → all entries gone); `end` removes entries and `putResearch` afterwards returns `false`; session A's entries survive `end` of session B; more than `MAX_ENTRIES_PER_SESSION` evicts oldest; more than `MAX_SESSIONS` evicts the least-recently-used session.
- [ ] **Step 2: Failing API tests** — mock `runUnifiedSearch`; 200 stores + returns payload; second POST hits store (orchestrator mock called once — merged `only` calls allowed); after end → 410; malformed session id → 400; invalid query → 400.
- [ ] **Step 3: Implement store and routes** (reuse `ratelimit.ts` + `normalizeQuery`; never touch Supabase or content).
- [ ] **Step 4: Docs** — `docs/research-cache.md` table: layer, data, storage, TTL/expiry, intentional retention (curated library, accounts, saved items are never in this store); cleanup triggers; limitations (per-instance memory).
- [ ] **Step 5: Gates + commit** — `feat(research): session-scoped research cache with TTL, expiry and explicit cleanup`.

---

### Task 12: `/learn` external learning page + search entry points

**Files:**
- Create: `src/app/learn/page.tsx`, `src/components/search/learn-link.tsx` (client)
- Modify: `src/components/search/*` (result cards gain "Open learning page"), `src/lib/search/types.ts` if a helper is needed
- Test: `tests/integration/learn-page.test.tsx`, extend `tests/unit/learning-view.test.tsx`

**Interfaces:**
- `/learn?q=<query>&rs=<uuid?>`: invalid/empty q → `EmptyState` with a return-to-search link; `findExactTopicMatch(q)` → `redirect('/topics/<slug>')`; otherwise run search (wikipedia/wikiSummary/wikipediaRelated/youtube/web for `rs`-less visits; store-backed when `rs` present — Task 11 API), render `TopicLearningView` with `curated: false`, sections: video first (top YouTube result), Wikipedia intro as paragraphs (via `getWikipediaIntro` for the top Wikipedia result), related topics (curated loose matches + Wikipedia related links), web resources with source attribution, and a prominent "Related curated topic" card when a loose curated match exists. Every external section is labelled as live/attributed.
- `<LearnLink query: string />` client component → `/learn?q=<encoded>&rs=<session id>` (hook lands in Task 14; until then `rs` omitted).

- [ ] **Step 1: Failing tests** — exact curated query redirects; invalid q renders feedback; external query renders video-first ordering (video heading before "From Wikipedia" in DOM order) with stubbed orchestrator; Wikipedia failure → section error text while video and web sections still render.
- [ ] **Step 2: Run → FAIL.**
- [ ] **Step 3: Implement** page + `LearnLink`; add "Open learning page" links to Wikipedia, video, and web result cards on `/search` (curated cards keep "Open topic page").
- [ ] **Step 4: Gates + commit** — `feat(learn): external topic discovery page reachable from every external result`.

---

### Task 13: Subject-page search bars (cross-subject)

**Files:**
- Modify: `src/app/subjects/[slug]/page.tsx`, `src/components/search/search-box.tsx` (only if it needs a `defaultValue`/`variant` prop)
- Test: `tests/integration/subject-search.test.tsx`

**Interfaces:** reuse the homepage `SearchBox` unchanged in behavior (`GET` to `/search`, enter + button submit); placed under the subject intro with identical `Container` spacing; results are global (no silent subject restriction).

- [ ] **Step 1: Failing test** — rendering a subject page includes a search input with `name="q"` and a submit control; submitting `chemical bonding` from `/subjects/physics` navigates to `/search?q=chemical%20bonding` (JSDOM: assert form action + input name; e2e covers navigation).
- [ ] **Step 2: Implement** — add `<SearchBox />` under the intro; keep subject chips/category filters as optional filters on results only.
- [ ] **Step 3: Gates + commit** — `feat(subjects): search bar on every subject page, results always global`.

---

### Task 14: Research-session UI wiring + e2e + final audit/report

**Files:**
- Create: `src/components/research/use-research-session.ts` (client hook), `src/components/research/finish-research-button.tsx` (client), `e2e/learn.spec.ts`, `e2e/subject-search.spec.ts`, `e2e/research-cleanup.spec.ts`
- Modify: `src/app/learn/page.tsx` (rs lookup/store), `src/components/search/learn-link.tsx` (attach `rs`), `e2e/*` (adjust only if selectors legitimately changed), `docs/deployment.md`, `docs/research-cache.md`, `docs/completion-report.md` or a new `docs/expansion-report.md`
- Test: integration for hook behavior (storage id reuse, clear on finish)

**Interfaces:**
- `useResearchSession(): { sessionId: string | null; finish(): Promise<void> }` — sessionStorage key `curiowiki:research-session`; UUID generated once per tab; `finish()` posts end, clears storage, then navigates.
- `/learn` with `rs`: reads store (Task 11), stores on miss via the same orchestration path; "Finish researching" button visible with an active session.

- [ ] **Step 1: Unit/integration tests** — hook reuses a stored id; `finish()` calls end once, clears storage, and is safe to double-click (idempotent).
- [ ] **Step 2: E2E specs** —
  - `learn.spec.ts`: pick a query absent from curated titles by asking `/api/search?q=<candidate>&only=` and choosing the first candidate with no `results.topic` (candidates: `Casimir effect`, `Spherical harmonics`, `Metallocene`, `Kleiber's law`, `Bresenham's line algorithm`, `Triboelectric effect`); assert learning page shows "Watch" before "From Wikipedia", Wikipedia links to `en.wikipedia.org`, and `/learn?q=<curated exact title>` redirects to `/topics/<slug>`.
  - `subject-search.spec.ts`: on `/subjects/physics`, search `chemical bonding` → `/search?q=chemical%20bonding`; a chemistry topic appears (cross-subject); apostrophe query (`newton's laws`) survives round-trip.
  - `research-cleanup.spec.ts`: create session via `POST /api/research`, `end`, then POST again → `410`; UI "Finish researching" returns to homepage and the stored id is gone (evaluate `sessionStorage`).
  - Verify existing 9 specs still pass (adjust only legitimate selector changes, e.g. topic page order).
- [ ] **Step 3: Full library audit** — extend `content-catalog.test.ts`: ≥50 per subject (aggregate counts), no duplicate titles across the entire library, every `relatedSlugs` resolves, every topic has `sources` with Wikipedia + one non-Wikipedia reference, every category covered ≥1 per subject. Live: `npx tsx scripts/verify-wikipedia-titles.ts` (all subjects) → 0 missing.
- [ ] **Step 4: Full gates** — `npx tsc --noEmit && npx eslint . && npx vitest run && npx playwright test && npm run build`; live smokes `npx tsx --env-file=.env.local scripts/smoke-{wikipedia,youtube,web}.ts`.
- [ ] **Step 5: Manual verification (recorded honestly)** — subject pages at 1440/768/375, `/learn` for an external concept, curated topic page, finish-research flow, saved-items unaffected.
- [ ] **Step 6: Report + commit** — write `docs/expansion-report.md` (topic counts per subject/category, validations run, live checks actually performed, remaining limitations) and commit `feat: expanded library, external learning pages, subject search, research lifecycle`.

---

## Self-Review Notes

- **Spec coverage:** §1 topics+categories+pagination → Tasks 1–8; hybrid §2/search §3 → Tasks 9, 12 (orchestrator already hybrid, extended); learning page §4 → Task 10; subject search §5 → Task 13; navigation/entities §6 → Tasks 9, 12; preservation §7 → Global Constraints + Task 14 e2e; reliability §8 → Tasks 9–11 (existing adapter error isolation retained), Task 14 live verification; verification §9 → Task 14; research lifecycle → Tasks 11 + 14; sources/attribution → Tasks 1, 6, 10, 12.
- **Deliberate sequencing:** content batches land before the learning page so `/learn`'s exact-match redirect uses the final library; research store precedes `/learn` so the page is session-aware from birth.
- **Known trade-off documented honestly:** in-memory research cache is per-instance (same model as the existing adapter cache) — noted in `docs/research-cache.md` and the report.
