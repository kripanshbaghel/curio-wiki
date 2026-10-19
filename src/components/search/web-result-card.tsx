import { ExternalLink } from 'lucide-react';
import type { WebSearchResult } from '@/lib/adapters/web';

export function WebResultCard({ result }: { result: WebSearchResult }) {
  return (
    <li>
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-card border border-border bg-surface p-4 shadow-card transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="truncate">{result.domain}</span>
          <ExternalLink aria-hidden className="size-3 shrink-0" />
        </div>
        <h3 className="mt-1 text-sm font-medium text-foreground">{result.title}</h3>
        {result.snippet ? (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{result.snippet}</p>
        ) : null}
      </a>
    </li>
  );
}
