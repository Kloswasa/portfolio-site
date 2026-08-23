import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import type { MajorCaseStudyHero as HeroData } from "@/src/lib/case-studies/types";
import {
  getVisibleProjects,
  type Project,
  type ProjectExperienceLink,
} from "@/src/lib/projects";

function HeroBotanicalSvg() {
  return (
    <svg
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full"
      aria-hidden
    >
      <circle cx="450" cy="300" r="220" fill="none" stroke="var(--color-text-inverse)" strokeWidth="0.7" opacity="0.4" />
      <circle cx="450" cy="300" r="160" fill="none" stroke="var(--color-text-inverse)" strokeWidth="0.5" opacity="0.3" />
      <circle cx="450" cy="300" r="100" fill="none" stroke="var(--color-text-inverse)" strokeWidth="0.4" opacity="0.22" />
      <circle cx="450" cy="300" r="50" fill="none" stroke="var(--color-text-inverse)" strokeWidth="0.4" opacity="0.15" />
      <line x1="230" y1="300" x2="670" y2="300" stroke="var(--color-text-inverse)" strokeWidth="0.4" opacity="0.2" />
      <line x1="450" y1="80" x2="450" y2="520" stroke="var(--color-text-inverse)" strokeWidth="0.4" opacity="0.2" />
      <path d="M450 80 A220 220 0 0 1 670 300" stroke="var(--color-text-inverse)" strokeWidth="1.4" fill="none" opacity="0.55" />
      <circle cx="670" cy="300" r="5" fill="var(--color-text-inverse)" opacity="0.5" />
      <path
        d="M700 580 C690 520, 680 460, 690 380 C700 300, 720 260, 710 180"
        stroke="color-mix(in srgb, var(--color-text-inverse) 35%, transparent)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx="678"
        cy="320"
        rx="20"
        ry="13"
        transform="rotate(-25 678 320)"
        fill="color-mix(in srgb, var(--color-text-inverse) 12%, transparent)"
        stroke="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
        strokeWidth="0.7"
      />
      <ellipse
        cx="660"
        cy="338"
        rx="16"
        ry="10"
        transform="rotate(-55 660 338)"
        fill="color-mix(in srgb, var(--color-text-inverse) 10%, transparent)"
        stroke="color-mix(in srgb, var(--color-text-inverse) 25%, transparent)"
        strokeWidth="0.7"
      />
      <circle
        cx="710"
        cy="182"
        r="12"
        fill="color-mix(in srgb, var(--color-text-inverse) 10%, transparent)"
        stroke="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function HeroBreadcrumb({ label }: { label: string }) {
  return (
    <div className="cs-major__breadcrumb">
      <Link href="/work">Work</Link>
      <span aria-hidden>/</span>
      <span>{label}</span>
    </div>
  );
}

function HeroTitle({
  line1,
  line2,
  stacked,
}: {
  line1: string;
  line2: string;
  stacked: boolean;
}) {
  return (
    <h1 className="cs-major__hero-title">
      {line1}
      {stacked ? <br /> : " "}
      <em>{line2}</em>
    </h1>
  );
}

function HeroMeta({
  hero,
  experienceLink,
}: {
  hero: HeroData;
  experienceLink?: ProjectExperienceLink | null;
}) {
  return (
    <div className="cs-major__meta-strip">
      {hero.meta.map(({ label, value }) => (
        <div key={label} className="cs-major__meta-item">
          <div className="cs-major__meta-label">{label}</div>
          <div className="cs-major__meta-val">{value}</div>
        </div>
      ))}
      {experienceLink ? (
        <div className="cs-major__meta-item cs-major__meta-cta">
          <div className="cs-major__meta-label">
            {experienceLink.sectionLabel}
          </div>
          <a
            className="btn btn-gold cs-major__meta-btn"
            href={experienceLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experienceLink.label}
          </a>
        </div>
      ) : null}
    </div>
  );
}

function projectFrame(slug: string): string {
  const index = getVisibleProjects().findIndex((item) => item.slug === slug);
  return String(Math.max(index, 0) + 1).padStart(2, "0");
}

function splitHeroEyebrow(
  eyebrow: string,
  fallbackNumber: string,
): { number: string; label: string } {
  const match = eyebrow.match(/^(\d{2,3})\s*·\s*(.+)$/);
  if (!match) {
    return { number: fallbackNumber, label: eyebrow };
  }

  return {
    number: match[1].slice(-2),
    label: match[2],
  };
}

function HeroEyebrow({ text }: { text: string }) {
  const { label } = splitHeroEyebrow(text, "");
  return <div className="eyebrow">{label}</div>;
}

function HeroMediaOverlay({
  project,
  eyebrow,
}: {
  project: Project;
  eyebrow: string;
}) {
  const { number, label } = splitHeroEyebrow(
    eyebrow,
    projectFrame(project.slug),
  );

  return (
    <div className="cs-major__hero-media-chrome" aria-hidden>
      <div className="cs-major__hero-media-gradient" />
      <div className="cs-major__hero-media-overlay">
        <div className="cs-major__hero-media-number">{number}</div>
        <div className="eyebrow">{label}</div>
      </div>
    </div>
  );
}

export function MajorCaseStudyHero({
  hero,
  experienceLink,
  project,
}: {
  hero: HeroData;
  experienceLink?: ProjectExperienceLink | null;
  project: Project;
}) {
  const heroImage = hero.image ?? project.coverImage;
  const isSplit = hero.layout !== "overlay" && Boolean(heroImage);
  const showMediaOverlay = isSplit && Boolean(heroImage);

  return (
    <section
      className={isSplit ? "cs-major__hero cs-major__hero--split" : "cs-major__hero"}
      id="hook"
    >
      {isSplit ? null : <div className="cs-major__hero-dots" aria-hidden />}
      <div
        className="cs-major__hero-bg"
        aria-hidden={isSplit ? undefined : true}
      >
        {heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="cs-major__hero-img"
          />
        ) : isSplit ? null : (
          <HeroBotanicalSvg />
        )}
        {showMediaOverlay ? (
          <HeroMediaOverlay project={project} eyebrow={hero.eyebrow} />
        ) : null}
      </div>
      {isSplit ? null : <div className="cs-major__hero-gradient" aria-hidden />}

      <SnapSectionReveal className="cs-major__hero-content" amount={0.15}>
        {isSplit ? (
          <>
            <SnapItem className="cs-major__hero-intro-slot">
              <div className="cs-major__hero-intro">
                <HeroBreadcrumb label={hero.breadcrumb} />
                <HeroTitle
                  line1={hero.titleLine1}
                  line2={hero.titleLine2}
                  stacked={false}
                />
                
                <p className="cs-major__hero-summary">{hero.summary}</p>
              </div>
            </SnapItem>
            <SnapItem>
              <HeroMeta hero={hero} experienceLink={experienceLink} />
            </SnapItem>
          </>
        ) : (
          <>
            <SnapItem>
              <HeroBreadcrumb label={hero.breadcrumb} />
            </SnapItem>
            <SnapItem>
              <HeroEyebrow text={hero.eyebrow} />
            </SnapItem>
            <SnapItem>
              <HeroTitle
                line1={hero.titleLine1}
                line2={hero.titleLine2}
                stacked
              />
            </SnapItem>
            <SnapItem>
              <p className="cs-major__hero-summary">{hero.summary}</p>
            </SnapItem>
            <SnapItem>
              <HeroMeta hero={hero} experienceLink={experienceLink} />
            </SnapItem>
          </>
        )}
      </SnapSectionReveal>
    </section>
  );
}
