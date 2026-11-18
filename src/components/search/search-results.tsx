'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import type { WikipediaSearchItem, WikipediaSummary } from '@/lib/adapters/wikipedia';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import type { WebSearchResult } from '@/lib/adapters/web';
import type { ExperimentMatch, SearchResponse, SourceResult } from '@/lib/search/types';
import { SourceSection } from '@/components/search/source-section';
import { WikiAttribution } from '@/components/search/wiki-attribution';
import { VideoCard } from '@/components/search/video-card';
import { WebResultCard } from '@/components/search/web-result-card';
import { ExperimentMatchCard } from '@/components/search/experiment-match-card';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';

type NetworkId = 'wikipedia' | 'wikipediaSummary' | 'wikipediaRelated' | 'youtube' | 'web';

type SectionView =
  | { status: 'ok'; data: unknown }
  | { status: 'error'; error: { code: string; message: string; retryable: boolean } }
  | { status: 'loading' };

function invalidMessage(reason: NonNullable<SearchResponse['invalid']>): { title: string; description: string } {
  switch (reason) {
    case 'too_long':
      return { title: 'Query too long', description: 'Please use 200 characters or fewer.' };
    case 'invalid':
      return { title: 'Invalid query', description: 'Please enter a normal search query.' };
    default:
      return { title: 'Empty search', description: 'Type a topic, experiment, or question to search.' };
  }
}

export function SearchResults({ initial }: { initial: SearchResponse }) {
  const [overrides, setOverrides] = useState<Partial<Record<NetworkId, SourceResult<unknown>>>>({});
  const [retrying, setRetrying] = useState<NetworkId | null>(null);
  const router = useRouter();

  async function learnFromWikipedia(item: WikipediaSearchItem) {
    const sessionId = `research-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    try {
      await fetch('/api/research/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          data: {
            query: item.title,
            wikipedia: [item],
          },
        }),
      });
    } catch {
      // Ignore store errors — the learning page will still work with live data.
    }
    router.push(`/learn/${sessionId}`);
  }

  async function retry(id: NetworkId) {
    if (!initial.query) return;
    setRetrying(id);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(initial.query)}&only=${id}`);
      const body = (await res.json()) as SearchResponse;
      const section = (body.results as unknown as Record<string, SourceResult<unknown> | undefined>)[id];
      setOverrides((prev) => ({
        ...prev,
        [id]:
          section ??
          ({
            id,
            status: 'error',
            error: { code: 'unknown', message: 'Section missing from retry response', retryable: true },
          } satisfies SourceResult<unknown>),
      }));
    } catch (error) {
      setOverrides((prev) => ({
        ...prev,
        [id]: {
          id,
          status: 'error',
          error: {
            code: 'network',
            message: error instanceof Error ? error.message : 'network error',
            retryable: true,
          },
        },
      }));
    } finally {
      setRetrying(null);
    }
  }

  function view(id: NetworkId): SectionView {
    if (retrying === id) return { status: 'loading' };
    const result = overrides[id] ?? (initial.results as unknown as Record<string, SourceResult<unknown> | undefined>)[id];
    if (!result) return { status: 'ok', data: [] };
    if (result.status === 'error') return { status: 'error', error: result.error };
    return { status: 'ok', data: result.data };
  }

  if (initial.invalid) {
    const message = invalidMessage(initial.invalid);
    return <EmptyState title={message.title} description={message.description} />;
  }

  const topicMatch = initial.results.topic;
  const experiments = initial.results.experiments;
  const related = initial.results.related;

  const wikiView = view('wikipedia');
  const wikiSummaryView = view('wikipediaSummary');
  const wikiRelatedView = view('wikipediaRelated');
  const youtubeView = view('youtube');
  const webView = view('web');

  return (
    <div className="flex flex-col gap-12">
      {topicMatch ? (
        <section>
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
            Topic overview
          </h2>
          <Link
            href={`/topics/${topicMatch.topic.slug}`}
            className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Card className="transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{topicMatch.topic.subject}</Badge>
                <span className="text-xs text-muted-foreground">
                  matched by {topicMatch.matchedBy}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-foreground">{topicMatch.topic.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{topicMatch.topic.summary}</p>
            </Card>
          </Link>
        </section>
      ) : null}

      <SourceSection
        title="Experiments"
        status={experiments.status === 'error' ? 'error' : 'ok'}
        error={experiments.status === 'error' ? experiments.error : undefined}
      >
        {experiments.status === 'ok' && experiments.data.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.data.map((match: ExperimentMatch) => (
              <ExperimentMatchCard key={match.slug} match={match} />
            ))}
          </ul>
        ) : null}
      </SourceSection>

      <SourceSection
        title="Related topics"
        status={related.status === 'error' ? 'error' : 'ok'}
        error={related.status === 'error' ? related.error : undefined}
      >
        {related.status === 'ok' && related.data.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {related.data.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                >
                  {topic.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </SourceSection>

      <SourceSection
        title="Wikipedia"
        status={wikiView.status}
        error={wikiView.status === 'error' ? wikiView.error : undefined}
        onRetry={() => void retry('wikipedia')}
      >
        {wikiView.status === 'ok' ? (() => {
          const items = wikiView.data as WikipediaSearchItem[];
          const summary =
            wikiSummaryView.status === 'ok' ? (wikiSummaryView.data as WikipediaSummary | null) : null;
          const relatedItems =
            wikiRelatedView.status === 'ok' ? (wikiRelatedView.data as WikipediaSearchItem[]) : [];
          if ((!items || items.length === 0) && !summary) return null;
          return (
            <div className="flex flex-col gap-4">
              {summary ? (
                <Card>
                  <div className="flex items-start gap-3">
                    {summary.thumbnailUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={summary.thumbnailUrl}
                        alt=""
                        className="size-16 shrink-0 rounded-md object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="min-w-0">
                      <a
                        href={summary.pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground underline-offset-2 hover:underline"
                      >
                        {summary.title}
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">{summary.extract}</p>
                    </div>
                  </div>
                </Card>
              ) : null}
              {items && items.length > 0 ? (
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item.key}>
                      <div className="flex items-start gap-2">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-card border border-border bg-surface p-4 shadow-card transition-colors hover:border-primary/40 flex-1"
                        >
                          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <BookOpen aria-hidden className="size-4 shrink-0 text-muted-foreground" />
                            {item.title}
                          </span>
                          {item.excerpt ? (
                            <span className="mt-1 line-clamp-2 block text-sm text-muted-foreground">
                              {item.excerpt}
                            </span>
                          ) : null}
                        </a>
                        <button
                          onClick={() => void learnFromWikipedia(item)}
                          aria-label={`Learn about ${item.title} on CurioWiki`}
                          className="shrink-0 rounded p-1.5 text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                        >
                          <span className="sr-only">Learn on CurioWiki</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
              {relatedItems && relatedItems.length > 0 ? (
                <div>
                  <h3 className="mb-2 text-sm font-medium text-foreground">Related on Wikipedia</h3>
                  <ul className="flex flex-wrap gap-2">
                    {relatedItems.map((item) => (
                      <li key={item.key}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground hover:border-primary/40"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <WikiAttribution />
            </div>
          );
        })() : null}
      </SourceSection>

      <SourceSection
        title="Videos"
        status={youtubeView.status}
        error={youtubeView.status === 'error' ? youtubeView.error : undefined}
        onRetry={() => void retry('youtube')}
      >
        {youtubeView.status === 'ok' && (youtubeView.data as YouTubeVideo[]).length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(youtubeView.data as YouTubeVideo[]).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        ) : null}
      </SourceSection>

      <SourceSection
        title="Web resources"
        status={webView.status}
        error={webView.status === 'error' ? webView.error : undefined}
        onRetry={() => void retry('web')}
      >
        {webView.status === 'ok' && (webView.data as WebSearchResult[]).length > 0 ? (
          <ul className="flex flex-col gap-3">
            {(webView.data as WebSearchResult[]).map((result) => (
              <WebResultCard key={result.url} result={result} />
            ))}
          </ul>
        ) : null}
      </SourceSection>
    </div>
  );
}
