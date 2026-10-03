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
// A fixture mutates a real working tree, runs the real check, asserts the
// intended finding, and restores. Since `D-396` (`GR-013`, `B-021`) that tree
// is a disposable git worktree pinned to `HEAD`, created and removed by
// `run.mjs`; the caller's checkout is never opened for writing. Two rules follow:
//
//   * THE TARGET IS DISPOSABLE. Uncommitted changes in the caller's checkout
//     are reported as untested, not refused. *(Historical, before `D-396`:
//     fixtures mutated the shared checkout and refused to start on a dirty
//     tree — a guard on a dirty START that never stopped a concurrent reader.
//     Relabelled as history under `D-402`.)*
//   * IT RESTORES IN `finally`, always, to each path's baseline, refusing
//     before any write outside the target (`D-398`, `D-399`), and verifies the
//     target is clean again before reporting success. A fixture suite that
//     leaves damage behind costs more than it proves.
//
// Run with `bun run fixtures`.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, rmSync, mkdirSync, lstatSync, readdirSync, rmdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

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
 * it is independent of `B-021`'s concurrency control, which is the `D-396`
 * disposable-worktree isolation in `run.mjs`, not a lock. Exported so the fixture
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

/**
 * `D-396` (`GR-013`) — baseline-aware restore. Snapshots each path BEFORE a
 * fixture touches it and returns a restore that puts every path back to that
 * baseline, and only that:
 *
 *   * a file that existed gets its original bytes back;
 *   * a path that was absent is removed — a file directly, a directory only
 *     if it is now EMPTY. A created directory holding anything the fixture did
 *     not create is refused, with the path named, never deleted;
 *   * a directory that already existed is left alone, empty or not.
 *
 * There is no recursive delete. Every path must resolve inside one of `roots`
 * (default: the working directory) and must not be a link, so a restore cannot
 * reach outside the disposable target. List parent directories too: a
 * `mkdirSync(..., { recursive: true })` creates them.
 *
 * This replaces file-only restores such as the `syncDocs()` one, which removed
 * `SKILL.md` but left `.agents/skills/sync-docs/` behind on every run.
 */
export function snapshot(paths, { roots = [process.cwd()] } = {}) {
  // `D-398` (`B-155` F1). Containment is PHYSICAL, not a string prefix: every
  // root and every existing component from root to leaf is recorded by object
  // identity (volume + file ID) and must be an ordinary, non-link directory.
  // `D-399` extends identity to regular files and refuses hard links.
  // Restore checks ALL entries before writing anything, then re-checks each
  // entry immediately before its own write or delete. A late exception after an
  // outside write is a failure, so nothing is written until every check passes.
  //
  // RACE BOUNDARY, stated honestly: check-then-write is not atomic. This guards
  // the fixture's own mutations and any non-adversarial change inside the fresh,
  // task-owned target; it does not claim immunity to a hostile process racing
  // the window between a check and its write.
  const rootRecs = roots.map((r) => {
    const abs = resolve(r);
    const st = lst(abs);
    if (!st || st.isSymbolicLink() || !st.isDirectory()) throw new Error(`snapshot: root ${r} is not an ordinary directory`);
    return { abs, id: idOf(st) };
  });
  const seen = new Map(); // component path → identity recorded at capture
  const entries = paths.map((p) => {
    const abs = resolve(p);
    const root = rootRecs.find((r) => abs === r.abs || abs.startsWith(r.abs + sep));
    if (!root) throw new Error(`snapshot: ${p} is outside the fixture target`);
    const chain = componentsBelow(root.abs, abs);
    let absentFrom = chain.length;
    for (let i = 0; i < chain.length; i++) {
      const st = lst(chain[i]);
      if (!st) { absentFrom = i; break; }
      if (st.isSymbolicLink()) throw new Error(`snapshot: ${chain[i]} is a link; refusing to manage ${p}`);
      if (i < chain.length - 1 && !st.isDirectory()) throw new Error(`snapshot: ${chain[i]} is not a directory; refusing to manage ${p}`);
      seen.set(chain[i], idOf(st));
    }
    const leaf = absentFrom === chain.length ? lst(abs) : null;
    const base = { p, abs, root, chain, absentFrom };
    if (!leaf) return { ...base, kind: "absent" };
    if (leaf.isDirectory()) return { ...base, kind: "dir" };
    // `D-399` (`B-155` F1, second repair): a hard link is an ordinary file to
    // lstat, so writing to one writes to every other name of the same object —
    // possibly outside the target. A multiply linked file is never managed.
    if (leaf.nlink > 1n) throw new Error(`snapshot: ${p} has ${leaf.nlink} hard links; refusing to manage it`);
    return { ...base, kind: "file", bytes: readFileSync(abs) };
  });

  // Returns the reason this entry may not be restored now, or null. Reads only.
  const unsafe = (e) => {
    const r = lst(e.root.abs);
    if (!r || r.isSymbolicLink() || !r.isDirectory() || idOf(r) !== e.root.id) return `${e.p}: its root ${e.root.abs} was replaced`;
    for (let i = 0; i < e.chain.length; i++) {
      const c = e.chain[i];
      const st = lst(c);
      const isLeaf = i === e.chain.length - 1;
      if (i < e.absentFrom) {
        // Existed at capture: must be the very same object, never a link.
        if (!st) return isLeaf && e.kind === "file" ? null : `${e.p}: ${c} is gone`;
        if (st.isSymbolicLink()) return `${e.p}: ${c} became a link`;
        if (!isLeaf && idOf(st) !== seen.get(c)) return `${e.p}: ${c} was replaced by a different directory`;
        if (isLeaf && e.kind === "dir" && idOf(st) !== seen.get(c)) return `${e.p}: was replaced by a different directory`;
        if (isLeaf && e.kind === "file" && st.isDirectory()) return `${e.p}: was a file, is now a directory`;
        // `D-399`: an existing baseline file must be the SAME object, singly
        // linked. A missing one may be recreated, because every parent above it
        // was just proven to be the same, ordinary, non-link directory.
        if (isLeaf && e.kind === "file" && st.nlink > 1n) return `${e.p}: now has ${st.nlink} hard links`;
        if (isLeaf && e.kind === "file" && idOf(st) !== seen.get(c)) return `${e.p}: was replaced by a different file`;
      } else if (st) {
        // Absent at capture, created since: allowed only as an ordinary entry.
        if (st.isSymbolicLink()) return `${e.p}: ${c} was created as a link`;
        if (!isLeaf && !st.isDirectory()) return `${e.p}: ${c} is not a directory`;
      } else {
        break; // nothing exists below an absent component
      }
    }
    return null;
  };

  return () => {
    // Phase 1 — check everything; write nothing if anything is unsafe.
    const refused = entries.map(unsafe).filter(Boolean);
    if (refused.length) throw new Error(`restore refused before any write: ${refused.join("; ")}`);
    // Phase 2 — deepest first; each operation re-checks its own entry first.
    const problems = [];
    for (const e of [...entries].sort((a, b) => b.abs.length - a.abs.length)) {
      const why = unsafe(e);
      if (why) throw new Error(`restore stopped: ${why}`);
      const now = lst(e.abs);
      if (e.kind === "file") {
        withRetry(() => writeFileSync(e.abs, e.bytes));
      } else if (e.kind === "absent" && now) {
        if (!now.isDirectory()) withRetry(() => rmSync(e.abs));
        else if (readdirSync(e.abs).length) problems.push(`${e.p}: created by the fixture but not empty; not removed`);
        else withRetry(() => rmdirSync(e.abs));
      }
    }
    if (problems.length) throw new Error(problems.join("; "));
  };
}

/** lstat with object identity; null when the path (or an ancestor) is absent. */
function lst(abs) {
  try {
    return lstatSync(abs, { bigint: true });
  } catch (e) {
    if (e.code === "ENOENT" || e.code === "ENOTDIR") return null;
    throw e;
  }
}

const idOf = (st) => `${st.dev}:${st.ino}`;

/** Every path from just below `root` down to `abs`, inclusive; [] when abs is the root. */
function componentsBelow(root, abs) {
  const rel = relative(root, abs);
  if (!rel) return [];
  const out = [];
  let cur = root;
  for (const part of rel.split(sep)) out.push((cur = join(cur, part)));
  return out;
}

export { existsSync, rmSync, mkdirSync };
