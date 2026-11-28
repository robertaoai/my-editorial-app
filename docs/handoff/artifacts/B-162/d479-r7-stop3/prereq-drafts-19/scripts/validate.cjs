// Scratch validation of the drafted prerequisite (drafting evidence, not an execution attempt).
// Stages: P (prerequisite on D-486), 2a' (rev2 2a + the two verified corrections), 2b' (rev2 2b).
// Usage: node validate.cjs <W> <OUT>
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const [W, OUT] = process.argv.slice(2);
const D486 = "30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const REV2 = "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2";
const BUN = "C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe";
const IDENT = { GIT_AUTHOR_NAME: "robertaoai", GIT_AUTHOR_EMAIL: "241258103+robertaoai@users.noreply.github.com", GIT_COMMITTER_NAME: "robertaoai", GIT_COMMITTER_EMAIL: "241258103+robertaoai@users.noreply.github.com" };
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const env = (x = {}) => { const e = { ...process.env, ...x }; for (const k of ["GIT_INDEX_FILE", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES"]) delete e[k]; return e; };
const run = (cmd, args, o = {}) => { const s = new Date().toISOString(); const r = cp.spawnSync(cmd, args, { cwd: W, env: env(o.env), encoding: "utf8", maxBuffer: 1 << 28 }); return { started: s, ended: new Date().toISOString(), exit: r.status, stdout: r.stdout || "", stderr: r.stderr || "" }; };
const out = (a) => { const r = run("git", a); if (r.exit !== 0) throw new Error(`git ${a.join(" ")}: ${r.stderr}`); return r.stdout.trim(); };
const must = (c, m) => { if (!c) throw new Error("STOP: " + m); };
const once = (t, a, b, l) => { const i = t.indexOf(a); must(i >= 0 && t.indexOf(a, i + 1) < 0, `anchor: ${l}`); return t.slice(0, i) + b + t.slice(i + a.length); };
fs.mkdirSync(OUT, { recursive: true });
const log = []; const step = (n, o) => { log.push({ step: n, at: new Date().toISOString(), ...o }); fs.writeFileSync(`${OUT}/validation-log.json`, JSON.stringify(log, null, 2) + "\n"); };
const commit = (msg) => { must(run("git", ["add", "-A"]).exit === 0, "add"); const r = run("git", ["-c", "core.hooksPath=.githooks", "commit", "-q", "-m", msg], { env: IDENT }); must(r.exit === 0, `commit: ${r.stderr}`); return out(["rev-parse", "HEAD"]); };
const TRACE = "docs/governance/requirements-traceability-map.md";
const SS = (s7) => `${TRACE} (${s7}) changed after the register last moved — propagation unverified. Record a decision, even if the decision is that no tier is affected.`;

function stage(tag, allowed) {
  const tenv = { TMP: path.join(OUT, "tmp"), TEMP: path.join(OUT, "tmp") }; fs.mkdirSync(tenv.TMP, { recursive: true });
  const head = out(["rev-parse", "HEAD"]), tree = out(["rev-parse", "HEAD^{tree}"]);
  const fx = run(BUN, ["run", "fixtures"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-fixtures.txt`, `# fixtures on ${head} tree ${tree}\n# started ${fx.started}\n# ended ${fx.ended}\n# exit ${fx.exit}\n## stdout\n${fx.stdout}\n## stderr\n${fx.stderr}`);
  const st = run(BUN, ["run", "jev:selftest"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-jev-selftest.txt`, `# jev:selftest on ${head}\n# exit ${st.exit}\n## stdout\n${st.stdout}\n## stderr\n${st.stderr}`);
  const ck = run(BUN, ["run", "check"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-check.txt`, `# bun run check on ${head} tree ${tree}\n# started ${ck.started}\n# ended ${ck.ended}\n# exit ${ck.exit}\n## stdout\n${ck.stdout}\n## stderr\n${ck.stderr}`);
  const inv = []; let cur = null;
  for (const l of ck.stdout.split(/\r?\n/)) { const m = /^  (PASS|FAIL|SKIP)  (\S+)\s+(.*)$/.exec(l); if (m) { cur = { status: m[1], name: m[2], findings: [] }; inv.push(cur); continue; } if (cur && cur.status === "FAIL" && /^        \S/.test(l)) cur.findings.push(l.slice(8)); else if (!/^        /.test(l)) cur = null; }
  const summary = fx.stdout.match(/(\d+)\/(\d+) fixtures behaved as intended/) || [];
  const misses = fx.stdout.match(/^\s+MISS .*$/gm) || [];
  const reslot = fx.stdout.split(/\r?\n/).filter((l) => l.includes("tier-sweep re-slot:"));
  const gate2 = fx.stdout.split(/\r?\n/).find((l) => l.includes("gate2: SM05 status no longer BLOCKED")) || null;
  const problems = [];
  if (inv.length !== 19) problems.push(`inventory ${inv.length}`);
  for (const c of inv) {
    if (c.status === "SKIP") { problems.push(`SKIP ${c.name}`); continue; }
    if (c.status !== "FAIL" || c.name === "docs-drift") continue;
    const want = allowed[c.name];
    if (want && JSON.stringify([...c.findings].sort()) === JSON.stringify([...want].sort())) continue;
    problems.push(`FAIL ${c.name}: ${JSON.stringify(c.findings)}`);
  }
  for (const [name, want] of Object.entries(allowed)) { const c = inv.find((x) => x.name === name); if (want.length && (!c || c.status !== "FAIL")) problems.push(`expected bound failure missing: ${name}`); }
  const res = { tag, head, tree, fixtures: { exit: fx.exit, behaved: summary[0] || null, misses, reslot, gate2 }, selftest: { exit: st.exit }, check: { exit: ck.exit, inventory: inv.length, statuses: inv.map((c) => `${c.status} ${c.name}`), fails: inv.filter((c) => c.status === "FAIL").map((c) => ({ name: c.name, findings: c.findings })) }, allowed, problems };
  fs.writeFileSync(`${OUT}/${tag}-results.json`, JSON.stringify(res, null, 2) + "\n");
  must(fx.exit === 0 && misses.length === 0 && summary[1] && summary[1] === summary[2], `${tag} fixtures: ${summary[0]} ${misses.join(" | ")}`);
  must(reslot.length === 7 && reslot.every((l) => /^\s+ok\s/.test(l)), `${tag} re-slot fixtures not all ok`);
  must(st.exit === 0, `${tag} jev:selftest`);
  must(problems.length === 0, `${tag} check: ${problems.join("; ")}`);
  return res;
}
try {
  must(out(["rev-parse", "HEAD"]) === D486, "W not at D-486");
  // Stage P: the drafted prerequisite is already applied in the working tree (make-prereq.cjs).
  const P = commit("TEST — Stop 3 prerequisite (tier-sweep routing); not for the source branch");
  const pDiff = cp.execFileSync("git", ["-C", W, "diff", "--full-index", D486, P], { env: env(), maxBuffer: 1 << 28 });
  fs.writeFileSync(`${OUT}/P.diff`, pDiff);
  step("P", { sha: P, tree: out(["rev-parse", "HEAD^{tree}"]), diff: { bytes: pDiff.length, sha256: sha(pDiff) }, paths: out(["diff", "--name-only", D486, P]).split("\n") });
  const rP = stage("P", {});
  step("P-checks", { fixtures: rP.fixtures.behaved, statuses: rP.check.statuses });

  // Stage 2a': rev2 2a + the two verified corrections (exact texts from the sealed stopped build).
  must(run("git", ["apply", "--check", `${REV2}/2a.patch`]).exit === 0 && run("git", ["apply", `${REV2}/2a.patch`]).exit === 0, "apply rev2 2a on P");
  const corr = fs.readFileSync("C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev3/stopped-build/corrections-on-rev2-2a.diff", "utf8");
  // The sealed diff is D486 → corrected candidate for SM05/SM07; reapply only its delta over rev2 2a by exact anchors.
  const SM05 = "docs/v1/work-packets/V1/V1-SM05.md", SM07 = "docs/v1/work-packets/V1/V1-SM07.md";
  const STOPPED = "C:/Users/rober_24syk4j/AppData/Local/Temp/claude/e52f6e3650175a89/539c12be-a61a-402c-98fa-3516e9aca97f/scratchpad/rev3/w";
  const cand05 = cp.execFileSync("git", ["-C", STOPPED, "show", `91fbc747db99e84ddcca0564bf79dff0f726e8ea:${SM05}`], { env: env() });
  const cand07 = cp.execFileSync("git", ["-C", STOPPED, "show", `91fbc747db99e84ddcca0564bf79dff0f726e8ea:${SM07}`], { env: env() });
  fs.writeFileSync(`${W}/${SM05}`, cand05); fs.writeFileSync(`${W}/${SM07}`, cand07);
  must(corr.length > 0, "sealed corrections diff present");
  const A = commit("TEST — corrected 2a candidate on the prerequisite; not for the source branch");
  const s7 = A.slice(0, 7);
  step("2a", { sha: A, tree: out(["rev-parse", "HEAD^{tree}"]), sm05Blob: out(["rev-parse", `${A}:${SM05}`]), sm07Blob: out(["rev-parse", `${A}:${SM07}`]) });
  const rA = stage("2a", { "graph-coverage": ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md"], "source-sweep": [SS(s7)] });
  must(rA.fixtures.gate2 && /^\s+ok\s/.test(rA.fixtures.gate2), "Gate 2 fixture");
  step("2a-checks", { fixtures: rA.fixtures.behaved, statuses: rA.check.statuses });

  // Stage 2b': rev2 2b on the corrected 2a.
  must(run("git", ["apply", "--check", `${REV2}/2b.patch`]).exit === 0 && run("git", ["apply", `${REV2}/2b.patch`]).exit === 0, "apply rev2 2b");
  const B = commit("TEST — 2b candidate on the corrected 2a; not for the source branch");
  step("2b", { sha: B, tree: out(["rev-parse", "HEAD^{tree}"]) });
  const rB = stage("2b", { "graph-coverage": ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md", "absent from the curated graph: docs/v1/V1-INTENT-INDEX.md"], "source-sweep": [SS(s7)] });
  step("2b-checks", { fixtures: rB.fixtures.behaved, statuses: rB.check.statuses });
  const x2a = cp.execFileSync("git", ["-C", W, "diff", "--binary", "--full-index", "--find-renames", P, A], { env: env(), maxBuffer: 1 << 28 });
  const x2b = cp.execFileSync("git", ["-C", W, "diff", "--binary", "--full-index", "--find-renames", A, B], { env: env(), maxBuffer: 1 << 28 });
  const summary = { note: "Scratch candidates only; not final pins. Dates are the 2026-11-13 placeholders.", P: { sha: P, tree: rP.tree }, a: { sha: A, from: rP.tree, to: rA.tree, patch: { bytes: x2a.length, sha256: sha(x2a) } }, b: { sha: B, from: rA.tree, to: rB.tree, patch: { bytes: x2b.length, sha256: sha(x2b) }, equalsRev2_2b: Buffer.compare(x2b, fs.readFileSync(`${REV2}/2b.patch`)) === 0 } };
  fs.writeFileSync(`${OUT}/scratch-2a.patch`, x2a); fs.writeFileSync(`${OUT}/scratch-2b.patch`, x2b);
  fs.writeFileSync(`${OUT}/validation-summary.json`, JSON.stringify(summary, null, 2) + "\n");
  step("done", summary);
  console.log(JSON.stringify(summary, null, 1));
} catch (e) { step("STOP", { error: String(e.message || e) }); console.log("STOP", String(e.message || e)); process.exit(1); }
