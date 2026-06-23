export type WorkCardSvgVariant = 1 | 2 | 3 | 4 | 5;

export interface WorkCardProject {
  id: string;
  title: string;
  href: string;
  tags: string[];
  classification: string;
  yearLabel: string;
  frame: string;
  svgVariant: WorkCardSvgVariant;
  theme: string;
  coverImage?: { src: string; alt: string };
}

export type WorkFilterKey =
  | "all"
  | "product"
  | "industrial"
  | "pack"
  | "graphic"
  | "major";

export interface WorkArchiveProject extends WorkCardProject {
  filters: Exclude<WorkFilterKey, "all">[];
}

export interface WorkFilterOption {
  key: WorkFilterKey;
  label: string;
}

export interface WorkHeroStat {
  label: string;
  value: string;
}

export interface WorkHeroMeta {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stats: WorkHeroStat[];
}

export type { PageEndCopy as WorkEndCopy } from "@/src/lib/page-end/types";
