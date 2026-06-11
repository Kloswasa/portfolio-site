'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { WorkCard } from '@/src/components/WorkCard';
import type { WorkCardProject } from '@/src/lib/work/types';

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

const mosaicGridClass = 'featured-mosaic h-full min-h-0 flex-1';

interface FeaturedProjectStaggerProps {
  projects: WorkCardProject[];
}

export function FeaturedProjectStagger({ projects }: FeaturedProjectStaggerProps) {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = projects;

  if (!featured) return null;

  if (reduceMotion) {
    return (
      <div className={mosaicGridClass}>
        <div className="md:row-span-2">
          <WorkCard project={featured} layout="featured" />
        </div>
        {rest.map((project) => (
          <div key={project.id}>
            <WorkCard project={project} layout="featured" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={mosaicGridClass}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="md:row-span-2">
        <WorkCard project={featured} layout="featured" />
      </motion.div>
      {rest.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <WorkCard project={project} layout="featured" />
        </motion.div>
      ))}
    </motion.div>
  );
}
