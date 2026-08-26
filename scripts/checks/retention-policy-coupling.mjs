// `C-14` check — `D-134`, raised in `B-040`'s runbook §6: does `C-32`'s
// ratified retention policy actually stay coupled across the four tiers that
// carry it, and does the corpus avoid the specific mistakes `D-115`/`D-116`
// already found once?
//
// WHY. `RET-EDITORIAL` is cited from the Alpha Portfolio, the Business Case,
// the Blueprint, and `Modular_PRD` — four places, one canonical detail tier
// (the Business Case). A number or a definition drifting across any of the
// other three is invisible to every other check in this apparatus: none of
// them read retention content specifically.
//
// WHAT IT FAILS ON — each numbered per `B-040`'s own list, so a change to one
// finding message can be traced back to the requirement that named it:
//   1. a missing `RET-EDITORIAL` mention in a required tier
//   2. a different policy ID or version string across the four tiers
//   3. `C-32` or a named consumer marked closed while a
//      `CHIEF-EDITOR-DECISION-REQUIRED` placeholder remains anywhere
//   4. "archive" defined as delete/dispose, or marked non-retrievable
//   5. a numeric period written into the Alpha Portfolio or the Blueprint
//      instead of cited from the Business Case
//   6. the Blueprint's queue-cleanup rows still calling themselves archival
//   7. `0002`, a migration, or an S1 gate naming `C-32` as a dependency
//   8. `AC-12a` present in `Modular_PRD` with no citation of the decision
//      that promoted it (`D-116`) — `G89`'s direction, not duplicated here
//   9. a reuse-eligibility claim deriving its state from the archival-absence
//      fact, or vice versa (`D-128`/`D-134`) — the two run on independent
//      periods and neither check may treat one as evidence of the other
//
// WHAT IT DELIBERATELY DOES NOT DO. It reads structure and known phrases, not
// legal correctness — the same `C-22` limit named everywhere else in this
// apparatus. It cannot tell whether 5 years is the RIGHT number, only whether
// every tier agrees on what number is written down and where.
//
// Tracked files only, so it runs in CI.

import { existsSync, readFileSync } from "node:fs";

const ALPHA = "docs/governance/alpha-portfolio-business-continuity-implementation-plan.md";
const BUSINESS_CASE = "docs/source/business-case.md";
const BLUEPRINT = "docs/source/blueprint.md";
const MODULAR_PRD = "docs/Modular_PRD.md";
const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";
const BUILD_SPEC = "docs/v1/V1-BUILD-SPEC.md";
const MIGRATION = "supabase/migrations/0002_s1_editorial_schema.sql";

const REQUIRED_TIERS = [
  { label: "Alpha Portfolio", path: ALPHA },
  { label: "Business Case", path: BUSINESS_CASE },
  { label: "Blueprint", path: BLUEPRINT },
  { label: "Modular_PRD", path: MODULAR_PRD },
];

function contents(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

export function run() {
  const findings = [];
  let checked = 0;

  const bodies = {};
  for (const { label, path } of REQUIRED_TIERS) {
    const body = contents(path);
    if (body === null) {
      findings.push(`${path}: missing, required as a ${label} retention citation`);
      continue;
    }
    bodies[label] = body;
    checked++;

    // 1. every required tier must mention the canonical policy.
    if (!/RET-EDITORIAL/.test(body)) {
      findings.push(`${path}: no RET-EDITORIAL mention (1) — required tier carries no citation`);
    }
  }

  // 2. every ID/version pair found must agree.
  const idVersions = new Set();
  for (const { label, path } of REQUIRED_TIERS) {
    const body = bodies[label];
    if (!body) continue;
    for (const m of body.matchAll(/RET-EDITORIAL\s+([0-9][0-9A-Za-z.\-]*)/g)) {
      idVersions.add(m[1]);
    }
  }
  if (idVersions.size > 1) {
    findings.push(
      `RET-EDITORIAL version disagreement (2) across tiers: found ${[...idVersions].join(", ")}`,
    );
  }

  // 3. no CHIEF-EDITOR-DECISION-REQUIRED placeholder may remain LIVE in the
  // four required tiers while a closed claim exists in the register.
  //
  // Deliberately does NOT scan the register itself for the marker string:
  // the register narrates history in prose ("every placeholder was
  // replaced"), and that sentence contains the marker as a quoted noun, not
  // as a live placeholder. Scanning it produced exactly that false positive
  // on this check's own first run — caught before commit.
  const registerBody = contents(REGISTER) ?? "";
  const hasPlaceholder = Object.values(bodies).some((b) => /CHIEF-EDITOR-DECISION-REQUIRED/.test(b));
  if (hasPlaceholder) {
    const closedClaim =
      /\bC-32\b[^\n]{0,80}\bclosed\b/i.test(registerBody) ||
      /\b(NFR-02|AC-12a|G40|G88|G41)\b[^\n]{0,80}\bclosed\b/i.test(registerBody);
    if (closedClaim) {
      findings.push(
        `a CHIEF-EDITOR-DECISION-REQUIRED placeholder remains while C-32 or a named consumer is marked closed (3)`,
      );
    }
  }

  // 4. "archive"/"archival" directly EQUATED with delete/dispose — a defining
  // relationship, not mere proximity. Two words in the same sentence talking
  // about different things (e.g. "archival ... disposal is separate") is not
  // a definition and must not fire.
  for (const { label, path } of REQUIRED_TIERS) {
    const body = bodies[label];
    if (!body) continue;
    if (/\barchiv\w*\b\s*(is|means|=|:)\s*(a\s+)?(delete|deleted|deletion|dispos\w*)\b/i.test(body)) {
      findings.push(`${path}: "archive" appears directly defined as delete/dispose (4) — archival must stay MOVED, still retrievable`);
    }
    if (/\barchiv\w*\b[^.\n]{0,30}\bmarked\s+non-retrievable\b/i.test(body)) {
      findings.push(`${path}: archived marked non-retrievable (4) — contradicts D-115's definition`);
    }
  }

  // 5. a numeric retention period (N years / N days) written into Alpha
  // Portfolio or Blueprint with no RET-EDITORIAL citation ANYWHERE in the
  // same table row / paragraph (delimited by a table pipe or blank line) is a
  // copy, not a cite. Scoped to periods that are actually about archival or
  // retention — a scoring-formula "7 days" or similar is not this check's
  // business, so the row/paragraph must also mention archiv/retent.
  for (const { label, path } of [
    { label: "Alpha Portfolio", path: ALPHA },
    { label: "Blueprint", path: BLUEPRINT },
  ]) {
    const body = bodies[label];
    if (!body) continue;
    const lines = body.split("\n");
    for (const line of lines) {
      if (!/\b\d+\s*(years?|days?)\b/i.test(line)) continue;
      if (!/archiv|retent/i.test(line)) continue; // not a retention-period row
      if (/queue cleanup|not (governed )?archival|not archival/i.test(line)) continue; // self-disclaiming, check 6's territory
      if (!/RET-EDITORIAL/i.test(line)) {
        const period = line.match(/\b\d+\s*(years?|days?)\b/i)?.[0];
        findings.push(
          `${path}: retention-period row containing "${period}" has no RET-EDITORIAL citation on the same line (5) — periods belong in the Business Case, other tiers cite it`,
        );
      }
    }
  }

  // 6. Blueprint queue-cleanup rows must not call themselves archival without
  // naming the supplied-fact requirement.
  const blueprintBody = bodies["Blueprint"];
  if (blueprintBody) {
    if (/(discovered|stale)[^\n]{0,80}\barchiv\w*/i.test(blueprintBody) &&
        !/queue cleanup/i.test(blueprintBody)) {
      findings.push(
        `${BLUEPRINT}: a work-queue cleanup row uses "archive" without the "queue cleanup" qualifier (6)`,
      );
    }
  }

  // 7. no migration or S1 gate may name C-32 as a dependency.
  const buildSpecBody = contents(BUILD_SPEC);
  const gateWords = "(depend|dependency|gate|gates|gating|blocks|blocked)";
  if (
    buildSpecBody &&
    (new RegExp(`C-32[^\\n]{0,60}\\b${gateWords}\\b`, "i").test(buildSpecBody) ||
      new RegExp(`\\b${gateWords}\\b[^\\n]{0,60}C-32`, "i").test(buildSpecBody))
  ) {
    findings.push(`${BUILD_SPEC}: C-32 appears described as a dependency/gate on S1 (7)`);
  }
  const migrationBody = contents(MIGRATION);
  if (migrationBody && /C-32/.test(migrationBody)) {
    findings.push(`${MIGRATION}: names C-32 (7) — migrations must stay independent of the retention condition`);
  }

  // 8. AC-12a in Modular_PRD must cite the decision that promoted it,
  // SOMEWHERE in the document — checked against every AC-12a occurrence, not
  // just the first, since only its defining row need carry the citation.
  const prdBody = bodies["Modular_PRD"];
  if (prdBody && /AC-12a/.test(prdBody)) {
    const anyRowCitesD116 = [...prdBody.matchAll(/AC-12a/g)].some((m) => {
      const window = prdBody.slice(Math.max(0, m.index - 200), m.index + 900);
      return /D-116/.test(window);
    });
    if (!anyRowCitesD116) {
      findings.push(`${MODULAR_PRD}: AC-12a present without any occurrence citing its creating decision D-116 (8, G89)`);
    }
  }

  // 9. no tier may claim one clock is derived from / evidence of the other.
  for (const { label, path } of REQUIRED_TIERS) {
    const body = bodies[label];
    if (!body) continue;
    if (/REUSE-WINDOW-90[^\n]{0,120}\b(evidence|proves?|means|implies|therefore)\b[^\n]{0,80}\barchiv/i.test(body) ||
        /archiv\w*[^\n]{0,120}\b(evidence|proves?|means|implies|therefore)\b[^\n]{0,80}REUSE-WINDOW-90/i.test(body)) {
      findings.push(`${path}: text derives archival state from REUSE-WINDOW-90 or vice versa (9) — D-128/D-134 require independence`);
    }
  }

  return {
    name: "retention-policy-coupling",
    findings,
    detail: `${checked}/${REQUIRED_TIERS.length} required tiers present; RET-EDITORIAL coupling checked across ${Object.keys(bodies).length} tiers`,
  };
}
