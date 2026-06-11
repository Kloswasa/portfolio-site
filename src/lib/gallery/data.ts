import { projects } from "@/src/lib/projects";
import { siteConfig } from "@/src/lib/config";
import { toWorkCardProject } from "@/src/lib/work/data";
import type {
  GalleryFilterOption,
  GalleryHeroMeta,
  GalleryProject,
} from "@/src/lib/gallery/types";

function buildFilters(
  workTab: string,
  caseStudyKind: string,
): GalleryProject["filters"] {
  const filters: GalleryProject["filters"] = [
    workTab as GalleryProject["filters"][number],
  ];
  if (caseStudyKind === "major") filters.push("major");
  return filters;
}

function toGalleryProject(
  project: (typeof projects)[number],
  index: number,
): GalleryProject {
  return {
    ...toWorkCardProject(project, index),
    filters: buildFilters(project.workTab, project.caseStudyKind),
  };
}

export const GALLERY_PROJECTS: GalleryProject[] = projects.map(toGalleryProject);

export const GALLERY_FILTER_OPTIONS: GalleryFilterOption[] = [
  { key: "all", label: "All" },
  { key: "product", label: "Product" },
  { key: "pack", label: "Pack" },
  { key: "graphic", label: "Graphic" },
  { key: "major", label: "Cases" },
];

const archiveYears = projects.map((project) => {
  const match = toWorkCardProject(project, 0).yearLabel.match(/^(\d{4})/);
  return match ? Number(match[1]) : 2024;
});
const minYear = Math.min(...archiveYears);
const maxYear = Math.max(...archiveYears);
const disciplineCount = new Set(projects.map((project) => project.workTab)).size;
const industryCount = new Set(projects.flatMap((project) => project.technologies))
  .size;

export const GALLERY_HERO_META: GalleryHeroMeta = {
  eyebrow: `THE WORK ARCHIVE · ${minYear} — ${maxYear}`,
  titleLine1: String(GALLERY_PROJECTS.length),
  titleLine2: "specimens",
  description:
    "Each project is a pressed thing — studied, deliberate, committed to paper. Hover to develop the image. Click to read the full record.",
  stats: [
    { label: "Disciplines", value: String(disciplineCount) },
    { label: "Industries", value: String(industryCount) },
    { label: "Years active", value: String(maxYear - minYear + 1) },
    { label: "Collaborators", value: "12+" },
  ],
};

export const GALLERY_FOOTER_COPY = {
  name: siteConfig.name,
  note: "Melbourne · Independent product design",
};
