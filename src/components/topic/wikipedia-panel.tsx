import { getRelatedWikipedia, getWikipediaSummary } from '@/lib/adapters/wikipedia';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { ErrorState } from '@/components/ui/error-state';
import { WikiAttribution } from '@/components/search/wiki-attribution';

/**
 * Server-fetched Wikipedia summary + related links for a topic page.
 * Failures render inside this card only — the curated page stays usable.
 */
export async function WikipediaPanel({ wikipediaTitle }: { wikipediaTitle: string }) {
  try {
    const [summary, related] = await Promise.all([
      getWikipediaSummary(wikipediaTitle),
      getRelatedWikipedia(wikipediaTitle, 5),
    ]);

    return (
      <Card>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">From Wikipedia</h2>
        {summary ? (
          <div className="mt-3 flex items-start gap-4">
            {summary.thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={summary.thumbnailUrl}
                alt=""
                className="size-20 shrink-0 rounded-md object-cover"
                loading="lazy"
              />
            ) : null}
            <div className="min-w-0">
              <a
                href={summary.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                {summary.title}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">{summary.extract}</p>
            </div>
          </div>
        ) : (
          <EmptyState
            className="mt-3"
            title="No Wikipedia summary"
            description={`Wikipedia has no summary page for “${wikipediaTitle}”.`}
          />
        )}
        {related.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-foreground">Related Wikipedia articles</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {related.map((item) => (
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
        <div className="mt-4">
          <WikiAttribution />
        </div>
      </Card>
    );
  } catch (error) {
    return (
      <Card>
        <ErrorState
          title="Wikipedia is unavailable"
          description={error instanceof Error ? error.message : 'The request failed.'}
        />
      </Card>
    );
  }
}
