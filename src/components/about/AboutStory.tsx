import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { RichText } from "@/src/components/about/RichText";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutBlock, AboutStory as AboutStoryData } from "@/src/lib/about/types";

interface AboutStoryProps {
  block: AboutBlock;
  story: AboutStoryData;
}

export function AboutStory({ block, story }: AboutStoryProps) {
  return (
    <ScrollReveal as="section" className="about-block" revealOnScroll={false}>
      <AboutBlockHead block={block} />

      <div className="about-story">
        <div className="about-portrait">
          <div className="about-portrait__plate">
            <PortraitArt />
            <span className="about-portrait__mat" aria-hidden="true" />
            <p className="about-portrait__label">{story.portrait.label}</p>
          </div>
          <div className="about-portrait__stamp" aria-hidden="true">
            <strong>{story.portrait.stampValue}</strong>
            <span>{story.portrait.stampLabel}</span>
          </div>
        </div>

        <div className="about-story__prose">
          <p className="about-story__lead">
            <RichText value={story.lead} />
          </p>
          {story.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "about-story__p about-story__p--first"
                  : "about-story__p"
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="about-story__sign">{story.signature}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PortraitArt() {
  return (
    <svg
      viewBox="0 0 300 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="about-portrait__art"
    >
      <circle
        cx="150"
        cy="120"
        r="56"
        fill="var(--color-primary-muted)"
        opacity="0.12"
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
      />
      <path
        d="M70 320 C70 250 105 210 150 210 C195 210 230 250 230 320"
        fill="var(--color-primary-muted)"
        opacity="0.1"
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
      />
      <path
        d="M150 320 C150 270 140 220 120 180 C104 148 96 110 110 70"
        stroke="var(--color-border-strong)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse cx="98" cy="150" rx="20" ry="12" transform="rotate(-28 98 150)" fill="var(--color-primary-muted)" opacity="0.18" stroke="var(--color-border-strong)" strokeWidth="0.7" />
      <ellipse cx="82" cy="170" rx="16" ry="10" transform="rotate(-52 82 170)" fill="var(--color-primary-muted)" opacity="0.14" stroke="var(--color-border-strong)" strokeWidth="0.7" />
      <ellipse cx="118" cy="118" rx="17" ry="10" transform="rotate(-20 118 118)" fill="var(--color-primary-muted)" opacity="0.16" stroke="var(--color-border-strong)" strokeWidth="0.7" />
      <ellipse cx="76" cy="200" rx="18" ry="11" transform="rotate(-30 76 200)" fill="var(--color-primary-muted)" opacity="0.18" stroke="var(--color-border-strong)" strokeWidth="0.7" />
      <circle cx="110" cy="70" r="9" fill="var(--color-primary-muted)" opacity="0.2" stroke="var(--color-border-strong)" strokeWidth="0.7" />
      <g fill="var(--color-accent)" opacity="0.7">
        <circle cx="210" cy="90" r="1.5" />
        <circle cx="232" cy="130" r="1.5" />
        <circle cx="200" cy="150" r="1.2" />
      </g>
      <path d="M210 90 L232 130 L200 150" stroke="var(--color-accent)" strokeWidth="0.4" fill="none" opacity="0.5" />
      <path d="M210 90 L226 78 L232 130" stroke="var(--color-accent)" strokeWidth="0.4" fill="none" opacity="0.35" />
    </svg>
  );
}
