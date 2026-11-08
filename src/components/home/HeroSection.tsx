import Link from "next/link";
import { HeroHomePlant } from "@/src/components/home/HeroHomePlant";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import { siteConfig } from "@/src/lib/config";

type HeroCta = {
  label: string;
  href: string;
};

type HeroSectionProps = {
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

const ROLE_TONE_CLASS = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
} as const;

export function HeroSection({
  primaryCta = siteConfig.hero.primaryCta,
  secondaryCta = siteConfig.hero.secondaryCta,
}: HeroSectionProps = {}) {
  const { hero } = siteConfig;

  return (
    <section id="hero" data-snap-section="" className="hero relative overflow-hidden">
      <div
        className="hero-number font-heading text-heading-3xl font-semibold leading-none md:text-heading-4xl"
        aria-hidden
      >
        {hero.sectionNumber}
      </div>
      <div className="hero-inner">
        <div className="hero-copy relative z-10 flex flex-col justify-end">
          <SnapSectionReveal immediate className="flex flex-col">
            <SnapItem>
              <h1 className="mb-3 font-heading text-heading-4xl leading-none text-text md:text-heading-5xl">
                <em className="hero-name__initial">{hero.nameLine1.slice(0, 1)}</em>
                {hero.nameLine1.slice(1)}
                <br />
                <em className="text-primary">{hero.nameLine2}</em>
              </h1>
            </SnapItem>

            <SnapItem>
              <p className="hero-role mb-8 pl-1 font-heading text-lrg font-medium text-text-muted md:mb-10 md:text-xl">
                {hero.roleLead}
                <br />
                <span className="hero-role__words">
                  {hero.role.map((part, index) => (
                    <span key={part.word} className="contents">
                      {index > 0 ? (
                        <span className="hero-role__plus text-text" aria-hidden>
                          +
                        </span>
                      ) : null}
                      <span
                        className={[
                          ROLE_TONE_CLASS[part.tone],
                          "script" in part && part.script
                            ? "hero-role__script"
                            : null,
                          "mono" in part && part.mono
                            ? "hero-role__mono"
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {part.word}
                      </span>
                    </span>
                  ))}
                </span>
              </p>
            </SnapItem>

            <SnapItem className="flex flex-wrap items-center gap-6">
              <Link className="btn btn-primary" href={primaryCta.href}>
                {primaryCta.label}
              </Link>
              <Link className="btn-text" href={secondaryCta.href}>
                {secondaryCta.label} <span aria-hidden>→</span>
              </Link>
            </SnapItem>
          </SnapSectionReveal>
        </div>

        <div className="hero-stamp-slot relative">
          <HeroHomePlant />
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden>
        <div className="hero-scroll-line" />
        <div className="hero-scroll-text font-mono text-xs uppercase tracking-stamp-lg">
          Scroll
        </div>
      </div>
    </section>
  );
}
