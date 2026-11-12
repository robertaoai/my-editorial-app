// Read-only review probe: node source_file forms in the candidate graph, compared with `git diff --name-only` path form.
import fs from 'node:fs';
const g = JSON.parse(fs.readFileSync('C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/attempt-2/staging/graph.json', 'utf8'));
const withSrc = g.nodes.filter(n => n.source_file);
const abs = withSrc.filter(n => /^[A-Za-z]:|^\//.test(n.source_file));
const back = withSrc.filter(n => n.source_file.includes('\\'));
const sample = [...new Set(withSrc.map(n => n.source_file))].slice(0, 6);
const reg = withSrc.filter(n => n.source_file === 'docs/v1/V1-DECISION-REGISTER.md');
console.log(JSON.stringify({ nodes: g.nodes.length, withSrc: withSrc.length, absolute: abs.length, backslash: back.length, sample, registerNodes: reg.length, registerWithDesc: reg.filter(n => n.description).length }, null, 1));
