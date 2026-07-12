import { getVisibleProjects, WORK_TABS } from "@/src/lib/projects";
import type { Project } from "@/src/lib/projects";
import type { WorkCardProject, WorkCardSvgVariant } from "@/src/lib/work/types";

const CLASSIFICATION = Object.fromEntries(
  WORK_TABS.map((tab) => [tab.key, tab.classification]),
) as Record<string, string>;

const THEMES = [
  "linear-gradient(145deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
  "linear-gradient(145deg, var(--color-tertiary) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-accent-dark) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-secondary) 0%, var(--color-elevated) 100%)",
  "linear-gradient(145deg, var(--color-primary-muted) 0%, var(--color-tertiary) 100%)",
];

export function toWorkCardProject(project: Project, index: number): WorkCardProject {
  const svgVariant = ((index % 5) + 1) as WorkCardSvgVariant;

  return {
    id: project.slug,
    title: project.title,
    href: `/work/${project.slug}`,
    tags: project.technologies.slice(0, 3),
    classification: CLASSIFICATION[project.workTab] ?? "Design",
    yearLabel: project.yearLabel,
    frame: String(index + 1).padStart(2, "0"),
    svgVariant,
    theme: THEMES[index % THEMES.length],
    coverImage: project.coverImage,
    confidential: project.confidential,
    lockStatus: project.lockStatus,
  };
}

export function getFeaturedWorkCards(count = 3): WorkCardProject[] {
  return getVisibleProjects().slice(0, count).map(toWorkCardProject);
}
