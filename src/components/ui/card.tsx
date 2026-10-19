import { cn } from '@/lib/cn';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('h-full rounded-card border border-border bg-surface p-6 shadow-card', className)}
      {...props}
    />
  );
}
