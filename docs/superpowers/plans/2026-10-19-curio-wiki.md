# Curio Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a working, symmetrical STEM educational platform (Next.js) with real Wikipedia/YouTube/web-search integrations, real Supabase auth with RLS-protected saved items, curated safe experiment content, and full test coverage.

**Architecture:** Next.js 15 App Router with server-side adapter modules (`src/lib/adapters/*`) validated by Zod, a `runUnifiedSearch` orchestrator returning per-source `SourceResult` objects, one API route (`/api/search`) with per-source retry, curated local content (`src/content/*`) for topics/experiments/subjects, Supabase auth via `@supabase/ssr`, and a token-driven Tailwind v4 design system.

**Tech Stack:** Next.js 15.5.x, TypeScript, React 19, Tailwind CSS v4, Zod 4, Vitest 5 (+ jsdom/@testing-library/react), Playwright 1.64, @supabase/supabase-js + @supabase/ssr, katex, lucide-react, @fontsource-variable/inter.

**Spec:** `docs/superpowers/specs/2026-10-19-curio-wiki-design.md` (design decisions) + the Curio Wiki master prompt (user-provided) + `docs/api-research.md` (verified API facts, written during Task 0).

## Global Constraints

- No fake/live-impersonating data: mock fixtures only inside tests, never imported by `src/app` or `src/components`.
- Secrets only in server env vars; `.env.example` must list every var; nothing from `.env.local` committed.
- Every external response passes a Zod schema before use; network calls carry a timeout (8000 ms default) and bounded retry (≤2 retries, backoff 250/750 ms, never on 4xx classification except 429).
- Wikipedia output includes attribution line + `https://creativecommons.org/licenses/by-sa/4.0/` link in the same UI section.
- Experiments: every item must carry ≥1 safety warning; forbidden content list enforced by test (`mercury`, `chlorine gas`, `gunpowder`, `hydrogen peroxide >6%`, "without supervision" near flame).
- UI: only token values from `src/styles/globals.css` (`@theme`) for color/space/radius/shadow; page structure via Grid/Flex inside `Container`; cards in one collection share identical padding/gap/heights.
- No `next lint` usage; run `eslint .`, `tsc --noEmit`, `vitest run`, `playwright test`, `next build`.
- Git: init repo in Task 1; commit after every task; never commit `.env.local`.

## Review Focus

1. **Missing/invalid API keys** — expected: source section shows classified `config` error, other sections unaffected, no crash, no fake results. → Task 7 test `classifies missing config before network`, Task 9 test `returns config error when YOUTUBE_API_KEY unset`.
2. **Provider partial failure** — expected: Wikipedia OK + YouTube failing ⇒ search page renders Wikipedia section and an inline YouTube error with retry. → Task 7 test `one failing source does not discard others`, Task 9 route test with mocked failing adapter.
3. **Malformed upstream payloads** (missing thumbnail, null description, HTML in excerpt) — expected: Zod-optional fields render safely, no `undefined` text, no React crash. → Task 4 test `tolerates missing optional fields`, Task 6 test `strips html tags in snippet`.
4. **Auth session persistence + protected routes** — expected: `/account` redirects to `/signin?next=/account` when signed out; sign-out clears cookie. → Task 13 tests with mocked supabase server client; Task 17 E2E covers the not-configured state.
5. **Query edge cases** (empty, 1 char, >200 chars, unicode, script tags) — expected: 400 with stable error shape; never reaches providers. → Task 3 tests `normalizeQuery` matrix; Task 9 route test.

---

### Task 0: Documentation of verified API research

**Files:**
- Create: `docs/api-research.md`

**Interfaces:**
- Consumes: research findings (already gathered from official docs in this session).
- Produces: reference table of endpoints/params/fields/quotas/errors/attribution used by Tasks 4–6; no code.

- [ ] **Step 1:** Write `docs/api-research.md` with one section per provider (Wikipedia, YouTube, Tavily, Brave, Supabase): verified endpoint URLs, exact parameter names, exact response field names used by our Zod schemas, quota/rate-limit numbers, error reason codes, attribution/caching rules, setup steps, and the list of official URLs consulted. Mark anything unverified as UNKNOWN.
- [ ] **Step 2:** Grep the doc for `UNKNOWN` and confirm each remaining unknown is documented in `docs/setup.md` TODO list (create setup doc stub now, full version in Task 16).

### Task 1: Scaffold project, git, tooling, design tokens, base UI kit

**Files:**
- Create: scaffold via `npx create-next-app@15.5.28 . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes` (run from `CurioWiki/`; if CLI refuses non-empty dir, scaffold into temp and move, preserving `.opencode/`, `docs/`, `opencode.json`)
- Create: `src/styles` tokens (edit `src/app/globals.css`), `src/components/ui/{button,card,input,badge,skeleton,spinner,container,section-header,empty-state,error-state,theme-toggle}.tsx`
- Create: `vitest.config.ts`, `vitest.setup.ts`, `tests/unit/ui.test.tsx`
- Modify: `package.json` (scripts), `.gitignore`, `eslint.config.mjs`

**Interfaces:**
- Produces: `Container` (`max-width: var(--container)`, centered, `px` token), `SectionHeader({title, action?})`, `Card` (`p-6` token padding, equal-height via `h-full`), `Button({variant:'primary'|'secondary'|'ghost'|'outline', size:'md'|'sm'})`, `Input`, `Badge`, `Skeleton`, `Spinner`, `EmptyState({title,description,icon?})`, `ErrorState({title,description,onRetry?})`. Tokens: `--color-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--container` exposed through Tailwind v4 `@theme`.

- [ ] **Step 1:** Scaffold app; verify `npm run dev` boots (curl `/` returns 200); `git init`, initial commit `chore: scaffold next app with design tokens`. Add deps: `zod katex lucide-react @fontsource-variable/inter @supabase/supabase-js @supabase/ssr`; dev: `vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test eslint`.
- [ ] **Step 2:** Write failing test `tests/unit/ui.test.tsx`: renders `Button` primary, `Card` with children, `EmptyState` title/description.
- [ ] **Step 3:** Run `npx vitest run tests/unit/ui.test.tsx` → FAIL (module/style errors expected).
- [ ] **Step 4:** Implement tokens in `globals.css` (light+dark palettes, `@theme inline` mappings) and the UI components; configure `vitest.config.ts` (jsdom, setup file, css: true).
- [ ] **Step 5:** Run `npx vitest run` → PASS; run `npx tsc --noEmit` and `npx eslint .` → clean.

### Task 2: Content types, Zod schemas, and content validation tests

**Files:**
- Create: `src/content/types.ts`, `src/content/schema.ts`, `tests/unit/content-schema.test.ts`

**Interfaces:**
- Produces (used by Tasks 10–12 and content subagents):
  - `Subject { slug, name, description, icon: SubjectIcon, accent: 'physics'|'chemistry'|'biology'|'mathematics'|'technology'|'engineering' }`
  - `Topic { slug, title, subject, summary, aliases: string[], keyConcepts: {term, definition}[], equations: {label, latex, variables:{symbol,meaning}[]}[], relatedExperimentSlugs: string[], wikipediaTitle: string, collectionSlugs: string[] }`
  - `Experiment { slug, title, subject, topic, level: 'beginner'|'intermediate'|'advanced', supervision: 'none'|'adult-required'|'teacher-led', objective, concept, materials: string[], procedure: string[], observations: string[], explanation, safety: string[], durationMinutes: number|null, relatedVideoQueries: string[], sources: {label, url}[], featured: boolean }`
  - `Collection { slug, title, description, topicSlugs: string[] }`
  - `parseContent<T>(schema, data, name): T` — throws readable aggregate error listing all paths.

- [ ] **Step 1:** Write failing tests: `content schemas reject experiment without safety`, `content schemas reject forbidden hazardous terms`, `content schemas reject bad wikipediaTitle/url`, `parseContent aggregates multiple errors`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement `types.ts` + Zod `schema.ts` + `parseContent`.
- [ ] **Step 4:** Run → PASS.

### Task 3: Config/env, error classification, query normalization, cache, rate limit

**Files:**
- Create: `src/lib/config/env.ts`, `src/lib/errors.ts`, `src/lib/search/normalize.ts`, `src/lib/cache.ts`, `src/lib/http.ts`, `tests/unit/{env,normalize,errors,cache,http}.test.ts`
- Create: `.env.example`

**Interfaces:**
- `getServerEnv(): ServerEnv` — Zod-parsed process.env; fields: `YOUTUBE_API_KEY?: string`, `TAVILY_API_KEY?: string`, `BRAVE_SEARCH_API_KEY?: string`, `NEXT_PUBLIC_SUPABASE_URL?: string`, `NEXT_PUBLIC_SUPABASE_ANON_KEY?: string`, `SUPABASE_SECRET_KEY?: string`, `NEXT_PUBLIC_SITE_URL: string` (default `http://localhost:3000`). Never throws for optional keys; exposes `hasYouTube`, `hasWebSearch`, `hasSupabase` booleans.
- `type SourceErrorCode = 'config'|'auth'|'quota'|'rate_limited'|'network'|'invalid_response'|'not_found'|'unknown'`
- `class ProviderError extends Error { constructor(provider: string, code: SourceErrorCode, message: string, opts?: {retryable?: boolean; cause?: unknown}) ; retryable: boolean }`
- `classifyHttpError(status: number, provider: string, reason?: string): ProviderError` — 401/403+`keyInvalid|accessNotConfigured`→`auth` non-retryable; 403+`quotaExceeded|dailyLimitExceeded`→`quota`; 429/`rateLimitExceeded`→`rate_limited` retryable honoring `Retry-After`; 5xx/`ECONNRESET`→`network` retryable; other→`unknown`.
- `normalizeQuery(raw: unknown): {ok:true; value:string} | {ok:false; reason:'empty'|'too_short'|'too_long'|'invalid'}` — trim, `replace(/\s+/g,' ')`, length 2–200 after trim, reject control chars.
- `cachedFetch<T>(key, fetcher, {ttlMs, schema}): Promise<T>` — TTL Map cache + in-flight dedupe; `__clearCacheForTests()`.
- `fetchWithPolicy(url, init, {timeoutMs=8000, retries=2, backoffMs=[250,750]})` — AbortController timeout; retries only on network errors/5xx/429 (uses `Retry-After` when present); never retries other 4xx.
- `.env.example` documents every var with origin + server/client classification.

- [ ] **Step 1:** Write failing tests: env booleans with unset keys; `normalizeQuery` matrix (`''→empty`, `'a'→too_short`, 201 chars→too_long, `"  Newton's   laws  "→"Newton's laws"`, `<script>…` allowed but preserved as text, non-string→invalid); `classifyHttpError` table (6 cases incl. quota non-retryable, 429 retryable with Retry-After); cache TTL expiry + dedupe; `fetchWithPolicy` retries 500 twice then throws, does not retry 400.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement modules.
- [ ] **Step 4:** Run → PASS; `tsc --noEmit` clean.

### Task 4: Wikipedia adapter

**Files:**
- Create: `src/lib/adapters/wikipedia.ts`, `src/lib/adapters/wikipedia.schemas.ts`, `tests/unit/wikipedia.test.ts`, `tests/integration/wikipedia.test.ts`

**Interfaces:**
- `searchWikipedia(query: string, opts?: {limit?: number; signal?}): Promise<WikipediaSearchItem[]>`
  - `WikipediaSearchItem { title, key, url, description: string|null, thumbnailUrl: string|null, excerpt: string }` (url = `https://en.wikipedia.org/wiki/${encodeURIComponent(key)}`; thumbnail normalized to `https:` when protocol-relative)
- `getWikipediaSummary(title: string, opts?): Promise<WikipediaSummary | null>` — null on 404; `WikipediaSummary { title, extract, description, thumbnailUrl, pageUrl, mobileUrl, type, license: 'CC BY-SA 4.0' }`
- `getRelatedWikipedia(queryTitle: string, limit?: number): Promise<WikipediaSearchItem[]>` — `morelike:` search; empty array on failure (never throws).
- All fetches through `fetchWithPolicy` with `User-Agent: CurioWiki/1.0 (https://github.com/curiowiki/curiowiki; contact@curiowiki.example)` and `cachedFetch` (ttl 24h).

- [ ] **Step 1:** Unit tests with mocked fetch: parses live-shaped REST search fixture (incl. `<span class="searchmatch">` stripped from excerpt, protocol-relative thumbnail fixed); summary fixture with missing `thumbnail` → `thumbnailUrl: null`; PCS 404 body `{"status":404}` → `null`; Action API HTTP 200 `{error:{code:'missingparam'}}` → throws `ProviderError('wikipedia','unknown',…)`; 429 plain text → `rate_limited` retryable; `morelike` failure → `[]`.
- [ ] **Step 2:** Run → FAIL → implement schemas+adapter → PASS.
- [ ] **Step 3:** Integration test (mocked HTTP at `fetchWithPolicy` level): `search + summary + related for "Newton's laws"` returns 3+ items, summary non-null, related ≥1.
- [ ] **Step 4:** Live smoke (network available): `npx tsx scripts/smoke-wikipedia.ts` printing counts for `photosynthesis`, `no-match-xyzq123`, ambiguous `jaguar` — record output in task notes; verify attribution fields present.

### Task 5: YouTube adapter

**Files:**
- Create: `src/lib/adapters/youtube.ts`, `src/lib/adapters/youtube.schemas.ts`, `tests/unit/youtube.test.ts`, `scripts/smoke-youtube.ts`

**Interfaces:**
- `searchYouTube(query: string, opts?: {maxResults?: number}): Promise<YouTubeVideo[]>` — throws `ProviderError` with code `config` when key missing.
- `YouTubeVideo { id, title, channelTitle, thumbnailUrl, url, embedUrl (youtube-nocookie), description, publishedAt, duration: string|null, embeddable: boolean, available: boolean }`
- `getYouTubeVideos(ids: string[]): Promise<YouTubeVideo[]>` for `/videos/[id]` metadata (falls back gracefully when unavailable).
- Zod schemas for `youtube#searchListResponse` and `youtube#videoListResponse` with `.passthrough()` on snippet; optional thumbnails/description defaulted.

- [ ] **Step 1:** Unit tests: missing key → `ProviderError code:'config'` (no fetch called); search+videos.list mocked happy path (embedUrl uses `youtube-nocookie.com`); `quotaExceeded` 403 → code `quota` non-retryable; `keyInvalid` 400 → `auth`; `accessNotConfigured` 403 → `auth`; empty `items: []` → `[]`; malformed item missing `id.videoId` → filtered out; missing `thumbnails.high` falls back to `medium`/`default`.
- [ ] **Step 2:** Run → FAIL → implement → PASS.
- [ ] **Step 3:** Write `scripts/smoke-youtube.ts` (runs only when key present; prints first result title/url for `electric motor experiment`); if key absent it prints `SKIPPED: YOUTUBE_API_KEY not set` and exits 0.

### Task 6: Web search adapters (Tavily + Brave)

**Files:**
- Create: `src/lib/adapters/web.ts`, `src/lib/adapters/web.schemas.ts`, `tests/unit/web.test.ts`

**Interfaces:**
- `searchWeb(query, opts?): Promise<WebSearchResult[]>` where `WebSearchResult { title, url, snippet, domain }`
- Provider selection inside module: `TAVILY_API_KEY` → Tavily (`POST https://api.tavily.com/search` with `{api_key, query, max_results, include_answer:false}` per current docs; validate actual request shape in Task 0 research), else `BRAVE_SEARCH_API_KEY` → Brave (`GET https://api.search.brave.com/res/v1/web/search?q&count`, header `X-Subscription-Token`), else throw `ProviderError('web','config',…)`.
- URL safety: `isSafeExternalUrl(url)` — only `http:`/`https:`, no credentials in URL; used by this module and Task 9 route.

- [ ] **Step 1:** Unit tests: no keys → `config` error, zero fetch; Tavily fixture → results normalized, `<strong>` tags stripped from snippet, unsafe `javascript:` URL dropped; Brave fixture → normalized with `domain` from hostname; 401 → `auth`; 429 → `rate_limited` retryable; network timeout → `network`.
- [ ] **Step 2:** Run → FAIL → implement → PASS.

### Task 7: Unified search orchestrator

**Files:**
- Create: `src/lib/search/orchestrator.ts`, `src/lib/search/types.ts`, `tests/integration/orchestrator.test.ts`

**Interfaces:**
- `type SourceId = 'topic'|'experiments'|'related'|'wikipedia'|'wikipediaRelated'|'youtube'|'web'`
- `SourceResult<T> = { id: SourceId; status:'ok'; data: T } | { id: SourceId; status:'error'; error: { code: SourceErrorCode; message: string; retryable: boolean } }`
- `runUnifiedSearch(rawQuery: unknown, opts?: { only?: SourceId[]; youtubeMax?: number }): Promise<SearchResponse>`
- `SearchResponse { query: string | null; invalid?: 'empty'|'too_short'|'too_long'|'invalid'; results: { topic?: {topic, matchedBy:'title'|'alias'}, experiments: SourceResult<ExperimentMatch[]>, related: SourceResult<TopicBrief[]>, wikipedia: SourceResult<WikipediaSearchItem[]>, wikipediaSummary: SourceResult<WikipediaSummary|null>, wikipediaRelated: SourceResult<WikipediaSearchItem[]>, youtube: SourceResult<YouTubeVideo[]>, web: SourceResult<WebSearchResult[]> } }`
- `ExperimentMatch { slug, title, subject, reason }` (match on title/topic/concept tokens; case-insensitive; top 6)

- [ ] **Step 1:** Integration tests with all adapters mocked: happy path all-ok; `youtube rejects → results.youtube.status==='error' code config` while wikipedia ok; adapter throwing `ProviderError quota` propagates as classified error; `only:['web']` runs only web; invalid query → `invalid` set, no adapter called (assert mock call counts 0).
- [ ] **Step 2:** Run → FAIL → implement (concurrency via `Promise.allSettled` over provider tasks; local topic/experiment matching synchronous) → PASS.

### Task 8: Search API route + integration tests

**Files:**
- Create: `src/app/api/search/route.ts`, `tests/integration/search-route.test.ts`

**Interfaces:**
- `GET /api/search?q=<string>&only=<csv SourceId>` → 200 `SearchResponse`; 400 `{error:{code:'invalid_query', reason}}` for invalid; 405 for non-GET. `Cache-Control: private, max-age=0` (no-store), response JSON validated by a `SearchResponseSchema` (Zod, loose) before send.
- Per-IP token bucket: 30 requests/minute (`src/lib/ratelimit.ts`, in-memory, returns 429 `{error:{code:'rate_limited'}}` with `Retry-After`).

- [ ] **Step 1:** Tests via `route.GET(new Request(...))` with mocked orchestrator: valid query 200 + shape; invalid 400; `only` parsing; rate limiter exhausts → 429; orchestrator throwing `ProviderError` → 200 with error sections (never 500 for provider failures).
- [ ] **Step 2:** Run → FAIL → implement → PASS.

### Task 9: Site chrome: header, footer, theme, mobile nav, homepage

**Files:**
- Create: `src/components/layout/{site-header,site-footer,mobile-nav,search-box}.tsx`, `src/app/layout.tsx` (edit), `src/app/page.tsx`, `src/components/home/{subject-grid,featured-experiments,topic-collections,video-section}.tsx`, `tests/unit/{search-box,subject-grid}.test.tsx`

**Interfaces:**
- `SiteHeader` — logo+wordmark (links `/`), nav: Topics `/topics`, Experiments `/experiments`, Videos `/videos`, Resources `/resources`; search icon button (focuses/navigates to search); account control: `AccountButton` reads server-side `hasSupabase` → renders `Sign in` link (`/signin`) or `/account` link (when a session exists via server supabase); mobile: hamburger toggles `MobileNav` (same links, accessible `aria-expanded`).
- `SearchBox({initialValue?, autoFocus?, size:'hero'|'compact'})` — controlled input, clear button (visible when non-empty), submit on Enter/click, `router.push('/search?q=…')`, loading spinner during navigation, inline error for invalid queries (client-side `normalizeQuery`).
- `SubjectGrid` — 6 equal cards (3 cols ≥md, 2 cols sm, 1 col xs), icon + name + description, whole-card link.
- Homepage order: `SearchBox` hero (centered, restrained heading "Search STEM topics and experiments" — no slogan), `SubjectGrid`, `TopicCollections`, `FeaturedExperiments` (curated `featured:true` — labelled "Editor's picks"), `VideoSection` (server component: renders only when `hasYouTube`, else omitted entirely).
- Dark/light toggle in header (persisted `localStorage.theme`, no-FOUC inline script).

- [ ] **Step 1:** Unit tests: `SearchBox` submits → `router.push('/search?q=newton%27s+laws')`, clear button empties input, 1-char query shows inline error and no push; `SubjectGrid` renders 6 links with correct hrefs.
- [ ] **Step 2:** Run → FAIL → implement → PASS.
- [ ] **Step 3:** Manual/visual check: `npm run dev`, curl homepage HTML contains 6 subject links + search form; verify no absolute positioning for layout; `next build` passes.

### Task 10: Search results page (sections, states, retry)

**Files:**
- Create: `src/app/search/page.tsx`, `src/components/search/{search-results,source-section,wiki-attribution,video-card,web-result-card,experiment-match-card}.tsx`, `tests/unit/source-section.test.tsx`

**Interfaces:**
- Server: `SearchPage({searchParams})` fetches `runUnifiedSearch` once (server-side, no API hop) for first paint; `SearchResults` client component receives the `SearchResponse` as initial state.
- `SourceSection({title, status, error, children, onRetry})` — renders `Skeleton` rows while loading, `ErrorState` with Retry (calls `/api/search?q&only=<id>`) on error, `EmptyState` on ok-empty, else children; each section independent (grid of sections; failed section keeps layout size).
- Sections rendered: Topic overview (curated card), Wikipedia (summary + list, attribution footer), Related topics (internal links), Experiments (internal cards), Videos (cards with thumbnail/channel/link; embed on click-through), Web resources (title/domain/snippet + external link with `rel="noopener noreferrer"`).
- Sticky query header with `SearchBox size=compact`.

- [ ] **Step 1:** Unit tests for `SourceSection`: error state shows retry button; clicking retry calls `onRetry` once; ok-empty shows EmptyState; loading shows skeleton; children render on ok.
- [ ] **Step 2:** Run → FAIL → implement page+components → PASS.
- [ ] **Step 3:** With dev server: search `photosynthesis` (Wikipedia+local sections must populate live without any key); search `density experiment` (experiments section hits local content).

### Task 11: Topics and subjects pages

**Files:**
- Create: `src/app/topics/page.tsx`, `src/app/topics/[slug]/page.tsx`, `src/app/subjects/[slug]/page.tsx`, `src/components/topic/{equation-block,concept-list,wikipedia-panel}.tsx`, `tests/unit/equation-block.test.tsx`

**Interfaces:**
- `/topics` — grouped by subject, equal-size `TopicCard`s (title, subject badge, summary ≤2 lines).
- `/topics/[slug]` — curated: title, subject badge, summary, `ConceptList`, `EquationBlock` (KaTeX `htmlAndMathml`, variables table), related experiments, collection links, further reading; then server-fetched `WikipediaPanel` (summary of `wikipediaTitle` via `getWikipediaSummary`) with attribution — renders `ErrorState` inside its own card if fetch fails (page still usable); related topics via `getRelatedWikipedia`.
- `/subjects/[slug]` — hero (name+description), tabs-free stacked sections: topics of subject, featured experiments of subject, video search link `?q=`. 404 via `notFound()` for unknown slug.
- `EquationBlock({label, latex, variables})` renders KaTeX with `throwOnError:false`.

- [ ] **Step 1:** Unit tests: `EquationBlock` renders mathml/html without throwing on `F = ma`; `TopicCard` link href correct.
- [ ] **Step 2:** Run → FAIL → implement → PASS.
- [ ] **Step 3:** Dev check: `/topics/newton-s-law-of-motion`, `/topics/photosynthesis`, `/subjects/physics` return 200; unknown slug returns 404; Wikipedia panel shows live extract with attribution link.

### Task 12: Experiments library

**Files:**
- Create: `src/app/experiments/page.tsx`, `src/app/experiments/[slug]/page.tsx`, `src/components/experiment/{experiment-card,safety-notice,materials-list,video-suggestions}.tsx`, `tests/unit/safety-notice.test.tsx`

**Interfaces:**
- `/experiments` — filter by `?subject=` (chips, server-rendered) + grid of equal `ExperimentCard`s (title, subject badge, level badge, objective excerpt, supervision badge).
- `/experiments/[slug]` — ordered detail: title, badges, objective, concept, materials, numbered procedure, expected observations, explanation, `SafetyNotice` (always rendered; `supervision: adult-required|teacher-led` shows prominent banner), related videos (renders only when `hasYouTube`, else hidden), sources list (external links), "CurioWiki editorial selection — not physically tested by CurioWiki" note.
- Unknown slug → `notFound()`.

- [ ] **Step 1:** Unit tests: `SafetyNotice` renders warnings; adult-required variant shows supervision banner text.
- [ ] **Step 2:** Run → FAIL → implement → PASS.
- [ ] **Step 3:** Run full content validation test (`tests/unit/content-schema.test.ts` against `src/content/*`) → PASS (fails until Task 14 content lands; mark pending in notes if running before Task 14).

### Task 13: Authentication (Supabase)

**Files:**
- Create: `src/lib/supabase/{client.ts,server.ts,middleware.ts}`, `src/middleware.ts`, `src/app/auth/callback/route.ts`, `src/app/(auth)/signin/page.tsx`, `src/app/(auth)/signup/page.tsx`, `src/app/(auth)/forgot-password/page.tsx`, `src/app/(auth)/reset-password/page.tsx`, `src/components/auth/{auth-form,oauth-button,auth-message}.tsx`, `tests/integration/auth.test.ts`
- Modify: `src/app/layout.tsx` (account control), `.env.example` (Supabase section + OAuth setup steps)

**Interfaces:**
- `createBrowserClient()` (from `@supabase/ssr`, uses `NEXT_PUBLIC_SUPABASE_URL|ANON_KEY`), `createServerClient()` (cookie store), `requireUser(): Promise<{user} | {redirect: '/signin'}>` for protected pages, `getOptionalUser()`.
- `isSupabaseConfigured()` — exported by `src/lib/config/env.ts` (Task 3); every auth surface checks it first: when false, pages render `EmptyState` "Authentication is not configured — see docs/setup.md" and **no** input fields.
- Sign-in form: email+password → `signInWithPassword`, errors mapped (`invalid_credentials` → friendly message); Google button → `signInWithOAuth({provider:'google', options:{redirectTo: SITE_URL + '/auth/callback'}})` (never a password field); forgot-password → `resetPasswordForEmail` with `redirectTo /reset-password`; reset page → `updateUser({password})` from `code` hash session.
- Middleware: refresh session cookie on every request for `/account`, `/auth/*` paths (skip when unconfigured).

- [ ] **Step 1:** Integration tests with mocked `@supabase/ssr` client: unconfigured ⇒ sign-in page renders EmptyState, no `<input>`; configured+bad credentials ⇒ mapped error message shown (mock rejects with `invalid_credentials`); OAuth button triggers `signInWithOAuth` with correct redirectTo; `requireUser` without session → redirect `/signin?next=/account`.
- [ ] **Step 2:** Run → FAIL → implement → PASS.
- [ ] **Step 3:** Write OAuth/Supabase setup steps into `.env.example` comments + `docs/setup.md` (redirect URLs, authorized domains, SQL for `saved_resources` referenced from Task 14).

### Task 14: Saved resources (RLS + API + account page)

**Files:**
- Create: `supabase/migrations/20261019000001_saved_resources.sql`, `src/app/api/saved/route.ts`, `src/lib/saved/repository.ts`, `src/app/account/page.tsx`, `src/components/saved/save-button.tsx`, `tests/integration/saved.test.ts`

**Interfaces:**
- SQL: `create table public.saved_resources (user_id uuid not null references auth.users on delete cascade, resource_type text not null check (resource_type in ('topic','experiment','video')), resource_id text not null, title text not null, url text not null, created_at timestamptz not null default now(), primary key (user_id, resource_type, resource_id)); alter table ... enable row level security; policies: select/insert/delete `using (auth.uid() = user_id) with check (auth.uid() = user_id);` + index on user_id.
- `GET /api/saved` → list for current user (401 when no session or unconfigured); `POST /api/saved {resource_type, resource_id, title, url}` upsert (validates via Zod, `isSafeExternalUrl` on url); `DELETE /api/saved?resource_type=&resource_id=`.
- `SaveButton({resourceType, resourceId, title, url})` — client; when unconfigured/not signed in: not rendered at all (parent passes `canSave` server flag); toggles optimistic state, calls API, shows saved/un-saved icon states.
- `/account` — list saved items by type with remove buttons; `EmptyState` when unconfigured or none saved.

- [ ] **Step 1:** Integration tests: SQL file contains `enable row level security` + both policies (grep-based test), repository inserts/queries with mocked supabase (verifies RLS `on('saved_resources')` chains used), API POST invalid type → 400, unauthenticated → 401.
- [ ] **Step 2:** Run → FAIL → implement → PASS.

### Task 15: Videos and resources pages

**Files:**
- Create: `src/app/videos/page.tsx`, `src/app/videos/[id]/page.tsx`, `src/app/resources/page.tsx`, `src/components/video/{video-search,video-grid,video-player}.tsx`, `src/data/external-resources.ts`, `tests/unit/external-resources.test.ts`

**Interfaces:**
- `/videos?q=` — server-side `searchYouTube(q)` (default q `science for students` when absent); grid of `VideoCard`s; when `!hasYouTube` → `EmptyState` "YouTube API key not configured" with link to `docs/setup.md` (no fake results).
- `/videos/[id]` — validates id (`/^[\w-]{11}$/` → else `notFound()`); `getYouTubeVideos([id])`; renders `youtube-nocookie` iframe when `embeddable && available`, else external-link card with reason ("embedding disabled by owner" / "unavailable"); metadata from API only.
- `/resources` — curated `ExternalResources` array (`{title, url, description, category}`) of reputable educational orgs (NASA, MIT OCW, Khan Academy, Wolfram MathWorld, Project Gutenberg/Internet Archive science, Exploratorium, NIST, etc.), grouped by category; test asserts every URL `https:` and unique.

- [ ] **Step 1:** Unit tests: resource URLs safe+unique; video id regex rejects `../../etc`; unconfigured videos page renders EmptyState text.
- [ ] **Step 2:** Run → FAIL → implement → PASS.

### Task 16: Curated content authoring (parallel subagents)

**Files:**
- Create: `src/content/subjects.ts`, `src/content/topics.ts`, `src/content/experiments.ts`, `src/content/collections.ts`, `tests/unit/content-schema.test.ts` (full-data assertions)

**Interfaces:**
- Consumes: schemas from Task 2 (exact types above).
- Produces: 6 subjects, ≥18 topics (with real equations: Newton's second law, ideal gas, quadratic discriminant, etc. — accurate only), ≥15 experiments (safe, home/school materials), 5–6 collections. Each `wikipediaTitle` must be a real Wikipedia article title (capitalization checked against Task 4 live smoke list where possible).

- [ ] **Step 1:** Dispatch 3 parallel subagents (general): (a) subjects+collections+10 topics (physics/chem/math), (b) 8 topics (biology/technology/engineering) + 6 experiments, (c) 9 experiments (physics/chem/bio) — each given the exact schema text and safety rules, told to only create/modify their assigned files/sections.
- [ ] **Step 2:** Run `npx vitest run tests/unit/content-schema.test.ts` → FAIL lists invalid entries; fix content until PASS.
- [ ] **Step 3:** Run `tsc --noEmit` + `eslint src/content` → clean; spot-check 3 topics for factual accuracy; commit `feat(content): curated STEM topics, experiments, collections`.

### Task 17: Project-specific OpenCode skills + Superpowers docs

**Files:**
- Create: `.opencode/skills/{curiowiki-architecture,experiment-content-safety,symmetrical-ui-accessibility,testing-qa}/SKILL.md`
- Modify: existing `.opencode/skills/{stem-api-integrator,api-docs-researcher,api-reliability}/SKILL.md` (only if endpoint details from Task 0 need correcting — e.g., add Tavily/PCS endpoints)
- Create: `AGENTS.md`, `README.md`, `docs/setup.md` (full), `docs/deployment.md`, `docs/superpowers-setup.md`

**Interfaces:**
- Each SKILL.md: frontmatter `name`+`description`, then concise actionable guidance with endpoints/commands drawn from `docs/api-research.md`; skill descriptions follow installed OpenCode format (verified: existing 3 skills use `name`/`description` frontmatter — match it).
- `docs/setup.md`: env var table (origin, server/client, required/optional), Supabase project + Google OAuth steps, YouTube key steps (API enablement, referrer restrictions caveat), Tavily steps, verification commands (smoke scripts), troubleshooting (quota, 429, unconfigured states).
- `docs/deployment.md`: Vercel/other free hosts, build command `npm run build`, env upload, OAuth redirect/authorized domain checklist, cost table (all free tiers; notes where a card is required: Brave optional, none required for chosen default stack).
- `docs/superpowers-setup.md`: project-local plugin via `opencode.json` → `.opencode/vendor/superpowers`; note global install exists at `~/.config/opencode/opencode.json` and was intentionally left untouched.
- `AGENTS.md`: stack, commands, architecture map, conventions (tokens-only styling, adapter rules, content schema, test commands).

- [ ] **Step 1:** Write the four new SKILL.md files + AGENTS/README/docs.
- [ ] **Step 2:** Verify each new skill loads via the `skill` tool (read frontmatter) and `grep -c 'name:'` matches format of existing skills.

### Task 18: E2E tests + full verification + defect fixing

**Files:**
- Create: `playwright.config.ts`, `e2e/{home,search,experiment,nav,responsive,auth-unconfigured}.spec.ts`

**Interfaces:**
- Playwright: `webServer: npm run dev` (port 3100), chromium only, `baseURL: http://localhost:3100`.

- [ ] **Step 1:** Write E2E specs: (1) home loads, 6 subject cards, search submit → `/search?q=`; (2) search `photosynthesis` → Wikipedia section contains a wikipedia.org link; experiments/related sections render or show honest error states (assert not-crash + section presence, tolerate network); (3) navigate Experiments → open first experiment → assert safety section visible + procedure steps >0; (4) topic page navigation from topics list → equations render (`.katex` present); (5) empty search (`/search?q=`) → invalid-query feedback, no crash; (6) responsive: 375px viewport — hamburger visible, desktop nav hidden, no horizontal scroll (`document.documentElement.scrollWidth <= innerWidth`); (7) unconfigured auth: `/signin` shows not-configured state, `/account` redirects to `/signin`; (8) buttons/links audit: every `a[href]` internal resolves to 200 (crawl homepage + nav targets).
- [ ] **Step 2:** Run `npx playwright test` → fix defects until green (reproduce → classify → fix → regression-test per §19 of spec).
- [ ] **Step 3:** Full gate: `npx eslint .` (0 errors), `npx tsc --noEmit`, `npx vitest run`, `npx playwright test`, `npm run build`. Fix all failures; rerun.
- [ ] **Step 4:** Live smoke runs: `npx tsx scripts/smoke-wikipedia.ts` (must PASS); `scripts/smoke-youtube.ts` and web-search smoke (PASS if keys present, else record `SKIPPED: no credentials` honestly).
- [ ] **Step 5:** Manual UI inspection of `/`, `/search?q=newton's+laws`, one topic, one experiment, `/videos`, `/resources` at 1440px/768px/375px — fix visual/symmetry defects (uneven cards, misaligned grids, overflow).
- [ ] **Step 6:** Write `docs/completion-report.md` (features, APIs, test outcomes with actual numbers, verified-vs-unconfigured matrix, limitations, local run instructions) and give the user the chat summary.

## Self-review notes (writing-plans skill)

- Spec coverage: master prompt §3–§20 map to Tasks 1,9,10 (design/home/search UI), 13–14 (auth), 4–8 (APIs/orchestration), 11–12/15/16 (content pages), 0/16/17 (docs/skills), 18 (testing/verification). Deployment/cost → Task 17 `docs/deployment.md`; completion report → Task 18 Step 6.
- Credentials question (YouTube/Tavily/Supabase keys) is raised with the user before Task 18 live-smoke, non-blocking for all other tasks.
