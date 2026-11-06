// One-off: derive PLAN.r4.md from PLAN.r3.md by exact, counted substitutions (r3 stays unchanged).
import fs from 'fs';
const D = 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/';
let t = fs.readFileSync(D + 'PLAN.r3.md', 'utf8');
const r = (a, b, n = 1) => { const k = t.split(a).length - 1; if (k !== n) throw new Error(`count ${k} != ${n}: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('# Git binding fix plan r3 for the fresh after-D-475 F3 review (plan only; nothing executed)', '# Git binding fix plan r4 for the fresh after-D-475 F3 review (plan only; nothing executed)');
r("Revision r3 of `PLAN.r2.md` (unchanged; `PLAN.md` also unchanged). Instructions: `INSTRUCTION-R2.jsonl` (Lane A line 6135) and `INSTRUCTION-R3.jsonl` (this revision). r3 changes only finalization (§1a); the R1 exit rules, the R2 environment and the PowerShell call operator and quoting are unchanged.",
  "Revision r4 of `PLAN.r3.md` (unchanged; `PLAN.md` and `PLAN.r2.md` also unchanged). Instructions: `INSTRUCTION-R2.jsonl` (Lane A line 6135), `INSTRUCTION-R3.jsonl` (line 6212) and `INSTRUCTION-R4.jsonl` (this revision). r4 changes only the authoritative completion record (§1b); the r3 finalization in §1a, the R1 exit rules, the R2 environment, the output protections and the PowerShell call operator and quoting are unchanged.");
r('## 1a. What r3 changes (R3 finalization)', `## 1b. What r4 changes (completion-record consistency)

| Gap in r3 | r4 behaviour (\`launch-review.r4.mjs\`) |
|---|---|
| A completion-write failure raised the exit to 6 but kept a disposition computed from the earlier exit, so it could say "confirmed" for preliminary 0 → final 6 | \`dispositionOf(final)\` is evaluated every time the record is built, from the **final** exit. The stderr fallback rebuilds the record with the raised exit, so its disposition reads \`superseded: preliminary exit P, final exit F\` |
| A successful write set \`completionWrite.ok\` after serialization, so the saved file said \`completionWrite: null\` | The record carries \`completionWrite: { status: "proved by existence and read-back", contract }\`. A file cannot prove its own write; the contract says the file is authoritative only if it exists with exactly the serialized bytes. The launcher reads it back after writing. A failed write, a failed read-back or a byte mismatch gives exit 6 and the stderr fallback with \`completionWrite: { status: "failed", error }\`, which then supersedes any partial file |

Every authoritative record (file or stderr) is built by one function, so its \`exit\`, \`preliminary.disposition\` and
\`R.exit\` are set from the same final value that \`process.exit\` uses. The original error, phase, child outcome and every
secondary error stay in \`result\`. Neither record is overwritten (\`wx\`); a partial completion file is named in the
fallback and is not authoritative.

## 1a. What r3 changed (R3 finalization, kept)`);
r("2026-10-29\\launch-review.r3.mjs'", "2026-10-29\\launch-review.r4.mjs'");
r("2026-10-29/launch-review.r3.mjs'", "2026-10-29/launch-review.r4.mjs'");
r('Lane B reads `launch-review.r3.mjs` and the r2-to-r3 diffs', 'Lane B reads `launch-review.r4.mjs` and the r3-to-r4 diffs');
r('Any nonzero exit: keep `launcher-result.json` (or its stderr copy) and every log, change nothing, return to Lane A with the\nrecorded phase and findings.',
  'Any nonzero exit: keep the authoritative record (`launcher-completion.json` if it exists and its read-back passed, otherwise\nthe structured stderr line), the preliminary `launcher-result.json` when present, any partial completion file, the child\'s\npacket and every log; change nothing; return to Lane A with the recorded phase, findings and secondary errors.');
r('| 21 | Record and exit agree | ', '| 21 | Record and exit agree (any case) | ');
const rows = `
| 22 | Successful child, preservation and completion write | Every gate passes, child exit 0, preservation proved, post-write check passes, completion written and read back | Exit 0; \`launcher-completion.json\` with \`record: "authoritative"\`, \`exit: 0\`, \`completionWrite.status: "proved by existence and read-back"\`, \`preliminary.written: true\`, \`preliminary.exit: 0\`, \`preliminary.disposition: "confirmed"\`, \`finalization.postWrite.ok: true\`; \`launcher-result.json\` marked preliminary; no stderr record | Lane B |
| 23 | Preliminary exit 0, then completion-write failure | As row 22 until the completion write fails (or its read-back fails) | Exit 6; stderr record with \`exit: 6\`, \`completionWrite.status: "failed"\` and the error, \`preliminary.exit: 0\`, \`preliminary.disposition: "superseded: preliminary exit 0, final exit 6"\`, the write error in \`result.secondaryErrors\`; \`launcher-result.json\` kept | Lane B |
| 24 | Earlier nonzero exit, then completion-write failure | For example child failure (3) or post-write mismatch (4), then a failed completion write | Exit 6; stderr record with \`exit: 6\`, \`preliminary.exit\` equal to the earlier code (or 4 after a post-write failure is the final pre-completion value), \`preliminary.disposition: "superseded: preliminary exit P, final exit 6"\`, the child outcome in \`result.child\`, \`finalization.postWrite\` as recorded, and both failures in \`result.secondaryErrors\` | Lane B |`;
r('| 21 | Record and exit agree (any case) | Compare the process exit with `exit` in the authoritative record in each case above | Equal in every case; preliminary hash and disposition present whenever it was written | Lane B |',
  '| 21 | Record and exit agree (any case) | Compare the process exit with `exit` in the authoritative record in each case above | Equal in every case; preliminary hash and disposition present whenever it was written | Lane B |' + rows);
fs.writeFileSync(D + 'PLAN.r4.md', t); console.log('PLAN.r4.md written');
