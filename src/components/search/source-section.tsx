'use client';

import { Children } from 'react';
import { EmptyState } from '@/components/ui/empty-state';
import { ErrorState } from '@/components/ui/error-state';
import { Skeleton } from '@/components/ui/skeleton';

export interface SourceSectionProps {
  title: string;
  status: 'ok' | 'error' | 'loading';
  error?: { code: string; message: string; retryable: boolean };
  children?: React.ReactNode;
  onRetry?: () => void;
}

export function SourceSection({ title, status, error, children, onRetry }: SourceSectionProps) {
  const isEmpty = children == null || Children.count(children) === 0;

  return (
    <section className="flex flex-col">
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      {status === 'loading' ? (
        <div data-testid="section-skeleton" className="flex flex-col gap-3" aria-hidden>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ) : status === 'error' ? (
        <ErrorState
          title="This section failed to load"
          description={error?.message}
          onRetry={onRetry}
        />
      ) : isEmpty ? (
        <EmptyState title="No results" description="Nothing matched in this section." />
      ) : (
        children
      )}
    </section>
  );
}
