export type HeroPlantId =
  | "wax-flower"
  | "branch"
  | "fern"
  | "magnolia"
  | "dandelion"
  | "clover"
  | "lotus"
  | "chrysanthemum"
  | "forget-me-not";

export const HERO_PLANT_IDS: HeroPlantId[] = [
  "wax-flower",
  "branch",
  "fern",
  "magnolia",
  "dandelion",
  "clover",
  "lotus",
  "chrysanthemum",
  "forget-me-not",
];

export const DEFAULT_HERO_PLANT_ID: HeroPlantId = "wax-flower";

export const HERO_PLANT_STAMPS: Record<
  HeroPlantId,
  readonly [string, string, string]
> = {
  "wax-flower": [
    "Chamelaucium uncinatum",
    "Specimen No. 042",
    "Digital · 2026",
  ],
  branch: ["Corylus avellana", "Specimen No. 017", "Digital · 2026"],
  fern: ["Pteridium aquilinum", "Specimen No. 001", "Digital · 2026"],
  magnolia: ["Magnolia grandiflora", "Specimen No. 005", "Digital · 2026"],
  dandelion: ["Taraxacum officinale", "Specimen No. 018", "Digital · 2026"],
  clover: ["Trifolium repens", "Specimen No. 044", "Digital · 2026"],
  lotus: ["Nelumbo nucifera", "Specimen No. 007", "Digital · 2026"],
  chrysanthemum: [
    "Chrysanthemum morifolium",
    "Specimen No. 023",
    "Digital · 2026",
  ],
  "forget-me-not": [
    "Myosotis sylvatica",
    "Specimen No. 031",
    "Think of me · 2026",
  ],
};
