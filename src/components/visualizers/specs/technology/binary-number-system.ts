import type { VisualizerSpec } from '@/lib/visualizers/types';
import { bool, formatNumber } from '@/lib/visualizers/types';
import { binaryToDecimal, decimalToBits, hexFromDecimal } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const PLACES = [128, 64, 32, 16, 8, 4, 2, 1] as const;

const DEFAULTS = decimalToBits(42, 8);

const spec: VisualizerSpec = {
  accent: 'technology',
  aspect: 1.6,
  animated: false,
  stageLabel: 'Eight binary bit cells with place values, a decimal total and a hexadecimal grouping',
  stageHint: 'Each on bit adds its place value to the total. The leftmost bit is the most significant. This bench uses unsigned eight-bit numbers, so the maximum is 255.',
  controls: PLACES.map((place, index) => ({
    kind: 'toggle' as const,
    id: `bit${7 - index}`,
    label: `Bit ${7 - index} · ${place}`,
    defaultValue: DEFAULTS[index],
    onLabel: '1',
    offLabel: '0',
  })),
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const bits = PLACES.map((_, index) => bool(params, `bit${7 - index}`));
    const value = binaryToDecimal(bits);
    const margin = 24;
    const gap = 5;
    const cellWidth = (view.width - margin * 2 - gap * 7) / 8;
    const top = 92;
    const cellHeight = Math.min(84, view.height * 0.25);

    PLACES.forEach((place, index) => {
      const x = margin + index * (cellWidth + gap);
      const on = bits[index];
      const color = on ? CANVAS_COLORS.technology : CANVAS_COLORS.muted;
      label(ctx, String(place), x + cellWidth / 2, top - 16, {
        align: 'center',
        color: 'rgba(200, 215, 240, 0.55)',
        size: 9,
        weight: 600,
      });
      ctx.save();
      roundRectPath(ctx, x, top, cellWidth, cellHeight, 7);
      ctx.fillStyle = on ? 'rgba(79, 224, 200, 0.16)' : CANVAS_COLORS.raised;
      ctx.fill();
      ctx.strokeStyle = on ? CANVAS_COLORS.technology : CANVAS_COLORS.hairline;
      ctx.lineWidth = on ? 2 : 1;
      ctx.stroke();
      ctx.restore();
      label(ctx, on ? '1' : '0', x + cellWidth / 2, top + cellHeight * 0.44, {
        align: 'center',
        color,
        size: Math.max(15, Math.min(22, cellWidth * 0.6)),
        weight: 700,
        mono: true,
      });
      label(ctx, `bit ${7 - index}`, x + cellWidth / 2, top + cellHeight - 11, {
        align: 'center',
        color: CANVAS_COLORS.muted,
        size: 8,
      });
      if (on) {
        label(ctx, `+${place}`, x + cellWidth / 2, top + cellHeight + 16, {
          align: 'center',
          color,
          size: 9,
          weight: 600,
          mono: true,
        });
      }
    });

    const onBits = PLACES.filter((_, index) => bits[index]);
    const equation = onBits.length === 0
      ? '0'
      : `${onBits.join(' + ')} = ${value}`;
    label(ctx, equation, view.width / 2, top + cellHeight + 48, {
      align: 'center',
      color: CANVAS_COLORS.ink,
      size: 12,
      weight: 600,
      mono: true,
    });

    const binaryText = bits.map((bit) => (bit ? '1' : '0')).join('');
    line(ctx, margin, view.height - 78, view.width - margin, view.height - 78, CANVAS_COLORS.hairline, 1);
    label(ctx, 'decimal', margin, view.height - 56, { color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, String(value), margin, view.height - 34, {
      color: CANVAS_COLORS.technology,
      size: 26,
      weight: 700,
      mono: true,
    });
    label(ctx, 'binary', view.width * 0.48, view.height - 56, { color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, binaryText, view.width * 0.48, view.height - 36, {
      color: CANVAS_COLORS.ink,
      size: 12,
      weight: 600,
      mono: true,
    });
    label(ctx, 'hex', view.width - margin, view.height - 56, { align: 'right', color: CANVAS_COLORS.muted, size: 9 });
    label(ctx, `0x${hexFromDecimal(value)}`, view.width - margin, view.height - 34, {
      align: 'right',
      color: CANVAS_COLORS.mathematics,
      size: 20,
      weight: 700,
      mono: true,
    });
    label(ctx, 'place value', view.width / 2, 32, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    drawTitle(ctx, view.width, `Unsigned 8-bit · ${formatNumber(value, 0)}`);
    cornerNote(ctx, view.width, view.height, 'MSB on the left · each place doubles to the right');
  },
  metrics(params) {
    const bits = PLACES.map((_, index) => bool(params, `bit${7 - index}`));
    const value = binaryToDecimal(bits);
    const ones = bits.filter(Boolean).length;
    return [
      { label: 'Decimal', value: String(value) },
      { label: 'Hexadecimal', value: `0x${hexFromDecimal(value)}` },
      { label: 'Binary', value: bits.map((bit) => (bit ? '1' : '0')).join('') },
      { label: 'Bits on', value: String(ones) },
      { label: 'Highest place', value: String(bits[0] ? 128 : bits.findIndex(Boolean) === -1 ? 0 : PLACES[bits.findIndex(Boolean)]) },
      { label: 'Range', value: '0 – 255' },
    ];
  },
  explanation(params) {
    const bits = PLACES.map((_, index) => bool(params, `bit${7 - index}`));
    const value = binaryToDecimal(bits);
    const onBits = PLACES.filter((_, index) => bits[index]);
    if (value === 0) {
      return {
        headline: 'All eight bits are 0, so the value is zero.',
        body: 'Every place value is switched off. Turning on any single bit adds its place value: bit 7 adds 128, bit 0 adds 1. With eight unsigned bits the representable values run from 0 to 255.',
      };
    }
    return {
      headline: `The on bits add up to ${value}.`,
      body: `Read left to right, the place values are 128, 64, 32, 16, 8, 4, 2 and 1. The on places contribute ${onBits.join(' + ')}, giving ${value}. Hexadecimal groups the same bits into two nibbles: ${bits.slice(0, 4).map((bit) => (bit ? '1' : '0')).join('')} ${bits.slice(4).map((bit) => (bit ? '1' : '0')).join('')} = 0x${hexFromDecimal(value)}.`,
    };
  },
  experiment: {
    question: 'What is the largest unsigned value in eight bits, and what happens if you add one?',
    steps: ['Turn all eight bits on.', 'Read the decimal value.', 'Try to represent one more using only these eight bits.'],
    expected:
      'All ones gives 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. Adding one would carry past the most significant bit; an eight-bit register cannot hold 256, so it overflows and wraps to 0 without a ninth bit.',
  },
  assumptions: [
    'Numbers are unsigned; negative values and two’s-complement interpretation are not covered here.',
    'The register is exactly eight bits, with bit 7 as the most significant bit.',
    'Binary, decimal and hexadecimal are three representations of the same integer, not different values.',
  ],
  sources: [SOURCES.binary, { label: 'Hexadecimal — Wikipedia', url: 'https://en.wikipedia.org/wiki/Hexadecimal' }],
  table(params) {
    const bits = PLACES.map((_, index) => bool(params, `bit${7 - index}`));
    return {
      caption: 'Place values and contributions for each bit',
      headers: ['Bit', 'Place value', 'State', 'Contribution'],
      rows: PLACES.map((place, index) => ({
        cells: [
          String(7 - index),
          String(place),
          bits[index] ? '1' : '0',
          bits[index] ? String(place) : '0',
        ],
        highlight: bits[index],
      })),
    };
  },
};

export default spec;
