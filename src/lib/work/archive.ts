import { getVisibleProjects, WORK_TABS } from "@/src/lib/projects";
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
  project: ReturnType<typeof getVisibleProjects>[number],
  index: number,
): WorkArchiveProject {
  return {
    ...toWorkCardProject(project, index),
    filters: buildFilters(project.workTab, project.caseStudyKind),
  };
}

const visibleProjects = getVisibleProjects();

export const WORK_ARCHIVE_PROJECTS: WorkArchiveProject[] =
  visibleProjects.map(toWorkArchiveProject);

export const WORK_FILTER_OPTIONS: WorkFilterOption[] = [
  { key: "all", label: "All" },
  ...WORK_TABS.map(({ key, filterLabel }) => ({ key, label: filterLabel })),
  { key: "major", label: "Cases" },
];

const archiveYears = visibleProjects.map((project) => {
  const match = project.yearLabel.match(/^(\d{4})/);
  return match ? Number(match[1]) : 2024;
});
const minYear = Math.min(...archiveYears);
const maxYear = Math.max(...archiveYears);
const disciplineCount = new Set(visibleProjects.map((project) => project.workTab)).size;
const industryCount = new Set(visibleProjects.map((project) => project.industry)).size;

export const WORK_HERO_META: WorkHeroMeta = {
  eyebrow: `THE WORK ARCHIVE · ${minYear} — ${maxYear}`,
  titleLine1: String(WORK_ARCHIVE_PROJECTS.length),
  titleLine2: "specimens",
  description:
    "Each project is logged like a specimen. \nStudied, deliberate, committed to the page. \nHover to develop the image. Click to read the full record.",
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
