// Stairs and multi-level plans: each level gets its own sheet in the draft.
export const levelsOf = (plan: { levels: number }) => Array.from({ length: plan.levels }, (_, i) => i + 1);
