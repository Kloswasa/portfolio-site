import { AuditMapArtifact } from "@/src/components/case-study/designer/artifacts/AuditMapArtifact";
import { TokenHierarchyArtifact } from "@/src/components/case-study/designer/artifacts/TokenHierarchyArtifact";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import type { DesignerContentBlock } from "@/src/lib/case-studies/types";

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

export function DesignerContentBlocks({
  blocks,
}: {
  blocks: DesignerContentBlock[];
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

function Block({ block }: { block: DesignerContentBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="cs-designer__body">
              {paragraph}
            </p>
          ))}
        </>
      );

    case "stats":
      return (
        <div className="cs-designer__stats">
          {block.items.map((item) => (
            <div
              key={item.label}
              className={`cs-designer__stat cs-designer__stat--${item.variant}`}
            >
              <div className="cs-designer__stat-val">{item.value}</div>
              <div className="cs-designer__stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      );

    case "pullquote":
      return (
        <blockquote className="cs-designer__pull-quote">
          <span className="cs-designer__pull-quote-mark" aria-hidden>
            &ldquo;
          </span>
          <p className="cs-designer__pull-quote-text">{block.text}</p>
          <cite className="cs-designer__pull-quote-source not-italic">
            {block.source}
          </cite>
        </blockquote>
      );

    case "findings":
      return (
        <div className="cs-designer__findings">
          {block.items.map((item) => (
            <div key={item.num} className="cs-designer__finding" data-num={item.num}>
              <div className="cs-designer__finding-label">{item.label}</div>
              <div className="cs-designer__finding-title">{item.title}</div>
              <div className="cs-designer__finding-body">{item.body}</div>
            </div>
          ))}
        </div>
      );

    case "annotation":
      return (
        <div className="cs-designer__annotation">
          <span className="cs-designer__annotation-icon">↳ note</span>
          <span className="cs-designer__annotation-text">{block.text}</span>
        </div>
      );

    case "twoCol":
      return (
        <div className="cs-designer__two-col">
          {block.items.map((item) => (
            <div key={item.label}>
              <div className="cs-designer__two-col-label">{item.label}</div>
              <div className="cs-designer__two-col-body">{item.body}</div>
            </div>
          ))}
        </div>
      );

    case "artifact":
      return (
        <figure className="cs-designer__artifact">
          <div className="cs-designer__artifact-label">{block.label}</div>
          {block.variant === "audit-map" ? <AuditMapArtifact /> : <TokenHierarchyArtifact />}
          <figcaption className="cs-designer__artifact-caption">
            <span>{block.caption}</span>
            {block.captionMeta && <span>{block.captionMeta}</span>}
          </figcaption>
        </figure>
      );

    case "process":
      return (
        <div className="cs-designer__process">
          {block.items.map((item) => (
            <div key={item.num} className="cs-designer__process-col">
              <div className="cs-designer__process-num">{item.num}</div>
              <div className="cs-designer__process-accent" aria-hidden />
              <div className="cs-designer__process-title">{item.title}</div>
              <div className="cs-designer__process-body">{item.body}</div>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <aside className="cs-designer__callout">
          <div className="cs-designer__callout-inner">
            <div className="cs-designer__callout-label">{block.label}</div>
            <div className="cs-designer__callout-title">{block.title}</div>
            <div className="cs-designer__callout-body">{block.body}</div>
          </div>
        </aside>
      );

    case "ornament":
      return (
        <div className="cs-designer__ornament" aria-hidden>
          <div className="cs-designer__ornament-line" />
          <OrnamentSvg />
          <div className="cs-designer__ornament-line" />
        </div>
      );

    case "outcomes":
      return (
        <div className="cs-designer__outcomes">
          {block.items.map((item) => (
            <div key={item.label} className="cs-designer__outcome">
              <div className="cs-designer__outcome-val">{item.value}</div>
              <div className="cs-designer__outcome-label">{item.label}</div>
              <div className="cs-designer__outcome-body">{item.body}</div>
            </div>
          ))}
        </div>
      );

    case "reflections":
      return (
        <ol className="cs-designer__reflections">
          {block.items.map((text, i) => (
            <li key={text.slice(0, 24)}>
              <span className="cs-designer__reflection-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      );

    default:
      return null;
  }
}
