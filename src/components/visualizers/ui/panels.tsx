import type { DataTable, Experiment, Metric } from '@/lib/visualizers/types';
import type { SourceLink, SubjectKey } from '@/content/types';
import { cn } from '@/lib/cn';

const ACCENT_BORDER: Record<SubjectKey, string> = {
  physics: 'border-physics',
  chemistry: 'border-chemistry',
  biology: 'border-biology',
  mathematics: 'border-mathematics',
  technology: 'border-technology',
  engineering: 'border-engineering',
};

export function ReadoutStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-surface px-3 py-3">
          <dt className="text-xs leading-4 text-muted-foreground">{metric.label}</dt>
          <dd className="mt-1 flex items-baseline gap-1">
            <span className="numeric text-base font-semibold tracking-tight text-foreground">
              {metric.value}
            </span>
            {metric.unit ? (
              <span className="text-xs text-muted-foreground">{metric.unit}</span>
            ) : null}
          </dd>
          {metric.hint ? (
            <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">{metric.hint}</p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

export function ExplanationPanel({
  headline,
  body,
  accent,
}: {
  headline: string;
  body: string;
  accent: SubjectKey;
}) {
  return (
    <section
      aria-labelledby="viz-explanation"
      className={cn('border-l-2 pl-4 sm:pl-5', ACCENT_BORDER[accent])}
    >
      <h2 id="viz-explanation" className="text-sm font-semibold text-foreground">
        What you are seeing
      </h2>
      <p className="mt-2 text-sm font-medium text-foreground">{headline}</p>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">{body}</p>
    </section>
  );
}

export function DataTableView({ table }: { table: DataTable }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[22rem] text-left text-sm">
        {table.caption ? <caption className="mb-2 text-left text-xs text-muted-foreground">{table.caption}</caption> : null}
        <thead>
          <tr className="border-b border-border">
            {table.headers.map((header) => (
              <th key={header} scope="col" className="py-1.5 pr-4 text-xs font-medium text-muted-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, index) => (
            <tr
              key={`${row.cells.join('-')}-${index}`}
              className={cn(
                'border-b border-border/60 last:border-0',
                row.highlight && 'bg-primary/5',
              )}
            >
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-1.5 pr-4 font-mono text-xs text-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExperimentPanel({ experiment, table }: { experiment: Experiment; table?: DataTable }) {
  return (
    <section aria-labelledby="viz-experiment" className="rounded-card border border-border bg-surface p-5">
      <h2 id="viz-experiment" className="text-sm font-semibold text-foreground">
        Try it
      </h2>
      <p className="mt-2 text-sm font-medium text-foreground">{experiment.question}</p>
      <ol className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
        {experiment.steps.map((step, index) => (
          <li key={step} className="flex gap-2.5">
            <span className="numeric flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-[11px] text-muted-foreground">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <details className="mt-4 border-t border-border pt-3">
        <summary className="cursor-pointer text-xs font-medium text-primary">
          Reveal the expected result
        </summary>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{experiment.expected}</p>
      </details>
      {table ? (
        <div className="mt-5 border-t border-border pt-4">
          <DataTableView table={table} />
        </div>
      ) : null}
    </section>
  );
}

export function ModelNote({
  assumptions,
  sources,
}: {
  assumptions: string[];
  sources: SourceLink[];
}) {
  return (
    <section className="border-t border-border pt-4">
      <details>
        <summary className="cursor-pointer text-sm font-medium text-foreground">
          Model and assumptions
        </summary>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          This is a teaching model, not a laboratory instrument or an engineering design tool.
          It follows the equations below within the stated limits.
        </p>
        <ul className="mt-3 space-y-1.5">
          {assumptions.map((assumption) => (
            <li key={assumption} className="text-xs leading-5 text-muted-foreground">
              {assumption}
            </li>
          ))}
        </ul>
        {sources.length > 0 ? (
          <div className="mt-3">
            <p className="text-xs font-medium text-foreground">References</p>
            <ul className="mt-1 space-y-1">
              {sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary underline-offset-2 hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </details>
    </section>
  );
}
