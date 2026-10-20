---
name: stem-api-integrator
description: Implement and maintain CurioWiki external search integrations (Wikipedia MediaWiki API, YouTube Data API v3, Tavily web search default, Brave fallback) with modular providers and a consistent result structure.
---

# STEM API Integrator

Implement and maintain CurioWiki's real external API integrations. Do not redesign unrelated features. Before coding, inspect CurioWiki's actual framework and architecture. Do not assume an unverified stack, invent response fields, or expose credentials.

Official documentation:

- MediaWiki search: https://www.mediawiki.org/wiki/API:Search
- MediaWiki REST reference: https://www.mediawiki.org/wiki/API:REST_API/Reference
- YouTube search.list: https://developers.google.com/youtube/v3/docs/search/list
- Tavily: https://docs.tavily.com (default general web provider)
- Brave Search API: https://brave.com/search/api/ (optional fallback)

## Wikipedia (MediaWiki API)

- Search: `GET https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=<q>&format=json` (keyless).
- Summary: `GET https://en.wikipedia.org/api/rest_v1/page/summary/<title>` (Page Content Service, "PCS"). Fields used: `title`, `extract`, `description`, `thumbnail.source`, `content_urls.desktop.page`, `type` (`standard|disambiguation|no-extract`).
- Related: `GET https://en.wikipedia.org/w/api.php?action=query&list=morelike&morelike=<title>&mllimit=…` for "see also" results.
- Return the original article titles and canonical source links for every result.
- Handle empty results, missing articles, disambiguation pages, and API failures with a clear user-facing message.
- Preserve CC BY-SA attribution and link the source page on every rendered result.
- Never invent response fields; verify in the docs above before changing the adapter.

## YouTube (Data API v3)

- Search for relevant STEM demonstrations and experiment videos with YouTube Data API v3 `search.list`.
- Auth: server-side key sent as `X-Goog-Api-Key` header; `safeSearch=strict`; enrich with one batched `videos.list` (`part=snippet,status,contentDetails`).
- Display available titles, thumbnails, channel names, and valid video links (for example `https://www.youtube.com/watch?v=<id>`).
- Support topic filters (query terms, safe search, relevance ordering) and pagination (`pageToken`, `maxResults`) when necessary.
- Handle missing credentials, unavailable API, quota exhaustion (`quotaExceeded`), and empty results without crashing search.
- Minimise quota consumption: request only needed `part` values, cache permitted responses, avoid duplicate calls and unneeded pagination.
- Embed via `https://www.youtube-nocookie.com/embed/<id>` only when `status.embeddable` and the video is available. Never download protected video content.

## General web search (Tavily default, Brave fallback)

- Default provider: Tavily. `POST https://api.tavily.com/search` with header `Authorization: Bearer <TAVILY_API_KEY>` (NOT an `api_key` body field — verified against docs.tavily.com OpenAPI) and JSON body `{query, max_results, include_answer:false, search_depth:"basic", safe_search:true}`. One "basic" search = 1 credit of the 1,000/month free tier.
- Tavily error statuses: 401 invalid key, 429 rate limit, 432/433 monthly quota exceeded.
- Fallback provider (only when Tavily key unset): Brave, header `X-Subscription-Token`.
- Keep secret keys on the server only. Read credentials from environment variables. Never commit keys, embed them in frontend bundles, or store them in browser storage or logs.
- Do not assume any trial or credit allowance is permanent.
- When both are unconfigured, the web section must show an honest "not configured" state — never fake results.
- Display original source links plus available snippets.
- Clearly distinguish retrieved third-party sources from CurioWiki-authored or independently verified content.

## Shared search architecture

- Use one consistent result structure across providers where appropriate (for example: provider name, title, URL, snippet or description, plus provider-specific metadata kept intact).
- Keep each provider modular: separate client, parser, and error mapping per provider.
- Isolate failures: one provider failing must not break the whole search experience. Return successful providers' results with a notice about the failed one.
- Use mocked provider responses for routine automated tests so tests run without live credentials or quota consumption. See `api-reliability` for failure and fallback test cases.
