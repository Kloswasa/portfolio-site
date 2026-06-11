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
}
