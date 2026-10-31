// PLAN ONLY: exact-byte independent review and Judge release required before execution.
const INPUT_BINDINGS = [
  {
    "path": "C:/robertaoai/my-editorial-app/AGENTS.md",
    "bytes": 3626,
    "sha256": "aed0cd5256296e0e0cf319fd69d39c147992d0e0e89837af0cd3a845dcae2555"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/v1/V1-BUILD-SPEC.md",
    "bytes": 91460,
    "sha256": "2b0a69af128dd86091a774e529bfb2fc6c764852cc837efe36ca9ce896fedd89"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/v1/V1-DECISION-REGISTER.md",
    "bytes": 2373303,
    "sha256": "42b0d82f9757c052f0ef011880f49f5e396b22339c6750d3ea35a66e8974b327"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/governance/agent-rules-reference.md",
    "bytes": 32898,
    "sha256": "5935d4b3cd5d24e112c8bce6825be63916788d2131dd4b56ae34085d08bcafb1"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/v1/V1-PHASE-CLOSURE.md",
    "bytes": 101398,
    "sha256": "f5b5237c15c1c017c4e98150cb3fde8c241c91672ed2a1c64f66c93c04a9e28e"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/LANE-B-WORK-ORDER.md",
    "bytes": 32207,
    "sha256": "a81b8e003c2789321fcd9216a6b2073665dda1cf9c6f4c231b0ae9c72894a354"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md",
    "bytes": 2162282,
    "sha256": "3468eb237eccdf324007255c7ff1490b6e7397ffecc0cbb172048cdec31be3d2"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/handoff/B-050-hook-rebuild-resets-graphify-branch-metadata.md",
    "bytes": 734947,
    "sha256": "5d3a95038c49a3f1987ee0cee743e63f50f91b7ceb15b9f5b936360a3890894b"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/.claude/skills/sync-docs/SKILL.md",
    "bytes": 13255,
    "sha256": "74b649796c686a4b3be51bbc50db5229f19a173be22b72c41ff6efbf27992694"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/docs/graph-fragments/README.md",
    "bytes": 19501,
    "sha256": "2cd70f546433c6b65bb66142ba36dcd475ffcd950788c345b778561c065a59f0"
  },
  {
    "path": "C:/robertaoai/my-editorial-app/scripts/graphify/guarded-rebuild.mjs",
    "bytes": 168062,
    "sha256": "4b0d7fb2195376bfb407ac400aedd03ca399c14df7690eea7ffc7b4beadb4f0f"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/PLAN.r4b.md",
    "bytes": 14395,
    "sha256": "a840e9f8731f0692aa24a608a25fe7c5b39bb3736ba57f13379b2c46d64a54ed"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs",
    "bytes": 21015,
    "sha256": "1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/INSTRUCTION-R4B.jsonl",
    "bytes": 3180,
    "sha256": "ec572be281323d675283f328501af727cf1ea54b10f68adcf655b60e075befb2"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/SHA256-MANIFEST-E1.txt",
    "bytes": 1891,
    "sha256": "4f3e3d83a29b29b03fdadc7d0f1058dd2f98fab67812bdd2c2d355a708bc1ce0"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/reviews-1/SHA256-MANIFEST-R1.txt",
    "bytes": 192,
    "sha256": "10940428c3d1da3c24857c875eaaa817f5785393842a967d78cde849234c65f9"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/SHA256-MANIFEST-E2.txt",
    "bytes": 2457,
    "sha256": "844333e78fdec36b3bb43bc70d8abfd12c4840ea308233268696011f398e42f8"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/reviews-2/SHA256-MANIFEST-R2.txt",
    "bytes": 184,
    "sha256": "4a78d04fd33da09698bf75ef0c8fb2dc8640d86390b7b4dfb6b63f8004905501"
  },
  {
    "path": "C:/CoWork/outputs/lane-b-after-d475-f3-2026-10-29/SHA256-MANIFEST.txt",
    "bytes": 3012,
    "sha256": "597cbc03e15d1bd0c9c6c1d80de4965d8270f86e4bd97a795ff37ef1a8cff130"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.json",
    "bytes": 1484,
    "sha256": "3e32d008558c76fca15ac98e7e17a7b2a20e40e0d3fd2485dc85b837c55674e4"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-q6-record-2026-10-28/stray-sync-20261028-freeze.txt",
    "bytes": 772651,
    "sha256": "e065435ed153f7997d070258d5bc1d1836e0f33b2cfc473f0453e7d02353c00e"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/PENDING.json",
    "bytes": 398,
    "sha256": "3facc021bff19adb4a672e50bddd4bea0a8b67bec1ce33e97fef5d82025383e4"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work/STATE.json",
    "bytes": 38333,
    "sha256": "1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence/answers-proposed.r1.json",
    "bytes": 527,
    "sha256": "89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/resume.out",
    "bytes": 28743,
    "sha256": "7678ff4507ef1f837037c21ce96031640a7bbfcef294ad5987bad8036ae26112"
  },
  {
    "path": "C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/evidence-2/resume.txt",
    "bytes": 341,
    "sha256": "a93687f918a7f58cab2c189e8217dea097e9068d16e9297cca22d0f4e8b59094"
  }
];
const PROJECTION_WORKER = "\nimport { createHash } from \"node:crypto\";\nimport { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from \"node:fs\";\n// Scratch comes exclusively from the fixed child output; no temporary-directory environment change.\nimport { join } from \"node:path\";\nimport { pathToFileURL } from \"node:url\";\nimport { isDeepStrictEqual } from \"node:util\";\nconst o = JSON.parse(process.argv[2]);\nconst P = await import(pathToFileURL(o.index).href);\nconst f = [], summary = {};\nconst J = (p) => JSON.parse(readFileSync(p, \"utf8\"));\nconst sha = (b) => createHash(\"sha256\").update(b).digest(\"hex\");\nconst same = (a, b) => isDeepStrictEqual(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)));\nconst list = (root) => { const out = []; (function w(d) { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) w(p); else if (e.isFile()) out.push(p.slice(root.length + 1).split(/[\\\\/]/).join(\"/\")); } })(root); return out.sort(); };\nconst studio = join(o.state, \"studio\");\nconst has = (rel) => existsSync(join(studio, rel));\ntry {\n  const graph = J(join(o.state, \"graph.json\"));\n  // Inputs: every export input under ontology/ is classified; anything else refuses.\n  const INPUTS = new Set([\"citations.json\", \"occurrences.json\", \"reconciliation/candidates.json\"]);\n  const onto = join(o.state, \"ontology\");\n  for (const rel of existsSync(onto) ? list(onto) : []) {\n    if (!INPUTS.has(rel)) f.push(\"unclassified export input: ontology/\" + rel);\n    J(join(onto,rel)); // malformed optional JSON must not become a producer empty fallback\n  }\n  if (has(\"scene-hierarchies.json\")) f.push(\"unexpected hierarchy output for this fixed no-profile candidate\");\n  // Inventory: generated data, or the pinned tool's shipped file byte for byte; nothing else.\n  const GENERATED = new Set([\"graph.json\", \"scene.json\", \"entities.json\", \"reconciliation-candidates.json\", \"workspace-manifest.json\", \"studio.html\", \"scene-hierarchies.json\", \"ontology/citations.json\"]);\n  const files = has(\"\") ? list(studio) : [];\n  for (const rel of files) {\n    if (GENERATED.has(rel)) continue;\n    const want = o.shipped?.files?.[rel];\n    if (!want) f.push(\"unknown promoted studio file: \" + rel);\n    else if (sha(readFileSync(join(studio, rel))) !== want) f.push(\"shipped file differs from the pinned tool: \" + rel);\n  }\n  for (const rel of Object.keys(o.shipped?.files ?? {})) if (!files.includes(rel)) f.push(\"shipped file missing: \" + rel);\n  if (!o.shipped) f.push(\"the pinned tool's shipped studio files are not bound\");\n  for (const rel of [\"graph.json\", \"scene.json\", \"entities.json\", \"reconciliation-candidates.json\", \"workspace-manifest.json\", \"studio.html\"]) if (!has(rel)) f.push(\"missing derived file: \" + rel);\n  if (!f.some((x) => x.startsWith(\"missing derived\"))) {\n    // Graph copy: semantic equality with the final root graph.\n    if (!same(J(join(studio, \"graph.json\")), graph)) f.push(\"studio/graph.json is not the final root graph\");\n    // Scene: every derived field; layout coordinates excluded by name.\n    const strip = (s) => ({ ...s, nodes: (s.nodes ?? []).map(({ x, y, fx, fy, ...r }) => r) });\n    const scene = J(join(studio, \"scene.json\"));\n    const expectScene = P.buildStudioScene(graph, {});\n    if (!same(strip(expectScene), strip(scene))) {\n      const e = strip(JSON.parse(JSON.stringify(expectScene))), a = strip(scene);\n      const part = [\"nodes\", \"edges\", \"communityColors\", \"stats\"].find((k) => !isDeepStrictEqual(e[k], a[k])) ?? \"keys\";\n      f.push(\"scene.json differs from the producer projection in \" + part);\n    }\n    summary.scene = { nodes: scene.nodes?.length, edges: scene.edges?.length };\n    // Entities: the structured sidecar of every final node.\n    const ent = {};\n    for (const n of graph.nodes ?? []) if (typeof n.id === \"string\" && n.id) ent[n.id] = P.buildEntitySidecar(o.state, n.id, n);\n    const actualEnt = J(join(studio, \"entities.json\"));\n    if (!same(ent, actualEnt)) {\n      const bad = Object.keys(ent).filter((k) => !same(ent[k], actualEnt[k])).concat(Object.keys(actualEnt).filter((k) => !(k in ent)));\n      f.push(\"entities.json differs from the producer sidecars: \" + bad.slice(0, 3).join(\", \"));\n    }\n    // Reconciliation: the pinned queue query; a malformed queue refuses (no empty fallback).\n    const queue = join(o.state, \"ontology\", \"reconciliation\", \"candidates.json\");\n    let recon = { items: [], total: 0 };\n    if (existsSync(queue)) {\n      try { recon = P.queryOntologyReconciliationCandidates(P.loadOntologyReconciliationCandidates(queue), { sort: \"score\", order: \"desc\", stale: false }); }\n      catch (e) { f.push(\"the reconciliation queue is malformed: \" + String(e.message).split(\"\\n\")[0]); recon = null; }\n    }\n    if (recon && !same(recon, J(join(studio, \"reconciliation-candidates.json\")))) f.push(\"reconciliation-candidates.json is not the pinned queue query\");\n    // Citations: signature, node records and counts; the copied sidecar's bytes.\n    const citePath = join(o.state, \"ontology\", \"citations.json\");\n    const inline = (graph.nodes ?? []).filter((n) => Array.isArray(n.citations) && n.citations.length);\n    if (existsSync(citePath)) {\n      const c = J(citePath);\n      if (c.schema !== \"graphify_ontology_citations_v1\") f.push(\"citations schema\");\n      if (c.graph_signature !== P.computeGraphCitationSignatureFromJson(graph)) f.push(\"the citation signature is not the final graph's\");\n      if (!isDeepStrictEqual(Object.keys(c.nodes ?? {}).sort(), inline.map((n) => n.id).sort())) f.push(\"citation node records do not match the final graph's cited nodes\");\n      for (const n of inline) {\n        const r = c.nodes?.[n.id];\n        if (!r) continue;\n        const pool = new Set((r.citations ?? []).map((x) => JSON.stringify(x)));\n        if (typeof n.citation_count === \"number\" && r.count !== n.citation_count) f.push(\"citation count differs: \" + n.id);\n        else if (!(r.count >= (r.citations ?? []).length) || !n.citations.every((x) => pool.has(JSON.stringify(x)))) f.push(\"citation record does not contain the inline citations: \" + n.id);\n      }\n      if (!has(\"ontology/citations.json\") || !readFileSync(citePath).equals(readFileSync(join(studio, \"ontology\", \"citations.json\")))) f.push(\"the copied citations sidecar differs from the frozen sidecar\");\n    } else {\n      if (inline.length) f.push(\"cited nodes exist but there is no citations sidecar\");\n      if (has(\"ontology/citations.json\")) f.push(\"a citations copy exists without its source sidecar\");\n    }\n    // Manifest: re-emitted by the pinned producer over the actual bytes; the graph entry is the binding.\n    const m = J(join(studio, \"workspace-manifest.json\"));\n    const T = o.scratch;\n    try {\n      cpSync(studio, T, { recursive: true, errorOnExist: true, force: false });\n      writeFileSync(join(T, \"../manifest-original.json\"), readFileSync(join(T, \"workspace-manifest.json\")), { flag: \"wx\" });\n      const em = P.emitWorkspaceManifest({ bundleDir: T, generatedAt: m.generated_at }).manifest;\n      if (!same(em, m)) f.push(\"workspace-manifest.json is not the producer manifest of the bundle bytes\");\n    } finally { /* preserve scratch including partial producer output on every outcome */ }\n    const g = (m.artifacts ?? []).filter((a) => a.name === \"graph\");\n    if (g.length !== 1 || g[0].present !== true || g[0].path !== \"graph.json\" || g[0].sha256 !== sha(readFileSync(join(studio, \"graph.json\")))) f.push(\"the manifest's graph entry does not bind studio/graph.json\");\n    if (m.graph_hash !== null) f.push(\"top-level graph_hash is not the producer's null\");\n    summary.manifest = { present: m.present_count, artifacts: m.artifacts?.length };\n    // Embedded bundle: parsed as data, never executed. Default: exactly the validated scene.\n    const html = readFileSync(join(studio, \"studio.html\"), \"utf8\");\n    const marker = \"window.__GRAPHIFY_BUNDLE__ = JSON.parse(\";\n    const parts = html.split(marker);\n    if (parts.length !== 2) f.push(\"studio.html carries \" + (parts.length - 1) + \" bundle literals, not one\");\n    else {\n      const end = parts[1].indexOf(\");</script>\");\n      let bundle = null;\n      try { bundle = JSON.parse(JSON.parse(parts[1].slice(0, end))); } catch { f.push(\"the embedded bundle is not a JSON string literal of JSON\"); }\n      if (bundle) {\n        const want = o.fullOffline ? [\"entities.json\", \"graph.json\", \"scene.json\"] : [\"scene.json\"];\n        if (!isDeepStrictEqual(Object.keys(bundle).sort(), want)) f.push(\"the embedded bundle advertises \" + Object.keys(bundle).sort().join(\", \"));\n        if (!same(bundle[\"scene.json\"], scene)) f.push(\"the embedded scene is not the validated scene.json\");\n        if (o.fullOffline && (!same(bundle[\"graph.json\"], graph) || !same(bundle[\"entities.json\"], actualEnt))) f.push(\"the embedded graph or entities differ\");\n      }\n    }\n  }\n} catch (e) {\n  f.push(\"studio validation failed: \" + String(e.message).split(\"\\n\")[0]);\n}\nprocess.stdout.write(JSON.stringify({ findings: f, summary,\n completed:f.length?[]:[\"graph\",\"scene\",\"entities\",\"reconciliation\",\"citations\",\"manifest\",\"embedded-bundle\",\"shipped-assets\"] }));\nprocess.exitCode=f.length?2:0;\n";
// DRAFT BODY: assembled with fixed input bindings and the complete projection worker.
// Only entry.mjs is the executable review artifact. Runtime validation is PLANNED.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const REPO = 'C:/robertaoai/my-editorial-app';
const A = 'C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29';
const W = A + '/work', AT = W + '/attempt-2';
const CAND = AT + '/staging', CHECKOUT = AT + '/gen/checkout', RAW = CHECKOUT + '/.graphify';
const FRESH_CHECKOUT = AT + '/gen/fresh', FRESH_STATE = FRESH_CHECKOUT + '/.graphify', BASE = AT + '/baseline';
const PACKET = 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29';
const OUT_PATH = PACKET + '/f3-run-2', LAUNCH_OUT = PACKET + '/launcher-run-2';
const LAUNCHER = 'C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs';
const LIVE = 'C:/CoWork/myeditorialapp/.graphify';
const STRAY = 'C:/CoWork/outputs/sync-20261028';
const INVENTORY = 'C:/CoWork/outputs/lane-a-worktree-coverage-2026-10-24/inventory.json';
const STRAY_SEAL = 'C:/CoWork/outputs/lane-a-q6-record-2026-10-28/stray-sync-20261028-freeze.txt';
const B050 = 'docs/handoff/B-050-hook-rebuild-resets-graphify-branch-metadata.md';
const B136 = 'docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md';
const GUARD = REPO + '/scripts/graphify/guarded-rebuild.mjs';
const EXPECT = Object.freeze({
  R: '71dfbbe7a09f194a9986c1f29d42ad507aec1af7', S: '22b0a8ce2fb06c16152fa9490d21aae829a45974',
  tree: '7e28fd350438bb6e4b1cb871d75ad9185d44703b', workId: '7bd2af2f-82a0-40fc-872c-31009278ff1c',
  state: '1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e',
  graph: 'df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557',
  manifest: '34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13', files: 583,
  answers: '89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70',
  answerCopy: '02d120baf9fe1751690d5e046f7751bf66c8ddfb018b63672c6f7cb42e91ec10',
  baseline: 'a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d',
  baselineLocus: '77af44a2fcf84a7e7c05013308cc474e6bfaef41',
  liveGraph: '4c3829a57f1dcc0e45d55fd045ccd56b9cfcb80c1cc3f6032cba4a1bf39a2ac7',
  selection: '04347a29a9cb55c7f0e4255afe78be08e5e9779fda5e773fddd5a701deb30f3b',
  launcher: '1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462',
  guard: '4b0d7fb2195376bfb407ac400aedd03ca399c14df7690eea7ffc7b4beadb4f0f',
  inventory: '3e32d008558c76fca15ac98e7e17a7b2a20e40e0d3fd2485dc85b837c55674e4',
});
const REQUIRED = ['bindings','inherited-evidence','source-freeze','complete-bytes','fragments',
  'descriptions','communities','git-selection','lifecycle-composition','producer-projections','final-state'];
const ENV = Object.freeze({ ...process.env }); // inherited verbatim: never rebuild PATH or sanitize again here
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const read = p => fs.readFileSync(p), sha = p => hash(read(p)), J = p => JSON.parse(read(p));
const same = (a,b) => isDeepStrictEqual(a,b);
const norm = p => path.resolve(p).replaceAll('\\','/').replace(/\/+$/,'').toLowerCase();
const inside = (p,r) => norm(p) === norm(r) || norm(p).startsWith(norm(r) + '/');
const digest = m => hash(JSON.stringify(Object.entries(m).sort()));
const envHash = () => hash(JSON.stringify(Object.entries(process.env).sort(([a],[b]) => a < b ? -1 : a > b ? 1 : 0)));
const START_ENV = envHash();
let OUT = null, ST = null, G = null, before = null, commandIndex = 0;
const R = { kind:'lane-b-f3-review', revision:3, started:new Date().toISOString(), phase:'bootstrap',
  runtimeStatus:'running', findings:[], secondaryErrors:[], checks:{}, commands:[], required:REQUIRED,
  authority:'Requires independent exact-byte review and a separate Judge execution release; creates no K or N.' };
function requireThat(ok, message) { if (!ok) throw new Error(message); }
function noLinks(p) {
  let q = path.resolve(p);
  while (true) {
    const st = fs.lstatSync(q);
    requireThat(!st.isSymbolicLink() && norm(fs.realpathSync.native(q)) === norm(q), 'link/alias at '+q);
    const parent = path.dirname(q); if (parent === q) break; q = parent;
  }
}
function write(rel, data) {
  requireThat(OUT && inside(path.join(OUT,rel), OUT) && norm(path.join(OUT,rel)) !== norm(OUT), 'unsafe output '+rel);
  const file = path.join(OUT,rel); noLinks(path.dirname(file));
  const b = Buffer.isBuffer(data) ? data : Buffer.from(typeof data === 'string' ? data : JSON.stringify(data,null,2)+'\n');
  fs.writeFileSync(file,b,{flag:'wx'});
  requireThat(read(file).equals(b),'output read-back differs '+rel);
  return {path:file,bytes:b.length,sha256:hash(b)};
}
function tree(root, withTimes = false) {
  noLinks(root); const map = {}, details = [];
  function walk(dir, rel = '') {
    for (const e of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
      const f=path.join(dir,e.name), key=rel?rel+'/'+e.name:e.name; noLinks(f);
      if(e.isDirectory()) walk(f,key);
      else { requireThat(e.isFile(),'nonregular file '+f); const st=fs.statSync(f); map[key]=sha(f);
        details.push({path:key,bytes:st.size,sha256:map[key],...(withTimes?{mtime:st.mtime.toISOString()}: {})}); }
    }
  }
  walk(root); return {map,files:Object.keys(map).length,digest:digest(map),details};
}
function run(exe,args,cwd,label,timeout=60000,expectedStatus=0) {
  // All direct subprocesses: absolute frozen executable, no shell, unchanged ENV, bounded time, file-backed logs.
  requireThat(ST && [ST.frozen.bindings.node.path,ST.frozen.bindings.git.path].some(x=>norm(x)===norm(exe)),'unbound executable');
  const pin=norm(exe)===norm(ST.frozen.bindings.node.path)?ST.frozen.bindings.node:ST.frozen.bindings.git;
  requireThat(sha(exe)===pin.sha256,'executable bytes changed before '+label);
  const id=String(++commandIndex).padStart(3,'0')+'-'+label.replace(/[^a-z0-9-]/gi,'-');
  const out=path.join(OUT,'commands',id+'.stdout'),err=path.join(OUT,'commands',id+'.stderr');
  let ofd=null,efd=null,res=null; const rec={id,exe,args,cwd,envSha256:START_ENV,start:new Date().toISOString()};
  R.commands.push(rec);
  try {
    ofd=fs.openSync(out,'wx'); efd=fs.openSync(err,'wx');
    res=spawnSync(exe,args,{cwd,env:ENV,shell:false,windowsHide:true,stdio:['ignore',ofd,efd],timeout,killSignal:'SIGTERM'});
  } finally { if(ofd!==null)fs.closeSync(ofd);if(efd!==null)fs.closeSync(efd); }
  Object.assign(rec,{end:new Date().toISOString(),status:res?.status??null,signal:res?.signal??null,error:res?.error?String(res.error):null,pid:res?.pid??null,
    stdout:{path:out,sha256:sha(out)},stderr:{path:err,sha256:sha(err)}});
  write('commands/'+id+'.json',rec);
  requireThat(res && res.status===expectedStatus && !res.signal && !res.error && res.pid,'subprocess failed '+id);
  requireThat(envHash()===START_ENV,'environment changed at '+id);
  return read(out);
}
const gitRaw=(cwd,...args)=>run(ST.frozen.bindings.git.path,['--no-optional-locks','-C',cwd,...args],cwd,'git');
const git=(cwd,...args)=>gitRaw(cwd,...args).toString('utf8').replace(/\r/g,'').trimEnd();
async function check(name,fn) {
  R.phase=name;const c={status:'running',started:new Date().toISOString()};R.checks[name]=c;
  console.log('F3 START '+name);
  try { c.evidence=await fn();c.status='pass'; }
  catch(e) { c.status='fail';c.error={message:String(e.message),stack:String(e.stack)};R.findings.push({phase:name,...c.error}); }
  c.ended=new Date().toISOString();write(name+'.json',c);console.log('F3 '+c.status.toUpperCase()+' '+name);
  return c.status==='pass';
}
function emptyFindings(f,label) { requireThat(Array.isArray(f) && f.length===0,label+': '+JSON.stringify(f)); }
let neutralIndex=0;
const CONFIG_QUERIES = {
  effective(checkout, gitPath, env) {
    requireThat(same(env,ENV),'config query environment');
    return {status:0,signal:null,error:null,stdout:run(gitPath,['-C',checkout,'config','--list','--show-origin'],checkout,'effective-config').toString('utf8')};
  },
  outside(gitPath, env) {
    requireThat(same(env,ENV),'neutral config environment');
    const dir=OUT+'/scratch/neutral-'+(++neutralIndex);requireThat(!fs.existsSync(dir),'neutral scratch exists');fs.mkdirSync(dir);
    const result=run(gitPath,['-C',dir,'rev-parse','--is-inside-work-tree'],dir,'neutral-not-repo',60000,128);
    requireThat(result.length===0,'unexpected neutral rev-parse stdout');
    const rec=R.commands.at(-1);requireThat(/not a git repository/i.test(read(rec.stderr.path).toString()),'neutral refusal has unexpected reason');
    return {status:0,signal:null,error:null,stdout:run(gitPath,['-C',dir,'config','--list','--show-origin'],dir,'outside-config').toString('utf8')};
  }
};
function validateBindings() {
  const b=ST.frozen.bindings;
  requireThat(norm(process.execPath)===norm(b.node.path)&&sha(process.execPath)===b.node.sha256&&process.version===b.node.version,'frozen Node');
  const keys=Object.keys(ENV).filter(k=>k.toUpperCase()==='PATH');
  requireThat(keys.length===1&&keys[0]==='PATH'&&norm(ENV.PATH.split(';')[0])===norm(path.dirname(b.git.path)),'launcher environment was not inherited');
  requireThat(same(G.sanitizedEnv(ENV),ENV),'inherited environment is not already sanitized');
  for(const cwd of [REPO,CHECKOUT,FRESH_CHECKOUT])for(const f of ['git','git.exe','git.com'])requireThat(!fs.existsSync(path.join(cwd,f)),'Git shadow '+cwd+'/'+f);
  for(const cwd of [CHECKOUT,FRESH_CHECKOUT]) emptyFindings(G.bindingFindings(b,{checkout:cwd,env:ENV,queries:CONFIG_QUERIES}),'binding '+cwd);
  requireThat(sha(GUARD)===EXPECT.guard&&sha(LAUNCHER)===EXPECT.launcher,'guard or launcher changed');
  const shipped=G.shippedStudio(b.cli);requireThat(shipped&&shipped.digest===b.studioApp.digest&&same(shipped.files,b.studioApp.files),'shipped studio binding');
  return {environmentSha256:START_ENV,node:b.node,git:b.git,producer:b.pins,shipped};
}
function linkedInventory() {
  requireThat(sha(INVENTORY)===EXPECT.inventory,'accepted inventory bytes');
  const acc=J(INVENTORY), observed={};
  const expectedHeads={'C:/robertaoai/my-editorial-app-preflight':'5ddf17c190cdb3f9d38e99fb35594a9e38f0eed0','C:/robertaoai/my-editorial-app-proof':'1945c1911ad1f2c7f6f0e06ee52317b31b16fd34'};
  requireThat(same(Object.keys(acc.roots).sort(),Object.keys(expectedHeads).sort()),'linked root set');
  const wt=git(REPO,'worktree','list','--porcelain');
  const blocks=wt.split(/\n\n/).filter(Boolean),roots=blocks.map(x=>x.split('\n')[0].slice(9));
  requireThat(same(roots.map(norm).sort(),[REPO,...Object.keys(expectedHeads)].map(norm).sort()),'worktree set differs');
  for(const [root,v]of Object.entries(acc.roots)) {
    const items=[];function walk(rel){const p=root+'/'+rel;noLinks(p);const st=fs.lstatSync(p);
      const item={path:rel,type:st.isDirectory()?'dir':'file'};
      if(st.isDirectory()){items.push(item);for(const f of fs.readdirSync(p).sort())walk(rel+'/'+f);}
      else{requireThat(st.isFile(),'inventory type');items.push({...item,size:st.size,sha256:sha(p)});}}
    walk('.agents/skills');
    const wanted=v.items.map(({path,type,size,sha256})=>type==='file'?{path,type,size,sha256}:{path,type});
    const sort=a=>a.sort((a,b)=>a.path.localeCompare(b.path));requireThat(same(sort(items),sort(wanted)),'linked inventory differs '+root);
    const head=git(root,'rev-parse','HEAD'),status=git(root,'status','--porcelain=v1','--untracked-files=all');
    requireThat(head===expectedHeads[root],'linked HEAD '+root);
    const expectedStatus=wanted.filter(x=>x.type==='file').map(x=>'?? '+x.path).sort().join('\n');
    requireThat(status.split('\n').filter(Boolean).sort().join('\n')===expectedStatus,'linked tracked/untracked scope '+root);
    requireThat(git(root,'diff','--cached','--name-only')==='','linked staging '+root);
    observed[root]={head,status,items};
  }
  return {worktrees:wt,roots:observed,earlierByteContinuity:'unproved'};
}
function strayInventory() {
  const lines=read(STRAY_SEAL).toString().split(/\r?\n/).filter(l=>/^[0-9a-f]{64}  /.test(l)),want={};
  for(const l of lines){const m=l.match(/^([0-9a-f]{64})  (.*?)  (\d{4}-.*Z)$/);requireThat(m,'stray seal format');requireThat(!want[m[2]],'duplicate stray path');want[m[2]]={sha256:m[1],mtime:m[3]};}
  const actual=tree(STRAY,true);requireThat(actual.files===4306&&Object.keys(want).length===4306,'stray count');
  for(const f of actual.details)requireThat(want[f.path]&&want[f.path].sha256===f.sha256&&want[f.path].mtime===f.mtime,'stray difference '+f.path);
  requireThat(J(STRAY+'/STATE.json').state==='pending'&&!fs.existsSync(STRAY+'/.claim'),'stray lifecycle');
  return {identity:'cac590ad frozen and excluded',...actual};
}
function snapshot(tag) {
  const head=git(REPO,'rev-parse','HEAD'),status=git(REPO,'status','--porcelain=v1','--untracked-files=all'),staged=git(REPO,'diff','--cached','--name-only');
  requireThat(head===EXPECT.R&&status===''&&staged==='','repository HEAD or clean state');
  const source=G.publicationSourceFindings(REPO,ST.frozen.snapshot);requireThat(source.ok,'source rule '+JSON.stringify(source));
  const config=git(REPO,'config','--list','--show-origin');requireThat(config===ST.frozen.snapshot.config,'source config differs');
  const refs=git(REPO,'for-each-ref','--format=%(objectname) %(refname)').split('\n');
  const baseline=G.selectBaseline({liveTarget:LIVE});requireThat(baseline.ok&&same(baseline.baseline,ST.frozen.baseline),'live release chain differs');
  requireThat(!fs.existsSync(LIVE+'.lock')&&!fs.existsSync('C:/CoWork/myeditorialapp/.graphify-txn.json')&&!fs.existsSync(W+'/.claim'),'lock/journal/claim');
  const candidate=tree(CAND);requireThat(candidate.files===EXPECT.files&&candidate.digest===EXPECT.manifest&&candidate.map['graph.json']===EXPECT.graph,'candidate bytes');
  const live=tree(LIVE);requireThat(live.digest===EXPECT.baseline&&live.map['graph.json']===EXPECT.liveGraph,'live bytes');
  const receipts=tree('C:/CoWork/myeditorialapp/.graphify-receipts');requireThat(Object.keys(receipts.map).filter(x=>/^release-.+\.json$/.test(x)).length===16,'release count');
  const work=tree(W,true); // includes all generated source checkouts, STATE, retained attempts and answers
  const linked=linkedInventory(),stray=strayInventory();
  const observed={head,status,staged,source,config,refsOutsideTurnDiffs:refs.filter(x=>!x.includes(' refs/codex/turn-diffs/')),
    checkpointRefs:refs.filter(x=>x.includes(' refs/codex/turn-diffs/')),b050:sha(REPO+'/'+B050),state:sha(W+'/STATE.json'),answers:sha(A+'/evidence/answers-proposed.r1.json'),
    candidate,work,live,receipts,linked,stray,environment:envHash()};
  write(tag+'-snapshot.json',observed);return observed;
}
function preserveCompare(a,b) {
  const {checkpointRefs:ac,source:as,...aa}=a,{checkpointRefs:bc,source:bs,...bb}=b;
  // Source predicates are required on both sides; only Codex checkpoint refs are excluded from equality.
  return {ok:same(aa,bb)&&as.ok&&bs.ok,checkpointRefsBefore:ac,checkpointRefsAfter:bc};
}
function members(g) {
  const groups={};for(const n of g.nodes){const k=String(n.community);(groups[k]??=[]).push(n.id);}
  return Object.fromEntries(Object.entries(groups).map(([id,ids])=>{requireThat(new Set(ids).size===ids.length,'duplicate member ID');ids.sort();return[id,{ids,hash:hash(JSON.stringify(ids)),name:(g.community_labels||g.graph?.community_labels||{})[id]}];}));
}
function strictSelectionInputs(cwd) {
  const current=git(cwd,'branch','--show-current'),remote=git(cwd,'symbolic-ref','--quiet','--short','refs/remotes/origin/HEAD');
  requireThat(current&&remote.startsWith('origin/'),'selection branches unavailable');
  const def=remote.slice(7),heads=git(cwd,'for-each-ref','--format=%(refname:short)%00%(committerdate:iso-strict)','refs/heads').split('\n').filter(Boolean).map(l=>{const [name,time]=l.split('\0');requireThat(name&&Number.isFinite(Date.parse(time)),'invalid head time');return{name,time:Date.parse(time)};});
  const revs={};for(const b of [...new Set([def,current,...heads.map(x=>x.name)])].sort())revs[b]=git(cwd,'rev-list','--max-count=200',b).split('\n').filter(Boolean);
  const origin=git(cwd,'remote','get-url','origin');requireThat(origin===ST.frozen.snapshot.origin,'selection origin');
  return {current,def,heads,revs,repoKey:G.repoKeyOf(origin)};
}

function semanticSummary() {
  const prerequisites=['bindings','inherited-evidence','source-freeze','complete-bytes','fragments','descriptions','communities','git-selection','lifecycle-composition','producer-projections'];
  const evidence=prerequisites.map(name=>({name,status:R.checks[name]?.status??'not-run',path:OUT?OUT+'/'+name+'.json':null}));
  const complete=evidence.every(e=>e.status==='pass');
  return {pendingSemantics:complete?0:null,semanticStatus:complete?'complete-zero-unresolved':'unknown-or-incomplete',semanticEvidence:evidence};
}

async function main() {
  requireThat(same(process.argv.slice(2),['--out',OUT_PATH]),'exact child arguments required: --out '+OUT_PATH);
  requireThat(norm(fileURLToPath(import.meta.url))===norm(PACKET+'/entry.r3.mjs'),'wrong child path');
  noLinks(PACKET);requireThat(!fs.readdirSync(PACKET).some(x=>/^SHA256-MANIFEST/i.test(x)),'execution packet sealed');
  requireThat(fs.statSync(LAUNCH_OUT).isDirectory()&&!fs.existsSync(LAUNCH_OUT+'/launcher-completion.json'),'launcher output prerequisite');noLinks(LAUNCH_OUT);
  requireThat(!fs.existsSync(OUT_PATH),'child output already exists');fs.mkdirSync(OUT_PATH);OUT=OUT_PATH;
  for(const name of ['commands','scratch'])fs.mkdirSync(OUT+'/'+name);
  write('run-start.json',{args:process.argv,at:R.started,child:{path:fileURLToPath(import.meta.url),sha256:sha(fileURLToPath(import.meta.url))},launcher:{path:LAUNCHER,sha256:sha(LAUNCHER)},environmentSha256:START_ENV});
  requireThat(sha(W+'/STATE.json')===EXPECT.state,'ready STATE bytes');ST=J(W+'/STATE.json');
  requireThat(sha(GUARD)===EXPECT.guard,'guard bytes');G=await import(pathToFileURL(GUARD).href);
  if(!await check('bindings',()=>{
    requireThat(ST.state==='ready'&&ST.attempts===2&&ST.workId===EXPECT.workId&&ST.frozen.snapshot.head===EXPECT.S,'STATE identity');
    requireThat(ST.answersHash===EXPECT.answers&&sha(A+'/evidence/answers-proposed.r1.json')===EXPECT.answers,'approved answers');
    requireThat(norm(ST.ready.staging)===norm(CAND)&&ST.ready.graphSha256===EXPECT.graph&&ST.ready.manifest===EXPECT.manifest&&ST.ready.files===583,'ready identity');
    requireThat(norm(ST.ready.answersFile)===norm(AT+'/ANSWERS.json')&&ST.ready.answersSha===EXPECT.answerCopy&&sha(ST.ready.answersFile)===EXPECT.answerCopy&&same(J(ST.ready.answersFile),J(A+'/evidence/answers-proposed.r1.json')),'guard answers copy');
    requireThat(ST.frozen.baseline.releaseLocus===EXPECT.baselineLocus&&ST.frozen.baseline.digest===EXPECT.baseline&&ST.frozen.baseline.files===583&&ST.frozen.baseline.algorithm==='guard-treeDigest-v1','baseline binding');
    return validateBindings();
  }))return;
  if(!await check('inherited-evidence',()=>{
    const verified=[];for(const v of INPUT_BINDINGS){noLinks(v.path);requireThat(fs.statSync(v.path).size===v.bytes&&sha(v.path)===v.sha256,'input changed '+v.path);verified.push(v);}
    for(const v of INPUT_BINDINGS.filter(x=>/SHA256-MANIFEST/.test(path.basename(x.path)))){
      const entries=[];for(const l of read(v.path).toString().split(/\r?\n/).filter(Boolean)){const m=l.match(/^([0-9a-f]{64}) [ *](.+)$/);requireThat(m,'seal format '+v.path);const p=path.resolve(path.dirname(v.path),m[2]);requireThat(inside(p,path.dirname(v.path)),'seal escapes packet');noLinks(p);requireThat(sha(p)===m[1],'sealed bytes changed '+p);entries.push({path:p,sha256:m[1]});}verified.push({seal:v.path,entries});}
    return {verified,historicalContinuity:'not established by current hashes'};
  }))return;
  if(!await check('source-freeze',()=>{
    requireThat(git(REPO,'rev-list','--parents','-n','1',EXPECT.R)===EXPECT.R+' '+EXPECT.S,'R sole parent');
    requireThat(git(REPO,'diff-tree','--no-commit-id','--name-only','-r',EXPECT.R)===B136,'R path');
    requireThat(git(REPO,'rev-parse',EXPECT.S+'^{tree}')===EXPECT.tree,'S tree');
    requireThat(git(REPO,'config','user.email')==='241258103+robertaoai@users.noreply.github.com','Git identity');
    requireThat(/\| \*\*A\*\* \|[^\n]*\*\*`Active`\*\*/.test(read(REPO+'/docs/v1/V1-PHASE-CLOSURE.md').toString()),'Lane A Active');
    before=snapshot('before');return {snapshot:'before-snapshot.json',source:before.source};
  }))return;
  // Independent checks continue after a semantic failure; no mutating recovery or regeneration is called.
  await check('complete-bytes',()=>{
    const c=tree(CAND),b=tree(BASE);requireThat(c.digest===EXPECT.manifest&&c.files===583&&c.map['graph.json']===EXPECT.graph,'complete candidate');
    requireThat(b.digest===EXPECT.baseline&&b.files===583,'complete baseline seed');
    write('candidate-file-map.json',c);write('baseline-file-map.json',b);write('STATE-ready-copy.json',read(W+'/STATE.json'));write('approved-answers-copy.json',read(A+'/evidence/answers-proposed.r1.json'));
    return {candidate:c.digest,baseline:b.digest,files:c.files};
  });
  await check('fragments',()=>{
    const graph=J(CAND+'/graph.json'),ids=new Set(graph.nodes.map(n=>n.id));requireThat(ids.size===graph.nodes.length,'duplicate nodes');
    const dangling=graph.links.filter(e=>!ids.has(typeof e.source==='object'?e.source.id:e.source)||!ids.has(typeof e.target==='object'?e.target.id:e.target));requireThat(!dangling.length,'dangling edges');
    const dir=CHECKOUT+'/docs/graph-fragments',parity=G.fragmentParity(graph,dir);requireThat(parity.fragments===140&&parity.exact===parity.fragments&&parity.diffs.length===0,'fragment fields '+JSON.stringify(parity));
    const declared=fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&Array.isArray(J(dir+'/'+f).nodes)).sort();requireThat(same([...G.fragmentOrder(CHECKOUT)].sort(),declared),'all mergeable fragments accounted');
    return {parity,mergeable:declared,dangling:0};
  });
  await check('descriptions',()=>{
    const graph=J(CAND+'/graph.json'),base=J(BASE+'/graph.json'),prior=new Map(base.nodes.map(n=>[n.id,n]));
    const answers=J(AT+'/ANSWERS.json').descriptions;requireThat(answers&&Object.keys(answers).length===0,'expected zero description answers');
    const changed=git(CHECKOUT,'diff','--name-only',J(BASE+'/branch.json').lastAnalyzedHead,EXPECT.S).split('\n');
    const fragments=new Map();for(const f of G.fragmentOrder(CHECKOUT))for(const n of J(CHECKOUT+'/docs/graph-fragments/'+f).nodes)if(Object.hasOwn(n,'description'))fragments.set(n.id,n.description);
    const subjects=new Map(git(CHECKOUT,'log','--all','--format=%H%x09%s').split('\n').filter(Boolean).map(l=>[l.slice(0,40),l.slice(41)]));
    const evidence=[],unresolved=[];
    for(const n of graph.nodes){const old=prior.get(n.id);let rule=null,expected;
      if(fragments.has(n.id)){rule='curated';expected=fragments.get(n.id);}
      else if(n.description&&old?.description&&(!n.source_file||!changed.includes(n.source_file))){rule='unchanged-source baseline';expected=old.description;}
      else if(n.description&&/^commit:.*@[0-9a-f]{40}$/.test(n.id)){const id=n.id.slice(-40);rule='source commit subject';requireThat(subjects.has(id),'subject unavailable '+id);expected=`Git commit ${id.slice(0,7)} in this repository, with the subject "${subjects.get(id)}".`;}
      else if(!n.description&&old&&!old.description){rule='inherited undescribed';}
      else {unresolved.push({id:n.id,source:n.source_file,reason:'description lacks an approved source/replay binding'});continue;}
      if(expected!==undefined&&n.description!==expected)unresolved.push({id:n.id,reason:'description mismatch',rule,expected,actual:n.description});
      evidence.push({id:n.id,source:n.source_file??null,rule,description:n.description??null});
    }
    write('description-audit.json',{changed,evidence,unresolved});requireThat(!unresolved.length,'unresolved description evidence');
    const inherited=evidence.filter(e=>e.rule==='inherited undescribed');requireThat(inherited.length===2,'inherited undescribed set differs');
    for(const s of [RAW,CAND])requireThat(same(J(s+'/missing-desc.json'),[]),'missing-desc nonempty '+s);
    return {nodes:evidence.length,inherited,unresolved:0};
  });
  await check('communities',()=>{
    const g=J(CAND+'/graph.json'),raw=J(RAW+'/graph.json'),base=J(BASE+'/graph.json');
    emptyFindings(G.nameBinding(g),'candidate names');emptyFindings(G.nameBinding(raw),'raw names');
    const current=members(g),prior=members(base),rawGroups=members(raw),pending=J(W+'/PENDING.json'),attempt1=members(J(W+'/attempt-1/gen/checkout/.graphify/graph.json'));
    requireThat(same(Object.values(current).map(x=>x.ids).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b))),Object.values(rawGroups).map(x=>x.ids).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)))),'raw to composed member sets');
    const approved=J(AT+'/ANSWERS.json').communityNames,byHash=new Map(Object.values(prior).map(x=>[x.hash,x]));
    requireThat(pending.descriptions.length===0&&pending.communities.length===3&&same(Object.keys(approved).sort(),pending.communities.map(x=>x.memberSetSha256).sort()),'pending/answers exact set');
    for(const p of pending.communities)requireThat(Object.values(attempt1).some(x=>x.hash===p.memberSetSha256),'pending complete member binding');
    const rows=[],used=new Set();for(const [id,c]of Object.entries(current)){const old=byHash.get(c.hash),name=old?.name||approved[c.hash];requireThat(name&&name===c.name,'unresolved/applied name '+id);if(!old?.name)used.add(c.hash);rows.push({id,...c,source:old?.name?'identical baseline member set':'approved answer'});}
    requireThat(Object.keys(current).length===177&&new Set(rows.map(x=>x.name)).size===177,'community labels or duplicate names');
    requireThat(same([...used].sort(),Object.keys(approved).sort()),'approved answer consumption');
    const labels=g.community_labels||g.graph?.community_labels||{};requireThat(same(Object.keys(labels).sort(),Object.keys(current).sort()),'extra/missing labels');
    write('complete-member-sets.json',{baseline:prior,pendingAttempt:attempt1,raw:rawGroups,final:current,applied:rows});
    return {communities:rows.length,answersApplied:used.size,unresolved:0};
  });
  await check('git-selection',()=>{
    const runRecord=J(A+'/evidence-2/resume.out');
    requireThat(runRecord.outcome==='ready'&&runRecord.exit===0&&runRecord.workId===EXPECT.workId&&same(runRecord.ready,ST.ready),'recorded resume output differs');
    const selection=ST.ready.selection;requireThat(selection.oracle===EXPECT.selection&&same(selection.rules,G.SELECTION_RULES),'selection identity');
    const ci=strictSelectionInputs(CHECKOUT),fi=strictSelectionInputs(FRESH_CHECKOUT);requireThat(same(ci,fi),'checkout selection inputs differ');
    for(const cwd of [CHECKOUT,FRESH_CHECKOUT]){
      requireThat(git(cwd,'rev-parse','HEAD')===EXPECT.S,'generated HEAD');
      const refs=git(cwd,'for-each-ref','--format=%(refname)%00%(objectname)%00%(symref)').split('\n').filter(Boolean).map(l=>{const[name,object,symref]=l.split('\0');return{name,object,symref:symref||null};});
      requireThat(same(refs,ST.frozen.snapshot.refs),'generated exact ref map');
      requireThat(git(cwd,'diff','--name-only')===''&&git(cwd,'diff','--cached','--name-only')==='','generated tracked tree changed');
    }
    const rb=G.selectionBracket(ci,...selection.brackets.rebuild),fb=G.selectionBracket(fi,...selection.brackets.fresh);requireThat(rb.ok&&fb.ok&&same(rb.oracle,fb.oracle)&&hash(JSON.stringify(rb.oracle))===EXPECT.selection,'selection brackets');
    const calls=selection.calls.map(c=>({...c,before:{...c.before},after:{...c.after}}));
    requireThat(calls.length===7&&calls.every((c,i)=>c.i===i+1),'complete call inventory');
    const expectedArgs=[['hook-rebuild','--scope','committed'],['hook-rebuild','--scope','committed'],['update','--fill-missing'],['update'],['label','--label-mode','assistant'],['label','--label-mode','assistant'],G.studioExportArgs(RAW)];
    for(const [i,c]of calls.entries()){
      requireThat(same(c.args,expectedArgs[i])&&c.where===(i===1?'fresh':'checkout'),'call argv or checkout');
      requireThat(Number.isFinite(c.start)&&Number.isFinite(c.end)&&c.end>=c.start&&(i===0||c.start>=calls[i-1].end),'call chronology');
      emptyFindings(G.callSelectionFindings(rb.oracle,c.where==='fresh'?fi:ci,c.where==='fresh'?fi:ci,c.start,c.end),'per-call selection');
      for(const end of ['before','after']){const p=c[end].ignored;requireThat(p&&inside(p.file,AT+'/gen/ignored'),'ignored proxy location');const bytes=read(p.file);requireThat(hash(bytes)===p.sha256,'ignored proxy hash');const list=bytes.toString().split('\n').filter(Boolean);requireThat(list.length===p.n&&same([...list].sort(),list)&&new Set(list).size===list.length,'ignored proxy set');c[end].list=list;}
      requireThat(G.proxyFinding(c.before,c.after)===null,'missing call proxies');
    }
    requireThat(same([calls[0].start,calls[0].end],selection.brackets.rebuild)&&same([calls[1].start,calls[1].end],selection.brackets.fresh),'extract brackets not call-bound');
    const obs=G.observationCallFindings(calls,selection.finalObservedAt);emptyFindings(obs.findings,'final observation');requireThat(same(obs.bracket,selection.brackets.finalUpdate),'final update bracket');
    const ignored=G.ignoredPacket(calls);emptyFindings(ignored.findings,'ignored evidence');requireThat(same(ignored.packet,selection.ignored),'ignored packet binding');
    emptyFindings(G.freshOracleFindings(G.gitSubgraph(J(FRESH_STATE+'/graph.json')),rb.oracle),'fresh extraction');
    for(const state of [RAW,CAND]){emptyFindings(G.gitMergeFindings(G.gitSubgraph(J(BASE+'/graph.json')),G.gitSubgraph(J(FRESH_STATE+'/graph.json')),G.gitSubgraph(J(state+'/graph.json'))),'final Git merge');emptyFindings(G.verifyStaging({staging:state,selection,seed:BASE,fresh:FRESH_STATE}),'final state '+state);}
    write('git-selection-detail.json',{inputs:ci,oracle:rb.oracle,calls,ignored,observation:obs});return {calls:calls.length,oracle:selection.oracle,findings:[]};
  });
  await check('lifecycle-composition',()=>{
    for(const [dir,expected]of [[RAW,{head:EXPECT.S,branchName:ST.frozen.snapshot.branch,root:CHECKOUT,gitDir:CHECKOUT+'/.git'}],[FRESH_STATE,{head:EXPECT.S,branchName:ST.frozen.snapshot.branch,root:FRESH_CHECKOUT,gitDir:FRESH_CHECKOUT+'/.git'}],[CAND,{head:EXPECT.S,branchName:ST.ready.caller.branch,root:REPO,gitDir:REPO+'/.git',commonGitDir:REPO+'/.git'}]])emptyFindings(G.lifecycleFindings({branch:J(dir+'/branch.json'),worktree:J(dir+'/worktree.json')},expected),'lifecycle '+dir);
    emptyFindings(G.sourceProtection({repo:REPO,snapshot:ST.frozen.snapshot},CAND,ST.ready.caller),'source protection');
    const raw=G.classifyState(RAW),base=G.classifyState(BASE),composed=G.classifyState(CAND);
    for(const cls of [raw,base,composed]){emptyFindings(cls.unknown,'unknown state');emptyFindings(cls.multi,'ambiguous state');}
    requireThat(!raw.entries.some(e=>e.policy==='promote-empty')&&!composed.entries.some(e=>e.policy==='promote-empty'),'pending instructions');
    const expected={};for(const e of base.entries.filter(e=>e.policy==='retain'))expected[e.path]=sha(BASE+'/'+e.path);for(const e of raw.entries.filter(e=>e.policy==='promote'))expected[e.path]=sha(RAW+'/'+e.path);
    const caller=ST.ready.caller,t=ST.ready.frozenAt,priorB=J(BASE+'/branch.json'),priorW=J(BASE+'/worktree.json');
    const branch={...J(RAW+'/branch.json'),branchName:caller.branch,worktreePath:caller.rootNative,upstream:caller.upstream??null,mergeBase:caller.mergeBase??null,lastSeenHead:caller.head,lastAnalyzedHead:caller.head,firstSeenHead:priorB.firstSeenHead??caller.head,createdAt:priorB.createdAt??t,stale:false,staleReason:null,staleSince:null,lifecycleEvent:null,updatedAt:t};
    const worktree={...J(RAW+'/worktree.json'),worktreePath:caller.rootNative,gitDir:caller.gitDirNative,commonGitDir:caller.gitDirNative,lastSeenHead:caller.head,lastAnalyzedHead:caller.head,firstSeenHead:priorW.firstSeenHead??caller.head,createdAt:priorW.createdAt??t,updatedAt:t};
    expected['branch.json']=hash(JSON.stringify(branch,null,2)+'\n');expected['worktree.json']=hash(JSON.stringify(worktree,null,2)+'\n');
    requireThat(same(expected,tree(CAND).map),'composition file-by-file differs');
    for(const e of [...raw.entries.filter(x=>x.policy==='promote'),{path:'branch.json'},{path:'worktree.json'}])requireThat(!G.findForeignPath(read(CAND+'/'+e.path).toString()),'foreign path '+e.path);
    requireThat(J(CAND+'/.graphify_runtime.json').runtime==='typescript','runtime marker');
    return {raw,composed,expectedManifest:digest(expected),...semanticSummary()};
  });
  await check('producer-projections',()=>{
    validateBindings(); // recheck before executing pinned producer exports
    const worker=write('scratch/producer-validation.mjs',PROJECTION_WORKER);
    const scratch=OUT+'/scratch/manifest-copy';requireThat(!fs.existsSync(scratch),'projection scratch exists');fs.mkdirSync(scratch);
    const args={state:CAND,index:path.join(path.dirname(ST.frozen.bindings.cli),'index.js'),shipped:ST.frozen.bindings.studioApp,fullOffline:false,scratch};
    write('projection-arguments.json',args);
    const bytes=run(ST.frozen.bindings.node.path,[worker.path,JSON.stringify(args)],OUT+'/scratch','producer-projections',600000);
    const result=JSON.parse(bytes);write('projection-result.json',result);emptyFindings(result.findings,'producer projections');
    requireThat(result.summary?.scene?.nodes===3614&&result.summary?.scene?.edges===7548&&result.summary?.manifest,'projection summary incomplete');
    // The worker checks every required class, and its terminal marker cannot be substituted by partial JSON.
    requireThat(same(result.completed,['graph','scene','entities','reconciliation','citations','manifest','embedded-bundle','shipped-assets']),'projection coverage incomplete');
    return {worker,summary:result.summary,completed:result.completed,scratchPreserved:scratch};
  });
  await check('final-state',()=>{
    validateBindings();requireThat(sha(W+'/STATE.json')===EXPECT.state,'final STATE changed');
    emptyFindings(G.verifyStaging({staging:CAND,selection:ST.ready.selection,seed:BASE,fresh:FRESH_STATE}),'final staging');
    const after=snapshot('after'),preservation=preserveCompare(before,after);write('preservation.json',preservation);requireThat(preservation.ok,'preservation mismatch');
    return {preservation,...semanticSummary(),graph:after.candidate.map['graph.json'],manifest:after.candidate.digest};
  });
}

const FIN = { preliminary: {path:null,bytes:null,sha256:null,exit:null,status:'not-attempted'}, finalPreservation:{ok:false,reason:'not proved'} };
function observedFile(file) {
  if (!file) return {status:'unavailable',path:null};
  try { const b=read(file);return {status:'present',path:file,bytes:b.length,sha256:hash(b)}; }
  catch(e) { return {status:e.code==='ENOENT'?'absent':'unreadable-or-partial',path:file,error:String(e.stack)}; }
}
function terminal(exit,completionWrite) {
  R.exit=exit;R.runtimeStatus=exit===0?'complete-positive-review':'incomplete-or-failed';
  const p=FIN.preliminary;
  return {record:'authoritative',exit,verdict:exit===0?'positive F3 review evidence; K/N remain separate':'F3 not accepted',
    preliminary:{...p,observed:observedFile(p.path),disposition:p.status!=='verified'?'unverified or absent; never authoritative':exit===p.exit?'confirmed':`superseded: preliminary exit ${p.exit}, final exit ${exit}`},
    completionWrite,finalPreservation:FIN.finalPreservation,result:R,partialFiles:'retain entire output and capture folders'};
}
function fallback(exit,phase,error) {
  process.exitCode=exit;
  if(error)R.secondaryErrors.push({phase,error:String(error.stack||error)});
  const record=terminal(exit,{status:'failed or unavailable',observed:observedFile(OUT?OUT+'/child-completion.json':null)});
  try { fs.writeSync(2,JSON.stringify(record)+'\n'); }
  catch(e) { R.secondaryErrors.push({phase:'stderr-fallback',error:String(e.stack)});try{fs.writeSync(1,JSON.stringify(terminal(exit,{status:'stderr unavailable; stdout fallback',observed:observedFile(OUT?OUT+'/child-completion.json':null)}))+'\n');}catch{} }
}
function finalize() {
  R.ended=new Date().toISOString();
  for(const name of REQUIRED)if(!R.checks[name])R.checks[name]={status:'not-run',reason:'prior gate failed or run interrupted'};
  let code=R.findings.length||REQUIRED.some(k=>R.checks[k].status!=='pass')?2:0;
  R.runtimeStatus=code===0?'complete-positive-review':'incomplete-or-failed';
  FIN.preliminary={path:OUT?OUT+'/child-result.json':null,bytes:null,sha256:null,exit:code,status:OUT?'attempting':'unavailable'};
  try { if(!OUT)throw new Error('output unavailable');Object.assign(FIN.preliminary,write('child-result.json',{record:'preliminary',authoritative:false,exit:code,result:R}),{status:'verified'}); }
  catch(e) { FIN.preliminary.status='write-or-readback-failed';R.secondaryErrors.push({phase:'preliminary-write',error:String(e.stack)});code=Math.max(code,6); }
  if(before&&OUT)try { const post=snapshot('post-preliminary');FIN.finalPreservation=preserveCompare(before,post);requireThat(FIN.finalPreservation.ok,'post-preliminary preservation mismatch'); }
  catch(e) { FIN.finalPreservation={ok:false,error:String(e.stack)};R.secondaryErrors.push({phase:'post-preliminary',error:String(e.stack)});code=Math.max(code,4); }
  if(!FIN.finalPreservation.ok)code=Math.max(code,4);
  requireThat(envHash()===START_ENV,'environment changed during finalization');
  if(OUT)try { write('evidence-manifest.json',{algorithm:'sha256-per-file',files:tree(OUT).details,excludes:['evidence-manifest.json','child-completion.json'],scope:'current attempt; not an execution-packet seal'}); }
  catch(e) { R.secondaryErrors.push({phase:'evidence-manifest',error:String(e.stack)});code=Math.max(code,6); }
  if(OUT)try { write('child-completion.json',terminal(code,{status:'proved by existence and read-back',contract:'Authoritative only on exact read-back; fallback supersedes partial file.'}));process.exitCode=code;return; }
  catch(e) { return fallback(Math.max(code,6),'completion-write-or-readback',e); }
  fallback(Math.max(code,6),'completion-unavailable',new Error('output unavailable'));
}
try { await main(); }
catch(e){R.findings.push({phase:R.phase,error:String(e.stack)});}
try { finalize(); }
catch(e){fallback(6,'finalization',e);}
