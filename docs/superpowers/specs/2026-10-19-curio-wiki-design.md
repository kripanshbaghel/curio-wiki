# Curio Wiki — Design Document

**Date:** 2026-10-19
**Source spec:** the Curio Wiki master prompt (user-provided, October 2026) plus verified API research in `docs/api-research.md`.
**Status:** approved for implementation by direct user instruction ("Produce a brief implementation plan, then begin development").

## 1. Intent and why

Curio Wiki is a STEM educational discovery platform: search first, then browse subjects, topics, experiments, and educational videos. Organization is inspired by PhET's subject browsing and resource discovery; visual quality must be materially better. The overriding requirement is **genuinely working functionality** — real API integrations, real auth, real search — not decorative UI.

## 2. Goals

- Real unified search across Wikipedia (keyless), YouTube Data API v3 (key), general web search (Tavily key, Brave optional), and a curated local library of topics/experiments, with independent per-source failure handling.
- Real authentication (Supabase: email/password + Google OAuth + recovery) and per-user saved resources protected by RLS.
- Polished, strictly symmetrical, responsive design driven by explicit design tokens.
- Curated, safe, honest experiment content with safety annotations and source references.
- Project-local OpenCode skills + Superpowers plugin, documented; no global config changes.
- Tests: unit (validation/normalization/parsing/classification), integration (adapters with mocked HTTP, orchestrator partial failures, routes), E2E (Playwright), plus live smoke tests where credentials exist.

## 3. Non-goals / anti-goals

- No simulations, no PhET branding/assets/layout copying.
- No fake data presented as live results; no decorative controls; no invented statistics/popularity claims.
- No scraping of search-engine SERPs; no paid services activated.
- No global OpenCode config changes; superpowers global install stays untouched.
- No claiming "tested" for physical experiments or "deployed" for hosting.

## 4. Constraints

- Free-tier only; billing/credit-card services only with explicit user approval (Tavily and Brave both offer card-free sign-up paths documented; Supabase free needs no card).
- Secrets server-side only; `.env.example` documents everything; no credentials committed.
- Wikipedia attribution: link + CC BY-SA 4.0 notice wherever Wikipedia text is shown; compliant `User-Agent` header server-side.
- YouTube: cache API data ≤30 days; keys server-side; show metadata unmodified.
- Experiments must be safe for students; adult-supervision flags where needed; no hazardous mixtures/fire/explosives.

## 5. Decisions (how)

### Stack
- **Next.js 15.5.x (App Router, TypeScript, src dir), React 19, Tailwind CSS v4, Vitest 5, Playwright 1.64, Zod 4.**
- Custom component system in `src/components/ui` (Button, Card, Input, Badge, Skeleton, etc.) instead of shadcn/ui CLI: fewer deps, full control of symmetry tokens, no generation-time surprises. Documented as a deliberate deviation from the spec's "such as shadcn/ui".
- Fonts: `@fontsource-variable/inter` (self-hosted, no build-time network).
- Math: `katex` rendered server-side with `output: 'htmlAndMathml'` for accessible notation.
- Icons: `lucide-react`.
- HTTP: native `fetch` + a shared timeout/retry helper (no axios).

### Auth: Supabase (chosen over Firebase)
Verified: 50k MAUs free, Google OAuth + email/password + recovery included on free plan, no credit card, RLS gives per-user row protection in the same Postgres (`auth.uid() = user_id`). Firebase Spark is also card-free, but row protection would need Firestore Security Rules — a second system. Session handling via `@supabase/ssr` (cookie-based) + middleware refresh.
**Limitation:** no Docker on this machine ⇒ no local Supabase stack; live auth verification requires the user's Supabase project credentials. Without config, auth UI shows an honest "not configured" state (never a fake form).

### Web search: Tavily primary, Brave optional
Verified: Tavily = 1,000 credits/month free, **no credit card**, Bearer auth, returns `title/url/content`. Brave = ~1,000 queries/month on $5 credits but **requires a card** ⇒ implemented as an optional alternative adapter (`X-Subscription-Token`), never activated implicitly. If neither key present, the web section returns a classified `config` error shown honestly in its own section.

### Wikipedia: MediaWiki REST + Page Content Service
- Search: `GET https://en.wikipedia.org/w/rest.php/v1/search/page?q&limit` (fields: `key,title,excerpt,description,thumbnail.url`…).
- Summary: `GET https://en.wikipedia.org/api/rest_v1/page/summary/{title}` (fields: `extract,description,thumbnail.source,content_urls.desktop.page,type,titles`).
- Related: Action API `list=search&srsearch=morelike:{title}` (documented CirrusSearch feature; no dedicated related-topics endpoint exists — verified negative).
- Server-side only, compliant `User-Agent: CurioWiki/1.0 (https://curiowiki.example; dev@example.org)`, timeout 8s, ≤3 concurrent, TTL cache 24h.
- Zod schemas mirror live-verified fields; error shapes handled (Action API HTTP-200-with-error, PCS `{status,type}`, REST `messageTranslations`, HTTP 429 plain-text).

### YouTube Data API v3
- `search.list` with `part=snippet&type=video&videoEmbeddable=true&maxResults≤12&safeSearch=strict&order=relevance`; then one batched `videos.list?part=status,contentDetails` (1 unit) to verify availability/embeddable/duration.
- Key `YOUTUBE_API_KEY` server-side; Zod-validate; classify `quotaExceeded|dailyLimitExceeded|rateLimitExceeded` (403/429) vs `keyInvalid|accessNotConfigured` (400/403) vs network.
- TTL cache 6h (≤30-day policy respected), in-memory, dedupe in-flight requests. Quota-conscious: one search per query per cache window.

### Unified search orchestration
- `runUnifiedSearch(q, { only? })` runs sources concurrently with `Promise.allSettled`, each wrapped → `SourceResult` with classified error. Sections: topic overview (local), experiments (local), related topics (local), wikipedia, related-wikipedia, youtube, web.
- Partial failure: any subset may fail; UI renders each section independently with its own empty/error/retry state. Retry via `?only=wikipedia` on the same route.
- Query validation: trim, collapse whitespace, 2–200 chars, reject control chars.

### Content model (curated, local, authored)
- 6 subjects; ~18 topics (summary, key concepts, equations w/ variables, related experiments, `wikipediaTitle`); ~15 experiments (objective, concept, materials, procedure, observations, explanation, safety[], sources[], supervision level); 5–6 collections.
- Validation tests enforce schema + safety invariants (every experiment has safety warnings; forbidden hazardous-substance list; every `wikipediaTitle`/URL well-formed).
- Content is labeled "CurioWiki editorial selection" — never as popularity data.

### Design system (symmetry as a hard requirement)
- CSS variables in `globals.css` mapped through Tailwind v4 `@theme`: color (ink/surface/border/primary + 6 muted subject accents), type scale, spacing scale, radii, shadows, `--container: 72rem`.
- Every page = centered container, balanced gutters, CSS Grid/Flex only (no absolute positioning for structure), equal-height cards (`grid-auto-rows: 1fr` / flex stretch), uniform card padding/gaps (token values only), consistent section headers.
- Light/dark via `data-theme` + `prefers-color-scheme` default, persisted toggle.

### Routes
`/` home · `/search?q=` · `/topics` · `/topics/[slug]` · `/experiments` · `/experiments/[slug]` · `/subjects/[slug]` · `/videos` (YouTube search) · `/videos/[id]` (embed) · `/resources` (curated reputable links) · `/signin` `/signup` `/forgot-password` `/reset-password` `/auth/callback` · `/account` (saved) · API: `GET /api/search?q&only=`.

### Saved resources
Postgres table `saved_resources(user_id, resource_type, resource_id, title, url, created_at)` + RLS (all ops `auth.uid() = user_id`). Migration SQL in `supabase/migrations/`. When Supabase unconfigured: save controls are not rendered (no dead buttons) and `/account` shows the setup state.

## 6. What's left to the builder

Execute `docs/superpowers/plans/2026-10-19-curio-wiki.md` task-by-task (native execution with parallel subagents for content/skills), then verify per §18 of the master prompt and write the completion report.
