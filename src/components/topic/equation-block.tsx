import katex from 'katex';
import type { Equation } from '@/content/types';

function renderLatex(latex: string): string {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
      output: 'htmlAndMathml',
    });
  } catch {
    // Even throwOnError:false can fail on parse errors — render source as text.
    return `<pre>${latex.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>`;
  }
}

export function EquationBlock({ label, latex, variables }: Equation) {
  return (
    <figure className="rounded-card border border-border bg-surface p-6 shadow-card">
      <figcaption className="text-sm font-medium text-muted-foreground">{label}</figcaption>
      <div
        className="mt-3 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: renderLatex(latex) }}
      />
      {variables.length > 0 ? (
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th scope="col" className="py-1 pr-4 font-medium">Symbol</th>
              <th scope="col" className="py-1 font-medium">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {variables.map((variable) => (
              <tr key={variable.symbol} className="border-b border-border/50 last:border-0">
                <td className="py-1.5 pr-4 font-mono text-foreground">{variable.symbol}</td>
                <td className="py-1.5 text-muted-foreground">{variable.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </figure>
  );
}
