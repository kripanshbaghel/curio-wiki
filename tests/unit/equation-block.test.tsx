import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EquationBlock } from '@/components/topic/equation-block';

describe('EquationBlock', () => {
  it('renders KaTeX html and mathml for F = ma without throwing', () => {
    const { container } = render(
      <EquationBlock
        label="Newton's second law"
        latex="F = ma"
        variables={[
          { symbol: 'F', meaning: 'net force' },
          { symbol: 'm', meaning: 'mass' },
          { symbol: 'a', meaning: 'acceleration' },
        ]}
      />,
    );
    expect(container.querySelector('.katex')).not.toBeNull();
    expect(container.querySelector('.katex-mathml')).not.toBeNull();
    expect(container.querySelector('.katex-html')).not.toBeNull();
    expect(container.textContent).toContain('net force');
  });

  it('still shows the source when the latex is invalid', () => {
    const { container } = render(
      <EquationBlock label="Broken" latex="\\notacommand{1" variables={[]} />,
    );
    expect(container.textContent).toContain('notacommand');
  });
});
