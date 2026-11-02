"use client";

import { useState } from "react";
import type { AboutHomeSkillGroup } from "@/src/lib/about/types";

const VISIBLE_SKILLS = 5;

function SkillGroup({ label, skills }: AboutHomeSkillGroup) {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = expanded ? skills : skills.slice(0, VISIBLE_SKILLS);
  const remainingSkills = skills.length - VISIBLE_SKILLS;

  return (
    <div className="home-about__skill-group">
      <h3 className="home-about__skill-label">{label}</h3>
      <div className="home-about__skills">
        {visibleSkills.map((skill) => (
          <span className="home-about__skill" key={skill}>
            {skill}
          </span>
        ))}
        {remainingSkills > 0 ? (
          <button
            type="button"
            className="home-about__skill home-about__skill--more"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? "Show less" : `+${remainingSkills} more`}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function HomeAboutSkills({
  groups,
}: {
  groups: readonly AboutHomeSkillGroup[];
}) {
  return (
    <div className="home-about__skill-groups">
      {groups.map((group) => (
        <SkillGroup key={group.label} {...group} />
      ))}
    </div>
  );
}
