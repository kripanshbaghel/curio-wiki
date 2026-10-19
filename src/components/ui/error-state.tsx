import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export function ErrorState({
  title,
  description,
  onRetry,
  retryLabel = 'Retry',
  className,
}: {
  title: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cn(
        'flex h-full flex-col items-center justify-center gap-2 rounded-card border border-danger/30 bg-surface px-6 py-10 text-center',
        className,
      )}
    >
      <AlertTriangle aria-hidden="true" className="size-5 text-danger" />
      <p className="text-sm font-medium text-foreground">{title}</p>
      {description ? <p className="max-w-md text-sm text-muted-foreground">{description}</p> : null}
      {onRetry ? (
        <Button variant="outline" size="sm" className="mt-2" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  );
}
