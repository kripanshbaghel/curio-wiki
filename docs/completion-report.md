# Curio Wiki — Completion Report

Built per `docs/superpowers/plans/2026-10-19-curio-wiki.md` (18 tasks, TDD, staged commits).

## What was built

- **Symmetrical STEM search** (`/search?q=…`) across five sources in one request: curated local content (topics + experiments), Wikipedia (MediaWiki search + Page Content Service summary + `morelike` related), YouTube Data API v3 (strict safeSearch, `youtube-nocookie` embeds), and web search (Tavily default, Brave fallback). Each section degrades independently with retry — one provider failing never blanks the page.
- **Curated catalog** (content is local, always available, no keys): 21 topics, 18 experiments, 6 collections, 6 subjects. Topics include Zod-validated equations rendered with KaTeX; every experiment page carries a prominent safety notice, materials list, and the "editorial selection, not classroom procedure" note.
- **Real Supabase auth** with email/password, magic link, OAuth, forgot/reset flows, and RLS-protected saved items (`/api/saved`, `/account` Save buttons on topics/experiments/videos).
- **Pages**: `/`, `/search`, `/topics(/slug)`, `/experiments(/slug)`, `/subjects/slug`, `/videos(/id)`, `/resources`, `/signin|signup|forgot-password|reset-password`, `/account`.
- **7 project skills** in `.opencode/skills/` (architecture, content safety, UI/a11y, testing, API integrations ×3).

## Live APIs (verified with real keys, server-side only)

| Provider | Endpoint | Auth | Status |
|---|---|---|---|
| Wikipedia | `action=query` search + PCS `/page/summary` + `morelike` | none (keyless) | ALL PASS |
| YouTube | `youtube/v3:search` + `videos` (batched) | `X-Goog-Api-Key` | PASS |
| Tavily | `api.tavily.com/search` | `Authorization: Bearer` | PASS |
| Brave | `api.search.brave.com/res/v1/web/search` | `X-Subscription-Token` | implemented, fallback (not exercised live) |
| Supabase | Auth + Postgres RLS | anon key + RLS | migration verified; runs unconfigured in CI |

## Test outcomes (actual numbers, final run)

| Layer | Result |
|---|---|
| ESLint | 0 errors |
| `tsc --noEmit` | clean |
| Vitest (unit + integration) | **146 passed / 24 files** |
| Playwright E2E (chromium, live network) | **9 passed / 6 specs** |
| `npm run build` | success |
| Live smokes (`scripts/smoke-*.ts`) | Wikipedia ALL PASS · YouTube PASS · Web ALL PASS |
| Responsive overflow audit (6 pages × 1440/768/375px) | 18/18 PASS |

E2E covers: home + search submit, full cross-source search (photosynthesis), experiment safety/procedure, topics→topic→KaTeX→live Wikipedia panel, empty-search feedback, 375px hamburger menu, unconfigured auth states, internal-link crawl.

## Verified vs unconfigured matrix

| Capability | With keys | Without keys |
|---|---|---|
| Local topics/experiments/collections | always works | always works |
| Wikipedia | live results + attribution | honest error state in section |
| YouTube | live search + nocookie embeds | honest "not configured" state naming the missing key |
| Web search | Tavily (or Brave) live results | honest "not configured" state naming the missing key |
| Auth / saved items | real Supabase + RLS | `/signin` shows setup EmptyState; `/account` redirects to `/signin` |

Nothing fake is ever presented as live data.

## Defects found by E2E and fixed

1. `/search` had no `h1` (a11y) → added `sr-only` results heading.
2. `/account` rendered an EmptyState when Supabase was unconfigured instead of redirecting → now `redirect('/signin')` (which shows the honest setup state).
3. `WikipediaPanel` hid its heading on fetch failure → heading now always renders.
4. Three spec locator bugs (strict-mode violations, hamburger label flip) → exact names + stable locators.

## Limitations

- Brave Search fallback is implemented and unit-tested but not live-exercised (Tavily key provided).
- Realtime channel intentionally stubbed with a `NoopWebSocket` (Node 20 + jsdom compatibility); saves are request/response only — no live cross-tab sync.
- E2E runs chromium only (fast free-tier CI); no Firefox/WebKit projects configured.
- Rate limiting is per-instance in-memory (resets on serverless cold start).

## Run it locally

```bash
npm install
cp .env.example .env.local   # optional keys — everything works without them
npm run dev                  # http://localhost:3000
npx vitest run               # unit + integration
npx playwright test          # e2e (starts its own dev server on :3100)
npm run smoke:wikipedia      # live adapter checks (add --env-file=.env.local for keyed ones)
```

Full setup, Supabase migration, OAuth, and troubleshooting: `docs/setup.md`. Deployment notes: `docs/deployment.md`.
