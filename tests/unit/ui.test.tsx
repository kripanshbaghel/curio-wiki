import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';
import { ErrorState } from '@/components/ui/error-state';
import { Input } from '@/components/ui/input';
import { SectionHeader } from '@/components/ui/section-header';
import { Spinner } from '@/components/ui/spinner';
import { ThemeToggle } from '@/components/ui/theme-toggle';

describe('design system base components', () => {
  it('renders a primary button with its label', () => {
    render(<Button variant="primary">Search</Button>);
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('renders an outline button with secondary styling hook', () => {
    render(<Button variant="outline" size="sm">Retry</Button>);
    const btn = screen.getByRole('button', { name: 'Retry' });
    expect(btn.className).toMatch(/border-border/);
  });

  it('renders card children', () => {
    render(<Card><p>Card body</p></Card>);
    expect(screen.getByText('Card body')).toBeInTheDocument();
  });

  it('renders EmptyState title and description', () => {
    render(<EmptyState title="Nothing here" description="Try another query" />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
    expect(screen.getByText('Try another query')).toBeInTheDocument();
  });

  it('renders ErrorState with a retry button when onRetry is provided', () => {
    const onRetry = vi.fn();
    render(<ErrorState title="Wikipedia failed" description="Network error" onRetry={onRetry} />);
    expect(screen.getByText('Wikipedia failed')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /retry/i }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('omits the retry button when no onRetry is given', () => {
    render(<ErrorState title="Failed" description="x" />);
    expect(screen.queryByRole('button', { name: /retry/i })).not.toBeInTheDocument();
  });

  it('renders Input with an accessible label', () => {
    render(<Input aria-label="Search query" placeholder="Search a STEM topic" />);
    expect(screen.getByLabelText('Search query')).toHaveAttribute('placeholder', 'Search a STEM topic');
  });

  it('renders Badge with its label', () => {
    render(<Badge>Beginner</Badge>);
    expect(screen.getByText('Beginner')).toBeInTheDocument();
  });

  it('renders Spinner as an accessible status', () => {
    render(<Spinner label="Loading results" />);
    expect(screen.getByRole('status', { name: 'Loading results' })).toBeInTheDocument();
  });

  it('renders Container children centered', () => {
    render(<Container><h1>Inside container</h1></Container>);
    const child = screen.getByText('Inside container');
    expect(child.closest('div')).toHaveClass('mx-auto');
  });

  it('renders SectionHeader title and action', () => {
    render(<SectionHeader title="Wikipedia" action={<a href="#see-all">See all</a>} />);
    expect(screen.getByRole('heading', { name: 'Wikipedia' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See all' })).toHaveAttribute('href', '#see-all');
  });

  it('ThemeToggle switches the document dark class on click', () => {
    render(<ThemeToggle />);
    const before = document.documentElement.classList.contains('dark');
    fireEvent.click(screen.getByRole('button', { name: /theme/i }));
    const after = document.documentElement.classList.contains('dark');
    expect(after).toBe(!before);
    document.documentElement.classList.remove('dark');
  });
});
