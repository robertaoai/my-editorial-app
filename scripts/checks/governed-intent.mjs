// Shared governed-intent exclusion matcher for `graph-coverage` and
// `docs-drift` (`D-231`, closing the control-drift `docs/handoff/B-102`
// identified: two checks independently deciding what counts as governed
// content, disagreeing by construction).
//
// `docs/handoff/B-102`'s Judge clarification, 2026-09-15: `docs/handoff/`
// records refinement and disposition work but is not the governed-intent
// graph source. Graphify for governance/docs runs only after an accepted
// intent is applied to its canonical sources, committed and independently
// verified — a handoff-only commit changes no governed intent and must
// neither require graph coverage nor mark the governed-intent graph stale.
//
// ONE matcher, used by both checks, so they cannot each name a different
// exclusion set the way `missing.js`'s hard-coded `docs/.graphify/` filter
// and `docs-drift`'s (previously nonexistent) path filter would have.

const EXCLUDED = [
  /^docs\/handoff\//, // the handoff transaction worklog — D-90, unmapped, non-governed
  /^docs\/\.graphify\//, // graphify's own scratch output under docs/
];

/** `true` when `p` (a repo-relative path, forward-slash separated) is
 * excluded from governed-intent Graphify coverage and staleness detection. */
export function isExcludedPath(p) {
  return EXCLUDED.some((re) => re.test(p));
}

/** Human-readable name of the excluded class, for detail lines that must
 * name what they excluded rather than merely a changing count (`D-54`,
 * `G55`/`G56`/`G58` — a restated tally is the drift mechanism, a named class
 * is not). */
export const EXCLUDED_CLASS_LABEL = "docs/handoff/ and graphify scratch";

/**
 * Split a list of changed paths (repo-relative, forward-slash separated)
 * into governed-intent paths and everything excluded.
 *
 * A PURE function, deliberately separate from any git plumbing, so a fixture
 * can assert the decision directly against synthetic path lists instead of
 * fabricating real commits — the same reason `lane-boundary.mjs` exports
 * `classify()` apart from its own git-reading `run()`.
 */
export function classifyChangedPaths(paths) {
  const governed = paths.filter((p) => !isExcludedPath(p));
  return { governed, excludedOnly: governed.length === 0 };
}
