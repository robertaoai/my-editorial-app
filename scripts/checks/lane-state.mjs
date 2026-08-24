// `C-14` check 15 — `D-103`, rewritten as a state machine by `D-108`.
//
// THE LOCK IS EXCLUSIVE. One lane runs; the others are `Blocked` on that run;
// when it completes the lock is free and they become `Eligible`. **A lane that
// is `Eligible` while another is `Active` is the illegal state**, and it is the
// one that actually occurred.
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
//   * more than one `Active` row
//   * an `Eligible` row while a lane is `Active` — the lock is held
//   * a `Blocked` row while NO lane is `Active` — blocked on nothing
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
  const laneStates = [];

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

    // A ROW CARRIES ONE LOCK STATE. Lane C used to read `Blocked` on one item
    // and `Eligible` for another, mixing a WORK condition into the LOCK column
    // (`B-033`). Item-level blockers live in the conditions that name them.
    // The state cell also carries states and no commentary: the word appearing
    // in an explanatory clause is indistinguishable from the state itself.
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

    laneStates.push({ lane, states: matched });
    if (matched.includes("Active")) seen.push(lane);
  }

  // `D-108` — the lock is a STATE MACHINE, not a count.
  //
  // `D-103` asked only "is exactly one lane `Active`", which was the whole
  // invariant at the time. `D-107` then let `Eligible` mean *may begin without
  // being selected*, and two lanes could believe they were permitted to work —
  // **the reading that let a turn be started, doubted and abandoned.**
  //
  // The Judge's ruling makes the legal states explicit, and there are exactly
  // two of them:
  //
  //   * A TURN IN PROGRESS — one `Active`, every other unfinished lane
  //     `Blocked` on that named run.
  //   * BETWEEN TURNS — no `Active`, every unfinished lane `Eligible`.
  //
  // **`Eligible` beside an `Active` is the illegal state**, and it is the one
  // that actually happened. So `no lane Active` is no longer a finding on its
  // own: it is the between-turns state, and what makes it wrong is a `Blocked`
  // row naming a run that is not happening.
  if (seen.length > 1) {
    findings.push(
      `${CLOSURE} §5: ${seen.length} lanes are \`Active\` — ${seen.join(", ")}. **Exactly one lane runs at a time**; two agents believing they may commit is the silent-overwrite condition \`CLAUDE.md\` opens with`,
    );
  }

  const inProgress = seen.length === 1;
  for (const { lane, states } of laneStates) {
    if (states.includes("Active")) continue;
    if (inProgress && states.includes("Eligible")) {
      findings.push(
        `${CLOSURE} §5: lane ${lane} is \`Eligible\` while lane ${seen[0]} is \`Active\`. **A lane is \`Eligible\` only when the lock is FREE** (\`D-108\`) — while a turn runs, every other unfinished lane is \`Blocked\` on it. This exact reading let a turn be started, doubted and abandoned`,
      );
    }
    if (!inProgress && states.includes("Blocked")) {
      findings.push(
        `${CLOSURE} §5: lane ${lane} is \`Blocked\` while NO lane is \`Active\`. **Blocked names an active run** (\`D-108\`); with the lock free there is no run to be blocked on, so this lane is \`Eligible\` or \`Done\``,
      );
    }
  }

  return {
    name: "lane-state",
    findings,
    detail: inProgress
      ? `${rows.length} lane row(s); turn in progress — Active: ${seen[0]}`
      : `${rows.length} lane row(s); between turns — lock free, no lane Active`,
  };
}
