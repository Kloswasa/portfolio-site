import { notFound } from "next/navigation";
import { CaseStudyRenderer } from "@/src/components/case-study/CaseStudyRenderer";
import { LockedCaseStudy } from "@/src/components/case-study/LockedCaseStudy";
import {
  getCaseStudy,
} from "@/src/lib/case-studies";
import { isConfidentialUnlocked } from "@/src/lib/confidential/auth";
import { getProject, getCaseStudySlugForProject, getVisibleProjects } from "@/src/lib/projects";

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || project.hidden) notFound();

  const visibleProjects = getVisibleProjects();

  if (project.confidential) {
    const unlocked = await isConfidentialUnlocked();

    if (unlocked) {
      const caseStudy = getCaseStudy(getCaseStudySlugForProject(project));

      if (caseStudy) {
        const projectIndex = visibleProjects.findIndex((p) => p.slug === slug);
        const nextProject = visibleProjects[(projectIndex + 1) % visibleProjects.length]!;
        const nextIndex = String(
          ((projectIndex + 1) % visibleProjects.length) + 1,
        ).padStart(3, "0");

        return (
          <main className="w-full px-8">
            <CaseStudyRenderer
              caseStudy={caseStudy}
              project={project}
              nextProject={nextProject}
              nextIndex={nextIndex}
            />
          </main>
        );
      }
    }

    return (
      <main className="w-full px-8">
        <LockedCaseStudy project={project} />
      </main>
    );
  }

  const caseStudy = getCaseStudy(getCaseStudySlugForProject(project));

  if (!caseStudy) notFound();

  const projectIndex = visibleProjects.findIndex((p) => p.slug === slug);
  const nextProject = visibleProjects[(projectIndex + 1) % visibleProjects.length]!;
  const nextIndex = String(
    ((projectIndex + 1) % visibleProjects.length) + 1,
  ).padStart(3, "0");

  return (
    <main className="w-full px-8">
      <CaseStudyRenderer
        caseStudy={caseStudy}
        project={project}
        nextProject={nextProject}
        nextIndex={nextIndex}
      />
    </main>
  );
}
