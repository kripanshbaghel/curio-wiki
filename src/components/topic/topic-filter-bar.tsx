import Link from 'next/link';
import { categoryLabel, SUBJECT_CATEGORIES } from '@/content/categories';
import { getSubject } from '@/content/subjects';
import { SUBJECT_KEYS } from '@/content/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export interface TopicFilters {
  subject?: string;
  category?: string;
  q?: string;
  collection?: string;
}

interface TopicFilterBarProps {
  basePath: string;
  categories: readonly string[];
  current: TopicFilters;
  /** Render subject chips (used on the global /topics page). */
  showSubjects?: boolean;
}

export function topicsHref(basePath: string, params: TopicFilters & { page?: string }): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) search.set(key, value);
  }
  const query = search.toString();
  return query ? `${basePath}?${query}` : basePath;
}

/** All category slugs across subjects, de-duplicated and sorted. */
export function allCategorySlugs(): string[] {
  const set = new Set<string>();
  for (const subject of SUBJECT_KEYS) {
    for (const category of SUBJECT_CATEGORIES[subject]) set.add(category);
  }
  return [...set].sort();
}

const chipBase = 'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium';
const chipActive = 'border-transparent bg-primary text-primary-foreground';
const chipIdle = 'border-border bg-surface text-foreground hover:border-primary/40';

export function TopicFilterBar({
  basePath,
  categories,
  current,
  showSubjects = false,
}: TopicFilterBarProps) {
  const subjectValue = current.subject as (typeof SUBJECT_KEYS)[number] | undefined;

  return (
    <div className="flex flex-col gap-4">
      {showSubjects ? (
        <nav aria-label="Filter by subject">
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link
                href={topicsHref(basePath, {
                  category: current.category,
                  q: current.q,
                  collection: current.collection,
                })}
                className={cn(chipBase, subjectValue ? chipIdle : chipActive)}
              >
                All subjects
              </Link>
            </li>
            {SUBJECT_KEYS.map((subjectKey) => {
              const subject = getSubject(subjectKey);
              const active = subjectValue === subjectKey;
              return (
                <li key={subjectKey}>
                  <Link
                    href={topicsHref(basePath, {
                      subject: subjectKey,
                      category: current.category,
                      q: current.q,
                      collection: current.collection,
                    })}
                    className={cn(chipBase, active ? chipActive : chipIdle)}
                  >
                    {subject?.name ?? subjectKey}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}

      <form
        action={basePath}
        method="get"
        className="flex flex-col gap-3 rounded-card border border-border bg-surface p-4 sm:flex-row sm:items-end"
      >
        {current.subject ? <input type="hidden" name="subject" value={current.subject} /> : null}
        {current.collection ? (
          <input type="hidden" name="collection" value={current.collection} />
        ) : null}

        <label className="flex flex-1 flex-col gap-1 text-sm font-medium text-foreground">
          Search topics
          <input
            type="search"
            name="q"
            defaultValue={current.q ?? ''}
            placeholder="Filter by title, alias, or category"
            className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-foreground sm:w-56">
          Category
          <select
            name="category"
            defaultValue={current.category ?? ''}
            className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {categoryLabel(category)}
              </option>
            ))}
          </select>
        </label>

        <Button type="submit">Filter</Button>
      </form>
    </div>
  );
}
