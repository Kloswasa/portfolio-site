import { notFound } from "next/navigation";
import { CaseStudyRenderer } from "@/src/components/case-study/CaseStudyRenderer";
import {
  getCaseStudy,
  getCaseStudySlugs,
} from "@/src/lib/case-studies";
import { getProject, projects } from "@/src/lib/projects";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project || !caseStudy) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length]!;
  const nextIndex = String(
    ((projectIndex + 1) % projects.length) + 1,
  ).padStart(3, "0");

  return (
    <main className="w-full px-8">
      <CaseStudyRenderer
        caseStudy={caseStudy}
        nextProject={nextProject}
        nextIndex={nextIndex}
      />
    </main>
  );
}
