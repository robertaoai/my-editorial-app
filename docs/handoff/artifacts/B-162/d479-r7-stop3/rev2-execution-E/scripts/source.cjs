// r4 Layers 5.4/6.4 and 7 for one unit in the source repository (rev2 overrides).
// Usage: node source.cjs 2a|2b
"use strict";
const fs = require("fs"), cp = require("child_process");
const L = require("./lib-run.cjs");
const unit = process.argv[2]; const B = L.BIND[unit]; L.must(B, "unit");
const OUT = `${L.E}/source/${unit}`; L.ensure(OUT);
const log = []; const step = (name, o) => { log.push({ step: name, at: L.now(), ...o }); L.writeJson(`${OUT}/source-log.json`, log); };
const MSG = {
  "2a": "docs(v1): D-479 2a - re-slot V1-SM05 to V1-SM07 and create the MMF-V1-PIPELINE packet\n\nApplies the D-479 commit 2a patch bound by the Judge-issued rebound r7 rev2 (2a.patch, 82,341 bytes, SHA-256 34fb8368c66b4e75599d5fcfec1bb68ba1810e16412b6005c772f919293b2e1d). Local only; not pushed.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n",
  "2b": "docs(v1): D-479 2b - scope notes, Intent Index, Phase Closure slot note and AGENTS read-order line\n\nApplies the D-479 commit 2b patch bound by the Judge-issued rebound r7 rev2 (2b.patch, 43,073 bytes, SHA-256 43530dad7c88079534e99972bacfb26b8ea84d35b781c6f1a92209f7bbf350fc). Local only; not pushed.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n",
};
const raw = (repo, blob) => cp.execFileSync("git", ["-C", repo, "cat-file", "blob", blob], { env: L.cleanEnv(), maxBuffer: 1 << 28 });
try {
  // 0. Date and bindings
  const d = L.sgtDate();
  step("date", { singaporeLocalDate: d, bound: "2026-11-13" });
  L.must(d === "2026-11-13", `Singapore-local date ${d} differs from the bound 2026-11-13`);
  const snap = JSON.parse(fs.readFileSync(`${L.E}/snapshot/${unit}/snapshot.json`, "utf8"));
  const S = snap.sha;
  L.must(snap.tree === B.outTree, "snapshot tree mismatch");
  const parentWant = unit === "2a" ? L.D486 : JSON.parse(fs.readFileSync(`${L.E}/source/2a/commit.json`, "utf8")).sha;
  L.must(L.gitOut(L.SRC, ["rev-parse", "HEAD"]) === parentWant, "source HEAD is not the required parent");
  L.must(L.gitOut(L.SRC, ["rev-parse", "HEAD^{tree}"]) === B.inTree, "source input tree mismatch");
  L.must(L.gitOut(L.SRC, ["status", "--porcelain=v1", "--untracked-files=all"]) === "", "source not clean");
  L.must(L.gitOut(L.SRC, ["symbolic-ref", "--short", "HEAD"]) === "features/feature-V1-SM05", "source branch mismatch");
  const XP = `${L.E}/snapshot/${unit}.patch`; const xb = fs.readFileSync(XP);
  L.must(xb.length === B.patch.bytes && L.sha(xb) === B.patch.sha256, "verified export pin mismatch");
  step("bindings", { parent: parentWant, inTree: B.inTree, snapshot: S, export: { path: XP, bytes: xb.length, sha256: L.sha(xb) } });

  // 1. Apply the verified export
  const chk = L.git(L.SRC, ["apply", "--check", XP]); L.must(chk.exit === 0, `apply --check: ${chk.stderr}`);
  const app = L.git(L.SRC, ["apply", XP]); L.must(app.exit === 0, `apply: ${app.stderr}`);
  step("apply", { checkExit: chk.exit, applyExit: app.exit });

  // 2. Working-tree bytes of every ledger path equal the candidate blob; no other changed path
  const ledger = JSON.parse(fs.readFileSync(`${L.E}/snapshot/${unit}/ledger-${unit}.json`, "utf8"));
  const lpaths = new Set(ledger.files.map((f) => f.path));
  const changed = L.gitOut(L.SRC, ["status", "--porcelain=v1", "--untracked-files=all", "--no-renames"]).split("\n").filter(Boolean).map((l) => l.slice(3));
  const extra = changed.filter((p) => !lpaths.has(p)), missing = [...lpaths].filter((p) => !changed.includes(p));
  L.must(extra.length === 0 && missing.length === 0, `changed paths differ from ledger: extra ${extra} missing ${missing}`);
  const byteChecks = [];
  for (const f of ledger.files) {
    const exists = fs.existsSync(`${L.SRC}/${f.path}`);
    if (!f.after) { L.must(!exists, `${f.path} should be deleted`); byteChecks.push({ path: f.path, deleted: true }); continue; }
    const wt = fs.readFileSync(`${L.SRC}/${f.path}`); const bl = raw(L.CL, f.after.blob);
    L.must(Buffer.compare(wt, bl) === 0, `${f.path} working bytes != candidate blob`);
    byteChecks.push({ path: f.path, bytes: wt.length, sha256: L.sha(wt), equalsCandidateBlob: true });
  }
  L.writeJson(`${OUT}/tested-bytes.json`, byteChecks);
  step("tested-bytes", { paths: byteChecks.length });

  // 3. Two complete sequential checks
  const runs = [];
  for (const n of [1, 2]) {
    const r = L.runCheck(L.SRC, `source ${unit} run ${n} (uncommitted candidate ${S})`, `${OUT}/check-${n}.txt`, { candidate: S, tree: B.outTree });
    const j = L.judgeCheck(r, unit);
    runs.push({ n, exit: r.exit, started: r.started, ended: r.ended, judgement: j });
    L.writeJson(`${OUT}/checks-judgement.json`, runs);
    L.must(r.before.head === parentWant && r.after.head === parentWant, "HEAD moved during a check");
    L.must(j.ok, `check run ${n}: ${j.problems.join("; ")}`);
  }
  // Bytes unchanged across the runs.
  for (const f of byteChecks.filter((x) => !x.deleted)) L.must(L.sha(fs.readFileSync(`${L.SRC}/${f.path}`)) === f.sha256, `${f.path} changed during checks`);
  step("checks", { runs: runs.map((r) => ({ n: r.n, exit: r.exit, fails: r.judgement.fails.map((f) => f.name) })) });

  // 4. Stage only the ledger paths; index listing equals the candidate tree listing
  const add = L.git(L.SRC, ["add", "-A", "--", ...lpaths]); L.must(add.exit === 0, `add: ${add.stderr}`);
  const idx = L.gitOut(L.SRC, ["ls-files", "-s"]).split("\n").map((l) => { const m = /^(\d+) ([0-9a-f]+) \d\t(.*)$/.exec(l); return `${m[1]} ${m[2]} ${m[3]}`; }).join("\n");
  const tr = L.gitOut(L.CL, ["ls-tree", "-r", S]).split("\n").map((l) => { const m = /^(\d+) blob ([0-9a-f]+)\t(.*)$/.exec(l); return `${m[1]} ${m[2]} ${m[3]}`; }).join("\n");
  fs.writeFileSync(`${OUT}/staged-ls-files.txt`, idx + "\n"); fs.writeFileSync(`${OUT}/candidate-ls-tree.txt`, tr + "\n");
  L.must(idx === tr, "staged index listing != candidate tree listing");
  L.must(L.gitOut(L.SRC, ["write-tree"]) === B.outTree, "staged tree != candidate tree");
  // Staged bytes equal tested bytes (blob identity plus byte compare).
  for (const f of ledger.files.filter((x) => x.after)) {
    const sb = L.gitOut(L.SRC, ["ls-files", "-s", "--", f.path]).split(/\s+/)[1];
    L.must(sb === f.after.blob && L.sha(raw(L.SRC, sb)) === f.after.sha256, `${f.path} staged bytes mismatch`);
  }
  step("staged", { indexEqualsCandidateTree: true });

  // 5. Commit (hooks enabled, traced)
  const d2 = L.sgtDate(); L.must(d2 === "2026-11-13", `Singapore-local date ${d2} differs from the bound 2026-11-13 (before commit)`);
  const msgFile = `${OUT}/commit-message.txt`; fs.writeFileSync(msgFile, MSG[unit]);
  const cm = L.git(L.SRC, ["-c", "core.hooksPath=.githooks", "commit", "-F", msgFile], { env: { ...L.IDENT, GIT_TRACE: "1", GIT_TRACE2: "1" } });
  fs.writeFileSync(`${OUT}/commit-trace.txt`, `# started ${cm.started}\n# ended ${cm.ended}\n# exit ${cm.exit}\n## stdout\n${cm.stdout}\n## stderr\n${cm.stderr}`);
  L.must(cm.exit === 0, `commit failed: ${cm.stderr.slice(-800)}`);
  const ht = L.hookTraceOk(cm.stderr);
  const hookRun = !!ht.run, hookExit = ht.ok;
  const C = L.gitOut(L.SRC, ["rev-parse", "HEAD"]);
  const parents = L.gitOut(L.SRC, ["rev-list", "--parents", "-n1", C]).split(" ").slice(1);
  const ctree = L.gitOut(L.SRC, ["rev-parse", "HEAD^{tree}"]);
  const meta = L.gitOut(L.SRC, ["log", "-1", "--format=%an <%ae>%n%cn <%ce>%n%ad%n%cd", "--date=iso-strict", C]);
  L.writeJson(`${OUT}/commit.json`, { sha: C, tree: ctree, parents, identityAndDates: meta, hookRunTraced: hookRun, hookChildExitTraced: hookExit, status: L.gitOut(L.SRC, ["status", "--porcelain=v1", "--untracked-files=all"]) });
  L.must(ht.ok, `hook trace not proven: ${JSON.stringify(ht)}`);
  L.must(parents.length === 1 && parents[0] === parentWant, "commit sole parent mismatch");
  L.must(ctree === B.outTree && ctree === snap.tree, "commit tree != candidate tree");
  // 6. Live graph store unchanged
  const gb = `${OUT}/graph-store-after.json`;
  const r = L.run("node", [`${L.E}/preflight/bind.cjs`, L.SRC, "C:/CoWork/myeditorialapp/.graphify", gb]);
  const a = JSON.parse(fs.readFileSync(`${L.E}/preflight/before.json`, "utf8")).graphStore.list;
  const b = JSON.parse(fs.readFileSync(gb, "utf8")).graphStore.list;
  L.must(r.exit === 0 && JSON.stringify(a) === JSON.stringify(b), "live graph store changed");
  step("commit", { sha: C, tree: ctree, parent: parents[0], hookRun, hookExit, graphStoreUnchanged: true });
  console.log(JSON.stringify({ unit, ok: true, commit: C, tree: ctree }));
} catch (e) {
  step("STOP", { error: String(e.message || e) });
  console.log(JSON.stringify({ unit, ok: false, error: String(e.message || e) }));
  process.exit(1);
}
