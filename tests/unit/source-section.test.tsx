import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SourceSection } from '@/components/search/source-section';

describe('SourceSection', () => {
  it('renders an error state with a retry button that calls onRetry once', () => {
    const onRetry = vi.fn();
    render(
      <SourceSection
        title="Videos"
        status="error"
        error={{ code: 'quota', message: 'quota exhausted', retryable: false }}
        onRetry={onRetry}
      >
        <p>never shown</p>
      </SourceSection>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.queryByText('never shown')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /retry/i }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('shows an empty state when ok with no children', () => {
    render(<SourceSection title="Web resources" status="ok">{null}</SourceSection>);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('shows skeletons while loading', () => {
    const { container } = render(
      <SourceSection title="Wikipedia" status="loading">
        <p>not yet</p>
      </SourceSection>,
    );
    expect(screen.queryByText('not yet')).not.toBeInTheDocument();
    expect(container.querySelectorAll('[data-testid="section-skeleton"]').length).toBeGreaterThan(0);
  });

  it('renders children when ok', () => {
    render(
      <SourceSection title="Experiments" status="ok">
        <p>match card</p>
      </SourceSection>,
    );
    expect(screen.getByText('match card')).toBeInTheDocument();
  });
});
