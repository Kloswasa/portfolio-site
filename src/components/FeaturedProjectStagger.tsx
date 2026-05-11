'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectCard from '@/src/components/ProjectCard';
import type { Project } from '@/src/lib/projects';

const easeDefault = [0.25, 0.1, 0.25, 1] as const;

const viewport = {
  once: true,
  amount: 0.12 as const,
  margin: '-80px 0px 0px 0px',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeDefault },
  },
};

export function FeaturedProjectStagger({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            tone={project.tone}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
            href={`/work/${project.slug}`}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="mt-8 grid gap-4 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants} className="min-w-0">
          <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            tone={project.tone}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
            href={`/work/${project.slug}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
