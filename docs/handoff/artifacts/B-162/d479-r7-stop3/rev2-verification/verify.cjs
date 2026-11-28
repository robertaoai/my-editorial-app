// Lane A verification of the rebound r7 -rev2 review package (read-only on repo and package).
// Usage: node verify.cjs <repo> <pkg> <work> <disposition> <outDir>
// Writes only under <work> (scratch object store, index, extracted trees) and <outDir> (retained evidence).
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const [REPO, PKG, WORK, DISP, OUT] = process.argv.slice(2);
const BASE = "30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const EXPECT = {
  baseTree: "0b558d2a51f17eff755dfd7fba51bed37548f9ae",
  t2a: "cb70db9c54e835bcd6facdc6dd81d49bb811f57e",
  t2b: "1fcc621e265f2587a2dd2741db8476fe4f99afd8",
  manifestSha: "e1fd1937f05e084da2dcc2b5ec1e50f802051238b3c6c8392f61c2bb687be767",
  pcBefore: "a96e5c1c4c6497ac2034ed47a490d19b7f9110b5",
  pcAfter: "bdc025fb0f9abcade35346121e490c6202a7fcf7",
};
const E_ROOT = "C:/CoWork/outputs/lane-a-d479-2a-2b-r7-30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const failures = [];
const must = (cond, msg) => { if (!cond) failures.push(msg); return cond; };

// Plain git against the real repo: read-only queries only.
function gitRepo(args) {
  return cp.execFileSync("git", ["-C", REPO, ...args], { encoding: "utf8", env: cleanEnv() }).trimEnd();
}
function cleanEnv() {
  const e = { ...process.env };
  delete e.GIT_INDEX_FILE; delete e.GIT_OBJECT_DIRECTORY; delete e.GIT_ALTERNATE_OBJECT_DIRECTORIES;
  return e;
}
// Isolated git: new object store and index under WORK, repo objects as a read-only alternate.
const OBJ = path.join(WORK, "objects"), IDX = path.join(WORK, "index");
const isoEnv = { ...cleanEnv(), GIT_OBJECT_DIRECTORY: OBJ, GIT_ALTERNATE_OBJECT_DIRECTORIES: path.join(REPO, ".git", "objects"), GIT_INDEX_FILE: IDX };
function git(args, opts = {}) {
  const r = cp.spawnSync("git", ["-C", REPO, ...args], { env: isoEnv, maxBuffer: 1 << 28, ...opts });
  return { exit: r.status, out: r.stdout, err: r.stderr ? r.stderr.toString() : "" };
}
const gitText = (args) => { const r = git(args); if (r.exit !== 0) throw new Error(`git ${args.join(" ")}: ${r.err}`); return r.out.toString().trimEnd(); };
const blobBytes = (spec) => { const r = git(["cat-file", "-p", spec]); if (r.exit !== 0) throw new Error(`cat-file ${spec}: ${r.err}`); return r.out; };

// 1. Preflight
fs.mkdirSync(OBJ, { recursive: true });
const pre = {
  observedAtUtc: new Date().toISOString(),
  head: gitRepo(["rev-parse", "HEAD"]),
  headTree: gitRepo(["rev-parse", "HEAD^{tree}"]),
  upstream: gitRepo(["rev-parse", "@{u}"]),
  aheadBehind: gitRepo(["rev-list", "--left-right", "--count", "HEAD...@{u}"]),
  porcelain: gitRepo(["status", "--porcelain"]),
  evidenceRootAbsent: !fs.existsSync(E_ROOT),
};
must(pre.head === BASE, "HEAD is not D-486");
must(pre.headTree === EXPECT.baseTree, "HEAD tree mismatch");
must(pre.aheadBehind.replace(/\s+/g, " ") === "1 0", "divergence is not 1 ahead, 0 behind");
must(pre.porcelain === "", "working tree or index not clean");
must(pre.evidenceRootAbsent, "evidence root E exists");

// 2. Manifest
const manifestBytes = fs.readFileSync(path.join(PKG, "manifest.json"));
const manifest = JSON.parse(manifestBytes);
const mcheck = { manifest: { bytes: manifestBytes.length, sha256: sha(manifestBytes) }, members: [], unlisted: [] };
must(mcheck.manifest.sha256 === EXPECT.manifestSha, "manifest SHA-256 mismatch");
for (const m of manifest.members) {
  const b = fs.readFileSync(path.join(PKG, m.file));
  const row = { file: m.file, bytes: b.length, sha256: sha(b), match: b.length === m.bytes && sha(b) === m.sha256 };
  must(row.match, `member mismatch: ${m.file}`);
  mcheck.members.push(row);
}
const listed = new Set([...manifest.members.map((m) => m.file), "manifest.json"]);
for (const f of fs.readdirSync(PKG)) if (!listed.has(f)) mcheck.unlisted.push(f);
must(mcheck.unlisted.length === 0, "unlisted file in package");
must(manifest.base === BASE, "manifest base mismatch");

// 3. Fresh sequential replay
const replay = { method: "git apply --cached --check, then git apply --cached, in a new isolated index and object store; repo objects as read-only alternate; no commit, no working-tree write", units: [] };
must(git(["read-tree", BASE + "^{tree}"]).exit === 0, "read-tree base failed");
let from = gitText(["write-tree"]);
must(from === EXPECT.baseTree, "isolated start tree mismatch");
for (const [unit, want] of [["2a", EXPECT.t2a], ["2b", EXPECT.t2b]]) {
  const p = path.join(PKG, `${unit}.patch`);
  const pb = fs.readFileSync(p);
  const chk = git(["apply", "--cached", "--check", p]);
  const app = chk.exit === 0 ? git(["apply", "--cached", p]) : { exit: null, err: "skipped" };
  const to = app.exit === 0 ? gitText(["write-tree"]) : null;
  const exp = to ? git(["diff", "--binary", "--full-index", "--find-renames", from, to]).out : Buffer.alloc(0);
  const u = { unit, from, to, expected: want, applyCheckExit: chk.exit, applyExit: app.exit,
    patch: { bytes: pb.length, sha256: sha(pb) }, reexport: { bytes: exp.length, sha256: sha(exp), equalsPackagePatch: Buffer.compare(exp, pb) === 0 } };
  must(chk.exit === 0 && app.exit === 0, `${unit} apply failed`);
  must(to === want, `${unit} result tree mismatch`);
  must(u.reexport.equalsPackagePatch, `${unit} re-export differs from package patch`);
  replay.units.push(u);
  from = to;
}

// 3b. Ledgers against the replayed trees
replay.ledgers = [];
for (const unit of ["2a", "2b"]) {
  const l = JSON.parse(fs.readFileSync(path.join(PKG, `ledger-${unit}.json`)));
  const u = replay.units.find((x) => x.unit === unit);
  const res = { unit, fromTree: l.fromTree === u.from, toTree: l.toTree === u.to, files: [] };
  must(res.fromTree && res.toTree, `ledger-${unit} tree mismatch`);
  const changed = gitText(["diff-tree", "-r", "--no-renames", "--name-only", u.from, u.to]).split("\n").filter(Boolean).sort();
  const ledgerPaths = l.files.map((f) => f.path).sort();
  res.pathSetEqual = JSON.stringify(changed) === JSON.stringify(ledgerPaths);
  must(res.pathSetEqual, `ledger-${unit} path set differs from tree diff`);
  for (const f of l.files) {
    const r = { path: f.path, status: f.status };
    for (const [side, tree] of [["before", u.from], ["after", u.to]]) {
      const ent = f[side];
      const ls = gitText(["ls-tree", tree, "--", f.path]);
      if (!ent) { r[side] = ls === "" ? "absent ok" : "UNEXPECTED PRESENT"; must(ls === "", `${unit} ${f.path} ${side} should be absent`); continue; }
      const [mode, , blob] = ls.split(/\s+/);
      const b = blobBytes(blob);
      const ok = mode === ent.mode && blob === ent.blob && b.length === ent.bytes && sha(b) === ent.sha256;
      r[side] = ok ? "ok" : "MISMATCH";
      must(ok, `${unit} ${f.path} ${side} mismatch`);
    }
    res.files.push(r);
  }
  replay.ledgers.push(res);
}

// 3c. Only delta between original 2b result and revised 2b result
{
  const ORIG2B = "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc/2b.patch";
  const env2 = { ...isoEnv, GIT_INDEX_FILE: path.join(WORK, "index-orig2b") };
  const run2 = (a) => cp.spawnSync("git", ["-C", REPO, ...a], { env: env2, encoding: "utf8" });
  must(run2(["read-tree", EXPECT.t2a]).status === 0 && run2(["apply", "--cached", ORIG2B]).status === 0, "original 2b replay failed");
  const orig = run2(["write-tree"]).stdout.trim();
  must(orig === "496eab1f6ef4b02df9e5ff3a226d45ea5f3493c8", "original 2b tree mismatch");
  replay.original2b = { patch: ORIG2B, sha256: sha(fs.readFileSync(ORIG2B)), tree: orig };
  replay.deltaVsOriginal2b = gitText(["diff-tree", "-r", orig, EXPECT.t2b]);
  must(replay.deltaVsOriginal2b.split("\n").length === 1 && replay.deltaVsOriginal2b.endsWith("\tdocs/v1/V1-PHASE-CLOSURE.md"), "delta vs original 2b is not Phase Closure only");
}

// 4. Phase Closure byte comparison
const PC = "docs/v1/V1-PHASE-CLOSURE.md";
const pcBlobBefore = gitText(["rev-parse", `${EXPECT.t2a}:${PC}`]);
const pcBlobAfter = gitText(["rev-parse", `${EXPECT.t2b}:${PC}`]);
const pb = blobBytes(pcBlobBefore), pa = blobBytes(pcBlobAfter);
const lb = pb.toString("utf8").split("\n"), la = pa.toString("utf8").split("\n");
const dispLines = fs.readFileSync(DISP, "utf8").replace(/\r/g, "").split("\n");
const note = dispLines.find((s) => s.startsWith("> **Slot note, `D-479`.**"));
const eq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
const pcc = {
  before: { blob: pcBlobBefore, bytes: pb.length, sha256: sha(pb) },
  after: { blob: pcBlobAfter, bytes: pa.length, sha256: sha(pa) },
  sourceOfNote: { file: DISP, sha256: sha(fs.readFileSync(DISP)) },
  lines1to385Equal: eq(lb.slice(0, 385), la.slice(0, 385)),
  table380to384: lb.slice(379, 384).map((s, i) => ({ line: 380 + i, equal: s === la[379 + i], sha256: sha(Buffer.from(s)) })),
  laneBCellLine383Equal: lb[382] === la[382] && lb[382].includes("(`V1-SM05` `BLOCKED`)"),
  line386EqualsDispositionNote: la[385] === note,
  line387Blank: la[386] === "",
  restEqualShiftedBy2: eq(lb.slice(385), la.slice(387)),
  noCR: !pb.includes(13) && !pa.includes(13),
};
must(pcBlobBefore === EXPECT.pcBefore && pcBlobAfter === EXPECT.pcAfter, "Phase Closure blob mismatch");
for (const k of ["lines1to385Equal", "laneBCellLine383Equal", "line386EqualsDispositionNote", "line387Blank", "restEqualShiftedBy2", "noCR"]) must(pcc[k], `Phase Closure: ${k} false`);
must(pcc.table380to384.every((r) => r.equal), "Phase Closure table rows differ");

// 5. lane-state on extracted trees
const laneState = { method: "git archive of each tree into scratch; node imports scripts/checks/lane-state.mjs from that tree and calls run() with cwd = tree root", results: [] };
for (const [label, tree] of [["baseline", EXPECT.t2a], ["revised", EXPECT.t2b]]) {
  const dir = path.join(WORK, `tree-${label}`);
  fs.mkdirSync(dir, { recursive: true });
  // git archive honours the repo's `/docs export-ignore`, so materialize with checkout-index from a separate scratch index.
  const envX = { ...isoEnv, GIT_INDEX_FILE: path.join(WORK, `index-${label}`) };
  const rt = cp.spawnSync("git", ["-C", REPO, "read-tree", tree], { env: envX, encoding: "utf8" });
  const co = cp.spawnSync("git", ["-c", "core.longpaths=true", "-C", REPO, "checkout-index", "-a", "-f", `--prefix=${dir.replace(/\\/g, "/")}/`], { env: envX, encoding: "utf8" });
  must(rt.status === 0 && co.status === 0, `materialize ${label} failed: ${rt.stderr}${co.stderr}`);
  const blobPC = gitText(["rev-parse", `${tree}:${PC}`]);
  must(sha(fs.readFileSync(path.join(dir, PC))) === sha(blobBytes(blobPC)), `${label} materialized Phase Closure differs from blob`);
  const pcBytes = fs.readFileSync(path.join(dir, PC));
  const code = "import('./scripts/checks/lane-state.mjs').then(m=>{const r=m.run();process.stdout.write(JSON.stringify(r));}).catch(e=>{console.error(e);process.exit(2);})";
  const r = cp.spawnSync(process.execPath, ["--input-type=commonjs", "-e", code], { cwd: dir, env: cleanEnv(), encoding: "utf8" });
  let result = null; try { result = JSON.parse(r.stdout); } catch { /* keep null */ }
  laneState.results.push({ label, tree, phaseClosure: { bytes: pcBytes.length, sha256: sha(pcBytes) }, exit: r.status, stderr: r.stderr, result });
  must(r.status === 0 && result, `lane-state ${label} did not run`);
}
const [ls0, ls1] = laneState.results;
laneState.preExistingFindings = ls0.result ? ls0.result.findings : null;
laneState.newFindings = ls0.result && ls1.result ? ls1.result.findings.filter((f) => !ls0.result.findings.includes(f)) : null;
laneState.detailUnchanged = !!(ls0.result && ls1.result && ls0.result.detail === ls1.result.detail);
must(laneState.newFindings && laneState.newFindings.length === 0, "lane-state: new finding on revised bytes");
must(laneState.detailUnchanged, "lane-state detail changed");

// 6. Date sites
const dates = {};
for (const unit of ["2a", "2b"]) {
  const t = fs.readFileSync(path.join(PKG, `${unit}.patch`), "utf8").split("\n");
  dates[unit] = {
    plus20261113: t.filter((s) => s.startsWith("+") && !s.startsWith("+++")).reduce((n, s) => n + (s.match(/2026-11-13/g) || []).length, 0),
    contextOrMinus20261113: t.filter((s) => /^[ -]/.test(s) && !s.startsWith("---")).filter((s) => s.includes("2026-11-13")).length,
    plusD486: t.filter((s) => s.startsWith("+") && s.includes("D-486")).length,
    plus20260928: t.filter((s) => s.startsWith("+") && s.includes("2026-09-28")).length,
  };
}
must(dates["2a"].plus20261113 === 10 && dates["2a"].contextOrMinus20261113 === 0, "2a date sites not 10");
must(dates["2b"].plus20261113 === 2 && dates["2b"].contextOrMinus20261113 === 0, "2b date sites not 2");

// Post-check: repo untouched
const post = { porcelain: gitRepo(["status", "--porcelain"]), head: gitRepo(["rev-parse", "HEAD"]) };
must(post.porcelain === "" && post.head === BASE, "repo changed during verification");

// Write evidence
fs.mkdirSync(OUT, { recursive: false });
const write = (n, o) => fs.writeFileSync(path.join(OUT, n), JSON.stringify(o, null, 2) + "\n");
write("preflight.json", { pre, post });
write("manifest-check.json", mcheck);
write("replay.json", replay);
write("phase-closure-compare.json", pcc);
write("lane-state.json", laneState);
write("date-sites.json", dates);
write("result.json", { package: PKG, failures, pass: failures.length === 0, finishedAtUtc: new Date().toISOString() });
console.log(JSON.stringify({ pass: failures.length === 0, failures }, null, 2));
