export type HeroPlantId =
  | "stem-bloom"
  | "branch"
  | "fern"
  | "magnolia"
  | "dandelion"
  | "clover";

export const HERO_PLANT_IDS: HeroPlantId[] = [
  "stem-bloom",
  "branch",
  "fern",
  "magnolia",
  "dandelion",
  "clover",
];

export const DEFAULT_HERO_PLANT_ID: HeroPlantId = "stem-bloom";

export const HERO_PLANT_STAMPS: Record<
  HeroPlantId,
  readonly [string, string, string]
> = {
  "stem-bloom": [
    "Chamelaucium uncinatum",
    "Specimen No. 042",
    "Digital · 2026",
  ],
  branch: ["Corylus avellana", "Specimen No. 017", "Digital · 2026"],
  fern: ["Pteridium aquilinum", "Specimen No. 001", "Digital · 2026"],
  magnolia: ["Magnolia grandiflora", "Specimen No. 005", "Digital · 2026"],
  dandelion: ["Taraxacum officinale", "Specimen No. 018", "Digital · 2026"],
  clover: ["Trifolium repens", "Specimen No. 044", "Digital · 2026"],
};
