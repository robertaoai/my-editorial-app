// Manifest generator r2. Reads the source files and the repository destinations, then writes the draft manifest
// TRANSFER-MANIFEST-r2.md in this folder. It writes nothing in the repository.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative } from "node:path";
const OUT = "C:/CoWork/outputs";
const REPO = "C:/robertaoai/my-editorial-app";
const sha = p => createHash("sha256").update(readFileSync(p)).digest("hex");
const walk = d => readdirSync(d).flatMap(n => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const rows = [];
const add = (src, destDir, kind, note = "") => {
  const s = join(OUT, src).split("\\").join("/");
  if (!existsSync(s)) throw new Error("missing " + s);
  const name = src.split("/").pop();
  const dest = `${destDir}/${note.startsWith("sub:") ? note.slice(4) + "/" : ""}${name}`;
  const d = join(REPO, dest);
  const h = sha(s);
  const existing = !existsSync(d) ? "none — new file" : (sha(d) === h ? "identical copy exists — keep it, no write" : "DIFFERENT file exists — stop and return");
  rows.push({ src, h, dest, existing, kind });
};
const B = "docs/handoff/artifacts/B-136";
// BCP-1 map: r2 is self-contained; r3 and r4 are deltas on it (all three needed).
for (const f of ["BCP1-FILE-MAP-r2.md", "BCP1-FILE-MAP-r3.md", "BCP1-FILE-MAP-r4.md", "BCP1-SETUP-TRACE-r1.md", "BCP1-SETUP-TRACE-r2.md", "BCP1-SETUP-TRACE-r3.md", "BCP1-SETUP-TRACE-r4.md"])
  add(`lane-a-bcp1-filemap-2026-10-15/${f}`, `${B}/bcp1`, "governance draft");
for (const f of ["EV-CORRECTION-PACKET-r1.md", "EV-CORRECTION-PACKET-r2.md", "EV-CORRECTION-PACKET-r3.md", "EV-CORRECTION-PACKET-r4.md", "EV-CORRECTION-PACKET-r5.md", "EV-CORRECTION-PACKET-r6.md", "EV-CORRECTION-PACKET-r7.md", "INDEPENDENT-REVIEW-evening-2026-10-15.md"])
  add(`lane-a-ev-doc-corrections-2026-10-15/${f}`, `${B}/ev-corrections`, "governance draft");
const N = "lane-a-d438-cycle-2026-10-15/n1r3";
for (const f of ["ir-apply-r3.mjs", "ir-apply-r4.mjs", "ownership-128e0d4.json", "run-controls-r2.sh", "run-controls-r3.sh", "run-controls-r4.sh", "run-controls-r5.sh",
  "results-r2-recovered-af1e8072.txt", "results-r2-recovered-af1e8072.PROVENANCE.md", "results-r2-overwritten-by-r4.txt", "results-r3-rerun.txt", "results-r4.txt",
  "selftest-r5.txt", "selftest-r5-failures.sh", "selftest-r5-failures.txt", "selftest-T4.out", "selftest-T5.out"])
  add(`${N}/${f}`, `${B}/ir-application/controls`, f.endsWith(".mjs") || f.endsWith(".sh") ? "control code (evidence)" : "control evidence");
for (const sub of ["logs", "logs-r4"]) for (const p of walk(join(OUT, N, sub))) add(relative(OUT, p).split("\\").join("/"), `${B}/ir-application/controls`, "control evidence", "sub:" + (sub === "logs" ? "r3-logs" : "r4-logs"));
for (const p of walk(join(OUT, N, "runs"))) {
  const rel = relative(OUT, p).split("\\").join("/");
  const sub = rel.slice(`${N}/`.length, rel.lastIndexOf("/"));
  add(rel, `${B}/ir-application/controls`, "control evidence", "sub:" + sub);
}
const C = "lane-a-d438-cycle-2026-10-15";
for (const f of ["answers.json", "07-name-basis.json", "manual-names.json", "prepare-1.log", "prepare-2.log", "resume-1.log"])
  add(`${C}/${f}`, `${B}/d438-cycle`, "guarded-cycle evidence");

const lines = rows.map((r, i) => `| ${i + 1} | \`${r.src}\` | \`${r.h}\` | \`${r.dest}\` | ${r.existing} | ${r.kind} |`);
const md = `# Transfer manifest r2 — exact custody list (answers Lane B's audit of \`c60f41f\`; r1 kept)

**Status:** plan; **no file transferred yet**. Built by \`make-transfer-manifest-r2.mjs\` (manifest generator: reads source and destination files, then writes this draft manifest; writes nothing in the repository). The manifest and its generators have their own custody record: \`CONTROL-FILE-CUSTODY-r1.md\`. Paths in column 2 start at
\`C:/CoWork/outputs/\`. **Reviewer:** Lane B for every row. **Trigger:** after \`D-438\`'s health record. **Destination proof and
custody commit: pending** until the transfer; then each row gets the destination SHA-256 and the commit.

**Existing-file rule:** "identical copy exists" → keep it, write nothing; "DIFFERENT file exists" → stop and return the row;
"none" → write. Earlier revisions are kept beside later ones; nothing is overwritten.

**Not transferred (cited only, with owner and retention):**
- TR-1 contracts and evidence awaiting \`D-437\` registration — r10 packet \`b6e523f0…\`, executor handover \`b509312b…\`, unit map \`1ca9937f…\`, ledger addendum
  \`afbeff95…\` (Lane A, retained in \`lane-a-sm05-selection-draft-2026-10-13/\`, \`lane-a-tr1-setup-2026-10-14/\`); Stage A audit
  \`93466a52…\` (Lane B, \`lane-b-tr1-stage-a-handover-review-2026-10-14/\`). Kept until the \`D-437\` registration binds them.
- F16 configuration (\`fd3c37f5…\`, two copies) — sensitive host configuration; stays in \`lane-a-f16-custody-2026-10-15/\`
  (owner Lane A); only size, hash and times are recorded.
- Cycle tooling \`descriptions.mjs\`, \`names.mjs\` — reproducible inputs to \`answers.json\`; kept external (owner Lane A).
- Superseded interim drafts (map r1, interims, delta drafts) — kept external as history.

| # | Source | SHA-256 | Destination | Existing file | Kind |
|---|---|---|---|---|---|
${lines.join("\n")}

**Rows:** ${rows.length} planned — ${rows.filter(r => r.existing.startsWith("none")).length} new copies and ${rows.filter(r => r.existing.startsWith("identical")).length} retained matches. **Conflicts:** ${rows.filter(r => r.existing.startsWith("DIFFERENT")).length}. No file transferred.
`;
writeFileSync(join(OUT, "lane-a-bcp1-filemap-2026-10-15/TRANSFER-MANIFEST-r2.md"), md);
console.log(rows.length, "rows;", rows.filter(r => r.existing.startsWith("identical")).length, "identical;", rows.filter(r => r.existing.startsWith("DIFFERENT")).length, "conflicts");
