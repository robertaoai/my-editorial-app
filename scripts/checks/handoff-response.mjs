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
//   * a malformed entry — missing `Kind`, `Status`, or `Lane A`
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
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "docs/handoff";

// `Acknowledged`, `Answered`, `Withdrawn` — anything else is not a disposition.
const DISPOSITIONS = /^(Acknowledged|Answered|Withdrawn)\b/i;

function field(text, name) {
  const m = new RegExp(`^-\\s*\\*\\*${name}:\\*\\*\\s*(.*)$`, "mi").exec(text);
  return m ? m[1].trim() : null;
}

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
  const entries = readdirSync(DIR).filter((f) => /^[BC]-\d+.*\.md$/.test(f));
  const findings = [];
  let open = 0;
  let answered = 0;
  let withdrawn = 0;

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
    const status = field(text, "Status");
    const response = field(text, "Lane A");

    if (!kind) findings.push(`${path}: no **Kind:** field — cannot route it`);
    if (!status) {
      findings.push(`${path}: no **Status:** field — cannot tell if it is live`);
      continue;
    }
    if (response === null) {
      findings.push(`${path}: no **Lane A:** field — nowhere to record a disposition`);
      continue;
    }

    const acknowledged = DISPOSITIONS.test(response);

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
      : `${entries.length} entr${entries.length === 1 ? "y" : "ies"}: ${open} open, ${answered} answered, ${withdrawn} withdrawn`;

  return { name: "handoff-response", findings, detail };
}
