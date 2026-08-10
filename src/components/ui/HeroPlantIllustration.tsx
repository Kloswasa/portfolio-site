"use client";

import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import { WorkHeroBotanical } from "@/src/components/work/WorkHeroBotanical";
import type { HeroPlantId } from "@/src/lib/hero-plants";

export function HeroPlantIllustration({
  id,
  className,
}: {
  id: HeroPlantId;
  className?: string;
}) {
  if (id === "branch") {
    return (
      <div className={className}>
        <WorkHeroBotanical />
      </div>
    );
  }

  return (
    <PlayIllustration
      name={id}
      className={["h-full w-full [&_text]:hidden", className].filter(Boolean).join(" ")}
    />
  );
}
