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
//
// Two table SHAPES carry this same declaration (`D-252`'s own negative test
// found it): `Item | <tier columns...>` (rows are decisions/entries, columns
// are tiers) and `Tier | Disposition`/`Tier | Applicability` (rows ARE tiers,
// one disposition column). Before this fix, only the `Item` shape was parsed —
// 66 of 145+66 register tables used the `Tier | Disposition`/`Applicability`
// shape and were never read by this check at all: their ✅ claims passed by
// never being asked. This is the extend-the-parser fix, not a retroactive
// rewrite of those 66 tables — `checkTierRows` below reads the shape as
// written.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";

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
  // `D-134`, `B-040` §8: named as required tiers for `C-32`'s retention
  // policy but never mappable before — a claim about either was checked by
  // nothing, same shape as `G92`'s Phase-closure gap one row up.
  { match: "business case", files: ["docs/source/business-case.md"] },
  { match: "blueprint", files: ["docs/source/blueprint.md"] },
  // "Register" is the file being read; a ✅ there is true by construction.
  { match: "register", files: [] },
];

// Bare filenames the `Tier | Disposition`/`Applicability` rows sometimes cite
// without their directory (the `Item`-table columns above always use a short
// human label instead, so this is a Shape-2-only gap). Extend rather than
// guess: only names actually seen unresolved in a live register row.
const BARE_FILE_ALIASES = {
  "V1-BUILD-SPEC.md": "docs/v1/V1-BUILD-SPEC.md",
  "FN-GATES-01-05.md": "docs/fn-specs/FN-GATES-01-05.md",
  "raci-involvement-matrix.md": "docs/governance/raci-involvement-matrix.md",
  "factory-route-operation-crosswalk.md": "docs/governance/factory-route-operation-crosswalk.md",
  "requirements-traceability-map.md": "docs/governance/requirements-traceability-map.md",
};

// A `Tier | Disposition` row can name a concept that spans many files, a
// directory, or a non-text artifact (the curated graph) rather than one
// checkable document — same shape as "register" below: stated, not
// independently text-verified, rather than forced into a false single-file
// mapping or left to fail as "unmapped".
const UNVERIFIABLE_LABEL = /channel docs|handoff entries|graphify|graph fragments|graph docs|^\*{0,2}work packets\*{0,2}$/i;

// A bare `docs/handoff/B-NNN` (or `C-NNN`) citation names the entry by ID,
// not its full slugged filename. Resolved by prefix against the directory
// rather than guessed, so a renamed slug cannot silently stop matching.
function resolveHandoffEntry(candidate) {
  const m = /^docs\/handoff\/([BC]-\d+)$/.exec(candidate);
  if (!m) return null;
  const hit = readdirSync("docs/handoff").find(
    (f) => f.startsWith(`${m[1]}-`) && f.endsWith(".md"),
  );
  return hit ? `docs/handoff/${hit}` : null;
}

// Fallback for a `Tier | Disposition`/`Applicability` row whose label is not
// one of the known short tier names above: read it as one or more literal
// repository paths instead of guessing a new synonym. A bare filename after
// a resolved path inherits that path's directory (`` `V1-SM05.md`, `V1-SM06.md` ``).
// A directory-only label (`` `docs/v1/work-packets/` ``) resolves as
// verifiably PRESENT but has no text to search — same trivial-pass shape as
// `UNVERIFIABLE_LABEL`, not "unmapped": the distinction that matters here is
// arrival-on-disk, not text content.
function resolveByPath(label) {
  if (UNVERIFIABLE_LABEL.test(label)) return { match: label, files: [] };
  if (/^\*{0,2}storyboard\b/i.test(label.trim())) {
    return { match: label, files: ["docs/journal/2026-08-18-storyboard-business-and-digital-twin.md"] };
  }
  const spans = [...label.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const files = [];
  let lastDir = null;
  let sawAny = false;
  for (let raw of spans.length ? spans : [label.replace(/\*\*/g, "").trim()]) {
    const span = raw.split(/\s+§/)[0].trim(); // drop a trailing section reference
    let candidate = BARE_FILE_ALIASES[span] ?? span;
    if (!existsSync(candidate) && !candidate.includes("/") && lastDir) {
      candidate = `${lastDir}/${candidate}`;
    }
    if (!existsSync(candidate)) candidate = resolveHandoffEntry(candidate) ?? candidate;
    if (!existsSync(candidate)) continue;
    sawAny = true;
    if (statSync(candidate).isDirectory()) continue; // arrival verified; no ID text to search
    files.push(candidate);
    lastDir = candidate.slice(0, candidate.lastIndexOf("/"));
  }
  return sawAny ? { match: label, files } : null;
}

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

// Shared by both table shapes: given the candidate IDs that could own a ✅
// claim, a tier config and a row/column label for messages, verify at least
// one required ID appears in each of the tier's mapped files. Mutates
// `findings` and returns the number of tier-file checks it performed.
function checkClaim({ ids, sectionDecision, tier, label, rowNum, findings, checked }) {
  // `D-54` requires the DECISION to be traceable into the tier. When the
  // cell names one, demand that ID specifically — accepting any ID in the
  // cell lets a gap reference mask a decision that never propagated, which
  // is the exact shape of `G58`.
  // `G98`: prefer the cell's own decision, else the SECTION's — and fall
  // back to the row's other IDs only when neither exists.
  const decision = ids.find((id) => /^D-\d+$/.test(id));
  const required = decision ? [decision] : sectionDecision ? [sectionDecision] : ids;
  if (required.length === 0) {
    findings.push(`row ${rowNum}: ✅ for "${label}" has no attributable decision ID`);
    return;
  }
  for (const file of tier.files) {
    const body = contents(file);
    if (body === null) {
      findings.push(`row ${rowNum}: ${file} is missing but marked ✅`);
      continue;
    }
    checked.n++;
    const present = required.some((id) => body.includes(id));
    if (!present) {
      findings.push(
        `row ${rowNum}: ${required.join("/")} marked ✅ for "${label}" but absent from ${file}`,
      );
    }
  }
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
  const checked = { n: 0 };
  // `G98`, `D-124` (raised as `B-054`). The decision that OWNS the table, taken
  // from the enclosing section heading — because the Item cell usually names an
  // entry or a gap and not the decision, and the fallback for that case was
  // "any ID in the cell appears anywhere in the file".
  //
  // `D-123` claimed a Phase-closure edit it never made. Its Item cell read
  // "`B-052` / `C-28` closure"; `C-28` was ALREADY mentioned in that file from
  // an earlier decision, so a PRE-EXISTING mention satisfied a claim about a
  // NEW edit and the sweep went green on a propagation that had not happened.
  // **That is `G58` — the exact failure this check was built for — arriving
  // through the fallback path built into it.**
  let sectionDecision = null;

  for (let i = 0; i < lines.length; i++) {
    const heading = /^#{2,3}\s+5\.[^\s]*\s+`(D-\d+)`/.exec(lines[i]);
    if (heading) sectionDecision = heading[1];

    // Shape 1: `Item | <tier columns...>` — rows are entries, columns are tiers.
    if (/^\|\s*Item\s*\|/i.test(lines[i])) {
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
          const tier = TIERS.find((t) => header.includes(t.match)) ?? resolveByPath(headers[k]);
          if (!tier) {
            findings.push(`row ${j + 1}: tier column "${headers[k]}" is not mapped to a document`);
            continue;
          }
          checkClaim({ ids, sectionDecision, tier, label: headers[k], rowNum: j + 1, findings, checked });
        }
      }
      continue;
    }

    // Shape 2: `Tier | Disposition` / `Tier | Applicability` — rows ARE tiers,
    // one disposition column. No Item column carries the decision's own ID, so
    // it is read from the disposition cell first, the section heading otherwise.
    if (/^\|\s*Tier\s*\|\s*(Disposition|Applicability)\s*\|/i.test(lines[i])) {
      if (!/^-+$/.test(lines[i + 1]?.split("|")[1]?.trim() ?? "")) continue;

      for (let j = i + 2; j < lines.length && lines[j].startsWith("|"); j++) {
        const cells = lines[j].split("|").slice(1, -1).map((cl) => cl.trim());
        if (cells.length !== 2) continue;
        const [tierName, disposition] = cells;
        if (!disposition.includes("✅")) continue; // "— unaffected" / "Owed" / open — not a claim to verify

        const header = tierName.toLowerCase().replace(/`/g, "").replace(/\*\*/g, "");
        const tier = TIERS.find((t) => header.includes(t.match)) ?? resolveByPath(tierName);
        if (!tier) {
          findings.push(`row ${j + 1}: tier row "${tierName}" is not mapped to a document`);
          continue;
        }
        const ids = [...disposition.matchAll(/`([A-Z]+-?\d+[a-z]?)`/g)].map((m) => m[1]);
        checkClaim({ ids, sectionDecision, tier, label: tierName, rowNum: j + 1, findings, checked });
      }
    }
  }

  return { name: "tier-sweep", findings, detail: `${checked.n} tier claims verified` };
}
