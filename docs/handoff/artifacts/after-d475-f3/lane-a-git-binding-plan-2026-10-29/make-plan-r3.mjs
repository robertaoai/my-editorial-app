// One-off: derive PLAN.r3.md from PLAN.r2.md by exact, counted substitutions (r2 stays unchanged).
import fs from 'fs';
const D = 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/';
let t = fs.readFileSync(D + 'PLAN.r2.md', 'utf8');
const r = (a, b, n = 1) => { const k = t.split(a).length - 1; if (k !== n) throw new Error(`count ${k} != ${n}: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('# Git binding fix plan r2 for the fresh after-D-475 F3 review (plan only; nothing executed)', '# Git binding fix plan r3 for the fresh after-D-475 F3 review (plan only; nothing executed)');
r("Revision r2 of `PLAN.md` (unchanged). Instruction: `INSTRUCTION-R2.jsonl` (Lane A line 6135, `ccfa76f8…`).",
  "Revision r3 of `PLAN.r2.md` (unchanged; `PLAN.md` also unchanged). Instructions: `INSTRUCTION-R2.jsonl` (Lane A line 6135) and `INSTRUCTION-R3.jsonl` (this revision). r3 changes only finalization (§1a); the R1 exit rules, the R2 environment and the PowerShell call operator and quoting are unchanged.");
r('## 1. What r2 changes', `## 1a. What r3 changes (R3 finalization)

In r2, \`finish()\` serialized the result and computed the exit before finalization ended. A failed result write printed the
earlier text without the write error and could exit 0; a failed or unavailable post-write candidate check exited nonzero
while the saved JSON could still say exit 0 with preservation proved.

| Path | r3 behaviour |
|---|---|
| Records | \`launcher-result.json\` is **preliminary** (\`record: "preliminary"\`, \`authoritative: false\`), written once before the post-write check. \`launcher-completion.json\` is **authoritative**, written once, last. Neither is ever overwritten (\`wx\`) |
| Result-write failure | \`finalization.resultWrite = { ok: false, error }\`, the error joins \`secondaryErrors\`, exit raised to **6**; the completion record states "no preliminary record was written" |
| Post-write mismatch | \`finalization.postWrite = { ok: false, reason, manifest, files }\`, exit raised to **4**; the candidate check stays after the result write |
| Post-write unavailable | \`finalization.postWrite = { ok: false, unavailable: true, error }\`, exit raised to **4**; never success |
| Candidate never located | \`postWrite\` unavailable with its reason; the run had already stopped nonzero; a 0 here is raised to 5 |
| Completion-write failure | exit raised to **6**; the full completion record, with the write error, goes to stderr as one JSON line and is then authoritative |
| No validated output folder | nothing is written to disk; the completion record goes to stderr |
| \`finish()\` throws | a stderr record keeps the original error, phase, child status, secondary errors and the finalization error; exit at least 5 |
| Agreement | \`process.exit\` uses the same \`finalExit\` that the authoritative record carries; the completion record names the preliminary record's SHA-256, its exit and its disposition (\`confirmed\` or \`superseded: preliminary exit X, final exit Y\`) |

All writes stay inside the validated \`--out\` folder, or go to stderr. Exit codes: 0, 2, 3, 4 and 5 as in r2, plus **6 = a
finalization write failed**; the highest wins.

## 1. What r2 changed (kept)`);
r("2026-10-29\\launch-review.r2.mjs'", "2026-10-29\\launch-review.r3.mjs'");          // PowerShell invocation
r("2026-10-29/launch-review.r2.mjs'", "2026-10-29/launch-review.r3.mjs'");            // Git Bash invocation
r('Lane B reads `launch-review.r2.mjs` and both diffs', 'Lane B reads `launch-review.r3.mjs` and the r2-to-r3 diffs');   // matrix row 1
// the table row naming what r2 changed (`r2 (launch-review.r2.mjs)`) stays as written
r('## 4. DoR → planned validation → DoD evidence (all planned; syntax check confirms parsing only)', `## 4. DoR → planned validation → DoD evidence (all planned; syntax check confirms parsing only)

The authoritative evidence for every row from 4 onward is \`launcher-completion.json\`, or its stderr fallback;
\`launcher-result.json\` is preliminary.`);
r('| 16 | K, then separate N | Only after row 15 | Commits with checks and commit proof | Lane B |', `| 16 | K, then separate N | Only after row 15 | Commits with checks and commit proof | Lane B |
| 17 | Result-write failure after an otherwise successful child | The preliminary write fails | Exit 6; \`finalization.resultWrite.ok\` false with the error; completion says no preliminary record | Lane B |
| 18 | Post-write candidate mismatch | Digest, file count or graph differs after the result write | Exit 4; \`finalization.postWrite.ok\` false with the observed values; preliminary disposition \`superseded\` | Lane B |
| 19 | Post-write check unavailable | Candidate hashing throws after the result write | Exit 4; \`postWrite.unavailable\` true with the error; never success | Lane B |
| 20 | Original error, then a finalization error | A child or internal error, then a failed completion write or a throwing \`finish()\` | Stderr record keeps \`original\`, \`phase\`, \`child\` and every secondary error plus the finalization error; exit at least 5 (or 6) | Lane B |
| 21 | Record and exit agree | Compare the process exit with \`exit\` in the authoritative record in each case above | Equal in every case; preliminary hash and disposition present whenever it was written | Lane B |`);
fs.writeFileSync(D + 'PLAN.r3.md', t); console.log('PLAN.r3.md written');
