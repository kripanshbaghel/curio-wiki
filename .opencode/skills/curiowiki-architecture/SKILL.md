---
name: curiowiki-architecture
description: Navigate CurioWiki's Next.js 15 codebase — directory map, server adapters, orchestrator, content pipeline, Supabase auth, and the commands that verify changes.
---

# CurioWiki Architecture

Follow the existing structure; do not introduce parallel patterns.

## Stack

- Next.js 15 App Router (src/ dir), React 19, TypeScript strict, Tailwind CSS v4 (tokens in `src/app/globals.css`), Zod 4, Vitest 5 (jsdom), Playwright (e2e/), Supabase via `@supabase/ssr`.
- Package scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run test` (vitest), `npm run smoke:wikipedia|youtube|web` (live adapter checks, `npx tsx --env-file=.env.local`).

## Directory map

- `src/lib/config/env.ts` — Zod-parsed env (`getServerEnv`, `isSupabaseConfigured`). Never read `process.env` ad hoc elsewhere.
- `src/lib/adapters/{wikipedia,youtube,web}.ts` — one server-side provider per file; Zod response schemas in `*.schemas.ts`; throw `ProviderError` (see `src/lib/errors.ts`); classify HTTP failures with `classifyHttpError`.
- `src/lib/search/{orchestrator,normalize,types,schema}.ts` — `runUnifiedSearch` runs local content + network sources, each wrapped in a `SourceResult` (`status: 'ok' | 'empty' | 'error' | 'not_configured'`) so one provider failing never breaks the page.
- `src/lib/http.ts` — timeout + bounded retry shared by adapters. `src/lib/cache.ts` — in-memory TTL cache.
- `src/app/api/search/route.ts` — thin validation (`src/lib/search/schema.ts`) + rate limit (`src/lib/ratelimit.ts`) over the orchestrator; supports `&only=<sourceId>` for per-section retry.
- `src/content/*` — curated data. `types.ts` + `schema.ts` define Zod schemas; seed files (`topics-*.ts`, `experiments-*.ts`, `collections.ts`, `subjects.ts`) are parsed by `parseContent` at module load, so invalid content fails tests/build. `topics.ts`/`experiments.ts` are aggregators — edit the seed files, not the aggregators.
- `src/lib/supabase/*` — `client.ts` (browser), `server.ts` (`createSupabaseServerClient`, `requireUser`, `getOptionalUser`), `middleware.ts` (session refresh; `src/middleware.ts` re-exports). Realtime transport is a NoopWebSocket stub — do not remove (Node 20 has no native WebSocket and tests hang if `ws` is imported).
- `src/lib/saved/*` + `src/app/api/saved/route.ts` + `supabase/migrations/` — per-user saved items, RLS-scoped.
- `src/app/*` pages; `src/components/{ui,layout,home,search,topic,experiment,video,saved,auth}` — ui/ is the hand-rolled kit (no shadcn).

## Conventions

- Styling uses design tokens (`--c-physics` … mapped to `text-physics` etc.); never hard-code hex in components; dynamic class construction like `text-[var(--c-${x})]` does not compile — use a literal class map.
- Every network result must carry its source/attribution; unconfigured providers render honest EmptyState, never fake data.
- Secrets server-side only. `NEXT_PUBLIC_*` only for Supabase URL/anon key/site URL.
- Check with `npx tsc --noEmit && npx eslint . && npx vitest run` before committing.
