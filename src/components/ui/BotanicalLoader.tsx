"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroPlantIllustration } from "@/src/components/ui/HeroPlantIllustration";
import {
  DEFAULT_HERO_PLANT_ID,
  pickRandomHeroPlantId,
  type HeroPlantId,
} from "@/src/lib/hero-plants";

/** Full-screen botanical sway overlay used by PageLoader and ImagePreloader. */
export function BotanicalLoader() {
  const reduceMotion = useReducedMotion();
  const [plantId, setPlantId] = useState<HeroPlantId>(DEFAULT_HERO_PLANT_ID);

  useEffect(() => {
    setPlantId(pickRandomHeroPlantId());
  }, []);

  return (
    <motion.div
      key="botanical-loader"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg text-text-muted"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.4,
          delay: reduceMotion ? 0 : 0.1,
          ease: "easeInOut",
        },
      }}
    >
      <div className="h-96 w-64" style={{ perspective: 900 }}>
        <motion.div
          className="h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={
            reduceMotion
              ? undefined
              : { rotateY: [-18, 18, -18], rotateX: [4, -4, 4] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.5, ease: "easeInOut", repeat: Infinity }
          }
        >
          <HeroPlantIllustration id={plantId} className="h-full w-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
