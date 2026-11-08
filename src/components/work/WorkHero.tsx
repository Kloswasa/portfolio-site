import type { ReactNode } from "react";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import type { WorkHeroMeta } from "@/src/lib/work/types";

export type WorkHeroIllustration =
  | "wax-flower"
  | "chrysanthemum"
  | "forget-me-not";

interface WorkHeroProps {
  meta: WorkHeroMeta;
  watermark?: string;
  illustration?: WorkHeroIllustration;
  /** First letter and second line use the home hero name lockup. */
  nameTitle?: boolean;
  children?: ReactNode;
}

function HeroNameTitle({
  line1,
  line2,
}: {
  line1: string;
  line2: string;
}) {
  return (
    <h1 className="work-hero__title work-hero__title--name">
      <span className="work-hero__title-line">
        <em className="hero-name__initial">{line1.slice(0, 1)}</em>
        {line1.slice(1)}
      </span>
      <span className="work-hero__title-line">
        <em className="text-primary">{line2}</em>
      </span>
    </h1>
  );
}

export function WorkHero({
  meta,
  watermark = "\u2018 Works \u2019",
  illustration = "wax-flower",
  nameTitle = false,
  children,
}: WorkHeroProps) {
  return (
    <header className="work-hero">
      <p className="work-hero__watermark" aria-hidden="true">
        {watermark}
      </p>

      <div className="work-hero__scroll" aria-hidden="true">
        <span className="work-hero__scroll-line" />
        <span className="work-hero__scroll-label">Scroll</span>
      </div>

      <div className="work-hero__inner work-container">
        <div className="work-hero__copy">
          {nameTitle ? (
            <HeroNameTitle line1={meta.titleLine1} line2={meta.titleLine2} />
          ) : (
            <h1 className="work-hero__title">
              <span className="work-hero__title-line">{meta.titleLine1}</span>
              <span className="work-hero__title-line work-hero__title-line--accent">
                {meta.titleLine2}
              </span>
            </h1>
          )}

          <p className="work-hero__description">{meta.description}</p>

          {children}

          <div className="work-hero__stats" aria-label="Work archive statistics">
            {meta.stats.map((stat) => (
              <div key={stat.label} className="work-hero__stat">
                <span className="work-hero__stat-label">{stat.label}</span>
                <span className="work-hero__stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="work-hero__illustration" aria-hidden="true">
          <PlayIllustration name={illustration} />
        </div>
      </div>
    </header>
  );
}
