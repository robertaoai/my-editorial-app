// `C-14` check 4 — documents absent from the curated graph.
//
// `D-246` (amending `D-231`, from the Judge's `B119-GRAPH-SCOPE` Choice A)
// rewrote the evidence. It used to wrap `docs/graph-fragments/missing.js`, whose
// test is `graph.includes(basename)` — true whenever a filename merely appears
// anywhere in the graph JSON. That cannot show the file HAS a node. It is
// replaced here by an exact test: a document is covered only when some node's
// `source_file` equals its normalized repo-relative path.
//
// EXCLUSIONS come from the shared `governed-intent.mjs`: the base class
// (`D-231` — `docs/handoff/`, graphify scratch output) PLUS an exact,
// glob-free coverage-only manifest. The manifest applies to COVERAGE only —
// `docs-drift` keeps the base matcher and still sees every manifest path.
//
// Two failures are reported, and both name the path:
//   * a manifest journal that a live/canonical (non-journal, non-handoff)
//     source now cites — the exclusion no longer qualifies, so the check fails
//     rather than keeping a silent blind spot;
//   * a document with no node of its own.
//
// `missing.js` is retained unedited as the historical reference tool the
// Register names; it is no longer the evidence.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  COVERAGE_EXCLUDED_CLASS_LABEL,
  evaluateCoverage,
  normalizeSourcePath,
} from "./governed-intent.mjs";

const GRAPH = ".graphify/graph.json";
const FRAGMENTS = "docs/graph-fragments";

// `D-408` (packet of `D-407`, ruling of `D-213`): `community` and `community_name` are graphify's
// clustering output, re-assigned on every re-cluster. Stored in a curated fragment they are a
// derived duplicate, and a merge re-imposes stale ids and names (the `D-406` Route 1 stop). Pure:
// takes [name, parsed fragment] pairs. Detect manifests (no `nodes` array) are not fragments.
export function derivedFieldFindings(fragments) {
  const findings = [];
  for (const [name, frag] of fragments) {
    if (!Array.isArray(frag?.nodes)) continue;
    for (const n of frag.nodes) {
      for (const f of ["community", "community_name"]) {
        if (n && typeof n === "object" && f in n) {
          findings.push(`${name}: node "${n.id}" declares graphify-derived field "${f}" (D-213, D-408)`);
        }
      }
    }
  }
  return findings;
}

function loadFragments() {
  if (!existsSync(FRAGMENTS)) return [];
  return readdirSync(FRAGMENTS)
    .filter((f) => f.endsWith(".json"))
    .map((f) => [f, JSON.parse(readFileSync(join(FRAGMENTS, f), "utf8"))]);
}

function listMarkdown(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) listMarkdown(p, acc);
    else if (e.name.endsWith(".md")) acc.push(normalizeSourcePath(p));
  }
  return acc;
}

export function run() {
  // `.graphify/` is gitignored, so this check's input does not exist on a fresh
  // clone. That is structural rather than a defect: the graph is a build
  // artifact, and its curated layer is NOT rebuildable from `docs/` — it merges
  // only from `docs/graph-fragments/` (`G51`). So this check is LOCAL-ONLY, and
  // it says so rather than failing CI forever or reporting a pass it never
  // performed.
  // Fragments are tracked, so this rule runs even where the graph is absent (CI).
  const fragmentFindings = derivedFieldFindings(loadFragments());

  if (!existsSync(GRAPH)) {
    if (fragmentFindings.length) {
      return {
        name: "graph-coverage",
        findings: fragmentFindings,
        detail: `${GRAPH} absent; the fragment derived-field rule (D-408) still ran`,
      };
    }
    return {
      name: "graph-coverage",
      findings: [],
      skipped: true,
      detail: `SKIPPED — ${GRAPH} absent (gitignored build artifact); run locally`,
    };
  }

  let graph;
  try {
    graph = JSON.parse(readFileSync(GRAPH, "utf8"));
  } catch (err) {
    return {
      name: "graph-coverage",
      findings: [`${GRAPH} could not be read: ${err.message.split("\n")[0]}`],
      detail: "not run",
    };
  }

  const docPaths = listMarkdown("docs");
  const corpus = new Map(docPaths.map((p) => [p, readFileSync(p, "utf8")]));
  const { candidates, missing, violations } = evaluateCoverage({
    docPaths,
    nodes: graph.nodes,
    corpus,
  });

  const findings = [
    ...fragmentFindings,
    ...violations.map(
      (v) => `coverage exclusion no longer qualifies: ${v.path} is now cited by ${v.citedBy}`,
    ),
    ...missing.map((m) => `absent from the curated graph: ${m}`),
  ];

  return {
    name: "graph-coverage",
    findings,
    detail: `${candidates.length} markdown files under docs/ require a node of their own, ${missing.length} absent (${COVERAGE_EXCLUDED_CLASS_LABEL} excluded); ${fragmentFindings.length} fragment derived-field finding(s)`,
  };
}
