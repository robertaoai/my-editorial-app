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

/**
 * `D-139`, raised against this session's own fixture run. **Not `B-021`'s
 * class** — `B-021` is a second PROCESS touching the tree while fixtures run;
 * this is a SINGLE process hitting a transient OS-level lock on its own
 * write, no concurrent process involved. Windows reports these as `EBUSY` or
 * the catch-all `UNKNOWN`, typically an antivirus scan or the search indexer
 * holding the handle for a few milliseconds. `ENOENT` and everything else is
 * NOT retried — a genuinely missing file must fail immediately, not stall.
 */
export const TRANSIENT_CODES = new Set(["EBUSY", "UNKNOWN", "EPERM"]);
const RETRY_ATTEMPTS = 4;
const RETRY_BASE_MS = 50;

/** A synchronous sleep — `mutate()`/`restore()` are sync closures, so retry
 * inside `read`/`write` cannot be async without changing every fixture's
 * shape. `Atomics.wait` blocks the thread without a child process. */
function sleepSync(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

/**
 * Retries a synchronous filesystem op on a TRANSIENT error only, bounded.
 * A persistent lock still throws after `RETRY_ATTEMPTS` — this narrows a
 * false MISS on a millisecond-scale hiccup; it does not mask a real one, and
 * it is not `B-021`'s unbuilt concurrency lock. Exported so the fixture
 * suite can assert the three shapes directly: transient-then-succeeds,
 * transient-exhausted, and non-transient-immediate.
 */
export function withRetry(fn) {
  let lastErr;
  for (let attempt = 0; attempt < RETRY_ATTEMPTS; attempt++) {
    try {
      return fn();
    } catch (e) {
      lastErr = e;
      if (!TRANSIENT_CODES.has(e.code) || attempt === RETRY_ATTEMPTS - 1) throw e;
      sleepSync(RETRY_BASE_MS * (attempt + 1));
    }
  }
  throw lastErr;
}

export const read = (p) => withRetry(() => readFileSync(p, "utf8"));
export const write = (p, s) => withRetry(() => writeFileSync(p, s));

/** Load a check fresh each time — module caching would hide the mutation. */
export async function runCheck(modulePath) {
  const mod = await import(`${modulePath}?t=${Date.now()}${Math.random()}`);
  return mod.run();
}

export function treeIsClean() {
  return dirtyPaths().length === 0;
}

/**
 * The paths git currently reports as changed.
 *
 * `D-107`, raised as `B-021`. The runner used to report a boolean at the end —
 * *"working tree restored: NO"* — and on the turn `B-021` was being answered
 * **that line appeared, was read, and was proceeded past.** A fixture had
 * deleted a required field from `TEMPLATE.md` and the restore was defeated by a
 * concurrent `git stash` in the same session.
 *
 * **A true statement nobody acts on is not a control.** Naming the files makes
 * the damage impossible to skim past, and turns "something is dirty" into
 * "these bytes are not what you left".
 */
export function dirtyPaths() {
  try {
    return execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" })
      .split("\n")
      .map((l) => l.slice(3).trim())
      .filter(Boolean);
  } catch {
    return ["<git status unavailable>"];
  }
}

/**
 * One fixture: mutate, run, assert, restore.
 *
 * `expect` is a substring of the intended finding. Asserting on the MESSAGE and
 * not merely on "it failed" is deliberate — a check that fails for the wrong
 * reason passes a naive fixture, and this apparatus has produced that exact
 * defect twice (`phase-manifest`, `sync-docs-unique`).
 *
 * `expectDetail` is a substring of the check's DETAIL line, and it may be given
 * with `shouldPass` — `G83`, `D-113`. **Until this existed, an entire class of
 * defect was untestable here**: `handoff-response` reported `0 open` with four
 * unread entries, and every fixture passed, because a fixture could only ever
 * look at findings. **The detail line is what a human reads instead of the
 * directory**, so a wrong count there is a control defect, not cosmetics — and
 * it must be assertable like any other.
 */
export async function fixture(results, { name, modulePath, mutate, restore, expect, expectDetail, shouldPass = false }) {
  try {
    mutate();
  } catch (e) {
    results.push({ name, ok: false, detail: `setup threw: ${e.message}` });
    return;
  }
  try {
    const out = await runCheck(modulePath);
    if (expectDetail !== undefined) {
      const seen = out.detail ?? "";
      const detailOk = seen.includes(expectDetail);
      const findingsOk = shouldPass ? out.findings.length === 0 : out.findings.some((f) => f.includes(expect ?? ""));
      const ok = detailOk && findingsOk;
      results.push({
        name,
        ok,
        detail: ok
          ? `detail reports "${expectDetail}"`
          : !detailOk
            ? `detail does not contain "${expectDetail}" — got: ${seen}`
            : `detail matched but findings did not: ${out.findings[0] ?? "none"}`,
      });
    } else if (shouldPass) {
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
