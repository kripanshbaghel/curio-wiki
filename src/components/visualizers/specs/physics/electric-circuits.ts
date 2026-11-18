import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { effectiveResistance, ohmsLaw } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'physics',
  aspect: 1.65,
  autoPlay: true,
  stageLabel: 'A closed circuit with a battery, resistors, current flow and a measurement readout',
  stageHint: 'Dots show conventional current. More resistance reduces current for the same voltage; series and parallel arrangements change the effective resistance.',
  controls: [
    { kind: 'slider', id: 'voltage', label: 'Voltage', min: 1, max: 24, step: 0.5, defaultValue: 9, unit: 'V' },
    { kind: 'slider', id: 'resistance', label: 'Each resistor', min: 2, max: 100, step: 1, defaultValue: 10, unit: 'Ω' },
    { kind: 'select', id: 'arrangement', label: 'Arrangement', defaultValue: 'single', options: [
      { value: 'single', label: 'Single resistor' },
      { value: 'series', label: 'Two in series' },
      { value: 'parallel', label: 'Two in parallel' },
    ] },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const voltage = num(params, 'voltage');
    const resistance = num(params, 'resistance');
    const arrangement = str(params, 'arrangement') as 'single' | 'series' | 'parallel';
    const effective = effectiveResistance(resistance, arrangement);
    const { current, power } = ohmsLaw(voltage, effective);

    const x0 = view.width * 0.22;
    const x1 = view.width * 0.78;
    const y0 = 68;
    const y1 = view.height - 64;
    const loop: Array<[number, number]> = [
      [x0, y1], [x0, y0], [x1, y0], [x1, y1], [x0, y1],
    ];

    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    loop.forEach(([x, y], index) => (index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
    ctx.stroke();
    ctx.restore();

    // Battery on the left side.
    line(ctx, x0 - 8, (y0 + y1) / 2 - 16, x0 + 8, (y0 + y1) / 2 - 16, CANVAS_COLORS.mathematics, 3);
    line(ctx, x0 - 4, (y0 + y1) / 2 + 4, x0 + 4, (y0 + y1) / 2 + 4, CANVAS_COLORS.mathematics, 2);
    label(ctx, `${voltage.toFixed(1)} V`, x0 - 14, (y0 + y1) / 2 - 20, { align: 'right', color: CANVAS_COLORS.mathematics, size: 11, weight: 600 });
    label(ctx, '+', x0 - 14, (y0 + y1) / 2 - 4, { color: CANVAS_COLORS.mathematics, size: 11 });

    // Resistors on the right.
    if (arrangement === 'parallel') {
      const mid = (y0 + y1) / 2;
      line(ctx, x1 - 26, y0 + 34, x1 + 26, y0 + 34, CANVAS_COLORS.physics, 5);
      line(ctx, x1 - 26, mid + 20, x1 + 26, mid + 20, CANVAS_COLORS.physics, 5);
      line(ctx, x1, y0 + 34, x1, mid - 14, CANVAS_COLORS.ink, 2);
      line(ctx, x1, mid + 2, x1, mid + 20, CANVAS_COLORS.ink, 2);
      label(ctx, 'R', x1 + 34, y0 + 34, { color: CANVAS_COLORS.physics, size: 11 });
      label(ctx, 'R', x1 + 34, mid + 20, { color: CANVAS_COLORS.physics, size: 11 });
    } else if (arrangement === 'series') {
      line(ctx, x1 - 26, y0 + 44, x1 + 26, y0 + 44, CANVAS_COLORS.physics, 5);
      line(ctx, x1 - 26, y1 - 44, x1 + 26, y1 - 44, CANVAS_COLORS.physics, 5);
      label(ctx, 'R', x1 + 34, y0 + 44, { color: CANVAS_COLORS.physics, size: 11 });
      label(ctx, 'R', x1 + 34, y1 - 44, { color: CANVAS_COLORS.physics, size: 11 });
    } else {
      line(ctx, x1 - 26, (y0 + y1) / 2, x1 + 26, (y0 + y1) / 2, CANVAS_COLORS.physics, 6);
      label(ctx, 'R', x1 + 34, (y0 + y1) / 2, { color: CANVAS_COLORS.physics, size: 11 });
    }

    // Ammeter.
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.technology;
    ctx.fillStyle = CANVAS_COLORS.raised;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc((x0 + x1) / 2, y0, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    label(ctx, 'A', (x0 + x1) / 2, y0, { align: 'center', color: CANVAS_COLORS.technology, size: 12, weight: 700 });
    label(ctx, `${current.toFixed(2)} A`, (x0 + x1) / 2, y0 - 24, { align: 'center', color: CANVAS_COLORS.technology, size: 11, weight: 600 });

    // Moving current dots along the loop.
    const perimeter = 2 * ((x1 - x0) + (y1 - y0));
    const speed = Math.min(0.32, 0.05 + current * 0.03);
    for (let index = 0; index < 18; index += 1) {
      const distance = ((t * speed + index / 18) % 1) * perimeter;
      let remaining = distance;
      let px = x0;
      let py = y1;
      const segments: Array<[number, number, number, number]> = [
        [x0, y1, x0, y0], [x0, y0, x1, y0], [x1, y0, x1, y1], [x1, y1, x0, y1],
      ];
      for (const [ax, ay, bx, by] of segments) {
        const length = Math.hypot(bx - ax, by - ay);
        if (remaining <= length) {
          px = ax + ((bx - ax) * remaining) / length;
          py = ay + ((by - ay) * remaining) / length;
          break;
        }
        remaining -= length;
      }
      dot(ctx, px, py, 2.2, CANVAS_COLORS.technology, false);
    }

    drawTitle(ctx, view.width, `${arrangement === 'single' ? 'One resistor' : arrangement === 'series' ? 'Series circuit' : 'Parallel circuit'} · ${formatNumber(power, 2)} W`);
    label(ctx, `${formatNumber(effective, 1)} Ω effective`, view.width - 16, 18, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    cornerNote(ctx, view.width, view.height, 'Ideal wires · ohmic resistors');
  },
  metrics(params) {
    const voltage = num(params, 'voltage');
    const arrangement = str(params, 'arrangement') as 'single' | 'series' | 'parallel';
    const effective = effectiveResistance(num(params, 'resistance'), arrangement);
    const { current, power } = ohmsLaw(voltage, effective);
    return [
      { label: 'Current', value: formatNumber(current, 2), unit: 'A' },
      { label: 'Effective resistance', value: formatNumber(effective, 1), unit: 'Ω' },
      { label: 'Power', value: formatNumber(power, 2), unit: 'W' },
      { label: 'Voltage', value: formatNumber(voltage, 1), unit: 'V' },
      { label: 'Resistance each', value: formatNumber(num(params, 'resistance'), 1), unit: 'Ω' },
      { label: 'Arrangement', value: `${arrangement[0].toUpperCase()}${arrangement.slice(1)}` },
    ];
  },
  explanation(params) {
    const voltage = num(params, 'voltage');
    const resistance = num(params, 'resistance');
    const arrangement = str(params, 'arrangement') as 'single' | 'series' | 'parallel';
    const effective = effectiveResistance(resistance, arrangement);
    const { current } = ohmsLaw(voltage, effective);
    const arrangementText = arrangement === 'series' ? 'Series resistances add: two equal resistors give 2R.' : arrangement === 'parallel' ? 'Parallel branches split the current, so two equal resistors give R/2.' : 'One resistor gives the full resistance.';
    return {
      headline: 'Ohm’s law links voltage, current and resistance.',
      body: `${arrangementText} With ${voltage.toFixed(1)} V across ${effective.toFixed(1)} Ω, the current is I = V / R = ${current.toFixed(2)} A. Power is P = VI = ${(voltage * current).toFixed(2)} W.`,
    };
  },
  experiment: {
    question: 'What happens to current when you double the resistance in a single-resistor circuit?',
    steps: [
      'Set the circuit to a single resistor and note the current at 10 Ω.',
      'Change the resistance to 20 Ω without changing voltage.',
      'Compare the two current readings.',
    ],
    expected: 'The current halves. For a fixed voltage, current is inversely proportional to resistance.',
  },
  assumptions: [
    'The battery is ideal: no internal resistance and a constant terminal voltage.',
    'Resistors obey Ohm’s law and stay at a constant temperature.',
    'Wires and meters are ideal; contact resistance and heating are ignored.',
  ],
  sources: [SOURCES.physics, { label: 'Electrical resistance — Wikipedia', url: 'https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance' }],
};

export default spec;
