import { ShieldAlert } from 'lucide-react';
import type { ExperimentSupervision } from '@/content/types';

const BANNERS: Record<'adult-required' | 'teacher-led', string> = {
  'adult-required': 'Adult supervision required for this experiment.',
  'teacher-led': 'Teacher-led: follow your classroom lab rules.',
};

export function SafetyNotice({
  supervision,
  safety,
}: {
  supervision: ExperimentSupervision;
  safety: string[];
}) {
  const banner = supervision === 'none' ? null : BANNERS[supervision];

  return (
    <section
      aria-labelledby="safety-heading"
      className="rounded-card border border-danger/30 bg-surface p-6 shadow-card"
    >
      <h2 id="safety-heading" className="flex items-center gap-2 font-semibold text-foreground">
        <ShieldAlert aria-hidden className="size-5 text-danger" />
        Safety first
      </h2>
      {banner ? (
        <p className="mt-3 rounded-md bg-danger/10 px-3 py-2 text-sm font-medium text-danger">
          {banner}
        </p>
      ) : null}
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {safety.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
