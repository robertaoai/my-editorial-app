// `C-14` check 12 — `C-17` (`D-95`, raised as `B-007`): does the code match
// the authoritative config rows, in BOTH directions?
//
// `D-91` split ownership: Lane A owns every row of `docs/CONFIG_LOG.md`, Lane B
// owns `lib/config/*.ts`. `C-17` opened in the same pass and said "install the
// check in the pass that lands `build-config.ts`". **That pass was `43c51ce`
// and the check was not installed** — so the split that created the risk ran
// for a full cycle with nothing watching it (`B-007`).
//
// The existing application test asserts that declarations ALREADY IN THE CODE
// cite `CONFIG_LOG.md`. **It cannot fail when an authoritative row is missing
// from the code**, which is the direction that actually matters: Lane A adds a
// row, Lane B never implements it, and every check stays green.
//
// WHAT IT FAILS ON — both directions, which is the whole point:
//   * an authoritative `CONFIG_LOG.md` variable with no declaration in
//     `lib/config/`
//   * a governed declaration in `lib/config/` with no `CONFIG_LOG.md` row
//
// WHAT IT DELIBERATELY DOES NOT DO:
//   * It does not compare VALUES. A row says `5`; the code may legitimately
//     read `5` from an env var, a derived expression, or a typed constant.
//     Comparing text would report drift that is correct by design — the same
//     reason `phase-manifest` does not fire on a scope exclusion.
//   * It does not require `lib/config/` to exist. Before Lane B's phase opens
//     there is nothing to couple, and a check that failed on a legitimately
//     absent directory would be red in the normal case.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LOG = "docs/CONFIG_LOG.md";
const CODE_DIR = "lib/config";

// Authoritative rows are table rows whose first cell is a backticked
// SCREAMING_SNAKE identifier. Prose mentions elsewhere are not rows and are
// deliberately not collected.
const ROW_VAR = /^\|\s*`([A-Z][A-Z0-9_]{2,})`/;

// A row inside §7.2 declares a DERIVED view — computed from another variable,
// never stored — so requiring its own declaration would demand exactly the
// duplication `D-94` refused (`B-002`).
const DERIVED_HEADING = /^#{2,4}\s+7\.2\b/;
const SECTION_HEADING = /^#{2,4}\s+\d/;

// A declaration in code: `export const NAME =` or `NAME:` in an exported
// object literal.
const DECL = /(?:export\s+const\s+|^\s*)([A-Z][A-Z0-9_]{2,})\s*[:=]/gm;

// STRUCTURAL identifiers are not config values and have no row by design:
// the registry itself, and the sentinel the registry uses to mean "decided to
// be unset". Kept deliberately tiny and stated here rather than hidden — an
// exclusion list is a place drift hides, so **adding to it requires saying
// why in this comment**, and anything that carries a value belongs in
// `CONFIG_LOG.md` instead.
const STRUCTURAL = new Set([
  "CONFIG_REGISTRY", // the registry export — the container, not a value
  "UNSET", // the sentinel; `CONFIG_LOG.md` §4 governs what it means
]);

function codeFiles(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...codeFiles(p));
    else if (/\.(ts|tsx|mjs|js)$/.test(e.name)) out.push(p);
  }
  return out;
}

export function run() {
  if (!existsSync(LOG)) {
    return {
      name: "config-coupling",
      findings: [`${LOG} absent — nothing authoritative to couple against`],
      detail: "config log missing",
    };
  }

  const authoritative = new Set();
  const derived = new Set();
  let inDerived = false;

  for (const line of readFileSync(LOG, "utf8").split("\n")) {
    if (DERIVED_HEADING.test(line)) { inDerived = true; continue; }
    else if (SECTION_HEADING.test(line)) inDerived = false;

    const m = ROW_VAR.exec(line);
    if (!m) continue;
    if (inDerived) derived.add(m[1]);
    else authoritative.add(m[1]);
  }

  const files = codeFiles(CODE_DIR);
  if (files.length === 0) {
    return {
      name: "config-coupling",
      findings: [],
      detail: `${authoritative.size} authoritative row(s); ${CODE_DIR} not yet present — nothing to couple`,
    };
  }

  const declared = new Map();
  for (const f of files) {
    const text = readFileSync(f, "utf8");
    for (const m of text.matchAll(DECL)) {
      if (!declared.has(m[1])) declared.set(m[1], f);
    }
  }

  const findings = [];

  // Direction 1 — a row with no code. THE DIRECTION THE EXISTING TEST CANNOT
  // SEE, and the reason this check exists.
  for (const name of authoritative) {
    if (!declared.has(name) && !derived.has(name)) {
      findings.push(
        `\`${name}\` is an authoritative row in ${LOG} with no declaration in ${CODE_DIR}/ — Lane A published a value Lane B never implemented`,
      );
    }
  }

  // Direction 2 — code with no row. A one-way check licenses the other
  // direction, which is `G65`/`G71`'s lesson applied here.
  for (const [name, file] of declared) {
    if (!authoritative.has(name) && !derived.has(name) && !STRUCTURAL.has(name)) {
      findings.push(
        `\`${name}\` is declared in ${file} with no row in ${LOG} — a governed value with no source citation or OD dependency`,
      );
    }
  }

  return {
    name: "config-coupling",
    findings,
    detail: `${authoritative.size} authoritative row(s), ${derived.size} derived, ${declared.size} declaration(s) in ${CODE_DIR}/`,
  };
}
