import type { Metadata } from 'next';
import Link from 'next/link';
import { experiments } from '@/content/experiments';
import { SUBJECT_KEYS } from '@/content/types';
import { getSubject } from '@/content/subjects';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/container';
import { ExperimentCard } from '@/components/experiment/experiment-card';

export const metadata: Metadata = {
  title: 'Experiments',
};

export default async function ExperimentsPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string | string[] }>;
}) {
  const params = await searchParams;
  const active = typeof params.subject === 'string' ? params.subject : '';
  const isValidFilter = (SUBJECT_KEYS as readonly string[]).includes(active);
  const filtered = isValidFilter
    ? experiments.filter((experiment) => experiment.subject === active)
    : experiments;

  return (
    <Container className="flex flex-col gap-8 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Experiments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Safe, hands-on activities with home or classroom materials. Every experiment lists its
          safety requirements.
        </p>
      </div>

      <nav aria-label="Filter by subject">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/experiments"
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
                !isValidFilter
                  ? 'border-transparent bg-primary text-primary-foreground'
                  : 'border-border bg-surface text-foreground hover:border-primary/40',
              )}
            >
              All
            </Link>
          </li>
          {SUBJECT_KEYS.map((subjectKey) => {
            const subject = getSubject(subjectKey);
            const isActive = active === subjectKey;
            return (
              <li key={subjectKey}>
                <Link
                  href={`/experiments?subject=${subjectKey}`}
                  className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
                    isActive
                      ? 'border-transparent bg-primary text-primary-foreground'
                      : 'border-border bg-surface text-foreground hover:border-primary/40',
                  )}
                >
                  {subject?.name ?? subjectKey}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((experiment) => (
          <ExperimentCard key={experiment.slug} experiment={experiment} />
        ))}
      </ul>
    </Container>
  );
}
