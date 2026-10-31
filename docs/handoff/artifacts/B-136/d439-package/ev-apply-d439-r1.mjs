// D-439 application helper r1 (EV correction packet r9). Separate from the D-438 helper r4, which stays unchanged.
// Modes: s0 | expected | apply | verify | verify-commit <commit>.
// Inputs: EV_DATE (YYYY-MM-DD, the act date; required), EV_OWNERSHIP (the reviewed ownership manifest; s0), EV_REPO and
// EV_OUT (disposable-copy controls). Control-only switches, logged when used: EV_CONTROL=1 (apply without the act in the
// Register), EV_TEST_SKIP=<edit id> (apply leaves that edit out), EV_TEST_INJECT=<path> (append a byte after the first write).
// Expected bytes come from the pinned blobs (read from the object store, not the working tree) and the packet texts; they
// are recorded before any write. verify and verify-commit recompute them and never trust the stored record alone.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";

const REPO = process.env.EV_REPO || "C:/robertaoai/my-editorial-app";
const OUT = process.env.EV_OUT || "C:/CoWork/outputs/lane-a-d439-package-2026-10-16/apply";
const NUM = "D-439";
const DATE = process.env.EV_DATE || "";
const BASE = "317404b8d80e8a319497e03bddd7ab0ec78ec107"; // ownership manifest observed here
const PACKET = "docs/handoff/artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r9.md";
const PACKET_SHA256 = "dfd5c7771e9b1980c95b3ecaf26c01630e8a4d128d135b7647d8e7edb88f5c65";
const OWNERSHIP_SHA256 = "1ac93488579048d74408825849ab8f0cca166e54203cbb31cb0372f98fe4965f";
const REG = "docs/v1/V1-DECISION-REGISTER.md";
const PRD = "docs/Modular_PRD.md", SRC = "docs/source/README.md", MAP = "docs/governance/requirements-traceability-map.md";
const PINS = { // EV r9 header, Git blob ids (--no-filters)
  [PRD]: "8dcaedc82729a6968a23f340103ce3ce9f70d108",
  [SRC]: "ba7b0db3bd14fe95cf9ab288c4cefd1b89ba3d0c",
  [MAP]: "53fcb80e2f4d17807f8061bcc93d29c0f6401dde",
};
const FILES = Object.keys(PINS);
// Active edits, EV r9 §7a. kind: replace (old -> new) | before (insert new + blank line before the anchor line) |
// after (insert new as the next line after the line starting with the anchor). Each text must occur literally in the packet.
const E = [
  { id: "E1", path: PRD, kind: "replace",
    old: "- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)",
    new: "- Business Charter — **may be requested, not required** (`D-NNN`, `FB-07`). V1 starts from the business intent in the Project Charter; accepted release conclusions are added to the cumulative record in `requirements-traceability-map.md` §7.1. Its absence alone blocks no release. *Corrected {DATE} (`D-NNN`): earlier a required checklist item.*" },
  { id: "E2", path: PRD, kind: "replace",
    old: "| `DEP-09` | **Business Charter and exit strategy** |",
    new: "| `DEP-09` | **Exit strategy** *(the Business Charter component: may be requested, not required — `D-NNN`, {DATE}; see §9.4)* |" },
  { id: "E6", path: PRD, kind: "replace",
    old: "| **Last Updated** | 2026-09-27 (`D-271`) |",
    new: "| **Last Updated** | {DATE} (`D-NNN`) — §0.1 ends at 1.44; later changes are recorded in the Register (`D-374`, `D-381`, `D-392`, `D-404`, `D-433`, `D-435`, `D-438`, `D-NNN`) |" },
  { id: "E12", path: PRD, kind: "replace",
    old: "legal/compliance policy — owner TBD",
    new: "legal/compliance policy — standing control (`D-188`); owner question withdrawn (`D-NNN`, {DATE}); a later scope proposal names its own owner" },
  { id: "E3", path: SRC, kind: "replace",
    old: "do not conflate them) and an **exit strategy**. Neither blocks Phase 0; both are required\nbefore a production go-live decision.",
    new: "do not conflate them) and an **exit strategy**. Neither blocks Phase 0. The **exit strategy** is required\nbefore a production go-live decision (`DEP-09`). The Business Charter may be requested and is not required\n(`D-NNN`): V1 starts from the business intent in the Project Charter, and accepted release conclusions are added\nto the cumulative record (`../governance/requirements-traceability-map.md` §7.1)." },
  { id: "E4", path: SRC, kind: "replace",
    old: "- `../` (PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing\n  document**; see `../README.md`.",
    new: "- `../PRD.md` — the frozen customer baseline; **governing** (`D-29`, `D-58`).\n- `../` (ARCHITECTURE, DATA_MODEL, TASKS, …) — the scaffold plan pack generated with it. **Not governing**;\n  see `../README.md` for precedence. *Corrected {DATE} (`D-NNN`): PRD was listed with the plan pack.*" },
  { id: "E8", path: MAP, kind: "replace",
    old: "That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.",
    new: "That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.\n\n**Judge direction, {DATE} (`D-NNN`):** the Project Charter carries the V1 business intent; a separate Business Charter may be requested and is not required; validated release conclusions are added to the cumulative record in §7.1 at each release cycle." },
  { id: "E9", path: MAP, kind: "replace", row: "| `FB-07` |",
    old: "**No obligation implied; this blocks nothing.**",
    new: "**No obligation implied; this blocks nothing.** *Policy and cumulative record: `D-NNN`, §7.1.*" },
  { id: "E10", path: MAP, kind: "before", old: "## 8. Maintenance",
    new: "### 7.1 Business Charter record — cumulative, by release (`D-NNN`)\n\nThis record holds business conclusions the Chief Editor has accepted after a release. It is Phase 1 intent. Release\nevidence stays with the release and is linked here, not copied. Rows are append-only: a row is never edited; a later\nrow names the row it supersedes. A technical test pass is not a business-criterion result.\n\n**Input rows (`BCR`).** One row per business criterion per release, written when that release's DoD is accepted.\n\n| `BCR` ID | Release and accepting act | Business claim and source (path, revision, anchor) | Criterion | Evidence (path, commit; existing or planned) | Result | Limits | Supersedes |\n|---|---|---|---|---|---|---|---|\n\n**Disposition rows (`BCD`).** One row per Chief Editor decision on an input row. A changed decision is a new `BCD` row\nthat names the earlier one. Each disposition names its next action, owner and trigger, or explicitly states none. The\nunsuperseded disposition determines current acceptance. Earlier decisions remain history.\n\n| `BCD` ID | Input row | Disposition | Date and authority | Incorporated as | Next action, owner and trigger | Supersedes |\n|---|---|---|---|---|---|---|\n\n`Result` is `met`, `not met` or `not measured`; all three are kept. `Disposition` is `accepted`, `rejected` or\n`deferred`. An input row without an `accepted` disposition is a **Business Charter input pending incorporation**.\n`Incorporated as` names the release block version `<release>@<YYYY-MM-DD>`, where the date is the disposition date;\nit is empty unless the disposition is `accepted`. An input row is currently accepted only while its unsuperseded `BCD`\nrow says `accepted`; a later `rejected` or `deferred` row ends that acceptance, and the earlier rows stay as history.\n\nNo release-feedback rows are recorded in this section." },
  { id: "E11", path: MAP, kind: "after", old: "| Sprint DoD written |",
    new: "| A release's DoD is accepted | Add its `BCR` input rows to §7.1; add a `BCD` row for each Chief Editor decision |" },
];

const git = (...a) => execFileSync("git", ["-C", REPO, ...a], { encoding: "utf8" }).trim();
const sha = b => createHash("sha256").update(b).digest("hex");
const blobOf = buf => execFileSync("git", ["-C", REPO, "hash-object", "--no-filters", "--stdin"], { input: buf, encoding: "utf8" }).trim();
const catBlob = id => execFileSync("git", ["-C", REPO, "cat-file", "blob", id]);
const rd = p => readFileSync(`${REPO}/${p}`);
const fail = m => { console.error("REFUSE: " + m); process.exit(2); };
const count = (s, x) => s.split(x).length - 1;
const sub = t => t.split("D-NNN").join(NUM).split("{DATE}").join(DATE);
const lineStart = (s, a) => { const hits = []; let i = -1; while ((i = s.indexOf(a, i + 1)) !== -1) if (i === 0 || s[i - 1] === "\n") hits.push(i); return hits; };
const log = [];
const note = m => { console.log(m); log.push(m); };

function bindPacket() {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(DATE)) fail("EV_DATE must be YYYY-MM-DD");
  const b = rd(PACKET);
  if (sha(b) !== PACKET_SHA256) fail("packet r9 hash");
  const p = b.toString("utf8");
  for (const e of E) if (!p.includes(e.old) || !p.includes(e.new)) fail(`${e.id} text not literal in packet r9`);
  if (E.map(e => e.id).sort().join() !== "E1,E10,E11,E12,E2,E3,E4,E6,E8,E9") fail("active edit set is not the §7a set");
  for (const e of E) if (/D-NNN|\{DATE\}/.test(sub(e.new))) fail(`${e.id} placeholder left`);
  note(`packet r9 bound (${PACKET_SHA256.slice(0, 12)}); 10 active edits literal in it; date ${DATE}`);
}

// Apply one edit to text s; refuses unless its target occurs exactly once (anchors: once, at a line start).
function edit(s, e) {
  const n = sub(e.new);
  if (e.kind === "replace") {
    if (count(s, e.old) !== 1) fail(`${e.id} target not once in ${e.path}`);
    if (e.row) { const i = s.indexOf(e.old); const ls = s.lastIndexOf("\n", i) + 1; if (!s.startsWith(e.row, ls)) fail(`${e.id} target not in row ${e.row}`); }
    return s.replace(e.old, () => n);
  }
  const h = lineStart(s, e.old);
  if (h.length !== 1 || count(s, e.old) !== 1) fail(`${e.id} anchor not once at a line start in ${e.path}`);
  if (e.kind === "before") return s.slice(0, h[0]) + n + "\n\n" + s.slice(h[0]);
  const eol = s.indexOf("\n", h[0]);
  if (eol === -1) fail(`${e.id} anchor line has no end`);
  return s.slice(0, eol + 1) + n + "\n" + s.slice(eol + 1);
}

// Expected bytes: pinned blobs from the object store + packet texts. Inverse check: undoing every edit gives the pins.
function computeExpected() {
  const exp = {};
  for (const p of FILES) {
    let s = catBlob(PINS[p]).toString("utf8");
    for (const e of E.filter(x => x.path === p)) s = edit(s, e);
    let inv = s;
    for (const e of E.filter(x => x.path === p).reverse()) {
      const n = sub(e.new);
      if (count(inv, n) !== 1) fail(`inverse ${e.id} new text not once`);
      inv = e.kind === "replace" ? inv.replace(n, () => e.old) : e.kind === "before" ? inv.replace(n + "\n\n", "") : inv.replace(n + "\n", "");
    }
    if (blobOf(Buffer.from(inv)) !== PINS[p]) fail(`inverse ${p}`);
    exp[p] = s;
  }
  return exp;
}

// Per-edit evidence on actual bytes: the new text occurs once and the old text occurs as often as in the expected bytes.
function perEdit(actual, exp) {
  const bad = [];
  for (const e of E) {
    const a = actual[e.path], x = exp[e.path], n = sub(e.new);
    if (count(a, n) !== 1 || count(a, e.old) !== count(x, e.old)) bad.push(`${e.id} (${e.path}: new ${count(a, n)}/1, old ${count(a, e.old)}/${count(x, e.old)})`);
  }
  return bad;
}

function judge(actual, exp, where) {
  const bad = perEdit(actual, exp);
  const diff = FILES.filter(p => blobOf(Buffer.from(actual[p])) !== blobOf(Buffer.from(exp[p])));
  for (const p of diff) note(`DIFF ${where} ${p}: blob ${blobOf(Buffer.from(actual[p]))} expected ${blobOf(Buffer.from(exp[p]))}`);
  if (bad.length) fail(`edits not as expected at ${where}: ${bad.join("; ")}`);
  if (diff.length) fail(`unattributed byte difference at ${where}: ${diff.join(", ")}`);
}

function readRecord(exp) {
  const f = `${OUT}/expected.json`;
  if (!existsSync(f)) fail("no expected record (run: expected)");
  const r = JSON.parse(readFileSync(f, "utf8"));
  if (r.date !== DATE) fail("expected record date differs from EV_DATE");
  for (const p of FILES) if (r.files[p].expectedBlob !== blobOf(Buffer.from(exp[p]))) fail(`recorded expected blob differs from recomputed ${p}`);
  return r;
}

function s0() {
  if (rd(REG).toString("utf8").includes("`D-439`")) fail("S0 D-439 already in Register");
  for (const p of FILES) if (blobOf(rd(p)) !== PINS[p]) fail(`S0 pin ${p}`);
  note("S0 D-439 not in Register; three pins equal");
  const corpus = git("ls-files", "docs").split("\n").filter(p => p.endsWith(".md") && !p.startsWith("docs/handoff/") && !p.startsWith("docs/graph-fragments/") && p !== REG);
  for (const e of E) {
    const hits = corpus.map(f => [f, count(rd(f).toString("utf8"), e.old)]).filter(x => x[1]);
    if (hits.length !== 1 || hits[0][0] !== e.path || hits[0][1] !== 1) fail(`S0 ${e.id} target count ${JSON.stringify(hits)}`);
  }
  note(`S0 10 targets: each exactly once, only in its own file (${corpus.length} governed files searched)`);
  if (!process.env.EV_OWNERSHIP) fail("S0 no ownership manifest (EV_OWNERSHIP)");
  const ob = readFileSync(process.env.EV_OWNERSHIP);
  if (sha(ob) !== OWNERSHIP_SHA256) fail("S0 ownership manifest hash is not the reviewed value");
  const own = JSON.parse(ob.toString("utf8"));
  if (own.base !== BASE) fail("S0 ownership manifest base");
  const allowed = new Set(own.entries.map(e => e.path + "\0" + e.sha256));
  let hits = "";
  try { hits = execFileSync("git", ["-C", REPO, "grep", "-n", NUM, "--", "."], { encoding: "utf8" }); } catch (x) { if (x.status !== 1) throw x; }
  // Lines not in the manifest are allowed only as handoff records added by handoff-only, non-merge commits since BASE.
  const since = git("rev-list", "--parents", `${BASE}..HEAD`).split("\n").filter(Boolean);
  const handoffOnly = since.every(l => l.split(" ").length === 2 && git("diff-tree", "--no-commit-id", "--name-only", "-r", l.split(" ")[0]).split("\n").every(p => p.startsWith("docs/handoff/")));
  let listed = 0, records = 0;
  for (const h of hits.split("\n").filter(Boolean)) {
    const m = h.match(/^([^:]+):(\d+):(.*)$/s);
    if (!m) fail("S0 unparsed grep line");
    if (allowed.has(m[1] + "\0" + sha(Buffer.from(m[3].replace(/\r$/, ""))))) { listed++; continue; } // one trailing CR dropped, as in the manifest
    if (m[1].startsWith("docs/handoff/") && since.length && handoffOnly) { records++; continue; }
    fail(`S0 D-439 line not in the reviewed ownership manifest: ${m[1]}:${m[2]}`);
  }
  note(`S0 ownership: ${listed} line(s) equal reviewed entries; ${records} later handoff record line(s); ${since.length} commit(s) since base, handoff-only: ${handoffOnly}`);
  if (git("status", "--porcelain", "--", ...FILES)) fail("S0 target paths dirty");
  note("S0 target paths clean");
}

const mode = process.argv[2];
bindPacket();
mkdirSync(OUT, { recursive: true });
if (mode === "s0") {
  s0();
} else if (mode === "expected") {
  const f = `${OUT}/expected.json`;
  if (existsSync(f)) fail("expected record exists — refusing to overwrite");
  const exp = computeExpected();
  const rec = { act: NUM, date: DATE, packetSha256: PACKET_SHA256, files: {}, edits: [] };
  for (const p of FILES) { const b = Buffer.from(exp[p]); rec.files[p] = { pinnedBlob: PINS[p], expectedBlob: blobOf(b), expectedSha256: sha(b) }; }
  for (const e of E) rec.edits.push({ id: e.id, path: e.path, newCount: 1, oldCount: count(exp[e.path], e.old) });
  writeFileSync(f, JSON.stringify(rec, null, 2), { flag: "wx" });
  for (const p of FILES) note(`expected ${p}: blob ${rec.files[p].expectedBlob} sha256 ${rec.files[p].expectedSha256}`);
  note("inverse check: undoing the 10 edits gives the three pins; record written before any write");
} else if (mode === "apply") {
  const reg = rd(REG).toString("utf8");
  if (process.env.EV_CONTROL === "1") note("CONTROL RUN: act presence in the Register not checked");
  else if (!reg.includes("`D-439`")) fail("apply needs the D-439 act in the Register");
  const exp = computeExpected();
  readRecord(exp);
  for (const p of FILES) if (blobOf(rd(p)) !== PINS[p]) fail(`E2a prior state ${p}`);
  if (git("status", "--porcelain", "--", ...FILES)) fail("E2a target paths dirty");
  note("E2a three paths clean and at the pins");
  const skip = process.env.EV_TEST_SKIP || "";
  if (skip) note(`CONTROL RUN: edit ${skip} left out`);
  // intended = what this run means to write (the expected bytes, less a control's skipped edit), from the object store
  const intended = {};
  for (const p of FILES) { let t = catBlob(PINS[p]).toString("utf8"); for (const e of E.filter(x => x.path === p && x.id !== skip)) t = edit(t, e); intended[p] = t; }
  const written = [];
  for (const p of FILES) {
    if (blobOf(rd(p)) !== PINS[p]) fail(`E2b target prior ${p}`);
    for (const w of written) if (blobOf(rd(w)) !== blobOf(Buffer.from(intended[w]))) fail(`E2b written ${w}`);
    for (const u of FILES.filter(x => x !== p && !written.includes(x))) if (blobOf(rd(u)) !== PINS[u]) fail(`E2b unwritten ${u}`);
    let s = rd(p).toString("utf8"); // working-tree bytes, edited in place; expected came from the object store
    for (const e of E.filter(x => x.path === p && x.id !== skip)) s = edit(s, e);
    writeFileSync(`${REPO}/${p}`, Buffer.from(s));
    written.push(p);
    if (process.env.EV_TEST_INJECT && written.length === 1) writeFileSync(`${REPO}/${process.env.EV_TEST_INJECT}`, Buffer.concat([rd(process.env.EV_TEST_INJECT), Buffer.from("X")]));
  }
  for (const p of FILES) if (blobOf(rd(p)) !== blobOf(Buffer.from(intended[p]))) fail(`post-write ${p}`);
  note("three files written; post-write bytes = intended; run verify next");
} else if (mode === "verify") {
  const exp = computeExpected();
  readRecord(exp);
  const actual = Object.fromEntries(FILES.map(p => [p, rd(p).toString("utf8")]));
  judge(actual, exp, "working tree");
  note("verify: three files = expected bytes; 10/10 edits present once, old texts as expected");
} else if (mode === "verify-commit") {
  const c = process.argv[3];
  if (!c) fail("verify-commit needs a commit");
  const exp = computeExpected();
  readRecord(exp);
  const paths = git("diff-tree", "--no-commit-id", "--name-only", "-r", c).split("\n").sort();
  if (JSON.stringify(paths) !== JSON.stringify([...FILES].sort())) fail("E5 applying commit paths: " + paths.join(","));
  const actual = Object.fromEntries(FILES.map(p => [p, catBlob(git("rev-parse", `${c}:${p}`)).toString("utf8")]));
  judge(actual, exp, `commit ${c}`);
  note(`E5 applying commit ${c}: three paths; every blob = expected; 10/10 edits`);
} else fail("mode");
writeFileSync(`${OUT}/log-${mode}.txt`, log.join("\n") + "\n");
