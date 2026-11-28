// r4 Layer 4a route for one unit in CL (rev2 overrides): apply the bound patch, ledger, snapshot commit,
// fixtures, jev:selftest, prediction check, negative test, export. Usage: node route.cjs 2a|2b [C2A_SHA]
"use strict";
const fs = require("fs"), path = require("path");
const L = require("./lib-run.cjs");
const unit = process.argv[2];
const RESUME = (process.argv.find((a) => a.startsWith("--resume=")) || "").slice(9) || null;
const C2A = process.argv.slice(3).find((a) => !a.startsWith("--")) || null;
const B = L.BIND[unit]; L.must(B, "unit");
const OUT = `${L.E}/snapshot/${unit}`; L.ensure(OUT);
const log = []; const step = (name, o) => { log.push({ step: name, at: L.now(), ...o }); L.writeJson(`${OUT}/route-log.json`, log); };
const NEG = {
  "2a": { path: "docs/v1/work-packets/V1/V1-SM05.md", line: 4, old: "Not started", new: "Notundefined started", check: "text-integrity",
    expected: 'docs/v1/work-packets/V1/V1-SM05.md:4: spliced "undefined" after "t" — a script wrote an undefined value into the text (`D-380`, `D-381`); rewrite the line from its source',
    claim: "the new MMF-V1-PIPELINE packet that 2a creates is inside the governed markdown corpus the checks scan" },
  "2b": { path: "docs/v1/V1-INTENT-INDEX.md", line: 1, old: "# V1 Intent Index", new: "# V1 Intentundefined Index", check: "text-integrity",
    expected: 'docs/v1/V1-INTENT-INDEX.md:1: spliced "undefined" after "t" — a script wrote an undefined value into the text (`D-380`, `D-381`); rewrite the line from its source',
    claim: "the Intent Index that 2b creates is inside the governed markdown corpus the checks scan" },
};
try {
  // 0. Base and preconditions
  let BASE;
  if (unit === "2a") {
    BASE = L.D486;
    if (!RESUME) L.must(L.gitOut(L.CL, ["rev-parse", "HEAD"]) === BASE, "CL HEAD is not D486");
  } else {
    const s2a = JSON.parse(fs.readFileSync(`${L.E}/snapshot/2a/snapshot.json`, "utf8")).sha;
    L.must(C2A, "C2A_SHA required for 2b");
    L.must(L.gitOut(L.SRC, ["rev-parse", `${C2A}^{tree}`]) === L.gitOut(L.CL, ["rev-parse", `${s2a}^{tree}`]), "C2A tree != S2A tree");
    const co = L.git(L.CL, ["checkout", "--detach", s2a]); L.must(co.exit === 0, "checkout S2A failed");
    BASE = s2a;
    // Re-verify the CL/.graphify copies.
    const r = L.run("node", [`${L.E}/preflight/bind.cjs`, L.CL, `${L.CL}/.graphify`, `${OUT}/cl-graphify-recheck.json`]);
    const a = JSON.parse(fs.readFileSync(`${L.E}/snapshot/cl-graphify-copy.json`, "utf8")).graphStore.list;
    const b = JSON.parse(fs.readFileSync(`${OUT}/cl-graphify-recheck.json`, "utf8")).graphStore.list;
    L.must(r.exit === 0 && JSON.stringify(a) === JSON.stringify(b), "CL/.graphify copies changed");
  }
  if (!RESUME) {
    L.must(L.gitOut(L.CL, ["rev-parse", "HEAD^{tree}"]) === B.inTree, "CL input tree mismatch");
    L.must(L.gitOut(L.CL, ["status", "--porcelain=v1", "--untracked-files=all"]) === "", "CL not clean");
  }
  step("base", { base: BASE, tree: B.inTree, resume: RESUME });

  const P = `${L.PKG}/${unit}.patch`; const pb = fs.readFileSync(P);
  L.must(pb.length === B.patch.bytes && L.sha(pb) === B.patch.sha256, "package patch pin mismatch");
  let S, tree;
  if (RESUME) {
    // Resume after Stop 1 (Judge-authorized): validate the existing snapshot and its recorded trace; no re-snapshot.
    S = RESUME;
    tree = L.gitOut(L.CL, ["rev-parse", `${S}^{tree}`]);
    const parents = L.gitOut(L.CL, ["rev-list", "--parents", "-n1", S]).split(" ").slice(1);
    L.must(L.gitOut(L.CL, ["rev-parse", "HEAD"]) === S, "CL HEAD is not the resumed snapshot");
    L.must(parents.length === 1 && parents[0] === BASE && tree === B.outTree, "resumed snapshot bindings mismatch");
    L.must(L.gitOut(L.CL, ["status", "--porcelain=v1", "--untracked-files=all"]) === "", "CL not clean at resume");
    L.must(L.gitOut(L.CL, ["log", "-1", "--format=%B", S]) === "SNAPSHOT — test artifact; not for the source branch", "snapshot message mismatch");
    const tr = fs.readFileSync(`${OUT}/snapshot-commit-trace.txt`, "utf8");
    const ht = L.hookTraceOk(tr);
    L.must(ht.ok, "hook trace not proven for the snapshot commit");
    L.must(fs.existsSync(`${OUT}/ledger-${unit}.json`), "ledger missing");
    const subject = L.gitOut(L.CL, ["log", "-1", "--format=%s%n%an <%ae>%n%cn <%ce>", S]);
    L.writeJson(`${OUT}/snapshot.json`, { sha: S, tree, parent: parents[0], subjectAndIdentity: subject, hookTrace: ht, resumedAfterStop1: true });
    step("resume", { sha: S, tree, parent: parents[0], hookTrace: ht });
  } else {
  // 1. Apply the bound package patch
  const chk = L.git(L.CL, ["apply", "--check", P]); L.must(chk.exit === 0, `apply --check: ${chk.stderr}`);
  const app = L.git(L.CL, ["apply", P]); L.must(app.exit === 0, `apply: ${app.stderr}`);
  step("apply", { patch: P, bytes: pb.length, sha256: L.sha(pb), checkExit: chk.exit, applyExit: app.exit });

  // 2. Stage and ledger relative to BASE
  L.must(L.git(L.CL, ["add", "-A"]).exit === 0, "add -A failed");
  const names = L.gitOut(L.CL, ["diff", "--cached", "--no-renames", "--name-status", BASE]).split("\n").filter(Boolean);
  const ledger = { base: BASE, files: [] };
  for (const ln of names) {
    const [st, p] = ln.split("\t");
    const ent = { path: p, status: st };
    for (const [side, ref] of [["before", BASE], ["after", null]]) {
      const ls = ref ? L.gitOut(L.CL, ["ls-tree", ref, "--", p]) : L.gitOut(L.CL, ["ls-files", "-s", "--", p]);
      if (!ls) { ent[side] = null; continue; }
      const parts = ls.split(/\s+/); const mode = parts[0], blob = parts[ref ? 2 : 1];
      const raw = require("child_process").execFileSync("git", ["-C", L.CL, "cat-file", "blob", blob], { env: L.cleanEnv() });
      ent[side] = { mode, blob, bytes: raw.length, sha256: L.sha(raw) };
    }
    ledger.files.push(ent);
  }
  L.writeJson(`${OUT}/ledger-${unit}.json`, ledger);
  // Cross-check with the package ledger (same paths and blobs).
  const pl = JSON.parse(fs.readFileSync(`${L.PKG}/ledger-${unit}.json`, "utf8"));
  const key = (fs_) => fs_.map((f) => `${f.path}|${f.status}|${f.before ? f.before.blob : "-"}|${f.after ? f.after.blob : "-"}`).sort().join("\n");
  L.must(key(ledger.files) === key(pl.files), "ledger differs from package ledger");
  step("ledger", { paths: ledger.files.length, equalsPackageLedger: true });

  // 3. Snapshot commit
  const msg = `${OUT}/snapshot-message.txt`; fs.writeFileSync(msg, "SNAPSHOT — test artifact; not for the source branch\n");
  const cm = L.git(L.CL, ["-c", "core.hooksPath=.githooks", "commit", "-F", msg], { env: { ...L.IDENT, GIT_TRACE: "1", GIT_TRACE2: "1" } });
  fs.writeFileSync(`${OUT}/snapshot-commit-trace.txt`, `# exit ${cm.exit}\n## stdout\n${cm.stdout}\n## stderr\n${cm.stderr}`);
  L.must(cm.exit === 0, `snapshot commit failed: ${cm.stderr.slice(-500)}`);
  const ht = L.hookTraceOk(cm.stderr);
  L.must(ht.ok, "hook trace missing for snapshot commit");
  S = L.gitOut(L.CL, ["rev-parse", "HEAD"]);
  const parents = L.gitOut(L.CL, ["rev-list", "--parents", "-n1", S]).split(" ").slice(1);
  tree = L.gitOut(L.CL, ["rev-parse", "HEAD^{tree}"]);
  L.must(parents.length === 1 && parents[0] === BASE, "snapshot sole parent mismatch");
  L.must(tree === B.outTree, `snapshot tree ${tree} != ${B.outTree}`);
  const subject = L.gitOut(L.CL, ["log", "-1", "--format=%s%n%an <%ae>%n%cn <%ce>", S]);
  L.writeJson(`${OUT}/snapshot.json`, { sha: S, tree, parent: parents[0], subjectAndIdentity: subject, hookTrace: ht });
  step("snapshot", { sha: S, tree, parent: parents[0], hookTrace: ht });
  }

  const bindCand = () => { const h = L.gitOut(L.CL, ["rev-parse", "HEAD"]), t = L.gitOut(L.CL, ["rev-parse", "HEAD^{tree}"]); L.must(h === S && t === tree, "candidate binding changed during a run"); return { head: h, tree: t }; };
  const TENV = { TMP: L.TMPD, TEMP: L.TMPD };

  // 4. Fixtures
  bindCand();
  const fx = L.run("bun", ["run", "fixtures"], { cwd: L.CL, env: TENV });
  fs.writeFileSync(`${OUT}/fixtures.txt`, `# bun run fixtures, cwd ${L.CL}, candidate ${S} tree ${tree}, TMP=TEMP=${L.TMPD}\n# started ${fx.started}\n# ended ${fx.ended}\n# exit ${fx.exit}\n## stdout\n${fx.stdout}\n## stderr\n${fx.stderr}`);
  bindCand();
  L.must(fx.exit === 0, "fixtures failed");
  L.must(fx.stdout.includes(S) || fx.stdout.includes(S.slice(0, 7)), "fixtures report does not name the candidate");
  step("fixtures", { exit: fx.exit, namesCandidate: true });

  // 5. jev:selftest with invocation record
  bindCand();
  const blobs = {};
  for (const p of ["scripts/jev/lib.mjs", "scripts/jev/selftest.mjs"]) {
    const ls = L.gitOut(L.CL, ["ls-tree", S, "--", p]).split(/\s+/);
    const wt = fs.readFileSync(`${L.CL}/${p}`);
    const blobRaw = require("child_process").execFileSync("git", ["-C", L.CL, "cat-file", "blob", ls[2]], { env: L.cleanEnv() });
    L.must(Buffer.compare(wt, blobRaw) === 0, `${p} working bytes != candidate blob`);
    blobs[p] = { blob: ls[2], bytes: wt.length, sha256: L.sha(wt) };
  }
  const st = L.run("bun", ["run", "jev:selftest"], { cwd: L.CL, env: TENV });
  bindCand();
  L.writeJson(`${OUT}/jev-selftest.json`, { cwd: L.CL, candidate: S, tree, blobs, command: st.cmd, started: st.started, ended: st.ended, exit: st.exit, stdout: st.stdout, stderr: st.stderr });
  L.must(st.exit === 0, "jev:selftest failed");
  step("jev-selftest", { exit: st.exit });

  // 6. Prediction check
  const pred = L.runCheck(L.CL, `prediction ${unit} on ${S}`, `${OUT}/prediction-check.txt`, { candidate: S, tree, env: TENV });
  bindCand();
  const pj = L.judgeCheck(pred, unit);
  L.writeJson(`${OUT}/prediction-judgement.json`, pj);
  L.must(pj.ok, `prediction check: ${pj.problems.join("; ")}`);
  step("prediction", { exit: pred.exit, fails: pj.fails.map((f) => f.name) });

  // 7. Negative test (recorded before the mutation)
  const N = NEG[unit];
  const blobLs = L.gitOut(L.CL, ["ls-tree", S, "--", N.path]).split(/\s+/);
  const orig = fs.readFileSync(`${L.CL}/${N.path}`);
  const lines = orig.toString("utf8").split("\n");
  L.must(lines[N.line - 1].includes(N.old) && !lines[N.line - 1].includes("undefined"), "negative-test anchor not found");
  const baseline = pj.fails;
  L.writeJson(`${OUT}/negative-test-plan.json`, { recordedAt: L.now(), ...N, candidate: S, blob: blobLs[2], baselineFailures: baseline });
  lines[N.line - 1] = lines[N.line - 1].replace(N.old, N.new);
  fs.writeFileSync(`${L.CL}/${N.path}`, lines.join("\n"));
  const neg = L.runCheck(L.CL, `negative test ${unit} on ${S} (working-tree mutation of ${N.path}:${N.line})`, `${OUT}/negative-check.txt`, { candidate: S, tree, env: TENV });
  // Restore before judging.
  fs.writeFileSync(`${L.CL}/${N.path}`, orig);
  const blobRaw = require("child_process").execFileSync("git", ["-C", L.CL, "cat-file", "blob", blobLs[2]], { env: L.cleanEnv() });
  const restored = Buffer.compare(fs.readFileSync(`${L.CL}/${N.path}`), blobRaw) === 0;
  const cleanAfter = L.gitOut(L.CL, ["status", "--porcelain=v1", "--untracked-files=all"]) === "";
  bindCand();
  const expectedSet = JSON.stringify([...baseline.map((f) => `${f.name}|${[...f.findings].sort().join("||")}`), `${N.check}|${N.expected}`].sort());
  const observed = neg.parsed.checks.filter((c) => c.status === "FAIL").map((f) => ({ name: f.name, findings: f.findings }));
  const observedSet = JSON.stringify(observed.map((f) => `${f.name}|${[...f.findings].sort().join("||")}`).sort());
  const negOk = expectedSet === observedSet && neg.parsed.checks.length === 19 && !neg.parsed.checks.some((c) => c.status === "SKIP");
  L.writeJson(`${OUT}/negative-test-result.json`, { observedFailures: observed, expectedSetEqualsObserved: negOk, restoredBytesEqualBlob: restored, cleanStatusAfter: cleanAfter });
  L.must(negOk, "negative test finding set != baseline + expected");
  L.must(restored && cleanAfter, "negative test restoration failed");
  step("negative-test", { ok: true });

  // 8. Export and compare with the bound patch
  const ex = require("child_process").execFileSync("git", ["-C", L.CL, "diff", "--binary", "--full-index", "--find-renames", BASE, S], { env: L.cleanEnv(), maxBuffer: 1 << 28 });
  fs.writeFileSync(`${L.E}/snapshot/${unit}.patch`, ex);
  L.must(ex.length === B.patch.bytes && L.sha(ex) === B.patch.sha256 && Buffer.compare(ex, pb) === 0, "export differs from bound patch");
  step("export", { path: `${L.E}/snapshot/${unit}.patch`, bytes: ex.length, sha256: L.sha(ex), equalsBound: true });
  console.log(JSON.stringify({ unit, ok: true, snapshot: S, tree }));
} catch (e) {
  step("STOP", { error: String(e.message || e) });
  console.log(JSON.stringify({ unit, ok: false, error: String(e.message || e) }));
  process.exit(1);
}
