// Build the corrected rev3 review candidates in scratch clone W (Judge Stop 3 disposition). Never touches the source repo.
// Usage: node build-rev3.cjs <W> <OUT>
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process"), crypto = require("crypto");
const [W, OUT] = process.argv.slice(2);
const D486 = "30db8d51140c0e46700f96bb9f018e6e40b93cbc", BASE_TREE = "0b558d2a51f17eff755dfd7fba51bed37548f9ae";
const REV2 = "C:/CoWork/outputs/D-479-r7-rebound/30db8d51140c0e46700f96bb9f018e6e40b93cbc-rev2";
const BUN = "C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe";
const IDENT = { GIT_AUTHOR_NAME: "robertaoai", GIT_AUTHOR_EMAIL: "241258103+robertaoai@users.noreply.github.com", GIT_COMMITTER_NAME: "robertaoai", GIT_COMMITTER_EMAIL: "241258103+robertaoai@users.noreply.github.com" };
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const env = (x = {}) => { const e = { ...process.env, ...x }; for (const k of ["GIT_INDEX_FILE", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES"]) delete e[k]; return e; };
const run = (cmd, args, o = {}) => { const s = new Date().toISOString(); const r = cp.spawnSync(cmd, args, { cwd: o.cwd || W, env: env(o.env), encoding: o.binary ? "buffer" : "utf8", maxBuffer: 1 << 28 }); return { cmd: [cmd, ...args].join(" "), started: s, ended: new Date().toISOString(), exit: r.status, stdout: r.stdout, stderr: r.stderr ? r.stderr.toString() : "", error: r.error ? String(r.error) : null }; };
const git = (a, o) => run("git", a, o);
const out = (a) => { const r = git(a); if (r.exit !== 0) throw new Error(`git ${a.join(" ")}: ${r.stderr}`); return r.stdout.trim(); };
const must = (c, m) => { if (!c) throw new Error("STOP: " + m); };
fs.mkdirSync(OUT, { recursive: true });
const log = []; const step = (n, o) => { log.push({ step: n, at: new Date().toISOString(), ...o }); fs.writeFileSync(`${OUT}/build-log.json`, JSON.stringify(log, null, 2) + "\n"); };
const replaceOnce = (text, from, to, label) => { const i = text.indexOf(from); must(i >= 0 && text.indexOf(from, i + 1) < 0, `anchor not found exactly once: ${label}`); return text.slice(0, i) + to + text.slice(i + from.length); };

// Correction texts (exact).
const SM05 = "docs/v1/work-packets/V1/V1-SM05.md", SM07 = "docs/v1/work-packets/V1/V1-SM07.md";
const D251_SECTION = [
  "## Access entitlement and evidence boundary (`D-251`)",
  "",
  "`EG5` on `ROUTE-PROD-1` is executed under `ACCESS-ROLE-CHIEF-EDITOR` (`D-251`, the access identifier formerly named",
  "`ROLE-CHIEF-EDITOR`; `D-479` item 5). It is a natural-person access entitlement plus gate-execution eligibility with a",
  "human executor required. It is never a source-RACI fact by itself and transfers no editorial accountability (`D-238`,",
  "`D-251`). **Evidence boundary.** The `D-251` stored-value compatibility child stays owned in `docs/handoff/B-119`. The",
  "A01 receipts are `SETUP-SPIKE-000/S2` baseline evidence only and satisfy no DoR or DoD row of this packet (`D-255`).",
  "Final `D-251` classification follows the post-promotion A02 receipt (`SM06-P3-01`), which is Phase 3 hosted work",
  "received by `V1-SM08` (`D-479` item 8). This packet claims no `D-251` evidence of its own.",
  "",
  "",
].join("\n");
const EARLIER = "*Earlier, 2026-09-25 (`D-264`): `BLOCKED — SETUP-SPIKE-000 validation\nattempt SV-002 open; not selected; feature DoR/DoD not yet run; construction not authorized.`*";
const HISTORY_HEAD = "**Status history (moved out of the Status paragraph under `D-479`; wording unchanged).** ";

function checks(label, allowedGraph, tag) {
  const tenv = { TMP: path.join(OUT, "tmp"), TEMP: path.join(OUT, "tmp") };
  fs.mkdirSync(tenv.TMP, { recursive: true });
  const head = out(["rev-parse", "HEAD"]), tree = out(["rev-parse", "HEAD^{tree}"]);
  const fx = run(BUN, ["run", "fixtures"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-fixtures.txt`, `# fixtures on ${head} tree ${tree}\n# started ${fx.started}\n# ended ${fx.ended}\n# exit ${fx.exit}\n## stdout\n${fx.stdout}\n## stderr\n${fx.stderr}`);
  const summary = (fx.stdout.match(/(\d+)\/(\d+) fixtures behaved as intended/) || []);
  const misses = (fx.stdout.match(/^\s+MISS .*$/gm) || []);
  const gate2 = fx.stdout.split(/\r?\n/).find((l) => l.includes("gate2: SM05 status no longer BLOCKED")) || null;
  const st = run(BUN, ["run", "jev:selftest"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-jev-selftest.txt`, `# jev:selftest on ${head}\n# exit ${st.exit}\n## stdout\n${st.stdout}\n## stderr\n${st.stderr}`);
  const ck = run(BUN, ["run", "check"], { env: tenv });
  fs.writeFileSync(`${OUT}/${tag}-check.txt`, `# bun run check on ${head} tree ${tree}\n# started ${ck.started}\n# ended ${ck.ended}\n# exit ${ck.exit}\n## stdout\n${ck.stdout}\n## stderr\n${ck.stderr}`);
  const lines = ck.stdout.split(/\r?\n/); const inv = []; let cur = null;
  for (const l of lines) { const m = /^  (PASS|FAIL|SKIP)  (\S+)\s+(.*)$/.exec(l); if (m) { cur = { status: m[1], name: m[2], findings: [] }; inv.push(cur); continue; } if (cur && cur.status === "FAIL" && /^        \S/.test(l)) cur.findings.push(l.slice(8)); else if (!/^        /.test(l)) cur = null; }
  const problems = [];
  if (inv.length !== 19) problems.push(`inventory ${inv.length}`);
  for (const c of inv) {
    if (c.status === "SKIP") problems.push(`SKIP ${c.name}`);
    if (c.status !== "FAIL" || c.name === "docs-drift") continue;
    if (c.name === "graph-coverage" && JSON.stringify([...c.findings].sort()) === JSON.stringify([...allowedGraph].sort())) continue;
    problems.push(`FAIL ${c.name}: ${JSON.stringify(c.findings)}`);
  }
  const tierSweep = inv.find((c) => c.name === "tier-sweep");
  const res = { label, head, tree, fixtures: { exit: fx.exit, behaved: summary[1] ? `${summary[1]}/${summary[2]}` : null, misses, gate2Line: gate2 }, selftest: { exit: st.exit }, check: { exit: ck.exit, inventory: inv.length, fails: inv.filter((c) => c.status === "FAIL").map((c) => ({ name: c.name, findings: c.findings })), tierSweep: tierSweep && tierSweep.status }, problems };
  fs.writeFileSync(`${OUT}/${tag}-results.json`, JSON.stringify(res, null, 2) + "\n");
  must(fx.exit === 0 && misses.length === 0 && summary[1] === summary[2], `${tag} fixtures: ${summary[0] || "no summary"} ${misses.join(" | ")}`);
  must(gate2 && /^\s+ok\s/.test(gate2), `${tag} Gate 2 fixture did not pass: ${gate2}`);
  must(st.exit === 0, `${tag} jev:selftest failed`);
  must(tierSweep && tierSweep.status === "PASS", `${tag} tier-sweep not PASS`);
  must(problems.length === 0, `${tag} check: ${problems.join("; ")}`);
  return res;
}
const commit = (msg) => { const r = git(["-c", "core.hooksPath=.githooks", "commit", "-q", "-m", msg], { env: { ...IDENT, GIT_TRACE: "1" } }); must(r.exit === 0, `commit: ${r.stderr.slice(-400)}`); must(/run_command: (?:\S+=\S* )*\.githooks\/commit-msg /.test(r.stderr), "hook not traced"); return out(["rev-parse", "HEAD"]); };
function ledger(from, to) {
  const rows = out(["diff", "--no-renames", "--name-status", from, to]).split("\n").filter(Boolean);
  return { fromTree: out(["rev-parse", `${from}^{tree}`]), toTree: out(["rev-parse", `${to}^{tree}`]), files: rows.map((ln) => { const [s, p] = ln.split("\t"); const side = (ref) => { const ls = out(["ls-tree", ref, "--", p]); if (!ls) return null; const [mode, , blob] = ls.split(/\s+/); const b = cp.execFileSync("git", ["-C", W, "cat-file", "blob", blob], { env: env() }); return { mode, blob, bytes: b.length, sha256: sha(b) }; }; return { path: p, status: s, before: side(from), after: side(to) }; }) };
}
try {
  must(out(["rev-parse", "HEAD"]) === D486 && out(["rev-parse", "HEAD^{tree}"]) === BASE_TREE, "W not at D486");
  must(out(["status", "--porcelain"]) === "", "W not clean");
  // 2a: frozen patch, then the two corrections.
  const p2a = `${REV2}/2a.patch`;
  must(git(["apply", "--check", p2a]).exit === 0 && git(["apply", p2a]).exit === 0, "apply rev2 2a");
  let s05 = fs.readFileSync(`${W}/${SM05}`, "utf8");
  s05 = replaceOnce(s05, "\n## Rank\n", "\n" + D251_SECTION + "## Rank\n", "SM05 ## Rank");
  fs.writeFileSync(`${W}/${SM05}`, s05);
  let s07 = fs.readFileSync(`${W}/${SM07}`, "utf8");
  s07 = replaceOnce(s07, " " + EARLIER + " This is a packet status,", " This is a packet status,", "SM07 earlier sentence");
  s07 = replaceOnce(s07, "behavioural test code.\n\n**Durable-owner receipt", "behavioural test code.\n\n" + HISTORY_HEAD + EARLIER + "\n\n**Durable-owner receipt", "SM07 history insertion point");
  fs.writeFileSync(`${W}/${SM07}`, s07);
  const m = /^\*\*Status:\*\*([\s\S]*?)(?:\n\s*\n|$)/m.exec(s07);
  must(m && (m[1].match(/\bBLOCKED\b/g) || []).length === 1 && m[1].includes("`BLOCKED —"), "SM07 Status paragraph must hold exactly one BLOCKED marker");
  must(git(["add", "-A"]).exit === 0, "add 2a");
  const W2a = commit("TEST — rev3 review candidate 2a; not for the source branch");
  step("2a-candidate", { sha: W2a, tree: out(["rev-parse", "HEAD^{tree}"]) });
  const r2a = checks("2a", ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md"], "2a");
  step("2a-checks", { fixtures: r2a.fixtures.behaved, check: r2a.check.fails.map((f) => f.name) });
  const x2a = cp.execFileSync("git", ["-C", W, "diff", "--binary", "--full-index", "--find-renames", D486, W2a], { env: env(), maxBuffer: 1 << 28 });
  fs.writeFileSync(`${OUT}/2a.patch`, x2a);
  fs.writeFileSync(`${OUT}/ledger-2a.json`, JSON.stringify(ledger(D486, W2a), null, 2) + "\n");
  // 2b: rev2 patch on the corrected 2a.
  const p2b = `${REV2}/2b.patch`;
  must(git(["apply", "--check", p2b]).exit === 0 && git(["apply", p2b]).exit === 0, "apply rev2 2b on corrected 2a");
  must(git(["add", "-A"]).exit === 0, "add 2b");
  const W2b = commit("TEST — rev3 review candidate 2b; not for the source branch");
  step("2b-candidate", { sha: W2b, tree: out(["rev-parse", "HEAD^{tree}"]) });
  const r2b = checks("2b", ["absent from the curated graph: docs/v1/work-packets/V1/V1-SM07.md", "absent from the curated graph: docs/v1/V1-INTENT-INDEX.md"], "2b");
  step("2b-checks", { fixtures: r2b.fixtures.behaved, check: r2b.check.fails.map((f) => f.name) });
  const x2b = cp.execFileSync("git", ["-C", W, "diff", "--binary", "--full-index", "--find-renames", W2a, W2b], { env: env(), maxBuffer: 1 << 28 });
  fs.writeFileSync(`${OUT}/2b.patch`, x2b);
  fs.writeFileSync(`${OUT}/ledger-2b.json`, JSON.stringify(ledger(W2a, W2b), null, 2) + "\n");
  const dates = (b) => { const t = b.toString("utf8").split("\n"); return { plus20261113: t.filter((s) => s.startsWith("+") && !s.startsWith("+++")).reduce((n, s) => n + (s.match(/2026-11-13/g) || []).length, 0), contextOrMinus: t.filter((s) => /^[ -]/.test(s) && !s.startsWith("---") && s.includes("2026-11-13")).length, plusD486Lines: t.filter((s) => s.startsWith("+") && s.includes("D-486")).length }; };
  const summary = { base: D486, baseTree: BASE_TREE, units: [
    { unit: "2a", candidate: W2a, from: BASE_TREE, to: out(["rev-parse", `${W2a}^{tree}`]), patch: { bytes: x2a.length, sha256: sha(x2a) }, dates: dates(x2a) },
    { unit: "2b", candidate: W2b, from: out(["rev-parse", `${W2a}^{tree}`]), to: out(["rev-parse", `${W2b}^{tree}`]), patch: { bytes: x2b.length, sha256: sha(x2b) }, dates: dates(x2b), equalsRev2Patch2b: Buffer.compare(x2b, fs.readFileSync(p2b)) === 0 } ] };
  must(summary.units[0].dates.plus20261113 === 10 && summary.units[0].dates.contextOrMinus === 0, "2a date sites != 10");
  must(summary.units[1].dates.plus20261113 === 2 && summary.units[1].dates.contextOrMinus === 0, "2b date sites != 2");
  fs.writeFileSync(`${OUT}/build-summary.json`, JSON.stringify(summary, null, 2) + "\n");
  step("done", summary);
  console.log(JSON.stringify(summary, null, 1));
} catch (e) { step("STOP", { error: String(e.message || e) }); console.log("STOP", String(e.message || e)); process.exit(1); }
