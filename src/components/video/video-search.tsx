'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function VideoSearch({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/videos?q=${encodeURIComponent(trimmed)}` : '/videos');
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex w-full max-w-md gap-2">
      <Input
        type="search"
        aria-label="Search videos"
        placeholder="Search educational videos…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button type="submit" aria-label="Search">
        <Search aria-hidden className="size-4" />
        Search
      </Button>
    </form>
  );
}
