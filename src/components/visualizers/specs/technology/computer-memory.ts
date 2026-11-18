import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { memoryModel, mulberry32 } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'technology',
  aspect: 1.65,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'A memory hierarchy from CPU registers through cache and RAM to storage, with an animated access',
  stageHint: 'Each pulse is one memory access. A hit stops at cache; a miss continues to RAM. Working-set size, cache size and access pattern set the modelled hit rate and average latency.',
  controls: [
    { kind: 'slider', id: 'working', label: 'Working set', min: 1, max: 512, step: 1, defaultValue: 64, unit: 'MB' },
    { kind: 'slider', id: 'cache', label: 'Cache size', min: 1, max: 64, step: 1, defaultValue: 8, unit: 'MB' },
    {
      kind: 'segment',
      id: 'pattern',
      label: 'Access pattern',
      defaultValue: 'sequential',
      options: [
        { value: 'sequential', label: 'Sequential' },
        { value: 'random', label: 'Random' },
      ],
    },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const working = num(params, 'working');
    const cache = num(params, 'cache');
    const pattern = str(params, 'pattern') === 'random' ? 'random' : 'sequential';
    const model = memoryModel(working, cache, pattern);
    const accent = CANVAS_COLORS.technology;

    const rowY = 122;
    const levels = [
      { key: 'registers', title: 'Registers', detail: '< 1 ns', width: 0.12, height: 38, color: CANVAS_COLORS.ink },
      { key: 'cache', title: 'Cache', detail: `${cache.toFixed(0)} MB · 4 ns`, width: 0.17, height: 58, color: CANVAS_COLORS.biology },
      { key: 'ram', title: 'RAM', detail: `${working.toFixed(0)} MB · 80 ns`, width: 0.2, height: 82, color: CANVAS_COLORS.physics },
      { key: 'storage', title: 'Storage', detail: 'backing store', width: 0.17, height: 66, color: CANVAS_COLORS.muted },
    ];
    const centers: number[] = [];
    const boxes: Array<{ x: number; width: number }> = [];
    let cursor = view.width * 0.06;
    levels.forEach((level, index) => {
      const boxWidth = view.width * level.width;
      const x = cursor;
      const y = rowY - level.height / 2;
      centers.push(x + boxWidth / 2);
      boxes.push({ x, width: boxWidth });
      ctx.save();
      roundRectPath(ctx, x, y, boxWidth, level.height, 7);
      ctx.fillStyle = index === 3 ? 'rgba(200, 215, 240, 0.04)' : 'rgba(79, 224, 200, 0.05)';
      ctx.fill();
      ctx.strokeStyle = index === 3 ? CANVAS_COLORS.hairline : level.color;
      ctx.lineWidth = index === 3 ? 1 : 1.6;
      ctx.stroke();
      ctx.restore();
      label(ctx, level.title, x + boxWidth / 2, y + 16, {
        align: 'center',
        color: index === 3 ? CANVAS_COLORS.muted : level.color,
        size: 9,
        weight: 600,
      });
      label(ctx, level.detail, x + boxWidth / 2, y + level.height - 12, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 8,
      });
      cursor += boxWidth + view.width * 0.055;
    });

    // Buses between levels.
    for (let index = 0; index < boxes.length - 1; index += 1) {
      line(
        ctx,
        boxes[index].x + boxes[index].width,
        rowY,
        boxes[index + 1].x,
        rowY,
        index === 2 ? 'rgba(200, 215, 240, 0.18)' : CANVAS_COLORS.hairline,
        1.5,
        index === 2 ? [5, 5] : [],
      );
    }

    const accessIndex = Math.floor(t * 1.5);
    const hit = mulberry32(20261118 + accessIndex)() < model.hitRate;
    const target = hit ? centers[1] : centers[2];
    const progress = (t * 1.5) % 1;
    const travel = Math.sin(progress * Math.PI);
    const pulseX = centers[0] + (target - centers[0]) * travel;
    dot(ctx, pulseX, rowY, 5, hit ? CANVAS_COLORS.biology : CANVAS_COLORS.warn, true);
    label(ctx, hit ? 'hit' : 'miss', pulseX, rowY - 16, {
      align: 'center',
      color: hit ? CANVAS_COLORS.biology : CANVAS_COLORS.warn,
      size: 9,
      weight: 600,
    });

    label(ctx, `${pattern} access · request ${accessIndex + 1}`, view.width / 2, 54, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });

    // Hit-rate bar.
    const bar = { x: view.width * 0.12, y: view.height - 82, width: view.width * 0.76 };
    line(ctx, bar.x, bar.y, bar.x + bar.width, bar.y, CANVAS_COLORS.hairline, 8);
    line(ctx, bar.x, bar.y, bar.x + bar.width * model.hitRate, bar.y, CANVAS_COLORS.biology, 8);
    label(ctx, 'cache hit rate', bar.x, bar.y - 16, { color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, `${(model.hitRate * 100).toFixed(1)}%`, bar.x + bar.width, bar.y - 16, {
      align: 'right',
      color: CANVAS_COLORS.ink,
      size: 10,
      weight: 600,
    });

    // Latency comparison.
    const latencyY = view.height - 34;
    const scale = bar.width / 90;
    line(ctx, bar.x, latencyY, bar.x + bar.width, latencyY, CANVAS_COLORS.hairline, 1);
    line(ctx, bar.x + 4 * scale, latencyY - 6, bar.x + 4 * scale, latencyY + 6, CANVAS_COLORS.biology, 2);
    label(ctx, 'cache 4 ns', bar.x + 4 * scale, latencyY + 16, { align: 'center', color: CANVAS_COLORS.biology, size: 8 });
    line(ctx, bar.x + 80 * scale, latencyY - 6, bar.x + 80 * scale, latencyY + 6, CANVAS_COLORS.physics, 2);
    label(ctx, 'RAM 80 ns', bar.x + 80 * scale, latencyY + 16, { align: 'center', color: CANVAS_COLORS.physics, size: 8 });
    dot(ctx, bar.x + model.averageLatency * scale, latencyY, 4, CANVAS_COLORS.mathematics, true);
    label(ctx, `avg ${model.averageLatency.toFixed(1)} ns`, bar.x + model.averageLatency * scale, latencyY - 14, {
      align: 'center',
      color: CANVAS_COLORS.mathematics,
      size: 8,
      weight: 600,
    });

    drawTitle(ctx, view.width, `Memory hierarchy · ${(model.hitRate * 100).toFixed(0)}% hit rate`);
    label(ctx, `${formatNumber(model.averageLatency, 1)} ns average`, view.width - 16, 24, {
      align: 'right',
      color: accent,
      size: 9,
      weight: 600,
    });
    cornerNote(ctx, view.width, view.height, 'Latencies illustrative · storage not on the modelled hot path');
  },
  metrics(params, t) {
    const model = memoryModel(
      num(params, 'working'),
      num(params, 'cache'),
      str(params, 'pattern') === 'random' ? 'random' : 'sequential',
    );
    const accessIndex = Math.floor(t * 1.5);
    const hit = mulberry32(20261118 + accessIndex)() < model.hitRate;
    return [
      { label: 'Hit rate', value: formatNumber(model.hitRate * 100, 1), unit: '%' },
      { label: 'Average latency', value: formatNumber(model.averageLatency, 1), unit: 'ns' },
      { label: 'Last access', value: hit ? 'Hit' : 'Miss' },
      { label: 'Working set', value: formatNumber(num(params, 'working'), 0), unit: 'MB' },
      { label: 'Cache', value: formatNumber(num(params, 'cache'), 0), unit: 'MB' },
      { label: 'Misses / 100', value: formatNumber((1 - model.hitRate) * 100, 0) },
    ];
  },
  explanation(params, t) {
    const working = num(params, 'working');
    const cache = num(params, 'cache');
    const pattern = str(params, 'pattern') === 'random' ? 'random' : 'sequential';
    const model = memoryModel(working, cache, pattern);
    const accessIndex = Math.floor(t * 1.5);
    const lastHit = mulberry32(20261118 + accessIndex)() < model.hitRate;
    return {
      headline: lastHit ? 'This access was served from cache.' : 'This access missed cache and went to RAM.',
      body: `With a ${working.toFixed(0)} MB working set and a ${cache.toFixed(0)} MB cache, the ${pattern} model gives a ${(model.hitRate * 100).toFixed(1)}% hit rate and an average latency of ${model.averageLatency.toFixed(1)} ns. A cache hit costs about 4 ns; a miss costs about 80 ns. Real processors also use cache lines, associativity, prefetching and multiple cache levels, so this is a deliberately small model.`,
    };
  },
  experiment: {
    question: 'Which lowers the hit rate more: doubling the working set or switching from sequential to random?',
    steps: [
      'Set the working set to 64 MB, cache to 8 MB and pattern to sequential.',
      'Record the hit rate, then switch to random and compare.',
      'Return to sequential and double the working set to 128 MB.',
    ],
    expected:
      'Both changes lower the hit rate. In this model the working set has the larger effect because it changes the cache-to-working-set ratio directly; random access removes the sequential locality bonus. Real hardware behaviour depends on the access trace, not just the sizes.',
  },
  assumptions: [
    'The hierarchy and latencies are illustrative (cache 4 ns, RAM 80 ns) rather than timings for a specific processor.',
    'The hit-rate formula is a small teaching model based on cache size, working-set size and access pattern; it is not a cache simulator.',
    'Storage is shown as the backing store but is not on the modelled hot path; page faults and disk latency are not simulated.',
    'A deterministic pseudo-random sequence drives the hit/miss animation so the same run is reproducible.',
  ],
  sources: [
    SOURCES.memory,
    { label: 'CPU cache — Wikipedia', url: 'https://en.wikipedia.org/wiki/CPU_cache' },
  ],
  table(params) {
    const cache = num(params, 'cache');
    const pattern = str(params, 'pattern') === 'random' ? 'random' : 'sequential';
    return {
      caption: `Hit rate and latency as the working set changes (${cache.toFixed(0)} MB cache, ${pattern})`,
      headers: ['Working set (MB)', 'Hit rate (%)', 'Average latency (ns)'],
      rows: [16, 32, 64, 128, 256].map((working) => {
        const model = memoryModel(working, cache, pattern);
        return {
          cells: [
            String(working),
            formatNumber(model.hitRate * 100, 1),
            formatNumber(model.averageLatency, 1),
          ],
          highlight: Math.abs(working - num(params, 'working')) < 1,
        };
      }),
    };
  },
};

export default spec;
