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

// Extracted so `LANES` and `A_SUB` cannot disagree about what build config is.
// Root `README.md` is Code's under `D-200`; `docs/README.md` is not this.
const isRootConfig = (p) =>
  /^(\.gitattributes|\.gitignore|package\.json|package-lock\.json|bun\.lockb|tsconfig\.json|eslint\.config\.mjs|next\.config\.ts|postcss\.config\.mjs|README\.md)$/.test(
    p,
  );

// `D-75` §5.14ak as corrected by `D-84` §5.14ar. Ownership, not authorship.
const LANES = [
  {
    lane: "A",
    label: "orchestration — Cowork + Code (`D-200`)",
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
      isRootConfig(p),
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

// `D-200`/`D-201`: LANE A IS TWO TOOLS WITH DIFFERENT SURFACES.
//
// One lane, one lock, one `Active` row — the tools serialize on Lane A's turn,
// so `lane-state` and the A/B/C letters are unchanged. What splits is the
// SURFACE: **strategy is Claude Cowork, implementation is Claude Code.**
//
// Until this table existed, a Cowork/Code crossing was invisible to this check
// AND to `.githooks/commit-msg`, which shares `classify` — a binding rule with
// no control, the shape this corpus keeps recording.
//
// EXACT-FILE EXCEPTIONS COME FIRST, because `D-200` says so and because they are
// precisely what a prefix map gets wrong: `.agents/rules/graphify.md` is a rule
// file inside a Code directory, and `docs/graph-fragments/*.json` is curated
// meaning inside a directory whose `*.js` tooling is Code's.
//
// This REPORTS the sub-crossing; it does not gate on one. Whether a Cowork/Code
// crossing needs `D-88`'s `Lane-Crossing:` trailer is the Judge's to decide —
// `D-88` predates the split — so `byLane` still keys on A/B/C and the gate's
// behaviour is deliberately unchanged here.
const A_SUB = [
  // — exact-file exceptions, before any directory rule —
  { sub: "A-cowork", test: (p) => p === ".agents/rules/graphify.md" },
  { sub: "A-cowork", test: (p) => /^docs\/graph-fragments\/.+\.json$/.test(p) },
  { sub: "A-code", test: (p) => /^docs\/graph-fragments\/.+\.js$/.test(p) },
  // — directory rules —
  {
    sub: "A-code",
    test: (p) =>
      p.startsWith("scripts/") ||
      p.startsWith(".githooks/") ||
      p.startsWith(".claude/") ||
      p.startsWith(".agents/") ||
      p.startsWith(".codex/") ||
      isRootConfig(p),
  },
  {
    sub: "A-cowork",
    test: (p) =>
      /^(CLAUDE|AGENTS)\.md$/.test(p) ||
      p.startsWith("docs/") ||
      p.startsWith(".github/"),
  },
];

/** Which Lane A tool owns this path, or null when it is not a Lane A path.
 *
 * `docs/handoff/` returns null: it is UNMAPPED under `D-90` and stays that way
 * under `D-200` — either tool writes responses there without crossing. The
 * guard is here rather than only in `classify()` because this function is
 * exported, and a caller asking about a handoff path directly would otherwise
 * be told "A-cowork". Caught by this split’s own assertion test.
 */
export function subOf(path) {
  if (path.startsWith("docs/handoff/")) return null;
  return A_SUB.find((s) => s.test(path))?.sub ?? null;
}

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
  // `bySub` is ADDITIVE. `.githooks/commit-msg` destructures `byLane` and
  // `label` only, so the gate's blocking behaviour is unchanged by the split.
  const bySub = new Map();
  for (const f of byLane.get("A") ?? []) {
    const s = subOf(f) ?? "A-unattributed";
    if (!bySub.has(s)) bySub.set(s, []);
    bySub.get(s).push(f);
  }

  return { byLane, unmapped, bySub, label: (l) => LANES.find((x) => x.lane === l)?.label ?? l };
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

  // Call the SHARED classifier rather than repeating it. The duplicate loop
  // that used to live here was a second copy of the map — exactly the drift this
  // apparatus exists to catch, sitting inside the apparatus.
  const { byLane, unmapped, bySub } = classify(files);

  const findings = [];

  // A Cowork/Code crossing inside Lane A. Reported, never gated (see `A_SUB`).
  if (bySub.size > 1) {
    findings.push(
      `one change spans BOTH Lane A tools — ${[...bySub.keys()].sort().join(" + ")} — a surface crossing under \`D-200\`. Strategy is Cowork, implementation is Code; work outside your surface is specified, never applied (\`D-56\`). This is visibility, not permission.`,
    );
    for (const [s, fs2] of [...bySub.entries()].sort()) {
      findings.push(
        `  ${s}: ${fs2.slice(0, 4).join(", ")}${fs2.length > 4 ? ` …and ${fs2.length - 4} more` : ""}`,
      );
    }
  }
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
  const subTail = bySub.size > 0 ? ` [${[...bySub.keys()].sort().join("+")}]` : "";
  return {
    name: "lane-boundary",
    findings,
    detail: `${mode}: lane surfaces touched — ${touched}${subTail}${tail}`,
  };
}
