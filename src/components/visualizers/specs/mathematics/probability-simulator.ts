import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { probabilitySummary, probabilityTrial } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, panel, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'mathematics',
  aspect: 1.65,
  autoPlay: true,
  stageLabel: 'A probability experiment chart comparing observed results with the theoretical probability',
  stageHint: 'Trials accumulate while the model runs. Pause to inspect a snapshot; reset starts the same reproducible sequence again.',
  controls: [
    { kind: 'select', id: 'experiment', label: 'Experiment', defaultValue: 'coin', options: [
      { value: 'coin', label: 'Fair coin' },
      { value: 'die', label: 'Roll a six' },
      { value: 'biased', label: 'Biased coin' },
    ] },
    { kind: 'slider', id: 'bias', label: 'Bias (heads)', min: 0.1, max: 0.9, step: 0.05, defaultValue: 0.5, when: (p) => str(p, 'experiment') === 'biased' },
    { kind: 'slider', id: 'trials', label: 'Target trials', min: 20, max: 1000, step: 20, defaultValue: 200 },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const experiment = str(params, 'experiment') as 'coin' | 'die' | 'biased';
    const bias = num(params, 'bias');
    const target = Math.max(1, Math.round(num(params, 'trials')));
    const completed = Math.min(target, Math.floor(t * 25));
    const summary = probabilitySummary(experiment, bias, completed);
    const theoretical = summary.theoretical;

    const chart = { x: 54, y: 66, width: view.width - 104, height: view.height - 142 };
    panel(ctx, chart, CANVAS_COLORS.raised);
    const barWidth = chart.width * 0.22;
    const barX = chart.x + chart.width * 0.18;
    const baseY = chart.y + chart.height - 18;
    const maxBar = chart.height - 52;
    const empirical = summary.empirical;
    ctx.save();
    ctx.fillStyle = CANVAS_COLORS.mathematics;
    ctx.fillRect(barX, baseY - empirical * maxBar, barWidth, empirical * maxBar);
    ctx.fillStyle = CANVAS_COLORS.hairline;
    ctx.fillRect(barX + barWidth + 34, baseY - theoretical * maxBar, barWidth, theoretical * maxBar);
    ctx.restore();
    label(ctx, 'Observed', barX + barWidth / 2, baseY + 14, { align: 'center', color: CANVAS_COLORS.mathematics, size: 10 });
    label(ctx, `${(empirical * 100).toFixed(1)}%`, barX + barWidth / 2, baseY - empirical * maxBar - 10, { align: 'center', color: CANVAS_COLORS.mathematics, size: 12, weight: 600 });
    label(ctx, 'Theoretical', barX + barWidth + 34 + barWidth / 2, baseY + 14, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, `${(theoretical * 100).toFixed(1)}%`, barX + barWidth + 34 + barWidth / 2, baseY - theoretical * maxBar - 10, { align: 'center', color: CANVAS_COLORS.muted, size: 12, weight: 600 });

    const dotStartX = chart.x + chart.width * 0.62;
    const dotStartY = chart.y + 24;
    const shown = Math.min(60, completed);
    for (let index = 0; index < shown; index += 1) {
      const trialIndex = completed - shown + index;
      const success = probabilityTrial(experiment, bias, trialIndex);
      dot(ctx, dotStartX + (index % 15) * 13, dotStartY + Math.floor(index / 15) * 16, 4, success ? CANVAS_COLORS.mathematics : CANVAS_COLORS.muted, false);
    }
    label(ctx, 'Last 60 trials', dotStartX, dotStartY - 10, { color: CANVAS_COLORS.muted, size: 9 });

    const progress = completed / target;
    line(ctx, chart.x, view.height - 28, chart.x + chart.width, view.height - 28, CANVAS_COLORS.hairline, 5);
    line(ctx, chart.x, view.height - 28, chart.x + chart.width * progress, view.height - 28, CANVAS_COLORS.technology, 5);
    label(ctx, `${completed} / ${target} trials`, chart.x, view.height - 42, { color: CANVAS_COLORS.muted, size: 10 });

    drawTitle(ctx, view.width, `P(success) = ${formatNumber(theoretical, 3)}`);
    label(ctx, `deviation ${(summary.deviation * 100).toFixed(1)} pp`, view.width - 16, 18, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    cornerNote(ctx, view.width, view.height, 'Seeded sequence · independent trials');
  },
  metrics(params, t) {
    const completed = Math.min(Math.round(num(params, 'trials')), Math.floor(t * 25));
    const summary = probabilitySummary(str(params, 'experiment') as 'coin' | 'die' | 'biased', num(params, 'bias'), completed);
    return [
      { label: 'Trials completed', value: String(completed) },
      { label: 'Successes', value: String(summary.successes) },
      { label: 'Observed', value: formatNumber(summary.empirical * 100, 1), unit: '%' },
      { label: 'Theoretical', value: formatNumber(summary.theoretical * 100, 1), unit: '%' },
      { label: 'Deviation', value: formatNumber(summary.deviation * 100, 1), unit: 'pp' },
      { label: 'Target', value: String(Math.round(num(params, 'trials'))) },
    ];
  },
  explanation(params, t) {
    const experiment = str(params, 'experiment') as 'coin' | 'die' | 'biased';
    const completed = Math.min(Math.round(num(params, 'trials')), Math.floor(t * 25));
    const summary = probabilitySummary(experiment, num(params, 'bias'), completed);
    const labelText = experiment === 'die' ? 'rolling a six' : experiment === 'biased' ? 'a biased coin landing heads' : 'a fair coin landing heads';
    return {
      headline: 'Short runs scatter; long runs settle near the theoretical probability.',
      body: `After ${completed} trials the observed proportion for ${labelText} is ${(summary.empirical * 100).toFixed(1)}%, compared with ${(summary.theoretical * 100).toFixed(1)}% theoretically. The gap is ${Math.abs(summary.deviation * 100).toFixed(1)} percentage points. The sequence is seeded, so the same run is reproducible.`,
    };
  },
  experiment: {
    question: 'Which is closer to 50%: 20 coin flips or 500 coin flips?',
    steps: [
      'Choose the fair coin and set the target to 20.',
      'Reset, let it finish, and note the observed percentage.',
      'Set the target to 500, reset, and compare the deviation.',
    ],
    expected: 'The 500-trial run is usually closer to 50%. Randomness does not become more predictable per flip, but the average converges as trials increase.',
  },
  assumptions: [
    'Trials are independent and identically distributed.',
    'The “random” sequence is pseudorandom and seeded for reproducibility, not cryptographic.',
    'The die is fair; the biased coin uses the displayed probability for heads.',
  ],
  sources: [SOURCES.algebra, { label: 'Law of large numbers — Wikipedia', url: 'https://en.wikipedia.org/wiki/Law_of_large_numbers' }],
};

export default spec;
