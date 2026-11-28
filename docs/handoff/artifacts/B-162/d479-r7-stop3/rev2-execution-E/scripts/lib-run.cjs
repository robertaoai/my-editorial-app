// Shared helpers for the r7 rev2 snapshot route and source steps. Each step writes evidence and throws on any failed control.
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const E = "C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const CL = `${E}/snapshot/clone`;
const TMPD = "C:\\CoWork\\outputs\\lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc\\snapshot\\tmp";
const SRC = "C:/robertaoai/my-editorial-app";
const PKG = "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2";
const D486 = "30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const BIND = {
  "2a": { patch: { bytes: 82341, sha256: "34fb8368c66b4e75599d5fcfec1bb68ba1810e16412b6005c772f919293b2e1d" }, inTree: "0b558d2a51f17eff755dfd7fba51bed37548f9ae", outTree: "cb70db9c54e835bcd6facdc6dd81d49bb811f57e",
    allowedGraph: ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md"] },
  "2b": { patch: { bytes: 43073, sha256: "43530dad7c88079534e99972bacfb26b8ea84d35b781c6f1a92209f7bbf350fc" }, inTree: "cb70db9c54e835bcd6facdc6dd81d49bb811f57e", outTree: "1fcc621e265f2587a2dd2741db8476fe4f99afd8",
    allowedGraph: ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md", "absent from the curated graph: docs/v1/V1-INTENT-INDEX.md"] },
};
const IDENT = { GIT_AUTHOR_NAME: "robertaoai", GIT_AUTHOR_EMAIL: "241258103+robertaoai@users.noreply.github.com", GIT_COMMITTER_NAME: "robertaoai", GIT_COMMITTER_EMAIL: "241258103+robertaoai@users.noreply.github.com" };
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const now = () => new Date().toISOString();
function cleanEnv(extra = {}) {
  const e = { ...process.env, ...extra };
  for (const k of ["GIT_INDEX_FILE", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_DIR", "GIT_WORK_TREE"]) delete e[k];
  return e;
}
// Authorized change after Stop 2: the npm shim `bun`/`bun.cmd` cannot be spawned without a shell; spawn the exact binary it execs.
const BUN_EXE = "C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe";
function run(cmd, args, opts = {}) {
  if (cmd === "bun") cmd = BUN_EXE;
  const started = now();
  const r = cp.spawnSync(cmd, args, { encoding: "utf8", maxBuffer: 1 << 28, env: cleanEnv(opts.env || {}), cwd: opts.cwd, shell: false, input: opts.input });
  return { cmd: [cmd, ...args].join(" "), cwd: opts.cwd || null, started, ended: now(), exit: r.status, stdout: r.stdout || "", stderr: r.stderr || "", error: r.error ? String(r.error) : null };
}
function git(repo, args, opts = {}) { return run("git", ["-C", repo, ...args], opts); }
function gitOut(repo, args, opts = {}) { const r = git(repo, args, opts); if (r.exit !== 0) throw new Error(`git ${args.join(" ")} failed: ${r.stderr}`); return r.stdout.trim(); }
function ensure(dir) { fs.mkdirSync(dir, { recursive: true }); }
function writeJson(p, o) { ensure(path.dirname(p)); fs.writeFileSync(p, JSON.stringify(o, null, 2) + "\n"); }
function must(cond, msg) { if (!cond) throw new Error(`STOP: ${msg}`); }
function sgtDate() { return new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10); }

// Parse the consistency runner output into an inventory and finding sets.
function parseCheck(stdout) {
  const lines = stdout.split(/\r?\n/);
  const checks = []; let cur = null;
  for (const l of lines) {
    const m = /^  (PASS|FAIL|SKIP)  (\S+)\s+(.*)$/.exec(l);
    if (m) { cur = { status: m[1], name: m[2], detail: m[3], findings: [] }; checks.push(cur); continue; }
    if (cur && cur.status === "FAIL" && /^        \S/.test(l)) cur.findings.push(l.slice(8));
    else if (!/^        /.test(l)) cur = null;
  }
  const summary = lines.find((l) => /consistency checks/.test(l)) || null;
  return { checks, summary };
}
// Run `bun run check` with a candidate binding before and after.
function runCheck(repo, label, outFile, { candidate, tree, env = {} } = {}) {
  const before = { head: gitOut(repo, ["rev-parse", "HEAD"]), tree: gitOut(repo, ["rev-parse", "HEAD^{tree}"]) };
  const r = run("bun", ["run", "check"], { cwd: repo, env });
  const after = { head: gitOut(repo, ["rev-parse", "HEAD"]), tree: gitOut(repo, ["rev-parse", "HEAD^{tree}"]) };
  const parsed = parseCheck(r.stdout);
  const header = `# bun run check — ${label}\n# cwd ${repo}\n# candidate ${candidate || "-"} tree ${tree || "-"}\n# before HEAD ${before.head} tree ${before.tree}\n# started ${r.started}\n# ended ${r.ended}\n# exit ${r.exit}\n# after HEAD ${after.head} tree ${after.tree}\n## stdout\n`;
  ensure(path.dirname(outFile));
  fs.writeFileSync(outFile, header + r.stdout + "\n## stderr\n" + r.stderr);
  return { label, outFile, exit: r.exit, started: r.started, ended: r.ended, before, after, parsed };
}
// Permitted failures for a unit: docs-drift (any findings) and graph-coverage with exactly the named findings.
function judgeCheck(res, unit, { extraExpected = null } = {}) {
  const inv = res.parsed.checks;
  const skips = inv.filter((c) => c.status === "SKIP");
  const fails = inv.filter((c) => c.status === "FAIL");
  const problems = [];
  if (inv.length !== 19) problems.push(`inventory ${inv.length}, expected 19`);
  if (skips.length) problems.push(`SKIP: ${skips.map((s) => s.name).join(", ")}`);
  for (const f of fails) {
    if (f.name === "docs-drift") continue;
    if (f.name === "graph-coverage") {
      const want = [...BIND[unit].allowedGraph].sort(), got = [...f.findings].sort();
      if (JSON.stringify(want) !== JSON.stringify(got)) problems.push(`graph-coverage findings ${JSON.stringify(got)} != permitted ${JSON.stringify(want)}`);
      continue;
    }
    if (extraExpected && f.name === extraExpected.check) continue; // judged separately by the negative test
    problems.push(`unexpected FAIL ${f.name}: ${JSON.stringify(f.findings)}`);
  }
  return { inventory: inv.length, skips: skips.length, fails: fails.map((f) => ({ name: f.name, findings: f.findings })), problems, ok: problems.length === 0 };
}
// Hook trace control (authorized change after Stop 1): the commit-msg hook's run_command line, which git may prefix with
// environment assignments, plus the child_exit code:0 of that same child (GIT_TRACE2 child_start/child_exit pair).
function hookTraceOk(stderr) {
  const lines = stderr.split(/\r?\n/);
  const run = lines.find((l) => /trace: run_command: (?:\S+=\S* )*\.githooks\/commit-msg /.test(l));
  const start = lines.find((l) => /child_start\[(\d+)\] \.githooks\/commit-msg /.test(l));
  if (!run || !start) return { ok: false, run: run || null, start: start || null, exit: null };
  const id = /child_start\[(\d+)\]/.exec(start)[1];
  const i = lines.indexOf(start);
  const exit = lines.slice(i + 1).find((l) => new RegExp(`child_exit\\[${id}\\] .*code:`).test(l)) || null;
  return { ok: !!exit && /code:0\b/.test(exit), run, start, exit };
}
module.exports = { hookTraceOk, E, CL, TMPD, SRC, PKG, D486, BIND, IDENT, sha, now, run, git, gitOut, ensure, writeJson, must, sgtDate, parseCheck, runCheck, judgeCheck, cleanEnv };
