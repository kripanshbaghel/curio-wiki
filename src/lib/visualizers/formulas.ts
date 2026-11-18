/**
 * Pure, deterministic calculations for the visualizer system.
 * Nothing here touches the DOM, so every formula is unit-testable.
 */

export interface ProjectileResult {
  vx: number;
  vy0: number;
  flightTime: number;
  range: number;
  apexTime: number;
  maxHeight: number;
}

export function projectile(
  angleDeg: number,
  speed: number,
  gravity: number,
  startHeight = 0,
): ProjectileResult {
  const g = Math.max(0.01, gravity);
  const v = Math.max(0, speed);
  const angle = (angleDeg * Math.PI) / 180;
  const vx = v * Math.cos(angle);
  const vy0 = v * Math.sin(angle);
  const flightTime = (vy0 + Math.sqrt(vy0 * vy0 + 2 * g * Math.max(0, startHeight))) / g;
  return {
    vx,
    vy0,
    flightTime,
    range: vx * flightTime,
    apexTime: vy0 / g,
    maxHeight: Math.max(0, startHeight) + (vy0 * vy0) / (2 * g),
  };
}

export function projectileAt(t: number, result: ProjectileResult, startHeight = 0, gravity = 9.8) {
  const time = Math.min(Math.max(0, t), result.flightTime);
  return {
    x: result.vx * time,
    y: Math.max(0, startHeight + result.vy0 * time - 0.5 * gravity * time * time),
    vy: result.vy0 - gravity * time,
  };
}

export interface FreeFallResult {
  impactTime: number;
  impactVelocity: number;
}

export function freeFall(
  height: number,
  gravity: number,
  initialVelocity = 0,
): FreeFallResult {
  const g = Math.max(0.01, gravity);
  const h = Math.max(0, height);
  const v0 = Math.max(0, initialVelocity);
  const impactTime = (-v0 + Math.sqrt(v0 * v0 + 2 * g * h)) / g;
  return { impactTime, impactVelocity: v0 + g * impactTime };
}

export function freeFallAt(
  t: number,
  height: number,
  gravity: number,
  initialVelocity = 0,
): { height: number; velocity: number } {
  const g = Math.max(0.01, gravity);
  const h = Math.max(0, height);
  const v0 = Math.max(0, initialVelocity);
  const { impactTime, impactVelocity } = freeFall(h, g, v0);
  const time = Math.min(Math.max(0, t), impactTime);
  return {
    height: Math.max(0, h - (v0 * time + 0.5 * g * time * time)),
    velocity: time >= impactTime ? impactVelocity : v0 + g * time,
  };
}

export interface NewtonResult {
  netForce: number;
  acceleration: number;
  velocity: number;
  distance: number;
}

export function newtonMotion(
  force: number,
  mass: number,
  friction: number,
  t: number,
): NewtonResult {
  const m = Math.max(0.01, mass);
  const applied = Math.max(0, force);
  const resistance = Math.max(0, friction);
  const netForce = Math.max(0, applied - resistance);
  if (netForce === 0) return { netForce: 0, acceleration: 0, velocity: 0, distance: 0 };
  const acceleration = netForce / m;
  const time = Math.max(0, t);
  return {
    netForce,
    acceleration,
    velocity: acceleration * time,
    distance: 0.5 * acceleration * time * time,
  };
}

export function ohmsLaw(voltage: number, resistance: number) {
  const r = Math.max(0.01, resistance);
  const v = Math.max(0, voltage);
  return { current: v / r, power: v * v / r };
}

export function effectiveResistance(resistance: number, mode: 'single' | 'series' | 'parallel') {
  const r = Math.max(0.01, resistance);
  if (mode === 'series') return 2 * r;
  if (mode === 'parallel') return r / 2;
  return r;
}

export function waveSuperposition(
  amplitude: number,
  phaseRadians: number,
): { resultant: number; kind: 'constructive' | 'partly constructive' | 'destructive' } {
  const a = Math.max(0, amplitude);
  const resultant = 2 * a * Math.abs(Math.cos(phaseRadians / 2));
  const ratio = a === 0 ? 0 : resultant / (2 * a);
  if (ratio > 0.9) return { resultant, kind: 'constructive' };
  if (ratio < 0.1) return { resultant, kind: 'destructive' };
  return { resultant, kind: 'partly constructive' };
}

export function pendulumPeriod(length: number, gravity: number) {
  const l = Math.max(0.01, length);
  const g = Math.max(0.01, gravity);
  return 2 * Math.PI * Math.sqrt(l / g);
}

/* ------------------------------------------------------------------ */
/* Chemistry                                                           */
/* ------------------------------------------------------------------ */

export interface ElementDatum {
  z: number;
  symbol: string;
  name: string;
  shells: number[];
  subshells: Record<string, number>;
}

const SHELL_CAPACITY = [2, 8, 8, 2];

export function fillShells(electronCount: number): number[] {
  let remaining = Math.max(0, Math.trunc(electronCount));
  const shells: number[] = [];
  for (const capacity of SHELL_CAPACITY) {
    const count = Math.min(capacity, remaining);
    shells.push(count);
    remaining -= count;
    if (remaining <= 0) break;
  }
  return shells;
}

const CONFIGS: Array<[string, string, Array<[string, number]>]> = [
  ['H', 'Hydrogen', [['1s', 1]]],
  ['He', 'Helium', [['1s', 2]]],
  ['Li', 'Lithium', [['1s', 2], ['2s', 1]]],
  ['Be', 'Beryllium', [['1s', 2], ['2s', 2]]],
  ['B', 'Boron', [['1s', 2], ['2s', 2], ['2p', 1]]],
  ['C', 'Carbon', [['1s', 2], ['2s', 2], ['2p', 2]]],
  ['N', 'Nitrogen', [['1s', 2], ['2s', 2], ['2p', 3]]],
  ['O', 'Oxygen', [['1s', 2], ['2s', 2], ['2p', 4]]],
  ['F', 'Fluorine', [['1s', 2], ['2s', 2], ['2p', 5]]],
  ['Ne', 'Neon', [['1s', 2], ['2s', 2], ['2p', 6]]],
  ['Na', 'Sodium', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 1]]],
  ['Mg', 'Magnesium', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2]]],
  ['Al', 'Aluminium', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 1]]],
  ['Si', 'Silicon', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 2]]],
  ['P', 'Phosphorus', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 3]]],
  ['S', 'Sulfur', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 4]]],
  ['Cl', 'Chlorine', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 5]]],
  ['Ar', 'Argon', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6]]],
  ['K', 'Potassium', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 1]]],
  ['Ca', 'Calcium', [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2]]],
];

const REMOVE_ORDER = ['4s', '3p', '3s', '2p', '2s', '1s'];
const ADD_ORDER = ['1s', '2s', '2p', '3s', '3p', '4s'];

export function elementByZ(z: number): ElementDatum {
  const index = Math.min(19, Math.max(0, Math.trunc(z) - 1));
  const [symbol, name, entries] = CONFIGS[index];
  return {
    z: index + 1,
    symbol,
    name,
    shells: fillShells(index + 1),
    subshells: Object.fromEntries(entries),
  };
}

export function configurationFor(z: number, charge = 0): {
  element: ElementDatum;
  electrons: number;
  subshells: Record<string, number>;
  shells: number[];
  configuration: string;
} {
  const element = elementByZ(z);
  const electrons = Math.max(0, Math.min(20, element.z - charge));
  const subshells: Record<string, number> = { ...element.subshells };
  let difference = electrons - element.z;
  while (difference < 0) {
    const label = REMOVE_ORDER.find((key) => (subshells[key] ?? 0) > 0);
    if (!label) break;
    subshells[label] = (subshells[label] ?? 0) - 1;
    difference += 1;
  }
  while (difference > 0) {
    const label = ADD_ORDER.find((key) => (subshells[key] ?? 0) < capacityOf(key));
    if (!label) break;
    subshells[label] = (subshells[label] ?? 0) + 1;
    difference -= 1;
  }
  const configuration = Object.entries(subshells)
    .filter(([, count]) => count > 0)
    .map(([label, count]) => `${label}${superscript(count)}`)
    .join(' ');
  return {
    element,
    electrons,
    subshells,
    shells: fillShells(electrons),
    configuration: configuration || '0 electrons',
  };
}

function capacityOf(label: string): number {
  if (label.endsWith('s')) return 2;
  if (label.endsWith('p')) return 6;
  if (label.endsWith('d')) return 10;
  if (label.endsWith('f')) return 14;
  return 0;
}

const SUPERSCRIPTS: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

export function superscript(value: number): string {
  return String(value)
    .split('')
    .map((digit) => SUPERSCRIPTS[digit] ?? digit)
    .join('');
}

export function valenceElectrons(z: number, charge = 0): number {
  const { shells } = configurationFor(z, charge);
  return shells.length === 0 ? 0 : shells[shells.length - 1];
}

export interface MatterState {
  state: 'solid' | 'liquid' | 'gas';
  averageSpeed: number;
  density: number;
}

/** Water at 1 atm. Speeds use equipartition for H2O, scaled for display. */
export function matterState(temperature: number, volume: number, particles: number): MatterState {
  const t = Math.max(1, temperature);
  const state = t < 273 ? 'solid' : t < 373 ? 'liquid' : 'gas';
  const molarMass = 0.018;
  const gasConstant = 8.314;
  const averageSpeed = Math.sqrt((3 * gasConstant * t) / molarMass);
  const density = particles / Math.max(0.1, volume);
  return { state, averageSpeed, density };
}

export function photosynthesisRate(
  light: number,
  co2: number,
  water: number,
  temperature: number,
): { rate: number; limiting: 'light' | 'CO₂' | 'water' | 'temperature'; tempFactor: number } {
  const tempFactor =
    temperature <= 0 || temperature >= 45
      ? 0
      : Math.max(0, 1 - ((temperature - 25) / 20) ** 2);
  const resources: Array<['light' | 'CO₂' | 'water', number]> = [
    ['light', Math.max(0, light)],
    ['CO₂', Math.max(0, co2)],
    ['water', Math.max(0, water)],
  ];
  resources.sort((a, b) => a[1] - b[1]);
  const limiting = tempFactor < resources[0][1] / 100 ? 'temperature' : resources[0][0];
  const rate = (resources[0][1] / 100) * tempFactor;
  return { rate, limiting, tempFactor };
}

export function cardiacOutput(heartRate: number, strokeVolumeMl: number) {
  const hr = Math.max(0, heartRate);
  const sv = Math.max(0, strokeVolumeMl);
  return {
    cardiacOutput: (hr * sv) / 1000,
    cycleSeconds: hr === 0 ? 0 : 60 / hr,
  };
}

export function minuteVentilation(breathsPerMinute: number, tidalVolumeLitres: number) {
  return Math.max(0, breathsPerMinute) * Math.max(0, tidalVolumeLitres);
}

export function gcContent(sequence: string): number {
  const bases = sequence.toUpperCase();
  if (bases.length === 0) return 0;
  const gc = [...bases].filter((base) => base === 'G' || base === 'C').length;
  return (gc / bases.length) * 100;
}

export function hydrogenBonds(base: string): number {
  return base === 'G' || base === 'C' ? 3 : 2;
}

/* ------------------------------------------------------------------ */
/* Mathematics                                                         */
/* ------------------------------------------------------------------ */

export type FunctionFamily = 'quadratic' | 'sine' | 'cubic' | 'exponential' | 'absolute';

export function evaluateFunction(
  family: FunctionFamily,
  a: number,
  b: number,
  c: number,
  x: number,
): number {
  switch (family) {
    case 'quadratic':
      return a * x * x + b * x + c;
    case 'sine':
      return a * Math.sin(b * x) + c;
    case 'cubic':
      return a * x ** 3 + b * x + c;
    case 'exponential':
      return a * Math.exp(b * x * 0.2) + c;
    case 'absolute':
      return a * Math.abs(b * x) + c;
  }
}

export function numericDerivative(
  family: FunctionFamily,
  a: number,
  b: number,
  c: number,
  x: number,
): number {
  const h = 1e-4;
  return (
    (evaluateFunction(family, a, b, c, x + h) -
      evaluateFunction(family, a, b, c, x - h)) /
    (2 * h)
  );
}

export function quadraticRoots(a: number, b: number, c: number): number[] {
  if (a === 0) return b === 0 ? [] : [-c / b];
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return [];
  const root = Math.sqrt(discriminant);
  return [(-b - root) / (2 * a), (-b + root) / (2 * a)];
}

export type Shape = 'rectangle' | 'triangle' | 'circle' | 'trapezoid';

export function geometry(shape: Shape, width: number, height: number, radius: number, top: number) {
  const w = Math.max(0, width);
  const h = Math.max(0, height);
  const r = Math.max(0, radius);
  const t = Math.max(0, top);
  switch (shape) {
    case 'rectangle':
      return { area: w * h, perimeter: 2 * (w + h), extra: Math.hypot(w, h) };
    case 'triangle':
      return { area: 0.5 * w * h, perimeter: w + h + Math.hypot(w, h), extra: Math.hypot(w, h) };
    case 'circle':
      return { area: Math.PI * r * r, perimeter: 2 * Math.PI * r, extra: 2 * r };
    case 'trapezoid':
      return {
        area: 0.5 * (w + t) * h,
        perimeter: w + t + 2 * Math.hypot((w - t) / 2, h),
        extra: Math.hypot((w - t) / 2, h),
      };
  }
}

export function trigonometry(angleDeg: number) {
  const normalized = ((angleDeg % 360) + 360) % 360;
  const radians = (normalized * Math.PI) / 180;
  const sin = Math.sin(radians);
  const cos = Math.cos(radians);
  const tan = Math.abs(Math.cos(radians)) < 1e-10 ? null : Math.tan(radians);
  const quadrant = normalized === 0 || normalized === 90 || normalized === 180 || normalized === 270
    ? 'axis'
    : normalized < 90
      ? 'I'
      : normalized < 180
        ? 'II'
        : normalized < 270
          ? 'III'
          : 'IV';
  return { normalized, radians, sin, cos, tan, quadrant };
}

/** Deterministic 32-bit PRNG for reproducible experiments. */
export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function probabilityTrial(
  experiment: 'coin' | 'die' | 'biased',
  bias: number,
  index: number,
  seed = 20261118,
): boolean {
  const random = mulberry32(seed + index * 2654435761)();
  if (experiment === 'die') return random < 1 / 6;
  if (experiment === 'biased') return random < Math.min(1, Math.max(0, bias));
  return random < 0.5;
}

export function probabilitySummary(
  experiment: 'coin' | 'die' | 'biased',
  bias: number,
  trials: number,
  seed = 20261118,
) {
  let successes = 0;
  for (let index = 0; index < trials; index += 1) {
    if (probabilityTrial(experiment, bias, index, seed)) successes += 1;
  }
  const theoretical = experiment === 'die' ? 1 / 6 : experiment === 'biased' ? bias : 0.5;
  return {
    successes,
    empirical: trials > 0 ? successes / trials : 0,
    theoretical,
    deviation: trials > 0 ? successes / trials - theoretical : 0,
  };
}

export function solidMetrics(shape: 'cube' | 'sphere' | 'cylinder' | 'cone', size: number, height: number) {
  const s = Math.max(0, size);
  const h = Math.max(0, height);
  switch (shape) {
    case 'cube':
      return { volume: s ** 3, surface: 6 * s * s };
    case 'sphere':
      return { volume: (4 / 3) * Math.PI * s ** 3, surface: 4 * Math.PI * s * s };
    case 'cylinder':
      return {
        volume: Math.PI * s * s * h,
        surface: 2 * Math.PI * s * (s + h),
      };
    case 'cone':
      return {
        volume: (Math.PI * s * s * h) / 3,
        surface: Math.PI * s * (s + Math.hypot(s, h)),
      };
  }
}

/* ------------------------------------------------------------------ */
/* Technology                                                          */
/* ------------------------------------------------------------------ */

export type LogicGate = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

export function logicGate(gate: LogicGate, a: boolean, b: boolean): boolean {
  switch (gate) {
    case 'AND':
      return a && b;
    case 'OR':
      return a || b;
    case 'NOT':
      return !a;
    case 'NAND':
      return !(a && b);
    case 'NOR':
      return !(a || b);
    case 'XOR':
      return a !== b;
    case 'XNOR':
      return a === b;
  }
}

export function binaryToDecimal(bits: boolean[]): number {
  return bits.reduce((total, bit, index) => total + (bit ? 2 ** (bits.length - 1 - index) : 0), 0);
}

export function decimalToBits(decimal: number, width = 8): boolean[] {
  const value = Math.max(0, Math.min(2 ** width - 1, Math.trunc(decimal)));
  return Array.from({ length: width }, (_, index) => ((value >> (width - 1 - index)) & 1) === 1);
}

export function hexFromDecimal(decimal: number): string {
  return Math.max(0, Math.trunc(decimal)).toString(16).toUpperCase().padStart(2, '0');
}

export type CpuInstruction = 'LOAD' | 'ADD' | 'STORE';

export interface CpuState {
  phase: 'Fetch' | 'Decode' | 'Execute' | 'Write back';
  pc: number;
  ir: string;
  acc: number;
  memoryValue: number;
  cycles: number;
}

export function cpuState(instruction: CpuInstruction, cycles: number): CpuState {
  const cycle = Math.max(0, Math.trunc(cycles));
  const phaseIndex = cycle % 4;
  const completed = Math.floor(cycle / 4);
  const memory = 7;
  let acc = 0;
  if (instruction === 'LOAD') acc = memory * completed;
  if (instruction === 'ADD') acc = 5 * completed + (phaseIndex === 3 ? memory : 0);
  if (instruction === 'STORE') acc = 5;
  return {
    phase: (['Fetch', 'Decode', 'Execute', 'Write back'] as const)[phaseIndex],
    pc: completed + 1,
    ir: instruction,
    acc,
    memoryValue: instruction === 'STORE' ? acc : memory,
    cycles: cycle,
  };
}

export function memoryModel(workingSetMb: number, cacheMb: number, pattern: 'sequential' | 'random') {
  const working = Math.max(0.1, workingSetMb);
  const cache = Math.max(0.1, cacheMb);
  const baseHit = Math.min(1, cache / (cache + working));
  const hitRate = pattern === 'sequential' ? Math.min(1, (cache / working) * 1.35) : baseHit;
  const cacheLatency = 4;
  const ramLatency = 80;
  return {
    hitRate: Math.max(0, Math.min(1, hitRate)),
    averageLatency: hitRate * cacheLatency + (1 - hitRate) * ramLatency,
  };
}

export function networkSummary(
  packets: number,
  lossPercent: number,
  latencyMs: number,
  protocol: 'TCP' | 'UDP',
) {
  const count = Math.max(0, Math.trunc(packets));
  const loss = Math.max(0, Math.min(100, lossPercent)) / 100;
  const random = mulberry32(20261118);
  let lost = 0;
  for (let index = 0; index < count; index += 1) {
    if (random() < loss) lost += 1;
  }
  const delivered = count - lost;
  const effectiveDelivered = protocol === 'TCP' ? count : delivered;
  const throughput = count === 0 ? 0 : (effectiveDelivered * 1) / (latencyMs / 1000 + 0.001);
  return {
    delivered,
    lost,
    retransmitted: protocol === 'TCP' ? lost : 0,
    throughput,
    rtt: latencyMs * 2,
  };
}

/* ------------------------------------------------------------------ */
/* Engineering                                                         */
/* ------------------------------------------------------------------ */

export function gearRatio(driverTeeth: number, drivenTeeth: number, inputRpm: number) {
  const ratio = Math.max(0, drivenTeeth) / Math.max(1, driverTeeth);
  return {
    ratio,
    outputRpm: Math.max(0, inputRpm) / Math.max(0.001, ratio),
    torqueMultiplier: ratio,
  };
}

export function hydraulicSystem(forceN: number, inputAreaCm2: number, outputAreaCm2: number) {
  const a1 = Math.max(0.01, inputAreaCm2) / 10000;
  const a2 = Math.max(0.01, outputAreaCm2) / 10000;
  const pressure = Math.max(0, forceN) / a1;
  return {
    pressure,
    outputForce: pressure * a2,
    mechanicalAdvantage: a2 / a1,
    distanceRatio: a2 / a1,
  };
}

export function machineAdvantage(
  machine: 'lever' | 'pulley' | 'incline' | 'wheel',
  effortArm: number,
  loadArm: number,
  angle: number,
  ropes: number,
) {
  switch (machine) {
    case 'lever':
      return Math.max(0, effortArm) / Math.max(0.01, loadArm);
    case 'pulley':
      return Math.max(1, ropes);
    case 'incline': {
      const radians = (Math.max(0.1, Math.min(89.9, angle)) * Math.PI) / 180;
      return 1 / Math.sin(radians);
    }
    case 'wheel':
      return Math.max(0, effortArm) / Math.max(0.01, loadArm);
  }
}

export interface BeamResult {
  reactionLeft: number;
  reactionRight: number;
  maxMoment: number;
  deflectionMm: number;
}

export function beamLoad(
  span: number,
  loadKn: number,
  positionPercent: number,
  support: 'simple' | 'cantilever',
): BeamResult {
  const l = Math.max(0.1, span);
  const p = Math.max(0, loadKn) * 1000;
  const a = (Math.max(0, Math.min(100, positionPercent)) / 100) * l;
  const b = l - a;
  const ei = 200e9 * 1e-4;
  if (support === 'cantilever') {
    const deflection = (p * a * a * (3 * l - a)) / (6 * ei);
    return {
      reactionLeft: p,
      reactionRight: 0,
      maxMoment: p * a,
      deflectionMm: (deflection * 1000),
    };
  }
  return {
    reactionLeft: (p * b) / l,
    reactionRight: (p * a) / l,
    maxMoment: (p * a * b) / l,
    deflectionMm: ((p * a * a * b * b) / (3 * ei * l)) * 1000,
  };
}

export function bridgeModel(
  type: 'beam' | 'truss' | 'arch' | 'suspension',
  spanM: number,
  loadKn: number,
  material: 'steel' | 'concrete',
) {
  const efficiency = type === 'truss' ? 1.35 : type === 'arch' ? 1.5 : type === 'suspension' ? 1.8 : 1;
  const materialStrength = material === 'steel' ? 250 : 40;
  const capacityKn = (efficiency * materialStrength * 4) / Math.max(1, spanM);
  const utilization = Math.max(0, loadKn) / Math.max(0.1, capacityKn);
  return {
    capacityKn,
    utilization,
    safetyFactor: utilization === 0 ? Infinity : 1 / utilization,
    deflectionIndex: (loadKn * spanM ** 3) / (efficiency * 1e5),
  };
}
