// Read-only pre-resume gates for the guarded cycle after D-475 (Judge releases at Lane A lines 5830 and 5933), before the one released resume. Calls only read-only guard
// functions; writes only its own outputs (exclusive create). Compares against the entry snapshots.
import fs from 'fs'; import path from 'path'; import crypto from 'crypto'; import { execFileSync } from 'child_process'; import { pathToFileURL } from 'url';
const REPO = 'C:/robertaoai/my-editorial-app', E = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/', E1 = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/', WORK = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work', T = process.argv[2];
const S = '22b0a8ce2fb06c16152fa9490d21aae829a45974', STREE = '7e28fd350438bb6e4b1cb871d75ad9185d44703b', BR = 'features/feature-V1-SM05';
const g = (...a) => execFileSync('git', ['-C', REPO, ...a], { encoding: 'utf8' }).replace(/\n$/, '');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const G = await import(pathToFileURL(REPO + '/scripts/graphify/guarded-rebuild.mjs').href);
const F = [], ck = (ok, m) => { if (!ok) F.push(m); return ok; }, r = { at: new Date().toISOString() };
r.head = g('rev-parse', 'HEAD'); r.tree = g('rev-parse', 'HEAD^{tree}'); r.branch = g('branch', '--show-current'); r.origin = g('remote', 'get-url', 'origin');
r.upstream = g('rev-parse', '--abbrev-ref', '@{u}'); r.upstreamObj = g('rev-parse', '@{u}'); r.email = g('config', 'user.email');
r.status = g('status', '--porcelain=v1', '--untracked-files=all'); r.cached = g('diff', '--cached', '--name-only');
ck(r.head === S && r.tree === STREE, 'S/tree'); ck(r.branch === BR && r.origin === 'git@github.com:robertaoai/my-editorial-app.git', 'branch/origin');
ck(r.upstream === 'origin/' + BR && r.upstreamObj === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b', 'upstream tracking at last delivered tip'); ck(r.status === '' && r.cached === '', 'clean'); ck(r.email === '241258103+robertaoai@users.noreply.github.com', 'identity');
ck(g('rev-list', '--parents', '-n', '1', S).split(' ').slice(1).join() === 'b4604bc8a8ee69081b46d235166442a0ae7acb7b' && g('diff-tree', '--no-commit-id', '-r', '--name-only', S) === 'docs/v1/V1-DECISION-REGISTER.md', 'S is D-475 (Register only, parent H6 b4604bc)');
const pc = fs.readFileSync(REPO + '/docs/v1/V1-PHASE-CLOSURE.md', 'utf8'); ck(pc.split('\n').some(l => /^\| \*\*A\*\* \|/.test(l) && /\*\*`Active`\*\*/.test(l)), 'Lane A Active');
const ST = JSON.parse(fs.readFileSync(WORK + '/STATE.json', 'utf8'));
r.work = { state: ST.state, attempts: ST.attempts, workId: ST.workId, stateSha256: sha(WORK + '/STATE.json'), pendingSha256: sha(WORK + '/PENDING.json'), claim: fs.existsSync(WORK + '/.claim'), answersSha256: sha(E1 + 'answers-proposed.r1.json') };
ck(r.work.state === 'pending' && r.work.attempts === 1 && r.work.workId === '7bd2af2f-82a0-40fc-872c-31009278ff1c' && r.work.stateSha256 === 'd2589f8e595caac225686fa60bd5f45bac9a868816ec92ce391d1ed182fb6a39' && r.work.pendingSha256 === '3facc021bff19adb4a672e50bddd4bea0a8b67bec1ce33e97fef5d82025383e4' && !r.work.claim && r.work.answersSha256 === '89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70', 'pending attempt and approved answers unchanged');
// live release chain and transactions
r.baseline = G.selectBaseline(); r.liveGraph = sha('C:/CoWork/myeditorialapp/.graphify/graph.json');
r.receipts = fs.readdirSync('C:/CoWork/myeditorialapp/.graphify-receipts').filter(f => /^release-.+\.json$/.test(f)).length;
ck(r.baseline.ok && r.baseline.baseline.releaseLocus === '77af44a2fcf84a7e7c05013308cc474e6bfaef41' && r.baseline.baseline.digest === 'a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d' && r.liveGraph === '4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7' && r.receipts === 16, 'accepted live release chain (Q6, K 77af44a2)');
r.lock = fs.existsSync('C:/CoWork/myeditorialapp/.graphify.lock'); r.journal = fs.existsSync('C:/CoWork/myeditorialapp/.graphify-txn.json'); r.txn = G.transactionFindings(REPO + '/.graphify');
ck(!r.lock && !r.journal && r.txn.length === 0, 'lock/journal');
const work = []; for (const d of fs.readdirSync('C:/CoWork/outputs')) for (const s of ['work', 'work-r2', 'work-r3']) { const f = path.join('C:/CoWork/outputs', d, s, 'STATE.json'); if (fs.existsSync(f)) { const j = JSON.parse(fs.readFileSync(f, 'utf8')); work.push({ f: f.replace(/\\/g, '/'), state: j.state, claim: fs.existsSync(path.join(path.dirname(f), '.claim')) }); } }
r.workFolders = work; ck(!work.some(w => w.state === 'preparing' || w.claim), 'no conflicting cycle or claim');
// stray work cac590ad (D-474 item 13): still pending, no claim, every file equal to the freeze record, nothing added
{ const SD = 'C:/CoWork/outputs/sync-20261028', FZ = 'C:/CoWork/outputs/lane-a-q6-record-2026-10-28/stray-sync-20261028-freeze.txt'; const want = fs.readFileSync(FZ, 'utf8').split('\n').filter(l => /^[0-9a-f]{64}  /.test(l)).map(l => l.split('  ').slice(0, 2).join('  ')).sort();
  const got = []; (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else got.push(sha(p) + '  ' + path.relative(SD, p).replace(/\\/g, '/')); } })(SD); got.sort();
  const st = JSON.parse(fs.readFileSync(SD + '/STATE.json', 'utf8')); r.stray = { files: got.length, equalToFreeze: JSON.stringify(got) === JSON.stringify(want), state: st.state, workId: st.workId, claim: fs.existsSync(SD + '/.claim'), freezeSha256: sha(FZ) };
  ck(r.stray.equalToFreeze && r.stray.files === 4306 && st.state === 'pending' && st.workId === 'cac590ad-9e46-4bc2-b64f-88bc51d8b5ee' && !r.stray.claim && r.stray.freezeSha256 === 'e065435ed153f7997d070258d5bc1d1836e0f33b2cfc473f0453e7d02353c00e', 'stray work cac590ad frozen and unchanged'); }
// tools
r.tools = { node: process.version, git: g('--version'), guard: sha(REPO + '/scripts/graphify/guarded-rebuild.mjs'), bun: sha('C:/Users/rober_24syk4j/AppData/Roaming/npm/node_modules/bun/bin/bun.exe'), graphify: execFileSync('npx', ['graphify', '--version'], { cwd: REPO, encoding: 'utf8', shell: true }).trim().split('\n').pop() };
ck(r.tools.guard === '4b0d7fb2195376bfb407ac400aedd03ca399c14df7690eea7ffc7b4beadb4f0f' && r.tools.node === 'v24.18.0' && r.tools.graphify === '0.17.1', 'tools');
// refs, configuration (cycle baseline snapshots)
const cfg = g('config', '--list', '--show-origin'); fs.writeFileSync(E + `config-preresume-${T}.txt`, cfg + '\n', { flag: 'wx' });
r.configEqualEntry = cfg + '\n' === fs.readFileSync(E1 + 'config-entry-20261029T112219Z.txt', 'utf8'); ck(r.configEqualEntry, 'configuration unchanged since entry');
const refs = g('for-each-ref', '--format=%(objectname) %(refname)'); fs.writeFileSync(E + `refs-preresume-${T}.txt`, refs + '\n', { flag: 'wx' });
const pre = fs.readFileSync(E1 + 'refs-entry-20261029T112219Z.txt', 'utf8').split('\n').filter(Boolean), now = refs.split('\n').filter(Boolean), td = l => l.includes(' refs/codex/turn-diffs/');
const outside = xs => xs.filter(l => !td(l));
r.refsOutsideTurnDiffsEqual = JSON.stringify(outside(pre)) === JSON.stringify(outside(now)); ck(r.refsOutsideTurnDiffsEqual, 'refs outside turn-diffs unchanged since entry');
r.turnDiffs = { removed: pre.filter(td).filter(l => !now.includes(l)), added: now.filter(td).filter(l => !pre.includes(l)) };
// linked worktrees and inventory
r.worktrees = g('worktree', 'list', '--porcelain');
ck(/my-editorial-app-preflight\nHEAD 5ddf17c190cdb3f9d38e99fb35594a9e38f0eed0\n/.test(r.worktrees) && /my-editorial-app-proof\nHEAD 1945c1911ad1f2c7f6f0e06ee52317b31b16fd34\ndetached/.test(r.worktrees), 'linked worktree HEADs');
const inv = execFileSync('node', ['C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.mjs', 'C:/robertaoai/my-editorial-app-preflight', 'C:/robertaoai/my-editorial-app-proof'], { encoding: 'utf8' });
fs.writeFileSync(E + `inventory-preresume-${T}.json`, inv, { flag: 'wx' });
const acc = JSON.parse(fs.readFileSync('C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.json', 'utf8')), cur = JSON.parse(inv);
const strip = o => Object.fromEntries(Object.entries(o.roots).map(([k, v]) => [k, { exists: v.exists, items: v.items.map(i => ({ path: i.path, type: i.type, size: i.size, sha256: i.sha256 })) }]));
ck(sha('C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.json') === '3e32d008558c76fca15ac98e7e17a7b2a20e40e0d3fd2485dc85b837c55674e4' && JSON.stringify(strip(acc)) === JSON.stringify(strip(cur)), 'inventory');
const items = []; for (const [root, v] of Object.entries(cur.roots)) for (const i of v.items) { const p = path.join(root, i.path); items.push({ p, symlink: fs.lstatSync(p).isSymbolicLink(), real: fs.realpathSync.native(p).replace(/\\/g, '/').toLowerCase() === p.replace(/\\/g, '/').toLowerCase() }); }
r.noLinks = items; ck(items.every(i => !i.symlink && i.real), 'no link substitution');
r.operatorCoverage = 'Judge cycle release after D-475, 2026-10-29T11:21:19.349Z, freeze from entry through publication, and resume release 11:31:47.029Z: no other writer on the repo, refs, config, linked worktrees or live graph, except refs/codex/turn-diffs/ (inventoried) and the named R/K/N/health-record fast-forwards; stray work cac590ad frozen and excluded';
r.findings = F; r.pass = F.length === 0;
fs.writeFileSync(E + `preresume-gates-${T}.json`, JSON.stringify(r, null, 1) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ at: r.at, pass: r.pass, findings: F, work: r.work, turnDiffs: r.turnDiffs, workFolders: work.length }, null, 1));
process.exit(r.pass ? 0 : 1);
