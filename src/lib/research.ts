interface ResearchEntry {
  value: unknown;
  createdAt: number;
  lastAccessedAt: number;
  expiresAt: number;
}

const store = new Map<string, ResearchEntry>();

const DEFAULT_TTL_MS = 30 * 60 * 1000; // 30 minutes
const INACTIVITY_TTL_MS = 10 * 60 * 1000; // 10 minutes of inactivity
const MAX_ENTRIES = 1000;

export interface ResearchData {
  query: string;
  wikipedia?: Array<{ title: string; key: string; url: string; description: string | null; excerpt: string }>;
  wikipediaSummary?: {
    title: string;
    extract: string;
    description: string | null;
    pageUrl: string;
    license: string;
  } | null;
  youtube?: Array<{ id: string; title: string; channelTitle: string; url: string; embedUrl: string; thumbnailUrl: string | null }>;
  web?: Array<{ title: string; url: string; snippet: string; domain: string }>;
}

export interface StoreResearchOptions {
  ttlMs?: number;
}

export function storeResearch(
  sessionId: string,
  data: ResearchData,
  opts: StoreResearchOptions = {},
): void {
  const now = Date.now();
  const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;

  // Enforce bounded memory: evict oldest entries if at capacity.
  if (store.size >= MAX_ENTRIES && !store.has(sessionId)) {
    const oldestKey = store.keys().next().value;
    if (oldestKey !== undefined) store.delete(oldestKey);
  }

  store.set(sessionId, {
    value: data,
    createdAt: now,
    lastAccessedAt: now,
    expiresAt: now + ttlMs,
  });
}

export function getResearch(sessionId: string): ResearchData | null {
  const entry = store.get(sessionId);
  if (!entry) return null;

  const now = Date.now();

  // Expired by TTL.
  if (now > entry.expiresAt) {
    store.delete(sessionId);
    return null;
  }

  // Expired by inactivity.
  if (now - entry.lastAccessedAt > INACTIVITY_TTL_MS) {
    store.delete(sessionId);
    return null;
  }

  // Refresh last accessed time.
  entry.lastAccessedAt = now;
  store.set(sessionId, entry);

  return entry.value as ResearchData;
}

export function finishResearch(sessionId: string): boolean {
  return store.delete(sessionId);
}

export function hasResearch(sessionId: string): boolean {
  return store.has(sessionId);
}

export function cleanupExpiredResearch(now: number = Date.now()): number {
  let removed = 0;
  for (const [sessionId, entry] of store) {
    if (now > entry.expiresAt || now - entry.lastAccessedAt > INACTIVITY_TTL_MS) {
      store.delete(sessionId);
      removed += 1;
    }
  }
  return removed;
}

export function getResearchStats(): {
  entryCount: number;
  oldestAgeMs: number | null;
} {
  const now = Date.now();
  let oldestAge: number | null = null;
  for (const entry of store.values()) {
    const age = now - entry.createdAt;
    if (oldestAge === null || age > oldestAge) oldestAge = age;
  }
  return { entryCount: store.size, oldestAgeMs: oldestAge };
}

export function __clearResearchStoreForTests(): void {
  store.clear();
}
