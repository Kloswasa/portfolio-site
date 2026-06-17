import { PlayView } from "@/src/components/play/PlayView";
import {
  PLAY_END_COPY,
  PLAY_FILTER_OPTIONS,
  PLAY_HERO_META,
  PLAY_MEDIUM_SECTIONS,
  PLAY_PAGE_DESCRIPTION,
  PLAY_WORKS,
} from "@/src/lib/play";

export const metadata = {
  title: "Play",
  description: PLAY_PAGE_DESCRIPTION,
};

export default function PlayPage() {
  return (
    <main>
      <PlayView
        works={PLAY_WORKS}
        filterOptions={PLAY_FILTER_OPTIONS}
        heroMeta={PLAY_HERO_META}
        mediumSections={PLAY_MEDIUM_SECTIONS}
        endCopy={PLAY_END_COPY}
      />
    </main>
  );
}
