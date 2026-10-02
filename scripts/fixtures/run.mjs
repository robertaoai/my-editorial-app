// `bun run fixtures` — the negative fixtures for the `C-14` apparatus.
//
// `bun run check` proves the checks pass on a healthy repository. **These prove
// they FAIL on an unhealthy one**, which is the half that was never in the
// repository: fourteen claims of *"negative-tested N ways"* across the register
// and the inventory, and not one runnable fixture behind any of them (`D-106`).
//
// Every suite mutates a real working tree. That is deliberate — a fixture
// against a synthetic copy proves the check works on the copy — but since
// `D-396` (`GR-013`, `B-021`) the tree it mutates is NOT yours. The runner
// creates a disposable git worktree pinned to your `HEAD`, re-launches itself
// inside it, and removes it afterwards. Your tracked, index and untracked bytes
// are never opened for writing.
//
// WHY. Before `D-396` every suite mutated the shared checkout and relied only on
// a clean-tree refusal at start. Two concurrent runs in one scratch worktree
// both scored 243/271 on false MISSes caused by each other's edits and left five
// tracked files damaged — `B-021`'s hazard, observed. All lanes share one
// checkout, so "nobody else is running" was never a control.
//
// Consequence: uncommitted changes are NOT tested. The fixtures run against the
// pinned commit, and the report names it.

import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmdirSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { dirtyPaths } from "./harness.mjs";

const CHILD = "FIXTURES_TARGET_CHILD";

/** Graph files the checks read. `.graphify` is a symlink to a shared folder
 * (`D-297`), so these are COPIED into the target, never linked: a fixture must
 * not be able to write to the shared graph. */
const GRAPH_INPUTS = ["graph.json", "branch.json", "needs_update"];

if (process.env[CHILD] === "1") {
  await runSuites();
} else {
  process.exit(orchestrate());
}

/** Parent: pin, create the target, run the child in it, clean up. */
function orchestrate() {
  const git = (...a) => execFileSync("git", a, { encoding: "utf8" }).trim();
  const head = git("rev-parse", "HEAD");
  const dirty = dirtyPaths();
  if (dirty.length) {
    console.log("");
    console.log(`  fixtures: ${dirty.length} uncommitted path(s) in your checkout are NOT tested.`);
    console.log(`  The run uses commit ${head.slice(0, 7)}; your files are left exactly as they are.`);
  }

  // A fresh, exclusively created base per run: a second run gets its own target
  // and can never write into this one (G13-5).
  const base = mkdtempSync(join(tmpdir(), "fixtures-"));
  const target = join(base, "wt");
  const baseIsOurs = resolve(base).startsWith(resolve(tmpdir()) + sep);
  let cleaned = false;

  const cleanup = () => {
    if (cleaned) return [];
    cleaned = true;
    const left = [];
    try {
      if (existsSync(target)) execFileSync("git", ["worktree", "remove", "--force", target], { stdio: "ignore" });
    } catch (e) {
      left.push(`${target} (git worktree remove failed: ${e.message.split("\n")[0]})`);
    }
    try {
      execFileSync("git", ["worktree", "prune"], { stdio: "ignore" });
    } catch { /* prune is housekeeping; a leftover is reported below */ }
    if (existsSync(target) && !left.length) left.push(target);
    // Remove the base only if it is ours and empty — never recursively.
    try {
      if (baseIsOurs && existsSync(base) && readdirSync(base).length === 0) rmdirSync(base);
    } catch { /* reported below */ }
    if (existsSync(base) && !left.length) left.push(base);
    return left;
  };

  const interrupted = (sig) => {
    const left = cleanup();
    console.error(`\n  fixtures: interrupted by ${sig}.`);
    reportLeftovers(left);
    process.exit(130);
  };
  process.on("SIGINT", () => interrupted("SIGINT"));
  process.on("SIGTERM", () => interrupted("SIGTERM"));

  let code;
  try {
    execFileSync("git", ["worktree", "add", "--detach", target, head], { stdio: "ignore" });
    const inputs = copyGraphInputs(join(target, ".graphify"));
    console.log("");
    console.log(`  fixtures: pinned ${head.slice(0, 7)} in a disposable worktree (${target})`);
    for (const [name, hash] of inputs) console.log(`  input  .graphify/${name}  sha256 ${hash.slice(0, 12)}`);
    const child = spawnSync(process.execPath, [join(target, "scripts", "fixtures", "run.mjs")], {
      cwd: target,
      env: { ...process.env, [CHILD]: "1" },
      stdio: "inherit",
    });
    code = child.status ?? 1;
  } catch (e) {
    console.error(`\n  fixtures: setup failed — ${e.message.split("\n")[0]}`);
    code = 1;
  }

  const left = cleanup();
  if (left.length) {
    reportLeftovers(left);
    return code || 3;
  }
  console.log("  disposable worktree removed; your checkout was not written");
  console.log("");
  return code;
}

function copyGraphInputs(dest) {
  const src = ".graphify";
  const out = [];
  if (!existsSync(src)) return out;
  const real = realpathSync(src);
  mkdirSync(dest, { recursive: true });
  for (const name of GRAPH_INPUTS) {
    const from = join(real, name);
    if (!existsSync(from) || !statSync(from).isFile()) continue;
    copyFileSync(from, join(dest, name));
    out.push([name, createHash("sha256").update(readFileSync(from)).digest("hex")]);
  }
  return out;
}

function reportLeftovers(left) {
  console.error("");
  console.error("  fixtures: cleanup did not complete. These task-owned paths remain, all");
  console.error("  under the temporary directory — none is in your checkout:");
  for (const p of left) console.error(`      ${p}`);
  console.error("  Remove them with `git worktree remove --force <path>` and `git worktree prune`.");
  console.error("");
}

/** Child: runs inside the disposable worktree, exactly as the runner always ran. */
async function runSuites() {
  const { SUITES } = await import("./suites.mjs");
  const results = [];
  let failedSuite = false;

  for (const [name, suite] of SUITES) {
    const before = results.length;
    try {
      await suite(results);
    } catch (e) {
      results.push({ name: `${name} — SUITE`, ok: false, detail: `threw: ${e.message}` });
      failedSuite = true;
    }
    const mine = results.slice(before);
    const bad = mine.filter((r) => !r.ok).length;
    console.log(`\n${bad ? "FAIL" : "ok  "}  ${name} — ${mine.length - bad}/${mine.length}`);
    for (const r of mine) console.log(`      ${r.ok ? "ok  " : "MISS"}  ${r.name} — ${r.detail}`);
  }

  // A suite that leaves the target dirty has cost more than it proved, so this
  // is reported as a failure of the fixtures themselves, not as a finding.
  const leftDirty = dirtyPaths();
  const clean = leftDirty.length === 0;
  const bad = results.filter((r) => !r.ok).length;

  console.log("");
  console.log(`  ${results.length - bad}/${results.length} fixtures behaved as intended`);
  if (clean) {
    console.log("  target restored: yes");
  } else {
    console.log("  target restored: NO — a fixture's restore did not take for:");
    for (const p of leftDirty) console.log(`      ${p}`);
    console.log("  The target is disposable, so your checkout is unaffected; the fixture is still defective.");
  }
  console.log("");
  process.exit(bad || failedSuite || !clean ? 1 : 0);
}
