import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { visualizersForTopic } from '@/content/visualizers';
import type { SubjectKey } from '@/content/types';
import { cn } from '@/lib/cn';

const ACCENT_TEXT: Record<SubjectKey, string> = {
  physics: 'text-physics',
  chemistry: 'text-chemistry',
  biology: 'text-biology',
  mathematics: 'text-mathematics',
  technology: 'text-technology',
  engineering: 'text-engineering',
};

const ACCENT_BORDER: Record<SubjectKey, string> = {
  physics: 'border-physics',
  chemistry: 'border-chemistry',
  biology: 'border-biology',
  mathematics: 'border-mathematics',
  technology: 'border-technology',
  engineering: 'border-engineering',
};

/**
 * Inline bridge from a curated topic to the benches that model it. Renders
 * nothing when no visualizer maps to this topic, so unmapped pages are
 * unchanged.
 */
export function VisualizerCallout({ topicSlug }: { topicSlug: string }) {
  const matches = visualizersForTopic(topicSlug);
  if (matches.length === 0) return null;

  return (
    <section
      aria-labelledby="topic-visualizers"
      className={cn('border-l-2 pl-5', ACCENT_BORDER[matches[0].subject])}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="topic-visualizers" className="text-sm font-semibold text-foreground">
          Explore interactively
        </h2>
        <Link
          href={`/visualizers/${matches[0].subject}`}
          className={cn(
            'text-xs font-medium underline-offset-4 hover:underline',
            ACCENT_TEXT[matches[0].subject],
          )}
        >
          All {matches[0].subject} benches
        </Link>
      </div>
      <ul className="mt-3 divide-y divide-border/70 border-y border-border/70">
        {matches.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/visualizers/${entry.subject}/${entry.slug}`}
              className="group flex items-start justify-between gap-3 py-2.5 hover:text-foreground"
            >
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{entry.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{entry.summary}</span>
              </span>
              <ArrowRight
                aria-hidden
                className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
