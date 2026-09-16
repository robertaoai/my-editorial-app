// `C-14` check 18 — `B-097`, corrected by `B-112`: does a terminal entry
// conceal live work?
//
// `handoff-response` validates a `## Return record`'s FORM. It cannot see the
// other half: an entry can carry Resolution: Deferred/Verified/Withdrawn/
// Superseded, receive a later commit that adds real content to the same
// file, and never gain a return record at all. `B-071` was the first
// demonstrated case of that; `B-097` is B-071's own defect, raised against
// B-071 itself.
//
// THIS CHECK'S FIRST VERSION WAS WRONG, AND `B-112` PROVED IT WITH THE
// REPOSITORY'S OWN HISTORY, NOT ASSERTION.
//
// It flagged every commit after a terminal disposition alike, on the theory
// that a script cannot safely guess which edits are "substantive". Run
// against the live corpus it reported 12 entries. Independently verified,
// nine of them (`B-004`, `B-008`, `B-016`, `B-019`, `B-023`, `B-034`,
// `B-043`, `B-046`, `B-077`) were touched by exactly one commit
// (`0f43476`), a `D-205` bulk pass that added or normalized ONLY the
// `Verified-By:`/`Verified-At-Commit:` audit lines — no body content, no
// scope, nothing a Return record could meaningfully describe. A seventh,
// `B-017`, added a note whose own first sentence reads *"This does not
// reopen the parser repair."* Treating either as a concealed return would
// have meant fabricating a `Return-Trigger`/`Return-Act` for something that
// never happened — exactly the corrupted-record outcome `B-097` exists to
// prevent, one layer up.
//
// TWO CORRECTIONS, KEPT SEPARATE BECAUSE THEY ARE PROVEN TO DIFFERENT
// DEGREES:
//
//   1. AUDIT-ONLY COMMITS DO NOT COUNT, AND THIS IS MECHANICALLY PROVABLE.
//      Walking a file's history, a commit whose entire diff is confined to
//      `Verified-By:`/`Verified-At-Commit:` lines is skipped when looking
//      for "the last commit that actually touched this entry" — verified
//      against all nine live cases before being trusted. This is a
//      correctness fix, not a policy call.
//   2. WHETHER A SUBSTANTIVE POST-TERMINAL EDIT IS A RETURN OR A BOUNDED
//      "TERMINAL ANNOTATION" IS NOT MECHANICALLY PROVABLE YET. `B-017`,
//      `B-103` and `C-001`'s later edits are real body content, added after
//      an already-terminal disposition, that each explicitly say they do
//      not reopen it. `B-112` proposed a governed distinction between
//      "return" and "terminal annotation"; that distinction has not been
//      adopted as SOP, so this check cannot enforce it. Per `B-112`'s own
//      recommendation, remaining candidates are REPORTED, not FAILED —
//      `findings` stays empty and the names go in `detail` only. Reinstate
//      blocking once a checkable annotation convention exists to tell the
//      two apart; until then a permanently-red gate whose only escape is a
//      fabricated Return record is worse than a quiet report.
//
// WHAT IT STILL CANNOT DO — stated, not buried:
//   * It cannot tell a genuinely new B-071-style reopening from a bounded
//     correction by content alone — that is exactly the open question above.
//   * A prior Return record exempts a file from this run permanently, even
//     if a second, later, unreturned close-then-edit cycle occurs. Multiple
//     terminal/return cycles are not modelled. Noted, not fixed, under the
//     same time-pressure-vs-correctness trade this file already makes once
//     below for performance.
//   * Renames are not handled — `docs/handoff/` entries are one file per
//     item for their whole life (`D-100`), so this has never been needed.
//   * COST: roughly one `git diff` per historical step walked back, per
//     currently-terminal entry, not amortized across files. On a machine
//     where process spawn is slow (observed ~1.2s/spawn on this Windows
//     host), this check alone can take minutes. A single directory-wide
//     `git log --name-only` plus `git cat-file --batch` would cut this
//     sharply; not built here for the same reason stated when this file was
//     first written — a stateful stdin/stdout protocol parser is a bad trade
//     under review time pressure. This check SKIPS in CI, so nothing there
//     pays it.
//
// Needs per-file git history; SKIPS on a shallow clone, matching
// `source-sweep`/`docs-drift`/`graph-coverage`.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { ENTRY_FILE, field, stripFences } from "./handoff-fields.mjs";
import { TERMINAL } from "./closure-readiness.mjs";

const DIR = "docs/handoff";
const RETURN_HEADING = /^##\s+Return record\s*$/m;

// `git show <sha>:<path>` resolves `<path>` as a TREE path, which Git always
// stores forward-slash-separated — unlike a pathspec (used by `git log --`),
// it does not accept a backslash as a separator. `path.join(DIR, file)` on
// Windows produces one, so `contentAt()` failed on every call, was caught by
// `run()`'s own `catch { continue }`, and silently skipped every entry —
// this check reported 0 findings against a live repository that (at the time
// this comment was written) had at least one real, demonstrated case.
// Normalized once, here, rather than trusting every caller to remember.
const toGitPath = (p) => p.replace(/\\/g, "/");

// Only these two header lines are "audit", per `D-205`: an actor and a
// commit, never an explanation. A diff confined to them changes no fact
// about the entry's disposition or scope.
const AUDIT_FIELD_LINE = /^-\s*\*\*(Verified-By|Verified-At-Commit):\*\*/;

/**
 * `true` when every added/removed line in a unified diff's body is an
 * audit-field line (or blank). Pure — takes plain diff text, no git — so a
 * fixture can assert it directly against a synthetic diff, the same
 * separation `governed-intent.mjs`'s `classifyChangedPaths()` uses.
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

/**
 * The pure decision, apart from any git plumbing — so a fixture can assert
 * it directly against synthetic values instead of fabricating real commits.
 *
 * `priorResolution` is the Resolution value as of the commit BEFORE the
 * last commit that was not audit-only (`walkToLastSubstantive` finds that
 * commit) — not merely "one commit back", which is what `B-112` showed was
 * wrong.
 */
export function decideTerminalReturn({ currentResolution, priorResolution, hasReturnRecord, historyCount }) {
  const current = String(currentResolution || "").toLowerCase();
  if (!TERMINAL.has(current)) return { flag: false, reason: "not terminal" };
  if (hasReturnRecord) return { flag: false, reason: "has a Return record" };
  if (historyCount < 2) return { flag: false, reason: "born terminal, nothing after it" };
  const prior = String(priorResolution || "").toLowerCase();
  if (!TERMINAL.has(prior)) return { flag: false, reason: "this commit is what made it terminal" };
  return { flag: true, reason: "already terminal before the last substantive commit, and touched again with no Return record" };
}

/** Commit hashes touching `path`, newest first. Injectable `exec` so a
 * fixture can prove the argument shape without a real subprocess, matching
 * `docs-drift.mjs`'s `getChangedPaths()`. */
export function fileHistory(path, exec = execFileSync) {
  return exec("git", ["log", "--format=%H", "--", toGitPath(path)], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  })
    .trim()
    .split("\n")
    .filter(Boolean);
}

/** The file's content as of `sha`. Injectable for the same reason. */
export function contentAt(path, sha, exec = execFileSync) {
  return exec("git", ["show", `${sha}:${toGitPath(path)}`], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

/** The diff for `path` between two commits. Injectable for the same reason. */
export function diffAt(path, shaOld, shaNew, exec = execFileSync) {
  return exec("git", ["diff", shaOld, shaNew, "--", toGitPath(path)], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

/**
 * Walk `history` (newest first, length >= 2) past any leading run of
 * audit-only commits. Returns the index of the newest commit that is NOT
 * audit-only relative to its predecessor, or `history.length - 1` (the
 * oldest commit fetched) if every step so far was audit-only.
 *
 * `B-112`'s finding: comparing only `history[0]` vs `history[1]` reads a
 * `D-205` bulk audit-normalization commit as if it were the substantive
 * touch. This walks back until it finds a real one, or runs out of the
 * history this run fetched.
 */
export function walkToLastSubstantive(path, history, exec = execFileSync) {
  for (let i = 0; i < history.length - 1; i++) {
    const diff = diffAt(path, history[i + 1], history[i], exec);
    if (!isAuditOnlyDiff(diff)) return i;
  }
  return history.length - 1;
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
  let checked = 0;
  let cleared = 0;
  const candidates = [];

  for (const file of entries) {
    const path = join(DIR, file);
    const text = readFileSync(path, "utf8");
    const currentResolution = field(text, "Resolution");
    if (!currentResolution || !TERMINAL.has(currentResolution.toLowerCase())) continue;

    checked++;
    const hasReturnRecord = RETURN_HEADING.test(stripFences(text)); // an illustrative fence is not a live return

    let history;
    try {
      history = fileHistory(path);
    } catch {
      continue; // history unreadable for this one file — not a finding
    }
    if (history.length < 2) continue;

    let substantiveIdx;
    try {
      substantiveIdx = walkToLastSubstantive(path, history);
    } catch {
      continue; // a diff in the walk failed — not this check's job to guess past that
    }

    // Every step to the oldest fetched commit was audit-only: nothing
    // substantive has touched this file since it became terminal.
    if (substantiveIdx >= history.length - 1) {
      cleared++;
      continue;
    }

    let priorResolution = null;
    try {
      priorResolution = field(contentAt(path, history[substantiveIdx + 1]), "Resolution");
    } catch {
      continue; // the path did not exist at that commit — not this check's job
    }

    const { flag } = decideTerminalReturn({
      currentResolution,
      priorResolution,
      hasReturnRecord,
      historyCount: history.length,
    });

    if (flag) candidates.push(file);
    else cleared++;
  }

  // `B-112`, Row 1: this check cannot prove a candidate is a concealed
  // return rather than a bounded terminal annotation — that distinction is
  // not yet governed SOP. `findings` therefore stays empty (never fails the
  // suite); the candidates are named in `detail` for a human to classify,
  // the same way `lane-boundary` reports an unmapped path without failing
  // on it. Reinstate `findings` here once an annotation convention exists.
  const detail =
    checked === 0
      ? "no terminal entries to check"
      : `${checked} terminal entr${checked === 1 ? "y" : "ies"} checked, ${cleared} cleared (audit-only or returned), ${candidates.length} candidate(s) for human classification (report-only, B-112)${candidates.length ? `: ${candidates.join(", ")}` : ""}`;

  return { name: "terminal-return", findings: [], detail };
}
