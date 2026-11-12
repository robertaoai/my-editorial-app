// `C-14` check — `D-297`, the second occurrence of the `B-140` defect.
//
// WHAT IT GUARDS. A Windows path passed through a shell-quoted script loses its
// backslashes, and `\r` becomes a real carriage return. `B-140` found this in
// `SV-002` §3.1 (`2a3bf4b`) and it was repaired by hand, with no check added.
// **It recurred in the next three commits that wrote kit paths** (`D-290`,
// `D-292`, `D-295`), every check green, and was found by reading, not by the
// apparatus. A defect that recurs after a manual repair is what this apparatus
// exists for.
//
// Two rules, over every tracked or untracked (not ignored) markdown file:
//
//   1. No control character: C0 other than TAB and LF, DEL, or a carriage
//      return that is not part of a CRLF line ending. Applies everywhere,
//      `docs/handoff/` included — a control character is never evidence.
//   2. No Windows drive path in a code span whose separator is missing:
//      `C:Users…` instead of `C:\Users…`. **`docs/handoff/` is excluded from
//      this rule only**, because an entry may quote the corrupted rendering as
//      evidence (`B-140` does), and those entries belong to the raising lane.
//   3. No stringified JavaScript `undefined` glued to the preceding character,
//      e.g. `(setup validation)undefined;` (`D-381`). A regex whose backslashes a
//      shell stripped matched an empty string and spliced a callback's undefined
//      capture into `SV-002`'s title (`D-380`), every check green. Prose such as
//      `is **undefined**` or `"undefined"` is preceded by a space, `*`, a quote or
//      a bracket and stays legal. Same `docs/handoff/` exemption as rule 2.
//
// Discovery failing is a failure, never a pass (`B-018` defect 1), and finding
// zero markdown files is a failure too (`B-018` defect 2).
//
// Runs in CI: it needs only a work tree.

import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const NAME = "text-integrity";

// A carriage return is legal only immediately before a line feed.
const CONTROL = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]|\r(?!\n)/;
// A backtick, a drive letter and a colon, then anything but a separator.
const LOST_SEPARATOR = /`[A-Za-z]:(?![\\/])[^`\s]/;

// A lowercase `undefined` with no space, emphasis, quote or bracket before it.
const SPLICED_UNDEFINED = /[^\s"'`(\[*_\/-]undefined\b/;

const QUOTES_EVIDENCE = /^docs\/handoff\//;

const norm = (p) => p.replace(/\\/g, "/").replace(/^\.\//, "");

const describe = (ch) =>
  ch === "\r" ? "a bare carriage return" : `control character U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;

export function run() {
  let paths;
  try {
    paths = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    })
      .split("\n")
      .map(norm)
      .filter((p) => /\.md$/i.test(p) && existsSync(p));
  } catch (e) {
    return {
      name: NAME,
      findings: [`could not enumerate repository files: ${e.message.split("\n")[0]} — integrity NOT established`],
      detail: "discovery failed — this is a failure, not a pass",
    };
  }

  if (paths.length === 0) {
    return {
      name: NAME,
      findings: ["no markdown files found — discovery returned nothing, which is not a clean corpus"],
      detail: "0 files read",
    };
  }

  const findings = [];
  for (const p of paths) {
    let text;
    try {
      text = readFileSync(p, "utf8");
    } catch {
      findings.push(`${p}: unreadable`);
      continue;
    }
    const lines = text.split("\n");
    lines.forEach((raw, i) => {
      // Split on LF keeps a CRLF ending's CR at the end of the line; put the LF
      // back so rule 1 sees the pair, not a bare CR.
      const line = i < lines.length - 1 ? raw + "\n" : raw;
      const c = line.match(CONTROL);
      if (c) {
        findings.push(
          `${p}:${i + 1}: ${describe(c[0])} — the \`B-140\` corruption (a shell turned \`\\r\` into a carriage return); rewrite the value from its source`,
        );
      }
      if (!QUOTES_EVIDENCE.test(p)) {
        const m = raw.match(LOST_SEPARATOR);
        if (m) {
          findings.push(
            `${p}:${i + 1}: drive path ${JSON.stringify(m[0] + "…")} has no separator after the colon — backslashes were lost in transit (\`B-140\`, \`D-297\`)`,
          );
        }
        const u = raw.match(SPLICED_UNDEFINED);
        if (u) {
          findings.push(
            `${p}:${i + 1}: spliced "undefined" after ${JSON.stringify(u[0][0])} — a script wrote an undefined value into the text (\`D-380\`, \`D-381\`); rewrite the line from its source`,
          );
        }
      }
    });
  }

  return {
    name: NAME,
    findings,
    detail:
      findings.length === 0
        ? `${paths.length} markdown file(s): no control character; no drive path missing its separator; no spliced "undefined" (docs/handoff/ exempt from the path and splice rules only)`
        : `${findings.length} finding(s) across ${paths.length} markdown file(s)`,
  };
}
