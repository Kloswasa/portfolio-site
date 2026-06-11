import { projects } from "@/src/lib/projects";
import type { Project } from "@/src/lib/projects";
import type { WorkCardProject, WorkCardSvgVariant } from "@/src/lib/work/types";

const CLASSIFICATION: Record<string, string> = {
  product: "Product Design",
  pack: "Packaging",
  graphic: "Graphic Design",
};

const THEMES = [
  "linear-gradient(145deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
  "linear-gradient(145deg, var(--color-tertiary) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-accent-dark) 0%, var(--color-primary) 100%)",
  "linear-gradient(145deg, var(--color-secondary) 0%, var(--color-elevated) 100%)",
  "linear-gradient(145deg, var(--color-primary-muted) 0%, var(--color-tertiary) 100%)",
];

const YEAR_META: Record<string, { yearLabel: string }> = {
  "quiz-game": { yearLabel: "2025 · Product" },
  "dementia-app": { yearLabel: "2024 · Research" },
  recipe: { yearLabel: "2024 · Product" },
  "tea-gift-box": { yearLabel: "2023 · Packaging" },
  "spice-tin": { yearLabel: "2023 · Packaging" },
  "festival-poster": { yearLabel: "2022 · Print" },
  "editorial-zine": { yearLabel: "2022 · Editorial" },
};

export function toWorkCardProject(project: Project, index: number): WorkCardProject {
  const meta = YEAR_META[project.slug] ?? { yearLabel: "2024 · Studio" };
  const svgVariant = ((index % 5) + 1) as WorkCardSvgVariant;

  return {
    id: project.slug,
    title: project.title,
    href: `/work/${project.slug}`,
    tags: project.technologies.slice(0, 3),
    classification: CLASSIFICATION[project.workTab] ?? "Design",
    yearLabel: meta.yearLabel,
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
