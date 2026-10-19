import { cn } from '@/lib/cn';

export function SectionHeader({
  title,
  action,
  description,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-6 flex items-end justify-between gap-4', className)}>
      <div className="min-w-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0 text-sm">{action}</div> : null}
    </div>
  );
}
