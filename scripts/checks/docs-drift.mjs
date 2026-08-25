// `C-14` check 7 — is the knowledge graph current with `docs/`?
//
// REPAIRED BY `D-78`. The original tested for `.graphify/needs_update`. That
// file is written only by graphify's git hook, and `.git/hooks/` is EMPTY —
// the sole reference to the path anywhere in this repository was the check
// that read it. Demonstrated 2026-08-21: with `docs/Modular_PRD.md` modified,
// it reported `PASS synced`. It had never been capable of failing, and it
// reported "synced" for a full session while the graph was genuinely stale.
//
// `.graphify/branch.json` is the signal that works. It carries `stale`,
// `staleReason` and `lastAnalyzedHead`, and `lastAnalyzedHead` tracked HEAD
// correctly through every rebuild of the 2026-08-21 session.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It detects GRAPH STALENESS, not document correctness. A current graph
//     says nothing about whether the docs agree with each other.
//   * `.graphify/` is gitignored, so this SKIPS in CI and must be run on a
//     machine that has the graph.

import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const BRANCH_JSON = ".graphify/branch.json";

export function run() {
  if (!existsSync(BRANCH_JSON)) {
    return {
      name: "docs-drift",
      findings: [],
      skipped: true,
      detail: `SKIPPED — ${BRANCH_JSON} absent (gitignored build artifact); run locally`,
    };
  }

  let state;
  try {
    state = JSON.parse(readFileSync(BRANCH_JSON, "utf8"));
  } catch {
    return {
      name: "docs-drift",
      findings: [`${BRANCH_JSON} is unreadable or invalid JSON — graph currency cannot be judged`],
      detail: "branch.json unparseable",
    };
  }

  let head;
  try {
    head = execSync("git rev-parse HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return { name: "docs-drift", findings: [], skipped: true, detail: "SKIPPED — git unavailable" };
  }

  const findings = [];
  const analyzed = String(state.lastAnalyzedHead || "");
  const short = (s) => (s ? s.slice(0, 7) : "(none)");

  // `G97`, raised as `B-050`. A RECORD THAT CONTRADICTS ITSELF GETS ITS OWN
  // MESSAGE. `hook-rebuild` intermittently writes `branchName: null` and
  // `lastAnalyzedHead: null` over a good record **while leaving `stale: false`**
  // — so the flag says healthy and the data says nothing was ever analyzed.
  //
  // This check is not fooled: it compares `lastAnalyzedHead` against HEAD and
  // ignores the flag unless it is explicitly `true`. **A reader is fooled**, and
  // that is the whole risk — `stale: false` beside a null head reads as synced
  // to a person and as stale to the check.
  //
  // So the two cases are reported differently. Ordinary staleness names a real
  // commit to re-analyze; a null record names the self-contradiction, because
  // "run hook-rebuild" is the fix for one and merely the *cause* of the other.
  if (!analyzed) {
    findings.push(
      `graphify's branch record has NO analyzed commit${state.stale === false ? " while still reporting `stale: false`" : ""} — the record contradicts itself and nothing has been verified against HEAD ${short(head)}. \`hook-rebuild\` intermittently nulls \`branchName\` and \`lastAnalyzedHead\` over a good record (\`G97\`); re-run it and CONFIRM \`lastAnalyzedHead\` equals HEAD before claiming the graph is current.`,
    );
  } else if (analyzed !== head) {
    findings.push(
      `graph is STALE — last analyzed ${short(analyzed)}, HEAD is ${short(head)}. Run \`npx graphify hook-rebuild\`, then re-merge \`docs/graph-fragments/\` if the curated node count drops (\`G51\`).`,
    );
  }

  if (state.stale === true) {
    findings.push(
      `graphify marks the graph stale${state.staleReason ? ` — ${state.staleReason}` : ""}.`,
    );
  }

  const detail =
    findings.length > 0
      ? `stale: analyzed ${short(analyzed)} vs HEAD ${short(head)}`
      : `synced at ${short(head)}`;

  return { name: "docs-drift", findings, detail };
}
