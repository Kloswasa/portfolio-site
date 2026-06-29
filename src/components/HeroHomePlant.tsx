"use client";

import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { HeroBotanical } from "@/src/components/HeroBotanical";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import { WorkHeroBotanical } from "@/src/components/work/WorkHeroBotanical";
import { useHeroPlantTilt } from "@/src/hooks/useHeroPlantTilt";
import {
  DEFAULT_HERO_PLANT_ID,
  HERO_PLANT_IDS,
  HERO_PLANT_STAMPS,
  type HeroPlantId,
} from "@/src/lib/hero-plants";

type HeroPlant = {
  id: HeroPlantId;
  play?: boolean;
  stampLines: readonly [string, string, string];
  render: () => ReactNode;
};

const HERO_PLANTS: HeroPlant[] = [
  {
    id: "stem-bloom",
    stampLines: HERO_PLANT_STAMPS["stem-bloom"],
    render: () => <HeroBotanical />,
  },
  {
    id: "branch",
    stampLines: HERO_PLANT_STAMPS.branch,
    render: () => <WorkHeroBotanical />,
  },
  {
    id: "fern",
    play: true,
    stampLines: HERO_PLANT_STAMPS.fern,
    render: () => <PlayIllustration name="fern" />,
  },
  {
    id: "magnolia",
    play: true,
    stampLines: HERO_PLANT_STAMPS.magnolia,
    render: () => <PlayIllustration name="magnolia" />,
  },
  {
    id: "dandelion",
    play: true,
    stampLines: HERO_PLANT_STAMPS.dandelion,
    render: () => <PlayIllustration name="dandelion" />,
  },
  {
    id: "clover",
    play: true,
    stampLines: HERO_PLANT_STAMPS.clover,
    render: () => <PlayIllustration name="clover" />,
  },
];

const DEFAULT_PLANT =
  HERO_PLANTS.find((plant) => plant.id === DEFAULT_HERO_PLANT_ID) ?? HERO_PLANTS[0]!;

function pickHeroPlant(): HeroPlant {
  const id = HERO_PLANT_IDS[Math.floor(Math.random() * HERO_PLANT_IDS.length)]!;
  return HERO_PLANTS.find((plant) => plant.id === id) ?? DEFAULT_PLANT;
}

export function HeroHomePlant() {
  const pathname = usePathname();
  const [plant, setPlant] = useState(DEFAULT_PLANT);
  const reduceMotion = useReducedMotion();
  const tiltRef = useHeroPlantTilt(!reduceMotion);

  useEffect(() => {
    setPlant(pickHeroPlant());
  }, [pathname]);

  return (
    <>
      <div
        ref={tiltRef}
        className="hero-botanical"
        data-tilt={reduceMotion ? undefined : ""}
        data-plant={plant.id}
        data-play-plant={plant.play ? "" : undefined}
        aria-hidden="true"
      >
        {plant.render()}
      </div>

      <div className="hero-stamp font-mono text-xs leading-loose tracking-[0.14em]">
        {plant.stampLines.map((line) => (
          <span key={`${plant.id}-${line}`} className="block">
            {line}
          </span>
        ))}
      </div>
    </>
  );
}
