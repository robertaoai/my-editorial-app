// `C-14` check 4 — documents absent from the curated graph.
//
// Wraps the existing `docs/graph-fragments/missing.js`, which `C-14` names
// directly. Not reimplemented: that file is the reference the register cites,
// and a second implementation would be a second thing to keep in step.
//
// `docs/.graphify/` is excluded — graphify writes its own scratch output there,
// and counting it as a governed document produces a permanent false finding.

import { execFileSync } from "node:child_process";

const SCRIPT = "docs/graph-fragments/missing.js";
const IGNORE = /^docs\/\.graphify\//;

export function run() {
  const findings = [];
  let out;

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
