import { describe, expect, it } from 'vitest';
import { getTopic } from '@/content/topics';
import { SUBJECT_KEYS } from '@/content/types';
import {
  getVisualizer,
  visualizers,
  visualizersBySubject,
  visualizersForTopic,
} from '@/content/visualizers';
import { SPEC_LOADERS } from '@/components/visualizers/registry';

describe('visualizer registry', () => {
  it('ships exactly thirty visualizers, five per subject', () => {
    expect(visualizers).toHaveLength(30);
    for (const subject of SUBJECT_KEYS) {
      const entries = visualizersBySubject(subject);
      expect(entries, subject).toHaveLength(5);
      for (const entry of entries) expect(entry.subject).toBe(subject);
    }
  });

  it('has a unique slug for every visualizer', () => {
    const slugs = visualizers.map((entry) => entry.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(getVisualizer(slug)).toBeDefined();
  });

  it('keeps metadata and lazy loaders in sync', () => {
    const metadataSlugs = visualizers.map((entry) => entry.slug).sort();
    const loaderSlugs = Object.keys(SPEC_LOADERS).sort();
    expect(loaderSlugs).toEqual(metadataSlugs);
  });

  it('maps every visualizer to real curated topics', () => {
    for (const entry of visualizers) {
      expect(entry.topicSlugs.length).toBeGreaterThan(0);
      for (const topicSlug of entry.topicSlugs) {
        expect(getTopic(topicSlug), `${entry.slug} → ${topicSlug}`).toBeDefined();
      }
    }
  });

  it('resolves topic lookups in both directions', () => {
    const entry = getVisualizer('projectile-motion');
    expect(entry).toBeDefined();
    const topicSlug = entry!.topicSlugs[0];
    expect(visualizersForTopic(topicSlug).map((item) => item.slug)).toContain('projectile-motion');
  });

  it('loads every spec into a drawable, self-describing instrument', async () => {
    for (const entry of visualizers) {
      const spec = await SPEC_LOADERS[entry.slug]();
      expect(spec.accent, entry.slug).toBe(entry.subject);
      expect(typeof spec.draw, entry.slug).toBe('function');
      expect(typeof spec.metrics, entry.slug).toBe('function');
      expect(typeof spec.explanation, entry.slug).toBe('function');
      expect(spec.controls.length, entry.slug).toBeGreaterThan(0);
      expect(spec.assumptions.length, entry.slug).toBeGreaterThan(0);
      expect(spec.sources.length, entry.slug).toBeGreaterThan(0);
      expect(spec.stageLabel.length, entry.slug).toBeGreaterThan(0);
    }
  });

  it('gives every slider control a valid range and step', async () => {
    for (const entry of visualizers) {
      const spec = await SPEC_LOADERS[entry.slug]();
      for (const control of spec.controls) {
        if (control.kind !== 'slider') continue;
        expect(control.min, `${entry.slug}/${control.id}`).toBeLessThan(control.max);
        expect(control.step, `${entry.slug}/${control.id}`).toBeGreaterThan(0);
        expect(control.defaultValue, `${entry.slug}/${control.id}`).toBeGreaterThanOrEqual(control.min);
        expect(control.defaultValue, `${entry.slug}/${control.id}`).toBeLessThanOrEqual(control.max);
      }
    }
  });
});
