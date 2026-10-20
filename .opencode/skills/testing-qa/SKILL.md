---
name: testing-qa
description: Verify CurioWiki changes with the TDD workflow, unit/integration tests, live smoke scripts, dev-server checks, and the pre-commit gate list.
---

# Testing & QA

## Test layout (Vitest, jsdom)

- `tests/unit/` — pure logic (adapters with mocked fetch, cache, env, schemas) and component tests (Testing Library).
- `tests/integration/` — route handlers and flows with `vi.mock` for `@supabase/ssr`, `next/headers`, `server-only` (importing `src/lib/supabase/server.ts` in tests requires mocking all three).
- `e2e/` — Playwright (`npx playwright test`), dev server on port 3123.

## Workflow: RED → GREEN

1. Write/adjust the failing test first; run it and confirm it fails for the right reason.
2. Implement the minimal change; re-run the single file, then the full suite.
3. Beware: mocking `@supabase/ssr`'s `createServerClient` must return an object whose `auth.getUser` resolves `{data:{user}}`; server client code must not `await import('ws')` (hangs the jsdom runner) — the NoopWebSocket transport is deliberate.

## Live smoke scripts (need `.env.local` keys)

```bash
npx tsx --env-file=.env.local scripts/smoke-wikipedia.ts
npx tsx --env-file=.env.local scripts/smoke-youtube.ts
npx tsx --env-file=.env.local scripts/smoke-web.ts
npm run smoke:wikipedia   # etc.
```

## Dev-server check (manual/agent verification)

```bash
(npm run dev -- --port 3123 > /tmp/opencode/dev.log 2>&1 &)
curl -s -o /dev/null -w "%{http_code}" http://localhost:3123/<path>
fuser -k 3123/tcp   # stop — do not pkill -f 'next dev' (kills the shell tool)
```

Assert status codes, redirect targets, and honest states (unconfigured → EmptyState text, signed-out /account → 307 to `/signin?next=%2Faccount`).

## Pre-commit gate (run all, chained)

```bash
npx tsc --noEmit && npx eslint . && npx vitest run && npm run build
```

All must pass before `git commit`. Never commit `.env.local` (gitignored). For plan-based work, also close the ledger task: `…/executing-plans/scripts/task-done <plan> <n> <base> -- npx vitest run`.
