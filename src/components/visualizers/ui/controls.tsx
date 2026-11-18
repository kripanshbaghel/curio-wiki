'use client';

import { useEffect, useId, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { Control, Params, SliderControl, SelectControl, ToggleControl, SegmentControl } from '@/lib/visualizers/types';
import { clamp } from '@/components/visualizers/core/draw';
import { cn } from '@/lib/cn';

interface FieldProps<T extends Control> {
  control: T;
  value: Params[string];
  onChange: (value: Params[string]) => void;
}

function SliderField({ control, value, onChange }: FieldProps<SliderControl>) {
  const id = `viz-${control.id}`;
  const number = typeof value === 'number' ? value : control.defaultValue;
  const [draft, setDraft] = useState(String(number));

  useEffect(() => {
    setDraft(String(number));
  }, [number]);

  const progress = ((number - control.min) / (control.max - control.min)) * 100;

  function commit() {
    const parsed = Number(draft);
    if (!Number.isFinite(parsed)) {
      setDraft(String(number));
      return;
    }
    const next = clamp(parsed, control.min, control.max);
    onChange(next);
    setDraft(String(next));
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {control.label}
        </label>
        <div className="flex items-center gap-1.5">
          <input
            type="number"
            aria-label={`${control.label} value`}
            className="numeric h-7 w-16 rounded-md border border-border bg-surface px-1.5 text-right text-xs text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            value={draft}
            min={control.min}
            max={control.max}
            step={control.step}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={commit}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.currentTarget.blur();
              }
            }}
          />
          {control.unit ? (
            <span className="w-10 text-xs text-muted-foreground">{control.unit}</span>
          ) : null}
        </div>
      </div>
      <input
        id={id}
        type="range"
        className="viz-range mt-1"
        min={control.min}
        max={control.max}
        step={control.step}
        value={number}
        aria-valuetext={`${number}${control.unit ? ` ${control.unit}` : ''}`}
        style={{ '--viz-progress': `${progress}%` } as React.CSSProperties}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      {control.hint ? (
        <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{control.hint}</p>
      ) : null}
    </div>
  );
}

function SelectField({ control, value, onChange }: FieldProps<SelectControl>) {
  const id = `viz-${control.id}`;
  const selected = typeof value === 'string' ? value : control.defaultValue;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {control.label}
      </label>
      <select
        id={id}
        className="mt-1.5 h-9 w-full rounded-md border border-border bg-surface px-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
      >
        {control.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {control.hint ? (
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{control.hint}</p>
      ) : null}
    </div>
  );
}

function SegmentField({ control, value, onChange }: FieldProps<SegmentControl>) {
  const groupName = useId();
  const selected = typeof value === 'string' ? value : control.defaultValue;
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{control.label}</legend>
      <div className="mt-1.5 grid grid-cols-2 gap-1.5 rounded-lg border border-border bg-surface-muted p-1">
        {control.options.map((option) => {
          const id = `${groupName}-${option.value}`;
          const active = selected === option.value;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                'cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-medium transition-colors',
                active
                  ? 'bg-surface text-foreground shadow-card'
                  : 'text-muted-foreground hover:text-foreground',
                'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring',
              )}
            >
              <input
                id={id}
                type="radio"
                name={groupName}
                className="sr-only"
                checked={active}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          );
        })}
      </div>
      {control.hint ? (
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{control.hint}</p>
      ) : null}
    </fieldset>
  );
}

function ToggleField({ control, value, onChange }: FieldProps<ToggleControl>) {
  const on = value === true;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="flex w-full items-center justify-between gap-3 rounded-md py-1 text-left"
    >
      <span className="text-sm font-medium text-foreground">{control.label}</span>
      <span
        aria-hidden="true"
        className={cn(
          'relative h-5 w-9 shrink-0 rounded-full border transition-colors',
          on ? 'border-primary bg-primary' : 'border-border bg-surface-muted',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 size-3.5 rounded-full bg-surface shadow-card transition-[left] duration-150',
            on ? 'left-[18px]' : 'left-0.5',
          )}
        />
      </span>
      <span className="sr-only">
        {on ? control.onLabel ?? 'On' : control.offLabel ?? 'Off'}
      </span>
    </button>
  );
}

export function ControlField({
  control,
  value,
  onChange,
}: {
  control: Control;
  value: Params[string];
  onChange: (value: Params[string]) => void;
}) {
  switch (control.kind) {
    case 'slider':
      return <SliderField control={control} value={value} onChange={onChange} />;
    case 'select':
      return <SelectField control={control} value={value} onChange={onChange} />;
    case 'segment':
      return <SegmentField control={control} value={value} onChange={onChange} />;
    case 'toggle':
      return <ToggleField control={control} value={value} onChange={onChange} />;
  }
}

export function ControlPanel({
  controls,
  params,
  onChange,
  onReset,
}: {
  controls: Control[];
  params: Params;
  onChange: (id: string, value: Params[string]) => void;
  onReset: () => void;
}) {
  const visible = controls.filter((control) => !control.when || control.when(params));

  return (
    <section
      aria-labelledby="viz-controls-title"
      className="rounded-card border border-border bg-surface shadow-card"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h2 id="viz-controls-title" className="text-sm font-semibold text-foreground">
          Parameters
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground hover:bg-surface-muted hover:text-foreground"
        >
          <RotateCcw aria-hidden className="size-3.5" />
          Reset
        </button>
      </div>
      <div className="space-y-5 px-4 py-4">
        {visible.map((control) => (
          <ControlField
            key={control.id}
            control={control}
            value={params[control.id]}
            onChange={(value) => onChange(control.id, value)}
          />
        ))}
      </div>
    </section>
  );
}
