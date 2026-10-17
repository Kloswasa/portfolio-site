import { type Variants } from "framer-motion"

/** Instant end state for `prefers-reduced-motion` scroll reveals. */
export const revealReduced: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
}

const PLAY_PLATE_SHIFT = 28
const PLAY_PLATE_EASE = [0.22, 1, 0.36, 1] as const

/**
 * Play viewer plate — enters from the navigation direction once its artwork is
 * decoded, exits the opposite way. `custom` is the direction: 1 next, -1 previous, 0 open.
 */
export const playPlate: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * PLAY_PLATE_SHIFT,
    scale: direction === 0 ? 0.985 : 1,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.42, ease: PLAY_PLATE_EASE },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -PLAY_PLATE_SHIFT,
    scale: direction === 0 ? 0.985 : 1,
    transition: { duration: 0.18, ease: "easeIn" },
  }),
}

/** Opacity-only crossfade for `prefers-reduced-motion`. */
export const playPlateReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}
