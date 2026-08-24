// `C-14` check 15 — `D-103`: exactly one lane is `Active`.
//
// WHY IT ONLY BECOMES NECESSARY NOW. `D-101` established four lane states and
// made `V1-PHASE-CLOSURE.md` §5 the single place live state lives. From then
// until `D-103` the table never changed — Lane A had been `Active` since it was
// written, so the invariant was true by inertia rather than by anything.
//
// `D-103` is the first Sprint-boundary handover this model has performed.
// **A handover is two edits — one lane out of `Active`, one lane in — and a
// half-applied handover is the failure mode.** Two `Active` rows means two
// agents believe they may commit; zero means the work stops and the table says
// nothing about why. Neither is visible to any other check: `lane-boundary`
// reads SURFACES, not states, and would report a clean single-lane commit from
// a lane that is not permitted to make one.
//
// WHAT IT FAILS ON:
//   * not exactly one `Active` row
//   * a state that is not one of the four (`D-101`)
//   * a `Blocked` row that names nothing it is blocked on — `B-013` item 4's
//     shape: a status word with no referent is not a status
//
// WHAT IT DELIBERATELY DOES NOT DO — stated, not buried:
//   * It does not check that the COMMITTING lane is the `Active` one. That
//     needs the surface map `lane-boundary` owns, and it would fire on the
//     handover commit itself — the one commit that must legitimately be made by
//     the lane going out of `Active`. **Specified, not built** (`D-103`).
//   * It cannot tell whether the Chief Editor actually made the selection. The
//     `Selected` cell is prose, written by whoever edits the table
//     (`arrival_not_correctness`, `C-22`).
//
// Tracked file, no history needed, so it runs in CI.

import { existsSync, readFileSync } from "node:fs";
import { CLOSURE_PATH as CLOSURE, registerRows } from "./handoff-fields.mjs";

const STATES = ["Active", "Eligible", "Blocked", "Done"];

export function run() {
  if (!existsSync(CLOSURE)) {
    return { name: "lane-state", findings: [`${CLOSURE} absent`], detail: "no register to read" };
  }

  const rows = registerRows(readFileSync(CLOSURE, "utf8"));
  if (rows.length === 0) {
    return {
      name: "lane-state",
      findings: [`${CLOSURE} §5: no phase register rows found — the single source of lane state is unreadable`],
      detail: "register not parsed",
    };
  }

  const findings = [];
  const seen = [];

  for (const row of rows) {
    const laneKey = Object.keys(row).find((k) => k.startsWith("lane"));
    const stateKey = Object.keys(row).find((k) => k.startsWith("state"));
    if (!laneKey || !stateKey) {
      return {
        name: "lane-state",
        findings: [`${CLOSURE} §5: no Lane and State columns — cannot read lane state by column name`],
        detail: "columns not found",
      };
    }

    const lane = row[laneKey].replace(/\*/g, "").trim();
    const cell = row[stateKey];
    const matched = STATES.filter((s) => new RegExp(`\`${s}\``).test(cell) || new RegExp(`\\b${s}\\b`).test(cell));

    if (matched.length === 0) {
      findings.push(
        `${CLOSURE} §5: lane ${lane} has no recognised state — expected one of ${STATES.join(", ")} (\`D-101\`)`,
      );
      continue;
    }

    // A row may legitimately name two states for two different items — Lane C
    // is `Blocked` on one queued item and `Eligible` for another. What it may
    // NOT do is be `Active` and something else at once.
    if (matched.includes("Active") && matched.length > 1) {
      findings.push(
        `${CLOSURE} §5: lane ${lane} is \`Active\` AND ${matched.filter((s) => s !== "Active").join("/")} — \`Active\` is the permission to commit and is not divisible`,
      );
    }

    if (matched.includes("Blocked") && !/blocked[^.]*\bon\b/i.test(cell)) {
      findings.push(
        `${CLOSURE} §5: lane ${lane} is \`Blocked\` and names nothing it is blocked on — a status word with no referent is not a status`,
      );
    }

    if (matched.includes("Active")) seen.push(lane);
  }

  if (seen.length !== 1) {
    findings.push(
      seen.length === 0
        ? `${CLOSURE} §5: NO lane is \`Active\`. Every lane is barred from committing and the table does not say why — a Sprint-boundary handover applied halfway (\`D-103\`)`
        : `${CLOSURE} §5: ${seen.length} lanes are \`Active\` — ${seen.join(", ")}. Exactly one lane may commit (\`D-101\`); two agents believing they may is the silent-overwrite condition \`CLAUDE.md\` opens with`,
    );
  }

  return {
    name: "lane-state",
    findings,
    detail: `${rows.length} lane row(s); Active: ${seen.join(", ") || "NONE"}`,
  };
}
