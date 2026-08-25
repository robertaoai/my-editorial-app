// `C-14` check 10 — `D-90`: does a build lane's feedback get read?
//
// EXTENDED BY `D-92` to Lane C. As written for `D-90` the filename filter was
// `/^B-d+/`, so a `C-NNN` entry was not merely unchecked — it was INVISIBLE.
// The check would have reported "no entries" while Lane C's blocker sat in the
// directory, which is the exact failure this check exists to prevent, aimed at
// the one lane it did not cover. A control scoped to one lane is a control that
// cannot fail for the others.
//
// `D-75` required a handoff at every lane boundary and named no location for
// it. `docs/handoff/` is that location. This check closes the loop: without
// one, an entry can sit unread exactly as `G54` sat stale in §5.1 for two days
// while every check passed.
//
// WHAT IT FAILS ON:
//   * a malformed entry — missing or BLANK `Kind`, `Status`, `Lane A`, or
//     `Phase`; or a `Phase` naming no row in the register (`D-102`, `B-017`)
//   * `Status: Answered` with an empty `Lane A` line — a claim with nothing
//     behind it
//   * `Status: Open` with NO acknowledgement — the "feedback sits unread" case
//
// WHAT IT DELIBERATELY DOES NOT FAIL ON:
//   * an open entry that HAS been acknowledged. A queue is healthy. Failing on
//     one would make `bun run check` red whenever a lane has a pending request,
//     and a check that is red in the normal case is a check people stop
//     reading — the reasoning `D-83` used to make `lane-boundary` report a
//     crossing rather than forbid one.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It checks FORM, not substance. It cannot tell whether an answer is
//     correct, or whether a `Withdrawn` was justified — the same
//     arrival-not-correctness limit `G65` records for the tier sweep.
//   * Reading the entries is still a person's job.
//   * It cannot make a lane write an entry. A blocker never recorded is
//     invisible to it.
//
// `D-102`, raised as `B-017`: this check reported PASS on three entries whose
// `Kind` was blank, because its field pattern used `\s*` and stepped over the
// newline into the next metadata line. **The metadata parser now lives in
// `handoff-fields.mjs`** — line-bounded, one copy, shared with check 13. The
// same file also owns the phase register reader, which had been copied here
// and into check 13 verbatim.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CLOSURE_PATH as CLOSURE, ENTRY_FILE, field, fieldPresent, phaseSets } from "./handoff-fields.mjs";

const DIR = "docs/handoff";

// `C-19` (`D-95`, raised as `B-010`) — `Reopens-Phase:` enforcement.
//
// `D-93` added the field and deferred the check because no phase had closed,
// which would have made it vacuous. `B-010` showed that reasoning was already
// stale: the field can be WRONGLY used before any phase closes, and it was —
// `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never
// closed. **Reopening presupposes a closure.** The check is non-vacuous
// because the error it catches does not require a closed phase to exist.
//
// Reads `§5`'s phase register BY COLUMN NAME — see `handoff-fields.mjs`, which
// carries that reader and the three positional-parsing defects that produced
// it. Nothing about it is duplicated here any more.
// `Acknowledged`, `Answered`, `Withdrawn` — anything else is not a disposition.
const DISPOSITIONS = /^(Acknowledged|Answered|Withdrawn)\b/i;

export function run() {
  if (!existsSync(DIR)) {
    return {
      name: "handoff-response",
      findings: [],
      detail: `${DIR} absent — no channel, no entries`,
    };
  }

  // `B-` is Lane B (`D-90`), `C-` is Lane C (`D-92`). Lane A does not raise
  // entries here — it answers them; a Lane A concern goes in the register.
  const entries = readdirSync(DIR).filter((f) => ENTRY_FILE.test(f));
  const findings = [];
  const phases = phaseSets();
  let reopening = 0;
  let open = 0;
  let answered = 0;
  let withdrawn = 0;
  let unresolved = 0;
  let reports = 0;
  // `D-123`, raised as `B-053`: two turn reports for one run (`B-043`/`B-047`,
  // both committed at `d826b53` for `LB-S1-01`) read as two turns when nothing
  // named the run they shared. `Run:` is optional — legacy reports predate it —
  // but when two LIVE (non-superseded/withdrawn) turn reports both name the
  // SAME run, that is the exact duplicate this decision closed and a repeat is
  // a channel-check failure, not a second read of the corpus.
  const runsSeen = new Map(); // run -> path of the first live turn-report claiming it

  for (const file of entries) {
    const path = join(DIR, file);
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      findings.push(`${path}: unreadable`);
      continue;
    }

    const kind = field(text, "Kind");

    // `G84`, raised as `B-037` item 3. A TURN REPORT IS A RECORD, NOT A
    // CORRECTION. `D-105` requires one at every lane boundary and `D-106` files
    // it under the reporting lane's own phase — but there is nothing in it to
    // resolve, so it can never carry a terminal `Resolution`, and it was
    // therefore counted forever among the entries that "still carry NO
    // resolution". Four of them sat in that number. **A backlog figure that
    // permanently includes items which cannot leave it stops measuring the
    // backlog**, and the fix is a kind the checks can see, not a convention.
    //
    // It is EXCLUDED from the unresolved tally and REPORTED separately — never
    // dropped. `B-037` names both halves: a report must not inflate the
    // unresolved backlog, and must not disappear from boundary evidence either.
    const isTurnReport = kind !== null && /^turn-report\b/i.test(kind);
    if (isTurnReport) reports++;

    // `D-123`. A turn-report carries no `Resolution` by design, so a superseded
    // one is reclassified `Kind: finding` (the `B-043` precedent) rather than
    // marked superseded in place — which means every remaining `turn-report` is
    // live by construction, and two of them sharing a `Run:` is unconditionally
    // the duplicate this decision closed.
    if (isTurnReport) {
      const run = field(text, "Run");
      if (run) {
        const prior = runsSeen.get(run);
        if (prior) {
          findings.push(
            `${path}: **Run:** "${run}" duplicates the canonical turn report at ${prior} — one run gets one turn report (\`D-123\`). Reclassify the earlier or later one \`Kind: finding\`, \`Resolution: Superseded\`, \`Superseded-By:\` the report that stands.`,
          );
        } else {
          runsSeen.set(run, path);
        }
      }
    }

    // `D-108`: `0 open` reads as an empty backlog. It is not — most entries are
    // answered and UNRESOLVED, which is the state `D-101` separated out.
    if (!field(text, "Resolution") && !isTurnReport) unresolved++;
    const status = field(text, "Status");
    const response = field(text, "Lane A");
    const reopens = field(text, "Reopens-Phase");

    // `C-19`. A missing field is the normal case and never a finding.
    if (reopens !== null && reopens !== "") {
      const phase = reopens.trim().replace(/[^0-9]/g, "");
      if (!phase) {
        findings.push(`${path}: **Reopens-Phase:** "${reopens}" names no phase number`);
      } else if (phases === null) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no phase register found in ${CLOSURE}`);
      } else if (!phases.seen.has(phase)) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no such phase in the register`);
      } else if (!phases.closed.has(phase)) {
        findings.push(
          `${path}: **Reopens-Phase:** ${phase} — but phase ${phase} has never closed. Reopening presupposes a closure; a finding against an open phase is an ordinary entry and needs no field.`,
        );
      } else {
        reopening++;
      }
    }

    if (!kind) {
      findings.push(
        fieldPresent(text, "Kind")
          ? `${path}: **Kind:** is present but BLANK — cannot route it. (This is the case that used to read the next line and pass: \`B-017\`.)`
          : `${path}: no **Kind:** field — cannot route it`,
      );
    }

    // `B-017` repair 3. Phase-scoped closure gating is only as good as the
    // field it scopes by. A missing or unknown `Phase` used to remove the
    // entry from every gate SILENTLY, so a real blocker could disappear from
    // the phase it blocks. It fails here, immediately — not at the boundary.
    const phaseVal = field(text, "Phase");
    if (!phaseVal) {
      findings.push(
        `${path}: no **Phase:** value — closure gating is phase-scoped, and an entry with no phase blocks nothing and is checked by nothing`,
      );
    } else if (phases === null) {
      findings.push(`${path}: **Phase:** ${phaseVal} — no phase register found in ${CLOSURE}`);
    } else if (!phases.seen.has(phaseVal.replace(/[^0-9]/g, ""))) {
      findings.push(`${path}: **Phase:** "${phaseVal}" — no such phase in the register`);
    }
    if (!status) {
      findings.push(`${path}: no **Status:** field — cannot tell if it is live`);
      continue;
    }

    // `G83`, raised as `B-037`. THIS BRANCH USED TO `continue` BEFORE ANY
    // COUNTER RAN. So an entry with a blank `Lane A` — which is precisely the
    // "feedback sitting unread" case this check exists for — was counted in no
    // bucket at all, and the detail line read `0 open` with FOUR unread entries
    // in the directory. **The one line a human reads was wrong in the direction
    // that hides work**, and `closure-readiness` said `open 4` in the same run.
    // Two checks disagreeing about the same directory is how the defect
    // surfaced; nothing in either check compares them.
    //
    // It also misdescribed the file. `- **Lane A:**` was PRESENT and blank, and
    // the message said the field did not exist — `fieldPresent()` was written
    // for exactly this distinction (`D-102`) and was used for `Kind` and not
    // here. A malformed file and an unfinished entry need different messages
    // because they need different repairs.
    if (response === null) {
      if (/^Open\b/i.test(status)) open++;
      else if (/^Answered\b/i.test(status)) answered++;
      else if (/^Withdrawn\b/i.test(status)) withdrawn++;

      findings.push(
        fieldPresent(text, "Lane A")
          ? `${path}: **Lane A:** is present but BLANK — ${status} with no disposition. Add \`Acknowledged\` at minimum; answering can wait, seeing it cannot.`
          : `${path}: no **Lane A:** field — nowhere to record a disposition`,
      );
      continue;
    }

    // Dispositions are routinely written bold — `**Acknowledged ...**`. The
    // marker is emphasis, not content, so it is stripped before the test.
    const acknowledged = DISPOSITIONS.test(response.replace(/^[*_\s]+/, ""));

    if (/^Open\b/i.test(status)) {
      open++;
      if (!acknowledged) {
        findings.push(
          `${path}: Open with no Lane A disposition — feedback is sitting unread. Add \`Acknowledged\` at minimum; answering can wait, seeing it cannot.`,
        );
      }
    } else if (/^Answered\b/i.test(status)) {
      answered++;
      if (!response) {
        findings.push(`${path}: Status is Answered but the **Lane A:** line is empty`);
      }
    } else if (/^Withdrawn\b/i.test(status)) {
      withdrawn++;
      if (!response) {
        findings.push(
          `${path}: Withdrawn with no reason — a withdrawal with nothing behind it is not a disposition`,
        );
      }
    } else {
      findings.push(`${path}: Status "${status}" is not Open, Answered, or Withdrawn`);
    }
  }

  const detail =
    entries.length === 0
      ? "channel installed, no entries yet"
      : `${entries.length} entr${entries.length === 1 ? "y" : "ies"}: ${open} open, ${answered} answered, ${withdrawn} withdrawn; ${unresolved} still carry NO resolution${reports ? `; ${reports} turn report(s) excluded from that count (G84)` : ""}${reopening ? `, ${reopening} reopening a closed phase` : ""}`;

  return { name: "handoff-response", findings, detail };
}
