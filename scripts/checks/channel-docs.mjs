// `C-14` check 16 — `D-104`: the channel's own documentation is coupled to the
// checks that enforce it.
//
// WHY. `docs/handoff/README.md` and `TEMPLATE.md` were **the only files in the
// channel that nothing read.** `handoff-response` filters entry filenames on
// `^[BC]-\d+`, so both are invisible to it; `phase-manifest` asserts only that
// they exist; `graph-coverage` only that they are in the graph. **The README
// drifted through `D-101`, `D-102` and `D-103` with all fifteen checks green**,
// and ended up documenting a resolution vocabulary the directory no longer used
// — `Applied` was missing while ten of nineteen entries carried it.
//
// **This is `G74`'s shape one level up.** That gap was a control scoped to one
// lane, blind to the other. This was a control scoped to entries, blind to the
// file that tells people how to write entries.
//
// WHAT IT COUPLES, all three derived — nothing here is a restatement:
//
//   A. RESOLUTION VOCABULARY, both directions. Every resolution `closure-
//      readiness` implements must be named in the README and the template; every
//      resolution the template offers must be implemented. A one-way check
//      licenses the other direction (`G65`, `G71`, `C-17`).
//   B. FIELDS, both directions. Every `- **X:**` the template declares must be
//      read by some check, and every field a check reads must be declared by the
//      template. Human-only fields are excluded BY NAME, with a reason.
//   C. NO PROSE TALLIES. "Five fields", "Three dispositions" — `G55`, `G56`,
//      `G58` and `G75` are four separate recordings of a restated count
//      drifting, and the README had two of them.
//
// WHAT IT CANNOT DO — stated, not buried. It caught four of the seven README
// defects. The other three are semantic:
//   * the README called `Verified` sufficient for closure without saying an
//     independent verifier is required;
//   * it said the gate fires on "any blocking entry" after that gate became
//     phase-scoped;
//   * it never mentioned the `Active` carve-out at all.
// It also has a known FALSE-POSITIVE class: a HISTORICAL count does not drift,
// and rule C fires on one anyway. That is left blunt on purpose — the fix it
// forces (name them instead of counting them) produces better prose every time,
// and it caught one in this very README on the pass that rewrote it.
//
// **A check cannot read a paragraph for correctness.** These are `C-22` —
// arrival, not correctness — and the control is the reader. Claiming otherwise
// would make this the ceremonial check it exists to prevent.
//
// Tracked files only, so it runs in CI.

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const README = "docs/handoff/README.md";
const TEMPLATE = "docs/handoff/TEMPLATE.md";
const CHECK_DIR = "scripts/checks";

// `D-105`. THE DOCUMENT SET IS DERIVED, NOT LISTED.
//
// As first written this check named exactly two files. **`D-103` had created a
// third instruction document — `docs/LANE-B-WORK-ORDER.md` — one pass earlier,
// and `D-92` a fourth in `.github/WORKFLOWS-SPEC.md`. Neither was read by
// anything**, which is `G78` verbatim: the gap this check exists to close,
// recurring inside the pass that closed it.
//
// **And the unread file was not incidental.** The work order's closing section
// told Lane B to *"raise nothing special"* at the end of its turn — the
// instruction that produced `D-105`'s missing handover. **The document carrying
// the defect was the one the new control could not see.**
//
// So the set is a glob: every non-entry markdown file in the channel, plus any
// work order. **A fifth instruction document is covered on the day it is
// written**, which a hard-coded list can never promise.
const WORK_ORDER = /(WORK-ORDER|WORKFLOWS-SPEC)\.md$/;
const CHANNEL_DIR = "docs/handoff";

// Fields a person fills in and no check reads, deliberately. Naming them here
// is the point: an unlisted unread field is a finding, not a shrug.
const HUMAN_ONLY = new Map([
  ["Raised", "provenance for a reader; no control depends on the date or the lane"],
  ["Blocks", "the blocking relation in prose. `Phase:` carries the machine-readable part"],
  ["Examined-By", "a rejection recorded as a link to the entry that made it. No check reads it because there is no `Rejected` resolution for one to validate against (`D-108`)"],
]);

const TALLY = /\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\s+(fields?|dispositions?|checks?|states?|kinds?|entries|conditions?|resolutions?)\b/gi;

// SELF EXCLUDED. This file DESCRIBES the coupling; it does not participate in
// it, and on its first run its own prose was read as implementation — a doc
// comment naming an accessor call was reported as a field the template failed
// to declare. A check that reads its own documentation as source is measuring
// itself.
function sourceFiles() {
  return readdirSync(CHECK_DIR)
    .filter((f) => f.endsWith(".mjs") && f !== "channel-docs.mjs")
    .map((f) => readFileSync(join(CHECK_DIR, f), "utf8"))
    .join("\n");
}

/** Resolutions `closure-readiness` actually implements, read from its Sets. */
function implementedResolutions(src) {
  const words = new Set();
  for (const m of src.matchAll(/const (?:TERMINAL|PROVISIONAL) = new Set\(\[([^\]]*)\]\)/g)) {
    for (const w of m[1].matchAll(/"([a-z]+)"/g)) words.add(w[1]);
  }
  return words;
}

/** Fields some check reads, taken from the field-accessor calls in its source. */
function fieldsRead(src) {
  const out = new Set();
  for (const m of src.matchAll(/field(?:Present)?\(\s*text\s*,\s*"([A-Za-z][A-Za-z -]*)"/g)) out.add(m[1]);
  return out;
}

/**
 * Every instruction document in the channel — derived.
 *
 * Non-entry markdown in `docs/handoff/`, plus work orders wherever they live.
 * `docs/` and `.github/` are scanned one level deep, which is where every work
 * order sits and is deliberately not recursive: a deep scan would sweep the
 * whole corpus and the tally rule would fire on prose it was never meant for.
 */
function channelDocs() {
  const out = new Set([README, TEMPLATE]);
  try {
    for (const f of readdirSync(CHANNEL_DIR)) {
      if (f.endsWith(".md") && !/^[BC]-\d+/.test(f)) out.add(`${CHANNEL_DIR}/${f}`);
    }
  } catch {
    /* the directory is checked for existence below */
  }
  for (const dir of ["docs", ".github"]) {
    try {
      for (const f of readdirSync(dir)) if (WORK_ORDER.test(f)) out.add(`${dir}/${f}`);
    } catch {
      /* absent is not a finding here — `phase-manifest` owns existence */
    }
  }
  return [...out].filter((p) => existsSync(p)).sort();
}

/** Fields the template declares. */
function fieldsDeclared(text) {
  const out = new Set();
  for (const m of text.matchAll(/^- \*\*([A-Za-z][A-Za-z -]*):\*\*/gm)) out.add(m[1]);
  return out;
}

export function run() {
  for (const p of [README, TEMPLATE]) {
    if (!existsSync(p)) {
      return { name: "channel-docs", findings: [`${p} is missing — the channel has no documentation`], detail: "not read" };
    }
  }

  const readme = readFileSync(README, "utf8");
  const template = readFileSync(TEMPLATE, "utf8");
  const src = sourceFiles();
  const findings = [];

  // --- A. resolution vocabulary, both directions -------------------------
  const implemented = implementedResolutions(src);
  if (implemented.size === 0) {
    findings.push(
      `${CHECK_DIR}: no resolution vocabulary found in the check sources — this check would pass vacuously, so it fails instead`,
    );
  }
  for (const word of implemented) {
    const Word = word[0].toUpperCase() + word.slice(1);
    const re = new RegExp(`\\b${Word}\\b`);
    if (!re.test(readme)) {
      findings.push(
        `${README}: does not name the \`${Word}\` resolution, which \`closure-readiness\` implements — the channel's own README documents a vocabulary the directory does not use`,
      );
    }
    if (!re.test(template)) {
      findings.push(`${TEMPLATE}: does not offer the \`${Word}\` resolution, which \`closure-readiness\` implements`);
    }
  }

  // --- B. fields, both directions ----------------------------------------
  const read = fieldsRead(src);
  const declared = fieldsDeclared(template);

  for (const f of declared) {
    if (read.has(f) || HUMAN_ONLY.has(f)) continue;
    findings.push(
      `${TEMPLATE}: declares **${f}:** and no check reads it — either a control is missing, or it belongs in the human-only list with a stated reason`,
    );
  }
  for (const f of read) {
    if (declared.has(f)) continue;
    findings.push(
      `${TEMPLATE}: a check reads **${f}:** and the template does not declare it — entries copied from the template will lack the field`,
    );
  }

  // --- C. no prose tallies, across EVERY channel document -----------------
  const docs = channelDocs();
  for (const [path, text] of docs.map((p) => [p, readFileSync(p, "utf8")])) {
    for (const m of text.matchAll(TALLY)) {
      findings.push(
        `${path}: "${m[0]}" is a restated count — propagate the fact, never the tally (\`G55\`, \`G56\`, \`G58\`, \`G75\`). Name them instead of counting them`,
      );
    }
  }

  return {
    name: "channel-docs",
    findings,
    detail: `${docs.length} channel doc(s) [${docs.join(", ")}]; ${implemented.size} resolution(s), ${declared.size} template field(s), ${read.size} read by checks, ${HUMAN_ONLY.size} human-only`,
  };
}
