// B-156 F2c — measures the 146 F2c paths (G3 142 curated JSON, G4 1 Jev receipt, G5 3 log/text) at the frozen
// revision. Reads Git objects and, read-only, the live graph file for endpoint resolution. Spawns no shell.
// Every Git read must succeed (the F2a-R1 rule); any failure stops with exit 2 before a file is written.
//
//   node F2c-measure.mjs <repo> <inventory tsv> <out dir>
//
// Measured (literal observations, not semantic findings):
//   G3  parse status; kind (fragment | detect manifest); nodes; edges; node source files tracked at the frozen
//       revision; edge endpoints resolved in the same fragment, another fragment, or the live graph; node ids
//       repeated across fragments with differing content; term-probe hits (PROBES) per node.
//   G4  the receipt's evaluated revision, results ok/failed, and whether each recorded source sha256 equals the
//       source's bytes at the evaluated revision and at the frozen revision.
//   G5  size, sha256, and the handoff lines at the frozen revision that name the file.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const REV = "1640ff7bc1b7d1e70ab6a421ced8a054dafda993";
// Terms taken from the F2a/F2b differences and the AG-1/AG-2 findings. A hit is a node to read, not a finding.
export const PROBES = ["shared-core-hash", "ignoreDuringBuilds", "byte-identical", ".agents/rules/graphify.md", "Stripe", "gstack"];

const [repo, tsvPath, outDir] = process.argv.slice(2);
if (!repo || !tsvPath || !outDir) { console.error("usage: node F2c-measure.mjs <repo> <inventory tsv> <out dir>"); process.exit(2); }
const failures = [];
const git = (args, enc = "utf8") => spawnSync("git", ["-C", repo, ...args], { encoding: enc, maxBuffer: 1 << 28 });
const must = (args, what, enc) => {
  const r = git(args, enc);
  if (r.error || r.status !== 0) { failures.push(`${what}: exit ${r.status} ${String(r.stderr ?? "").trim()}`); return null; }
  return r.stdout;
};
const sha = (b) => createHash("sha256").update(b).digest("hex");
const stop = () => { console.error(`F2c measurement STOPPED: ${failures.length} failure(s); nothing written.`); failures.forEach((f) => console.error(`  - ${f}`)); process.exit(2); };

const head = String(must(["rev-parse", "--verify", "HEAD^{commit}"], "HEAD") ?? "").trim();
must(["rev-parse", "--verify", `${REV}^{commit}`], "frozen revision");
const treeOid = (rev, p) => {
  const out = must(["ls-tree", rev, "--", p], `ls-tree ${rev} ${p}`);
  if (out === null) return undefined;
  const line = String(out).split("\n").find((l) => l.endsWith(`\t${p}`));
  return line ? line.split(/\s+/)[2] : null;
};
const tracked = new Set(String(must(["ls-tree", "-r", "--name-only", REV], "ls-tree -r") ?? "").split("\n"));
if (failures.length) stop();

const tsvRaw = readFileSync(tsvPath, "utf8");
const [hdr, ...body] = tsvRaw.trimEnd().split("\n");
const cols = hdr.split("\t");
const col = (r, n) => r[cols.indexOf(n)];
const rows = body.map((l) => l.split("\t")).filter((r) => ["G3", "G4", "G5"].includes(col(r, "group")) && col(r, "applicability") === "included")
  .map((r) => ({ path: col(r, "path"), group: col(r, "group"), lane: col(r, "lane") }));
if (rows.length !== 146) { console.error(`expected 146 F2c paths, derived ${rows.length}; nothing written`); process.exit(2); }

// Live graph: read-only, identified by hash and its recorded analysed head.
const graphPath = join(repo, ".graphify", "graph.json");
const branchPath = join(repo, ".graphify", "branch.json");
if (!existsSync(graphPath) || !existsSync(branchPath)) { console.error("live graph or branch record missing; nothing written"); process.exit(2); }
const graphBytes = readFileSync(graphPath);
const liveIds = new Set(JSON.parse(graphBytes.toString("utf8")).nodes.map((n) => n.id));
const branch = JSON.parse(readFileSync(branchPath, "utf8"));

// First pass over G3: parse every fragment and index node ids.
const frag = new Map();
const byId = new Map();
for (const r of rows.filter((x) => x.group === "G3")) {
  const text = must(["show", `${REV}:${r.path}`], `show ${r.path}`);
  if (text === null) continue;
  let j; try { j = JSON.parse(text); } catch (e) { frag.set(r.path, { parse: `error: ${e.message}` }); continue; }
  frag.set(r.path, { parse: "ok", j });
  for (const n of j.nodes ?? []) {
    const sig = JSON.stringify({ l: n.label, d: n.description, s: n.source_file, loc: n.source_location });
    if (!byId.has(n.id)) byId.set(n.id, []);
    byId.get(n.id).push({ path: r.path, sig });
  }
}
if (failures.length) stop();

const out = rows.map((r) => {
  const frozenBlob = treeOid(REV, r.path), headBlob = treeOid("HEAD", r.path);
  const base = { path: r.path, group: r.group, lane: r.lane, frozenBlob, headBlob, unchangedAtHead: !!frozenBlob && frozenBlob === headBlob };
  if (r.group === "G3") {
    const f = frag.get(r.path);
    if (f.parse !== "ok") return { ...base, kind: "unparseable", parse: f.parse };
    const j = f.j;
    if (!Array.isArray(j.nodes)) return { ...base, kind: "detect manifest", parse: "ok", keys: Object.keys(j) };
    const own = new Set(j.nodes.map((n) => n.id));
    const missingSources = j.nodes.filter((n) => n.source_file && !/^https?:/.test(n.source_file) && !tracked.has(n.source_file)).map((n) => `${n.id} -> ${n.source_file}`);
    const unresolved = [];
    let inOwn = 0, inOther = 0, inLive = 0;
    for (const e of j.edges ?? []) for (const end of [e.source, e.target]) {
      if (own.has(end)) inOwn++; else if (byId.has(end)) inOther++; else if (liveIds.has(end)) inLive++; else unresolved.push(end);
    }
    const conflicts = j.nodes.filter((n) => new Set((byId.get(n.id) ?? []).map((x) => x.sig)).size > 1).map((n) => n.id);
    const probeHits = [];
    for (const n of j.nodes) for (const p of PROBES) if (`${n.description ?? ""} ${n.label ?? ""}`.includes(p)) probeHits.push({ node: n.id, term: p });
    return { ...base, kind: "fragment", parse: "ok", nodes: j.nodes.length, edges: (j.edges ?? []).length,
      missingSources, endpoints: { inOwn, inOther, inLive, unresolved: [...new Set(unresolved)] }, conflictingIds: conflicts, probeHits };
  }
  if (r.group === "G4") {
    const text = must(["show", `${REV}:${r.path}`], `show ${r.path}`);
    if (text === null) return base;
    const j = JSON.parse(text);
    const at = j.evaluatedAt;
    const sources = (j.sources ?? []).map((s) => {
      const atEval = must(["show", `${at}:${s.path}`], `show ${at}:${s.path}`, "buffer");
      const atFrozen = must(["show", `${REV}:${s.path}`], `show ${REV}:${s.path}`, "buffer");
      return { path: s.path, recorded: s.sha256, matchesAtEvaluated: atEval ? sha(atEval) === s.sha256 : null, matchesAtFrozen: atFrozen ? sha(atFrozen) === s.sha256 : null };
    });
    const res = j.results ?? [];
    return { ...base, kind: "jev readiness receipt", evaluatedAt: at, mode: j.mode, packet: j.packet, results: res.length, ok: res.filter((x) => x.ok).length, sources };
  }
  const bytes = must(["show", `${REV}:${r.path}`], `show ${r.path}`, "buffer");
  const cites = String(must(["grep", "-n", "-F", basename(r.path), REV, "--", "docs/handoff/*.md"], `grep ${r.path}`) ?? "")
    .split("\n").filter(Boolean).map((l) => l.replace(`${REV}:`, "").slice(0, 160));
  return { ...base, kind: "retained evidence", bytes: bytes ? bytes.length : null, sha256: bytes ? sha(bytes) : null, citedBy: cites };
});
if (failures.length) stop();

const g3 = out.filter((r) => r.group === "G3");
const summary = {
  schema: "B-156 F2c measurement v1", frozenRevision: REV, head,
  inventorySha256: sha(tsvRaw), scriptSha256: sha(readFileSync(fileURLToPath(import.meta.url))),
  liveGraph: { sha256: sha(graphBytes), lastAnalyzedHead: branch.lastAnalyzedHead, stale: branch.stale },
  probes: PROBES,
  paths: out.length, unchangedAtHead: out.filter((r) => r.unchangedAtHead).length,
  g3: { fragments: g3.filter((r) => r.kind === "fragment").length, detectManifests: g3.filter((r) => r.kind === "detect manifest").length,
    nodes: g3.reduce((s, r) => s + (r.nodes ?? 0), 0), edges: g3.reduce((s, r) => s + (r.edges ?? 0), 0),
    missingSources: g3.reduce((s, r) => s + (r.missingSources?.length ?? 0), 0),
    unresolvedEndpoints: g3.reduce((s, r) => s + (r.endpoints?.unresolved.length ?? 0), 0),
    conflictingIds: g3.reduce((s, r) => s + (r.conflictingIds?.length ?? 0), 0),
    probeHits: g3.reduce((s, r) => s + (r.probeHits?.length ?? 0), 0) },
  rows: out,
};
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const file = join(outDir, "F2c-measure-1640ff7.json");
writeFileSync(file, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
console.log(`F2c measurement ok: ${summary.paths} paths, ${summary.unchangedAtHead} unchanged at HEAD ${head.slice(0, 7)}; G3 ${JSON.stringify(summary.g3)}; wrote ${file}`);
