import { type Variants } from "framer-motion"

/** Instant end state for `prefers-reduced-motion` scroll reveals. */
export const revealReduced: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
}
