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
    "Geraldton Wax",
    "Specimen No. 042",
    "Chamelaucium uncinatum",
  ],
  branch: ["Common Hazel", "Specimen No. 017", "Corylus avellana"],
  fern: ["Bracken Fern", "Specimen No. 001", "Pteridium aquilinum"],
  magnolia: ["Southern Magnolia", "Specimen No. 005", "Magnolia grandiflora"],
  dandelion: ["Common Dandelion", "Specimen No. 018", "Taraxacum officinale"],
  clover: ["White Clover", "Specimen No. 044", "Trifolium repens"],
  lotus: ["Sacred Lotus", "Specimen No. 007", "Nelumbo nucifera"],
  chrysanthemum: [
    "Garden Chrysanthemum",
    "Specimen No. 023",
    "Chrysanthemum morifolium",
  ],
  "forget-me-not": [
    "Forget-me-not",
    "Specimen No. 031",
    "Myosotis sylvatica",
  ],
};
