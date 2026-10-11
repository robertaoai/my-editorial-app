// B-156 F1 — frozen candidate inventory. Read-only: reads git objects at REV,
// writes one TSV and one JSON summary to the out dir. No shell.
// Usage: node b156-f1-inventory.mjs <repo> <rev> <outDir>
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const [repo, rev, out] = process.argv.slice(2);
const git = (...a) => execFileSync("git", ["-C", repo, ...a], { encoding: "utf8", maxBuffer: 1 << 26 });
const { classify } = await import(pathToFileURL(join(repo, "scripts/checks/lane-boundary.mjs")).href);
const laneOf = (p) => {
  const { byLane } = classify([p]);
  return [...byLane.keys()][0] ?? "unmapped";
};

const all = git("ls-tree", "-r", "--name-only", rev).split("\n").filter(Boolean);
const outside = all.filter((p) => !p.startsWith("docs/"));
const docsExec = all.filter((p) => /^docs\/graph-fragments\/.*\.(js|mjs)$/.test(p));
const fragJson = all.filter((p) => /^docs\/graph-fragments\/.*\.json$/.test(p));
const otherDocsJson = all.filter((p) => p.startsWith("docs/") && p.endsWith(".json") && !p.startsWith("docs/graph-fragments/"));
const logTxt = all.filter((p) => p.startsWith("docs/") && /\.(log|txt)$/.test(p));
const otherDocsNonMd = all.filter(
  (p) => p.startsWith("docs/") && !p.endsWith(".md") &&
    ![...docsExec, ...fragJson, ...otherDocsJson, ...logTxt].includes(p),
);

const phaseDoc = git("show", `${rev}:docs/v1/V1-PHASE-CLOSURE.md`);

function mentions(p) {
  let files = [];
  try {
    files = git("grep", "-F", "-l", "-e", p, rev, "--", "docs").split("\n").filter(Boolean)
      .map((l) => l.slice(rev.length + 1));
  } catch { files = []; } // exit 1 = no match
  files = files.filter((f) => f !== p && f.endsWith(".md"));
  const handoff = files.filter((f) => f.startsWith("docs/handoff/"));
  const gov = files.filter((f) => !f.startsWith("docs/handoff/"));
  return { gov, handoff };
}

// Class and use case are assigned by purpose; directory is only the first hint.
function classOf(p) {
  if (/^docs\/graph-fragments\/.*\.json$/.test(p)) return ["curated source data", "knowledgebase"];
  if (/^docs\/graph-fragments\/.*\.test\.mjs$/.test(p)) return ["verification (tooling test)", "knowledgebase"];
  if (/^docs\/graph-fragments\/.*\.js$/.test(p)) return ["tooling implementation", "knowledgebase"];
  if (p.endsWith("V1-SM05-jev-readiness.json")) return ["retained evidence", "product interface"];
  if (/^docs\/.*\.(log|txt)$/.test(p)) return ["retained evidence", "governance/docs"];
  if (p === "scripts/jev/manifests/V1-SM05.json") return ["control data", "product interface"];
  if (/^scripts\/jev\//.test(p)) return [p.endsWith("selftest.mjs") ? "verification (tooling test)" : "tooling implementation", "product interface"];
  if (p === "scripts/graphify/guarded-rebuild.mjs") return ["tooling implementation", "knowledgebase"];
  if (/^scripts\/fixtures\//.test(p)) return ["verification (tooling test)", "governance/docs"];
  if (/^scripts\/(check-consistency|lane-gate)\.mjs$|^scripts\/checks\//.test(p) || p === ".githooks/commit-msg")
    return ["control (check or gate)", "governance/docs"];
  if (/^(AGENTS|CLAUDE|GEMINI)\.md$/.test(p) || p === ".agents/workflows/graphify.md" || p.startsWith(".claude/skills/"))
    return ["agent instruction", p.includes("graphify") ? "knowledgebase" : "governance/docs"];
  if (p.startsWith(".github/workflows/")) return ["workflow", "project setup"];
  if (p.startsWith(".github/")) return ["channel template or spec", "governance/docs"];
  if (/^__tests__\/|^supabase\/tests\//.test(p)) return ["verification (product test)", "product codebase"];
  if (p.startsWith("supabase/migrations/")) return ["schema", "product codebase"];
  if (/^lib\/config\//.test(p)) return ["application configuration", "product codebase"];
  if (/^(app|lib)\//.test(p) || p === "middleware.ts") return ["application implementation", "product codebase"];
  if (p === ".onlyaiapp" || p === "README.md") return ["metadata", "project setup"];
  return ["configuration", p.startsWith("supabase/") ? "product codebase" : "project setup"];
}

// Exclusions from the semantic audit carry a reason; they stay in the inventory.
const EXCLUDE = {
  "bun.lockb": "derived lockfile; audited through package.json and the D-86 provisioning path",
  "README.md": "template boilerplate, not authoritative (AGENTS.md, D5); recorded as metadata only",
};
const NOTE = {
  "supabase/migrations/0001_init.sql": "frozen authority (AGENTS.md Never list); audit agreement only, no repair",
  ".onlyaiapp": "platform initialization marker; no governing intent found yet",
  "docs/handoff/artifacts/B-131/System_Encyclopedia_V15.txt": "retained external evidence; Encyclopedia itself is an artifact outside the repo",
};

const UNMENTIONED = new Set([".onlyaiapp", "app/api/health/route.ts", "app/globals.css", "app/layout.tsx", "lib/supabase/client.ts", "supabase/.gitignore"]);
const HANDOFF_ONLY = new Set(["scripts/checks/terminal-return.mjs", "supabase/tests/database/s1_transition_enforcement.test.sql"]);

const groups = [
  ["G1 outside docs/", outside],
  ["G2 executables in docs/graph-fragments/", docsExec],
  ["G3 curated JSON in docs/graph-fragments/", fragJson],
  ["G4 other JSON under docs/", otherDocsJson],
  ["G5 log and text under docs/", logTxt],
  ["G6 other non-Markdown under docs/", otherDocsNonMd],
];

const rows = [];
for (const [group, paths] of groups) {
  for (const p of paths) {
    const [cls, useCase] = classOf(p);
    const m = mentions(p);
    const state = m.gov.length ? "governing-doc mention" : m.handoff.length ? "handoff-only mention" : "no mention";
    let order;
    if (UNMENTIONED.has(p)) order = 1;
    else if (HANDOFF_ONLY.has(p)) order = 2;
    else if (group.startsWith("G2")) order = 3;
    else if (group.startsWith("G1")) order = 4;
    else order = 5;
    rows.push({
      order, group: group.split(" ")[0], path: p, lane: laneOf(p), class: cls, useCase,
      mention: state, govMentions: m.gov.length, handoffMentions: m.handoff.length,
      firstGoverningDoc: m.gov.sort()[0] ?? "",
      phaseManifest: phaseDoc.includes("`" + p + "`") ? "yes" : "no",
      applicability: EXCLUDE[p] ? "excluded" : "included",
      reason: EXCLUDE[p] ?? NOTE[p] ?? "",
    });
  }
}
rows.sort((a, b) => a.order - b.order || a.group.localeCompare(b.group) || a.path.localeCompare(b.path));

const cols = ["order", "group", "path", "lane", "class", "useCase", "mention", "govMentions", "handoffMentions", "firstGoverningDoc", "phaseManifest", "applicability", "reason"];
const tsv = [cols.join("\t"), ...rows.map((r) => cols.map((c) => String(r[c])).join("\t"))].join("\n") + "\n";
writeFileSync(join(out, "F1-candidates-1640ff7.tsv"), tsv, { encoding: "utf8" });

const count = (k) => rows.reduce((acc, r) => ((acc[r[k]] = (acc[r[k]] ?? 0) + 1), acc), {});
const summary = {
  revision: git("rev-parse", rev).trim(),
  method: "git ls-tree -r --name-only <rev>; git grep -F -l -e <path> <rev> -- docs (Markdown hits only, self excluded); lane from scripts/checks/lane-boundary.mjs classify; phase manifest = backticked path in docs/v1/V1-PHASE-CLOSURE.md at <rev>",
  totalTracked: all.length,
  groups: Object.fromEntries(groups.map(([g, p]) => [g, p.length])),
  candidates: rows.length,
  included: rows.filter((r) => r.applicability === "included").length,
  excluded: rows.filter((r) => r.applicability === "excluded").length,
  byOrder: count("order"), byLane: count("lane"), byClass: count("class"), byUseCase: count("useCase"), byMention: count("mention"),
  unmappedLane: rows.filter((r) => r.lane === "unmapped").map((r) => r.path),
  reconciled: rows.length === groups.reduce((n, [, p]) => n + p.length, 0) && new Set(rows.map((r) => r.path)).size === rows.length,
};
writeFileSync(join(out, "F1-summary-1640ff7.json"), JSON.stringify(summary, null, 2) + "\n", { encoding: "utf8" });
console.log(JSON.stringify(summary, null, 2));
