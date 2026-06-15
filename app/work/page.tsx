import { GalleryView } from "@/src/components/gallery/GalleryView";
import {
  GALLERY_FILTER_OPTIONS,
  GALLERY_HERO_META,
  GALLERY_PROJECTS,
} from "@/src/lib/gallery/data";

export const metadata = {
  title: "Work",
  description:
    "A complete record of design work — catalogued entries across product, packaging, and graphic design.",
};

export default function WorkPage() {
  return (
    <main>
      <GalleryView
        projects={GALLERY_PROJECTS}
        filterOptions={GALLERY_FILTER_OPTIONS}
        heroMeta={GALLERY_HERO_META}
      />
    </main>
  );
}
