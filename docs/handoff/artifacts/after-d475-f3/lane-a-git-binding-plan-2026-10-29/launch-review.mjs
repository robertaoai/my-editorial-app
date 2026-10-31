// PROPOSED — NOT EXECUTED. Plan packet lane-a-git-binding-plan-2026-10-29 (Lane A, 2026-10-29). Runs only after Lane B
// reviews this file by SHA-256 and the Judge releases a fresh F3 review attempt.
//
// Launches ONE review child (Lane B's fresh F3 entry script) with a child-only environment in which the Git directory frozen
// at prepare comes first on PATH. It reads STATE without editing it, changes no guard rule, binding, candidate byte, PATH of
// the parent, user/machine PATH, profile or Git configuration, and creates no alias, shim, wrapper, replacement binary or
// filesystem link. It stops (exit 2) on any mismatch before the child starts, and fails (exit 3) if any protected binding
// differs after the child exits. The child's own exit code is reported separately.
//
// Usage (from any shell; the launcher must itself run under the frozen Node):
//   "C:\Program Files\nodejs\node.exe" <this file> --child <review script> --out <new, absent folder> [-- <child args>]
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto'; import { spawnSync, execFileSync } from 'node:child_process'; import { pathToFileURL } from 'node:url';
const REPO = 'C:/robertaoai/my-editorial-app';
const WORK = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work';
const ANSWERS = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/answers-proposed.r1.json';
const B050 = 'docs/handoff/B-050-hook-rebuild-resets-graphify-branch-metadata.md';
const EXPECT = {
  head: '71dfbbe7a09f194a9986c1f29d42ad507aec1af7', source: '22b0a8ce2fb06c16152fa9490d21aae829a45974', sourceTree: '7e28fd350438bb6e4b1cb871d75ad9185d44703b',
  workId: '7bd2af2f-82a0-40fc-872c-31009278ff1c', state: '1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e',
  graph: 'df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557', manifest: '34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13', files: 583,
  answers: '89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70',
};
const G = await import(pathToFileURL(REPO + '/scripts/graphify/guarded-rebuild.mjs').href);
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const canon = p => path.resolve(p).replace(/\//g, '\\').toLowerCase();
const argv = process.argv.slice(2), at = k => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1]; };
const child = at('--child'), out = at('--out'), childArgs = argv.includes('--') ? argv.slice(argv.indexOf('--') + 1) : [];
const F = [], ck = (ok, m) => { if (!ok) F.push(m); return ok; }, r = { at: new Date().toISOString(), child, childArgs, cwd: REPO };
const finish = code => { r.findings = F; r.exit = code; fs.writeFileSync(path.join(out, 'launcher-result.json'), JSON.stringify(r, null, 1) + '\n', { flag: 'wx' }); process.exit(code); };
if (!child || !out || fs.existsSync(out)) { console.error('usage: --child <script> --out <absent folder>'); process.exit(2); }
fs.mkdirSync(out, { recursive: false });

// 1. STATE, read only; the bindings come from STATE, never from this file's constants.
const stateBytes = fs.readFileSync(WORK + '/STATE.json'); const ST = JSON.parse(stateBytes); const b = ST.frozen.bindings;
r.state = { sha256: crypto.createHash('sha256').update(stateBytes).digest('hex'), state: ST.state, attempts: ST.attempts, workId: ST.workId };
ck(r.state.sha256 === EXPECT.state && ST.state === 'ready' && ST.attempts === 2 && ST.workId === EXPECT.workId, 'STATE is not the reviewed ready STATE');

// 2. The launcher itself runs under the exact frozen Node.
r.node = { execPath: process.execPath, frozen: b.node.path };
ck(canon(process.execPath) === canon(b.node.path) && sha(process.execPath) === b.node.sha256 && process.version === b.node.version, 'not running under the frozen Node (path, bytes or version)');

// 3. The frozen Git file itself: present, same bytes, same version, and no git.com beside it.
const gitDir = path.dirname(b.git.path);
r.git = { frozen: b.git.path, dir: gitDir };
ck(fs.existsSync(b.git.path) && sha(b.git.path) === b.git.sha256, 'the frozen Git file is absent or its bytes changed');
ck(!fs.existsSync(path.join(gitDir, 'git.com')), 'a git.com beside the frozen git.exe would win the .com/.exe order');
if (!F.length) ck(execFileSync(b.git.path, ['--version'], { encoding: 'utf8' }).trim() === b.git.version, 'the frozen Git version changed');

// 4. Child-only environment: exactly one PATH key; the frozen Git directory first; every other entry in its existing order.
const pathKeys = Object.keys(process.env).filter(k => k.toUpperCase() === 'PATH');
ck(pathKeys.length === 1, `expected exactly one PATH key in the parent environment, found ${pathKeys.length}`);
const parentPath = pathKeys.length === 1 ? process.env[pathKeys[0]] : '';
r.parentPathSha256Before = crypto.createHash('sha256').update(parentPath).digest('hex');
const norm = d => d.replace(/^"|"$/g, '').replace(/[\\/]+$/, '').replace(/\//g, '\\').toLowerCase();
const rest = parentPath.split(';').filter(Boolean).filter(d => norm(d) !== norm(gitDir));
const env = {}; for (const [k, v] of Object.entries(process.env)) if (k.toUpperCase() !== 'PATH') env[k] = v;
env.PATH = [gitDir, ...rest].join(';');
r.childPath = { key: 'PATH', keys: Object.keys(env).filter(k => k.toUpperCase() === 'PATH').length, first: env.PATH.split(';')[0], removedDuplicatesOfGitDir: parentPath.split(';').filter(Boolean).length - rest.length, entries: env.PATH.split(';').length };
ck(r.childPath.keys === 1 && norm(r.childPath.first) === norm(gitDir), 'the child PATH is not exactly one key with the frozen Git directory first');

// 5. Resolution as the guard and libuv see it: no git in the child's working folder (libuv searches it before PATH),
//    then PATH order with .com before .exe. The first hit must be the frozen file.
for (const s of ['git.com', 'git.exe', 'git']) ck(!fs.existsSync(path.join(REPO, s)), `a ${s} in the working folder ${REPO} would shadow the bound git`);
let resolved = null; for (const d of env.PATH.split(';').filter(Boolean)) { for (const e of ['.com', '.exe']) { const p = path.join(d.replace(/^"|"$/g, ''), 'git' + e); try { if (fs.statSync(p).isFile()) { resolved = p; break; } } catch {} } if (resolved) break; }
r.resolved = { path: resolved, sha256: resolved ? sha(resolved) : null, version: resolved ? execFileSync(resolved, ['--version'], { encoding: 'utf8', env }).trim() : null };
ck(resolved && canon(resolved) === canon(b.git.path) && r.resolved.sha256 === b.git.sha256 && r.resolved.version === b.git.version, 'the child resolves a different Git (path, bytes or version)');

// 6. The guard's own verification under the child environment, for both generated checkouts.
const genv = G.sanitizedEnv(env);
r.bindingFindings = {
  checkout: F.length ? ['not run: an earlier gate failed'] : G.bindingFindings(b, { checkout: WORK + '/attempt-2/gen/checkout', env: genv }),
  fresh: F.length ? ['not run: an earlier gate failed'] : G.bindingFindings(b, { checkout: WORK + '/attempt-2/gen/fresh', env: genv }),
};
ck(r.bindingFindings.checkout.length === 0 && r.bindingFindings.fresh.length === 0, 'guard bindingFindings are not zero for both generated checkouts');

// 7. Protected bindings, before.
const g = (...a) => execFileSync(b.git.path, ['-C', REPO, ...a], { encoding: 'utf8', env: genv }).replace(/\r/g, '').trimEnd();
const snap = () => { const m = G.hashTree(WORK + '/attempt-2/staging'); return {
  head: g('rev-parse', 'HEAD'), status: g('status', '--porcelain=v1', '--untracked-files=all'), staged: g('diff', '--cached', '--name-only'),
  b050: sha(REPO + '/' + B050), state: sha(WORK + '/STATE.json'), answers: sha(ANSWERS),
  candidate: { files: Object.keys(m).length, manifest: G.treeDigest(m), graph: m['graph.json'], map: crypto.createHash('sha256').update(JSON.stringify(Object.entries(m).sort())).digest('hex') },
  config: crypto.createHash('sha256').update(g('config', '--list', '--show-origin')).digest('hex'),
  refsOutsideTurnDiffs: crypto.createHash('sha256').update(g('for-each-ref', '--format=%(objectname) %(refname)').split('\n').filter(l => !l.includes(' refs/codex/turn-diffs/')).join('\n')).digest('hex'),
  live: { graph: sha('C:/CoWork/myeditorialapp/.graphify/graph.json'), receipts: fs.readdirSync('C:/CoWork/myeditorialapp/.graphify-receipts').filter(f => /^release-.+\.json$/.test(f)).length, lock: fs.existsSync('C:/CoWork/myeditorialapp/.graphify.lock'), journal: fs.existsSync('C:/CoWork/myeditorialapp/.graphify-txn.json') },
}; };
if (!F.length) {
  r.before = snap();
  ck(r.before.head === EXPECT.head && r.before.status === '' && r.before.staged === '' && r.before.state === EXPECT.state && r.before.answers === EXPECT.answers && r.before.candidate.files === EXPECT.files && r.before.candidate.manifest === EXPECT.manifest && r.before.candidate.graph === EXPECT.graph, 'protected bindings differ from the reviewed values before the child');
}
if (F.length) finish(2);

// 8. One child: the frozen Node, no shell, cwd = the repository, the child environment, stdio inherited.
r.childStart = new Date().toISOString();
const res = spawnSync(b.node.path, [child, ...childArgs], { cwd: REPO, env, stdio: 'inherit', shell: false, windowsHide: true });
r.childEnd = new Date().toISOString(); r.childExit = res.status; r.childSignal = res.signal; r.childError = res.error ? String(res.error.message) : null;

// 9. Protected bindings, after; the parent PATH is unchanged.
r.after = snap();
r.parentPathSha256After = crypto.createHash('sha256').update(pathKeys.length === 1 ? process.env[pathKeys[0]] : '').digest('hex');
const keep = ({ head, status, staged, b050, state, answers, candidate, config, refsOutsideTurnDiffs, live }) => JSON.stringify({ head, status, staged, b050, state, answers, candidate, config, refsOutsideTurnDiffs, live });
ck(keep(r.before) === keep(r.after), 'a protected binding changed while the child ran');
ck(r.parentPathSha256Before === r.parentPathSha256After, 'the parent PATH changed');
finish(F.length ? 3 : 0);
