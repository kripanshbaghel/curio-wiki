# Curio Wiki — Verified API Research

All findings below were gathered from official provider documentation (and live endpoint probes where noted) on 2026-10-19. Anything not verified is marked **UNKNOWN**.

## 1. Wikipedia / MediaWiki (no API key)

### Endpoints used by Curio Wiki
| Purpose | Endpoint | Verified |
|---|---|---|
| Article search | `GET https://en.wikipedia.org/w/rest.php/v1/search/page?q=<query>&limit=<n>` | YES (live-probed) |
| Page summary (intro) | `GET https://en.wikipedia.org/api/rest_v1/page/summary/{title}` | YES (live-probed; note: `/w/rest.php/v1/page/summary/` returns 404 — do NOT use) |
| Related topics | `GET https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=morelike:{title}&srlimit=<n>&format=json&formatversion=2` | YES (live-probed; CirrusSearch feature, https://www.mediawiki.org/wiki/Help:CirrusSearch) |

### Response fields used (Zod schemas mirror these)
- REST search `pages[]`: `id:number`, `key:string`, `title:string`, `excerpt:string` (contains `<span class="searchmatch">` — strip for display), `description:string|null`, `thumbnail: {mimetype, width, height, duration, url}|null` (url may be **protocol-relative** `//upload...` → prefix `https:`). Undocumented `anchor` field present live → schema `.passthrough()` or optional.
- PCS summary: `type` (`standard|disambiguation|no-extract`), `title`, `displaytitle`, `titles.{canonical,normalized,display}`, `pageid:number`, `thumbnail:{source,width,height}|null`, `originalimage` same shape, `description:string|null`, `content_urls.desktop.page`, `content_urls.mobile.page`, `extract:string`, `extract_html:string`. 404 body shape: `{"status":404,"type":"Internal error"}` (differs from general REST error shape).
- Action API errors: often **HTTP 200 with** `{"error":{"code","info","docref"}}`; modern form `{"errors":[{code,text}]}`. Missing page code: `missingtitle`.
- Rate limiting: HTTP **429 with plain-text body** + `Retry-After` behavior documented (https://www.mediawiki.org/wiki/Wikimedia_APIs/Rate_limits): 10 req/min unidentified, 200 req/min with compliant UA, **max 3 concurrent requests**.

### Policy / attribution (binding requirements)
- User-Agent REQUIRED, format `<client>/<version> (<contact>) <lib>/<version>`; generic agents (curl etc.) may get 403. Browser JS must use `Api-User-Agent`. Source: https://foundation.wikimedia.org/wiki/Policy:Wikimedia_Foundation_User-Agent_policy. Our UA: `CurioWiki/1.0 (https://github.com/curiowiki/curiowiki; contact@curiowiki.example)`.
- Content license **CC BY-SA 4.0** → attribution link + license link required wherever extracts shown (https://en.wikipedia.org/wiki/Wikipedia:Reusing_Wikipedia_content); indicate modifications.
- CORS: `Access-Control-Allow-Origin: *` on all three (verified live) — server-side proxy still used for UA + caching + 429 handling.
- Caching: summary endpoint ships `s-maxage=1209600`; our TTL cache 24h is conservative and compliant.

### Official sources
mediawiki.org/wiki/API:Search · API:REST_API/Reference · Page_Content_Service · API:Errors_and_warnings · Manual:CORS · Extension:TextExtracts · Help:CirrusSearch · Wikimedia_APIs/Rate_limits · Wikimedia_APIs/Content_reuse · API:Etiquette · foundation.wikimedia.org User-Agent + API Usage Guidelines policies · en.wikipedia.org Reusing_Wikipedia_content.

## 2. YouTube Data API v3 (API key required, server-side)

- Endpoint: `GET https://www.googleapis.com/youtube/v3/search` — `part` is the only Required param; `q` is Optional (filters). Use `part=snippet&type=video&videoEmbeddable=true&safeSearch=strict&order=relevance&maxResults=1..50 (default 5)&q=...&key=...`.
- Search item: `id.videoId`, `snippet.{publishedAt,channelId,title,description,thumbnails.{default,medium,high,standard,maxres}.{url,width,height},channelTitle,liveBroadcastContent}`, `pageInfo.{totalResults,resultsPerPage}`, `nextPageToken`.
- `videos.list` (`GET /youtube/v3/videos?part=status,contentDetails,snippet&id=a,b,c`): `status.embeddable:boolean`, `status.privacyStatus`, `contentDetails.duration` (ISO-8601), needed because **search.list has no `status`** — 1 quota unit, batches up to 50 ids.
- Quota: `search.list` = **100 calls/day** bucket (1 unit/call); other endpoints share 10,000 units/day; resets midnight Pacific; invalid requests still cost ≥1 unit. Increases require a compliance audit (no purchase). Sources: developers.google.com/youtube/v3/docs/search/list, /videos/list, /youtube/data/getting-started.
- Key handling: system param `key` or `X-Goog-Api-Key`; keep server-side; referrer-restricted keys + localhost behavior **UNKNOWN** (unrestricted or IP-exempt during dev is safest). Docs say do not expose keys client-side.
- Error envelope: `{"error":{"errors":[{"domain","reason","message","locationType","location"}],"code":400,"message":"..."}}`. Codes we classify: `quotaExceeded`(403), `dailyLimitExceeded`(403), `rateLimitExceeded`(403/429), `keyInvalid`(400), `keyExpired`(400), `accessNotConfigured`(403), `missingRequiredParameter`/`invalidParameter`(400), `invalidPageToken`(400), `notFound`(404). **`quotaExhausted` does not exist** — do not use.
- Embedding: `https://www.youtube-nocookie.com/embed/<id>` (privacy mode); owner may disallow embed (player codes 101/150); metadata/thumbnails must be shown unmodified (branding guidelines); no downloading/caching of AV content; **API data may be cached ≤30 calendar days** (Developer Policies §III.E).
- Billing: no official doc requires billing for default quota; Google has publicly stated no cost (semi-official Issue Tracker). Quota increases via audit form, not purchase. "Credit card never needed" = **UNKNOWN/unverified**.

### Official sources
developers.google.com/youtube/v3/docs/{search/list,search,videos/list,videos,errors,core_errors} · /youtube/data/{getting-started,determine_quota_cost} · /youtube/{registering_an_application,iframe_api_reference,player_parameters} · /youtube/terms/{developer-policies,api-services-terms-of-service,branding-guidelines} · support.google.com/youtube/answer/171780 · cloud.google.com/docs/authentication/api-keys.

## 3. General web search

### Selected: Tavily (default) — free tier, no credit card
- 1,000 API credits/month (Researcher plan), explicitly "No credit card required" (tavily.com/pricing).
- Auth: Bearer `TAVILY_API_KEY`. Request shape to confirm at implementation time against docs.tavily.com (`POST https://api.tavily.com/search`) — **exact body fields to be verified against current docs when the adapter is written** (plan Task 6).
- Response: `results[].{title,url,content}` → our `WebSearchResult {title,url,snippet,domain}`.

### Optional alternative: Brave Search API (only if user opts in — requires card)
- `GET https://api.search.brave.com/res/v1/web/search?q=&count=1..20`, header `X-Subscription-Token: <key>`, `Accept: application/json`.
- Free credits: $5/month on Search plan (~1,000 web queries at $5/1k); **credit card required** ("to prevent abuse"). Homepage "$20 free calls" claim unreconciled — treat $5/month as the documented figure.
- Response: `web.results[].{title,url,description,profile,extra_snippets}` (description may contain `<strong>` → strip).

### Rejected options (documented decision)
- Google Programmable Search (100/day free): **closed to new customers**, migration deadline Jan 1 2027 → rejected.
- Bing Web Search API: **retired** → rejected.
- SERP scraping / unofficial DDG libraries: ToS risk → rejected.
- SerpApi free 250/mo: card requirement UNKNOWN → rejected for default stack.
- Wikipedia-as-web-search already covered by the Wikipedia adapter (not a general web index).

### Official sources
brave.com/search/api/ + api-dashboard.search.brave.com/docs · tavily.com/pricing + docs.tavily.com · developers.google.com/custom-search/v1/overview · learn.microsoft.com Bing retirement · serpapi.com/pricing · docs.searxng.org.

## 4. Auth + saved data: Supabase (chosen over Firebase)

- Free plan: **50,000 MAUs**, email/password + social OAuth (Google) + password recovery included, **no credit card** (supabase.com/pricing).
- Client env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (publishable key) — browser-safe; `SUPABASE_SECRET_KEY` server-only if needed.
- Session: `@supabase/ssr` cookie-based client with refresh in middleware; JWTs + refresh tokens documented (supabase.com/docs/guides/auth/sessions).
- Per-user rows: **RLS** `using ((select auth.uid()) = user_id)` + `with check` (supabase.com/docs/guides/database/row-level-security).
- Email recovery: `resetPasswordForEmail({redirectTo})` + `/reset-password` page; default SMTP 2 emails/hour (supabase.com/docs/guides/auth/passwords).
- Google OAuth setup: enable Google provider in dashboard, add authorized redirect URI `https://<ref>.supabase.co/auth/v1/callback`, client id/secret from Google Cloud console, site URL for `redirectTo`.
- Firebase Spark also card-free (50K MAUs) but row protection would need Firestore Security Rules (second system) → Supabase selected.
- Local verification: no Docker on this machine → Supabase local stack unavailable; live auth verification needs the user's project credentials. Status: **pending user credentials**.

### Official sources
supabase.com/pricing · /docs/guides/auth · /docs/guides/auth/passwords · /docs/guides/auth/sessions · /docs/guides/database/row-level-security · firebase.google.com/pricing (comparison only).

## 5. Zero-cost assessment (chosen default stack)

| Service | Cost | Card required | Status |
|---|---|---|---|
| Wikipedia MediaWiki | Free (no key) | No | Verified live |
| YouTube Data API v3 | Free default quota (100 searches/day) | Not documented as required | Key pending from user |
| Tavily | Free 1,000/mo | **No** | Key pending from user |
| Brave (optional) | Free ~1,000/mo credits | **Yes** | Not activated by default |
| Supabase (auth + Postgres) | Free 50K MAU | No | Project pending from user |
| Hosting (Vercel/Netlify/Render free tiers) | Free | No | Deployment not performed |

## 6. Open items (UNKNOWN / pending)

1. Tavily exact current request/response field names — verify from docs.tavily.com at adapter implementation (Task 6).
2. YouTube referrer-restricted key behavior on localhost (avoid referrer restrictions in dev).
3. Brave "$20 free calls" claim vs $5/month documented credit.
4. Live credentials: `YOUTUBE_API_KEY`, `TAVILY_API_KEY`, Supabase URL/anon key — user to provide during build.
