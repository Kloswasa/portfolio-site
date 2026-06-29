/** Resolve a play asset path from `public/` (handles bare paths like `play/illustration/foo.png`). */
export function playImageSrc(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
}

/** Portrait limit (~5:8) — prevents ultra-tall plates. */
export const PLAY_PLATE_MIN_ASPECT = 0.65;
/** Landscape limit (~3:2) — prevents ultra-wide plates. */
export const PLAY_PLATE_MAX_ASPECT = 1.55;
export const PLAY_PLATE_DEFAULT_ASPECT = 1;

/** Clamp image width/height to a plate-friendly aspect ratio. */
export function plateAspectRatio(width: number, height: number): number {
  if (width <= 0 || height <= 0) return PLAY_PLATE_DEFAULT_ASPECT;
  const ratio = width / height;
  return Math.min(PLAY_PLATE_MAX_ASPECT, Math.max(PLAY_PLATE_MIN_ASPECT, ratio));
}
