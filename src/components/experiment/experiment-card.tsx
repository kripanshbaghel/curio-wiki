import Link from 'next/link';
import type { Experiment } from '@/content/types';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const LEVEL_LABEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <li>
      <Link
        href={`/experiments/${experiment.slug}`}
        className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Card className="flex h-full flex-col transition-colors hover:border-primary/40">
          <div className="flex flex-wrap gap-2">
            <Badge>{experiment.subject}</Badge>
            <Badge accent>{LEVEL_LABEL[experiment.level]}</Badge>
            <Badge>
              {experiment.supervision === 'none'
                ? 'No supervision'
                : experiment.supervision === 'adult-required'
                  ? 'Adult supervision'
                  : 'Teacher-led'}
            </Badge>
          </div>
          <h3 className="mt-3 font-semibold text-foreground">{experiment.title}</h3>
          <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted-foreground">
            {experiment.objective}
          </p>
        </Card>
      </Link>
    </li>
  );
}
