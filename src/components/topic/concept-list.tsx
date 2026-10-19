import type { KeyConcept } from '@/content/types';

export function ConceptList({ concepts }: { concepts: KeyConcept[] }) {
  if (concepts.length === 0) return null;
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {concepts.map((concept) => (
        <div key={concept.term} className="rounded-card border border-border bg-surface p-4 shadow-card">
          <dt className="text-sm font-semibold text-foreground">{concept.term}</dt>
          <dd className="mt-1 text-sm text-muted-foreground">{concept.definition}</dd>
        </div>
      ))}
    </dl>
  );
}
