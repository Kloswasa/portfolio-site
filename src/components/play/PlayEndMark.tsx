import Link from "next/link";

interface PlayEndMarkProps {
  label: string;
  cta: { label: string; href: string };
}

export function PlayEndMark({ label, cta }: PlayEndMarkProps) {
  return (
    <div className="play-end">
      <svg
        className="play-end__ornament"
        viewBox="0 0 120 40"
        width="120"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="20"
          x2="45"
          y2="20"
          stroke="var(--color-border-subtle)"
          strokeWidth="1"
        />
        <circle
          cx="60"
          cy="20"
          r="8"
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth="1"
        />
        <circle cx="60" cy="20" r="2" fill="var(--color-accent)" />
        <line
          x1="75"
          y1="20"
          x2="120"
          y2="20"
          stroke="var(--color-border-subtle)"
          strokeWidth="1"
        />
      </svg>
      <p className="play-end__label">{label}</p>
      <Link className="play-end__cta" href={cta.href}>
        {cta.label}
      </Link>
    </div>
  );
}
