import { cn } from '@/lib/cn';

export function Badge({
  className,
  accent = false,
  ...props
}: React.ComponentProps<'span'> & { accent?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground',
        accent && 'border-transparent bg-primary/10 text-primary',
        className,
      )}
      {...props}
    />
  );
}
