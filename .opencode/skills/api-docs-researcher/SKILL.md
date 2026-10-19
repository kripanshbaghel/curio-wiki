---
name: api-docs-researcher
description: Research official API documentation (endpoints, auth, quotas, licensing) and report verified findings with sources before CurioWiki builds or changes an integration.
---

# API Docs Researcher

Research official documentation before CurioWiki builds or changes an API integration. This skill is research-first: do not modify application code when the task is research-only unless implementation is explicitly requested.

Official references:

- MediaWiki search: https://www.mediawiki.org/wiki/API:Search
- YouTube Data API v3: https://developers.google.com/youtube/v3
- YouTube search.list: https://developers.google.com/youtube/v3/docs/search/list
- Brave Search API: https://brave.com/search/api/
- OpenCode Agent Skills: https://docs.opencode.ai/docs/skills/

## Workflow

1. Identify the API, intended operation, endpoint, and version where relevant.
2. Locate the official documentation for that exact operation. Prefer the provider's own docs over tutorials or third-party summaries.
3. Verify authentication, request parameters, response fields, pagination, error formats, quotas, and rate limits.
4. Check attribution, caching, licensing, privacy, and usage restrictions that apply to CurioWiki's use case.
5. Establish whether the implementation can meet CurioWiki's zero-cost objective on free tiers or keyless endpoints.
6. Identify setup requirements such as API keys, project configuration, or account steps.
7. Provide verified findings plus official documentation links when research is requested or the implementation is non-trivial.
8. Clearly distinguish verified facts from assumptions and unknowns. Label each claim as verified, assumed, or unknown.
9. Never invent API details, quotas, pricing, or endpoints.
10. Never claim to have researched live documentation if network or browsing tools were unavailable. State what could not be checked.
11. Do not modify application code when the task is research-only unless implementation is explicitly requested.

## Output

When reporting research, include: the API and endpoint verified, authentication required, key parameters and response fields observed, pagination and error handling notes, quota and rate-limit findings, attribution and caching rules, zero-cost assessment, setup steps, open unknowns, and a link list of every official source consulted.
