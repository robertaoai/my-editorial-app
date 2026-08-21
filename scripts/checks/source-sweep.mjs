// `C-14` check 9 — `G70`: did a governing document's change reach anything?
//
// `tier-sweep` is REGISTER-DRIVEN: it verifies that a decision arrived in a
// tier the register claims. Nothing checked the inverse — that a change in a
// governing document reached its derived tiers. The `docs/governance/` half of
// the portfolio is LIVING, not frozen: the Alpha Portfolio plan (Tier 1 under
// `D-74`) changed 2026-08-21, the traceability map 2026-08-20, the RACI matrix
// 2026-08-19. The highest tier in the hierarchy could move and no control
// noticed.
//
// This is the structural inverse of `G68`. That gap was "the sweep cannot see
// the Tier 1 document when a decision claims it". This is "the sweep never
// looks at the Tier 1 document at all".
//
// TWO SIGNALS:
//   1. FROZEN documents must not move. `CLAUDE.md` names three, and they are
//      pinned here by the commit that last touched them. A different SHA is a
//      hard finding — the frozen set outranks everything (`D-58`).
//   2. LIVING governing documents that changed AFTER the register last moved.
//      That is a heuristic, not proof: the remedy is to record a decision, and
//      "no propagation needed" is a perfectly good decision to record. The
//      point is that the judgement gets made and written down, which is
//      `D-54`'s "state the unaffected tier" discipline applied to the source
//      side.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It compares COMMIT ORDER, never content. It cannot tell whether the
//     propagation that happened was correct — the same arrival-not-correctness
//     limit `G65` records for the tier sweep.
//   * It needs per-file history, so it SKIPS on a shallow clone. CI checks out
//     at depth 1, so it does not run there. Making it run means `fetch-depth: 0`
//     in `.github/workflows/ci.yml`, which is **Lane C's** (`D-84`) — specified
//     here, not applied.

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";

// `CLAUDE.md`: "Never edit". Pinned to the commit that last touched each.
const FROZEN = [
  { path: "docs/PRD.md", sha: "53ace36" },
  { path: "docs/source/project-charter-v1.md", sha: "00d21cd" },
  { path: "supabase/migrations/0001_init.sql", sha: "53ace36" },
];

const GOVERNING_GLOBS = ["docs/source", "docs/governance"];

function git(args) {
  return execSync(`git ${args}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

export function run() {
  try {
    if (git("rev-parse --is-shallow-repository") === "true") {
      return {
        name: "source-sweep",
        findings: [],
        skipped: true,
        detail: "SKIPPED — shallow clone has no per-file history; needs fetch-depth: 0 (Lane C)",
      };
    }
  } catch {
    return { name: "source-sweep", findings: [], skipped: true, detail: "SKIPPED — git unavailable" };
  }

  const findings = [];

  // 1 — frozen documents must not have moved.
  for (const { path, sha } of FROZEN) {
    if (!existsSync(path)) {
      findings.push(`${path}: FROZEN document is missing`);
      continue;
    }
    const at = git(`log -1 --format=%h -- "${path}"`);
    if (at && at !== sha) {
      findings.push(
        `${path}: FROZEN document moved — pinned at ${sha}, now ${at}. Frozen documents outrank everything (\`D-58\`); this needs a decision, not a fix.`,
      );
    }
  }

  // 2 — governing documents that changed after the register last moved.
  const regTime = Number(git(`log -1 --format=%ct -- "${REGISTER}"`) || 0);
  const files = git(`ls-files ${GOVERNING_GLOBS.join(" ")}`)
    .split("\n")
    .filter((f) => f.endsWith(".md"));

  const stale = [];
  for (const f of files) {
    if (FROZEN.some((z) => z.path === f)) continue; // covered above
    const t = Number(git(`log -1 --format=%ct -- "${f}"`) || 0);
    if (t > regTime) stale.push({ f, at: git(`log -1 --format=%h -- "${f}"`) });
  }

  for (const { f, at } of stale) {
    findings.push(
      `${f} (${at}) changed after the register last moved — propagation unverified. Record a decision, even if the decision is that no tier is affected.`,
    );
  }

  return {
    name: "source-sweep",
    findings,
    detail: `${files.length} governing doc(s), ${FROZEN.length} frozen pinned; register at ${git(`log -1 --format=%h -- "${REGISTER}"`)}`,
  };
}
