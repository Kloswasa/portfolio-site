import { playImageSrc } from "@/src/lib/play/utils";

export function collectWorkCardImages(
  projects: ReadonlyArray<{ coverImage?: { src: string } }>,
): string[] {
  const urls = new Set<string>();

  for (const project of projects) {
    if (project.coverImage?.src) urls.add(project.coverImage.src);
  }

  return [...urls];
}

export function collectPlayCardImages(
  works: ReadonlyArray<{ imageSrc?: string }>,
): string[] {
  const urls = new Set<string>();

  for (const work of works) {
    if (work.imageSrc) urls.add(playImageSrc(work.imageSrc));
  }

  return [...urls];
}
