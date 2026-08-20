// `C-14` check 1 — shared-core hash across the three agent rule files.
//
// Caught `G53`: three rule blocks had drifted in both directions. Three agents
// edit this repo under one git identity with zero merge commits, so a
// conflicting edit never surfaces as a merge conflict — it surfaces as a silent
// overwrite. This check is what makes such an overwrite visible.
//
// The shared core runs from the SHARED CORE marker to the platform tail. The
// tail is deliberately per-agent and is NOT compared.

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const FILES = [
  { path: "CLAUDE.md", tail: "Claude Code specifics:" },
  { path: "AGENTS.md", tail: "Codex specifics:" },
  { path: ".agents/rules/graphify.md", tail: "Gemini / Antigravity specifics:" },
];

const MARKER = "<!-- SHARED CORE";

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

  return {
    name: "shared-core-hash",
    findings,
    detail:
      hashes.length > 0
        ? `${hashes.length} file(s), core hash ${hashes[0].hash.slice(0, 12)}, ${hashes[0].lines} lines`
        : "no files read",
  };
}
