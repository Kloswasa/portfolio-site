export type HeroPlantId =
  | "wax-flower"
  | "branch"
  | "fern"
  | "magnolia"
  | "dandelion"
  | "clover"
  | "lotus"
  | "chrysanthemum"
  | "forget-me-not"
  | "rose"
  | "peony"
  | "lily"
  | "hydrangea"
  | "sunflower";

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
  "rose",
  "peony",
  "lily",
  "hydrangea",
  "sunflower",
];

export const DEFAULT_HERO_PLANT_ID: HeroPlantId = "wax-flower";

export function pickRandomHeroPlantId(): HeroPlantId {
  return HERO_PLANT_IDS[Math.floor(Math.random() * HERO_PLANT_IDS.length)]!;
}

export const HERO_PLANT_STAMPS: Record<
  HeroPlantId,
  readonly [string, string]
> = {
  "wax-flower": ["Geraldton Wax", "Lasting love"],
  branch: ["Common Hazel", "Quiet wisdom"],
  fern: ["Bracken Fern", "Sincere fascination"],
  magnolia: ["Southern Magnolia", "Enduring dignity"],
  dandelion: ["Common Dandelion", "Wishful resilience"],
  clover: ["White Clover", "Good fortune"],
  lotus: ["Sacred Lotus", "Rising purity"],
  chrysanthemum: ["Garden Chrysanthemum", "Loyal joy"],
  "forget-me-not": ["Forget-me-not", "True remembrance"],
  rose: ["Garden Rose", "Devoted love"],
  peony: ["Chinese Peony", "Honored prosperity"],
  lily: ["Madonna Lily", "Renewed purity"],
  hydrangea: ["Bigleaf Hydrangea", "Grateful understanding"],
  sunflower: ["Common Sunflower", "Warm devotion"],
};
