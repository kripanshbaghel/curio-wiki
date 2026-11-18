import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { subjects } from '@/content/subjects';
import { visualizers, visualizersBySubject } from '@/content/visualizers';
import { Container } from '@/components/ui/container';
import { HeroInstrument } from '@/components/visualizers/hero-instrument';
import type { SubjectKey } from '@/content/types';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Visualizers',
  description:
    'Thirty interactive STEM instruments: physics, chemistry, biology, mathematics, technology and engineering benches with live calculations and visible assumptions.',
};

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

export default function VisualizersPage() {
  return (
    <Container className="flex flex-col gap-14 py-12">
      <HeroInstrument />

      <section aria-labelledby="how-to-read" className="border-y border-border py-6">
        <h2 id="how-to-read" className="sr-only">
          How a bench works
        </h2>
        <dl className="grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              1 · Stage
            </dt>
            <dd className="mt-1.5 text-sm leading-6 text-muted-foreground">
              A dark instrument stage draws the model. Play, pause, step and change speed where the
              model moves.
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              2 · Parameters
            </dt>
            <dd className="mt-1.5 text-sm leading-6 text-muted-foreground">
              Sliders, selects and toggles feed the calculation. Every field is labelled and keyboard
              operable.
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              3 · Readouts
            </dt>
            <dd className="mt-1.5 text-sm leading-6 text-muted-foreground">
              Measurements, a live explanation, an experiment prompt and the model&rsquo;s assumptions
              sit below the stage.
            </dd>
          </div>
        </dl>
      </section>

      <section id="instrument-index" aria-labelledby="instrument-index-title" className="scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
          <div>
            <h2 id="instrument-index-title" className="text-2xl font-semibold tracking-tight text-foreground">
              Instrument index
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {visualizers.length} benches in {subjects.length} subjects. Five per subject, grouped by
              discipline.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">Curated teaching models · not lab equipment</p>
        </div>

        <div className="mt-2">
          {subjects.map((subject) => {
            const entries = visualizersBySubject(subject.slug);
            return (
              <section
                key={subject.slug}
                aria-labelledby={`index-${subject.slug}`}
                className="grid gap-x-8 gap-y-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[14rem_minmax(0,1fr)]"
              >
                <div className={cn('border-l-2 pl-4', ACCENT_BORDER[subject.slug])}>
                  <h3 id={`index-${subject.slug}`} className="text-lg font-semibold text-foreground">
                    {subject.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{subject.description}</p>
                  <Link
                    href={`/visualizers/${subject.slug}`}
                    className={cn(
                      'mt-3 inline-flex items-center gap-1 text-xs font-medium underline-offset-4 hover:underline',
                      ACCENT_TEXT[subject.slug],
                    )}
                  >
                    {subject.name} bench
                    <ArrowRight aria-hidden className="size-3.5" />
                  </Link>
                </div>

                <ul className="divide-y divide-border/70">
                  {entries.map((entry, position) => (
                    <li key={entry.slug}>
                      <Link
                        href={`/visualizers/${entry.subject}/${entry.slug}`}
                        className="group grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline gap-3 py-3 first:pt-1 hover:bg-surface-muted/60"
                      >
                        <span className="numeric text-xs text-muted-foreground">
                          {String(position + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0">
                          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="text-sm font-medium text-foreground">{entry.title}</span>
                            <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                              {LEVEL_LABEL[entry.level]}
                            </span>
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                            {entry.summary}
                          </span>
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="index-note" className="border-t border-border pt-6">
        <h2 id="index-note" className="text-sm font-semibold text-foreground">
          What these benches are, and are not
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          Each visualizer is a deterministic teaching model built from published equations. Where a
          quantity is relative or simplified, the bench says so in its readouts and assumptions. They
          are useful for building intuition and testing relationships; they are not measurement
          instruments, clinical tools or engineering design software.
        </p>
      </section>
    </Container>
  );
}
