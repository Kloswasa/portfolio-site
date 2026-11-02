"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import { WorkHeroBotanical } from "@/src/components/work/WorkHeroBotanical";
import { useHeroPlantInk } from "@/src/hooks/useHeroPlantInk";
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
    id: "wax-flower",
    play: true,
    stampLines: HERO_PLANT_STAMPS["wax-flower"],
    render: () => <PlayIllustration name="wax-flower" />,
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
  {
    id: "lotus",
    play: true,
    stampLines: HERO_PLANT_STAMPS.lotus,
    render: () => <PlayIllustration name="lotus" />,
  },
  {
    id: "chrysanthemum",
    play: true,
    stampLines: HERO_PLANT_STAMPS.chrysanthemum,
    render: () => <PlayIllustration name="chrysanthemum" />,
  },
  {
    id: "forget-me-not",
    play: true,
    stampLines: HERO_PLANT_STAMPS["forget-me-not"],
    render: () => <PlayIllustration name="forget-me-not" />,
  },
  {
    id: "rose",
    play: true,
    stampLines: HERO_PLANT_STAMPS.rose,
    render: () => <PlayIllustration name="rose" />,
  },
  {
    id: "peony",
    play: true,
    stampLines: HERO_PLANT_STAMPS.peony,
    render: () => <PlayIllustration name="peony" />,
  },
  {
    id: "lily",
    play: true,
    stampLines: HERO_PLANT_STAMPS.lily,
    render: () => <PlayIllustration name="lily" />,
  },
  {
    id: "hydrangea",
    play: true,
    stampLines: HERO_PLANT_STAMPS.hydrangea,
    render: () => <PlayIllustration name="hydrangea" />,
  },
  {
    id: "sunflower",
    play: true,
    stampLines: HERO_PLANT_STAMPS.sunflower,
    render: () => <PlayIllustration name="sunflower" />,
  },
];

const DEFAULT_PLANT =
  HERO_PLANTS.find((plant) => plant.id === DEFAULT_HERO_PLANT_ID) ?? HERO_PLANTS[0]!;

function pickHeroPlant(excludeId?: HeroPlantId): HeroPlant {
  const pool = excludeId
    ? HERO_PLANT_IDS.filter((id) => id !== excludeId)
    : HERO_PLANT_IDS;
  const id = pool[Math.floor(Math.random() * pool.length)]!;
  return HERO_PLANTS.find((plant) => plant.id === id) ?? DEFAULT_PLANT;
}

export function HeroHomePlant() {
  const pathname = usePathname();
  const [plant, setPlant] = useState<HeroPlant | null>(null);
  const reduceMotion = useReducedMotion();
  const allowMotion = !reduceMotion;
  const tiltRef = useHeroPlantTilt(allowMotion);
  const inkComplete = useHeroPlantInk(
    tiltRef,
    plant?.id ?? null,
    allowMotion,
  );

  useEffect(() => {
    setPlant(pickHeroPlant());
  }, [pathname]);

  if (!plant) return null;

  const showAnotherPlant = () => {
    setPlant((current) => pickHeroPlant(current?.id));
  };

  return (
    <>
      <div
        ref={tiltRef}
        className="hero-botanical"
        data-tilt={allowMotion ? "" : undefined}
        data-plant={plant.id}
        data-play-plant={plant.play ? "" : undefined}
        role="button"
        tabIndex={0}
        aria-label="Change botanical"
        onClick={showAnotherPlant}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          showAnotherPlant();
        }}
      >
        {plant.render()}
      </div>

      <div className="hero-plant-hint font-mono text-xs tracking-stamp">
        Click to change plant
      </div>

      <motion.div
        key={plant.id}
        className="hero-stamp font-mono text-xs leading-relaxed tracking-stamp"
        initial={allowMotion ? { opacity: 0 } : false}
        animate={{ opacity: inkComplete ? 1 : 0 }}
        transition={{ duration: allowMotion ? 0.35 : 0, ease: "easeOut" }}
      >
        {plant.stampLines.map((line) => (
          <span key={`${plant.id}-${line}`} className="block">
            {line}
          </span>
        ))}
      </motion.div>
    </>
  );
}
