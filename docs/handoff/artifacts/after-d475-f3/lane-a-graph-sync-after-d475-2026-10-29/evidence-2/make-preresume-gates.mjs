// One-off: derive the after-D-475 pre-resume gates from the Q6 script by exact, counted substitutions.
import fs from 'fs';
const SRC = 'C:/CoWork/outputs/lane-a-graph-sync-q6-2026-10-28/evidence-2/preresume-gates.mjs', OUT = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/preresume-gates.mjs';
const ENTRY_T = fs.readdirSync('C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/').find(f => /^config-entry-.+\.txt$/.test(f)).slice(13, -4);
let t = fs.readFileSync(SRC, 'utf8');
const r = (a, b, n = 1) => { const k = t.split(a).length - 1; if (k !== n) throw new Error(`count ${k} != ${n}: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('pre-resume gates for the D-474 Q6 cycle (items 4-5, applying D-472 item 5 / D-467 item 7)', 'pre-resume gates for the guarded cycle after D-475 (Judge releases at Lane A lines 5830 and 5933)');
r('lane-a-graph-sync-q6-2026-10-28/', 'lane-a-graph-sync-after-d475-2026-10-29/', 3);
r("S = 'ddf0b922f72f8dc54f41ac19698df80691fcd6a1', STREE = '20f414950b810a2614db8c49c2cb4c44976799a0'", "S = '22b0a8ce2fb06c16152fa9490d21aae829a45974', STREE = '7e28fd350438bb6e4b1cb871d75ad9185d44703b'");
r("r.upstreamObj === 'c236f0b102180e1e3700dd0fad4e7c7a108fe7d6'", "r.upstreamObj === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b'");
const a = t.indexOf("ck(g('rev-list', '--parents', '-n', '1', S)"), z = t.indexOf('\n', a);
if (a < 0 || t.slice(a, z).split("'S is Q6").length !== 2) throw new Error('S check line');
t = t.slice(0, a) + "ck(g('rev-list', '--parents', '-n', '1', S).split(' ').slice(1).join() === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b' && g('diff-tree', '--no-commit-id', '-r', '--name-only', S) === 'docs/v1/V1-DECISION-REGISTER.md', 'S is D-475 (Register only, parent H6 b4604bc)');" + t.slice(z);
r("'8ecb2368-cfc0-4137-a890-b231b5cdc9e9'", "'7bd2af2f-82a0-40fc-872c-31009278ff1c'");
r("'4f8b344a63b949838b8ca38f8ec10729835a1528e13725549b0dcec0e36aa09b'", "'d2589f8e595caac225686fa60bd5f45bac9a868816ec92ce391d1ed182fb6a39'");
r("'7cbfbd69e33d15784c4f3445ecc06ec1c53197e6202bc616526dea0699d7f9e6'", "'3facc021bff19adb4a672e50bddd4bea0a8b67bec1ce33e97fef5d82025383e4'");
r("'379e37dd8c0cbc7269ee65a6ddd186fe1e233c2ff2287d6c822f436b19455a50'", "'89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70'");
r("'fa0c9efcdd2e7b1dd7a7c64ca59fbbc0cfdada4f' && r.baseline.baseline.digest === '130c05770a7963e192ebf400a5126d8619d2908b0c2181ddf02941f5c2ee3824' && r.liveGraph === '74ac8848ed86b0e1de710ab00f52d93fc126c2a415b69164c1a74ce7520af6c2' && r.receipts === 15, 'accepted live release chain (Q5, K fa0c9ef)'",
  "'77af44a2fcf84a7e7c05013308cc474e6bfaef41' && r.baseline.baseline.digest === 'a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d' && r.liveGraph === '4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7' && r.receipts === 16, 'accepted live release chain (Q6, K 77af44a2)'");
r("config-entry-20261028T153957Z.txt", `config-entry-${ENTRY_T}.txt`);
r("refs-entry-20261028T153957Z.txt", `refs-entry-${ENTRY_T}.txt`);
const o = t.indexOf("r.operatorCoverage = '"), oe = t.indexOf("';", o);
t = t.slice(0, o) + "r.operatorCoverage = 'Judge cycle release after D-475, 2026-10-29T11:21:19.349Z, freeze from entry through publication, and resume release 11:31:47.029Z: no other writer on the repo, refs, config, linked worktrees or live graph, except refs/codex/turn-diffs/ (inventoried) and the named R/K/N/health-record fast-forwards; stray work cac590ad frozen and excluded" + t.slice(oe);
if (/q6-2026-10-28|ddf0b92|20f41495|8ecb2368|4f8b344a|7cbfbd69|379e37dd|74ac8848|20261028T153957Z/.test(t)) throw new Error('Q6 value left');
fs.writeFileSync(OUT, t, { flag: 'wx' }); console.log('written', ENTRY_T);
