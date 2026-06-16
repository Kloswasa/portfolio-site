import type { ReactNode } from "react";
import type { WorkCardSvgVariant } from "@/src/lib/work/types";

interface WorkCardSvgProps {
  variant: WorkCardSvgVariant;
}

const patterns: Record<WorkCardSvgVariant, ReactNode> = {
  1: (
    <>
      <circle cx="120" cy="90" r="48" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="120" cy="90" r="72" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M40 180 Q120 120 200 180" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </>
  ),
  2: (
    <>
      <rect x="48" y="48" width="144" height="96" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="48" y1="96" x2="192" y2="96" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <line x1="120" y1="48" x2="120" y2="144" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
    </>
  ),
  3: (
    <>
      <path d="M60 160 C90 60, 150 60, 180 160" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M80 150 C105 80, 135 80, 160 150" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
    </>
  ),
  4: (
    <>
      <polygon points="120,40 180,180 60,180" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <circle cx="120" cy="120" r="18" fill="currentColor" opacity="0.08" />
    </>
  ),
  5: (
    <>
      <path d="M30 120 H210 M30 80 H210 M30 160 H210" stroke="currentColor" strokeWidth="0.8" opacity="0.18" />
      <ellipse cx="120" cy="120" rx="56" ry="36" fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.32" />
    </>
  ),
};

export function WorkCardSvg({ variant }: WorkCardSvgProps) {
  return (
    <svg
      aria-hidden="true"
      className="work-card__svg"
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {patterns[variant]}
    </svg>
  );
}
