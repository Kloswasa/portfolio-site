import { projects } from "@/src/lib/projects";
import type { Project } from "@/src/lib/projects";
import type { WorkCardProject, WorkCardSvgVariant } from "@/src/lib/work/types";

const CLASSIFICATION: Record<string, string> = {
  product: "Product Design",
  industrial: "Industrial Design",
  pack: "Packaging Design",
  graphic: "Graphic Design",
};

const THEMES = [
  "linear-gradient(145deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
  "linear-gradient(145deg, var(--color-tertiary) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-accent-dark) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-secondary) 0%, var(--color-elevated) 100%)",
  "linear-gradient(145deg, var(--color-primary-muted) 0%, var(--color-tertiary) 100%)",
];

const DEFAULT_YEAR_LABEL = "2024 · Studio";

export function toWorkCardProject(project: Project, index: number): WorkCardProject {
  const svgVariant = ((index % 5) + 1) as WorkCardSvgVariant;

  return {
    id: project.slug,
    title: project.title,
    href: `/work/${project.slug}`,
    tags: project.technologies.slice(0, 3),
    classification: CLASSIFICATION[project.workTab] ?? "Design",
    yearLabel: project.yearLabel ?? DEFAULT_YEAR_LABEL,
    frame: String(index + 1).padStart(2, "0"),
    svgVariant,
    theme: THEMES[index % THEMES.length],
  };
}

export function getFeaturedWorkCards(count = 3): WorkCardProject[] {
  return projects.slice(0, count).map(toWorkCardProject);
}

export function getAllWorkCards(): WorkCardProject[] {
  return projects.map(toWorkCardProject);
}
