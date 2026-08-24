// `D-106` — the negative fixtures, tracked.
//
// WHY THIS DIRECTORY EXISTS. The register and the inventory make fourteen
// separate claims of the form *"negative-tested N ways"*, and **not one fixture
// was in the repository.** They ran once, in a session scratchpad, and what
// survived was the sentence saying they passed. `V1-PHASE-CLOSURE.md` §6.4d
// went further and told the reader to `sh negtest5.sh   # in the scratchpad` —
// **a reproduction instruction pointing outside the repository.**
//
// That is `summary_outlived_source` in its purest form: **the record of the
// test outlived the test.** Every claim these documents make about a check's
// ability to FAIL rested on a file nobody else could run.
//
// A fixture mutates the real working tree, runs the real check, asserts the
// intended finding, and restores. Two rules follow from that:
//
//   * IT REFUSES TO RUN ON A DIRTY TREE. A crash mid-fixture would otherwise
//     leave edits indistinguishable from the author's own work.
//   * IT RESTORES IN `finally`, always, and verifies the tree is clean again
//     before reporting success. A fixture suite that leaves damage behind
//     costs more than it proves.
//
// Run with `bun run fixtures`.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, rmSync, mkdirSync } from "node:fs";

export const read = (p) => readFileSync(p, "utf8");
export const write = (p, s) => writeFileSync(p, s);

/** Load a check fresh each time — module caching would hide the mutation. */
export async function runCheck(modulePath) {
  const mod = await import(`${modulePath}?t=${Date.now()}${Math.random()}`);
  return mod.run();
}

export function treeIsClean() {
  try {
    return execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" }).trim() === "";
  } catch {
    return false;
  }
}

/**
 * One fixture: mutate, run, assert, restore.
 *
 * `expect` is a substring of the intended finding. Asserting on the MESSAGE and
 * not merely on "it failed" is deliberate — a check that fails for the wrong
 * reason passes a naive fixture, and this apparatus has produced that exact
 * defect twice (`phase-manifest`, `sync-docs-unique`).
 */
export async function fixture(results, { name, modulePath, mutate, restore, expect, shouldPass = false }) {
  try {
    mutate();
  } catch (e) {
    results.push({ name, ok: false, detail: `setup threw: ${e.message}` });
    return;
  }
  try {
    const out = await runCheck(modulePath);
    if (shouldPass) {
      const ok = out.findings.length === 0;
      results.push({ name, ok, detail: ok ? "stays green" : `unexpected finding: ${out.findings[0]}` });
    } else {
      const ok = out.findings.some((f) => f.includes(expect));
      results.push({ name, ok, detail: ok ? "fails as intended" : `no finding matching "${expect}"` });
    }
  } catch (e) {
    results.push({ name, ok: false, detail: `threw: ${e.message}` });
  } finally {
    try {
      restore();
    } catch (e) {
      results.push({ name: `${name} — RESTORE`, ok: false, detail: `restore threw: ${e.message}` });
    }
  }
}

/** Fixtures that drive a script rather than a check module. */
export function runScript(args, cwd = process.cwd()) {
  try {
    const stdout = execFileSync(process.execPath, args, { encoding: "utf8", cwd, stdio: ["ignore", "pipe", "pipe"] });
    return { code: 0, out: stdout };
  } catch (e) {
    return { code: e.status ?? 1, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

export { existsSync, rmSync, mkdirSync };
