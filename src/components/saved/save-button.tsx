'use client';

import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useState } from 'react';
import type { SavedItem } from '@/lib/saved/repository';
import { cn } from '@/lib/cn';

export function SaveButton({
  resourceType,
  resourceId,
  title,
  url,
  initialSaved = false,
}: {
  resourceType: SavedItem['resource_type'];
  resourceId: string;
  title: string;
  url: string;
  initialSaved?: boolean;
}) {
  const [saved, setSaved] = useState(initialSaved);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function toggle() {
    setPending(true);
    setFailed(false);
    const next = !saved;
    setSaved(next); // optimistic
    try {
      const response = next
        ? await fetch('/api/saved', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ resource_type: resourceType, resource_id: resourceId, title, url }),
          })
        : await fetch(
            `/api/saved?resource_type=${encodeURIComponent(resourceType)}&resource_id=${encodeURIComponent(resourceId)}`,
            { method: 'DELETE' },
          );
      if (!response.ok) throw new Error(`status ${response.status}`);
    } catch {
      setSaved(!next); // revert
      setFailed(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        aria-pressed={saved}
        className={cn(
          'inline-flex h-8 items-center gap-1.5 rounded-md border px-3 text-sm font-medium transition-colors',
          saved
            ? 'border-primary bg-primary/10 text-primary'
            : 'border-border text-foreground hover:bg-surface-muted',
        )}
      >
        {saved ? (
          <BookmarkCheck aria-hidden className="size-4" />
        ) : (
          <Bookmark aria-hidden className="size-4" />
        )}
        {saved ? 'Saved' : 'Save'}
      </button>
      {failed ? (
        <p role="alert" className="text-xs text-danger">
          Couldn&apos;t update saved items — try again.
        </p>
      ) : null}
    </div>
  );
}
