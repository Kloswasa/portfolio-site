"use client";

import { AnimatePresence } from "framer-motion";
import { BotanicalLoader } from "@/src/components/ui/BotanicalLoader";
import { useNav } from "@/src/context/NavContext";

export function PageLoader() {
  const { loading } = useNav();

  return (
    <AnimatePresence>{loading && <BotanicalLoader />}</AnimatePresence>
  );
}
