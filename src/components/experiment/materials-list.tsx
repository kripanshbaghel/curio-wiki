export function MaterialsList({ materials }: { materials: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {materials.map((material) => (
        <li
          key={material}
          className="flex items-start gap-2 rounded-card border border-border bg-surface px-4 py-2.5 text-sm text-foreground shadow-card"
        >
          <span aria-hidden className="mt-0.5 size-2 shrink-0 rounded-full bg-primary" />
          {material}
        </li>
      ))}
    </ul>
  );
}
