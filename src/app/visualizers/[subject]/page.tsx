import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getSubject, subjects } from '@/content/subjects';
import { visualizersBySubject } from '@/content/visualizers';
import { Container } from '@/components/ui/container';
import type { SubjectKey } from '@/content/types';
import { cn } from '@/lib/cn';

interface Props {
  params: Promise<{ subject: string }>;
}

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

const LEVEL_LABEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: 'Subject not found' };
  return {
    title: `${subject.name} visualizers`,
    description: `Five interactive ${subject.name.toLowerCase()} benches with live calculations and visible assumptions.`,
  };
}

export default async function VisualizerSubjectPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const entries = visualizersBySubject(subject.slug);
  if (entries.length === 0) notFound();

  return (
    <Container className="flex flex-col gap-10 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/visualizers" className="underline-offset-4 hover:text-foreground hover:underline">
              Visualizers
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-foreground">
            {subject.name}
          </li>
        </ol>
      </nav>

      <header className={cn('border-l-2 pl-5', ACCENT_BORDER[subject.slug])}>
        <p className={cn('text-xs font-semibold uppercase tracking-[0.16em]', ACCENT_TEXT[subject.slug])}>
          {entries.length} instruments
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {subject.name} bench
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{subject.description}</p>
      </header>

      <section aria-labelledby="subject-index">
        <h2 id="subject-index" className="sr-only">
          {subject.name} instruments
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {entries.map((entry, position) => (
            <li key={entry.slug}>
              <Link
                href={`/visualizers/${entry.subject}/${entry.slug}`}
                className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-3 py-5 hover:bg-surface-muted/60 sm:grid-cols-[2.5rem_minmax(0,1fr)_7rem_auto]"
              >
                <span className="numeric pt-0.5 text-sm text-muted-foreground">
                  {String(position + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="text-base font-medium text-foreground">{entry.title}</span>
                  <span className="mt-1 block max-w-2xl text-sm leading-6 text-muted-foreground">
                    {entry.summary}
                  </span>
                </span>
                <span className="hidden pt-0.5 text-xs uppercase tracking-wide text-muted-foreground sm:block">
                  {LEVEL_LABEL[entry.level]}
                </span>
                <ArrowRight
                  aria-hidden
                  className="mt-1 size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm">
        <Link
          href="/visualizers"
          className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4" />
          All instruments
        </Link>
        <p className="text-xs text-muted-foreground">
          Each bench states its own assumptions. Prefer one that matches what you are studying.
        </p>
      </div>
    </Container>
  );
}
