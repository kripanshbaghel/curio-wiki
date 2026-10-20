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
