// `C-14` check 11 — `D-94`: is the phase artifact manifest real?
//
// The Judge deferred Phase 1 because no artifact manifest existed. `§1`
// condition 1 of `V1-PHASE-CLOSURE.md` says the artifact list must exist and
// be checkable by `ls` — and the list itself was never written. **The
// condition was asserted and never evidenced**, which is
// `a_check_that_cannot_fail` inside the closure specification, one pass after
// that specification was written to prevent exactly this shape.
//
// This check reads the manifest's paths out of `§5A` and confirms each one
// exists. It is not vacuous: it reads real paths off disk and fails the moment
// one is renamed, moved, or deleted without the manifest following.
//
// WHAT IT FAILS ON:
//   * a manifest path that does not exist
//   * a manifest section present with no rows — an empty list would otherwise
//     satisfy "every path exists" trivially
//   * an EXCLUSION (`§5A.6`) whose path is present AND tracked, when the
//     exclusion reason says it was removed
//
// WHAT IT DELIBERATELY DOES NOT DO:
//   * It does not check the manifest is COMPLETE. Nothing can — completeness
//     is a judgment about what the phase was chartered to produce, which is
//     the Judge's call and the reason the role exists (`D-93`).
//   * It does not read `V1-ARTIFACT-INVENTORY.md`. The inventory is the
//     LIVING record and the manifest is a SNAPSHOT; comparing them would
//     report drift that is correct by design.
//
// Tracked files only, so it runs in CI.

import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const DOC = "docs/v1/V1-PHASE-CLOSURE.md";

// A manifest row is a markdown table row whose first cell is a backticked
// path. Section headings bound the manifest so prose elsewhere in the file
// cannot accidentally contribute rows.
const SECTION = /^#{2,4}\s+5A\.(\d)\b/;
const END = /^#{2,4}\s+5B\b/;
const ROW = /^\|\s*`([^`]+)`\s*\|/;

function tracked(path) {
  try {
    execSync(`git ls-files --error-unmatch "${path}"`, {
      stdio: ["ignore", "ignore", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

export function run() {
  if (!existsSync(DOC)) {
    return {
      name: "phase-manifest",
      findings: [`${DOC} absent — no manifest to verify`],
      detail: "closure document missing",
    };
  }

  const lines = readFileSync(DOC, "utf8").split("\n");
  const findings = [];

  // `sub` is the 5A.N subsection number; 6 is the exclusion list.
  let sub = null;
  const bySub = new Map();
  // path -> was it excluded as a REMOVAL rather than as out-of-scope
  const excludedAsRemoved = new Map();

  for (const line of lines) {
    if (END.test(line)) break;
    const head = SECTION.exec(line);
    if (head) {
      sub = Number(head[1]);
      if (!bySub.has(sub)) bySub.set(sub, []);
      continue;
    }
    if (sub === null) continue;
    const row = ROW.exec(line);
    if (row) {
      bySub.get(sub).push(row[1]);
      if (sub === 6) {
        excludedAsRemoved.set(row[1], /\bremoved\b/i.test(line.slice(row[0].length)));
      }
    }
  }

  if (bySub.size === 0) {
    return {
      name: "phase-manifest",
      findings: [
        `${DOC}: no §5A manifest sections found — the Judge's first deferral condition is unmet`,
      ],
      detail: "manifest absent",
    };
  }

  let listed = 0;
  let excluded = 0;

  for (const [n, paths] of [...bySub.entries()].sort((a, b) => a[0] - b[0])) {
    if (paths.length === 0) {
      findings.push(
        `${DOC} §5A.${n}: section present with no rows — an empty list satisfies "every path exists" trivially`,
      );
      continue;
    }

    // §5A.6 is the exclusion list. Its paths are asserted ABSENT or
    // out-of-scope, so presence is the failure there, not absence — and only
    // for the ones whose exclusion is a removal.
    // §5A.6 holds two KINDS of exclusion and only one is falsifiable:
    //   * a REMOVAL — "this was deleted" — is contradicted by the file being
    //     present and tracked, so it is checked;
    //   * a SCOPE exclusion — "this belongs to another phase or is an input,
    //     not a deliverable" — says nothing about presence. `ci.yml` exists,
    //     is tracked, and is correctly excluded as Lane C's artifact.
    // Flagging the second kind on presence would make the check report a
    // disagreement that is true by design.
    if (n === 6) {
      excluded += paths.length;
      for (const p of paths) {
        if (p.includes("*")) continue; // glob exclusions describe a class
        if (!(excludedAsRemoved.get(p) ?? false)) continue;
        if (existsSync(p) && tracked(p)) {
          findings.push(
            `${DOC} §5A.6: \`${p}\` is recorded as **Removed** but exists and is tracked — the exclusion and the repository disagree`,
          );
        }
      }
      continue;
    }

    listed += paths.length;
    for (const p of paths) {
      if (!existsSync(p)) {
        findings.push(
          `${DOC} §5A.${n}: \`${p}\` is in the manifest and does not exist — the manifest claims a file the phase did not deliver`,
        );
      } else if (!tracked(p)) {
        findings.push(
          `${DOC} §5A.${n}: \`${p}\` exists but is UNTRACKED — it cannot be part of a reproducible closure snapshot (\`B-005\`)`,
        );
      }
    }
  }

  return {
    name: "phase-manifest",
    findings,
    detail: `${listed} manifest path(s) verified, ${excluded} exclusion(s) declared`,
  };
}
