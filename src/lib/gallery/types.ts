import type { WorkCardProject } from "@/src/lib/work/types";

export type GalleryFilterKey = "all" | "product" | "pack" | "graphic" | "major";

export interface GalleryProject extends WorkCardProject {
  filters: Exclude<GalleryFilterKey, "all">[];
}

export interface GalleryFilterOption {
  key: GalleryFilterKey;
  label: string;
}

export interface GalleryHeroStat {
  label: string;
  value: string;
}

export interface GalleryHeroMeta {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stats: GalleryHeroStat[];
}
