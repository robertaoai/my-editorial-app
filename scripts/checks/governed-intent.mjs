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

// ---------------------------------------------------------------------------
// Coverage-only manifest and exact source-path evidence — `D-246`, amending
// `D-231` per the Judge's `B119-GRAPH-SCOPE` Choice A (`docs/handoff/B-119`).
//
// `D-231` deliberately gave `graph-coverage` and `docs-drift` ONE matcher. The
// manifest below deliberately gives them DIFFERENT policies, and that is safe
// only because it is layered ON TOP of the base matcher rather than replacing
// it: `isExcludedPath()` above is still what `docs-drift` uses, so a path in
// this manifest is excluded from COVERAGE and stays fully visible to DRIFT.
//
// EXACT PATHS, never a glob. A wildcard journal exclusion was rejected by the
// Judge because it would have removed `2026-08-18-storyboard-business-and-
// digital-twin.md` — the canonical Mermaid source `FN-GATES-01-05.md` cites —
// from coverage. Membership is `Set` equality on a frozen list, so there is no
// pattern for a canonical file to slip through.
//
// The list is a set of PATHS, not a count. Nothing here restates how many
// there are (`G55`, `G56`, `G58`); the Register owns the manifest's identity.
// ---------------------------------------------------------------------------

/** Non-authoritative plan-pack documents: `CLAUDE.md` records them as accurate
 * about the substrate and wrong about governance. */
export const PLAN_PACK_PATHS = Object.freeze([
  "docs/ARCHITECTURE.md",
  "docs/DATA_MODEL.md",
  "docs/AGENTIC_LAYER.md",
  "docs/INTELLIGENCE_LAYER.md",
  "docs/SECURITY.md",
  "docs/TASKS.md",
  "docs/TEST_PLAN.md",
]);

/** Historical journals with NO incoming exact-filename citation from a
 * non-journal live or canonical source in the reviewed tree. Qualification is
 * re-tested on every run (`manifestViolations`), so a later citation removes
 * the exclusion by failing closed rather than leaving a silent blind spot. */
export const HISTORICAL_JOURNAL_PATHS = Object.freeze([
  "docs/journal/2026-08-18-audit-model-and-remediation-plan.md",
  "docs/journal/2026-08-18-board-packet-checklist.md",
  "docs/journal/2026-08-18-consolidated-gaps-and-open-questions.md",
  "docs/journal/2026-08-18-first-engagement-lock-in.md",
  "docs/journal/2026-08-18-poc-charter-separation-and-revenue-model.md",
  "docs/journal/2026-08-18-publication-transaction-record.md",
  "docs/journal/2026-08-18-retraction-as-publication.md",
  "docs/journal/2026-08-18-sprint-readiness-consolidated.md",
  "docs/journal/2026-08-18-transition-intent-vocabulary.md",
  "docs/journal/2026-08-19-t1-execution-runbook.md",
]);

export const COVERAGE_ONLY_MANIFEST = Object.freeze([...PLAN_PACK_PATHS, ...HISTORICAL_JOURNAL_PATHS]);

const COVERAGE_ONLY = new Set(COVERAGE_ONLY_MANIFEST);

/** `true` when `p` is excluded from graph COVERAGE: the base class (`D-231`)
 * or an exact manifest path. `docs-drift` must keep using `isExcludedPath`. */
export function isCoverageExcludedPath(p) {
  return isExcludedPath(p) || COVERAGE_ONLY.has(p);
}

/** Human-readable name of what coverage excludes, for its detail line. */
export const COVERAGE_EXCLUDED_CLASS_LABEL = `${EXCLUDED_CLASS_LABEL} and the coverage-only manifest (D-246)`;

/** Normalize a `source_file` (or any path) to the repo-relative,
 * forward-slash form the checks compare with. */
export function normalizeSourcePath(p) {
  return String(p ?? "")
    .split("\\")
    .join("/")
    .replace(/^\.\//, "")
    .replace(/\/{2,}/g, "/");
}

/** The set of exact, normalized paths some node claims as its `source_file`. */
export function sourceFileSet(nodes) {
  return new Set((nodes ?? []).map((n) => normalizeSourcePath(n?.source_file)).filter(Boolean));
}

/** Sources whose citation of a journal makes that journal "live or canonical".
 * Other journals do not count — they cite each other — and neither does the
 * handoff worklog or graphify scratch output. */
function countsAsLiveSource(p) {
  return !p.startsWith("docs/journal/") && !isExcludedPath(p);
}

/**
 * For each historical-journal manifest path, the live/canonical sources that
 * now cite it by exact filename. A NON-EMPTY result means the manifest entry no
 * longer qualifies and must be removed — the control fails closed and NAMES
 * the new incoming reference, instead of keeping a stale exclusion.
 *
 * `corpus` is a Map of repo-relative path -> file text. PURE: no disk access,
 * so a fixture can assert it against synthetic corpora.
 */
export function manifestViolations(corpus, manifest = HISTORICAL_JOURNAL_PATHS) {
  const violations = [];
  for (const target of manifest) {
    const name = target.slice(target.lastIndexOf("/") + 1);
    for (const [path, text] of corpus) {
      if (path === target || !countsAsLiveSource(path)) continue;
      if (text.includes(name)) violations.push({ path: target, citedBy: path });
    }
  }
  return violations;
}

/**
 * Coverage decision, PURE. A document is covered only when some node's
 * `source_file` EQUALS its normalized path. The previous evidence was
 * `graph.includes(basename)` over the raw JSON, which passes when a basename
 * merely appears somewhere — in a label, a description or another file's
 * node — and so proves nothing about the file having its own node.
 */
export function evaluateCoverage({ docPaths, nodes, corpus = new Map() }) {
  const covered = sourceFileSet(nodes);
  const candidates = docPaths.map(normalizeSourcePath).filter((p) => !isCoverageExcludedPath(p));
  const missing = candidates.filter((p) => !covered.has(p));
  return { candidates, missing, violations: manifestViolations(corpus) };
}
