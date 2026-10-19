import { getRelatedWikipedia, getWikipediaSummary, searchWikipedia } from '@/lib/adapters/wikipedia';
import { searchYouTube } from '@/lib/adapters/youtube';
import { searchWeb } from '@/lib/adapters/web';
import { ProviderError } from '@/lib/errors';
import { experiments } from '@/content/experiments';
import { topics } from '@/content/topics';
import type { Topic } from '@/content/types';
import { normalizeQuery } from './normalize';
import {
  NETWORK_SOURCE_IDS,
  type ExperimentMatch,
  type SearchResponse,
  type SourceId,
  type SourceResult,
  type TopicBrief,
} from './types';

export interface UnifiedSearchOptions {
  /** Restrict which network-backed sources run. Local sources always run. */
  only?: SourceId[];
  youtubeMax?: number;
}

const DEFAULT_YOUTUBE_MAX = 6;
const DEFAULT_WEB_MAX = 6;
const DEFAULT_RELATED_MAX = 5;
const EXPERIMENT_MATCH_MAX = 6;

function ok<T>(id: SourceId, data: T): SourceResult<T> {
  return { id, status: 'ok', data };
}

function fromError<T>(id: SourceId, error: unknown): SourceResult<T> {
  if (error instanceof ProviderError) {
    return {
      id,
      status: 'error',
      error: { code: error.code, message: error.message, retryable: error.retryable },
    };
  }
  return {
    id,
    status: 'error',
    error: {
      code: 'unknown',
      message: error instanceof Error ? error.message : String(error),
      retryable: false,
    },
  };
}

async function settle<T>(id: SourceId, fn: () => Promise<T>): Promise<SourceResult<T>> {
  try {
    return ok(id, await fn());
  } catch (error) {
    return fromError(id, error);
  }
}

function brief(topic: Topic): TopicBrief {
  return {
    slug: topic.slug,
    title: topic.title,
    subject: topic.subject,
    summary: topic.summary,
  };
}

function matchTopic(query: string): { topic: TopicBrief; matchedBy: 'title' | 'alias' } | undefined {
  const q = query.toLowerCase();
  for (const topic of topics) {
    if (topic.title.toLowerCase() === q) return { topic: brief(topic), matchedBy: 'title' };
  }
  for (const topic of topics) {
    if (topic.aliases.some((alias) => alias.toLowerCase() === q)) {
      return { topic: brief(topic), matchedBy: 'alias' };
    }
  }
  for (const topic of topics) {
    if (topic.title.toLowerCase().includes(q)) {
      return { topic: brief(topic), matchedBy: 'title' };
    }
  }
  for (const topic of topics) {
    if (topic.aliases.some((alias) => alias.toLowerCase().includes(q) || q.includes(alias.toLowerCase()))) {
      return { topic: brief(topic), matchedBy: 'alias' };
    }
  }
  return undefined;
}

function matchExperiments(query: string): ExperimentMatch[] {
  const q = query.toLowerCase();
  const tokens = q.split(/[^a-z0-9']+/).filter((token) => token.length >= 3);
  const scored: Array<{ match: ExperimentMatch; score: number }> = [];

  for (const experiment of experiments) {
    const title = experiment.title.toLowerCase();
    const topicField = experiment.topic.toLowerCase();
    const concept = experiment.concept.toLowerCase();
    let score = 0;
    let matchedField: string | null = null;

    if (title.includes(q)) {
      score += 3;
      matchedField = 'title';
    } else if (topicField.includes(q)) {
      score += 2;
      matchedField = 'topic';
    } else if (concept.includes(q)) {
      score += 2;
      matchedField = 'concept';
    }

    for (const token of tokens) {
      if (title.includes(token)) score += 1;
      else if (concept.includes(token)) score += 1;
      else if (topicField.includes(token)) score += 1;
    }

    if (score > 0) {
      scored.push({
        match: {
          slug: experiment.slug,
          title: experiment.title,
          subject: experiment.subject,
          reason: matchedField ? `Matched ${matchedField}` : 'Matched keywords',
        },
        score,
      });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score || a.match.slug.localeCompare(b.match.slug))
    .slice(0, EXPERIMENT_MATCH_MAX)
    .map((entry) => entry.match);
}

function relatedTopics(matched: TopicBrief | undefined): TopicBrief[] {
  if (!matched) return [];
  const sameSubject = topics
    .filter((topic) => topic.slug !== matched.slug && topic.subject === matched.subject)
    .map(brief);
  const others = topics
    .filter((topic) => topic.slug !== matched.slug && topic.subject !== matched.subject)
    .map(brief);
  return [...sameSubject, ...others].slice(0, DEFAULT_RELATED_MAX);
}

function shouldRun(only: Set<SourceId> | undefined, id: SourceId): boolean {
  return !only || only.has(id);
}

export async function runUnifiedSearch(
  rawQuery: unknown,
  opts: UnifiedSearchOptions = {},
): Promise<SearchResponse> {
  const normalized = normalizeQuery(rawQuery);
  if (!normalized.ok) {
    return {
      query: null,
      invalid: normalized.reason,
      results: {
        experiments: ok('experiments', []),
        related: ok('related', []),
      },
    };
  }

  const query = normalized.value;
  const requested = opts.only?.length
    ? new Set(opts.only.filter((id) => (NETWORK_SOURCE_IDS as readonly string[]).includes(id)))
    : undefined;

  const topicMatch = matchTopic(query);
  const experimentMatches = matchExperiments(query);
  const related = relatedTopics(topicMatch?.topic);

  const wantsWikipedia =
    !requested ||
    (requested.has('wikipedia') ||
      requested.has('wikipediaSummary') ||
      requested.has('wikipediaRelated'));

  const wikipediaPromise = wantsWikipedia
    ? (async () => {
        const searchResult = await settle('wikipedia', () => searchWikipedia(query));
        const first =
          searchResult.status === 'ok' ? (searchResult.data[0] ?? undefined) : undefined;

        let summaryResult: SourceResult<Awaited<ReturnType<typeof getWikipediaSummary>>>;
        let relatedResult: SourceResult<Awaited<ReturnType<typeof getRelatedWikipedia>>>;

        if (first) {
          const [summary, relatedWiki] = await Promise.all([
            settle('wikipediaSummary', () => getWikipediaSummary(first.key)),
            settle('wikipediaRelated', () => getRelatedWikipedia(first.key, DEFAULT_RELATED_MAX)),
          ]);
          summaryResult = summary;
          relatedResult = relatedWiki;
        } else if (searchResult.status === 'ok') {
          summaryResult = ok('wikipediaSummary', null);
          relatedResult = ok('wikipediaRelated', []);
        } else {
          summaryResult = { id: 'wikipediaSummary', status: 'error', error: searchResult.error };
          relatedResult = { id: 'wikipediaRelated', status: 'error', error: searchResult.error };
        }

        return { searchResult, summaryResult, relatedResult };
      })()
    : Promise.resolve(null);

  const youtubePromise = shouldRun(requested, 'youtube')
    ? settle('youtube', () => searchYouTube(query, { maxResults: opts.youtubeMax ?? DEFAULT_YOUTUBE_MAX }))
    : Promise.resolve(undefined);

  const webPromise = shouldRun(requested, 'web')
    ? settle('web', () => searchWeb(query, { maxResults: DEFAULT_WEB_MAX }))
    : Promise.resolve(undefined);

  const [wikipediaFlow, youtubeResult, webResult] = await Promise.all([
    wikipediaPromise,
    youtubePromise,
    webPromise,
  ]);

  const results: SearchResponse['results'] = {
    experiments: ok('experiments', experimentMatches),
    related: ok('related', related),
  };

  if (topicMatch) results.topic = topicMatch;

  if (wikipediaFlow) {
    if (shouldRun(requested, 'wikipedia')) results.wikipedia = wikipediaFlow.searchResult;
    if (shouldRun(requested, 'wikipediaSummary')) results.wikipediaSummary = wikipediaFlow.summaryResult;
    if (shouldRun(requested, 'wikipediaRelated')) results.wikipediaRelated = wikipediaFlow.relatedResult;
  }
  if (youtubeResult) results.youtube = youtubeResult;
  if (webResult) results.web = webResult;

  return { query, results };
}
