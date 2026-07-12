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
  /** Fills a tall grid cell (e.g. featured mosaic). Default keeps 4:5 ratio for galleries. */
  layout?: "default" | "featured";
}

export function WorkCard({ project, layout = "default" }: WorkCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useTilt<HTMLAnchorElement>(!reduceMotion);
  const [yearValue, yearLabel = ""] = project.yearLabel.split(" · ");
  const cardClassName =
    layout === "featured"
      ? "specimen-card specimen-card--link specimen-card--featured"
      : "specimen-card specimen-card--link specimen-card--landscape";

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
        locked={project.confidential}
        lockLabel={
          project.confidential
            ? getProjectLockCopy(project.lockStatus).stamp
            : undefined
        }
      />
    </Link>
  );
}
