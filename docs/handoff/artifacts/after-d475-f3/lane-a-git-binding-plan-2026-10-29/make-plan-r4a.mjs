// One-off: PLAN.r4a.md = PLAN.r4.md with one correction to row 24 (PLAN.r4.md and its seal stay unchanged).
// PLAN.r4.md row 24 says preliminary.exit may be "4 after a post-write failure"; the launcher never changes
// preliminary.exit after it is computed. This replaces that clause only.
import fs from 'fs';
const D = 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/';
let t = fs.readFileSync(D + 'PLAN.r4.md', 'utf8');
const a = '`preliminary.exit` equal to the earlier code (or 4 after a post-write failure is the final pre-completion value)';
const b = '`preliminary.exit` equal to the code computed before finalization (for example 3); a later post-write failure raises the pre-completion exit to 4 but never changes `preliminary.exit`';
const k = t.split(a).length - 1; if (k !== 1) throw new Error(`count ${k} != 1`);
t = t.split(a).join(b).replace('# Git binding fix plan r4 for', '# Git binding fix plan r4a for')
  .replace('Revision r4 of `PLAN.r3.md`', 'Revision r4a of `PLAN.r4.md` (one correction to matrix row 24; `PLAN.r4.md` unchanged), itself revision r4 of `PLAN.r3.md`');
fs.writeFileSync(D + 'PLAN.r4a.md', t, { flag: 'wx' }); console.log('PLAN.r4a.md written');
