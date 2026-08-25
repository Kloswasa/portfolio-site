import { WorkView } from "@/src/components/work/WorkView";
import {
  WORK_ARCHIVE_PROJECTS,
  WORK_END_COPY,
  WORK_FILTER_OPTIONS,
  WORK_HERO_META,
} from "@/src/lib/work/archive";

export const metadata = {
  title: "Work",
  description:
    "A complete record of design work: catalogued entries across product, industrial, packaging, and graphic design.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkView
        projects={WORK_ARCHIVE_PROJECTS}
        filterOptions={WORK_FILTER_OPTIONS}
        heroMeta={WORK_HERO_META}
        endCopy={WORK_END_COPY}
      />
    </main>
  );
}
