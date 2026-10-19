import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/content/collections';
import { topics } from '@/content/topics';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';

export function TopicCollections() {
  if (collections.length === 0) return null;
  return (
    <section>
      <SectionHeader
        title="Collections"
        description="Curated paths through related topics."
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {collections.map((collection) => {
          const count = collection.topicSlugs.filter((slug) =>
            topics.some((topic) => topic.slug === slug),
          ).length;
          return (
            <li key={collection.slug}>
              <Link
                href={`/topics?collection=${collection.slug}`}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-card"
              >
                <Card className="flex h-full flex-col transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">{collection.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{collection.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {count} {count === 1 ? 'topic' : 'topics'}
                    <ArrowRight aria-hidden className="size-4" />
                  </p>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
