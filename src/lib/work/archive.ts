import { projects, WORK_TABS } from "@/src/lib/projects";
import { toWorkCardProject } from "@/src/lib/work/data";
import type { PageEndCopy } from "@/src/lib/page-end/types";
import type {
  WorkArchiveProject,
  WorkFilterOption,
  WorkHeroMeta,
} from "@/src/lib/work/types";

function buildFilters(
  workTab: string,
  caseStudyKind: string,
): WorkArchiveProject["filters"] {
  const filters: WorkArchiveProject["filters"] = [
    workTab as WorkArchiveProject["filters"][number],
  ];
  if (caseStudyKind === "major") filters.push("major");
  return filters;
}

function toWorkArchiveProject(
  project: (typeof projects)[number],
  index: number,
): WorkArchiveProject {
  return {
    ...toWorkCardProject(project, index),
    filters: buildFilters(project.workTab, project.caseStudyKind),
  };
}

export const WORK_ARCHIVE_PROJECTS: WorkArchiveProject[] =
  projects.map(toWorkArchiveProject);

export const WORK_FILTER_OPTIONS: WorkFilterOption[] = [
  { key: "all", label: "All" },
  ...WORK_TABS.map(({ key, filterLabel }) => ({ key, label: filterLabel })),
  { key: "major", label: "Cases" },
];

const archiveYears = projects.map((project) => {
  const match = project.yearLabel.match(/^(\d{4})/);
  return match ? Number(match[1]) : 2024;
});
const minYear = Math.min(...archiveYears);
const maxYear = Math.max(...archiveYears);
const disciplineCount = new Set(projects.map((project) => project.workTab)).size;
const industryCount = new Set(projects.flatMap((project) => project.technologies))
  .size;

export const WORK_HERO_META: WorkHeroMeta = {
  eyebrow: `THE WORK ARCHIVE · ${minYear} — ${maxYear}`,
  titleLine1: String(WORK_ARCHIVE_PROJECTS.length),
  titleLine2: "specimens",
  description:
    "Each project is logged like a specimen. Studied, deliberate, committed to the page. Hover to develop the image.\nClick to read the full record.",
  stats: [
    { label: "Disciplines", value: String(disciplineCount) },
    { label: "Industries", value: String(industryCount) },
    { label: "Years active", value: String(maxYear - minYear + 1) },
    { label: "Collaborators", value: "10+" },
  ],
};

export const WORK_END_COPY: PageEndCopy = {
  kicker: "The end of the record",
  titleLead: "If you like something more amuse,",
  titleAccent: "Let's see my playground",
  actions: [{ label: "Browse play →", href: "/play", variant: "primary" }],
};
