"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { WorkCardSvg } from "@/src/components/WorkCardSvg";
import { useTilt } from "@/src/hooks/useTilt";
import type { WorkCardProject } from "@/src/lib/work/types";

interface WorkCardProps {
  project: WorkCardProject;
  /** Fills a tall grid cell (e.g. featured mosaic). Default keeps 4:5 ratio for galleries. */
  layout?: "default" | "featured";
}

export function WorkCard({ project, layout = "default" }: WorkCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useTilt<HTMLAnchorElement>(!reduceMotion);
  const [yearValue, yearLabel] = project.yearLabel.split(" · ");

  return (
    <Link
      href={project.href}
      className={layout === "featured" ? "work-card work-card--featured" : "work-card"}
      ref={cardRef}
      data-tilt={reduceMotion ? undefined : ""}
    >
      <div className="work-card__photo" data-photo style={{ background: project.theme }}>
        <WorkCardSvg variant={project.svgVariant} />
      </div>

      <div className="work-card__dots" aria-hidden="true" />
      <div className="work-card__gradient" aria-hidden="true" />
      <div className="work-card__mat" aria-hidden="true" />

      <div className="work-card__frame" aria-hidden="true">
        {project.frame}
      </div>

      <div className="work-card__year-stamp" aria-hidden="true">
        <div className="work-card__year-val">{yearValue}</div>
        <div className="work-card__year-lbl">{yearLabel ?? ""}</div>
      </div>

      <div className="work-card__arrow" aria-hidden="true">
        ↗
      </div>

      <div className="work-card__info">
        <div className="work-card__classification">
          <div className="work-card__class-line" aria-hidden="true" />
          {project.classification}
        </div>
        <h3 className="work-card__title">{project.title}</h3>
        <div className="work-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="work-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
