import { z } from 'zod';

const thumbnailObject = z.object({
  mimetype: z.string().optional(),
  width: z.number().nullish(),
  height: z.number().nullish(),
  duration: z.number().nullish(),
  url: z.string(),
});

export const restSearchPageSchema = z.object({
  id: z.number(),
  key: z.string(),
  title: z.string(),
  excerpt: z.string(),
  matched_title: z.string().nullish(),
  description: z.string().nullish(),
  thumbnail: thumbnailObject.nullish(),
});

export const restSearchResponseSchema = z.object({
  pages: z.array(restSearchPageSchema),
});

export const pcsSummarySchema = z.object({
  type: z.string().optional(),
  title: z.string(),
  displaytitle: z.string().optional(),
  pageid: z.number().optional(),
  description: z.string().nullish(),
  extract: z.string(),
  content_urls: z
    .object({
      desktop: z.object({ page: z.string().optional() }).optional(),
      mobile: z.object({ page: z.string().optional() }).optional(),
    })
    .optional(),
  thumbnail: z.object({ source: z.string() }).nullish(),
  originalimage: z.object({ source: z.string(), width: z.number().optional(), height: z.number().optional() }).nullish(),
});

export const actionSearchItemSchema = z.object({
  ns: z.number(),
  title: z.string(),
  pageid: z.number(),
  snippet: z.string().optional(),
  size: z.number().optional(),
  wordcount: z.number().optional(),
  timestamp: z.string().optional(),
});

export const actionSearchResponseSchema = z.object({
  query: z.object({
    searchinfo: z.object({ totalhits: z.number().optional() }).optional(),
    search: z.array(actionSearchItemSchema),
  }),
});

export const actionErrorResponseSchema = z.object({
  error: z.object({
    code: z.string(),
    info: z.string().optional(),
  }),
});

export type RestSearchPage = z.infer<typeof restSearchPageSchema>;
export type PcsSummary = z.infer<typeof pcsSummarySchema>;
export type ActionSearchItem = z.infer<typeof actionSearchItemSchema>;
