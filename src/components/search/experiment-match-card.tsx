import Link from 'next/link';
import { FlaskConical } from 'lucide-react';
import type { ExperimentMatch } from '@/lib/search/types';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function ExperimentMatchCard({ match }: { match: ExperimentMatch }) {
  return (
    <li>
      <Link
        href={`/experiments/${match.slug}`}
        className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Card className="flex h-full flex-col transition-colors hover:border-primary/40">
          <div className="flex items-center gap-2">
            <FlaskConical aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            <Badge>{match.subject}</Badge>
          </div>
          <h3 className="mt-2 text-sm font-semibold text-foreground">{match.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{match.reason}</p>
        </Card>
      </Link>
    </li>
  );
}
