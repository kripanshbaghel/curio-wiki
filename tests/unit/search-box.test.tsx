import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SearchBox } from '@/components/layout/search-box';

const push = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  usePathname: () => '/',
}));

beforeEach(() => {
  push.mockClear();
});

describe('SearchBox', () => {
  it('submits a valid query to /search with the query encoded', () => {
    render(<SearchBox size="hero" />);
    const input = screen.getByRole('searchbox', { name: /search/i });
    fireEvent.change(input, { target: { value: "newton's laws" } });
    fireEvent.click(screen.getByRole('button', { name: /^search$/i }));
    expect(push).toHaveBeenCalledWith(`/search?q=${encodeURIComponent("newton's laws")}`);
  });

  it('clears the input via the clear button', () => {
    render(<SearchBox size="compact" initialValue="physics" />);
    const input = screen.getByRole('searchbox', { name: /search/i }) as HTMLInputElement;
    expect(input.value).toBe('physics');
    fireEvent.click(screen.getByRole('button', { name: /clear/i }));
    expect(input.value).toBe('');
  });

  it('shows an inline error and does not navigate for a 1-char query', () => {
    render(<SearchBox size="hero" />);
    const input = screen.getByRole('searchbox', { name: /search/i });
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.click(screen.getByRole('button', { name: /^search$/i }));
    expect(push).not.toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent(/at least 2 characters/i);
  });
});
