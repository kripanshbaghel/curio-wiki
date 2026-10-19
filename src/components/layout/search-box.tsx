'use client';

import { Search, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { normalizeQuery } from '@/lib/search/normalize';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/cn';

export interface SearchBoxProps {
  initialValue?: string;
  autoFocus?: boolean;
  size: 'hero' | 'compact';
}

export function SearchBox({ initialValue = '', autoFocus, size }: SearchBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [navigating, setNavigating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = normalizeQuery(value);
    if (!result.ok) {
      setError(
        result.reason === 'too_long'
          ? 'Search queries must be 200 characters or fewer.'
          : result.reason === 'invalid'
            ? 'Please enter a normal search query.'
            : 'Please enter at least 2 characters.',
      );
      return;
    }
    setError(null);
    setNavigating(true);
    router.push(`/search?q=${encodeURIComponent(result.value)}`);
  }

  function clear() {
    setValue('');
    setError(null);
    inputRef.current?.focus();
  }

  const isHero = size === 'hero';

  return (
    <form
      onSubmit={submit}
      role="search"
      aria-label="Site search"
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={cn(
          'flex items-center gap-2 rounded-card border border-border bg-surface shadow-card',
          isHero ? 'h-12 px-4' : 'h-10 px-3',
        )}
      >
        <Search aria-hidden className={cn('shrink-0 text-muted-foreground', isHero ? 'size-5' : 'size-4')} />
        <input
          ref={inputRef}
          type="search"
          role="searchbox"
          aria-label="Search"
          autoFocus={autoFocus}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) setError(null);
          }}
          placeholder="Try “photosynthesis” or “pendulum”"
          className="h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        {value ? (
          <button
            type="button"
            aria-label="Clear"
            onClick={clear}
            className="shrink-0 rounded p-1 text-muted-foreground hover:bg-surface-muted hover:text-foreground"
          >
            <X aria-hidden className="size-4" />
          </button>
        ) : null}
        <button
          type="submit"
          aria-label="Search"
          disabled={navigating}
          className={cn(
            'shrink-0 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-60',
            isHero ? 'h-9 px-4 text-sm' : 'h-8 px-3 text-sm',
            'bg-primary text-primary-foreground hover:bg-primary-hover',
          )}
        >
          {navigating ? <Spinner className="size-4" /> : 'Search'}
        </button>
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </form>
  );
}
