// `C-14` check 8 — `G69`: make `D-75` lane crossings visible.
//
// `D-82` recorded that the lane model enforces nothing: no `CODEOWNERS`, no
// path rule, no pre-commit hook, and CI runs after a commit lands. The only
// control is prose in the shared core. This check does not enforce the
// boundary — it makes a crossing VISIBLE, which is the part that was missing.
//
// LANE MAP CORRECTED BY `D-84`. The original map put `scripts/` and
// `.gitattributes` in Lane C. They are **orchestration, and orchestration is
// Lane A** — Lane A writes every dependency *before* Lane C builds a workflow
// against it. Lane C owns the GitHub Action files and nothing else.
//
// That correction re-characterised history: two commits the register cited as
// crossings — `24b39fb` and `0e3705c` — touched only Lane A surfaces and were
// never crossings at all. See `D-84`.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It detects the SHAPE of a crossing, never the PERMISSION for one. A
//     finding means "say why", not "you did wrong".
//   * Attribution is unavailable (`D-77`: `agent-stats` returns 0 facts), so it
//     cannot say WHICH agent crossed — only that one change spans two lanes.
//   * Paths outside the lane map are not lane-attributed at all.

import { execSync } from "node:child_process";

const isWorkflow = (p) => p.startsWith(".github/workflows/");

// `D-75` §5.14ak as corrected by `D-84` §5.14ar. Ownership, not authorship.
const LANES = [
  {
    lane: "A",
    label: "Claude Code — orchestration",
    test: (p) =>
      // `docs/handoff/` is deliberately UNMAPPED (`D-90`): Lane B raises
      // entries there and Lane A answers them, so attributing it to either
      // side would make the other a crossing on every ordinary use.
      (p.startsWith("docs/") && !p.startsWith("docs/handoff/")) ||
      p.startsWith("scripts/") ||
      p.startsWith(".claude/") ||
      p.startsWith(".agents/") ||
      p.startsWith(".codex/") ||
      p.startsWith(".githooks/") ||
      // `.github/` minus workflows — `CODEOWNERS`, templates — is Lane A's.
      (p.startsWith(".github/") && !isWorkflow(p)) ||
      /^(CLAUDE|AGENTS)\.md$/.test(p) ||
      /^(\.gitattributes|\.gitignore|package\.json|package-lock\.json|bun\.lockb|tsconfig\.json|eslint\.config\.mjs|next\.config\.ts|postcss\.config\.mjs|README\.md)$/.test(p),
  },
  {
    lane: "B",
    label: "Codex — application",
    test: (p) =>
      /^(app|lib|components)\//.test(p) ||
      p.startsWith("supabase/") ||
      p.startsWith("__tests__/"),
  },
  { lane: "C", label: "Antigravity — GitHub Actions", test: isWorkflow },
];

// Nothing is "shared" under `D-84`: every orchestration surface belongs to
// Lane A, so a path either maps to one lane or is unmapped. The previous
// shared-list existed only because the old map left build config unattributed.

function git(args) {
  return execSync(`git ${args}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
}

// Exported so `.githooks/commit-msg` classifies with the SAME map (`D-88`).
// A hook carrying its own copy would drift from the check silently, which is
// the defect this whole apparatus exists to catch.
export function classify(files) {
  const byLane = new Map();
  const unmapped = [];
  for (const f of files) {
    const hit = LANES.find((l) => l.test(f));
    if (!hit) {
      unmapped.push(f);
      continue;
    }
    if (!byLane.has(hit.lane)) byLane.set(hit.lane, []);
    byLane.get(hit.lane).push(f);
  }
  return { byLane, unmapped, label: (l) => LANES.find((x) => x.lane === l)?.label ?? l };
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
  const unmapped = [];
  for (const f of files) {
    const hit = LANES.find((l) => l.test(f));
    if (!hit) {
      unmapped.push(f);
      continue;
    }
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
      `one change spans lanes ${named} — a crossing under \`D-75\`. Split it, or record the authorization in the register. This is not a verdict: most historical multi-lane commits were authorized at the time.`,
    );
    for (const [lane, fs] of [...byLane.entries()].sort()) {
      findings.push(
        `  Lane ${lane}: ${fs.slice(0, 4).join(", ")}${fs.length > 4 ? ` …and ${fs.length - 4} more` : ""}`,
      );
    }
  }

  const touched = [...byLane.keys()].sort().join("+") || "none";
  const tail = unmapped.length > 0 ? `; unmapped: ${unmapped.slice(0, 3).join(", ")}` : "";
  return {
    name: "lane-boundary",
    findings,
    detail: `${mode}: lane surfaces touched — ${touched}${tail}`,
  };
}
