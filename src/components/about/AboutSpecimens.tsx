import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type {
  AboutBlock,
  AboutSpecimen,
  AboutSpecimenArt,
} from "@/src/lib/about/types";

interface AboutSpecimensProps {
  block: AboutBlock;
  specimens: AboutSpecimen[];
}

export function AboutSpecimens({ block, specimens }: AboutSpecimensProps) {
  return (
    <ScrollReveal as="section" className="about-block">
      <AboutBlockHead block={block} />

      <div className="about-specimens">
        {specimens.map((specimen) => (
          <article className="about-spec" key={specimen.no}>
            <div className="about-spec__media" aria-hidden="true">
              <SpecimenArt art={specimen.art} />
            </div>
            <span className="about-spec__mat" aria-hidden="true" />
            <span className="about-spec__grad" aria-hidden="true" />
            <span className="about-spec__no">{specimen.no}</span>
            <div className="about-spec__info">
              <h3 className="about-spec__name">{specimen.name}</h3>
              <p className="about-spec__desc">{specimen.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}

function SpecimenArt({ art }: { art: AboutSpecimenArt }) {
  switch (art) {
    case "cyanotype":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 180 C99 140 97 100 100 60 C102 36 106 22 103 8"
            stroke="var(--color-primary-muted)"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          />
          <g stroke="var(--color-border-strong)" strokeWidth="1" opacity="0.6" fill="none">
            <path d="M100 150 C82 142 56 138 36 144 M100 120 C82 112 56 108 38 116 M101 92 C84 86 60 84 42 92 M101 66 C86 60 66 60 50 68" />
            <path d="M100 150 C118 142 144 138 164 144 M100 120 C118 112 144 108 162 116 M101 92 C116 86 140 84 158 92 M101 66 C114 60 134 60 150 68" />
          </g>
        </svg>
      );
    case "engraving":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g stroke="var(--color-border-strong)" strokeWidth="1" opacity="0.6" fill="var(--color-primary-muted)" fillOpacity="0.12">
            <path d="M100 100 C80 70 78 40 100 22 C122 40 120 70 100 100Z" />
            <path d="M100 100 C70 88 50 60 56 34 C86 46 110 74 100 100Z" />
            <path d="M100 100 C130 88 150 60 144 34 C114 46 90 74 100 100Z" />
            <path d="M100 104 C72 116 44 110 30 84 C60 74 96 88 100 104Z" />
            <path d="M100 104 C128 116 156 110 170 84 C140 74 104 88 100 104Z" />
          </g>
          <path d="M100 104 C100 140 99 168 104 188" stroke="var(--color-primary-muted)" strokeWidth="1.2" fill="none" opacity="0.5" />
          <g fill="var(--color-accent)" opacity="0.7">
            <circle cx="100" cy="100" r="3" />
            <circle cx="93" cy="92" r="2" />
            <circle cx="107" cy="92" r="2" />
          </g>
        </svg>
      );
    case "riso":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="88" cy="92" r="48" fill="var(--color-tertiary)" opacity="0.4" />
          <circle cx="108" cy="108" r="48" fill="var(--color-accent)" opacity="0.35" />
          <g fill="var(--color-primary-muted)" opacity="0.6">
            <circle cx="70" cy="80" r="1.5" />
            <circle cx="90" cy="80" r="1.5" />
            <circle cx="110" cy="80" r="1.5" />
            <circle cx="80" cy="100" r="1.5" />
            <circle cx="100" cy="100" r="1.5" />
            <circle cx="120" cy="100" r="1.5" />
            <circle cx="90" cy="120" r="1.5" />
            <circle cx="110" cy="120" r="1.5" />
          </g>
        </svg>
      );
    case "celestial":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="64" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.5" opacity="0.5" />
          <path d="M100 30 L106 70 L146 56 L112 80 L150 100 L112 100 Z" fill="var(--color-primary-muted)" opacity="0.5" />
          <path d="M100 30 L94 70 L54 56 L88 80 L50 100 L88 100 Z" fill="var(--color-border-strong)" opacity="0.4" />
          <path d="M150 140 L153 152 L165 140 L153 143 L150 131 L147 143 L135 140 L147 152 Z" fill="var(--color-accent)" />
          <g fill="var(--color-primary-muted)" opacity="0.6">
            <circle cx="60" cy="140" r="2" />
            <circle cx="100" cy="160" r="2" />
            <circle cx="135" cy="120" r="1.5" />
          </g>
        </svg>
      );
    case "indigo":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g stroke="var(--color-border-strong)" strokeWidth="1.4" fill="none" opacity="0.55">
            <path d="M20 70 C50 50 70 90 100 70 C130 50 150 90 180 70" />
            <path d="M20 100 C50 80 70 120 100 100 C130 80 150 120 180 100" />
            <path d="M20 130 C50 110 70 150 100 130 C130 110 150 150 180 130" />
          </g>
          <g fill="var(--color-primary-muted)" opacity="0.25">
            <rect x="30" y="40" width="40" height="40" />
            <rect x="110" y="120" width="40" height="40" />
          </g>
        </svg>
      );
    case "ampersand":
      return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <text
            x="100"
            y="138"
            textAnchor="middle"
            fontFamily="var(--font-heading)"
            fontStyle="italic"
            fontSize="120"
            fill="var(--color-primary-muted)"
            opacity="0.7"
          >
            &amp;
          </text>
          <line x1="40" y1="158" x2="160" y2="158" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}
