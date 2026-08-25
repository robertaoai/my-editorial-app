// `C-14` check 2 — the `D-54` tier sweep.
//
// Caught `G58`: three tracking files were stale while the register claimed the
// decision had propagated. `D-54` requires a decision that creates, sequences or
// retires an artifact to land in every tier that owns it, in the same pass.
//
// Every decision section carries a "Tier applicability" table naming its tiers
// and marking each ✅ or "— unaffected". This check reads the author's own
// declaration and verifies it: for every ✅, at least one ID from the row's Item
// cell must actually appear in the mapped document.
//
// It checks the claim against the file. It cannot check that the text found
// there is correct — only that the propagation is not simply absent, which is
// the failure `G58` was.

import { readFileSync } from "node:fs";

const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";

// Tier column header → the document that tier denotes. Matched case-insensitively
// as a substring, because headers carry section suffixes (`Modular_PRD` §8).
const TIERS = [
  { match: "build spec", files: ["docs/v1/V1-BUILD-SPEC.md"] },
  { match: "inventory", files: ["docs/v1/V1-ARTIFACT-INVENTORY.md"] },
  { match: "modular_prd", files: ["docs/Modular_PRD.md"] },
  { match: "specs-verification", files: ["docs/specs/SPECS-VERIFICATION-APPARATUS.md"] },
  { match: "sprint plan", files: ["docs/journal/2026-08-16-sprint-plan.md"] },
  { match: "agent files", files: ["CLAUDE.md", "AGENTS.md", ".agents/rules/graphify.md"] },
  // `G92`, `D-118`. **Unmapped since this check was written**, and invisible
  // because the column only fails on a ✅ — every prior decision wrote
  // "— unaffected" there, which the sweep skips by design. The FIRST tick
  // reported the column as unknown rather than verifying it.
  //
  // It is a governed tracking file that decisions routinely claim to affect —
  // lane rows, boundary procedure, the artifact manifest, critic passes — so a
  // claim about it was exactly as checkable as any other and was checked by
  // nothing. Same shape as `B-045`, where `channel-docs` couples four documents
  // and this one is in neither set.
  { match: "phase closure", files: ["docs/v1/V1-PHASE-CLOSURE.md"] },
  // Tooling provenance sits deliberately outside the `D-29` tier stack, but a
  // decision can still declare it, so it must be mappable.
  { match: "tooling doc", files: ["docs/graph-fragments/README.md"] },
  // `G68`: Tier 1 under `D-74`, ABOVE `Modular_PRD`. It was unmapped, so a
  // column naming it was rejected as unknown rather than verified — meaning
  // propagation into the highest tier in the hierarchy was checked by nobody.
  {
    match: "alpha portfolio",
    files: ["docs/governance/alpha-portfolio-business-continuity-implementation-plan.md"],
  },
  // "Register" is the file being read; a ✅ there is true by construction.
  { match: "register", files: [] },
];

const cache = new Map();
function contents(path) {
  if (!cache.has(path)) {
    try {
      cache.set(path, readFileSync(path, "utf8"));
    } catch {
      cache.set(path, null);
    }
  }
  return cache.get(path);
}

export function run() {
  const findings = [];
  let text;

  try {
    text = readFileSync(REGISTER, "utf8");
  } catch {
    return { name: "tier-sweep", findings: [`${REGISTER}: missing`], detail: "not read" };
  }

  const lines = text.split("\n");
  let checked = 0;

  for (let i = 0; i < lines.length; i++) {
    if (!/^\|\s*Item\s*\|/i.test(lines[i])) continue;

    const headers = lines[i].split("|").slice(1, -1).map((h) => h.trim());
    if (!/^-+$/.test(lines[i + 1]?.split("|")[1]?.trim() ?? "")) continue;

    for (let j = i + 2; j < lines.length && lines[j].startsWith("|"); j++) {
      const cells = lines[j].split("|").slice(1, -1).map((cl) => cl.trim());
      if (cells.length !== headers.length) continue;

      const ids = [...cells[0].matchAll(/`([A-Z]+-?\d+[a-z]?)`/g)].map((m) => m[1]);
      if (ids.length === 0) continue;

      for (let k = 1; k < headers.length; k++) {
        if (!cells[k].includes("✅")) continue; // "— unaffected" is a valid, stated answer

        const header = headers[k].toLowerCase().replace(/`/g, "");
        const tier = TIERS.find((t) => header.includes(t.match));
        if (!tier) {
          findings.push(`row ${j + 1}: tier column "${headers[k]}" is not mapped to a document`);
          continue;
        }

        for (const file of tier.files) {
          const body = contents(file);
          if (body === null) {
            findings.push(`row ${j + 1}: ${file} is missing but marked ✅`);
            continue;
          }
          checked++;
          // `D-54` requires the DECISION to be traceable into the tier. When the
          // Item cell names one, demand that ID specifically — accepting any ID
          // in the cell lets a gap reference mask a decision that never
          // propagated, which is the exact shape of `G58`.
          const decision = ids.find((id) => /^D-\d+$/.test(id));
          const required = decision ? [decision] : ids;
          const present = required.some((id) => body.includes(id));
          if (!present) {
            findings.push(
              `row ${j + 1}: ${required.join("/")} marked ✅ for "${headers[k]}" but absent from ${file}`,
            );
          }
        }
      }
    }
  }

  return { name: "tier-sweep", findings, detail: `${checked} tier claims verified` };
}
