export function TokenHierarchyArtifact() {
  const ink = (pct: number) =>
    `color-mix(in srgb, var(--color-text-inverse) ${pct}%, transparent)`;
  const accent = (pct: number) =>
    `color-mix(in srgb, var(--color-accent) ${pct}%, transparent)`;
  const mid = (pct: number) =>
    `color-mix(in srgb, var(--color-tertiary) ${pct}%, transparent)`;
  const soft = (pct: number) =>
    `color-mix(in srgb, var(--color-border-strong) ${pct}%, transparent)`;

  const primitive = [
    "indigo-600",
    "ivory-50",
    "amber-400",
    "space-4",
    "radius-md",
  ];
  const semantic = [
    "color-action-primary",
    "color-surface",
    "color-accent",
    "space-component-md",
    "radius-interactive",
  ];
  const component = [
    "card-bg-default",
    "card-bg-surface",
    "btn-bg-accent",
    "card-padding",
    "btn-radius",
  ];

  return (
    <svg viewBox="0 0 800 280" height="280" xmlns="http://www.w3.org/2000/svg" className="block w-full" aria-hidden>
      <rect width="800" height="280" fill="var(--color-header-bg)" />
      {[
        { x: 120, label: "PRIMITIVE" },
        { x: 380, label: "SEMANTIC" },
        { x: 640, label: "COMPONENT" },
      ].map(({ x, label }) => (
        <text key={label} x={x} y="28" fontFamily="var(--font-mono)" fontSize="9" fill={ink(30)} textAnchor="middle" letterSpacing="1">
          {label}
        </text>
      ))}
      {primitive.map((token, i) => {
        const y = 40 + i * 42;
        const isAccent = i < 3;
        return (
          <g key={token}>
            <rect
              x="40"
              y={y}
              width="160"
              height="32"
              rx="1"
              fill={isAccent ? accent(12) : ink(6)}
              stroke={isAccent ? accent(35) : ink(15)}
              strokeWidth="0.7"
            />
            <text
              x="120"
              y={y + 20}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill={isAccent ? accent(80) : ink(40)}
              textAnchor="middle"
            >
              {token}
            </text>
            <rect
              x="300"
              y={y + 10}
              width="160"
              height="32"
              rx="1"
              fill={mid(15)}
              stroke={mid(40)}
              strokeWidth="0.7"
            />
            <text x="380" y={y + 30} fontFamily="var(--font-mono)" fontSize="9" fill={soft(85)} textAnchor="middle">
              {semantic[i]}
            </text>
            <rect
              x="560"
              y={y + 20}
              width="160"
              height="32"
              rx="1"
              fill={ink(6)}
              stroke={ink(20)}
              strokeWidth="0.7"
            />
            <text x="640" y={y + 40} fontFamily="var(--font-mono)" fontSize="9" fill={ink(50)} textAnchor="middle">
              {component[i]}
            </text>
          </g>
        );
      })}
      <line x1="260" y1="40" x2="260" y2="250" stroke={ink(7)} strokeWidth="1" strokeDasharray="4,5" />
      <line x1="520" y1="40" x2="520" y2="250" stroke={ink(7)} strokeWidth="1" strokeDasharray="4,5" />
    </svg>
  );
}
