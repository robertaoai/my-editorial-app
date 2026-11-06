// B-156 F1 revision 2 — frozen candidate inventory, corrected for Lane B F1-R1..R4.
// Reads git objects at REV only. The lane classifier and the phase document are
// read from REV, never from the working tree (F1-R3). Any git error other than
// grep's no-match stops the run before anything is written (F1-R4). Labels other
// than measured fields are PROPOSED; F2 assesses meaning and authority (F1-R2).
// Usage: node F1-inventory-r2.mjs <repo> <rev> <outDir>
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const [repo, revArg, out] = process.argv.slice(2);
if (!repo || !revArg || !out) throw new Error("usage: node F1-inventory-r2.mjs <repo> <rev> <outDir>");
const git = (...a) => execFileSync("git", ["-C", repo, ...a], { encoding: "utf8", maxBuffer: 1 << 26, stdio: ["ignore", "pipe", "pipe"] });
const sha256 = (s) => createHash("sha256").update(s).digest("hex");
const rev = git("rev-parse", "--verify", `${revArg}^{commit}`).trim();

// F1-R3 — classifier pinned to the frozen blob.
const CLASSIFIER = "scripts/checks/lane-boundary.mjs";
const classifierBlob = git("rev-parse", `${rev}:${CLASSIFIER}`).trim();
const classifierText = git("show", `${rev}:${CLASSIFIER}`);
const tmp = mkdtempSync(join(tmpdir(), "b156-f1-"));
let classify;
try {
  const f = join(tmp, "lane-boundary.mjs");
  writeFileSync(f, classifierText, "utf8");
  ({ classify } = await import(pathToFileURL(f).href));
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
let workingTreeClassifierBlob = null;
try { workingTreeClassifierBlob = git("hash-object", join(repo, CLASSIFIER)).trim(); } catch { /* informational only */ }
const laneOf = (p) => [...classify([p]).byLane.keys()][0] ?? "unmapped";

const all = git("ls-tree", "-r", "--name-only", rev).split("\n").filter(Boolean);
const blobOf = new Map(
  git("ls-tree", "-r", rev).split("\n").filter(Boolean).map((l) => {
    const [meta, path] = l.split("\t");
    return [path, meta.split(" ")[2]];
  }),
);
const outside = all.filter((p) => !p.startsWith("docs/"));
const docsExec = all.filter((p) => /^docs\/graph-fragments\/.*\.(js|mjs)$/.test(p));
const fragJson = all.filter((p) => /^docs\/graph-fragments\/.*\.json$/.test(p));
const otherDocsJson = all.filter((p) => p.startsWith("docs/") && p.endsWith(".json") && !p.startsWith("docs/graph-fragments/"));
const logTxt = all.filter((p) => p.startsWith("docs/") && /\.(log|txt)$/.test(p));
const known = new Set([...docsExec, ...fragJson, ...otherDocsJson, ...logTxt]);
const otherDocsNonMd = all.filter((p) => p.startsWith("docs/") && !p.endsWith(".md") && !known.has(p));

// F1-R2 — §5A membership from the actual manifest rows (same grammar as
// scripts/checks/phase-manifest.mjs), not from any backticked hit.
const PHASE_DOC = "docs/v1/V1-PHASE-CLOSURE.md";
const SECTION = /^#{2,4}\s+5A\.(\d)\b/;
const END = /^#{2,4}\s+5B\b/;
const FIRST_CELL = /^\|([^|]*)\|/;
const ROW_ANY = /^\|(?!\s*[-: ]+\s*\|)/;
const manifestRow = new Map();
{
  let sub = null;
  for (const line of git("show", `${rev}:${PHASE_DOC}`).split("\n")) {
    if (END.test(line)) break;
    const h = SECTION.exec(line);
    if (h) { sub = Number(h[1]); continue; }
    if (sub === null || !ROW_ANY.test(line)) continue;
    const cell = FIRST_CELL.exec(line);
    if (!cell) continue;
    for (const m of cell[1].matchAll(/`([^`]+)`/g)) {
      const label = sub === 6 ? "§5A.6 exclusion row" : `§5A.${sub} row`;
      manifestRow.set(m[1], [...new Set([...(manifestRow.get(m[1]) ?? []), label])]);
    }
  }
}

// F1-R4 — exit 1 with empty stderr is git grep's no-match; anything else stops the run.
const errors = [];
function literalHits(p) {
  let files;
  try {
    files = git("grep", "-F", "-l", "-e", p, rev, "--", "docs").split("\n").filter(Boolean)
      .map((l) => l.slice(rev.length + 1));
  } catch (e) {
    if (e.status === 1 && String(e.stderr ?? "").trim() === "") files = [];
    else { errors.push({ path: p, status: e.status, stderr: String(e.stderr ?? "").trim() }); return null; }
  }
  files = files.filter((f) => f !== p && f.endsWith(".md"));
  return {
    outsideHandoff: files.filter((f) => !f.startsWith("docs/handoff/")).sort(),
    handoff: files.filter((f) => f.startsWith("docs/handoff/")).sort(),
  };
}

// F1-R2 — artifact role and use case are PROPOSED labels from declared rules.
const PROJECTION = "governance/docs searchable projection (operative under D-425/D-426; no retrieval scope implied)";
const PRODUCT_FACING = "product-facing setup source (no SM05 delivery credit)";
function proposed(p) {
  if (/^docs\/graph-fragments\/.*\.json$/.test(p)) return ["curated source data", PROJECTION];
  if (/^docs\/graph-fragments\/.*\.test\.mjs$/.test(p)) return ["tooling test", PROJECTION];
  if (/^docs\/graph-fragments\/.*\.js$/.test(p)) return ["tooling implementation", PROJECTION];
  if (p === "scripts/graphify/guarded-rebuild.mjs" || p === ".agents/workflows/graphify.md")
    return [p.endsWith(".md") ? "agent instruction" : "tooling implementation", PROJECTION];
  if (p.endsWith("V1-SM05-jev-readiness.json")) return ["retained evidence", "product verification interface (Jev)"];
  if (p === "scripts/jev/manifests/V1-SM05.json") return ["control data", "product verification interface (Jev)"];
  if (/^scripts\/jev\//.test(p)) return [p.endsWith("selftest.mjs") ? "tooling test" : "tooling implementation", "product verification interface (Jev)"];
  if (/^docs\/.*\.(log|txt)$/.test(p)) return ["retained evidence", "governance/docs"];
  if (/^scripts\/fixtures\//.test(p)) return ["tooling test", "governance/docs"];
  if (/^scripts\/(check-consistency|lane-gate)\.mjs$|^scripts\/checks\//.test(p) || p === ".githooks/commit-msg")
    return ["control (check or gate)", "governance/docs"];
  if (/^(AGENTS|CLAUDE|GEMINI)\.md$/.test(p) || p.startsWith(".claude/skills/")) return ["agent instruction", "governance/docs"];
  if (p.startsWith(".github/workflows/")) return ["workflow", "project setup"];
  if (p.startsWith(".github/")) return ["channel template or spec", "governance/docs"];
  if (/^__tests__\/|^supabase\/tests\//.test(p)) return ["product-facing test", PRODUCT_FACING];
  if (p.startsWith("supabase/migrations/")) return ["schema", PRODUCT_FACING];
  if (/^lib\/config\//.test(p)) return ["application configuration", PRODUCT_FACING];
  if (/^(app|lib)\//.test(p) || p === "middleware.ts") return ["application implementation", PRODUCT_FACING];
  if (p === "bun.lockb") return ["reproducibility control", "project setup"];
  if (p === ".onlyaiapp" || p === "README.md") return ["metadata", "project setup"];
  return ["configuration", p.startsWith("supabase/") ? PRODUCT_FACING : "project setup"];
}

// Governing-source status is NOT derived from hits. Only recorded authority is named; the rest is unassessed.
const GOVERNING = {
  "supabase/migrations/0001_init.sql": "frozen authority (AGENTS.md Never list); read-only",
  "README.md": "not authoritative (AGENTS.md, D5)",
  "bun.lockb": "D-64 / G59: committed lockfile, historical evidence (bun 1.1.30, --frozen-lockfile exit 0); present resolution not claimed",
};
const EXCLUDE = { "README.md": "template boilerplate, not authoritative (AGENTS.md, D5); metadata only" };
const NOTE = {
  "bun.lockb": "included as a reproducibility control (F1-R1); no install run",
  ".onlyaiapp": "platform initialization marker; lane classifier has no match",
  ".env.example": "lane classifier has no match",
  "middleware.ts": "lane classifier has no match",
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
    const hits = literalHits(p);
    if (hits === null) continue;
    const [role, useCase] = proposed(p);
    const state = hits.outsideHandoff.length ? "literal hit outside handoff"
      : hits.handoff.length ? "literal hit in handoff only" : "no literal hit";
    const g = group.split(" ")[0];
    rows.push({
      order: UNMENTIONED.has(p) ? 1 : HANDOFF_ONLY.has(p) ? 2 : g === "G2" ? 3 : g === "G1" ? 4 : 5,
      group: g, path: p, blob: blobOf.get(p), lane: laneOf(p),
      proposedRole: role, proposedUseCase: useCase,
      governingSourceStatus: GOVERNING[p] ?? "unassessed (F2)",
      literalHitState: state, literalHitsOutsideHandoff: hits.outsideHandoff.length,
      literalHitsHandoff: hits.handoff.length, firstLiteralHitOutsideHandoff: hits.outsideHandoff[0] ?? "",
      phaseManifestRow: (manifestRow.get(p) ?? ["none"]).join("; "),
      applicability: EXCLUDE[p] ? "excluded" : "included", reason: EXCLUDE[p] ?? NOTE[p] ?? "",
    });
  }
}
if (errors.length) {
  console.error(JSON.stringify({ result: "measurement stopped: git error", errors }, null, 2));
  process.exit(2); // nothing written
}
rows.sort((a, b) => a.order - b.order || a.group.localeCompare(b.group) || a.path.localeCompare(b.path));

const cols = Object.keys(rows[0]);
const tsv = [cols.join("\t"), ...rows.map((r) => cols.map((c) => String(r[c])).join("\t"))].join("\n") + "\n";
const count = (k) => rows.reduce((acc, r) => ((acc[r[k]] = (acc[r[k]] ?? 0) + 1), acc), {});
const expected = groups.reduce((n, [, p]) => n + p.length, 0);
const summary = {
  revision: rev,
  script: { path: "docs/handoff/artifacts/B-156/F1-inventory-r2.mjs", sha256: sha256(readFileSync(fileURLToPath(import.meta.url))) },
  classifier: { path: CLASSIFIER, frozenBlob: classifierBlob, sha256: sha256(classifierText), workingTreeBlob: workingTreeClassifierBlob, usedFrom: "frozen blob" },
  phaseDocument: { path: PHASE_DOC, frozenBlob: git("rev-parse", `${rev}:${PHASE_DOC}`).trim(), rule: "first cell of §5A.1-§5A.6 rows" },
  labels: "proposedRole and proposedUseCase are proposed; governingSourceStatus is assessed in F2; literal hits are path hits only",
  gitErrors: 0,
  totalTracked: all.length,
  groups: Object.fromEntries(groups.map(([g, p]) => [g, p.length])),
  candidates: rows.length, included: rows.filter((r) => r.applicability === "included").length,
  excluded: rows.filter((r) => r.applicability === "excluded").length,
  byOrder: count("order"), byLane: count("lane"), byProposedRole: count("proposedRole"),
  byProposedUseCase: count("proposedUseCase"), byLiteralHitState: count("literalHitState"),
  byPhaseManifestRow: count("phaseManifestRow"), byGoverningSourceStatus: count("governingSourceStatus"),
  reconciled: rows.length === expected && new Set(rows.map((r) => r.path)).size === rows.length,
};
writeFileSync(join(out, "F1-candidates-1640ff7-r2.tsv"), tsv, "utf8");
writeFileSync(join(out, "F1-summary-1640ff7-r2.json"), JSON.stringify(summary, null, 2) + "\n", "utf8");
console.log(JSON.stringify(summary, null, 2));
