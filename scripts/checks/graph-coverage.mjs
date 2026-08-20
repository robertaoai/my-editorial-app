// `C-14` check 4 — documents absent from the curated graph.
//
// Wraps the existing `docs/graph-fragments/missing.js`, which `C-14` names
// directly. Not reimplemented: that file is the reference the register cites,
// and a second implementation would be a second thing to keep in step.
//
// `docs/.graphify/` is excluded — graphify writes its own scratch output there,
// and counting it as a governed document produces a permanent false finding.

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const SCRIPT = "docs/graph-fragments/missing.js";
const GRAPH = ".graphify/graph.json";
const IGNORE = /^docs\/\.graphify\//;

export function run() {
  const findings = [];
  let out;

  // `.graphify/` is gitignored, so this check's input does not exist on a fresh
  // clone. That is structural rather than a defect: the graph is a build
  // artifact, and its curated layer is NOT rebuildable from `docs/` — it merges
  // only from `docs/graph-fragments/` (`G51`). Rebuilding it in CI would mean
  // installing graphify and running the merge, which buys nothing the local run
  // does not already give.
  //
  // So this check is LOCAL-ONLY, and it says so rather than failing CI forever
  // or — worse — reporting a pass it never performed.
  if (!existsSync(GRAPH)) {
    return {
      name: "graph-coverage",
      findings: [],
      skipped: true,
      detail: `SKIPPED — ${GRAPH} absent (gitignored build artifact); run locally`,
    };
  }

  try {
    out = execFileSync(process.execPath, [SCRIPT], { encoding: "utf8" });
  } catch (err) {
    return {
      name: "graph-coverage",
      findings: [`${SCRIPT} failed: ${err.message.split("\n")[0]}`],
      detail: "not run",
    };
  }

  const lines = out.split("\n").map((l) => l.trim());
  const missing = lines.filter((l) => l.startsWith("docs/") && !IGNORE.test(l));
  const total = out.match(/docs \.md files total\s*:\s*(\d+)/)?.[1] ?? "?";

  for (const m of missing) findings.push(`absent from the curated graph: ${m}`);

  return {
    name: "graph-coverage",
    findings,
    detail: `${total} markdown files under docs/, ${missing.length} absent (graphify scratch excluded)`,
  };
}
