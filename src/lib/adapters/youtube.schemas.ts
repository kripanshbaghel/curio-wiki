import { z } from 'zod';

const thumbnailEntrySchema = z.object({ url: z.string() });

const thumbnailsSchema = z
  .object({
    default: thumbnailEntrySchema.optional(),
    medium: thumbnailEntrySchema.optional(),
    high: thumbnailEntrySchema.optional(),
    standard: thumbnailEntrySchema.optional(),
    maxres: thumbnailEntrySchema.optional(),
  })
  .default({});

export const youtubeSnippetSchema = z.object({
  publishedAt: z.string().nullish(),
  channelId: z.string().optional(),
  title: z.string().optional().default(''),
  description: z.string().optional().default(''),
  thumbnails: thumbnailsSchema,
  channelTitle: z.string().optional().default(''),
  liveBroadcastContent: z.string().optional(),
});

export const searchListResponseSchema = z.object({
  kind: z.string().optional(),
  nextPageToken: z.string().optional(),
  pageInfo: z
    .object({
      totalResults: z.number().optional(),
      resultsPerPage: z.number().optional(),
    })
    .optional(),
  items: z
    .array(
      z.object({
        kind: z.string().optional(),
        id: z.object({
          kind: z.string().optional(),
          videoId: z.string().optional(),
          channelId: z.string().optional(),
          playlistId: z.string().optional(),
        }),
        snippet: youtubeSnippetSchema,
      }),
    )
    .default([]),
});

export const videoListResponseSchema = z.object({
  kind: z.string().optional(),
  items: z
    .array(
      z.object({
        id: z.string(),
        snippet: youtubeSnippetSchema.optional(),
        status: z
          .object({
            uploadStatus: z.string().optional(),
            privacyStatus: z.string().optional(),
            embeddable: z.boolean().optional(),
          })
          .optional(),
        contentDetails: z.object({ duration: z.string().optional() }).optional(),
      }),
    )
    .default([]),
});

export type SearchListResponse = z.infer<typeof searchListResponseSchema>;
export type VideoListResponse = z.infer<typeof videoListResponseSchema>;
export type VideoListResource = VideoListResponse['items'][number];
