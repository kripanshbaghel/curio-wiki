import Link from 'next/link';
import { Atom, Cpu, FlaskConical, Leaf, Sigma, Wrench } from 'lucide-react';
import { subjects } from '@/content/subjects';
import type { SubjectIcon, SubjectKey } from '@/content/types';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/cn';

const ICONS: Record<SubjectIcon, React.ComponentType<{ 'aria-hidden'?: boolean; className?: string }>> = {
  atom: Atom,
  flask: FlaskConical,
  leaf: Leaf,
  sigma: Sigma,
  cpu: Cpu,
  wrench: Wrench,
};

/** Literal classes so Tailwind's scanner can see them. */
const ACCENT_TEXT: Record<SubjectKey, string> = {
  physics: 'text-physics',
  chemistry: 'text-chemistry',
  biology: 'text-biology',
  mathematics: 'text-mathematics',
  technology: 'text-technology',
  engineering: 'text-engineering',
};

export function SubjectGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {subjects.map((subject) => {
        const Icon = ICONS[subject.icon];
        return (
          <li key={subject.slug}>
            <Link
              href={`/subjects/${subject.slug}`}
              className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card className="h-full transition-colors hover:border-primary/40">
                <Icon aria-hidden className={cn('mb-3 size-6', ACCENT_TEXT[subject.accent])} />
                <h3 className="font-semibold text-foreground">{subject.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{subject.description}</p>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
