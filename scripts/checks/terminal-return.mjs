// `C-14` check 18 — `B-097`, corrected by `B-112`, completed by `B-113`
// (Chief Editor Option A, 2026-09-16): does a CURRENTLY terminal entry
// conceal live work — including a second, later, unreturned episode that an
// older Return/annotation citation does not actually cover?
//
// `handoff-response` validates a `## Return record`'s FORM and (as of this
// pass) a `## Terminal annotation record`'s FORM. Neither can see whether a
// file's HISTORY actually matches what it now claims. This check walks that
// history to find where the file's CURRENT terminal episode began, then
// checks only what happened from there to HEAD.
//
// THE MODEL, IN ONE SENTENCE: a file enters a "terminal episode" the moment
// its Resolution becomes `Verified`/`Deferred`/`Withdrawn`/`Superseded`. This
// check finds the MOST RECENT such moment (`currentEpisodeStart`) — not the
// first ever — and requires every commit from there to HEAD to be either
// audit-only, or covered by a Return record (episode ends) or a Terminal
// annotation record (episode continues) whose own commit citation names
// that exact commit.
//
// WHY "MOST RECENT", NOT "EVERY EPISODE EVER": an earlier version of this
// check walked the file's ENTIRE history and flagged every terminal episode
// it ever passed through. Run against the live corpus, it flagged `B-001`
// for a `Verified` -> `Applied` -> `Verified` dip that happened on
// 2026-08-21 — weeks before `B-097` was even raised, immediately followed by
// nothing (the file was never touched again). Retroactively demanding an
// annotation for that is not "fixing the multi-cycle gap", it is punishing
// unrelated ancient history for existing. Scoping to the CURRENT episode
// still fixes `B-113`'s actual Row 4 finding — an old citation belongs to
// whichever episode it was written for, and a NEW episode starting later
// needs its own, which `currentEpisodeStart` is what makes computable — a
// stale record can no longer exempt a file forever, it can only exempt the
// episode it was actually written against.
//
// WHY `terminal-return` CAN BE BLOCKING AGAIN: `B-112` made it report-only
// because the check could not tell a genuine reopening from a bounded
// correction. The Terminal annotation record (drafted by `B-112`'s Row 3,
// adopted by the Chief Editor's Option A choice) is the governed vocabulary
// that removes the guess — a human names the act and asserts
// `No-Scope-Reopened: true`; the check only verifies the record's FORM and
// that its citation names the exact commit in question, which is exactly the
// "form, not substance" limit every other check in this apparatus already
// accepts.
//
// WHAT IT STILL CANNOT DO — stated, not buried:
//   * It cannot tell whether `No-Scope-Reopened: true` is TRUE. A human
//     asserting it wrongly still passes. Reading the entries is still a
//     person's job, the same limit `handoff-response` states for itself.
//   * A file whose CURRENT Resolution is not terminal is not checked at
//     all, even if it passed through a terminal state earlier and back out
//     without a Return record. That silent exit is real, arguably its own
//     defect class, and is explicitly out of scope here — this check
//     protects a live terminal header, not every historical transition.
//   * Renames are not handled — `docs/handoff/` entries are one file per
//     item for their whole life (`D-100`), so this has never been needed.
//   * COST: it still fetches the file's FULL history to locate
//     `currentEpisodeStart`, and diffs every step of it — one `git diff` per
//     historical step, per currently-terminal entry. On a machine where
//     process spawn is slow (observed ~1.2s/spawn on this Windows host),
//     this check can take several minutes. It SKIPS in CI, so nothing there
//     pays it; not optimized further under the same time-pressure-vs-
//     correctness trade this file already stated once.
//
// Needs per-file git history; SKIPS on a shallow clone, matching
// `source-sweep`/`docs-drift`/`graph-coverage`.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { ENTRY_FILE, field, stripFences } from "./handoff-fields.mjs";
import { TERMINAL } from "./closure-readiness.mjs";

const DIR = "docs/handoff";

// `git show <sha>:<path>` and `git diff`/`git log --` both resolve `<path>`
// differently underneath, but neither accepts a Windows backslash — Git
// always stores tree paths forward-slash-separated. `path.join(DIR, file)`
// on Windows produces one, so every plumbing call here normalizes first.
// (`B-112`: this exact gap silently zeroed the first version's output.)
const toGitPath = (p) => p.replace(/\\/g, "/");

// Only these two header lines are "audit", per `D-205`: an actor and a
// commit, never an explanation. A diff confined to them changes no fact
// about the entry's disposition or scope.
const AUDIT_FIELD_LINE = /^-\s*\*\*(Verified-By|Verified-At-Commit):\*\*/;

/**
 * `true` when every added/removed line in a unified diff's body is an
 * audit-field line (or blank). Pure — takes plain diff text, no git — so a
 * fixture can assert it directly against a synthetic diff.
 *
 * Diff metadata lines (`diff --git`, `index`, `---`, `+++`, `@@`) are
 * ignored; only real content lines (a single leading `+`/`-`, not `+++`/
 * `---`) are tested. An empty diff (no content lines at all) is NOT
 * audit-only — there is nothing to classify as audit, so it falls through
 * to "not proven audit-only" rather than being silently trusted.
 */
export function isAuditOnlyDiff(diffText) {
  let sawContentLine = false;
  for (const line of String(diffText).split("\n")) {
    if (/^(diff --git|index |---|\+\+\+|@@)/.test(line)) continue;
    if (!/^[+-]/.test(line)) continue; // context line
    sawContentLine = true;
    const body = line.slice(1).trim();
    if (body !== "" && !AUDIT_FIELD_LINE.test(body)) return false;
  }
  return sawContentLine;
}

const RECORD_HEADING_LINE = /^##\s+(Return record|Terminal annotation record)\s*$/;
const ANY_OTHER_HEADING_LINE = /^##[ \t]/;
const KNOWN_FIELD_LINE =
  /^-\s*\*\*(Previous-Resolution|Return-Trigger|Return-Act|Returned-At-Commit|Current-Resolution|Annotation-Type|Annotation-Act|No-Scope-Reopened|Annotated-At-Commit):\*\*/;
const ATTEMPTS_A_FIELD_LINE = /^-\s*\*\*/;

/**
 * `true` when a diff ADDS ONLY a complete `## Return record` and/or
 * `## Terminal annotation record` block — headings, their field lines, and
 * removes nothing. Pure — takes plain diff text, no git — same metadata-line
 * handling as `isAuditOnlyDiff`.
 *
 * A field VALUE MAY WRAP ONTO CONTINUATION LINES — this corpus's own
 * established style for a long `Annotation-Act`/`Return-Act` citation, the
 * same way every other multi-line field in this channel wraps. This function
 * does not re-validate field names or count them (`handoff-response`'s
 * `checkTerminalAnnotations`/`checkReturnRecord` already do, at the FORM
 * level); it only needs to recognize "this commit adds record content", so
 * once a record heading has been seen, any further added line is accepted
 * UNTIL a *different* `## ` heading appears — that is scope creep, not a
 * continuation, and rejects the whole diff.
 *
 * A line that DOES attempt a bullet field (`- **Name:**`) must use one of
 * the nine known field names, or the diff is rejected — unrelated content
 * dressed up as a field does not pass as a continuation. Plain prose that
 * makes no such attempt is accepted as continuing whatever field most
 * recently started; unrelated content that ALSO avoids that shape is a
 * residual, stated gap (see the module header's "WHAT IT STILL CANNOT DO"),
 * the same class of limit `handoff-response` already accepts for itself.
 *
 * WHY THIS EXISTS: citing a commit's own annotation is itself a NEW commit
 * touching an already-terminal file. Without this, satisfying one violation
 * with a Terminal annotation record creates a second violation — the commit
 * that added the record — in infinite regress. Demonstrated the first time
 * this mechanism was used in practice: adding six annotation records in one
 * commit made that commit fail against the six files it had just annotated,
 * and the initial fix (matching only single-line field values) still failed
 * on the first real multi-line `Annotation-Act`. A record-only addition is
 * the safe case this whole mechanism exists to enable, not a new instance
 * of the problem it is checking for.
 */
export function isRecordOnlyDiff(diffText) {
  let sawHeading = false;
  let sawContentLine = false;
  for (const line of String(diffText).split("\n")) {
    if (/^(diff --git|index |---|\+\+\+|@@)/.test(line)) continue; // same metadata skip as isAuditOnlyDiff
    if (!/^[+-]/.test(line)) continue; // context line
    if (/^-/.test(line)) return false; // a record-only commit adds; it does not remove
    sawContentLine = true;
    const body = line.slice(1).trim();
    if (body === "") continue; // blank line — fine anywhere
    if (RECORD_HEADING_LINE.test(body)) {
      sawHeading = true;
      continue;
    }
    if (ANY_OTHER_HEADING_LINE.test(body)) return false; // a different heading is scope creep, not a continuation
    if (!sawHeading) return false; // content before any record heading is not part of a record
    if (ATTEMPTS_A_FIELD_LINE.test(body) && !KNOWN_FIELD_LINE.test(body)) return false; // an unrecognized field name
    // else: a known field line, or plain-prose continuation of one
  }
  return sawContentLine && sawHeading;
}

/**
 * The Resolution value after applying `diffText`, given what it was before.
 * Pure — reads only the diff's ADDED lines, via the shared line-bounded
 * `field()` parser, so a placeholder or blank added line is correctly not a
 * value (same rule `handoff-fields.mjs` applies everywhere else).
 *
 * If the diff does not touch the `Resolution:` line at all, `priorResolution`
 * is returned unchanged — the common case for every non-disposition edit.
 */
export function resolutionAfterDiff(diffText, priorResolution) {
  const added = String(diffText)
    .split("\n")
    .filter((l) => /^\+/.test(l) && !/^\+\+\+/.test(l))
    .map((l) => l.slice(1))
    .join("\n");
  const next = field(added, "Resolution");
  return next !== null ? next : priorResolution;
}

/**
 * Every commit cited by a `Returned-At-Commit:` or `Annotated-At-Commit:`
 * line anywhere in `text` (fences stripped, so an illustrative example never
 * counts — the exact false positive `B-112` found in `B-097`'s own draft).
 * A file may carry several Terminal annotation records, one per historically
 * annotated commit; this collects all of them, not just the first — `field()`
 * alone would only see the first occurrence in the document.
 */
export function coveredCommits(text) {
  const real = stripFences(text);
  const out = new Set();
  for (const m of real.matchAll(/^-\s*\*\*(?:Returned-At-Commit|Annotated-At-Commit):\*\*[ \t]*(.*)$/gm)) {
    const v = m[1].trim();
    if (v && !/^(<.*>|[—–-]+|\?+|n\/a|tbd|pending.*)$/i.test(v)) out.add(v);
  }
  return out;
}

/**
 * The index of `steps` where the file's CURRENT (most recent) terminal
 * episode began — the newest commit whose resolution-after is terminal
 * while the one before it was not. `-1` if the file has never entered a
 * terminal episode. `steps` is `[{resolutionAfter}]` oldest first.
 *
 * DELIBERATELY THE MOST RECENT SUCH TRANSITION, NOT THE FIRST EVER. A file
 * can dip into a terminal state and back out long before this mechanism
 * existed (`B-001`: `Verified` -> `Applied` -> `Verified`, all in
 * 2026-08-21, weeks before `B-097` was raised) — re-litigating every such
 * ancient, unrelated fluctuation is not what "fix the multi-cycle gap"
 * means. Scoping to the CURRENT episode still fixes `B-113`'s actual
 * finding: an old Return/Terminal-annotation citation belongs to whichever
 * episode it was written for, and a NEW episode starting later needs its
 * own — this function is what makes "later" computable at all.
 */
export function currentEpisodeStart(steps) {
  let prior = null;
  let start = -1;
  for (let i = 0; i < steps.length; i++) {
    const wasTerminal = TERMINAL.has(String(prior || "").toLowerCase());
    const isTerminal = TERMINAL.has(String(steps[i].resolutionAfter || "").toLowerCase());
    if (!wasTerminal && isTerminal) start = i;
    prior = steps[i].resolutionAfter;
  }
  return start;
}

/**
 * Walk one file's history, chronologically (oldest first), across only its
 * CURRENT terminal episode (see `currentEpisodeStart`). `steps` is
 * `[{commit, resolutionAfter, isAuditOnly}]` in that order. `covered` is the
 * `coveredCommits()` set from the file's CURRENT content. Pure — no git —
 * so a fixture can assert it directly against a synthetic sequence.
 *
 * Returns the commit hashes that are violations: a commit inside the
 * current episode that is neither audit-only nor named by a Return/Terminal
 * annotation record's own commit citation.
 */
export function walkEpisodes(steps, covered) {
  const start = currentEpisodeStart(steps);
  if (start < 0) return [];
  const violations = [];
  for (let i = start + 1; i < steps.length; i++) {
    const step = steps[i];
    if (!step.isAuditOnly && !covered.has(step.commit)) violations.push(step.commit);
  }
  return violations;
}

/** Commit hashes touching `path`. `reverse: true` returns oldest first. */
export function fileHistory(path, { reverse = false, exec = execFileSync } = {}) {
  const args = ["log", "--format=%H"];
  if (reverse) args.push("--reverse");
  args.push("--", toGitPath(path));
  return exec("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] })
    .trim()
    .split("\n")
    .filter(Boolean);
}

/** The diff for `path` between two commits. Injectable for the same reason
 * `docs-drift.mjs`'s `getChangedPaths()` is — a fixture can prove the
 * argument shape without a real subprocess. */
export function diffAt(path, shaOld, shaNew, exec = execFileSync) {
  return exec("git", ["diff", shaOld, shaNew, "--", toGitPath(path)], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

function isShallow() {
  try {
    return (
      execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() === "true"
    );
  } catch {
    return null; // git unavailable
  }
}

export function run() {
  const shallow = isShallow();
  if (shallow === null) {
    return { name: "terminal-return", findings: [], skipped: true, detail: "SKIPPED — git unavailable" };
  }
  if (shallow) {
    return {
      name: "terminal-return",
      findings: [],
      skipped: true,
      detail: "SKIPPED — shallow clone has no per-file history; needs fetch-depth: 0 (Lane C)",
    };
  }
  if (!existsSync(DIR)) {
    return { name: "terminal-return", findings: [], detail: `${DIR} absent` };
  }

  const entries = readdirSync(DIR).filter((f) => ENTRY_FILE.test(f));
  const findings = [];
  let filesChecked = 0;

  for (const file of entries) {
    const path = join(DIR, file);
    const text = readFileSync(path, "utf8");

    // Scoped to files whose CURRENT Resolution is terminal — this check
    // protects a live terminal header, not every ancient fluctuation
    // through a terminal value on the way to somewhere else. `B-001`
    // (`Verified` -> `Applied` -> `Verified`, all in 2026-08-21, weeks
    // before `B-097` existed) is exactly the case this gate excludes; its
    // dip through `Applied` is unrelated history, not a live concealment.
    const currentResolution = field(text, "Resolution");
    if (!currentResolution || !TERMINAL.has(currentResolution.toLowerCase())) continue;

    let history;
    try {
      history = fileHistory(path, { reverse: true });
    } catch {
      continue; // history unreadable for this one file — not a finding
    }
    if (history.length < 2) continue; // born once, nothing "after" to walk

    const covered = coveredCommits(text);

    const steps = [];
    let priorResolution = null;
    let ok = true;
    for (let i = 0; i < history.length - 1; i++) {
      let diff;
      try {
        diff = diffAt(path, history[i], history[i + 1]);
      } catch {
        ok = false;
        break; // a diff in the walk failed — not this check's job to guess past that
      }
      const resolutionAfter = resolutionAfterDiff(diff, priorResolution);
      // A record-only addition (the act of citing a PAST commit's coverage)
      // is exempt for the same reason an audit-only edit is: neither is the
      // "substantive work resumed" case this whole check exists to catch.
      steps.push({
        commit: history[i + 1],
        resolutionAfter,
        isAuditOnly: isAuditOnlyDiff(diff) || isRecordOnlyDiff(diff),
      });
      priorResolution = resolutionAfter;
    }
    if (!ok) continue;

    filesChecked++;

    const violations = walkEpisodes(steps, covered);
    for (const commit of violations) {
      findings.push(
        `${path}: ${commit.slice(0, 7)} touched this file inside a terminal episode with no audit-only diff and no Return/Terminal-annotation record citing it (\`B-113\`). Add a \`## Terminal annotation record\` citing \`${commit}\` if the episode's terminal state was preserved, or a \`## Return record\` if it genuinely returned.`,
      );
    }
  }

  const violatingFiles = new Set(findings.map((f) => f.split(":")[0]));
  const detail =
    filesChecked === 0
      ? "no file has ever entered a terminal episode"
      : `${filesChecked} file(s) with at least one terminal episode walked in full; ${filesChecked - violatingFiles.size} clean, ${violatingFiles.size} with an uncovered step`;

  return { name: "terminal-return", findings, detail };
}
