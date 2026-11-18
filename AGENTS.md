# AGENTS.md — CurioWiki

Curio Wiki is a symmetrical STEM learning platform: real Wikipedia/YouTube/web search, real Supabase auth with RLS-protected saved items, and curated local topics/experiments/subjects — all on free tiers.

## Stack

Next.js 15 (App Router, `src/`), React 19, TypeScript strict, Tailwind CSS v4 (design tokens in `src/app/globals.css`), Zod 4, Vitest 5 + Testing Library (jsdom), Playwright (`e2e/`), `@supabase/ssr`, KaTeX, lucide-react, tsx (smoke scripts).

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | dev server (use `-- --port 3123` for checks; stop with `fuser -k 3123/tcp`) |
| `npm run build` | production build (content `parseContent` runs here) |
| `npm run lint` | ESLint |
| `npx vitest run` | full test suite |
| `npx tsc --noEmit` | typecheck |
| `npm run smoke:wikipedia \| smoke:youtube \| smoke:web` | live adapter checks |
| `npx playwright test` | e2e |

Pre-commit gate: `npx tsc --noEmit && npx eslint . && npx vitest run && npm run build` — all green before any commit.

## Architecture map

- **Adapters** (`src/lib/adapters/*.ts` + `*.schemas.ts`): one provider each — Wikipedia (keyless MediaWiki search + PCS summary + `morelike`), YouTube (`search.list` + batched `videos.list`, `X-Goog-Api-Key`), web (Tavily default via `Authorization: Bearer` + `POST https://api.tavily.com/search`, Brave fallback). Zod-validate every response; throw `ProviderError`; classify HTTP errors via `classifyHttpError`.
- **Orchestrator** (`src/lib/search/orchestrator.ts`): runs local content + network sources; each returns a `SourceResult` (`ok | empty | error | not_configured`) so partial failures degrade honestly. API route `GET /api/search?q=&only=` adds validation + in-memory rate limit (30/min/IP) and per-section retry.
- **Content** (`src/content/`): types + Zod schemas in `types.ts`/`schema.ts`; seed files are owned per subject group and aggregated by `topics.ts`/`experiments.ts`. `parseContent` runs at module load → invalid content fails tests/build. Cross-references (topic ↔ experiment ↔ collection) are asserted in `tests/unit/content-schema.test.ts`.
- **Auth/saved** (`src/lib/supabase/`, `src/app/api/saved/`, `src/app/account/`): `requireUser()`/`getOptionalUser()`; middleware refreshes sessions on `/account` and `/auth/*`; RLS migration in `supabase/migrations/`. Realtime transport is a NoopWebSocket stub (Node 20/test compatibility — keep it).
- **Pages**: `/`, `/search`, `/topics(/slug)`, `/experiments(/slug)`, `/subjects/slug`, `/videos(/id)`, `/resources`, `/signin|signup|forgot-password|reset-password`, `/account`.

## Conventions

- **Styling**: semantic design tokens only (no hex in components); subject accents via literal class maps (`text-physics` … — dynamic `text-[var(--c-${x})]` does not work); shared kit in `src/components/ui`; page width via `Container`.
- **Honesty rules**: never present fake data as live; unconfigured providers render EmptyState naming the missing key; every external result carries source/attribution; experiment pages always render `SafetyNotice` plus the "editorial selection" note.
- **Secrets**: server-side only; `.env.local` is gitignored; `.env.example` is the committed template.
- **Tests**: RED first, then GREEN; mock `@supabase/ssr` + `next/headers` + `server-only` in tests that touch server auth code.
- **Skills**: project skills in `.opencode/skills/` (see `docs/superpowers-setup.md`).

## Temporary research data lifecycle

CurioWiki supports hybrid topic discovery: curated topics plus live results from Wikipedia, YouTube, and web search. Externally discovered topics are treated as **temporary research data** and are never permanently stored.

### What is temporary
- Wikipedia search results, summaries, and related articles fetched during a search session.
- YouTube video search results fetched during a search session.
- Web search results (Tavily/Brave) fetched during a search session.
- Any data stored via `POST /api/research/store` keyed by a session ID.

### What is permanently retained
- Curated topic data in `src/content/topics-*.ts`.
- Curated experiment data in `src/content/experiments-*.ts`.
- User accounts, authentication information, and user-saved items (Supabase RLS-protected).
- All permanent user data.

### Session-scoped caching
- Research data is stored in an in-memory `Map` keyed by session ID (`src/lib/research.ts`).
- Each entry has a TTL (default 30 minutes) and an inactivity timeout (default 10 minutes).
- Accessing an entry refreshes its last-accessed timestamp.
- Memory is bounded at 1000 entries; oldest entries are evicted when full.

### Inactivity expiration
- Entries are removed if not accessed for 10 minutes.
- Expiration is checked on every `getResearch` call and via the cleanup sweep.

### TTL cleanup sweep
- `POST /api/research/cleanup` removes all expired and inactive entries.
- Can be called on a schedule (cron) to sweep the store.

### "Finish researching"
- `DELETE /api/research/[sessionId]` explicitly removes a session's temporary research data.
- This is real server-side cleanup: the entry is deleted from the in-memory store.
- Only temporary research data is deleted; curated topics, user accounts, and saved items are never affected.

### API routes
- `POST /api/research/store` — store temporary research data with a session ID.
- `GET /api/research/[sessionId]` — retrieve temporary research data (expired/inactive entries are removed on read).
- `DELETE /api/research/[sessionId]` — finish researching: delete the session's temporary data.
- `POST /api/research/cleanup` — sweep all expired and inactive entries.
