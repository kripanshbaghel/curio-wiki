import { describe, expect, it } from 'vitest';
import { EXTERNAL_RESOURCES } from '@/data/external-resources';

describe('external resources', () => {
  it('every resource has a title, url, description, and category', () => {
    expect(EXTERNAL_RESOURCES.length).toBeGreaterThan(0);
    for (const resource of EXTERNAL_RESOURCES) {
      expect(resource.title.length).toBeGreaterThan(0);
      expect(resource.description.length).toBeGreaterThan(0);
      expect(resource.category.length).toBeGreaterThan(0);
    }
  });

  it('every url is a safe https link', () => {
    for (const resource of EXTERNAL_RESOURCES) {
      expect(resource.url.startsWith('https://')).toBe(true);
      expect(resource.url).not.toMatch(/^https:\/\/[^/]*@/); // no credentials
    }
  });

  it('urls are unique', () => {
    const urls = EXTERNAL_RESOURCES.map((resource) => resource.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
