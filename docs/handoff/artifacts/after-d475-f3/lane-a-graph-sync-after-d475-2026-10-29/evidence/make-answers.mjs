// One-off: derive the after-D-475 answers script from Q6's by exact, counted substitutions (paths, work ID, the 3 names).
import fs from 'fs';
const SRC = 'C:/CoWork/outputs/lane-a-graph-sync-q6-2026-10-28/evidence/answers.mjs', OUT = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/answers.mjs';
let t = fs.readFileSync(SRC, 'utf8');
const r = (a, b, n = 1) => { const k = t.split(a).length - 1; if (k !== n) throw new Error(`count ${k} != ${n}: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('for the Q6 cycle (work 8ecb2368)', 'for the cycle after D-475 (work 7bd2af2f)');
r('lane-a-graph-sync-q6-2026-10-28/', 'lane-a-graph-sync-after-d475-2026-10-29/', 2);
r("workId: '8ecb2368-cfc0-4137-a890-b231b5cdc9e9'", "workId: '7bd2af2f-82a0-40fc-872c-31009278ff1c'");
const start = t.indexOf('const NAMES = {'), end = t.indexOf('};', start) + 2;
if (start < 0 || t.slice(start, end).split('\n').length !== 23) throw new Error('NAMES block');
t = t.slice(0, start) + `const NAMES = {
  43: 'D-468–D-475 Register Entries, Q3–Q6 Cycle Records, R1 Restoration and B-161 Commits',
  96: 'D-435 B-156 Option A Repairs, M1 Helper Answers, Publication and Review Commits',
  35: 'D-436 Receipt Route, M1 Helper Verification, Publication and SM05 Transition Packet Commits',
};` + t.slice(end);
if (/q6-2026-10-28|8ecb2368/.test(t)) throw new Error('Q6 value left');
fs.writeFileSync(OUT, t, { flag: 'wx' }); console.log('written');
