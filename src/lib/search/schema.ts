import { z } from 'zod';

/**
 * Loose validation schema for SearchResponse — checks structure (per-source
 * ok/error discipline, query/invalid shape) without coupling to every adapter
 * payload field. Run before serializing an API response.
 */
const sourceErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  retryable: z.boolean(),
});

function sourceResultSchema(data: z.ZodType) {
  return z.discriminatedUnion('status', [
    z.object({ id: z.string(), status: z.literal('ok'), data }),
    z.object({ id: z.string(), status: z.literal('error'), error: sourceErrorSchema }),
  ]);
}

export const SearchResponseSchema = z.object({
  query: z.string().nullable(),
  invalid: z.enum(['empty', 'too_short', 'too_long', 'invalid']).optional(),
  results: z.object({
    topic: z
      .object({
        topic: z.unknown(),
        matchedBy: z.enum(['title', 'alias']),
      })
      .optional(),
    experiments: sourceResultSchema(z.array(z.unknown())),
    related: sourceResultSchema(z.array(z.unknown())),
    wikipedia: sourceResultSchema(z.array(z.unknown())).optional(),
    wikipediaSummary: sourceResultSchema(z.unknown()).optional(),
    wikipediaRelated: sourceResultSchema(z.array(z.unknown())).optional(),
    youtube: sourceResultSchema(z.array(z.unknown())).optional(),
    web: sourceResultSchema(z.array(z.unknown())).optional(),
  }),
});
