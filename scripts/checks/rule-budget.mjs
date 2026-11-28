// `C-14` check — `rule-budget` (`D-324`, applied by `D-337`). Replaces `shared-core-hash.mjs`.
//
// WHAT IT GUARDS. The three rule files used to carry three hand-synced copies of one shared
// core, checked only for byte parity. Parity proved the files agreed, not that any tool
// received them (`SV2-U02`, `D-318`). The measured loaders set the real constraints:
//   * Antigravity cuts any rule file at 24,000 bytes (Agent Manager at the last whole line,
//     the IDE agent mid-line: `D-304`, `D-331`), so `AGENTS.md` must stay far below it;
//   * `D-266` item 3 binds `AGENTS.md` under 6,000 characters and `CLAUDE.md` under 300 lines,
//     with a Judge-set working ceiling of 5,400 characters (`D-324` J1);
//   * Claude Code receives `AGENTS.md` only through `@AGENTS.md`, and a missing import path
//     fails SILENTLY — no error, no content (`D-327`). Presence and resolution are checked here;
//   * Claude Code strips HTML comments, so no rule may live in one (`D-291`, `D-312`).
// After `D-324` there is ONE copy of the shared core, in `AGENTS.md`. `CLAUDE.md` imports it and
// `GEMINI.md` carries only Lane C's rules; a copy in either is the drift `G53` named.
//
// Runs in CI: it reads tracked files only.

import { existsSync, readFileSync } from "node:fs";

const NAME = "rule-budget";
const AGENTS = "AGENTS.md";
const CLAUDE = "CLAUDE.md";
const GEMINI = "GEMINI.md";
const CEILING = 5400; // `D-324` J1 working ceiling; the hard cap is 6,000 (`D-266` item 3)
const HARD_CAP = 6000;
const LOADER_BYTES = 24000; // Antigravity per-file cap (`D-325`, `D-331`)
const CLAUDE_LINES = 300;

const chars = (s) => [...s].length;
const bytes = (s) => Buffer.byteLength(s);
const lineCount = (s) => s.split("\n").length - (s.endsWith("\n") ? 1 : 0);
const read = (p) => (existsSync(p) ? readFileSync(p, "utf8") : null);

export function run() {
  const findings = [];
  const a = read(AGENTS), c = read(CLAUDE), g = read(GEMINI);
  for (const [p, s] of [[AGENTS, a], [CLAUDE, c], [GEMINI, g]]) if (s === null) findings.push(`${p} is missing`);
  if (findings.length) return { name: NAME, findings, detail: "a rule file is missing — nothing else measured" };

  // Sizes, in the unit each limit is written in.
  if (chars(a) > CEILING) findings.push(`${AGENTS} is ${chars(a)} characters, over the ${CEILING}-character working ceiling (\`D-324\` J1; hard cap ${HARD_CAP})`);
  if (bytes(a) >= LOADER_BYTES) findings.push(`${AGENTS} is ${bytes(a)} bytes — Antigravity cuts at ${LOADER_BYTES} (\`D-331\`)`);
  if (lineCount(c) >= CLAUDE_LINES) findings.push(`${CLAUDE} is ${lineCount(c)} lines, not under ${CLAUDE_LINES} (\`D-266\` item 3)`);
  if (bytes(g) >= LOADER_BYTES) findings.push(`${GEMINI} is ${bytes(g)} bytes — Antigravity cuts at ${LOADER_BYTES}`);

  // Import integrity: the line exists, stands alone, and resolves (`D-327`: a broken path is silent).
  const imports = c.split("\n").filter((l) => /^@\S+/.test(l.trim())).map((l) => l.trim().slice(1));
  if (!imports.includes(AGENTS)) findings.push(`${CLAUDE} has no \`@${AGENTS}\` import line — Claude Code would receive no shared core (\`D-326\`)`);
  for (const target of imports) if (!existsSync(target)) findings.push(`${CLAUDE} imports \`@${target}\`, which does not exist — Claude Code drops it SILENTLY (\`D-327\`)`);

  // One copy of the core: no substantial AGENTS.md line reappears in CLAUDE.md or GEMINI.md.
  const coreLines = a.split("\n").map((l) => l.trim()).filter((l) => l.length >= 60);
  for (const [p, s] of [[CLAUDE, c], [GEMINI, g]]) {
    const dup = coreLines.filter((l) => s.includes(l));
    if (dup.length) findings.push(`${p} repeats ${dup.length} line(s) of the shared core in ${AGENTS} (first: "${dup[0].slice(0, 60)}…") — one copy only (\`D-324\`, \`G53\`)`);
  }

  // No rule inside an HTML comment: Claude Code strips them (`D-291`, `D-312`).
  for (const [p, s] of [[AGENTS, a], [CLAUDE, c], [GEMINI, g]]) if (s.includes("<!--")) findings.push(`${p} contains an HTML comment — Claude Code strips it, so a rule there never arrives (\`D-312\`)`);

  // Live lane state lives only in V1-PHASE-CLOSURE.md §5; a rule file only points there.
  for (const [p, s] of [[AGENTS, a], [CLAUDE, c], [GEMINI, g]]) {
    if (/^\|\s*\*\*[ABC]\*\*\s*\|[^\n]*\|\s*\*\*`(Active|Eligible|Blocked|Done)`\*\*/m.test(s)) findings.push(`${p} carries a live lane-state row — lane state lives only in \`docs/v1/V1-PHASE-CLOSURE.md\` §5 (\`D-156\`)`);
  }
  if (!/V1-PHASE-CLOSURE\.md` §5/.test(a)) findings.push(`${AGENTS} lost its pointer to \`V1-PHASE-CLOSURE.md\` §5, the only home of live lane state`);

  return {
    name: NAME,
    findings,
    detail: `${AGENTS} ${chars(a)} chars / ${bytes(a)} B (ceiling ${CEILING}); ${CLAUDE} ${lineCount(c)} lines, imports ${imports.map((t) => "@" + t).join(", ") || "none"}; ${GEMINI} ${bytes(g)} B; one core copy`,
  };
}
