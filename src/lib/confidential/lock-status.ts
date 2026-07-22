export type ProjectLockStatus = "documentation" | "researching" | "nda";

export const PROJECT_LOCK_COPY = {
  documentation: {
    stamp: "Documentation",
    eyebrow: "Case study in progress",
    note: "This project is in the archive, but the full case study is still being written. Imagery, process, and outcomes are available with access.",
  },
  researching: {
    stamp: "Researching",
    eyebrow: "Early research",
    note: "This project is still in research. Process and outcomes are not public yet. Enter the password if you have access, or request a walkthrough.",
  },
  nda: {
    stamp: "Under NDA",
    eyebrow: "Confidential record",
    note: "The full record for this project is held under a non-disclosure agreement. Imagery, process, and outcomes are available to review on request.",
  },
} as const satisfies Record<
  ProjectLockStatus,
  { stamp: string; eyebrow: string; note: string }
>;

export function getProjectLockCopy(status: ProjectLockStatus = "nda") {
  return PROJECT_LOCK_COPY[status];
}
