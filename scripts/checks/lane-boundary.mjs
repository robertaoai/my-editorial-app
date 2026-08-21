// `C-14` check 8 — `G69`: make `D-75` lane crossings visible.
//
// `D-82` recorded that the lane model enforces nothing: no `CODEOWNERS`, no
// path rule, no pre-commit hook, and CI runs after a commit lands. The only
// control was prose in the shared core, and four crossings by agents that had
// read that prose are on record.
//
// This check does not enforce the boundary — nothing here can, and `D-82` says
// why. It makes a crossing VISIBLE, which is the part that was missing.
//
// Built by Lane A under explicit Chief Editor authorization (`D-83`), which
// `D-82` names as one of only two ways the first control could arrive. Written
// by the lane it governs, which is itself worth knowing when reading it.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It detects the SHAPE of a crossing, never the PERMISSION for one. Three
//     of the four historical multi-lane commits were authorized at the time.
//     A finding means "say why", not "you did wrong".
//   * Attribution is not available (`D-77`: `agent-stats` returns 0 facts), so
//     the check cannot say WHICH agent crossed — only that one change spans
//     two lanes' surfaces.
//   * Paths outside the lane map are not lane-attributed at all.

import { execSync } from "node:child_process";

// `D-75` §5.14ak. Ownership, not authorship.
const LANES = [
  { lane: "A", label: "Claude Code", test: (p) => p.startsWith("docs/") },
  {
    lane: "B",
    label: "Codex",
    test: (p) =>
      /^(app|lib|components)\//.test(p) || p.startsWith("supabase/migrations/"),
  },
  {
    lane: "C",
    label: "Antigravity",
    test: (p) =>
      p.startsWith(".github/") || p.startsWith("scripts/") || p === ".gitattributes",
  },
];

// Surfaces no single lane owns. The three rule files are triple-edited by
// whichever lane records the decision (`D-54`), and build/config churn belongs
// to no lane. Counting either as a crossing would fire on every ordinary pass.
const isShared = (p) =>
  /^(CLAUDE|AGENTS)\.md$/.test(p) ||
  p.startsWith(".agents/") ||
  p.startsWith(".claude/") ||
  p.startsWith("__tests__/") ||
  /^(package\.json|bun\.lockb|package-lock\.json|tsconfig\.json|next\.config\.ts|eslint\.config\.mjs|postcss\.config\.mjs|\.gitignore|README\.md)$/.test(p);

function git(args) {
  return execSync(`git ${args}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
}

export function run() {
  let files = [];
  let mode;

  try {
    // Prefer what is about to be committed — a finding is then actionable
    // before the crossing is in history. Fall back to HEAD, which is what CI
    // sees on a clean checkout, so this check never silently skips.
    const dirty = git("diff --name-only HEAD").trim();
    const staged = git("diff --cached --name-only").trim();
    const pending = [...new Set([...dirty.split("\n"), ...staged.split("\n")])].filter(Boolean);

    if (pending.length > 0) {
      files = pending;
      mode = "working tree";
    } else {
      files = git('show --name-only --format="" HEAD').trim().split("\n").filter(Boolean);
      mode = "HEAD commit";
    }
  } catch {
    return {
      name: "lane-boundary",
      findings: [],
      skipped: true,
      detail: "SKIPPED — not a git worktree, or git unavailable",
    };
  }

  const byLane = new Map();
  for (const f of files) {
    if (isShared(f)) continue;
    const hit = LANES.find((l) => l.test(f));
    if (!hit) continue; // unmapped: not lane-attributed, see header
    if (!byLane.has(hit.lane)) byLane.set(hit.lane, []);
    byLane.get(hit.lane).push(f);
  }

  const findings = [];
  if (byLane.size > 1) {
    const named = [...byLane.keys()]
      .sort()
      .map((l) => `${l} (${LANES.find((x) => x.lane === l).label})`)
      .join(" + ");
    findings.push(
      `one change spans lanes ${named} — a crossing under \`D-75\`. Split it, or record the authorization in the register. This is not a verdict: three of four historical multi-lane commits were authorized.`,
    );
    for (const [lane, fs] of [...byLane.entries()].sort()) {
      findings.push(`  Lane ${lane}: ${fs.slice(0, 4).join(", ")}${fs.length > 4 ? ` …and ${fs.length - 4} more` : ""}`);
    }
  }

  const touched = [...byLane.keys()].sort().join("+") || "none";
  return {
    name: "lane-boundary",
    findings,
    detail: `${mode}: lane surfaces touched — ${touched}`,
  };
}
