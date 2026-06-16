export function TokenHierarchyArtifact() {
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
        <text key={label} x={x} y="28" fontFamily="var(--font-mono)" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="middle" letterSpacing="1">
          {label}
        </text>
      ))}
      {primitive.map((token, i) => {
        const y = 40 + i * 42;
        const accent = i < 3;
        return (
          <g key={token}>
            <rect
              x="40"
              y={y}
              width="160"
              height="32"
              rx="1"
              fill={accent ? "rgba(232,168,32,0.12)" : "rgba(255,255,255,0.06)"}
              stroke={accent ? "rgba(232,168,32,0.35)" : "rgba(255,255,255,0.15)"}
              strokeWidth="0.7"
            />
            <text x="120" y={y + 20} fontFamily="var(--font-mono)" fontSize="9" fill={accent ? "rgba(232,168,32,0.8)" : "rgba(255,255,255,0.4)"} textAnchor="middle">
              {token}
            </text>
            <rect
              x="300"
              y={y + 10}
              width="160"
              height="32"
              rx="1"
              fill="rgba(110,155,207,0.15)"
              stroke="rgba(110,155,207,0.4)"
              strokeWidth="0.7"
            />
            <text x="380" y={y + 30} fontFamily="var(--font-mono)" fontSize="9" fill="rgba(181,206,233,0.85)" textAnchor="middle">
              {semantic[i]}
            </text>
            <rect
              x="560"
              y={y + 20}
              width="160"
              height="32"
              rx="1"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.7"
            />
            <text x="640" y={y + 40} fontFamily="var(--font-mono)" fontSize="9" fill="rgba(255,255,255,0.5)" textAnchor="middle">
              {component[i]}
            </text>
          </g>
        );
      })}
      <line x1="260" y1="40" x2="260" y2="250" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4,5" />
      <line x1="520" y1="40" x2="520" y2="250" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4,5" />
    </svg>
  );
}
