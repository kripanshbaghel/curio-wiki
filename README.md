# Curio Wiki

A symmetrical STEM learning platform for students: curated topics and safe experiments, plus real live search across Wikipedia, YouTube, and the open web — with accounts and saved items, all on free tiers.

- **Search** (`/search`) — one query fans out to Wikipedia (keyless), YouTube (privacy-enhanced embeds), and Tavily web results, alongside CurioWiki's own topics and experiments. Each section can fail or be unconfigured independently without breaking the page.
- **Learn** (`/topics`, `/experiments`, `/subjects`) — 21 curated topics with real KaTeX equations, 18 safety-reviewed experiments with supervision banners, and six subject collections.
- **Watch** (`/videos`) — YouTube search with `youtube-nocookie` embeds and honest fallbacks when embedding is disabled.
- **Resources** (`/resources`) — curated links to reputable educational organizations.
- **Accounts** (`/signin`, `/account`) — Supabase email/password + Google OAuth; per-user saved items protected by Postgres RLS.

## Quick start

```bash
cp .env.example .env.local   # add keys — see docs/setup.md
npm install
npm run dev                  # http://localhost:3000
```

Without keys the site still works: local content renders, and each external section shows an honest "not configured" state.

## Verify

```bash
npx tsc --noEmit && npx eslint . && npx vitest run   # 146+ tests
npm run build
npm run smoke:wikipedia                               # live adapter checks
npx playwright test                                   # e2e (starts dev server on :3123)
```

## Docs

- `docs/setup.md` — environment variables, Supabase/Google OAuth/YouTube/Tavily setup, verification, troubleshooting
- `docs/deployment.md` — Vercel (or any Node host), env upload, OAuth redirect checklist, cost table
- `docs/api-research.md` — verified endpoint/auth/quota research for every provider
- `AGENTS.md` — architecture map and conventions for AI contributors
- `docs/superpowers-setup.md` — project-local OpenCode skills/plugins

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Zod · Vitest + Playwright · Supabase (`@supabase/ssr`) · KaTeX
