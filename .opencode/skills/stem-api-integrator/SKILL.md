---
name: stem-api-integrator
description: Implement and maintain CurioWiki external search integrations (Wikipedia MediaWiki API, YouTube Data API v3, Brave Search API) with modular providers and a consistent result structure.
---

# STEM API Integrator

Implement and maintain CurioWiki's real external API integrations. Do not redesign unrelated features. Before coding, inspect CurioWiki's actual framework and architecture. Do not assume an unverified stack, invent response fields, or expose credentials.

Official documentation:

- MediaWiki search: https://www.mediawiki.org/wiki/API:Search
- MediaWiki REST reference: https://www.mediawiki.org/wiki/API:REST_API/Reference
- YouTube search.list: https://developers.google.com/youtube/v3/docs/search/list
- Brave Search API: https://brave.com/search/api/

## Wikipedia (MediaWiki API)

- Search for relevant articles with the MediaWiki search API.
- Retrieve summaries and article metadata where the endpoint provides them.
- Return the original article titles and canonical source links for every result.
- Handle empty results, missing articles, disambiguation pages, and API failures with a clear user-facing message.
- Preserve source attribution on every result.
- Verify the current endpoints and response fields in the official docs above before implementation. Never invent fields.

## YouTube (Data API v3)

- Search for relevant STEM demonstrations and experiment videos with YouTube Data API v3 `search.list`.
- Display available titles, thumbnails, channel names, and valid video links (for example `https://www.youtube.com/watch?v=<id>`).
- Support topic filters (query terms, safe search, relevance ordering) and pagination (`pageToken`, `maxResults`) when necessary.
- Handle missing credentials, unavailable API, quota exhaustion (`quotaExceeded`), and empty results without crashing search.
- Minimise quota consumption: request only needed `part` values, cache permitted responses, avoid duplicate calls and unneeded pagination.
- Link to or embed permitted videos only. Never download protected video content.

## General web search (Brave Search API, optional)

- Treat Brave Search as an optional provider, not a requirement.
- Verify the current Brave API documentation and usage terms before integrating.
- Keep secret keys on the server only. Read credentials from environment variables. Never commit keys, embed them in frontend bundles, or store them in browser storage or logs.
- Do not assume any trial or credit allowance is permanent.
- When Brave is unconfigured or unavailable, fall back to ordinary browser-based web search.
- Display original source links plus available snippets.
- Clearly distinguish retrieved third-party sources from CurioWiki-authored or independently verified content.

## Shared search architecture

- Use one consistent result structure across providers where appropriate (for example: provider name, title, URL, snippet or description, plus provider-specific metadata kept intact).
- Keep each provider modular: separate client, parser, and error mapping per provider.
- Isolate failures: one provider failing must not break the whole search experience. Return successful providers' results with a notice about the failed one.
- Use mocked provider responses for routine automated tests so tests run without live credentials or quota consumption. See `api-reliability` for failure and fallback test cases.
