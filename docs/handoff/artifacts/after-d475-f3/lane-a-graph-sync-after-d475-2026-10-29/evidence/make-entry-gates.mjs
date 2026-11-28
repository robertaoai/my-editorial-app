// One-off: derive the after-D-475 entry gates from the Q6 script by exact, counted substitutions.
import fs from 'fs';
const SRC = 'C:/CoWork/outputs/lane-a-graph-sync-q6-2026-10-28/evidence/entry-gates.mjs', OUT = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/entry-gates.mjs';
let t = fs.readFileSync(SRC, 'utf8');
const r = (a, b, n = 1) => { const k = t.split(a).length - 1; if (k !== n) throw new Error(`count ${k} != ${n}: ${a.slice(0, 60)}`); t = t.split(a).join(b); };
r('entry gates for the D-474 Q6 cycle (items 4-5, applying D-472 item 5 / D-467 item 7)', 'entry gates for the guarded cycle after D-475 (Judge release at Lane A line 5830, under D-425-D-429 and D-451)');
r('lane-a-graph-sync-q6-2026-10-28/', 'lane-a-graph-sync-after-d475-2026-10-29/', 2);
r("S = 'ddf0b922f72f8dc54f41ac19698df80691fcd6a1', STREE = '20f414950b810a2614db8c49c2cb4c44976799a0'", "S = '22b0a8ce2fb06c16152fa9490d21aae829a45974', STREE = '7e28fd350438bb6e4b1cb871d75ad9185d44703b'");
r("r.upstreamObj === 'c236f0b102180e1e3700dd0fad4e7c7a108fe7d6'", "r.upstreamObj === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b'");
const a = t.indexOf("ck(g('rev-list', '--parents', '-n', '1', S)"), z = t.indexOf("\n", a);
if (a < 0 || t.slice(a, z).split("'S is Q6").length !== 2) throw new Error('S check line');
t = t.slice(0, a) + "ck(g('rev-list', '--parents', '-n', '1', S).split(' ').slice(1).join() === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b' && g('diff-tree', '--no-commit-id', '-r', '--name-only', S) === 'docs/v1/V1-DECISION-REGISTER.md', 'S is D-475 (Register only, parent H6 b4604bc)');" + t.slice(z);
r("'fa0c9efcdd2e7b1dd7a7c64ca59fbbc0cfdada4f' && r.baseline.baseline.digest === '130c05770a7963e192ebf400a5126d8619d2908b0c2181ddf02941f5c2ee3824' && r.liveGraph === '74ac8848ed86b0e1de710ab00f52d93fc126c2a415b69164c1a74ce7520af6c2' && r.receipts === 15, 'accepted live release chain (Q5, K fa0c9ef)'",
  "'77af44a2fcf84a7e7c05013308cc474e6bfaef41' && r.baseline.baseline.digest === 'a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d' && r.liveGraph === '4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7' && r.receipts === 16, 'accepted live release chain (Q6, K 77af44a2)'");
r('lane-a-push-q5-2026-10-27/config-post-push.txt', 'lane-a-push-q6-2026-10-29/config-post-push.txt');
r("'configuration unchanged since D-472 push'", "'configuration unchanged since D-474 push'");
r('lane-a-push-q5-2026-10-27/refs-post-push.txt', 'lane-a-push-q6-2026-10-29/refs-post-push.txt');
r("'refs since D-472 push (only feature head c236f0b -> Q6)'", "'refs since D-474 push (only feature head b4604bc -> D-475)'");
r("Judge Q6 cycle release 2026-10-28T15:21:09.625Z with bindings 15:24:49.703Z and start 15:38:46.796Z (JUDGE-Q6-*.jsonl): from then through H6,", "Judge cycle release after D-475, 2026-10-29T11:21:19.349Z (JUDGE-AFTER-D475-CYCLE-RELEASE.jsonl): from entry through publication,");
r('the named R/K/N/H6 fast-forwards', 'the named R/K/N/health-record fast-forwards');
if (/q6-2026-10-28|ddf0b92|20f41495|c236f0b102|S is Q6|fa0c9ef.*Q5|74ac8848|push-q5|r\.receipts === 15/.test(t)) throw new Error('Q6 value left');
fs.writeFileSync(OUT, t, { flag: 'wx' }); console.log('written');
