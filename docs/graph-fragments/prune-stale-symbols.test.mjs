// `D-421` — proof for prune-stale-symbols.js: it retires only qualifying generated code nodes and
// their links, refuses a fragment-declared node, and is a no-op when nothing qualifies.

import { afterAll, describe, expect, test } from "bun:test";
import { createRequire } from "node:module";
import fs from "node:fs";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const { findStale, pruneGraph, runPrune } = createRequire(import.meta.url)("./prune-stale-symbols.js");

const node = (id, file_type = "code", source_file = "scripts/x.mjs") => ({ id, file_type, source_file });
const current = {
  nodes: [node("x_live"), node("x_stale"), node("concept_a", "concept", "docs/a.md"), node("commit:repo:r@1", "commit", undefined), node("x_curated_code")],
  links: [
    { source: "x_live", target: "x_stale", relation: "contains" },
    { source: "concept_a", target: "x_live", relation: "describes" },
    { source: "x_stale", target: "concept_a", relation: "mentions" },
  ],
};
const fresh = { nodes: [node("x_live")] };

describe("prune-stale-symbols (D-421)", () => {
  test("retires only code nodes absent from the fresh extraction and not curated", () => {
    const { retire, refuse } = findStale(current, fresh, new Set(["concept_a"]));
    expect(retire.map((r) => r.id).sort()).toEqual(["x_curated_code", "x_stale"]);
    expect(refuse).toEqual([]);
  });

  test("a concept, commit or any non-code node is never a candidate, even when absent from fresh", () => {
    const { retire } = findStale(current, fresh, new Set());
    expect(retire.map((r) => r.id)).not.toContain("concept_a");
    expect(retire.map((r) => r.id)).not.toContain("commit:repo:r@1");
  });

  test("a fragment-declared code node absent from fresh is refused, not retired", () => {
    const { retire, refuse } = findStale(current, fresh, new Set(["x_curated_code"]));
    expect(refuse.map((r) => r.id)).toEqual(["x_curated_code"]);
    expect(retire.map((r) => r.id)).toEqual(["x_stale"]);
  });

  test("pruning removes the nodes and every incident link, nothing else", () => {
    const { graph, linksRemoved } = pruneGraph(current, ["x_stale"]);
    expect(graph.nodes.map((n) => n.id)).not.toContain("x_stale");
    expect(graph.nodes.length).toBe(current.nodes.length - 1);
    expect(linksRemoved).toBe(2);
    expect(graph.links).toEqual([{ source: "concept_a", target: "x_live", relation: "describes" }]);
  });

  test("no qualifying node: a no-op that leaves the graph unchanged", () => {
    const all = { nodes: current.nodes };
    const { retire } = findStale(current, all, new Set());
    expect(retire).toEqual([]);
    const { graph, linksRemoved } = pruneGraph(current, []);
    expect(graph).toEqual(current);
    expect(linksRemoved).toBe(0);
  });
});

// `D-423` — completion is proven by re-reading the persisted graph, never by a printed line.
describe("prune completion is verified, not printed (D-423)", () => {
  const TMP = mkdtempSync(join(tmpdir(), "prune-"));
  afterAll(() => rmSync(TMP, { recursive: true, force: true }));
  const head = "693a6a79e5ef7b8e1334881ce629017d80ba1250";
  const setup = (name) => {
    const d = join(TMP, name);
    mkdirSync(join(d, "fresh"), { recursive: true });
    mkdirSync(join(d, "frags"), { recursive: true });
    writeFileSync(join(d, "graph.json"), JSON.stringify(current));
    writeFileSync(join(d, "branch.json"), JSON.stringify({ lastAnalyzedHead: head }));
    writeFileSync(join(d, "fresh", "graph.json"), JSON.stringify(fresh));
    writeFileSync(join(d, "fresh", "branch.json"), JSON.stringify({ lastAnalyzedHead: head }));
    writeFileSync(join(d, "frags", "frag1.json"), JSON.stringify({ nodes: [{ id: "concept_a" }] }));
    return { d, args: { freshDir: join(d, "fresh"), gpath: join(d, "graph.json"), branchPath: join(d, "branch.json"), fragmentsDir: join(d, "frags") } };
  };

  test("an ordinary run reports completion only after the persisted graph is verified", () => {
    const { d, args } = setup("ok");
    const r = runPrune(args);
    expect(r.code).toBe(0);
    expect(r.lines[0]).toStartWith("plan: retire 2");
    expect(r.lines.at(-1)).toContain("verified absent in the persisted graph");
    const g = JSON.parse(readFileSync(join(d, "graph.json"), "utf8"));
    expect(g.nodes.some((n) => n.id === "x_stale")).toBe(false);
  });

  test("a dry run leaves the graph bytes equal and claims nothing", () => {
    const { d, args } = setup("dry");
    const before = readFileSync(join(d, "graph.json"));
    const r = runPrune({ ...args, dryRun: true });
    expect(r.code).toBe(0);
    expect(readFileSync(join(d, "graph.json")).equals(before)).toBe(true);
    expect(r.lines.some((l) => l.startsWith("retired"))).toBe(false);
  });

  test("a failed write exits nonzero with no completion claim", () => {
    const { args } = setup("writefail");
    const io = { ...fs, writeFileSync: () => { const e = new Error("disk full"); e.code = "ENOSPC"; throw e; } };
    const r = runPrune({ ...args, io });
    expect(r.code).toBe(1);
    expect(r.lines.some((l) => l.startsWith("retired"))).toBe(false);
    expect(r.lines.at(-1)).toContain("FAILED: the write did not complete");
  });

  test("persisted bytes that still hold a planned id fail verification", () => {
    const { args } = setup("stale-write");
    const io = { ...fs, writeFileSync: () => {} }; // the write "succeeds" but nothing changes on disk
    const r = runPrune({ ...args, io });
    expect(r.code).toBe(1);
    expect(r.lines.at(-1)).toContain("retirement is unverified");
    expect(r.lines.some((l) => l.startsWith("retired"))).toBe(false);
  });

  test("selection, fragment refusal and the commit binding are unchanged", () => {
    const { args } = setup("refuse");
    writeFileSync(join(args.fragmentsDir, "frag2.json"), JSON.stringify({ nodes: [{ id: "x_curated_code" }] }));
    expect(runPrune(args).code).toBe(1);
    const { args: a2 } = setup("othercommit");
    writeFileSync(join(a2.freshDir, "branch.json"), JSON.stringify({ lastAnalyzedHead: "0".repeat(40) }));
    const r = runPrune(a2);
    expect(r.code).toBe(1);
    expect(r.lines[0]).toContain("must be the same commit");
  });
});
