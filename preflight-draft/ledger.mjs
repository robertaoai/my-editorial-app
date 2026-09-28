// D-324 step 2: build the measured draft and the exact-partition coverage ledger.
// Originals are read from the adopted commit (not the worktree's preflight fixtures).
//   node preflight-draft/ledger.mjs   (run from the worktree root)
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";

const PIN = "c06ddc3";
const D = "preflight-draft/";
const git = (p) => execFileSync("git", ["show", `${PIN}:${p}`], { encoding: "utf8" });
const sha = (s) => createHash("sha256").update(s).digest("hex");
const chars = (s) => [...s].length;
const lines = (s) => s.split("\n"); // a trailing "" follows the final newline
const lineBytes = (L, i, total) => Buffer.byteLength(L[i]) + (i < total - 1 ? 1 : 0);

const orig = { "AGENTS.md": git("AGENTS.md"), "CLAUDE.md": git("CLAUDE.md"), ".agents/rules/graphify.md": git(".agents/rules/graphify.md") };
const O = Object.fromEntries(Object.entries(orig).map(([k, v]) => [k, lines(v)]));

// --- assemble the drafts that are built mechanically -------------------------------------------
const cStart = O["CLAUDE.md"].indexOf("Claude Code specifics:");
const gStart = O[".agents/rules/graphify.md"].indexOf("Gemini / Antigravity specifics:");
if (cStart < 0 || gStart < 0) throw new Error("tail markers not found");

const claudeTail = O["CLAUDE.md"].slice(cStart).join("\n");
const claudeDraft = readFileSync(D + "CLAUDE.head.md", "utf8") + claudeTail;

const geminiHead = [
  "# Antigravity — Lane C (DevOps): your rules",
  "",
  "Antigravity loads this file with `AGENTS.md` (the shared rules), for every model (`D-325`, `D-328`, `D-331`).",
  "It holds only Lane C's own rules; it never copies the shared core (`D-324`).",
  "",
  "",
].join("\n");
const geminiDraft = geminiHead + O[".agents/rules/graphify.md"].slice(gStart).join("\n");

const refHead = [
  "# Agent rules reference — verbatim text of the pre-`D-324` rule files",
  "",
  "This file is **on demand**: no tool loads it automatically. It keeps, word for word, every rule the",
  "`D-324` refactor moved out of the automatically loaded files, so nothing was deleted. The operative",
  "rules are `AGENTS.md`, `CLAUDE.md` and `GEMINI.md`; where this historical text differs from them, or",
  "names the old file layout (for example the `SHARED CORE` comment or `.agents/rules/graphify.md` as",
  "Lane C's file), the operative files and the Register (`D-58`) decide.",
  "",
  `Source: \`AGENTS.md\` at \`${PIN}\`, SHA-256 \`${sha(orig["AGENTS.md"])}\`. The \`CLAUDE.md\` and`,
  "`.agents/rules/graphify.md` lines not below are byte-identical to lines here (the shared core) or were",
  "moved verbatim to `CLAUDE.md` and `GEMINI.md`; see the coverage ledger (`SV-002` §3.6.6).",
  "",
  "---",
  "",
  "",
].join("\n");
const refDraft = refHead + orig["AGENTS.md"];

writeFileSync(D + "CLAUDE.draft.md", claudeDraft);
writeFileSync(D + "GEMINI.draft.md", geminiDraft);
writeFileSync(D + "agent-rules-reference.draft.md", refDraft);
const agentsDraft = readFileSync(D + "AGENTS.draft.md", "utf8");

// --- the exact-partition coverage ledger -------------------------------------------------------
const R = lines(refDraft), RH = lines(refHead).length - 1; // reference line index offset
const CD = lines(claudeDraft), GD = lines(geminiDraft);
const ledger = [];
const place = (file, i, dest, destLine, cls) => ledger.push({ file, line: i + 1, dest, destLine, cls });
const verify = (a, b, where) => { if (a !== b) throw new Error(`not verbatim at ${where}`); };

// AGENTS.md: every line verbatim in the reference.
{ const L = O["AGENTS.md"]; for (let i = 0; i < L.length - 1; i++) { verify(L[i], R[RH + i], `AGENTS.md:${i + 1}`); place("AGENTS.md", i, "reference", RH + i + 1, "verbatim"); } }
// CLAUDE.md: lines before the tail duplicate AGENTS.md lines; the tail is verbatim in CLAUDE.draft.
{ const L = O["CLAUDE.md"], A = O["AGENTS.md"], off = lines(readFileSync(D + "CLAUDE.head.md", "utf8")).length - 1;
  for (let i = 0; i < L.length - 1; i++) {
    if (i < cStart) { verify(L[i], A[i], `CLAUDE.md:${i + 1} vs AGENTS.md`); place("CLAUDE.md", i, "reference", RH + i + 1, "duplicate of AGENTS.md line " + (i + 1)); }
    else { verify(L[i], CD[off + i - cStart], `CLAUDE.md:${i + 1}`); place("CLAUDE.md", i, "CLAUDE.draft", off + i - cStart + 1, "verbatim (Claude lane tail)"); }
  } }
// graphify.md: frontmatter retired; shared lines duplicate AGENTS.md; tail verbatim in GEMINI.draft.
{ const L = O[".agents/rules/graphify.md"], A = O["AGENTS.md"], gh = lines(geminiHead).length - 1;
  const fmEnd = L.indexOf("---", 1); // closing frontmatter fence
  const shift = A.indexOf("## graphify") - L.indexOf("## graphify");
  for (let i = 0; i < L.length - 1; i++) {
    if (i <= fmEnd) place(".agents/rules/graphify.md", i, "retired", null, "frontmatter metadata (GEMINI.md takes none; installed rules.md)");
    else if (i < gStart) {
      if (L[i] === A[i + shift]) place(".agents/rules/graphify.md", i, "reference", RH + i + shift + 1, "duplicate of AGENTS.md line " + (i + shift + 1));
      else if (L[i].trim() === "") place(".agents/rules/graphify.md", i, "retired", null, "blank separator");
      else throw new Error(`graphify.md:${i + 1} has no verbatim home`);
    } else { verify(L[i], GD[gh + i - gStart], `graphify.md:${i + 1}`); place(".agents/rules/graphify.md", i, "GEMINI.draft", gh + i - gStart + 1, "verbatim (Lane C tail)"); }
  } }

// Partition proof: every line exactly once, sizes summing to each file's total.
const part = {};
for (const [f, L] of Object.entries(O)) {
  const n = L.length - 1, rows = ledger.filter((r) => r.file === f);
  const seen = new Set(rows.map((r) => r.line));
  const bytes = rows.reduce((s, r) => s + lineBytes(L, r.line - 1, L.length), 0) + (orig[f].endsWith("\n") ? 0 : 0);
  part[f] = { lines: n, rows: rows.length, unique: seen.size, bytesCovered: bytes, fileBytes: Buffer.byteLength(orig[f]), exact: rows.length === n && seen.size === n && bytes === Buffer.byteLength(orig[f]) };
}

// Measurements against the adopted bound.
const m = (s) => ({ chars: chars(s), bytes: Buffer.byteLength(s), lines: s.split("\n").length - (s.endsWith("\n") ? 1 : 0), sha256: sha(s) });
const meas = { "AGENTS.draft": m(agentsDraft), "CLAUDE.draft": m(claudeDraft), "GEMINI.draft": m(geminiDraft), "reference.draft": m(refDraft) };
const coreProbe = O["AGENTS.md"].find((l) => l.startsWith("**Arbitration (`D-58`"));
const gates = {
  "AGENTS chars <= 5,400 (working ceiling)": meas["AGENTS.draft"].chars <= 5400,
  "AGENTS chars < 6,000 (hard cap)": meas["AGENTS.draft"].chars < 6000,
  "AGENTS bytes < 24,000": meas["AGENTS.draft"].bytes < 24000,
  "CLAUDE lines < 300": meas["CLAUDE.draft"].lines < 300,
  "GEMINI bytes < 24,000": meas["GEMINI.draft"].bytes < 24000,
  "CLAUDE imports @AGENTS.md on its own line": claudeDraft.split("\n").includes("@AGENTS.md"),
  "single copy of core: CLAUDE.draft has no shared-core text": !claudeDraft.includes(coreProbe),
  "single copy of core: GEMINI.draft has no shared-core text": !geminiDraft.includes(coreProbe),
  "no HTML comment in automatic files": ![agentsDraft, claudeDraft, geminiDraft].some((s) => s.includes("<!--")),
  "lane state appears only as the §5 pointer": (agentsDraft.match(/V1-PHASE-CLOSURE\.md` §5/g) || []).length === 1,
  "pointer index: one line to the reference": (agentsDraft.match(/agent-rules-reference\.md/g) || []).length === 1,
  "partition exact for all three originals": Object.values(part).every((p) => p.exact),
};

writeFileSync(D + "ledger.json", JSON.stringify({ pin: PIN, originals: Object.fromEntries(Object.entries(orig).map(([k, v]) => [k, { sha256: sha(v), bytes: Buffer.byteLength(v) }])), partition: part, measurements: meas, gates, ledger }, null, 1) + "\n");
console.log("partition:", JSON.stringify(part, null, 1));
console.log("measurements:", JSON.stringify(Object.fromEntries(Object.entries(meas).map(([k, v]) => [k, { chars: v.chars, bytes: v.bytes, lines: v.lines }])), null, 1));
console.log("classes:", JSON.stringify(ledger.reduce((a, r) => ((a[`${r.file} -> ${r.dest}`] = (a[`${r.file} -> ${r.dest}`] || 0) + 1), a), {}), null, 1));
for (const [k, v] of Object.entries(gates)) console.log(v ? "PASS" : "FAIL", k);
process.exit(Object.values(gates).every(Boolean) ? 0 : 1);
