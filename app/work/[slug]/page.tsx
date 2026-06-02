import { notFound } from "next/navigation";
import { CaseStudyHook } from "@/src/components/case-study/CaseStudyHook";
import { CaseStudyNext } from "@/src/components/case-study/CaseStudyNext";
import { CaseStudyRenderer } from "@/src/components/case-study/CaseStudyRenderer";
import { CaseStudySectionTabs } from "@/src/components/CaseStudySectionTabs";
import {
  getCaseStudy,
  getCaseStudyNav,
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

  return (
    <main className="w-full">
      <CaseStudySectionTabs sections={getCaseStudyNav(caseStudy.kind)} />
      <CaseStudyHook project={project} hook={caseStudy.hook} />
      <CaseStudyRenderer caseStudy={caseStudy} />
      <CaseStudyNext nextProject={nextProject} />
    </main>
  );
}
