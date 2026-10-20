'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import type { SavedRow } from '@/lib/saved/repository';

function itemKey(item: SavedRow) {
  return `${item.resource_type}:${item.resource_id}`;
}

export function SavedList({ items }: { items: SavedRow[] }) {
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const [pending, setPending] = useState<string | null>(null);
  const [failed, setFailed] = useState<string | null>(null);

  async function remove(item: SavedRow) {
    const key = itemKey(item);
    setPending(key);
    setFailed(null);
    try {
      const response = await fetch(
        `/api/saved?resource_type=${encodeURIComponent(item.resource_type)}&resource_id=${encodeURIComponent(item.resource_id)}`,
        { method: 'DELETE' },
      );
      if (!response.ok) throw new Error(`status ${response.status}`);
      setRemoved((prev) => new Set(prev).add(key));
    } catch {
      setFailed(key);
    } finally {
      setPending(null);
    }
  }

  return (
    <ul className="flex flex-col divide-y divide-border rounded-card border border-border bg-surface shadow-card">
      {items.map((item) => {
        const key = itemKey(item);
        if (removed.has(key)) return null;
        return (
          <li key={key} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex min-w-0 flex-col gap-1">
              <a
                href={item.url}
                className="truncate text-sm font-medium text-foreground hover:text-primary"
              >
                {item.title}
              </a>
              <Badge className="w-fit">{item.resource_type}</Badge>
              {failed === key ? (
                <p role="alert" className="text-xs text-danger">
                  Couldn&apos;t remove — try again.
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => remove(item)}
              disabled={pending === key}
              aria-label={`Remove ${item.title}`}
              className="rounded-md p-2 text-muted-foreground hover:bg-surface-muted hover:text-danger"
            >
              <X aria-hidden className="size-4" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
