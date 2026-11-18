import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { mulberry32, networkSummary } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'technology',
  aspect: 1.65,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'Packets travelling from a sender to a receiver across a routed network, with losses and retransmissions',
  stageHint: 'The seeded run decides which packets are lost. UDP leaves losses for the application; TCP retransmits them. Change loss, latency and packet count to compare the two protocols.',
  controls: [
    { kind: 'slider', id: 'packets', label: 'Packets sent', min: 10, max: 200, step: 5, defaultValue: 60 },
    { kind: 'slider', id: 'loss', label: 'Packet loss', min: 0, max: 20, step: 1, defaultValue: 5, unit: '%' },
    { kind: 'slider', id: 'latency', label: 'One-way latency', min: 10, max: 200, step: 5, defaultValue: 40, unit: 'ms' },
    {
      kind: 'segment',
      id: 'protocol',
      label: 'Protocol',
      defaultValue: 'TCP',
      options: [
        { value: 'TCP', label: 'TCP' },
        { value: 'UDP', label: 'UDP' },
      ],
    },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const packets = Math.max(1, Math.round(num(params, 'packets')));
    const loss = num(params, 'loss');
    const latency = num(params, 'latency');
    const protocol = str(params, 'protocol') === 'UDP' ? 'UDP' : 'TCP';
    const summary = networkSummary(packets, loss, latency, protocol);

    const sender = { x: view.width * 0.05, y: view.height * 0.5 - 24, width: view.width * 0.16, height: 48 };
    const receiver = { x: view.width * 0.79, y: view.height * 0.5 - 24, width: view.width * 0.16, height: 48 };
    const pathY = view.height * 0.5;
    const startX = sender.x + sender.width;
    const endX = receiver.x;

    line(ctx, startX, pathY, endX, pathY, CANVAS_COLORS.hairline, 3);
    for (const fraction of [0.34, 0.63]) {
      const x = startX + (endX - startX) * fraction;
      ctx.save();
      roundRectPath(ctx, x - 22, pathY - 15, 44, 30, 5);
      ctx.fillStyle = CANVAS_COLORS.raised;
      ctx.fill();
      ctx.strokeStyle = CANVAS_COLORS.muted;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
      label(ctx, 'router', x, pathY, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });
    }

    const node = (box: { x: number; y: number; width: number; height: number }, title: string, colour: string) => {
      ctx.save();
      roundRectPath(ctx, box.x, box.y, box.width, box.height, 8);
      ctx.fillStyle = 'rgba(79, 224, 200, 0.08)';
      ctx.fill();
      ctx.strokeStyle = colour;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.restore();
      label(ctx, title, box.x + box.width / 2, box.y + box.height / 2, {
        align: 'center',
        color: CANVAS_COLORS.ink,
        size: 10,
        weight: 600,
      });
    };
    node(sender, 'sender', CANVAS_COLORS.technology);
    node(receiver, 'receiver', CANVAS_COLORS.biology);

    const random = mulberry32(20261118);
    const lostFlags = Array.from({ length: packets }, () => random() < loss / 100);
    const shown = Math.min(24, packets);
    let lostShown = 0;
    for (let index = 0; index < shown; index += 1) {
      const progress = (t * 0.3 + index / shown) % 1;
      const packetLost = lostFlags[index];
      if (packetLost) lostShown += 1;
      const x = startX + progress * (endX - startX);
      const y = pathY + Math.sin(index * 2.4) * 9;
      if (packetLost && protocol === 'UDP' && progress > 0.52) continue;
      const colour = packetLost ? CANVAS_COLORS.warn : CANVAS_COLORS.biology;
      dot(ctx, x, y, 3.4, colour, !packetLost);
      if (packetLost) {
        line(ctx, x - 3, y - 3, x + 3, y + 3, CANVAS_COLORS.danger, 1.4);
        line(ctx, x + 3, y - 3, x - 3, y + 3, CANVAS_COLORS.danger, 1.4);
        if (protocol === 'TCP') {
          label(ctx, 'retx', x, y - 10, { align: 'center', color: CANVAS_COLORS.warn, size: 7 });
        }
      }
    }
    label(ctx, `showing ${shown} of ${packets}`, view.width / 2, pathY + 42, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 8,
    });

    // Outcome bars.
    const bar = { x: view.width * 0.08, y: view.height - 48, width: view.width * 0.5 };
    const deliveredFraction = summary.delivered / packets;
    line(ctx, bar.x, bar.y, bar.x + bar.width, bar.y, CANVAS_COLORS.hairline, 8);
    line(ctx, bar.x, bar.y, bar.x + bar.width * deliveredFraction, bar.y, CANVAS_COLORS.biology, 8);
    label(ctx, `delivered ${summary.delivered}`, bar.x, bar.y - 14, { color: CANVAS_COLORS.biology, size: 9 });
    label(ctx, `lost ${summary.lost}`, bar.x + bar.width, bar.y - 14, {
      align: 'right',
      color: summary.lost > 0 ? CANVAS_COLORS.danger : CANVAS_COLORS.muted,
      size: 9,
    });
    label(ctx, `${protocol}`, bar.x, bar.y + 16, { color: CANVAS_COLORS.muted, size: 8 });

    label(ctx, 'RTT', view.width * 0.66, view.height - 64, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, `${formatNumber(summary.rtt, 0)} ms`, view.width * 0.66, view.height - 44, {
      color: CANVAS_COLORS.ink,
      size: 15,
      weight: 700,
      mono: true,
    });
    label(ctx, 'retransmitted', view.width * 0.84, view.height - 64, { color: CANVAS_COLORS.muted, size: 8 });
    label(ctx, String(summary.retransmitted), view.width * 0.84, view.height - 44, {
      color: summary.retransmitted > 0 ? CANVAS_COLORS.warn : CANVAS_COLORS.ink,
      size: 15,
      weight: 700,
      mono: true,
    });

    drawTitle(ctx, view.width, `${protocol} · ${packets} packets · ${loss.toFixed(0)}% loss`);
    label(ctx, `${lostShown} lost among the ${shown} drawn`, view.width - 16, 24, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 8,
    });
    cornerNote(ctx, view.width, view.height, 'Seeded independent loss · no congestion or jitter');
  },
  metrics(params) {
    const packets = Math.max(1, Math.round(num(params, 'packets')));
    const protocol = str(params, 'protocol') === 'UDP' ? 'UDP' : 'TCP';
    const summary = networkSummary(packets, num(params, 'loss'), num(params, 'latency'), protocol);
    return [
      { label: 'Delivered', value: String(summary.delivered), unit: `/ ${packets}` },
      { label: 'Lost', value: String(summary.lost) },
      { label: 'Retransmitted', value: String(summary.retransmitted) },
      { label: 'RTT', value: formatNumber(summary.rtt, 0), unit: 'ms' },
      { label: 'Throughput', value: formatNumber(summary.throughput, 0), unit: 'pkt/s' },
      { label: 'Protocol', value: protocol },
    ];
  },
  explanation(params) {
    const packets = Math.max(1, Math.round(num(params, 'packets')));
    const loss = num(params, 'loss');
    const latency = num(params, 'latency');
    const protocol = str(params, 'protocol') === 'UDP' ? 'UDP' : 'TCP';
    const summary = networkSummary(packets, loss, latency, protocol);
    return {
      headline:
        protocol === 'TCP'
          ? 'TCP retransmits lost packets to deliver the stream.'
          : 'UDP does not retransmit; lost packets stay lost.',
      body: `At ${loss.toFixed(0)}% loss, ${summary.lost} of ${packets} packets are lost in this seeded run. ${protocol === 'TCP' ? `TCP sends ${summary.retransmitted} retransmissions and the model reports all ${summary.delivered} delivered, trading extra traffic for reliability.` : `UDP delivers ${summary.delivered}, and the application must tolerate or recover from the missing ${summary.lost}.`} One-way latency is ${latency.toFixed(0)} ms, so RTT is ${summary.rtt.toFixed(0)} ms. The throughput number is illustrative for this model, not a bandwidth measurement.`,
    };
  },
  experiment: {
    question: 'At 20% packet loss, which protocol delivers more packets: TCP or UDP?',
    steps: ['Set packet loss to 20% and packets to 100.', 'Run TCP and note delivered, lost and retransmitted.', 'Switch to UDP and compare.'],
    expected:
      'TCP reports all 100 delivered because the model retransmits every loss; UDP delivers about 80 and leaves the rest lost. TCP’s reliability costs retransmissions and, in a real network, extra delay.',
  },
  assumptions: [
    'Packet loss is independent and generated from a seeded pseudo-random sequence, so the same settings reproduce the same counts.',
    'Latency is fixed with no jitter, reordering or congestion; RTT is simply twice the one-way latency.',
    'TCP retransmissions are assumed to succeed, and the extra delay they cause is not modelled.',
    'The throughput figure is a teaching index derived from delivery and latency, not a measurement of link bandwidth.',
  ],
  sources: [
    SOURCES.network,
    { label: 'Transmission Control Protocol — Wikipedia', url: 'https://en.wikipedia.org/wiki/Transmission_Control_Protocol' },
    { label: 'User Datagram Protocol — Wikipedia', url: 'https://en.wikipedia.org/wiki/User_Datagram_Protocol' },
  ],
  table(params) {
    const packets = Math.max(1, Math.round(num(params, 'packets')));
    const selected = str(params, 'protocol') === 'UDP' ? 'UDP' : 'TCP';
    return {
      caption: 'TCP and UDP under the same packet loss and latency',
      headers: ['Protocol', 'Delivered', 'Lost', 'Retransmitted', 'RTT (ms)'],
      rows: (['TCP', 'UDP'] as const).map((protocol) => {
        const summary = networkSummary(packets, num(params, 'loss'), num(params, 'latency'), protocol);
        return {
          cells: [
            protocol,
            String(summary.delivered),
            String(summary.lost),
            String(summary.retransmitted),
            formatNumber(summary.rtt, 0),
          ],
          highlight: protocol === selected,
        };
      }),
    };
  },
};

export default spec;
