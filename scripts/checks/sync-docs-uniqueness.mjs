// `C-14` check 14 — `D-102`, raised as `B-014` and corrected by `B-018`.
//
// WHAT IT GUARDS. `B-005` removed `.agents/skills/sync-docs/SKILL.md` as a
// divergent duplicate of the tracked `.claude/skills/sync-docs/SKILL.md`. After
// `D-101` the same path existed again, untracked, and was being offered as the
// available `sync-docs` skill — carrying the same defect `B-005` removed: a
// "shared-core triple" reading `AGENTS.md`, `AGENTS.md`, `graphify.md`, which
// instructs an agent to propagate to two files and omit `CLAUDE.md` entirely.
//
// The failure chain is what makes this worth a check rather than a deletion:
// the file is untracked AND outside `docs/`, so `graph-coverage` and
// `source-sweep` cannot see it. **The repository passes every governed check
// while an active procedure instructs an incomplete propagation.**
//
// THE FIRST VERSION OF THIS CHECK WAS ITSELF A FALSE GREEN (`B-018`), and the
// three defects are worth naming because each is a different way to be green
// for no reason:
//
//   1. It shelled out to Unix `grep`. On this Windows repository the command
//      prints `'grep' is not recognized`, the `catch` swallowed it, and the
//      check reported PASS. **Discovery failing was indistinguishable from
//      discovering nothing.**
//   2. Its detail line said `1 canonical skill found` for EVERY count that was
//      not greater than one — including ZERO. Deleting the canonical skill
//      would have been reported as the healthy state.
//   3. It tested only for DUPLICATES. It never asserted that the canonical
//      procedure exists at all, which is the thing the repository actually
//      depends on.
//
// So: discovery is pure JavaScript over `git ls-files` plus a filesystem walk
// that covers untracked files; separators are normalised before comparison;
// and zero, wrong-path, and duplicate are three DIFFERENT failures.
//
// Runs in CI. `git ls-files -o` needs no history, only a work tree.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

// The one procedure. Anything else answering to this name is a duplicate.
const CANONICAL = ".claude/skills/sync-docs/SKILL.md";

// Where an agent-skill file can legitimately live in this repository. Named
// rather than inferred, so "we did not look there" is visible in the output —
// `B-018` repair 4.
const SKILL_ROOTS = [".claude", ".agents", ".codex", ".github"];

const TARGET = /(^|\/)sync-docs\/SKILL\.md$/;

const norm = (p) => p.replace(/\\/g, "/").replace(/^\.\//, "");

/** Tracked AND untracked paths, from git. Throws rather than returning empty. */
function fromGit() {
  const out = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  return out.split("\n").map(norm).filter(Boolean);
}

/** Filesystem walk — catches anything git is configured to ignore entirely. */
function walk(dir, acc) {
  let items;
  try {
    items = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of items) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile()) acc.push(norm(p));
  }
  return acc;
}

export function run() {
  const findings = [];
  let paths;

  // `B-018` defect 1: discovery failing must NOT look like discovering nothing.
  try {
    paths = fromGit();
  } catch (e) {
    return {
      name: "sync-docs-unique",
      findings: [`could not enumerate repository files: ${e.message.split("\n")[0]} — uniqueness NOT established`],
      detail: "discovery failed — this is a failure, not a pass",
    };
  }

  for (const root of SKILL_ROOTS) {
    if (existsSync(root)) walk(root, paths);
  }

  // `existsSync` is not belt-and-braces here. `git ls-files --cached` reports
  // the INDEX, so a deleted-but-still-tracked canonical file was reported
  // present and this check passed — caught by its own fixture 10, which is the
  // whole reason `B-018` demanded fixtures before the check is believed.
  const matches = [...new Set(paths.filter((p) => TARGET.test(p)))].filter((p) => existsSync(p)).sort();
  const canonical = matches.filter((p) => p === CANONICAL);
  const duplicates = matches.filter((p) => p !== CANONICAL);

  if (canonical.length === 0) {
    findings.push(
      `the canonical procedure ${CANONICAL} does not exist — \`sync-docs\` is the \`D-54\` propagation runbook and nothing else replaces it`,
    );
  }
  for (const d of duplicates) {
    findings.push(
      `duplicate sync-docs procedure at ${d} — two independently editable copies of one runbook is the drift mechanism \`B-005\` removed and \`B-014\` found again`,
    );
  }

  // The recurrence carried a wrong shared-core triple, and that — not the file
  // count — is what actually misleads an agent. Cheap to assert; catches a
  // duplicate that gets past the path rules by living somewhere unforeseen.
  for (const p of canonical) {
    let text = "";
    try {
      text = readFileSync(p, "utf8");
    } catch {
      findings.push(`${p}: unreadable`);
      continue;
    }
    if (!/CLAUDE\.md/.test(text)) {
      findings.push(
        `${p}: the shared-core triple omits \`CLAUDE.md\` — this is the exact \`B-005\` defect: propagate to two files, silently skip the third`,
      );
    }
  }

  const detail =
    canonical.length === 1 && duplicates.length === 0
      ? `canonical ${CANONICAL}; no duplicates across ${SKILL_ROOTS.join(", ")}`
      : `${canonical.length} canonical, ${duplicates.length} duplicate(s): ${matches.join(", ") || "none found"}`;

  return { name: "sync-docs-unique", findings, detail };
}
