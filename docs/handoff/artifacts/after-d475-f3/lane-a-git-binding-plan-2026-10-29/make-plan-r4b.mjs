// One-off: PLAN.r4b.md = PLAN.r4a.md with the row-24 evidence clause replaced (PLAN.r4a.md and every seal stay unchanged).
import fs from 'fs';
const D = 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/';
let t = fs.readFileSync(D + 'PLAN.r4a.md', 'utf8');
const r = (a, b) => { const k = t.split(a).length - 1; if (k !== 1) throw new Error(`count ${k} != 1: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('the child outcome in `result.child`, `finalization.postWrite` as recorded, and both failures in `result.secondaryErrors`',
  'the child outcome in `result.child`, any post-write failure in `finalization.postWrite`, and each secondary finalization error in `result.secondaryErrors`');
r('# Git binding fix plan r4a for', '# Git binding fix plan r4b for');
r('Revision r4a of `PLAN.r4.md` (one correction to matrix row 24; `PLAN.r4.md` unchanged)',
  'Revision r4b of `PLAN.r4a.md` (one further correction to the matrix row 24 evidence clause; `PLAN.r4a.md` unchanged), which is revision r4a of `PLAN.r4.md` (one correction to matrix row 24; `PLAN.r4.md` unchanged)');
fs.writeFileSync(D + 'PLAN.r4b.md', t, { flag: 'wx' }); console.log('PLAN.r4b.md written');
