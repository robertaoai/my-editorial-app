// `C-14` check 1 — shared-core hash across the three agent rule files.
//
// Caught `G53`: three rule blocks had drifted in both directions. Three agents
// edit this repo under one git identity with zero merge commits, so a
// conflicting edit never surfaces as a merge conflict — it surfaces as a silent
// overwrite. This check is what makes such an overwrite visible.
//
// The shared core runs from the SHARED CORE marker to the platform tail. The
// tail is deliberately per-agent and is NOT compared.
//
// `G67` — PREAMBLE COVERAGE. Everything before the marker was outside this
// check, and in `CLAUDE.md` that is 138 lines byte-identical to `AGENTS.md`.
// It holds "build straight through the sprints until the app works end-to-end",
// the instruction behind every crossing `D-75` records. The text most able to
// cause a crossing was the text nothing protected.
//
// `.agents/rules/graphify.md` is EXCLUDED from the preamble comparison by
// design: its preamble is 6 lines, not 138, and it never carried the shared
// build rules. Including it would fail permanently and teach everyone to
// ignore this check.

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const FILES = [
  { path: "CLAUDE.md", tail: "Claude Code specifics:" },
  { path: "AGENTS.md", tail: "Codex specifics:" },
  { path: ".agents/rules/graphify.md", tail: "Gemini / Antigravity specifics:" },
];

const MARKER = "<!-- SHARED CORE";

// `G67`: the preamble comparison covers these two only. See the header.
const PREAMBLE_FILES = ["CLAUDE.md", "AGENTS.md"];

export function run() {
  const findings = [];
  const hashes = [];

  for (const { path, tail } of FILES) {
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      findings.push(`${path}: missing — the shared core cannot reach this agent`);
      continue;
    }

    const lines = text.split("\n");
    const start = lines.findIndex((l) => l.startsWith(MARKER));
    const end = lines.findIndex((l) => l.startsWith(tail));

    if (start < 0) {
      findings.push(`${path}: no SHARED CORE marker`);
      continue;
    }
    if (end < 0) {
      findings.push(`${path}: no platform tail ("${tail}") — cannot bound the shared core`);
      continue;
    }
    if (end < start) {
      findings.push(`${path}: platform tail precedes the SHARED CORE marker`);
      continue;
    }

    // Normalise line endings and trailing blank lines so a checkout difference
    // is not reported as rule drift.
    const core = lines
      .slice(start, end)
      .join("\n")
      .replace(/\r/g, "")
      .replace(/\s+$/, "");

    hashes.push({
      path,
      hash: createHash("sha256").update(core).digest("hex"),
      lines: end - start,
    });
  }

  const distinct = new Set(hashes.map((h) => h.hash));
  if (distinct.size > 1) {
    findings.push("shared core DIFFERS across the agent rule files:");
    for (const h of hashes) {
      findings.push(`    ${h.hash.slice(0, 12)}  ${String(h.lines).padStart(4)} lines  ${h.path}`);
    }
  }

  // `G67` — the preamble, compared separately so a reader can tell WHICH
  // region drifted. Two files only; see the header for why the third is out.
  const preambles = [];
  for (const path of PREAMBLE_FILES) {
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      continue; // the core loop already reported the missing file
    }
    const lines = text.split("\n");
    const start = lines.findIndex((l) => l.startsWith(MARKER));
    if (start < 0) continue; // likewise already reported
    const body = lines.slice(0, start).join("\n").replace(/\r/g, "").replace(/\s+$/, "");
    preambles.push({
      path,
      hash: createHash("sha256").update(body).digest("hex"),
      lines: start,
    });
  }

  if (new Set(preambles.map((p) => p.hash)).size > 1) {
    findings.push(
      "preamble DIFFERS between the agent rule files — an edit to one reaches one agent only (\`G67\`):",
    );
    for (const p of preambles) {
      findings.push(`    ${p.hash.slice(0, 12)}  ${String(p.lines).padStart(4)} lines  ${p.path}`);
    }
  }

  const coreLine =
    hashes.length > 0
      ? `core ${hashes[0].hash.slice(0, 12)} across ${hashes.length} file(s)`
      : "no files read";
  const preLine =
    preambles.length > 0
      ? `; preamble ${preambles[0].hash.slice(0, 12)} across ${preambles.length}`
      : "";

  return { name: "shared-core-hash", findings, detail: coreLine + preLine };
}
