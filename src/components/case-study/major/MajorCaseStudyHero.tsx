import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import type { MajorCaseStudyHero as HeroData } from "@/src/lib/case-studies/types";
import type { ProjectExperienceLink } from "@/src/lib/projects";

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
      <circle cx="450" cy="300" r="220" fill="none" stroke="white" strokeWidth="0.7" opacity="0.4" />
      <circle cx="450" cy="300" r="160" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
      <circle cx="450" cy="300" r="100" fill="none" stroke="white" strokeWidth="0.4" opacity="0.22" />
      <circle cx="450" cy="300" r="50" fill="none" stroke="white" strokeWidth="0.4" opacity="0.15" />
      <line x1="230" y1="300" x2="670" y2="300" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <line x1="450" y1="80" x2="450" y2="520" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <path d="M450 80 A220 220 0 0 1 670 300" stroke="white" strokeWidth="1.4" fill="none" opacity="0.55" />
      <circle cx="670" cy="300" r="5" fill="white" opacity="0.5" />
      <path
        d="M700 580 C690 520, 680 460, 690 380 C700 300, 720 260, 710 180"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse cx="678" cy="320" rx="20" ry="13" transform="rotate(-25 678 320)" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
      <ellipse cx="660" cy="338" rx="16" ry="10" transform="rotate(-55 660 338)" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
      <circle cx="710" cy="182" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
    </svg>
  );
}

export function MajorCaseStudyHero({
  hero,
  experienceLink,
}: {
  hero: HeroData;
  experienceLink?: ProjectExperienceLink | null;
}) {
  return (
    <section className="cs-major__hero" id="hook">
      <div className="cs-major__hero-dots" aria-hidden />
      <div className="cs-major__hero-bg" aria-hidden>
        {hero.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="cs-major__hero-img"
          />
        ) : (
          <HeroBotanicalSvg />
        )}
      </div>
      <div className="cs-major__hero-gradient" aria-hidden />

      <SnapSectionReveal className="cs-major__hero-content" amount={0.15}>
        <SnapItem>
          <div className="cs-major__breadcrumb">
            <Link href="/work">Work</Link>
            <span aria-hidden>/</span>
            <span>{hero.breadcrumb}</span>
          </div>
        </SnapItem>

        <SnapItem>
          <div className="eyebrow">{hero.eyebrow}</div>
        </SnapItem>

        <SnapItem>
          <h1 className="cs-major__hero-title">
            {hero.titleLine1}
            <br />
            <em>{hero.titleLine2}</em>
          </h1>
        </SnapItem>

        <SnapItem>
          <p className="cs-major__hero-summary">{hero.summary}</p>
        </SnapItem>

        <SnapItem>
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
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
