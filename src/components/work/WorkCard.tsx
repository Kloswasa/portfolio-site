"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { SpecimenCard } from "@/src/components/ui/SpecimenCard";
import { WorkCardSvg } from "@/src/components/work/WorkCardSvg";
import { useTilt } from "@/src/hooks/useTilt";
import { getProjectLockCopy } from "@/src/lib/confidential/lock-status";
import type { WorkCardProject } from "@/src/lib/work/types";

interface WorkCardProps {
  project: WorkCardProject;
  /** Featured mosaic uses the same polaroid ratio as the archive. */
  layout?: "default" | "featured";
}

export function WorkCard({ project, layout = "default" }: WorkCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useTilt<HTMLAnchorElement>(!reduceMotion);
  const [yearValue, yearLabel = ""] = project.yearLabel.split(" · ");
  const cardClassName =
    layout === "featured"
      ? "specimen-card specimen-card--link specimen-card--polaroid specimen-card--featured"
      : "specimen-card specimen-card--link specimen-card--polaroid";

  return (
    <Link
      href={project.href}
      className={cardClassName}
      ref={cardRef}
      data-tilt={reduceMotion ? undefined : ""}
    >
      <SpecimenCard
        media={
          project.coverImage ? (
            <img
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              className="specimen-card__cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <WorkCardSvg variant={project.svgVariant} />
          )
        }
        mediaProps={{
          "data-photo": "",
          "data-has-cover": project.coverImage ? "" : undefined,
          style: project.coverImage ? undefined : { background: project.theme },
        }}
        frame={project.frame}
        stampValue={yearValue}
        stampLabel={yearLabel}
        classification={project.classification}
        title={project.title}
        tags={project.tags}
        description={project.description}
        locked={project.confidential}
        lockLabel={
          project.confidential
            ? getProjectLockCopy(project.lockStatus).stamp
            : undefined
        }
        variant="polaroid"
      />
    </Link>
  );
}
