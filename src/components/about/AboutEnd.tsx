import Link from "next/link";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutEndCopy } from "@/src/lib/about/types";

interface AboutEndProps {
  copy: AboutEndCopy;
}

export function AboutEnd({ copy }: AboutEndProps) {
  return (
    <ScrollReveal as="section" className="about-end">
      <p className="eyebrow mb-0">{copy.kicker}</p>
      <h2 className="about-end__title">
        {copy.titleLead}
        <br />
        <em>{copy.titleAccent}</em>
      </h2>
      <div className="about-end__actions">
        {copy.actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={
              action.variant === "ghost"
                ? "about-end__btn about-end__btn--ghost"
                : "about-end__btn"
            }
          >
            {action.label}
          </Link>
        ))}
      </div>
    </ScrollReveal>
  );
}
