import { AuditMapArtifact } from "@/src/components/case-study/major/artifacts/AuditMapArtifact";
import { TokenHierarchyArtifact } from "@/src/components/case-study/major/artifacts/TokenHierarchyArtifact";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import type { MajorContentBlock } from "@/src/lib/case-studies/types";

function OrnamentSvg() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0 opacity-35">
      <circle cx="20" cy="20" r="16" fill="none" stroke="var(--color-border)" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="6" fill="none" stroke="var(--color-border)" strokeWidth="0.8" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="var(--color-border)" strokeWidth="0.5" />
      <line x1="20" y1="4" x2="20" y2="36" stroke="var(--color-border)" strokeWidth="0.5" />
    </svg>
  );
}

export function MajorContentBlocks({
  blocks,
}: {
  blocks: MajorContentBlock[];
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <SnapSectionReveal key={`${block.type}-${index}`} amount={0.1}>
          <SnapItem>
            <Block block={block} />
          </SnapItem>
        </SnapSectionReveal>
      ))}
    </>
  );
}

function parseProseLine(line: string): { content: string; indentLevel: number } {
  const match = line.match(/^(\s+)(.*)$/);
  if (!match) {
    return { content: line, indentLevel: 0 };
  }

  const spaceCount = match[1].replace(/\t/g, "    ").length;
  const indentLevel = Math.min(3, Math.ceil(spaceCount / 4));

  return { content: match[2], indentLevel };
}

/** Renders `**bold**` spans as `<strong>`; leaves unmatched text as-is. */
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function ProseParagraph({ paragraph }: { paragraph: string }) {
  const lines = paragraph.split("\n").filter((line) => line.trim().length > 0);

  return (
    <p className="cs-major__body">
      {lines.map((line, lineIndex) => {
        const { content, indentLevel } = parseProseLine(line);

        return (
          <span
            key={lineIndex}
            className="cs-major__body-line"
            data-indent={indentLevel > 0 ? indentLevel : undefined}
          >
            <InlineText text={content} />
          </span>
        );
      })}
    </p>
  );
}

function Block({ block }: { block: MajorContentBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <>
          {block.paragraphs.map((paragraph) => (
            <ProseParagraph key={paragraph.slice(0, 32)} paragraph={paragraph} />
          ))}
        </>
      );

    case "stats":
      return (
        <div className="cs-major__stats">
          {block.items.map((item) => (
            <div
              key={item.label}
              className={`cs-major__stat cs-major__stat--${item.variant}`}
            >
              <div className="cs-major__stat-val">{item.value}</div>
              <div className="cs-major__stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      );

    case "pullquote":
      return (
        <blockquote className="cs-major__pull-quote">
          <span className="cs-major__pull-quote-mark" aria-hidden>
            &ldquo;
          </span>
          <p className="cs-major__pull-quote-text">
            <InlineText text={block.text} />
          </p>
          <cite className="cs-major__pull-quote-source not-italic">
            {block.source}
          </cite>
        </blockquote>
      );

    case "findings":
      return (
        <div className="cs-major__findings">
          {block.items.map((item) => (
            <div key={item.num} className="cs-major__finding" data-num={item.num}>
              <div className="cs-major__finding-label">{item.label}</div>
              <div className="cs-major__finding-title">{item.title}</div>
              <div className="cs-major__finding-body">
                <InlineText text={item.body} />
              </div>
            </div>
          ))}
        </div>
      );

    case "annotation":
      return (
        <div className="cs-major__annotation">
          <span className="cs-major__annotation-icon">↳ note</span>
          <span className="cs-major__annotation-text">
            <InlineText text={block.text} />
          </span>
        </div>
      );

    case "twoCol":
      return (
        <div className="cs-major__two-col">
          {block.items.map((item) => (
            <div key={item.label}>
              <div className="cs-major__two-col-label">{item.label}</div>
              <div className="cs-major__two-col-body">
                <InlineText text={item.body} />
              </div>
            </div>
          ))}
        </div>
      );

    case "artifact":
      return (
        <figure className="cs-major__artifact">
          <div className="cs-major__artifact-label">{block.label}</div>
          {block.variant === "audit-map" ? <AuditMapArtifact /> : <TokenHierarchyArtifact />}
          <figcaption className="cs-major__artifact-caption">
            <span>{block.caption}</span>
            {block.captionMeta && <span>{block.captionMeta}</span>}
          </figcaption>
        </figure>
      );

    case "process":
      return (
        <div className="cs-major__process">
          {block.items.map((item) => (
            <div key={item.num} className="cs-major__process-col">
              <div className="cs-major__process-num">{item.num}</div>
              <div className="cs-major__process-accent" aria-hidden />
              <div className="cs-major__process-title">{item.title}</div>
              <div className="cs-major__process-body">
                <InlineText text={item.body} />
              </div>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <aside className="cs-major__callout">
          <div className="cs-major__callout-inner">
            <div className="cs-major__callout-label">{block.label}</div>
            <div className="cs-major__callout-title">{block.title}</div>
            <div className="cs-major__callout-body">
              <InlineText text={block.body} />
            </div>
          </div>
        </aside>
      );

    case "ornament":
      return (
        <div className="cs-major__ornament" aria-hidden>
          <div className="cs-major__ornament-line" />
          <OrnamentSvg />
          <div className="cs-major__ornament-line" />
        </div>
      );

    case "outcomes":
      return (
        <div className="cs-major__outcomes">
          {block.items.map((item) => (
            <div key={item.label} className="cs-major__outcome">
              <div className="cs-major__outcome-val">{item.value}</div>
              <div className="cs-major__outcome-label">{item.label}</div>
              <div className="cs-major__outcome-body">
                <InlineText text={item.body} />
              </div>
            </div>
          ))}
        </div>
      );

    case "reflections":
      return (
        <ol className="cs-major__reflections">
          {block.items.map((text, i) => (
            <li key={text.slice(0, 24)}>
              <span className="cs-major__reflection-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <InlineText text={text} />
              </span>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <figure className="cs-major__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            className="cs-major__image-img"
            loading="lazy"
          />
          {block.caption ? (
            <figcaption className="cs-major__image-caption">{block.caption}</figcaption>
          ) : null}
        </figure>
      );

    case "imagePair":
      return (
        <figure className="cs-major__image-pair">
          <div className="cs-major__image-pair-grid">
            {block.items.map((item) => (
              <div key={item.src} className="cs-major__image-pair-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="cs-major__image-pair-img"
                  loading="lazy"
                />
                <figcaption className="cs-major__image-pair-caption">
                  {item.caption}
                </figcaption>
              </div>
            ))}
          </div>
        </figure>
      );

    case "imageGrid":
      return (
        <figure className="cs-major__image-grid">
          <div className="cs-major__image-grid-items">
            {block.items.map((item) => (
              <div key={item.src} className="cs-major__image-grid-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="cs-major__image-grid-img"
                  loading="lazy"
                />
                {item.caption ? (
                  <figcaption className="cs-major__image-grid-caption">
                    {item.caption}
                  </figcaption>
                ) : null}
              </div>
            ))}
          </div>
        </figure>
      );

    case "video":
      return (
        <figure className="cs-major__video">
          <video
            className="cs-major__video-player"
            src={block.src}
            poster={block.poster}
            controls
            playsInline
            preload="metadata"
            aria-label={block.alt}
          />
          <figcaption className="cs-major__video-caption">{block.caption}</figcaption>
        </figure>
      );

    case "colorSpecimen":
      return (
        <div className="cs-major__color-specimen" aria-label="Color token specimen">
          {[
            { token: "bg", label: "Background" },
            { token: "surface", label: "Surface" },
            { token: "primary", label: "Primary" },
            { token: "accent", label: "Accent" },
            { token: "header-bg", label: "Header" },
            { token: "text-muted", label: "Muted text" },
          ].map((swatch) => (
            <div key={swatch.token} className="cs-major__color-swatch">
              <div
                className="cs-major__color-swatch-fill"
                style={{ background: `var(--color-${swatch.token})` }}
              />
              <div className="cs-major__color-swatch-label">{swatch.label}</div>
              <div className="cs-major__color-swatch-token">color.{swatch.token}</div>
            </div>
          ))}
        </div>
      );

    case "typeSpecimen":
      return (
        <div className="cs-major__type-specimen" aria-label="Typography specimen">
          <div className="cs-major__type-row">
            <span className="cs-major__type-meta">Heading · Fraunces</span>
            <p className="cs-major__type-heading text-heading-3xl">Editorial headline</p>
          </div>
          <div className="cs-major__type-row">
            <span className="cs-major__type-meta">Body · Prompt</span>
            <p className="cs-major__type-body">
              Body copy at base size — used for narrative paragraphs, captions, and
              supporting detail across case study sections.
            </p>
          </div>
          <div className="cs-major__type-row">
            <span className="cs-major__type-meta">Mono · Syne</span>
            <p className="cs-major__type-mono">01 — BRIEF · ROLE · DURATION</p>
          </div>
        </div>
      );

    case "componentGrid":
      return (
        <div className="cs-major__component-grid">
          {block.items.map((item) => (
            <div
              key={item.title}
              className={`cs-major__component-card cs-major__component-card--${item.variant}`}
            >
              <div className="cs-major__component-count">{item.count}</div>
              <div className="cs-major__component-label">{item.label}</div>
              <div className="cs-major__component-title">{item.title}</div>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
