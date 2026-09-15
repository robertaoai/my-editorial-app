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
// SCOPED TO GOVERNED INTENT SINCE `D-231`. This used to compare
// `lastAnalyzedHead` against HEAD with no distinction for what changed
// between them, so a handoff-only commit — `docs/handoff/B-102`'s Judge
// clarification says this is deliberately NOT the governed-intent graph
// source — made the check call the graph stale anyway. It now inspects the
// actual changed paths and shares its exclusion list with `graph-coverage`
// (`governed-intent.mjs`): PASS when every changed path is excluded, FAIL
// when at least one governed-intent path changed without a later analysis. A
// mixed governed/handoff commit still fails — the exclusion is per-path, not
// per-commit.
//
// `D-231`'s own first cut built the range lookup as a shell string —
// `execSync(\`git diff --name-only ${analyzed} ${head}\`)` — with `analyzed`
// read unvalidated from machine-local JSON. `B-109` corrected it the same
// commit-later day: `getChangedPaths()` below calls `execFileSync` with an
// argument array, so `analyzed`/`head` are always inert Git arguments, never
// shell text.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It detects GRAPH STALENESS, not document correctness. A current graph
//     says nothing about whether the docs agree with each other.
//   * `.graphify/` is gitignored, so this SKIPS in CI and must be run on a
//     machine that has the graph.
//   * If `lastAnalyzedHead` is not a commit `git diff` can resolve (an
//     unreachable or garbage-collected ref), it cannot compute changed paths
//     and reports the graph stale rather than guessing.

import { existsSync, readFileSync } from "node:fs";
import { execSync, execFileSync } from "node:child_process";
import { classifyChangedPaths } from "./governed-intent.mjs";

const BRANCH_JSON = ".graphify/branch.json";

/**
 * The changed-path range lookup, as its own function taking an injectable
 * executor (`B-109`, raised against `D-231`'s first cut).
 *
 * The first version built `git diff --name-only ${analyzed} ${head}` as a
 * SHELL STRING for `execSync`. `head` comes from Git; `analyzed` comes from
 * the gitignored, machine-local `.graphify/branch.json`, parsed as JSON but
 * never validated as a commit identifier before being spliced into command
 * text — the same defect class `lane-gate.mjs` already fixed once (`D-106`:
 * "every other subprocess call in this apparatus already passed its
 * arguments separately; this one did not"). `execFileSync` with an argument
 * ARRAY passes `analyzed`/`head` to Git as two inert arguments; no shell ever
 * parses them, so a stray shell metacharacter in a malformed `branch.json` is
 * just a nonexistent-revision argument to Git, not executable text.
 *
 * `exec` defaults to `execFileSync` and is injectable so a fixture can prove
 * the argument shape without invoking a real subprocess.
 */
export function getChangedPaths(analyzed, head, exec = execFileSync) {
  return exec("git", ["diff", "--name-only", analyzed, head], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  })
    .trim()
    .split("\n")
    .filter(Boolean);
}

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
  let excludedOnlyAdvance = false;
  if (!analyzed) {
    findings.push(
      `graphify's branch record has NO analyzed commit${state.stale === false ? " while still reporting `stale: false`" : ""} — the record contradicts itself and nothing has been verified against HEAD ${short(head)}. \`hook-rebuild\` intermittently nulls \`branchName\` and \`lastAnalyzedHead\` over a good record (\`G97\`); re-run it and CONFIRM \`lastAnalyzedHead\` equals HEAD before claiming the graph is current.`,
    );
  } else if (analyzed !== head) {
    // `D-231`. HEAD moving past the analyzed commit is not itself staleness —
    // only a GOVERNED-INTENT path changing is. Inspect what actually changed.
    let changed = null;
    try {
      changed = getChangedPaths(analyzed, head);
    } catch {
      changed = null; // `analyzed` unreachable, garbage-collected, or not a commit at all
    }

    if (changed === null) {
      findings.push(
        `graph is STALE — last analyzed ${short(analyzed)}, HEAD is ${short(head)}, and the changed-path diff between them could not be computed (is ${short(analyzed)} a real, reachable commit?). Run \`npx graphify hook-rebuild\`, then re-merge \`docs/graph-fragments/\` if the curated node count drops (\`G51\`).`,
      );
    } else {
      const { governed, excludedOnly } = classifyChangedPaths(changed);
      if (excludedOnly) {
        // Every changed path is docs/handoff/ or graphify scratch. Per
        // `docs/handoff/B-102`'s Judge clarification, that is not governed
        // intent, so HEAD moving past `analyzed` is not staleness here.
        excludedOnlyAdvance = true;
      } else {
        findings.push(
          `graph is STALE — last analyzed ${short(analyzed)}, HEAD is ${short(head)}; ${governed.length} governed-intent path(s) changed without a later analysis: ${governed.slice(0, 5).join(", ")}${governed.length > 5 ? ` …and ${governed.length - 5} more` : ""}. Run \`npx graphify hook-rebuild\`, then re-merge \`docs/graph-fragments/\` if the curated node count drops (\`G51\`).`,
        );
      }
    }
  }

  if (state.stale === true) {
    findings.push(
      `graphify marks the graph stale${state.staleReason ? ` — ${state.staleReason}` : ""}.`,
    );
  }

  const detail =
    findings.length > 0
      ? `stale: analyzed ${short(analyzed)} vs HEAD ${short(head)}`
      : excludedOnlyAdvance
        ? `synced (governed intent) at ${short(analyzed)}; HEAD ${short(head)} advanced by excluded-only commits`
        : `synced at ${short(head)}`;

  return { name: "docs-drift", findings, detail };
}
