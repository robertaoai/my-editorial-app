
import { createHash } from "node:crypto";
import { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
// Scratch comes exclusively from the fixed child output; no temporary-directory environment change.
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";
const o = JSON.parse(process.argv[2]);
const P = await import(pathToFileURL(o.index).href);
const f = [], summary = {};
const J = (p) => JSON.parse(readFileSync(p, "utf8"));
const sha = (b) => createHash("sha256").update(b).digest("hex");
const same = (a, b) => isDeepStrictEqual(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)));
const list = (root) => { const out = []; (function w(d) { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) w(p); else if (e.isFile()) out.push(p.slice(root.length + 1).split(/[\\/]/).join("/")); } })(root); return out.sort(); };
const studio = join(o.state, "studio");
const has = (rel) => existsSync(join(studio, rel));
try {
  const graph = J(join(o.state, "graph.json"));
  // Inputs: every export input under ontology/ is classified; anything else refuses.
  const INPUTS = new Set(["citations.json", "occurrences.json", "reconciliation/candidates.json"]);
  const onto = join(o.state, "ontology");
  for (const rel of existsSync(onto) ? list(onto) : []) {
    if (!INPUTS.has(rel)) f.push("unclassified export input: ontology/" + rel);
    J(join(onto,rel)); // malformed optional JSON must not become a producer empty fallback
  }
  if (has("scene-hierarchies.json")) f.push("unexpected hierarchy output for this fixed no-profile candidate");
  // Inventory: generated data, or the pinned tool's shipped file byte for byte; nothing else.
  const GENERATED = new Set(["graph.json", "scene.json", "entities.json", "reconciliation-candidates.json", "workspace-manifest.json", "studio.html", "scene-hierarchies.json", "ontology/citations.json"]);
  const files = has("") ? list(studio) : [];
  for (const rel of files) {
    if (GENERATED.has(rel)) continue;
    const want = o.shipped?.files?.[rel];
    if (!want) f.push("unknown promoted studio file: " + rel);
    else if (sha(readFileSync(join(studio, rel))) !== want) f.push("shipped file differs from the pinned tool: " + rel);
  }
  for (const rel of Object.keys(o.shipped?.files ?? {})) if (!files.includes(rel)) f.push("shipped file missing: " + rel);
  if (!o.shipped) f.push("the pinned tool's shipped studio files are not bound");
  for (const rel of ["graph.json", "scene.json", "entities.json", "reconciliation-candidates.json", "workspace-manifest.json", "studio.html"]) if (!has(rel)) f.push("missing derived file: " + rel);
  if (!f.some((x) => x.startsWith("missing derived"))) {
    // Graph copy: semantic equality with the final root graph.
    if (!same(J(join(studio, "graph.json")), graph)) f.push("studio/graph.json is not the final root graph");
    // Scene: every derived field; layout coordinates excluded by name.
    const strip = (s) => ({ ...s, nodes: (s.nodes ?? []).map(({ x, y, fx, fy, ...r }) => r) });
    const scene = J(join(studio, "scene.json"));
    const expectScene = P.buildStudioScene(graph, {});
    if (!same(strip(expectScene), strip(scene))) {
      const e = strip(JSON.parse(JSON.stringify(expectScene))), a = strip(scene);
      const part = ["nodes", "edges", "communityColors", "stats"].find((k) => !isDeepStrictEqual(e[k], a[k])) ?? "keys";
      f.push("scene.json differs from the producer projection in " + part);
    }
    summary.scene = { nodes: scene.nodes?.length, edges: scene.edges?.length };
    // Entities: the structured sidecar of every final node.
    const ent = {};
    for (const n of graph.nodes ?? []) if (typeof n.id === "string" && n.id) ent[n.id] = P.buildEntitySidecar(o.state, n.id, n);
    const actualEnt = J(join(studio, "entities.json"));
    if (!same(ent, actualEnt)) {
      const bad = Object.keys(ent).filter((k) => !same(ent[k], actualEnt[k])).concat(Object.keys(actualEnt).filter((k) => !(k in ent)));
      f.push("entities.json differs from the producer sidecars: " + bad.slice(0, 3).join(", "));
    }
    // Reconciliation: the pinned queue query; a malformed queue refuses (no empty fallback).
    const queue = join(o.state, "ontology", "reconciliation", "candidates.json");
    let recon = { items: [], total: 0 };
    if (existsSync(queue)) {
      try { recon = P.queryOntologyReconciliationCandidates(P.loadOntologyReconciliationCandidates(queue), { sort: "score", order: "desc", stale: false }); }
      catch (e) { f.push("the reconciliation queue is malformed: " + String(e.message).split("\n")[0]); recon = null; }
    }
    if (recon && !same(recon, J(join(studio, "reconciliation-candidates.json")))) f.push("reconciliation-candidates.json is not the pinned queue query");
    // Citations: signature, node records and counts; the copied sidecar's bytes.
    const citePath = join(o.state, "ontology", "citations.json");
    const inline = (graph.nodes ?? []).filter((n) => Array.isArray(n.citations) && n.citations.length);
    if (existsSync(citePath)) {
      const c = J(citePath);
      if (c.schema !== "graphify_ontology_citations_v1") f.push("citations schema");
      if (c.graph_signature !== P.computeGraphCitationSignatureFromJson(graph)) f.push("the citation signature is not the final graph's");
      if (!isDeepStrictEqual(Object.keys(c.nodes ?? {}).sort(), inline.map((n) => n.id).sort())) f.push("citation node records do not match the final graph's cited nodes");
      for (const n of inline) {
        const r = c.nodes?.[n.id];
        if (!r) continue;
        const pool = new Set((r.citations ?? []).map((x) => JSON.stringify(x)));
        if (typeof n.citation_count === "number" && r.count !== n.citation_count) f.push("citation count differs: " + n.id);
        else if (!(r.count >= (r.citations ?? []).length) || !n.citations.every((x) => pool.has(JSON.stringify(x)))) f.push("citation record does not contain the inline citations: " + n.id);
      }
      if (!has("ontology/citations.json") || !readFileSync(citePath).equals(readFileSync(join(studio, "ontology", "citations.json")))) f.push("the copied citations sidecar differs from the frozen sidecar");
    } else {
      if (inline.length) f.push("cited nodes exist but there is no citations sidecar");
      if (has("ontology/citations.json")) f.push("a citations copy exists without its source sidecar");
    }
    // Manifest: re-emitted by the pinned producer over the actual bytes; the graph entry is the binding.
    const m = J(join(studio, "workspace-manifest.json"));
    const T = o.scratch;
    try {
      cpSync(studio, T, { recursive: true, errorOnExist: true, force: false });
      writeFileSync(join(T, "../manifest-original.json"), readFileSync(join(T, "workspace-manifest.json")), { flag: "wx" });
      const em = P.emitWorkspaceManifest({ bundleDir: T, generatedAt: m.generated_at }).manifest;
      if (!same(em, m)) f.push("workspace-manifest.json is not the producer manifest of the bundle bytes");
    } finally { /* preserve scratch including partial producer output on every outcome */ }
    const g = (m.artifacts ?? []).filter((a) => a.name === "graph");
    if (g.length !== 1 || g[0].present !== true || g[0].path !== "graph.json" || g[0].sha256 !== sha(readFileSync(join(studio, "graph.json")))) f.push("the manifest's graph entry does not bind studio/graph.json");
    if (m.graph_hash !== null) f.push("top-level graph_hash is not the producer's null");
    summary.manifest = { present: m.present_count, artifacts: m.artifacts?.length };
    // Embedded bundle: parsed as data, never executed. Default: exactly the validated scene.
    const html = readFileSync(join(studio, "studio.html"), "utf8");
    const marker = "window.__GRAPHIFY_BUNDLE__ = JSON.parse(";
    const parts = html.split(marker);
    if (parts.length !== 2) f.push("studio.html carries " + (parts.length - 1) + " bundle literals, not one");
    else {
      const end = parts[1].indexOf(");</script>");
      let bundle = null;
      try { bundle = JSON.parse(JSON.parse(parts[1].slice(0, end))); } catch { f.push("the embedded bundle is not a JSON string literal of JSON"); }
      if (bundle) {
        const want = o.fullOffline ? ["entities.json", "graph.json", "scene.json"] : ["scene.json"];
        if (!isDeepStrictEqual(Object.keys(bundle).sort(), want)) f.push("the embedded bundle advertises " + Object.keys(bundle).sort().join(", "));
        if (!same(bundle["scene.json"], scene)) f.push("the embedded scene is not the validated scene.json");
        if (o.fullOffline && (!same(bundle["graph.json"], graph) || !same(bundle["entities.json"], actualEnt))) f.push("the embedded graph or entities differ");
      }
    }
  }
} catch (e) {
  f.push("studio validation failed: " + String(e.message).split("\n")[0]);
}
process.stdout.write(JSON.stringify({ findings: f, summary,
 completed:f.length?[]:["graph","scene","entities","reconciliation","citations","manifest","embedded-bundle","shipped-assets"] }));
process.exitCode=f.length?2:0;
