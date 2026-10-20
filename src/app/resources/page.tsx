import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { EXTERNAL_RESOURCES } from '@/data/external-resources';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export const metadata: Metadata = {
  title: 'Resources',
};

export default function ResourcesPage() {
  const categories = [...new Set(EXTERNAL_RESOURCES.map((resource) => resource.category))];

  return (
    <Container className="flex flex-col gap-10 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Resources</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Curated links to reputable educational organizations. CurioWiki does not host these
          sites — each opens in a new tab.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category}>
          <SectionHeader title={category} />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXTERNAL_RESOURCES.filter((resource) => resource.category === category).map(
              (resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col gap-1.5 rounded-card border border-border bg-surface p-5 shadow-card transition-colors hover:border-primary/40"
                  >
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      {resource.title}
                      <ExternalLink aria-hidden className="size-3.5 text-muted-foreground" />
                    </span>
                    <span className="flex-1 text-sm text-muted-foreground">
                      {resource.description}
                    </span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </section>
      ))}
    </Container>
  );
}
