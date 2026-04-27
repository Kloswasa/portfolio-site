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
}

export default function ProjectCard({
  title,
  description,
  technologies,
  tone = "primary",
  liveUrl,
  sourceUrl,
  href,
}: ProjectCardProps) {
  return (
    <div className="card group relative flex flex-col gap-1 overflow-hidden p-2">
      {href && (
        <Link
          href={href}
          aria-label={`Open case study: ${title}`}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="relative z-10 h-[200px] w-full bg-elevated" aria-hidden />
      <div className="relative z-10 px-1 pb-1 pt-2">
        <h3 className="mb-1 text-heading-xl text-text transition-colors group-hover:text-primary">
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
              className="relative z-20 text-sm font-medium text-primary hover:underline"
            >
              View Live
            </Link>
          )}
          {sourceUrl && (
            <Link
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 text-sm font-medium text-text-muted hover:underline"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
