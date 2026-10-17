"use client";

import { useState } from "react";

const VISIBLE_SKILLS = 5;

export function HomeAboutSkills({ skills }: { skills: readonly string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = expanded ? skills : skills.slice(0, VISIBLE_SKILLS);
  const remainingSkills = skills.length - VISIBLE_SKILLS;

  return (
    <div className="home-about__skills" aria-label="Focus areas">
      {visibleSkills.map((skill) => (
        <span className="home-about__skill" key={skill}>
          {skill}
        </span>
      ))}
      {!expanded && remainingSkills > 0 ? (
        <button
          type="button"
          className="home-about__skill home-about__skill--more"
          aria-expanded={false}
          onClick={() => setExpanded(true)}
        >
          +{remainingSkills} more
        </button>
      ) : null}
    </div>
  );
}
