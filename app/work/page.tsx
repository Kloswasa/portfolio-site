import WorkIndex from "@/src/components/WorkIndex";
import { projects } from "@/src/lib/projects";

export const metadata = {
  title: "Work",
  description: "Product, packaging, and graphic work — by category.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-14">
      <WorkIndex projects={projects} />
    </main>
  );
}

