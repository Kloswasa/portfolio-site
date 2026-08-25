export interface PageEndAction {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

export interface PageEndCopy {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  actions: PageEndAction[];
}
