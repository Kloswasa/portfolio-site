export interface PageEndAction {
  label: string;
  href: string;
  variant: "primary" | "outline" | "accent";
  /** Suggested filename. Renders a file download instead of a client navigation. */
  download?: string;
}

export interface PageEndCopy {
  titleLead: string;
  titleAccent: string;
  actions: PageEndAction[];
}
