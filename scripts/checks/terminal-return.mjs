// `C-14` check 18 — `B-097`: does a terminal entry conceal live work?
//
// `handoff-response` validates a `## Return record`'s FORM. It cannot see the
// other half: an entry can carry Resolution: Deferred/Verified/Withdrawn/
// Superseded, receive a later commit that adds real content to the same
// file, and never gain a return record at all — the header still reads
// terminal, the body has moved on, and every field-level check stays green.
// `B-071` was the first demonstrated case; `B-097` is B-071's own defect,
// raised against B-071 itself, still open as of this check's own first run.
//
// THE DEFINITION USED HERE, AND WHY IT IS THIS NARROW.
//
// "Substantive work after disposition" cannot be judged by a script — that
// is a semantic question and this apparatus checks form, not substance,
// everywhere else. What a script CAN prove: whether the CURRENT terminal
// Resolution was already in force as of the file's second-most-recent
// commit. If it was, at least one commit after the file was already
// terminal touched it again — that is a fact about the file's history, not
// an opinion about the content. If the current Resolution was set BY the
// most recent commit (Applied -> Verified, Open -> Deferred, the ordinary
// disposition act itself), that is not this pattern and is not flagged.
//
// This means the check treats ANY post-disposition edit as the finding,
// including a plain corrective footnote — not only new planning scope like
// B-071's Rounds 54-56. That is deliberate, not a missed narrowing: the
// alternative is guessing which edits are "substantive", and a check that
// guesses is a check whose green cannot be trusted. Use the Return record to
// say "yes, and here is why" rather than asking this check to agree.
//
// WHAT IT DOES NOT DO — stated, not buried:
//   * It cannot tell whether the post-disposition commit added real scope or
//     a one-line typo fix. Both fail alike. A false positive here costs one
//     Return record; a false negative costs a silent B-071.
//   * It reads `Resolution` only, not `Verified-By`/`Evidence` — it cannot
//     tell whether the terminal state itself was ever earned, only whether
//     it has been left alone since.
//   * Renames are not handled — `docs/handoff/` entries are one file per
//     item for their whole life (`D-100`), so this has never been needed.
//   * COST: two `git` subprocess spawns per currently-terminal entry (one
//     `log`, one `show`), not amortized across files. On a machine where
//     process spawn is slow (observed ~1.2s/spawn on this Windows host,
//     plausibly antivirus scanning each one — the same class `harness.mjs`
//     already documents for fixture retries), this check alone can take
//     minutes. A single directory-wide `git log --name-only` plus
//     `git cat-file --batch` would cut this to roughly two spawns total;
//     not built here because it trades a verified-correct, easily-audited
//     two-line-per-file design for a stateful stdin/stdout protocol parser,
//     under review time pressure that is a bad trade. Left as a known,
//     stated cost rather than a rushed rewrite — this check SKIPS in CI, so
//     nothing there pays it.
//
// Needs per-file git history; SKIPS on a shallow clone, matching
// `source-sweep`/`docs-drift`/`graph-coverage` (`B-097`'s own open question,
// answered the same way the other three already answer it).

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

/**
 * The pure decision, apart from any git plumbing — so a fixture can assert
 * it directly against synthetic values instead of fabricating real commits
 * (the same separation `governed-intent.mjs`'s `classifyChangedPaths()` and
 * `docs-drift.mjs`'s `getChangedPaths()` already use).
 *
 * `historyCount` is how many commits touch the file total; fewer than two
 * means there is nothing "after" to compare against, so it is never flagged
 * — an entry can be born terminal in its first commit.
 */
export function decideTerminalReturn({ currentResolution, priorResolution, hasReturnRecord, historyCount }) {
  const current = String(currentResolution || "").toLowerCase();
  if (!TERMINAL.has(current)) return { flag: false, reason: "not terminal" };
  if (hasReturnRecord) return { flag: false, reason: "has a Return record" };
  if (historyCount < 2) return { flag: false, reason: "born terminal, nothing after it" };
  const prior = String(priorResolution || "").toLowerCase();
  if (!TERMINAL.has(prior)) return { flag: false, reason: "this commit is what made it terminal" };
  return { flag: true, reason: "already terminal one commit back, and touched again with no Return record" };
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
  let checked = 0;
  let flagged = 0;

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

    let priorResolution = null;
    if (history.length >= 2) {
      try {
        priorResolution = field(contentAt(path, history[1]), "Resolution");
      } catch {
        continue; // the path did not exist at that commit — not this check's job
      }
    }

    const { flag, reason } = decideTerminalReturn({
      currentResolution,
      priorResolution,
      hasReturnRecord,
      historyCount: history.length,
    });

    if (flag) {
      flagged++;
      findings.push(
        `${path}: **Resolution: ${currentResolution}** was already set at ${history[1].slice(0, 7)}, and a later commit still touched this file with no **## Return record** (${reason}, \`B-097\`). Add a Return record before treating any of that later content as active work, or confirm it added nothing substantive.`,
      );
    }
  }

  return {
    name: "terminal-return",
    findings,
    detail: `${checked} terminal entr${checked === 1 ? "y" : "ies"} checked against history, ${flagged} carrying post-disposition content with no Return record`,
  };
}
