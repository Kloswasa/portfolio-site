import Link from "next/link";
import { HeroHomePlant } from "@/src/components/HeroHomePlant";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { siteConfig } from "@/src/lib/config";

type HeroCta = {
  label: string;
  href: string;
};

type HeroSectionProps = {
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

function AboutHeading({ text }: { text: string }) {
  const emphasis = "intention & care";
  const index = text.indexOf(emphasis);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <em>{emphasis}</em>
      {text.slice(index + emphasis.length)}
    </>
  );
}

export function HeroSection({
  primaryCta = siteConfig.hero.primaryCta,
  secondaryCta = siteConfig.hero.secondaryCta,
}: HeroSectionProps = {}) {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="hero relative grid overflow-hidden md:grid-cols-2"
    >
      <div className="hero-left relative z-10 flex flex-col justify-end bg-bg px-8 pb-12 pt-24 md:px-12 md:pb-20 md:pt-32">
        <SnapSectionReveal immediate className="flex flex-col">
          <SnapItem>
            <p className="eyebrow">{hero.eyebrow}</p>
          </SnapItem>

          <SnapItem>
            <h1 className="mb-3 font-heading text-heading-4xl leading-none text-text md:text-heading-5xl">
              {hero.nameLine1}
              <br />
              <em className="italic text-primary">{hero.nameLine2}</em>
            </h1>
          </SnapItem>

          <SnapItem>
            <p className="hero-role mb-8 pl-1 font-heading text-lrg font-medium text-text-muted md:mb-12 md:text-xl">
              <AboutHeading text={hero.role} />
            </p>
          </SnapItem>

          <SnapItem>
            <p className="mb-12 max-w-full font-body text-base leading-relaxed text-text-muted md:max-w-sm text-justify">
              {hero.description}
            </p>
          </SnapItem>

          <SnapItem className="flex flex-wrap items-center gap-6">
            <Link className="btn btn-primary" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <Link className="btn btn-text" href={secondaryCta.href}>
              {secondaryCta.label} <span aria-hidden>→</span>
            </Link>
          </SnapItem>
        </SnapSectionReveal>
      </div>

      <div className="hero-right relative order-first md:order-none">
        <div
          className="hero-number font-heading text-heading-4xl font-semibold leading-none md:text-heading-5xl"
          aria-hidden
        >
          {hero.sectionNumber}
        </div>

        <div className="hero-scroll-indicator" aria-hidden>
          <div className="hero-scroll-line" />
          <div className="hero-scroll-text font-mono text-xs uppercase tracking-[0.18em]">
            Scroll
          </div>
        </div>

        <HeroHomePlant />
      </div>
    </section>
  );
}
