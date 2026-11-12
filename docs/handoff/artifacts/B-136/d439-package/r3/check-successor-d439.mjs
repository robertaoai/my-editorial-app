// R2-2 (Lane B review of 7d44bff): checks a successor of the reviewed D-439 helper before it is used.
// A successor may differ from the reviewed helper in exactly two lines: `const BASE = …` and `const OWNERSHIP_SHA256 = …`.
// Both must change. The manifest must name the new BASE, hash to the new pin, and the repository must be at that BASE.
// Then the successor's read-only S0 runs and must pass. Exit 0 = accepted; 2 = refused.
// Usage: node check-successor-d439.mjs <reviewed.mjs> <reviewed-sha256> <successor.mjs> <manifest.json> <repo> <out-dir>
import { readFileSync, existsSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
const [rev, revSha, suc, man, repo, out] = process.argv.slice(2);
const fail = m => { console.error("REFUSE: " + m); process.exit(2); };
if (!out) fail("usage");
if (existsSync(out)) fail("out-dir exists — refusing to overwrite");
const sha = b => createHash("sha256").update(b).digest("hex");
const rb = readFileSync(rev), sb = readFileSync(suc), mb = readFileSync(man);
if (sha(rb) !== revSha) fail("reviewed helper hash is not the stated value");
const R = rb.toString("utf8").split("\n"), S = sb.toString("utf8").split("\n");
if (R.length !== S.length) fail(`line count differs (${R.length} vs ${S.length})`);
const BASE_RE = /^const BASE = "([0-9a-f]{40})"; \/\/ ownership manifest observed here\r?$/;
const PIN_RE = /^const OWNERSHIP_SHA256 = "([0-9a-f]{64})";\r?$/;
const diff = R.map((l, i) => l === S[i] ? -1 : i).filter(i => i >= 0);
for (const i of diff) if (!(BASE_RE.test(R[i]) && BASE_RE.test(S[i])) && !(PIN_RE.test(R[i]) && PIN_RE.test(S[i]))) fail(`line ${i + 1} differs outside the two bindings`);
const pick = (L, re) => { const m = L.filter(l => re.test(l)); if (m.length !== 1) fail("binding line not unique"); return m[0].match(re)[1]; };
const [b0, b1, p0, p1] = [pick(R, BASE_RE), pick(S, BASE_RE), pick(R, PIN_RE), pick(S, PIN_RE)];
if (b0 === b1) fail("BASE unchanged — a successor binds a new reviewed state");
if (p0 === p1) fail("OWNERSHIP_SHA256 unchanged");
if (diff.length !== 2) fail(`expected exactly 2 changed lines, found ${diff.length}`);
const m = JSON.parse(mb.toString("utf8"));
if (m.base !== b1) fail("manifest base differs from the successor's BASE");
if (sha(mb) !== p1) fail("manifest hash differs from the successor's OWNERSHIP_SHA256");
const head = execFileSync("git", ["-C", repo, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
if (head !== b1) fail(`repository HEAD ${head.slice(0, 7)} is not the successor's BASE ${b1.slice(0, 7)}`);
console.log(`diff: lines ${diff.map(i => i + 1).join(", ")} only (BASE ${b0.slice(0, 7)} -> ${b1.slice(0, 7)}; pin ${p0.slice(0, 8)} -> ${p1.slice(0, 8)})`);
console.log(`manifest: base ${b1.slice(0, 7)}, sha256 ${p1.slice(0, 12)}, ${m.entries.length} entries; repository at BASE`);
const r = spawnSync("node", [suc, "s0"], { env: { ...process.env, EV_REPO: repo, EV_OUT: out, EV_OWNERSHIP: man, EV_CONTROL: "", EV_TEST_SKIP: "", EV_TEST_INJECT: "" }, encoding: "utf8" });
process.stdout.write(r.stdout); process.stderr.write(r.stderr);
if (r.status !== 0) fail(`successor S0 exit ${r.status}`);
console.log(`successor accepted: sha256 ${sha(sb)}; read-only S0 passed`);
