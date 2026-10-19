import { z } from 'zod';

export const tavilySearchResponseSchema = z.object({
  query: z.string().optional(),
  answer: z.string().nullish(),
  response_time: z.number().optional(),
  results: z
    .array(
      z.object({
        title: z.string().optional().default(''),
        url: z.string().optional(),
        content: z.string().optional().default(''),
        score: z.number().optional(),
        published_date: z.string().nullish(),
      }),
    )
    .default([]),
});

export const braveSearchResponseSchema = z.object({
  web: z
    .object({
      results: z
        .array(
          z.object({
            title: z.string().optional().default(''),
            url: z.string().optional(),
            description: z.string().optional().default(''),
            age: z.string().nullish(),
          }),
        )
        .default([]),
    })
    .optional(),
});

export type TavilySearchResponse = z.infer<typeof tavilySearchResponseSchema>;
export type BraveSearchResponse = z.infer<typeof braveSearchResponseSchema>;
