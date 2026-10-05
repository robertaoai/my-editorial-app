// `D-421` — proof for prune-stale-symbols.js: it retires only qualifying generated code nodes and
// their links, refuses a fragment-declared node, and is a no-op when nothing qualifies.

import { describe, expect, test } from "bun:test";
import { createRequire } from "node:module";

const { findStale, pruneGraph } = createRequire(import.meta.url)("./prune-stale-symbols.js");

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
