---
name: api-reliability
description: Keep CurioWiki integrations secure, fault-tolerant, and economical with input validation, timeouts, quota discipline, mocked tests, and honest verification.
---

# API Reliability

Keep CurioWiki's integrations secure, reliable, testable, and economical. Apply this skill after any change to provider code in addition to `stem-api-integrator`, not instead of it.

## Security and input handling

- Validate all user-provided queries. Reject or sanitise empty, oversized, or malformed input.
- Apply sensible input-length limits before any outbound request.
- Keep API secrets on the server. Never expose private keys through frontend bundles, public repositories, browser storage, or logs.
- Use the hosting provider's secure mechanism for production secrets and environment variables for local configuration.
- Do not trust user-supplied URLs or external API responses. Treat them as untrusted input.
- Avoid exposing sensitive information (keys, tokens, internal paths) in error messages shown to users or written to client-visible logs.

## Reliability and fault tolerance

- Apply sensible request timeouts to every outbound call.
- Parse external responses defensively. Handle missing fields and unexpected shapes.
- Distinguish empty results, invalid input, authentication failures, rate limits, quota exhaustion, network errors, and malformed responses, and report each appropriately.
- Provider-specific failure facts: Tavily returns 401 (bad key), 429 (rate limit), 432/433 (monthly quota); YouTube `quotaExceeded` in the error `reason`; Wikipedia search failures must degrade to local curated content, never fake results.
- Retry only appropriate transient failures with bounded backoff. Honour provider retry instructions (such as `Retry-After`) where given.
- Prevent infinite retries and excessive API consumption.
- Ensure a failed provider does not crash the entire CurioWiki search experience. Return successful providers' results with a notice about the failure.

## Cost and quotas

- Verify current provider limits and usage rules via `api-docs-researcher` before assuming them.
- Use caching when the provider permits it.
- Prevent unnecessary duplicate requests and pagination. Request only needed fields and pages.
- Apply reasonable request limits where feasible.
- Do not automatically enable paid overages or paid upgrades.
- Preserve basic usability through appropriate fallbacks (for example cached, keyless, or browser-based search).
- Never promise unlimited usage under free tiers.

## Testing

Create or maintain tests covering:

- Successful responses.
- Empty results.
- Invalid input.
- Missing credentials.
- Network errors and timeouts.
- Rate limiting and quota exhaustion.
- Authentication failures.
- Malformed responses.
- Partial failure across multiple providers.
- Fallback behaviour when optional APIs are unavailable.

Use mocked API responses for routine testing so live credentials are not required and quotas are not consumed unnecessarily.

## Verification

After applicable code changes:

- Run the relevant automated tests.
- Run type checks and linting if the project supports them.
- Run the production build where practical.
- Fix reproducible regressions caused by the change.
- Rerun the relevant checks after fixes.
- Report actual results, including skipped tests and unverified behaviour.

Never claim that a test passed unless it was actually executed.
