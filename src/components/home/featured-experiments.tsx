import Link from 'next/link';
import { experiments } from '@/content/experiments';
import { getTopic } from '@/content/topics';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';

const LEVEL_LABEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export function FeaturedExperiments() {
  const featured = experiments.filter((experiment) => experiment.featured);
  if (featured.length === 0) return null;

  return (
    <section>
      <SectionHeader
        title="Editor's picks"
        description="Safe experiments you can try at home or in class."
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featured.map((experiment) => {
          const topic = getTopic(experiment.topic);
          return (
            <li key={experiment.slug}>
              <Link
                href={`/experiments/${experiment.slug}`}
                className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Card className="flex h-full flex-col transition-colors hover:border-primary/40">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{experiment.subject}</Badge>
                    <Badge accent>{LEVEL_LABEL[experiment.level]}</Badge>
                    {experiment.supervision !== 'none' ? (
                      <Badge>Adult supervision</Badge>
                    ) : null}
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">{experiment.title}</h3>
                  {topic ? <p className="mt-1 text-xs text-muted-foreground">{topic.title}</p> : null}
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{experiment.objective}</p>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
