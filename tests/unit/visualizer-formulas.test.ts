import { describe, expect, it } from 'vitest';
import {
  beamLoad,
  bridgeModel,
  cardiacOutput,
  cpuState,
  effectiveResistance,
  freeFall,
  gearRatio,
  hydraulicSystem,
  machineAdvantage,
  memoryModel,
  minuteVentilation,
  networkSummary,
  ohmsLaw,
  pendulumPeriod,
  photosynthesisRate,
  projectile,
  waveSuperposition,
} from '@/lib/visualizers/formulas';

describe('visualizer formulas', () => {
  it('computes a pendulum period from length and gravity', () => {
    // T = 2π√(L/g); a 1 m pendulum on Earth is about 2.006 s.
    expect(pendulumPeriod(1, 9.81)).toBeCloseTo(2.006, 2);
    expect(pendulumPeriod(4, 9.81)).toBeCloseTo(4.012, 2);
    expect(pendulumPeriod(1, 1.62)).toBeGreaterThan(pendulumPeriod(1, 9.81));
  });

  it('matches projectile range at 45° to v²/g', () => {
    const result = projectile(45, 20, 9.81);
    expect(result.range).toBeCloseTo((20 * 20) / 9.81, 2);
    expect(result.maxHeight).toBeCloseTo((20 * Math.sin(Math.PI / 4)) ** 2 / (2 * 9.81), 2);
  });

  it('computes free-fall impact time and velocity from height and gravity', () => {
    const result = freeFall(20, 9.81);
    expect(result.impactTime).toBeCloseTo(Math.sqrt((2 * 20) / 9.81), 4);
    expect(result.impactVelocity).toBeCloseTo(9.81 * result.impactTime, 4);
    expect(freeFall(20, 1.62).impactTime).toBeGreaterThan(freeFall(20, 9.81).impactTime);
  });

  it('applies Ohm’s law and series/parallel resistance', () => {
    const result = ohmsLaw(12, 6);
    expect(result.current).toBeCloseTo(2, 6);
    expect(result.power).toBeCloseTo(24, 6);
    expect(effectiveResistance(10, 'series')).toBeCloseTo(20, 6);
    expect(effectiveResistance(10, 'parallel')).toBeCloseTo(5, 6);
  });

  it('classifies wave superposition by phase', () => {
    expect(waveSuperposition(1, 0).kind).toBe('constructive');
    expect(waveSuperposition(1, Math.PI).kind).toBe('destructive');
  });

  it('finds the limiting photosynthesis resource after temperature', () => {
    const co2Limited = photosynthesisRate(80, 30, 90, 25);
    expect(co2Limited.limiting).toBe('CO₂');
    expect(co2Limited.rate).toBeCloseTo(0.3, 6);

    const cold = photosynthesisRate(80, 80, 80, 44);
    expect(cold.limiting).toBe('temperature');
    expect(cold.rate).toBeLessThan(0.1);

    expect(photosynthesisRate(80, 80, 80, 0).rate).toBe(0);
  });

  it('turns heart rate and stroke volume into cardiac output', () => {
    const result = cardiacOutput(60, 70);
    expect(result.cycleSeconds).toBeCloseTo(1, 6);
    expect(result.cardiacOutput).toBeCloseTo(4.2, 6);
    expect(cardiacOutput(0, 70).cycleSeconds).toBe(0);
  });

  it('computes minute ventilation as rate × tidal volume', () => {
    expect(minuteVentilation(12, 0.5)).toBeCloseTo(6, 6);
    expect(minuteVentilation(-2, 0.5)).toBe(0);
  });

  it('computes gear, hydraulic and machine ratios', () => {
    expect(gearRatio(20, 40, 100).outputRpm).toBeCloseTo(50, 6);
    expect(gearRatio(20, 40, 100).torqueMultiplier).toBeCloseTo(2, 6);

    const hydraulic = hydraulicSystem(100, 10, 50);
    expect(hydraulic.mechanicalAdvantage).toBeCloseTo(5, 6);
    expect(hydraulic.outputForce).toBeCloseTo(500, 6);

    expect(machineAdvantage('lever', 2, 0.5, 30, 1)).toBeCloseTo(4, 6);
    expect(machineAdvantage('pulley', 2, 0.5, 30, 3)).toBe(3);
    expect(machineAdvantage('incline', 2, 0.5, 30, 1)).toBeCloseTo(2, 6);
  });

  it('balances simply supported beam reactions and peaks the moment at midspan', () => {
    const centre = beamLoad(8, 20, 50, 'simple');
    expect(centre.reactionLeft).toBeCloseTo(10000, 3);
    expect(centre.reactionRight).toBeCloseTo(10000, 3);
    expect(centre.maxMoment).toBeCloseTo(40000, 3);
    expect(centre.reactionLeft + centre.reactionRight).toBeCloseTo(20000, 3);

    const quarter = beamLoad(8, 20, 25, 'simple');
    expect(quarter.maxMoment).toBeLessThan(centre.maxMoment);
    expect(quarter.reactionLeft).toBeCloseTo(15000, 3);
    expect(quarter.reactionRight).toBeCloseTo(5000, 3);
  });

  it('ranks bridge forms by capacity at the same span and material', () => {
    const beam = bridgeModel('beam', 60, 30, 'steel').capacityKn;
    const truss = bridgeModel('truss', 60, 30, 'steel').capacityKn;
    const arch = bridgeModel('arch', 60, 30, 'steel').capacityKn;
    const suspension = bridgeModel('suspension', 60, 30, 'steel').capacityKn;
    expect(suspension).toBeGreaterThan(arch);
    expect(arch).toBeGreaterThan(truss);
    expect(truss).toBeGreaterThan(beam);
  });

  it('advances the CPU program counter once per four-cycle instruction', () => {
    expect(cpuState('LOAD', 0).phase).toBe('Fetch');
    expect(cpuState('LOAD', 1).phase).toBe('Decode');
    expect(cpuState('LOAD', 2).phase).toBe('Execute');
    expect(cpuState('LOAD', 3).phase).toBe('Write back');
    expect(cpuState('LOAD', 4).pc).toBe(2);
    expect(cpuState('LOAD', 8).cycles).toBe(8);
  });

  it('raises memory latency as the hit rate falls', () => {
    const hot = memoryModel(16, 8, 'sequential');
    const cold = memoryModel(512, 8, 'random');
    expect(hot.hitRate).toBeGreaterThan(cold.hitRate);
    expect(cold.averageLatency).toBeGreaterThan(hot.averageLatency);
    expect(hot.averageLatency).toBeGreaterThanOrEqual(4);
    expect(cold.averageLatency).toBeLessThanOrEqual(80);
  });

  it('retransmits only TCP losses and reports twice the one-way latency as RTT', () => {
    const tcp = networkSummary(100, 20, 40, 'TCP');
    const udp = networkSummary(100, 20, 40, 'UDP');
    expect(tcp.retransmitted).toBe(tcp.lost);
    expect(udp.retransmitted).toBe(0);
    expect(tcp.delivered).toBe(udp.delivered);
    expect(tcp.rtt).toBe(80);
    // The seeded loss sequence is deterministic.
    expect(networkSummary(100, 20, 40, 'UDP')).toEqual(udp);
  });
});
