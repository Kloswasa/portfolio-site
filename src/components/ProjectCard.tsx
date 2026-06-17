import Link from "next/link";
import { Badge, type BadgeTone } from "@/src/components/ui/Badge";

const toneOffset: Record<BadgeTone, number> = {
  primary: 0,
  secondary: 1,
  tertiary: 2,
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  tone?: BadgeTone;
  liveUrl?: string;
  sourceUrl?: string;
  href?: string;
  coverImage?: { src: string; alt: string };
  /** Wrap the card with `group/play` when a sibling covers it (e.g. lightbox trigger). */
  overlayInteraction?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  tone = "primary",
  liveUrl,
  sourceUrl,
  href,
  coverImage,
  overlayInteraction = false,
}: ProjectCardProps) {
  const rootClassName = overlayInteraction
    ? [
        "relative flex flex-col gap-1 overflow-hidden p-2",
        "bg-surface border border-border rounded-none shadow",
        "transition-[box-shadow,border-color] [transition-duration:var(--duration)] [transition-timing-function:var(--ease)]",
        "group-hover/play:shadow-md group-hover/play:border-border-strong",
      ].join(" ")
    : "card group/card relative flex flex-col gap-1 overflow-hidden p-2";

  const titleHoverClass = overlayInteraction
    ? "group-hover/play:text-primary"
    : "group-hover/card:text-primary";

  return (
    <div className={rootClassName}>
      {href && (
        <Link
          href={href}
          aria-label={`Open case study: ${title}`}
          className="absolute inset-0 z-10"
        />
      )}

      <div
        className={`relative z-20 h-[200px] w-full overflow-hidden bg-elevated ${href ? "pointer-events-none" : ""}`}
        {...(coverImage ? {} : { "aria-hidden": true })}
      >
        {coverImage ? (
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <div className={`relative z-20 px-1 pb-1 pt-2 ${href ? "pointer-events-none" : ""}`}>
        <h3 className={`mb-1 text-heading-xl text-text transition-colors ${titleHoverClass}`}>
          {title}
        </h3>
        <p className="clamp-2 h-10 text-sm font-medium leading-5 text-text-muted">
          {description}
        </p>

        <div className="mt-1 flex flex-wrap gap-1">
          {technologies.map((tech, index) => {
            const palette = ["primary", "secondary", "tertiary"] as const;
            const offset = toneOffset[tone];
            const t: BadgeTone = palette[(index + offset) % palette.length]!;
            return (
              <Badge key={tech} tone={t}>
                {tech}
              </Badge>
            );
          })}
        </div>

        <div className="mt-2 flex gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-20 text-sm font-medium text-primary hover:underline"
            >
              View Live
            </Link>
          )}
          {sourceUrl && (
            <Link
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-20 text-sm font-medium text-text-muted hover:underline"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
