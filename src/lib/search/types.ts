import type { WikipediaSearchItem, WikipediaSummary } from '@/lib/adapters/wikipedia';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import type { WebSearchResult } from '@/lib/adapters/web';
import type { SourceErrorCode } from '@/lib/errors';
import type { SubjectKey } from '@/content/types';

export type SourceId =
  | 'topic'
  | 'experiments'
  | 'related'
  | 'wikipedia'
  | 'wikipediaSummary'
  | 'wikipediaRelated'
  | 'youtube'
  | 'web';

export const SOURCE_IDS: readonly SourceId[] = [
  'topic',
  'experiments',
  'related',
  'wikipedia',
  'wikipediaSummary',
  'wikipediaRelated',
  'youtube',
  'web',
] as const;

/** Only network-backed sources can be restricted via `only` (local data is always free). */
export const NETWORK_SOURCE_IDS = ['wikipedia', 'wikipediaSummary', 'wikipediaRelated', 'youtube', 'web'] as const;

export type SourceResult<T> =
  | { id: SourceId; status: 'ok'; data: T }
  | {
      id: SourceId;
      status: 'error';
      error: { code: SourceErrorCode; message: string; retryable: boolean };
    };

export interface ExperimentMatch {
  slug: string;
  title: string;
  subject: SubjectKey;
  reason: string;
}

export interface TopicBrief {
  slug: string;
  title: string;
  subject: SubjectKey;
  summary: string;
}

export type InvalidQueryReason = 'empty' | 'too_short' | 'too_long' | 'invalid';

export interface SearchResponse {
  query: string | null;
  invalid?: InvalidQueryReason;
  results: {
    topic?: { topic: TopicBrief; matchedBy: 'title' | 'alias' };
    experiments: SourceResult<ExperimentMatch[]>;
    related: SourceResult<TopicBrief[]>;
    /** Network-backed sections are present only when that source ran (gated by `only`). */
    wikipedia?: SourceResult<WikipediaSearchItem[]>;
    wikipediaSummary?: SourceResult<WikipediaSummary | null>;
    wikipediaRelated?: SourceResult<WikipediaSearchItem[]>;
    youtube?: SourceResult<YouTubeVideo[]>;
    web?: SourceResult<WebSearchResult[]>;
  };
}
