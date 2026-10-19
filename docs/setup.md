# Curio Wiki — Setup Guide

> Status: STUB — full setup instructions land in Task 17 (`.env.example`, Supabase/Google OAuth/YouTube/Tavily steps, verification commands).

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
