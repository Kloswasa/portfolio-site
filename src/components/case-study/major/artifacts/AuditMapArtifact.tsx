export function AuditMapArtifact() {
  const ink = (pct: number) =>
    `color-mix(in srgb, var(--color-text-inverse) ${pct}%, transparent)`;
  const accent = (pct: number) =>
    `color-mix(in srgb, var(--color-accent) ${pct}%, transparent)`;

  return (
    <svg viewBox="0 0 800 360" height="360" xmlns="http://www.w3.org/2000/svg" className="block w-full" aria-hidden>
      <rect width="800" height="360" fill="var(--color-header-bg)" />
      {[60, 120, 180, 240, 300].map((y) => (
        <line key={y} x1="0" y1={y} x2="800" y2={y} stroke={ink(6)} strokeWidth="1" />
      ))}
      {[
        { x: 90, label: "ONBOARDING" },
        { x: 230, label: "ROUNDS" },
        { x: 370, label: "FEEDBACK" },
        { x: 510, label: "RESULTS" },
        { x: 650, label: "SHARING" },
      ].map(({ x, label }) => (
        <text key={label} x={x} y="30" fontFamily="var(--font-mono)" fontSize="9" fill={ink(30)} textAnchor="middle" letterSpacing="1">
          {label}
        </text>
      ))}
      {[
        { y: 95, label: "Test-style" },
        { y: 155, label: "Playful" },
        { y: 215, label: "Community" },
      ].map(({ y, label }) => (
        <text key={label} x="10" y={y} fontFamily="var(--font-mono)" fontSize="9" fill={ink(25)} letterSpacing="0.5">
          {label}
        </text>
      ))}
      {[
        { x: 50, y: 68, w: 80, h: 44, conflict: true, text: "High stakes" },
        { x: 190, y: 68, w: 80, h: 44, conflict: true, text: "Timed" },
        { x: 330, y: 68, w: 80, h: 44, conflict: false, text: "Punitive" },
        { x: 470, y: 68, w: 80, h: 44, conflict: true, text: "Score-led" },
        { x: 610, y: 68, w: 80, h: 44, conflict: true, text: "No share" },
        { x: 50, y: 128, w: 80, h: 44, conflict: false, text: "Warm intro" },
        { x: 190, y: 128, w: 80, h: 44, conflict: false, text: "Short calls" },
        { x: 330, y: 128, w: 80, h: 44, conflict: true, text: "Mixed tone" },
        { x: 470, y: 128, w: 80, h: 44, conflict: false, text: "Celebrate" },
        { x: 610, y: 128, w: 80, h: 44, conflict: false, text: "Cards" },
        { x: 50, y: 188, w: 80, h: 44, conflict: false, text: "Group-led" },
        { x: 190, y: 188, w: 80, h: 44, conflict: false, text: "5 min avg" },
        { x: 330, y: 188, w: 80, h: 44, conflict: false, text: "Encouraging" },
        { x: 470, y: 188, w: 80, h: 44, conflict: false, text: "Progress" },
        { x: 610, y: 188, w: 80, h: 44, conflict: false, text: "WhatsApp" },
      ].map(({ x, y, w, h, conflict, text }) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx="1"
            fill={conflict ? accent(15) : ink(6)}
            stroke={conflict ? accent(40) : ink(15)}
            strokeWidth="0.7"
          />
          <text
            x={x + w / 2}
            y={y + h / 2 + 4}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill={conflict ? accent(80) : ink(45)}
            textAnchor="middle"
          >
            {text}
          </text>
        </g>
      ))}
      <rect x="50" y="315" width="12" height="12" rx="1" fill={accent(15)} stroke={accent(40)} strokeWidth="0.7" />
      <text x="68" y="325" fontFamily="var(--font-mono)" fontSize="8" fill={ink(30)} letterSpacing="0.5">
        Friction / mismatch
      </text>
      <rect x="220" y="315" width="12" height="12" rx="1" fill={ink(6)} stroke={ink(15)} strokeWidth="0.7" />
      <text x="238" y="325" fontFamily="var(--font-mono)" fontSize="8" fill={ink(30)} letterSpacing="0.5">
        Aligned pattern
      </text>
    </svg>
  );
}
