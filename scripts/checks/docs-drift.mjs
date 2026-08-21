// `C-14` check 7 — docs drift detection.
//
// Checks if the `docs/` folder has changed since the last graphify build.
// If `.graphify/needs_update` exists, it means the graph is stale and must
// be rebuilt using `npx graphify hook-rebuild`.

import { existsSync } from "node:fs";

const GRAPH_DIR = ".graphify";
const NEEDS_UPDATE = ".graphify/needs_update";

export function run() {
  const findings = [];

  // If the graph doesn't exist, this check is skipped (local-only).
  if (!existsSync(GRAPH_DIR)) {
    return {
      name: "docs-drift",
      findings: [],
      skipped: true,
      detail: `SKIPPED — ${GRAPH_DIR} absent; run locally`,
    };
  }

  if (existsSync(NEEDS_UPDATE)) {
    findings.push(
      `Docs have drifted. Run \`npx graphify hook-rebuild\` to sync the graph with docs/.`
    );
  }

  return {
    name: "docs-drift",
    findings,
    detail: existsSync(NEEDS_UPDATE) ? "needs_update file found" : "synced",
  };
}
