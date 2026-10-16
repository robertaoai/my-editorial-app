// r2: rule text states the exact-state check (F1). Builds the D-439 ownership manifest at a base commit: every line naming D-439, as (path, line, SHA-256 of the line).
// Refuses to overwrite.
import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
const [repo, base, out] = process.argv.slice(2);
const full = execFileSync("git", ["-C", repo, "rev-parse", base], { encoding: "utf8" }).trim();
// Working-tree lines at base (the checkout must be clean at base); one trailing CR is dropped so CRLF and LF checkouts agree.
if (execFileSync("git", ["-C", repo, "rev-parse", "HEAD"], { encoding: "utf8" }).trim() !== full) throw new Error("checkout is not at base");
if (execFileSync("git", ["-C", repo, "status", "--porcelain"], { encoding: "utf8" }).trim()) throw new Error("checkout not clean");
const g = execFileSync("git", ["-C", repo, "grep", "-n", "D-439", "--", "."], { encoding: "utf8" });
const entries = g.split("\n").filter(Boolean).map(h => { const m = h.match(/^([^:]+):(\d+):(.*)$/s); return { path: m[1], line: +m[2], sha256: createHash("sha256").update(Buffer.from(m[3].replace(/\r$/, ""))).digest("hex") }; });
writeFileSync(out, JSON.stringify({ act: "D-439", base: full, lineEnding: "one trailing CR dropped before hashing", rule: "exact state at base: every line naming D-439 (tracked files, clean tree), compared as a multiset of (path, line SHA-256); no exception for any path", entries }, null, 1), { flag: "wx" });
console.log(entries.length, "entries;", new Set(entries.map(e => e.path)).size, "files");
