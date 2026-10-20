# Curio Wiki — Setup Guide

> Complete: environment variables, Supabase + Google OAuth, YouTube, Tavily,
> verification commands, and troubleshooting.

## Open configuration items (from `docs/api-research.md` §6)

1. Tavily exact request/response field names — verify from https://docs.tavily.com at adapter implementation.
2. YouTube API key: do NOT set referrer restrictions during localhost dev (behavior UNKNOWN); use an unrestricted key or IP-free key for development.
3. Brave "$20 free calls" claim vs documented $5/month credit — not reconciled; Brave remains optional and card-gated.
4. Credentials pending from the user during the build: `YOUTUBE_API_KEY`, `TAVILY_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. YouTube billing: no official doc requires billing for default quota, but "no card ever needed" is unverified (semi-official Google statement only). Do not promise free-forever in user-facing copy.
6. Closed questions (NOT TODOs — final decisions recorded in `docs/api-research.md` §3): SerpApi rejected (card requirement unknown), Brave card-gated so optional only, Google Programmable Search closed to new customers, Bing API retired.

## Environment variables (final list — see `.env.example`)

| Variable | Where required | Purpose |
|---|---|---|
| `YOUTUBE_API_KEY` | server only | YouTube Data API v3 video search/metadata |
| `TAVILY_API_KEY` | server only | Tavily web search (default web provider) |
| `BRAVE_SEARCH_API_KEY` | server only | Optional alternative web provider (requires card to obtain) |
| `NEXT_PUBLIC_SUPABASE_URL` | public (browser) | Supabase project URL for auth |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | public (browser) | Supabase publishable/anon key (RLS-protected) |
| `SUPABASE_SECRET_KEY` | server only | Optional; server-side admin operations |
| `NEXT_PUBLIC_SITE_URL` | public | Canonical site URL for OAuth redirects (default `http://localhost:3000`) |

## Supabase: project, auth, and Google OAuth

### 1. Create the project

1. https://supabase.com/dashboard → **New project** (free tier, no card).
2. **Project Settings → API** → copy the **Project URL** into
   `NEXT_PUBLIC_SUPABASE_URL` and the **Publishable (anon) key** into
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.
   - Use the base URL only (`https://<ref>.supabase.co`) — never append
     `/rest/v1/` or other paths.

### 2. Email/password auth

Enabled by default (Supabase Auth). Sign-up confirmation is on by default:
until the email is confirmed, `signInWithPassword` fails with
`email not confirmed` — the sign-in form maps this to a friendly message.

### 3. Google OAuth (optional)

1. https://console.cloud.google.com/ → new project → **APIs & Services →
   Credentials → Create credentials → OAuth client ID** → type **Web
   application**.
2. Authorized redirect URI (Supabase's callback, not the app):
   `https://<project-ref>.supabase.co/auth/v1/callback`
3. Supabase dashboard → **Authentication → Providers → Google** → enable →
   paste client ID + secret → Save.
4. **Authentication → URL Configuration**:
   - Site URL: `http://localhost:3000` in dev (or your deployed origin —
     matches `NEXT_PUBLIC_SITE_URL`).
   - Redirect URLs: add `http://localhost:3000/auth/callback` and, when
     deployed, `https://<your-domain>/auth/callback`.
5. Authorized domains (Supabase **Authentication → URL Configuration →
   Authorized domains**) must include `localhost` for local sign-in emails
   (password reset links) to be deliverable; add your production domain for
   deployed use.

The app always sends `redirectTo` values of the form
`<origin>/auth/callback` (OAuth) and `<origin>/reset-password` (recovery),
where `<origin>` is `NEXT_PUBLIC_SITE_URL`/`window.location.origin`.
`/auth/callback` exchanges the `code` for a session and then redirects to
`next` (internal paths only — open-redirect safe).

### 4. `saved_resources` table (used by Task 14+)

Run `supabase/migrations/20261019000001_saved_resources.sql` in the SQL
editor (Dashboard → SQL Editor → New query → paste → Run), or via the CLI:
`supabase db push`. The migration creates `public.saved_resources` with
row-level security so each user can only read/write their own rows
(`auth.uid() = user_id`). Without the table, saved-item API calls fail
honestly with a database error — the rest of the site is unaffected.

### 5. Verify auth wiring

```bash
# After setting NEXT_PUBLIC_SUPABASE_URL / ANON_KEY in .env.local:
npm run dev
# /signin renders the real form (not the "not configured" state)
# /account (signed out) → redirects to /signin?next=%2Faccount
```

## YouTube Data API v3

1. https://console.cloud.google.com/ → **New project** (or pick one).
2. **APIs & Services → Library** → search "YouTube Data API v3" → **Enable**.
3. **APIs & Services → Credentials → Create credentials → API key** → copy into
   `YOUTUBE_API_KEY` (server-side only; never `NEXT_PUBLIC_*`).
4. **Referrer restrictions caveat:** during localhost development do NOT apply
   HTTP-referrer restrictions — their localhost behaviour is undocumented and
   commonly breaks. Restrict the key in production (by referrer for the
   server-rendered origin, or by IP if you know it). An unrestricted key is
   acceptable while the quota stays on the free tier.
5. Quota: default 10,000 units/day. CurioWiki's search uses `search.list`
   (100 units per call) + one batched `videos.list` (1 unit) per query —
   roughly 100 searches/day. Without the key, `/videos` and the video search
   section show an honest "YouTube API key not configured" state.

## Tavily web search (default web provider)

1. https://tavily.com → sign up (no credit card) → copy the API key into
   `TAVILY_API_KEY` (server-side only).
2. Free tier: 1,000 "basic" credits/month; CurioWiki always sends
   `search_depth: "basic"` and `include_answer: false` to stay at 1 credit
   per search.
3. Auth is the `Authorization: Bearer` header (older guides showing an
   `api_key` JSON field are outdated). Without Tavily **and** without the
   optional Brave key, the web results section shows a classified
   "not configured" error.

## Verification commands

```bash
# Unit + integration tests (no network needed)
npx vitest run

# Typecheck + lint
npx tsc --noEmit && npx eslint .

# Production build (also runs content schema validation)
npm run build

# Live adapter smoke tests (require .env.local keys)
npm run smoke:wikipedia
npm run smoke:youtube
npm run smoke:web

# E2E (starts its own dev server on port 3123)
npx playwright test
```

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Section says "not configured" | Matching key missing in `.env.local` — see the section above; restart the dev server after editing env files. |
| YouTube `quotaExceeded` / HTTP 403 | Daily quota exhausted or key restrictions blocking the request — check Cloud Console quota page; restrictions off in dev. |
| Tavily HTTP 401 | Invalid key (must start with the value Tavily issued; sent as `Authorization: Bearer`). |
| Tavily HTTP 429 / 432 / 433 | Rate limit (retry later) or monthly credit quota exhausted — wait for reset or upgrade. |
| 429 from `/api/search` | Built-in in-memory rate limit: 30 requests/min/IP in dev. |
| Web section empty but key set | All results failed the safe-URL filter — try a different query; the section would otherwise show a "failed" notice, not silence. |
| `/signin` shows "not configured" | `NEXT_PUBLIC_SUPABASE_URL`/`ANON_KEY` unset or incomplete (URL must be the base URL, no `/rest/v1/` path). |
| Sign-in fails "email not confirmed" | Confirm the address from the Supabase auth email first. |
| Password-reset email never arrives | Add `localhost` to Supabase **Authentication → URL Configuration → Authorized domains**. |
| `/account` saved list shows setup state | `saved_resources` migration not applied — run `supabase/migrations/20261019000001_saved_resources.sql` (see Supabase §4). |
| Build fails with "Invalid … content" | A seed file violates the content schema — the message lists file, index, and field; fix the entry (rules in `.opencode/skills/experiment-content-safety`). |
| Tests hang on Supabase imports | Never add `await import('ws')` to server code — the NoopWebSocket transport exists for Node 20/test compatibility. |
