export function MetricsBlock({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="panel p-6">
          <p className="font-mono text-xs text-text-muted">{item.label}</p>
          <p className="mt-2 text-heading-xl text-text">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
