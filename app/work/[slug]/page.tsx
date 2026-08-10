import { notFound } from "next/navigation";
import { CaseStudyRenderer } from "@/src/components/case-study/CaseStudyRenderer";
import { LockedCaseStudy } from "@/src/components/case-study/LockedCaseStudy";
import {
  getCaseStudy,
} from "@/src/lib/case-studies";
import { isConfidentialUnlocked } from "@/src/lib/confidential/auth";
import {
  getProject,
  getCaseStudySlugForProject,
  getNextProject,
  getVisibleProjects,
} from "@/src/lib/projects";

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

function nextProjectIndexLabel(next: ReturnType<typeof getNextProject>): string {
  if (!next) return "001";
  const visible = getVisibleProjects();
  const index = visible.findIndex((project) => project.slug === next.slug);
  return String(Math.max(index, 0) + 1).padStart(3, "0");
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || project.hidden) notFound();

  if (project.confidential) {
    const unlocked = await isConfidentialUnlocked();

    if (unlocked) {
      const caseStudy = getCaseStudy(getCaseStudySlugForProject(project));

      if (caseStudy) {
        const nextProject = getNextProject(slug);
        if (!nextProject) notFound();

        return (
          <main className="w-full px-8">
            <CaseStudyRenderer
              caseStudy={caseStudy}
              project={project}
              nextProject={nextProject}
              nextIndex={nextProjectIndexLabel(nextProject)}
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

  const nextProject = getNextProject(slug);
  if (!nextProject) notFound();

  return (
    <main className="w-full px-8">
      <CaseStudyRenderer
        caseStudy={caseStudy}
        project={project}
        nextProject={nextProject}
        nextIndex={nextProjectIndexLabel(nextProject)}
      />
    </main>
  );
}
