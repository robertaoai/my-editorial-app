// Read-only review probe: replay entry.mjs's description rules over the candidate WITHOUT running entry.mjs, to see whether
// its fixed commit-subject template and rule order classify every node. Git is read through the frozen executable with
// --no-optional-locks; nothing is written except stdout.
import fs from 'node:fs'; import { execFileSync } from 'node:child_process';
const GIT = 'C:/Users/rober_24syk4j/AppData/Local/Programs/Git/mingw64/bin/git.exe';
const AT = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/attempt-2', CHECKOUT = AT + '/gen/checkout', CAND = AT + '/staging', BASE = AT + '/baseline';
const S = '22b0a8ce2fb06c16152fa9490d21aae829a45974';
const J = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const git = (...a) => execFileSync(GIT, ['--no-optional-locks', '-C', CHECKOUT, ...a], { encoding: 'utf8', maxBuffer: 64e6 }).replace(/\r/g, '').trimEnd();
const graph = J(CAND + '/graph.json'), base = J(BASE + '/graph.json'), prior = new Map(base.nodes.map(n => [n.id, n]));
const changed = git('diff', '--name-only', J(BASE + '/branch.json').lastAnalyzedHead, S).split('\n');
const order = fs.readdirSync(CHECKOUT + '/docs/graph-fragments').filter(f => f.endsWith('.json')).filter(f => Array.isArray(J(CHECKOUT + '/docs/graph-fragments/' + f).nodes));
const fragments = new Map(); for (const f of order) for (const n of J(CHECKOUT + '/docs/graph-fragments/' + f).nodes) if (Object.hasOwn(n, 'description')) fragments.set(n.id, n.description);
const subjects = new Map(git('log', '--all', '--format=%H%x09%s').split('\n').filter(Boolean).map(l => [l.slice(0, 40), l.slice(41)]));
const counts = {}, unresolved = [], mismatch = [];
for (const n of graph.nodes) { const old = prior.get(n.id); let rule = null, expected;
  if (fragments.has(n.id)) { rule = 'curated'; expected = fragments.get(n.id); }
  else if (n.description && old?.description && (!n.source_file || !changed.includes(n.source_file))) { rule = 'unchanged-source baseline'; expected = old.description; }
  else if (n.description && /^commit:.*@[0-9a-f]{40}$/.test(n.id)) { const id = n.id.slice(-40); rule = 'source commit subject'; expected = subjects.has(id) ? `Git commit ${id.slice(0, 7)} in this repository, with the subject "${subjects.get(id)}".` : '<no subject>'; }
  else if (!n.description && old && !old.description) rule = 'inherited undescribed';
  else { unresolved.push({ id: n.id, source: n.source_file }); continue; }
  counts[rule] = (counts[rule] || 0) + 1;
  if (expected !== undefined && n.description !== expected) mismatch.push({ id: n.id, rule, expected: String(expected).slice(0, 120), actual: String(n.description).slice(0, 120) });
}
console.log(JSON.stringify({ changed, fragmentFiles: order.length, counts, unresolved: unresolved.length, unresolvedSample: unresolved.slice(0, 3), mismatches: mismatch.length, mismatchSample: mismatch.slice(0, 3) }, null, 1));
