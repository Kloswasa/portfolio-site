import Link from "next/link";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { PageEndCopy } from "@/src/lib/page-end/types";

interface PageEndSectionProps {
  copy: PageEndCopy;
  showOrnament?: boolean;
  className?: string;
}

function PageEndOrnament() {
  return (
    <svg
      className="page-end__ornament"
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
  );
}

export function PageEndSection({
  copy,
  showOrnament = false,
  className,
}: PageEndSectionProps) {
  const sectionClassName = className
    ? `page-end ${className}`
    : "page-end";

  return (
    <ScrollReveal as="section" className={sectionClassName}>
      {showOrnament ? <PageEndOrnament /> : null}
      <p className="eyebrow mb-0">{copy.kicker}</p>
      <h2 className="page-end__title">
        {copy.titleLead}
        <br />
        <em>{copy.titleAccent}</em>
      </h2>
      <div className="page-end__actions">
        {copy.actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={
              action.variant === "ghost" ? "btn btn-outline" : "btn btn-primary"
            }
          >
            {action.label}
          </Link>
        ))}
      </div>
    </ScrollReveal>
  );
}
