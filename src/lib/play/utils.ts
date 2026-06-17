/** Resolve a play asset path from `public/` (handles bare paths like `play/illustration/foo.png`). */
export function playImageSrc(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
}
