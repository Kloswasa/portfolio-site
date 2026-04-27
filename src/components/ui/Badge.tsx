export type BadgeTone = "primary" | "secondary" | "tertiary";

const toneClass: Record<BadgeTone, string> = {
  primary: "badge-primary",
  secondary: "badge-secondary",
  tertiary: "badge-tertiary",
};

export function Badge({
  children,
  tone,
  className,
}: {
  children: React.ReactNode;
  tone: BadgeTone;
  className?: string;
}) {
  return <span className={["badge", toneClass[tone], className].filter(Boolean).join(" ")}>{children}</span>;
}

