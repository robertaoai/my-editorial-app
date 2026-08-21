// `C-14` check 5 — `G66`: parse-check the repo-local settings cascade.
//
// Claude Code SILENTLY ignores a settings file it cannot parse. Not a warning,
// not a degraded mode — the whole file is dropped. On 2026-08-21 a hand edit
// left `.claude/settings.json` as invalid JSON and both hooks went dead with no
// error at all. The only symptom was the absence of hook output, which is
// indistinguishable from a hook that had nothing to say.
//
// `.claude/settings.json` is checked in and shared across all three agents, and
// no other `C-14` check covers it — the shared-core hash compares only the three
// agent rule files. That is `D-58`'s silent-overwrite failure mode in a file
// `D-58` never considered.
//
// Repo-local files only. The user-scope file (`~/.claude/settings.json`) is
// deliberately NOT checked: it is per-machine, absent in CI, and not ours to
// police.
//
// Contents are never printed — settings files routinely carry `env` blocks, MCP
// headers, and hook command strings. Only the parser's error position is
// reported.

import { existsSync, readFileSync } from "node:fs";

const FILES = [
  ".claude/settings.json",
  ".claude/settings.local.json",
  ".mcp.json",
];

export function run() {
  const findings = [];
  const checked = [];

  for (const f of FILES) {
    if (!existsSync(f)) continue; // absent is valid — these are all optional
    checked.push(f);

    let raw;
    try {
      raw = readFileSync(f, "utf8");
    } catch (err) {
      findings.push(`${f}: unreadable (${err.code ?? "error"})`);
      continue;
    }

    try {
      JSON.parse(raw);
    } catch (err) {
      // Report position only, never the offending text — it may hold a secret.
      const pos = /at position (\d+)/.exec(err.message)?.[1];
      const line = pos ? raw.slice(0, Number(pos)).split("\n").length : null;
      findings.push(
        `${f}: INVALID JSON${line ? ` at line ${line}` : ""} — Claude Code ignores this file entirely, so every hook and setting in it is silently off`,
      );
    }
  }

  const clean = checked.length - findings.length;
  return {
    name: "settings-parse",
    findings,
    detail:
      checked.length === 0
        ? "no settings files present"
        : findings.length > 0
          ? `${findings.length} of ${checked.length} file(s) INVALID`
          : `${clean} file(s) parse clean: ${checked.join(", ")}`,
  };
}
