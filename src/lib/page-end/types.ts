export interface PageEndAction {
  label: string;
  href: string;
  variant: "primary" | "outline" | "accent";
}

export interface PageEndCopy {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  actions: PageEndAction[];
}
