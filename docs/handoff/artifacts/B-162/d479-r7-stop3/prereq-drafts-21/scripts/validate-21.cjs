// Isolated scratch validation of the 21-claim prerequisite (draft evidence only; not an execution attempt).
// Usage: node validate-21.cjs <SCRATCH_ROOT> <OUT>
// Creates: B0 (D-486 baseline), CLx (R1' -> P' -> S2A -> S2B), SRCx (R1' -> P' -> 2a uncommitted -> C2A -> 2b uncommitted).
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const [ROOT, OUT] = process.argv.slice(2);
const SRC = "C:/robertaoai/my-editorial-app", GRAPH = "C:/CoWork/myeditorialapp/.graphify";
const D486 = "30db8d51140c0e46700f96bb9f018e6e40b93cbc";
const REV2 = "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2";
const D2 = path.dirname(path.dirname(path.resolve(process.argv[1])));
const STOPPED_W = "C:/Users/rober_24syk4j/AppData/Local/Temp/claude/e52f6e3650175a89/539c12be-a61a-402c-98fa-3516e9aca97f/scratchpad/rev3/w";
const CAND = "91fbc747db99e84ddcca0564bf79dff0f726e8ea";
const BUN = "C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe";
const IDENT = { GIT_AUTHOR_NAME: "robertaoai", GIT_AUTHOR_EMAIL: "241258103+robertaoai@users.noreply.github.com", GIT_COMMITTER_NAME: "robertaoai", GIT_COMMITTER_EMAIL: "241258103+robertaoai@users.noreply.github.com" };
const TRACE = "docs/governance/requirements-traceability-map.md";
const SM05 = "docs/v1/work-packets/V1/V1-SM05.md", SM07 = "docs/v1/work-packets/V1/V1-SM07.md", INDEX = "docs/v1/V1-INTENT-INDEX.md";
const G07 = "absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md", GIDX = "absent from the curated graph: docs/v1/V1-INTENT-INDEX.md";
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const env = (x = {}) => { const e = { ...process.env, ...x }; for (const k of ["GIT_INDEX_FILE", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES"]) delete e[k]; return e; };
const run = (cwd, cmd, args, x = {}) => { const s = new Date().toISOString(); const r = cp.spawnSync(cmd, args, { cwd, env: env(x), encoding: "utf8", maxBuffer: 1 << 28 }); return { started: s, ended: new Date().toISOString(), exit: r.status, stdout: r.stdout || "", stderr: r.stderr || "" }; };
const g = (cwd, a) => { const r = run(cwd, "git", a); if (r.exit !== 0) throw new Error(`git ${a.join(" ")} in ${cwd}: ${r.stderr}`); return r.stdout.trim(); };
const must = (c, m) => { if (!c) throw new Error("STOP: " + m); };
const wait = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
const ssFinding = (h) => `${TRACE} (${h}) changed after the register last moved — propagation unverified. Record a decision, even if the decision is that no tier is affected.`;
fs.mkdirSync(OUT, { recursive: true });
const flags = []; const log = [];
const step = (n, o) => { log.push({ step: n, at: new Date().toISOString(), ...o }); fs.writeFileSync(`${OUT}/validation-log.json`, JSON.stringify({ log, flags }, null, 2) + "\n"); };
const flag = (m) => { flags.push(m); step("FLAG", { message: m }); };

function cloneAt(dir, rev) {
  must(!fs.existsSync(dir), `${dir} exists`);
  must(run(ROOT, "git", ["-c", "core.longpaths=true", "clone", "-q", "-c", "core.longpaths=true", "--no-hardlinks", SRC, dir]).exit === 0, `clone ${dir}`);
  g(dir, ["checkout", "-q", "--detach", rev]); g(dir, ["remote", "remove", "origin"]);
  fs.cpSync(GRAPH, `${dir}/.graphify`, { recursive: true });
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
  for (const f of walk(GRAPH)) { const rel = path.relative(GRAPH, f); must(sha(fs.readFileSync(f)) === sha(fs.readFileSync(path.join(dir, ".graphify", rel))), `graph copy ${rel}`); }
  must(g(dir, ["status", "--porcelain"]) === "", `${dir} not clean after setup`);
}
const commit = (dir, msg) => { wait(2100); must(run(dir, "git", ["add", "-A"]).exit === 0, "add"); const r = run(dir, "git", ["-c", "core.hooksPath=.githooks", "commit", "-q", "-m", msg], IDENT); must(r.exit === 0, `commit: ${r.stderr}`); return g(dir, ["rev-parse", "HEAD"]); };
const tenv = (dir) => { const t = path.join(OUT, "tmp", path.basename(dir)); fs.mkdirSync(t, { recursive: true }); return { TMP: t, TEMP: t }; };
function parse(stdout) { const inv = []; let cur = null; for (const l of stdout.split(/\r?\n/)) { const m = /^  (PASS|FAIL|SKIP)  (\S+)\s+(.*)$/.exec(l); if (m) { cur = { status: m[1], name: m[2], detail: m[3], findings: [] }; inv.push(cur); continue; } if (cur && cur.status === "FAIL" && /^        \S/.test(l)) cur.findings.push(l.slice(8)); else if (!/^        /.test(l)) cur = null; } return inv; }
function check(dir, tag, allowed, extra = {}) {
  const head = g(dir, ["rev-parse", "HEAD"]), tree = g(dir, ["rev-parse", "HEAD^{tree}"]);
  const r = run(dir, BUN, ["run", "check"], tenv(dir));
  fs.writeFileSync(`${OUT}/${tag}-check.txt`, `# bun run check — ${tag}\n# cwd ${dir}\n# HEAD ${head} tree ${tree}\n# status ${JSON.stringify(g(dir, ["status", "--porcelain"]))}\n# started ${r.started}\n# ended ${r.ended}\n# exit ${r.exit}\n## stdout\n${r.stdout}\n## stderr\n${r.stderr}`);
  const inv = parse(r.stdout); const problems = [];
  if (inv.length !== 19) problems.push(`inventory ${inv.length}`);
  for (const c of inv) {
    if (c.status === "SKIP") { problems.push(`SKIP ${c.name}`); continue; }
    if (c.status !== "FAIL" || c.name === "docs-drift") continue;
    const want = allowed[c.name];
    if (want && JSON.stringify([...c.findings].sort()) === JSON.stringify([...want].sort())) continue;
    if (extra.ignore === c.name) continue;
    problems.push(`FAIL ${c.name}: ${JSON.stringify(c.findings)}`);
  }
  for (const [n, want] of Object.entries(allowed)) if (want.length && !inv.find((c) => c.name === n && c.status === "FAIL")) problems.push(`bound failure absent: ${n}`);
  const ss = inv.find((c) => c.name === "source-sweep");
  return { tag, dir: path.basename(dir), head, tree, exit: r.exit, inventory: inv.length, statuses: inv.map((c) => `${c.status} ${c.name}`), fails: inv.filter((c) => c.status === "FAIL").map((c) => ({ name: c.name, findings: c.findings })), sourceSweep: ss ? { status: ss.status, findings: ss.findings } : null, problems };
}
function fixtures(dir, tag) {
  const head = g(dir, ["rev-parse", "HEAD"]);
  const r = run(dir, BUN, ["run", "fixtures"], tenv(dir));
  fs.writeFileSync(`${OUT}/${tag}-fixtures.txt`, `# bun run fixtures — ${tag}\n# HEAD ${head}\n# started ${r.started}\n# ended ${r.ended}\n# exit ${r.exit}\n## stdout\n${r.stdout}\n## stderr\n${r.stderr}`);
  const lines = r.stdout.split(/\r?\n/);
  return { tag, head, exit: r.exit, summary: (r.stdout.match(/\d+\/\d+ fixtures behaved as intended/) || [null])[0], misses: lines.filter((l) => /^\s+MISS /.test(l)).map((l) => l.trim()), reslot: lines.filter((l) => l.includes("tier-sweep re-slot:")).map((l) => l.trim()), gate2: (lines.find((l) => l.includes("gate2: SM05 status no longer BLOCKED")) || "").trim() };
}
function selftest(dir, tag) { const r = run(dir, BUN, ["run", "jev:selftest"], tenv(dir)); fs.writeFileSync(`${OUT}/${tag}-jev-selftest.txt`, `# jev:selftest — ${tag}\n# HEAD ${g(dir, ["rev-parse", "HEAD"])}\n# exit ${r.exit}\n## stdout\n${r.stdout}\n## stderr\n${r.stderr}`); return { exit: r.exit }; }
function minimalProbe(dir, tag) {
  // Post-move state with a minimal new packet; tier-sweep in a fresh process; restore byte-exact.
  const o05 = fs.readFileSync(`${dir}/${SM05}`), o07 = fs.existsSync(`${dir}/${SM07}`) ? fs.readFileSync(`${dir}/${SM07}`) : null;
  const fr15 = (o07 ?? o05).toString("utf8"); const body = fr15.slice(fr15.indexOf("\n"));
  fs.writeFileSync(`${dir}/${SM05}`, "# Work packet — `V1` / `V1-SM05` (`MMF-V1-PIPELINE`)\n\nMinimal probe packet.\n");
  fs.writeFileSync(`${dir}/${SM07}`, "# Work packet — `V1` / `V1-SM07` (`MMF-V1-CORE`)" + body);
  const r = run(dir, process.execPath, ["--input-type=module", "-e", 'const m=await import("./scripts/checks/tier-sweep.mjs");const r=m.run();console.log(JSON.stringify({state:m.reslotState().state,findings:r.findings,detail:r.detail}))']);
  fs.writeFileSync(`${dir}/${SM05}`, o05); if (o07 === null) fs.rmSync(`${dir}/${SM07}`); else fs.writeFileSync(`${dir}/${SM07}`, o07);
  must(g(dir, ["status", "--porcelain"]) === "", `${tag} minimal probe restore`);
  const res = { tag, ...JSON.parse(r.stdout.trim().split("\n").pop()) };
  fs.writeFileSync(`${OUT}/${tag}-minimal-probe.json`, JSON.stringify(res, null, 2) + "\n");
  return res;
}
function negative(dir, tag, pathRel, line, oldT, newT, expected, baselineFails) {
  const orig = fs.readFileSync(`${dir}/${pathRel}`); const lines = orig.toString("utf8").split("\n");
  must(lines[line - 1].includes(oldT) && !lines[line - 1].includes("undefined"), `${tag} anchor`);
  const plan = { path: pathRel, line, old: oldT, new: newT, check: "text-integrity", expected, baseline: baselineFails, recordedAt: new Date().toISOString() };
  fs.writeFileSync(`${OUT}/${tag}-negative-plan.json`, JSON.stringify(plan, null, 2) + "\n");
  lines[line - 1] = lines[line - 1].replace(oldT, newT); fs.writeFileSync(`${dir}/${pathRel}`, lines.join("\n"));
  const res = check(dir, `${tag}-negative`, {}, {});
  fs.writeFileSync(`${dir}/${pathRel}`, orig);
  const blob = cp.execFileSync("git", ["-C", dir, "show", `HEAD:${pathRel}`], { env: env() });
  const restored = Buffer.compare(fs.readFileSync(`${dir}/${pathRel}`), blob) === 0 && g(dir, ["status", "--porcelain"]) === "";
  const key = (fsx) => JSON.stringify(fsx.map((f) => `${f.name}|${[...f.findings].sort().join("||")}`).sort());
  const want = [...baselineFails.filter((f) => f.name !== "text-integrity"), { name: "text-integrity", findings: [expected] }];
  const ok = key(res.fails) === key(want) && res.inventory === 19 && !res.statuses.some((s) => s.startsWith("SKIP"));
  return { tag, ok, restored, observed: res.fails, expectedSet: want, sourceSweep: res.sourceSweep, head: res.head };
}
const traceH = (dir) => ({ full: g(dir, ["log", "-1", "--format=%H", "--", TRACE]), h: g(dir, ["log", "-1", "--format=%h", "--", TRACE]) });

try {
  const live0 = { head: g(SRC, ["rev-parse", "HEAD"]), status: g(SRC, ["status", "--porcelain"]), ls: sha(g(SRC, ["ls-files", "-s"])) };
  must(live0.head === D486 && live0.status === "", "source not at clean D-486");
  // 1. Baseline at exact D-486
  const B0 = `${ROOT}/B0`; cloneAt(B0, D486);
  const base = fixtures(B0, "B0-D486"); step("baseline", base);
  must(base.misses.length === 1 && base.misses[0].startsWith("MISS  gate2: SM05 status no longer BLOCKED"), `baseline misses: ${JSON.stringify(base.misses)}`);

  // 2. CLx: R1' -> P'
  const CL = `${ROOT}/CLx`; cloneAt(CL, D486);
  const r1 = fs.readFileSync(`${D2}/REGISTER-DRAFT-R1-routing-and-source-sweep.md`, "utf8");
  const r1Body = r1.slice(r1.indexOf("## 5.14e`<NNN>`")).replace("## 5.14e`<NNN>` `D-<NNN>`", "## 5.14e310 `D-487`")
    .replace("**Authority:**", "*(Scratch-only rendering of draft R1 for ordering validation; placeholders unfilled; not a recorded entry.)*\n\n**Authority:**");
  fs.writeFileSync(`${OUT}/R1-scratch-rendering.md`, r1Body);
  fs.appendFileSync(`${CL}/docs/v1/V1-DECISION-REGISTER.md`, "\n" + r1Body);
  const R1 = commit(CL, "TEST — scratch R1 rendering; not for the source branch");
  must(run(CL, process.execPath, [`${D2}/scripts/make-prereq-21.cjs`, CL]).exit === 0, "make-prereq-21");
  const P = commit(CL, "TEST — Stop 3 prerequisite (21-claim tier-sweep routing); not for the source branch");
  const pDiff = cp.execFileSync("git", ["-C", CL, "diff", "--full-index", R1, P], { env: env() });
  fs.writeFileSync(`${D2}/prereq-tier-sweep-21.diff`, pDiff);
  step("P", { R1, P, diffPaths: g(CL, ["diff", "--name-only", R1, P]).split("\n"), diff: { bytes: pDiff.length, sha256: sha(pDiff) } });
  const fP = fixtures(CL, "P"); const cP = check(CL, "P", {}); const sP = selftest(CL, "P"); const mP = minimalProbe(CL, "P");
  step("P-results", { fixtures: fP, check: { statuses: cP.statuses, problems: cP.problems }, selftest: sP, minimal: mP });
  must(JSON.stringify(fP.misses) === JSON.stringify(base.misses), `P misses differ from baseline: ${JSON.stringify(fP.misses)}`);
  must(fP.reslot.length === 9 && fP.reslot.every((l) => l.startsWith("ok")), `P re-slot fixtures: ${JSON.stringify(fP.reslot)}`);
  if (cP.problems.length) flag(`P check: ${cP.problems.join("; ")}`);
  must(sP.exit === 0, "P selftest"); must(mP.findings.length === 0, `P minimal probe findings: ${JSON.stringify(mP.findings)}`);

  // 3. S2A in CLx
  must(run(CL, "git", ["apply", `${REV2}/2a.patch`]).exit === 0, "apply 2a");
  for (const p of [SM05, SM07]) fs.writeFileSync(`${CL}/${p}`, cp.execFileSync("git", ["-C", STOPPED_W, "show", `${CAND}:${p}`], { env: env() }));
  const S2A = commit(CL, "SNAPSHOT — test artifact; not for the source branch");
  const tA = traceH(CL); must(tA.full === S2A, "trace last change is not S2A");
  const allowA = { "graph-coverage": [G07], "source-sweep": [ssFinding(tA.h)] };
  const fA = fixtures(CL, "S2A"); const sA = selftest(CL, "S2A"); const cA = check(CL, "S2A-prediction", allowA); const mA = minimalProbe(CL, "S2A");
  const nA = negative(CL, "S2A", SM05, 4, "Not started", "Notundefined started", `${SM05}:4: spliced "undefined" after "t" — a script wrote an undefined value into the text (\`D-380\`, \`D-381\`); rewrite the line from its source`, cA.fails);
  step("S2A-results", { S2A, trace: tA, fixtures: fA, selftest: sA, prediction: { statuses: cA.statuses, problems: cA.problems, sourceSweep: cA.sourceSweep }, negative: nA, minimal: mA });
  must(fA.misses.length === 0 && /^ok/.test(fA.gate2), `S2A fixtures: ${JSON.stringify(fA.misses)} gate2=${fA.gate2}`);
  must(sA.exit === 0 && cA.problems.length === 0 && nA.ok && nA.restored && mA.findings.length === 0, `S2A: ${cA.problems.join("; ")} neg=${nA.ok}/${nA.restored} minimal=${mA.findings.length}`);

  // 4. S2B in CLx
  must(run(CL, "git", ["apply", `${REV2}/2b.patch`]).exit === 0, "apply 2b");
  const S2B = commit(CL, "SNAPSHOT — test artifact; not for the source branch");
  const tB = traceH(CL); must(tB.full === S2A, "trace last change is not S2A at S2B");
  const allowB = { "graph-coverage": [G07, GIDX], "source-sweep": [ssFinding(tB.h)] };
  const fB = fixtures(CL, "S2B"); const sB = selftest(CL, "S2B"); const cB = check(CL, "S2B-prediction", allowB); const mB = minimalProbe(CL, "S2B");
  const nB = negative(CL, "S2B", INDEX, 1, "# V1 Intent Index", "# V1 Intentundefined Index", `${INDEX}:1: spliced "undefined" after "t" — a script wrote an undefined value into the text (\`D-380\`, \`D-381\`); rewrite the line from its source`, cB.fails);
  step("S2B-results", { S2B, trace: tB, fixtures: fB, selftest: sB, prediction: { statuses: cB.statuses, problems: cB.problems, sourceSweep: cB.sourceSweep }, negative: nB, minimal: mB });
  must(fB.misses.length === 0 && /^ok/.test(fB.gate2), `S2B fixtures: ${JSON.stringify(fB.misses)}`);
  must(sB.exit === 0 && cB.problems.length === 0 && nB.ok && nB.restored && mB.findings.length === 0, `S2B: ${cB.problems.join("; ")} neg=${nB.ok}/${nB.restored} minimal=${mB.findings.length}`);

  // 5. SRCx: same R1' and P' history; source-side check states
  const SX = `${ROOT}/SRCx`; must(run(ROOT, "git", ["-c", "core.longpaths=true", "clone", "-q", "-c", "core.longpaths=true", "--no-hardlinks", CL, SX]).exit === 0, "clone SRCx");
  g(SX, ["checkout", "-q", "--detach", P]); g(SX, ["remote", "remove", "origin"]); fs.cpSync(GRAPH, `${SX}/.graphify`, { recursive: true });
  must(g(SX, ["rev-parse", "HEAD"]) === P && g(SX, ["status", "--porcelain"]) === "", "SRCx at P clean");
  const x2a = cp.execFileSync("git", ["-C", CL, "diff", "--binary", "--full-index", "--find-renames", P, S2A], { env: env(), maxBuffer: 1 << 28 });
  const x2b = cp.execFileSync("git", ["-C", CL, "diff", "--binary", "--full-index", "--find-renames", S2A, S2B], { env: env(), maxBuffer: 1 << 28 });
  fs.writeFileSync(`${OUT}/scratch-2a-on-P.patch`, x2a); fs.writeFileSync(`${OUT}/scratch-2b.patch`, x2b);
  fs.writeFileSync(`${ROOT}/x2a.patch`, x2a); fs.writeFileSync(`${ROOT}/x2b.patch`, x2b);
  must(run(SX, "git", ["apply", `${ROOT}/x2a.patch`]).exit === 0, "SRCx apply 2a");
  const pre2a = [1, 2].map((n) => check(SX, `SRC-2a-precommit-${n}`, { "graph-coverage": [G07] }));
  step("SRC-2a-precommit", { runs: pre2a.map((c) => ({ head: c.head, statuses: c.statuses, problems: c.problems, sourceSweep: c.sourceSweep })) });
  for (const c of pre2a) must(c.problems.length === 0 && c.sourceSweep && c.sourceSweep.status === "PASS", `SRC 2a pre-commit: ${c.problems.join("; ")} ss=${JSON.stringify(c.sourceSweep)}`);
  const C2A = commit(SX, "TEST — scratch C2A; not for the source branch");
  must(g(SX, ["rev-parse", "HEAD^{tree}"]) === g(CL, ["rev-parse", `${S2A}^{tree}`]), "tree(C2A) != tree(S2A)");
  must(run(SX, "git", ["apply", `${ROOT}/x2b.patch`]).exit === 0, "SRCx apply 2b");
  const tC = traceH(SX); must(tC.full === C2A, "trace last change is not C2A");
  const src2b = [1, 2].map((n) => check(SX, `SRC-2b-${n}`, { "graph-coverage": [G07, GIDX], "source-sweep": [ssFinding(tC.h)] }));
  step("SRC-2b", { C2A, trace: tC, runs: src2b.map((c) => ({ head: c.head, statuses: c.statuses, problems: c.problems, sourceSweep: c.sourceSweep })) });
  for (const c of src2b) must(c.problems.length === 0, `SRC 2b: ${c.problems.join("; ")}`);
  must(run(SX, "git", ["add", "-A"]).exit === 0, "SRCx stage 2b"); must(g(SX, ["write-tree"]) === g(CL, ["rev-parse", `${S2B}^{tree}`]), "staged 2b tree != tree(S2B)");

  // 6. Six-run matrix
  const row = (run_, tested, named, c) => ({ run: run_, testedCommit: tested, namedCommit: named.full, printedH: named.h, finding: (c.sourceSweep || {}).findings || [], status: (c.sourceSweep || {}).status });
  const matrix = [
    row("S2A prediction", S2A, tA, cA), row("S2A negative test", S2A, tA, { sourceSweep: nA.sourceSweep }),
    row("S2B prediction", S2B, tB, cB), row("S2B negative test", S2B, tB, { sourceSweep: nB.sourceSweep }),
    row("2b source check 1 (2b uncommitted)", C2A, tC, src2b[0]), row("2b source check 2 (2b uncommitted)", C2A, tC, src2b[1]),
  ];
  const live1 = { head: g(SRC, ["rev-parse", "HEAD"]), status: g(SRC, ["status", "--porcelain"]), ls: sha(g(SRC, ["ls-files", "-s"])) };
  must(JSON.stringify(live0) === JSON.stringify(live1), "source repo changed");
  const summary = { provisional: true, baseline: { commit: D486, summary: base.summary, misses: base.misses }, P: { R1, P, summary: fP.summary, misses: fP.misses, reslot: fP.reslot }, S2A, S2B, C2A, trees: { P: g(CL, ["rev-parse", `${P}^{tree}`]), S2A: g(CL, ["rev-parse", `${S2A}^{tree}`]), S2B: g(CL, ["rev-parse", `${S2B}^{tree}`]) }, patches: { "2a-on-P": { bytes: x2a.length, sha256: sha(x2a) }, "2b": { bytes: x2b.length, sha256: sha(x2b), equalsRev2_2b: Buffer.compare(x2b, fs.readFileSync(`${REV2}/2b.patch`)) === 0 } }, matrix, pre2a: pre2a.map((c) => ({ head: c.head, sourceSweep: c.sourceSweep })), masking: { S2A: fA.reslot.filter((l) => l.includes("does not mask")), S2B: fB.reslot.filter((l) => l.includes("does not mask")) }, minimal: { P: mP, S2A: mA, S2B: mB }, flags, live: { before: live0, after: live1 } };
  fs.writeFileSync(`${OUT}/validation-summary.json`, JSON.stringify(summary, null, 2) + "\n");
  step("done", { flags });
  console.log(JSON.stringify({ ok: true, flags, matrix }, null, 1));
} catch (e) { step("STOP", { error: String(e.message || e) }); console.log("STOP", String(e.message || e)); process.exit(1); }
