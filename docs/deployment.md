# Curio Wiki — Deployment

All runtime services have free tiers; the default stack needs **no credit card**
(the only card-gated option in the codebase, Brave Search, is optional and off
by default).

## Recommended: Vercel (free Hobby tier)

1. Push the repository to GitHub/GitLab/Bitbucket and import it at
   https://vercel.com/new (Hobby tier, no card).
2. Framework preset: **Next.js** — defaults are correct.
   - Build command: `npm run build` (default)
   - Output: managed by the Next.js plugin (default)
3. Add the environment variables from `.env.example` in
   **Project → Settings → Environment Variables** (Production + Preview):
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
     `NEXT_PUBLIC_SITE_URL` (your real origin, e.g. `https://your-app.vercel.app`)
   - `YOUTUBE_API_KEY`, `TAVILY_API_KEY` (server-side)
4. Deploy, then update Supabase URLs (below) and re-deploy if you changed env.

Any other Node host works too (Fly.io, Render, a VPS): Node ≥ 20, build
`npm run build`, start `npm start`, set the same env vars.

## Post-deploy checklist (Supabase + OAuth)

- [ ] Supabase **Authentication → URL Configuration → Site URL** = production origin
- [ ] Supabase **Redirect URLs** include `https://<your-domain>/auth/callback`
- [ ] Supabase **Authorized domains** includes your production domain (password-reset emails)
- [ ] Google OAuth (if enabled): redirect URI `https://<ref>.supabase.co/auth/v1/callback`
- [ ] `saved_resources` migration applied (`supabase db push` or SQL editor)
- [ ] `NEXT_PUBLIC_SITE_URL` = production origin (used in OAuth `redirectTo`)
- [ ] Smoke: `/signin` renders the form, `/account` signed-out → `/signin?next=%2Faccount`,
      `/search?q=photosynthesis` shows live sources

## Cost table (free tiers)

| Service | Free tier | Card required? | Notes |
|---|---|---|---|
| Vercel Hobby | personal projects, no hard CPU cap | No | commercial use not allowed on Hobby |
| Supabase Free | 50,000 MAUs, 500 MB DB | No | auth + Postgres/RLS |
| YouTube Data API v3 | 10,000 units/day | No* | *billing enablement not required for default quota; "free forever" not promised |
| Tavily | 1,000 basic credits/month | No | default web provider |
| Brave Search | $5/month equivalent credit | **Yes** | optional fallback only — leave unset if you have no card |
| Wikipedia (MediaWiki + PCS) | keyless | No | attribution required (CC BY-SA) |

## Security notes

- `.env.local` and `.env*` are gitignored; `.env.example` is the committed template. Never commit keys.
- Supabase anon key is public-by-design; row protection comes from RLS (`auth.uid() = user_id`).
- YouTube/Tavily keys are read only in server code (route handlers, server components, adapters) — never in client components.
- In production, restrict the YouTube key (referrer/IP) per `docs/setup.md`.
