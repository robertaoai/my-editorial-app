// `C-14` check 13 — `D-101`, raised as `B-011`: response is not closure.
// HARDENED BY `D-102`, raised as `B-013` and `B-017`.
//
// Check 10 tests RECEIPT — did Lane A look at the entry. `B-011` showed that
// `D-100` then used "all answered" as evidence that a phase's condition 2 was
// met. **A reply is not a fix.** Nothing distinguished an answer from an
// applied correction, a verified correction, a superseding decision, or a
// deferral with an owner.
//
// This check adds the missing half WITHOUT making the healthy case red:
//
//   * It is SILENT while no phase claims closure. During a sprint a full
//     backlog of `Open` and `Answered` entries is normal, and a check that
//     fired on that would be ignored inside a week (`D-83`, `D-90`).
//   * It FIRES when the phase register marks a phase closed, and then every
//     entry RAISED AGAINST THAT PHASE must carry a terminal `Resolution` —
//     `Verified`, `Deferred` with a `Follow-up-Tier`, `Withdrawn`, or
//     `Superseded` with a `Superseded-By`.
//
// It also reports the derived closure matrix on every run, so the view exists
// without a second hand-maintained backlog file (`B-011` repair item 6).
//
// WHAT `D-102` CHANGED, AND WHY EACH CHANGE WAS EARNED:
//
//   * PHASE SCOPE (`B-013` item 6). The gate was global: any phase closing
//     required EVERY entry in the directory to be terminal, so a Phase 3 item
//     raised next month could fail Phase 1's boundary. The rule always said
//     "raised against it"; the check had no field to read that from. `Phase:`
//     is now mandatory and the gate is scoped to it.
//   * MALFORMED STATE IS REJECTED IMMEDIATELY (`B-017` item 6). Terminal
//     vocabulary, companion fields and commit shape are validated on every
//     run. Only the question "does an OPEN entry block closure" waits for a
//     closure claim. Invalid state used to accumulate silently until the Judge
//     boundary, which is the worst possible moment to discover it.
//   * `Verified-At-Commit` IS PROVEN, NOT ACCEPTED (`B-013` items 2 and 4).
//     Three entries read `pending — this pass`, and `pending` is not a commit;
//     the field was never validated at all. It must now be hexadecimal, and on
//     a full-history local run the object must actually exist.
//   * `Verified-By` IS AN ACTOR (`B-013` item 3, `B-017` items 3 and 4).
//     `B-011` asked for it, `D-101` adopted five fields and dropped this one,
//     and the template then defaulted it to `Acknowledged` — a receipt state
//     wearing the word "verified". A resolution written and verified by the
//     same side is not verification, and the check now says so.
//
// WHAT IT STILL CANNOT DO — stated, not buried:
//   * It cannot tell whether `Evidence` is TRUE. It can now prove the commit
//     exists; nothing re-runs the proof that was performed there. This is the
//     apparatus-wide arrival-not-correctness limit (`F5`, `C-22`).
//   * `Verified-By` is self-declared. The check can reject the answering lane
//     naming itself; it cannot confirm that the named actor did the work.
//     Separation is enforced in FORM, and remains procedural in SUBSTANCE.
//   * On a shallow CI checkout the commit's existence cannot be proven. The
//     check then reports a CLEARLY LABELLED limited result — it does not claim
//     existence was verified. Claiming it would be `probe_that_cannot_fail`.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { ENTRY_FILE, field, phaseSets } from "./handoff-fields.mjs";

const DIR = "docs/handoff";

const TERMINAL = new Set(["verified", "deferred", "withdrawn", "superseded"]);

// `B-013` repair 3, and the honest half of this mechanism.
//
// `D-101` derived the word `Verified` from a field the ANSWERING lane writes.
// `B-011` had asked for `Verified-By` precisely so that word would mean
// something; `D-101` adopted five fields and dropped that one. Ten entries then
// read `Verified` on Lane A's own say-so.
//
// Rather than weaken `Verified`, `D-102` adds the state that was actually true:
// `Applied` — the fix is in the tree and anchored to a commit, and NOBODY
// INDEPENDENT HAS CONFIRMED IT. It is deliberately NON-terminal, so it does not
// satisfy a phase-closure condition. Recording ten honest `Applied` rows costs
// a red condition; recording ten unearned `Verified` rows costs the meaning of
// the word.
const PROVISIONAL = new Set(["applied", "awaiting"]);

// A commit identifier, not "a string with no spaces in it". The previous test
// accepted `not-a-sha`; `B-017` item 5 demonstrated it.
const SHA = /^[0-9a-f]{7,40}$/i;

// The answering side cannot be the verifying side. `Acknowledged` is receipt.
const NOT_AN_INDEPENDENT_VERIFIER = /^(acknowledged|answered|lane a|claude code|self|same)\b/i;

/** Is history deep enough to prove a commit exists? A shallow clone is not. */
function historyIsFull() {
  try {
    return execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim() !== "true";
  } catch {
    return false;
  }
}

function commitExists(sha) {
  try {
    execFileSync("git", ["cat-file", "-e", `${sha}^{commit}`], {
      stdio: ["ignore", "ignore", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

export function run() {
  if (!existsSync(DIR)) {
    return { name: "closure-readiness", findings: [], detail: `${DIR} absent` };
  }

  const entries = readdirSync(DIR).filter((f) => ENTRY_FILE.test(f));
  const phases = phaseSets();
  const closed = phases ? phases.closed : new Set();
  const findings = [];
  const tally = new Map();
  const deep = historyIsFull();
  let proven = 0;

  for (const file of entries) {
    const path = join(DIR, file);
    const text = readFileSync(path, "utf8");
    const status = (field(text, "Status") ?? "").toLowerCase();
    const resolution = field(text, "Resolution");
    const phase = field(text, "Phase");

    const key = resolution ? resolution.split(/[\s—-]/)[0].toLowerCase() : status || "unknown";
    tally.set(key, (tally.get(key) ?? 0) + 1);

    // `B-017` item 4. An entry with no legible phase used to vanish from every
    // gate. It is now the loudest case, not the quietest — check 10 rejects the
    // malformed field, and this check refuses to let it pass unexamined.
    const phaseKnown = phase !== null && phases !== null && phases.seen.has(phase);
    const gated = phaseKnown && closed.has(phase);

    if (!resolution) {
      if (gated) {
        findings.push(
          `${path}: no **Resolution:** — phase ${phase} claims closure and this entry is only "${status || "unset"}". A reply is not a fix.`,
        );
      }
      continue;
    }

    // From here the entry CLAIMS a terminal state, so its form is checked on
    // every run regardless of whether any phase has closed.
    const kind = resolution.split(/[\s—-]/)[0].toLowerCase();

    if (PROVISIONAL.has(kind)) {
      // Provisional is a legitimate state, not a malformed one. It must still
      // say WHERE the change landed, and it does not close anything.
      if (!field(text, "Verified-At-Commit")) {
        findings.push(
          `${path}: **Resolution:** "${resolution}" with no **Verified-At-Commit:** — an applied change that names no commit cannot be re-checked`,
        );
      }
      if (gated) {
        findings.push(
          `${path}: **Resolution:** "${resolution}" — phase ${phase} claims closure, but applied is not verified. Independent confirmation, or an explicit Deferred with an owner.`,
        );
      }
      continue;
    }

    if (!TERMINAL.has(kind)) {
      findings.push(
        `${path}: **Resolution:** "${resolution}" is not one of Verified, Applied, Deferred, Withdrawn, Superseded`,
      );
      continue;
    }

    if (kind === "deferred" && !field(text, "Follow-up-Tier")) {
      findings.push(`${path}: Deferred with no **Follow-up-Tier:** — a deferral with no owner is a drop`);
    }
    if (kind === "superseded" && !field(text, "Superseded-By")) {
      findings.push(`${path}: Superseded with no **Superseded-By:** — nothing records what overtook it`);
    }
    if (kind === "verified") {
      if (!field(text, "Evidence")) {
        findings.push(`${path}: Verified with no **Evidence:** — a claim with nothing behind it`);
      }

      const by = field(text, "Verified-By");
      if (!by) {
        findings.push(
          `${path}: Verified with no **Verified-By:** — nothing records WHO verified it, so "Verified" is the answering lane's own word`,
        );
      } else if (NOT_AN_INDEPENDENT_VERIFIER.test(by)) {
        findings.push(
          `${path}: **Verified-By:** "${by}" is the answering side or a receipt state, not an independent verifier. Name the actor, or use \`Applied\` rather than \`Verified\`.`,
        );
      }

      const commit = field(text, "Verified-At-Commit");
      if (!commit) {
        findings.push(
          `${path}: Verified with no **Verified-At-Commit:** — nothing anchors the claim to a re-performable point`,
        );
      } else if (!SHA.test(commit)) {
        findings.push(
          `${path}: **Verified-At-Commit:** "${commit}" is not a commit identifier — 7–40 hex characters, not prose`,
        );
      } else if (deep) {
        if (commitExists(commit)) proven++;
        else findings.push(`${path}: **Verified-At-Commit:** ${commit} — no such commit in this repository`);
      }
    }
  }

  const matrix = [...tally.entries()].sort().map(([k, n]) => `${k} ${n}`).join(", ");
  const scope = closed.size
    ? `closure claimed for phase(s) ${[...closed].sort().join(", ")} — gating those entries`
    : "no phase claims closure — reporting only";
  const anchors = deep
    ? `${proven} verification commit(s) proven to exist`
    : "shallow history — commit existence NOT proven, form only";

  return {
    name: "closure-readiness",
    findings,
    detail: `${scope}; ${matrix}; ${anchors}`,
  };
}
