import Link from 'next/link';

interface PaginationProps {
  page: number;
  pageCount: number;
  makeHref: (page: number) => string;
}

const linkClass =
  'inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground hover:border-primary/40';
const disabledClass =
  'inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground/60';

export function Pagination({ page, pageCount, makeHref }: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-3">
      {page > 1 ? (
        <Link className={linkClass} href={makeHref(page - 1)} rel="prev">
          Previous
        </Link>
      ) : (
        <span className={disabledClass}>Previous</span>
      )}
      <p className="text-sm text-muted-foreground">
        Page {page} of {pageCount}
      </p>
      {page < pageCount ? (
        <Link className={linkClass} href={makeHref(page + 1)} rel="next">
          Next
        </Link>
      ) : (
        <span className={disabledClass}>Next</span>
      )}
    </nav>
  );
}
