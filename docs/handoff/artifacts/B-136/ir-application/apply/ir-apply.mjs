// IR application unit (D-438, Route B). Modes: s0 | act | apply. Node, no shell. Refuses on any mismatch.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";

const REPO = "C:/robertaoai/my-editorial-app";
const OUT = "C:/CoWork/outputs/lane-a-ir-doc-corrections-2026-10-15/apply";
const ART = "docs/handoff/artifacts/B-136/ir-application";
const DATE = "2026-10-15";
const NUM = "D-438";
const AUTH = "Judge Approved: Route B; publish after receipt; authorize receipt route";
const SLOTS = {
  SEC: "5.14e262", DATE, AUTH_QUOTE: AUTH, D1_QUOTE: "Route B", J1_QUOTE: "publish after receipt",
  J2_QUOTE: "authorize receipt route", AMEND_QUOTE: "Route B",
  ACT_FILE: `${ART}/IR-APPLICATION-ACT-r5.md`,
  ACT_SHA: "3bf8e0b88300a6f043ce3df86fb7ce89373f0679a56b4dff5dc7948dbd5d638b",
  SETUP_CLAUSE: "none; D-437 is not recorded in this batch",
};
// Manifest r6 (B-136 6c2d687): the only version binding.
const MANIFEST = {
  "IR-APPLICATION-ACT-r5.md": "3bf8e0b88300a6f043ce3df86fb7ce89373f0679a56b4dff5dc7948dbd5d638b",
  "IR-D438-REGISTER-BODY-r3.md": "b7f68feaa84d2a9b32b52142e91b47c7cc4faa9f2c11941969f0bb452e47c5ca",
  "IR-ROUTE-B-r4.md": "e3601e373c9053c0144c1d463765edaae3c85df4a589afb5a4e59dcc2a2c01f6",
  "IR-CORRECTION-PACKET-r2.md": "bc29c616e5d3d2850e00e5037420e7f0bae534a243bcbecac77f8c1cd0fcb71c",
};
const BOUND = { // act §C, blob ids at 5d00503
  "docs/Modular_PRD.md": "9d71c4ef7645913c8fe47300774eded780e957ce",
  "docs/v1/work-packets/V1/V1-SM05.md": "2fd6ce6926600931399c532470c1bec537267611",
  "docs/specs/SPECS-TRANSITION-ENFORCEMENT.md": "65c2afa7bee6852f783e567a5b2c40d76ab78c8e",
  "docs/specs/SPECS-PUBLICATION.md": "dbd82d0b7c8d174bd3dad5f4698eeed73a74d57f",
  "docs/v1/V1-ARTIFACT-INVENTORY.md": "7dce2f131f253f31b938902780e5099f327fdfe7",
  "docs/v1/V1-DECISION-REGISTER.md": "b8fe07ff42bd57a6f2673998ca6d32ca26c56092",
  "docs/v1/V1-BUILD-SPEC.md": "d8f09bacb4412fa25a69f2bf05c0d1dc3c012a9e",
};
const REG = "docs/v1/V1-DECISION-REGISTER.md";
const FIVE = Object.keys(BOUND).slice(0, 5);
// A1–A10, transcribed from IR packet r2; each pair must occur literally in the packet.
const A = [
  ["docs/Modular_PRD.md", "**Neither governs the other — they sit on opposite sides of the customer/project boundary.**",
    "**The Project PRD is the frozen customer baseline; this document elaborates it within `D-29`'s hierarchy, and conflicts follow `D-58` (frozen documents win).** *Corrected 2026-10-NN (`D-NNN`, B-136 IR-1): this sentence earlier read \"Neither governs the other\".*"],
  ["docs/Modular_PRD.md", "A difference between the two is therefore never resolved by precedence. It is one of exactly two things:",
    "A difference between the two is one of exactly two things:"],
  ["docs/Modular_PRD.md", "Resolving a difference by document rank would mean the project team altering the customer's scope without telling them.",
    "A downstream edit never approves a scope change: the frozen baseline stands, and a departure routes to the customer through the sponsor."],
  ["docs/Modular_PRD.md", "An earlier draft asked which of the two PRDs \"governs.\" That was the wrong question — they sit on opposite sides of the customer/project boundary and neither outranks the other.",
    "An earlier draft asked which of the two PRDs \"governs\"; `D-29`/`D-58` settle that (see the prologue). *Corrected 2026-10-NN (`D-NNN`).*"],
  ["docs/v1/work-packets/V1/V1-SM05.md", "(`../../SETUP-SPIKE-000/SV-001.md`)", "([SV-001](../SETUP-SPIKE-000/SV-001.md))"],
  ["docs/v1/work-packets/V1/V1-SM05.md", "(`../../SETUP-SPIKE-000/SV-002.md`)", "([SV-002](../SETUP-SPIKE-000/SV-002.md))"],
  ["docs/specs/SPECS-TRANSITION-ENFORCEMENT.md", "Names no field — `Q11` is open and irreversible after S1.",
    "Names no field. *Corrected 2026-10-NN (`D-NNN`, B-136 IR-3): this sentence earlier read \"`Q11` is open and irreversible after S1\". `Q11` is decided: `D-97` fixed the three-value shape, `D-111` the name `line_separation_status`, `D-112` aligned `G-02` (Register `G16`, `G64`). The decided name stays irreversible after S1. This note admits no transition execution into `V1-SM05` and authorizes no schema work.*"],
  ["docs/specs/SPECS-TRANSITION-ENFORCEMENT.md", "Four of the eleven gates do not fit a pair table:",
    "Some transition IDs do not fit a fixed `(from_state, to_state)` pair table. The cases are: *(Corrected 2026-10-NN, `D-NNN`, B-136 IR-4: earlier \"Four of the eleven gates\"; §3 separates judgment gates from transition mechanics, `D-233` L66.)*"],
  ["docs/specs/SPECS-PUBLICATION.md", "`docs/specs/ux/` — separate, currently empty (`V1-ARTIFACT-INVENTORY.md` row 51)",
    "Publication-specific manual-confirm UI specification **not yet written**; `docs/specs/ux/` exists but its governance UX (`UX-MULTI-LANE-AI-GOVERNANCE.md`, `D-271`) does not cover it. *Corrected 2026-10-NN (`D-NNN`): earlier \"currently empty (row 51)\"; no Inventory row names this spec.*"],
  ["docs/v1/V1-ARTIFACT-INVENTORY.md", "❌ **Corrected 2026-08-30 (`D-161`, closing `B-061`): the directory does not exist at all** — the prior \"exists, empty\" claim was wrong.",
    "❌ **Route spec not written.** *Directory status superseded 2026-09-27: `docs/specs/ux/` exists (row `UX-MULTI-LANE-AI-GOVERNANCE.md`, `D-271`); this `/editorial`, `/request-brief` route UX is still absent (`D-NNN`).* *Earlier, 2026-08-30 (`D-161`, closing `B-061`): the directory did not exist at that time; the prior \"exists, empty\" claim was wrong.*"],
];

const git = (...a) => execFileSync("git", ["-C", REPO, ...a], { encoding: "utf8" }).trim();
const sha = b => createHash("sha256").update(b).digest("hex");
const blobOf = buf => execFileSync("git", ["-C", REPO, "hash-object", "--no-filters", "--stdin"], { input: buf, encoding: "utf8" }).trim();
const rd = p => readFileSync(`${REPO}/${p}`);
const fail = m => { console.error("REFUSE: " + m); process.exit(2); };
const count = (s, x) => s.split(x).length - 1;
const log = [];
const note = m => { console.log(m); log.push(m); };
mkdirSync(OUT, { recursive: true });

function bindInputs() {
  const files = {};
  for (const [f, h] of Object.entries(MANIFEST)) {
    const b = rd(`${ART}/${f}`);
    if (sha(b) !== h) fail(`manifest hash ${f}`);
    files[f] = b.toString("utf8");
  }
  note("E1 manifest r6 inputs bound (4 files)");
  for (const [p, o, n] of A) {
    if (!files["IR-CORRECTION-PACKET-r2.md"].includes(o) || !files["IR-CORRECTION-PACKET-r2.md"].includes(n)) fail(`pair not literal in packet r2: ${o.slice(0, 40)}`);
  }
  note("A1–A10 old/new pairs occur literally in packet r2");
  return files;
}

function composeBody(files) {
  let body = files["IR-D438-REGISTER-BODY-r3.md"];
  const rb = files["IR-ROUTE-B-r4.md"].split("\n");
  const i = rb.findIndex(l => l.startsWith("## 2.")), j = rb.findIndex(l => l.startsWith("## 3."));
  const item0 = rb.slice(i + 1, j).filter(l => l.startsWith(">")).map(l => l.replace(/^> ?/, "")).join("\n");
  if (!item0.startsWith("**0. Registration timing.**")) fail("item 0 extraction");
  body = body.replace("{ROUTE_B_ITEM_0}", item0);
  for (const [k, v] of Object.entries(SLOTS)) body = body.split(`{${k}}`).join(v);
  if (/\{[A-Z0-9_]+\}/.test(body)) fail("slot token left: " + body.match(/\{[A-Z0-9_]+\}/)[0]);
  return body;
}

function s0() {
  for (const [p, b] of Object.entries(BOUND)) if (blobOf(rd(p)) !== b) fail(`S0 bound blob ${p}`);
  note("S0 seven bound blobs equal");
  const walk = d => execFileSync("git", ["-C", REPO, "ls-files", d], { encoding: "utf8" }).split("\n").filter(Boolean);
  const corpus = walk("docs").filter(p => p.endsWith(".md") && !p.startsWith("docs/handoff/") && !p.startsWith("docs/graph-fragments/") && p !== REG);
  for (const [p, o] of A) {
    const hits = corpus.map(f => [f, count(rd(f).toString("utf8"), o)]).filter(x => x[1]);
    if (hits.length !== 1 || hits[0][0] !== p || hits[0][1] !== 1) fail(`S0 old-text count ${o.slice(0, 40)} ${JSON.stringify(hits)}`);
  }
  note(`S0 A1–A10 exactly once, only in target (${corpus.length} files)`);
  if (rd(REG).toString("utf8").includes("`D-438`")) fail("S0 D-438 already in Register");
  const refs = git("grep", "-l", "D-438", "--", ".").split("\n").filter(Boolean);
  const allowed = ["docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md", `${ART}/IR-APPLICATION-ACT-r5.md`, `${ART}/IR-D438-REGISTER-BODY-r3.md`, `${ART}/IR-ROUTE-B-r4.md`, `${ART}/IR-ROUTE-A-r4.md`, `${ART}/LANE-B-SUPPLIED-AUDIT-983eb30.md`, `${ART}/LANE-B-SUPPLIED-AUDIT-1c0635b.md`, `${ART}/LANE-B-CHAT-REVIEW-310af2f.md`];
  const other = refs.filter(r => !allowed.includes(r));
  if (other.length) fail("S0 D-438 referenced elsewhere: " + other.join(", "));
  note(`S0 N1: D-438 not registered; references only in this IR act's records (${refs.length} files)`);
  if (git("status", "--porcelain", "--", ...Object.keys(BOUND))) fail("S0 working tree dirty on bound paths");
  note("S0 bound paths clean");
}

function expectedApply() {
  const exp = {};
  for (const p of FIVE) exp[p] = rd(p).toString("utf8");
  for (const [p, o, n] of A) {
    if (count(exp[p], o) !== 1) fail(`E4 old text not once in buffer: ${o.slice(0, 40)}`);
    const nn = n.split("D-NNN").join(NUM).split("2026-10-NN").join(DATE);
    if (/D-NNN|2026-10-NN/.test(nn)) fail("E3 substitution left");
    exp[p] = exp[p].replace(o, () => nn);
  }
  return exp;
}

const mode = process.argv[2];
const files = bindInputs();
if (mode === "s0") {
  s0();
  const body = composeBody(files);
  writeFileSync(`${OUT}/D-438-composed-body.md`, body);
  note(`composed body sha256 ${sha(Buffer.from(body))}`);
} else if (mode === "act") {
  s0();
  const body = composeBody(files);
  const prior = rd(REG).toString("utf8");
  if (!prior.endsWith("\n")) fail("Register does not end with newline");
  const expected = prior + "\n" + body;
  const eb = Buffer.from(expected);
  writeFileSync(`${OUT}/expected-register.md`, eb);
  note(`E4 expected Register blob ${blobOf(eb)} sha256 ${sha(eb)}`);
  writeFileSync(`${REPO}/${REG}`, eb); // E2a satisfied by s0 (clean + bound bytes)
  if (blobOf(rd(REG)) !== blobOf(eb)) fail("post-write Register mismatch");
  note("act write done; commit next, then run: node ir-apply.mjs verify-act <commit>");
} else if (mode === "verify-act") {
  const c = process.argv[3];
  const paths = git("diff-tree", "--no-commit-id", "--name-only", "-r", c);
  if (paths !== REG) fail("E5 act commit paths: " + paths);
  const eb = readFileSync(`${OUT}/expected-register.md`);
  if (git("rev-parse", `${c}:${REG}`) !== blobOf(eb)) fail("E5 act commit blob mismatch");
  const del = git("diff", "--numstat", `${c}^`, c).split("\t")[1];
  if (del !== "0") fail("E5 act commit has deletions");
  note(`E5 act commit ${c}: one path, blob = expected, 0 deletions`);
} else if (mode === "apply") {
  for (const p of FIVE) if (blobOf(rd(p)) !== BOUND[p]) fail(`E2 prior state ${p}`);
  if (git("status", "--porcelain", "--", ...FIVE)) fail("E2a five paths dirty");
  note("E2a five paths clean and at bound bytes");
  const exp = expectedApply();
  const manifest = {};
  for (const p of FIVE) { const b = Buffer.from(exp[p]); manifest[p] = { blob: blobOf(b), sha256: sha(b) }; writeFileSync(`${OUT}/expected-${p.split("/").pop()}`, b); }
  writeFileSync(`${OUT}/expected-apply.json`, JSON.stringify(manifest, null, 2));
  note("E4 expected blobs recorded");
  const written = [];
  for (const p of FIVE) {
    if (blobOf(rd(p)) !== BOUND[p]) fail(`E2b target prior ${p}`);
    for (const w of written) if (blobOf(rd(w)) !== manifest[w].blob) fail(`E2b written ${w}`);
    for (const u of FIVE.filter(x => x !== p && !written.includes(x))) if (blobOf(rd(u)) !== BOUND[u]) fail(`E2b unwritten ${u}`);
    writeFileSync(`${REPO}/${p}`, Buffer.from(exp[p]));
    written.push(p);
  }
  for (const p of FIVE) if (blobOf(rd(p)) !== manifest[p].blob) fail(`post-write ${p}`);
  // inverse check
  for (const p of FIVE) {
    let inv = exp[p];
    for (const [q, o, n] of A.filter(x => x[0] === p).reverse()) inv = inv.replace(n.split("D-NNN").join(NUM).split("2026-10-NN").join(DATE), () => o);
    if (blobOf(Buffer.from(inv)) !== BOUND[p]) fail(`inverse ${p}`);
  }
  note("five files written; post-write blobs = expected; inverse check = bound inputs");
} else if (mode === "verify-apply") {
  const c = process.argv[3];
  const paths = git("diff-tree", "--no-commit-id", "--name-only", "-r", c).split("\n").sort();
  if (JSON.stringify(paths) !== JSON.stringify([...FIVE].sort())) fail("E5 applying commit paths: " + paths.join(","));
  const m = JSON.parse(readFileSync(`${OUT}/expected-apply.json`, "utf8"));
  for (const p of FIVE) if (git("rev-parse", `${c}:${p}`) !== m[p].blob) fail(`E5 blob ${p}`);
  note(`E5 applying commit ${c}: five paths, every blob = expected`);
} else fail("mode");
writeFileSync(`${OUT}/log-${mode}.txt`, log.join("\n") + "\n");
