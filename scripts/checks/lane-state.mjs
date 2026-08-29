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
  // **`D-156` supersedes `D-108`'s reading of `Eligible`** (`G110`). `B-033`
  // carried two renderings of one clarification and `D-108` adopted the wrong
  // one, making `Eligible` a POST-RELEASE state for every lane at once. It is
  // a NOMINATION state for exactly one:
  //
  //   * `Active`   — exactly one, ALWAYS. Lane A holds it by default, because
  //                  orchestration and governance cannot otherwise proceed.
  //   * `Eligible` — at most ONE: the nominated next holder, offered the lock
  //                  but not yet executing. Legal beside an `Active` lane —
  //                  that pairing IS the handover offer.
  //   * `Blocked`  — not selected, because another lane holds `Active` or
  //                  `Eligible`.
  //
  // Three inversions against `D-108`, each deliberate: zero `Active` now
  // fails, `Eligible` beside `Active` no longer fails, and a second `Eligible`
  // newly fails. `D-108`'s invariant survives — one lane commits, and a lane
  // is never permitted to work merely by not being blocked.
  if (seen.length > 1) {
    findings.push(
      `${CLOSURE} §5: ${seen.length} lanes are \`Active\` — ${seen.join(", ")}. **Exactly one lane runs at a time**; two agents believing they may commit is the silent-overwrite condition \`CLAUDE.md\` opens with`,
    );
  }

  if (seen.length === 0) {
    findings.push(
      `${CLOSURE} §5: NO lane is \`Active\`. **Exactly one lane always holds the lock** (\`D-156\`) — there is no between-turns gap to rest in, and **Lane A holds \`Active\` by default** when no handover names a successor, because orchestration and governance cannot otherwise proceed`,
    );
  }

  const eligible = laneStates
    .filter(({ states }) => states.includes("Eligible"))
    .map(({ lane }) => lane);

  if (eligible.length > 1) {
    findings.push(
      `${CLOSURE} §5: ${eligible.length} lanes are \`Eligible\` — ${eligible.join(", ")}. **\`Eligible\` is the SELECTION step and names at most ONE lane** (\`D-156\`); several at once names no successor at all, which is the gap \`D-155\` fell into`,
    );
  }

  const inProgress = seen.length === 1;

  return {
    name: "lane-state",
    findings,
    detail: inProgress
      ? `${rows.length} lane row(s); Active: ${seen[0]}${eligible.length ? `; Eligible (nominated): ${eligible[0]}` : "; no successor nominated"}`
      : `${rows.length} lane row(s); NO lane Active — illegal under D-156`,
  };
}
