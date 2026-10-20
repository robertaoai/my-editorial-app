// `D-446` U-V — DoR-completion validator for the SV-003 preparation contract (V2, a separate validator).
//
// Reads ONE preparation contract (Markdown with a fenced `json sv-dor-contract` block), the source repository, a
// structured pre-validation review record and a retained consistency-check log. It first validates the contract's
// structure and coverage (fail closed), then evaluates the DoR completion predicates SV3-DOR-01..05 accepted for SV-003
// (B-136; D-446), and writes one receipt that binds every input it actually consumed.
//
// A pass means only: the DoR criteria are complete and bound to their evidence at this HEAD and these bytes.
// It is NOT a DoD attempt result, NOT Phase 2 completion, and it grants NO commit, push or release authority.
// Jev System One (`scripts/jev/`) is not used or changed.
//
// Normalization: every input is hashed as the exact bytes read and decoded as UTF-8 with no newline change. Only the
// comparisons of a scope clause, a phrase or a requirement row collapse runs of whitespace; paths are compared after
// turning backslashes into slashes and lowercasing a drive letter.
//
// Usage:
//   node scripts/dor/validate-dor.mjs --repo <root> --contract <repo-relative path> --review <review.json>
//        --check-log <log> [--out <receipt.json>]
// Exit codes: 0 pass, 1 fail, 2 usage or unreadable input.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

/** Coverage the validator requires. Fixed here: a submitted contract cannot redefine it. */
export const REQUIRED_TUPLES = Object.freeze(["J1", "J2"]);
export const REQUIRED_DOR = Object.freeze(["SV3-DOR-01", "SV3-DOR-02", "SV3-DOR-03", "SV3-DOR-04", "SV3-DOR-05"]);
export const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";

export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const norm = (s) => String(s).replace(/\s+/g, " ").trim();
export const normPath = (p) => String(p).trim().replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^([A-Za-z]):/, (_, d) => `${d.toLowerCase()}:`);
const HEX40 = /^[0-9a-f]{40}$/;
const HEX64 = /^[0-9a-f]{64}$/;
const nonEmpty = (s) => typeof s === "string" && s.trim() !== "";

function git(repo, args, encoding = "utf8") {
  return execFileSync("git", ["-C", repo, ...args], { encoding, maxBuffer: 1 << 28 });
}

/** Records each consumed input once: role, kind, path, revision, blob and the SHA-256 of the bytes actually read. */
function inventory() {
  const items = [];
  const seen = new Set();
  return {
    items,
    add(item) {
      const key = `${item.role}|${item.path}|${item.commit ?? ""}`;
      if (!seen.has(key)) {
        seen.add(key);
        items.push(item);
      }
    },
  };
}

/** Reads `path` at `rev` and records it; returns the decoded text, or null when absent. */
function readGit(repo, inv, role, rev, path) {
  let commit;
  try {
    commit = git(repo, ["rev-parse", `${rev}^{commit}`]).trim();
  } catch {
    inv.add({ role, kind: "git", path, commit: null, blob: null, sha256: null, absent: "unknown revision" });
    return null;
  }
  let blob;
  try {
    blob = git(repo, ["rev-parse", `${commit}:${path}`]).trim();
  } catch {
    inv.add({ role, kind: "git", path, commit, blob: null, sha256: null, absent: "path absent at this commit" });
    return null;
  }
  const bytes = git(repo, ["cat-file", "blob", blob], null);
  inv.add({ role, kind: "git", path, commit, blob, sha256: sha256(bytes) });
  return bytes.toString("utf8");
}

/** Reads an external file and records its observed bytes; returns its Buffer, or null when absent. */
function readFile(inv, role, path) {
  if (!nonEmpty(path) || !existsSync(path)) {
    inv.add({ role, kind: "file", path: path ?? null, sha256: null, absent: "file absent" });
    return null;
  }
  const bytes = readFileSync(path);
  inv.add({ role, kind: "file", path, sha256: sha256(bytes) });
  return bytes;
}

/** The fenced `json sv-dor-contract` block of a preparation contract. */
export function parseContract(markdown) {
  const m = markdown.match(/^```json sv-dor-contract\r?\n([\s\S]*?)\r?\n```/m);
  if (!m) return { error: "no `json sv-dor-contract` block" };
  try {
    return { contract: JSON.parse(m[1]) };
  } catch (e) {
    return { error: `contract block is not valid JSON (${e.message})` };
  }
}

/** Structure and coverage, before any predicate. Returns a list of { code, subject, detail } findings. */
export function schemaFindings(c) {
  const f = [];
  const add = (code, subject, detail = "") => f.push({ code, subject, detail });
  if (!c || typeof c !== "object") return [{ code: "schema-missing-field", subject: "contract", detail: "not an object" }];
  for (const k of ["attempt", "contractRevision", "requirementSource"]) if (!nonEmpty(c[k])) add("schema-missing-field", k);
  if (!c.template || !nonEmpty(c.template.path) || !HEX64.test(c.template.sha256 ?? "")) add("schema-missing-field", "template");
  const b = c.boundaries;
  if (!b || !b.expectedBytesRule || !nonEmpty(b.expectedBytesRule.source) || !nonEmpty(b.expectedBytesRule.phrase)
    || !b.checkExceptions || !nonEmpty(b.checkExceptions.file) || !HEX64.test(b.checkExceptions.sha256 ?? "")
    || !b.bindings || !nonEmpty(b.bindings.source) || !Array.isArray(b.bindings.fields) || !b.bindings.fields.length
    || !b.roles || !Array.isArray(b.roles.phrases) || !b.roles.phrases.length || !b.roles.phrases.every(nonEmpty)
    || !b.t2t3 || !nonEmpty(b.t2t3.decision) || !nonEmpty(b.t2t3.t2) || !nonEmpty(b.t2t3.t3)) add("schema-missing-field", "boundaries");

  // Tuples: both J1 and J2, unique, each complete.
  const tuples = Array.isArray(c.tuples) ? c.tuples : null;
  if (!tuples || !tuples.length) add("tuples-missing-or-empty", "tuples");
  const ids = (tuples ?? []).map((t) => t?.id);
  for (const id of new Set(ids.filter((x, i) => ids.indexOf(x) !== i))) add("duplicate-tuple-id", String(id));
  for (const id of REQUIRED_TUPLES) if (!ids.includes(id)) add("required-tuple-missing", id);
  for (const t of tuples ?? []) {
    const s = t?.id ?? "(no id)";
    if (!nonEmpty(t?.id) || !nonEmpty(t?.entry) || !HEX40.test(t?.registerCommit ?? "") || !nonEmpty(t?.registeredObjectPath)
      || !HEX64.test(t?.objectSha256 ?? "") || !nonEmpty(t?.retainedObjectFile)) add("schema-missing-field", s);
    if (!nonEmpty(t?.scopeClause)) add("scope-empty", s);
  }

  // Mapping: at least one non-empty row for every required tuple.
  const mapping = Array.isArray(c.mapping) ? c.mapping : [];
  for (const id of REQUIRED_TUPLES) {
    const rows = mapping.filter((m) => m?.tuple === id);
    if (!rows.length || rows.some((m) => !Array.isArray(m.requirements) || !m.requirements.length || !m.requirements.every(nonEmpty))) {
      add("mapping-missing", id);
    }
  }

  // DoD definitions and DoR coverage: the validator's required DoR set, each mapped to defined DoD obligations.
  const dod = Array.isArray(c.dod) ? c.dod : [];
  const dodIds = dod.map((d) => d?.id);
  // Every DoD definition ID is unique. A repeat is refused whether identical or conflicting; nothing is deduplicated.
  for (const id of new Set(dodIds.filter((x, i) => dodIds.indexOf(x) !== i))) add("duplicate-dod-id", String(id));
  if (!dod.length) add("schema-missing-field", "dod");
  for (const d of dod) if (!nonEmpty(d?.id) || !nonEmpty(d?.condition) || !nonEmpty(d?.evidenceClass)) add("evidence-class-missing", d?.id ?? "(no id)");
  const dorDod = Array.isArray(c.dorDod) ? c.dorDod : [];
  const dors = dorDod.map((d) => d?.dor);
  for (const dor of new Set(dors.filter((x, i) => dors.indexOf(x) !== i))) add("duplicate-dor", String(dor));
  for (const dor of REQUIRED_DOR) if (!dors.includes(dor)) add("dor-coverage-missing", dor);
  for (const d of dorDod) {
    if (!Array.isArray(d?.dod) || !d.dod.length) add("dor-coverage-missing", d?.dor ?? "(no dor)", "no DoD obligation");
    for (const ref of d?.dod ?? []) if (!dodIds.includes(ref)) add("dod-undefined", `${d.dor} → ${ref}`);
  }
  if (!Array.isArray(c.states)) add("schema-missing-field", "states");
  if (c.tierClarifications !== undefined) {
    if (!Array.isArray(c.tierClarifications)) add("schema-missing-field", "tierClarifications");
    for (const x of Array.isArray(c.tierClarifications) ? c.tierClarifications : []) {
      if (!["tuple", "entry", "decision", "rowLabel", "reason"].every((k) => nonEmpty(x?.[k]))) add("schema-missing-field", `tierClarification ${x?.tuple ?? "(no tuple)"}`);
    }
  }
  return f;
}

/** One Register entry section: from its `## … \`D-NNN\`` heading to the next `## ` heading. */
export function entrySection(register, id) {
  if (!register || !nonEmpty(id)) return null;
  const lines = register.split("\n");
  const start = lines.findIndex((l) => l.startsWith("## ") && l.includes(`\`${id}\``));
  if (start < 0) return null;
  let end = lines.findIndex((l, i) => i > start && l.startsWith("## "));
  if (end < 0) end = lines.length;
  return lines.slice(start, end).join("\n");
}

/** Every backtick-quoted token in a section, as normalized paths. */
export function quotedPaths(section) {
  return [...section.matchAll(/`([^`]+)`/g)].map((m) => normPath(m[1]));
}

/** The item-2 "Scope and exclusions." clause, with its continuation lines, up to the next numbered item. */
export function scopeClause(section) {
  const lines = section.split("\n");
  const i = lines.findIndex((l) => /^2\. \*\*Scope and exclusions\.\*\*/.test(l));
  if (i < 0) return null;
  const out = [lines[i].replace(/^2\. \*\*Scope and exclusions\.\*\*\s*/, "")];
  for (let j = i + 1; j < lines.length && !/^\d+\. \*\*/.test(lines[j]) && lines[j].trim() !== "" && !lines[j].startsWith("#"); j++) out.push(lines[j]);
  return norm(out.join(" "));
}

/** Tier rows whose disposition says "unaffected" with no reason after it. */
export function unaffectedWithoutReason(section) {
  const i = section.indexOf("### Tier applicability");
  if (i < 0) return null;
  const rows = section.slice(i).split("\n").filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l));
  return rows.filter((row) => row.split("|").map((c) => c.trim()).filter(Boolean).some((c) => {
    const k = c.toLowerCase().indexOf("unaffected");
    return k >= 0 && c.slice(k + "unaffected".length).replace(/[\s:;,.*—–-]/g, "") === "";
  }));
}

const OPEN = { "(": ")", "[": "]", "{": "}" };
const CLOSE = new Set([")", "]", "}"]);
/** Words after which a `/` starts a regular expression, not a division. */
const REGEX_AFTER_WORD = new Set(["return", "typeof", "instanceof", "in", "of", "new", "delete", "void", "throw", "case", "do", "else", "yield", "await"]);
/** Words before `(` that open a control-flow head: the `{` after its `)` is a block of the same function. */
const CONTROL_WORDS = new Set(["if", "for", "while", "switch", "catch", "with"]);
/** JavaScript line terminators: LF, CR, LINE SEPARATOR and PARAGRAPH SEPARATOR (CRLF is a CR then an LF). */
const LINE_TERMINATOR = /[\n\r\u2028\u2029]/;
/** Multi-character punctuators, longest first; any other punctuation is a single character. */
const PUNCTUATORS = ["...", "===", "!==", "**", "??", "?.", "=>", "==", "!=", "<=", ">=", "&&", "||"];

/**
 * Splits JavaScript source into tokens `{ t, v, at, nl }` (t: "word", "num", "str", "tpl", "re" or "punct"; `nl`
 * true when a line terminator, in whitespace or inside a comment, comes between the previous token and this one).
 * Comments and whitespace are dropped; string, template and regular-expression literals are single tokens, so markers
 * inside them are never code. Template substitutions are tokenized as code. Returns null (fail closed) on an
 * unterminated comment, string, template or regular expression. A `/` is read as a regular expression after
 * punctuation other than `)`, `]` or `}`, after the words in REGEX_AFTER_WORD, or at the start.
 */
function lex(src) {
  const toks = [];
  const subs = []; // brace depth at which each open template substitution started
  let depth = 0;
  let i = 0;
  let nl = false;
  const n = src.length;
  const push = (k) => {
    k.nl = nl;
    nl = false;
    toks.push(k);
  };
  const template = (from, at) => {
    let j = from;
    while (j < n) {
      if (src[j] === "\\") j += 2;
      else if (src[j] === "`") {
        push({ t: "tpl", v: src.slice(at, j + 1), at });
        return j + 1;
      } else if (src[j] === "$" && src[j + 1] === "{") {
        push({ t: "tpl", v: src.slice(at, j + 2), at });
        subs.push(depth);
        return j + 2;
      } else j++;
    }
    return -1;
  };
  while (i < n) {
    const c = src[i];
    if (/\s/.test(c)) {
      if (LINE_TERMINATOR.test(c)) nl = true;
      i++;
    } else if (c === "/" && src[i + 1] === "/") {
      const m = LINE_TERMINATOR.exec(src.slice(i));
      if (m) nl = true;
      i = m ? i + m.index : n;
    } else if (c === "/" && src[i + 1] === "*") {
      const e = src.indexOf("*/", i + 2);
      if (e < 0) return null;
      if (LINE_TERMINATOR.test(src.slice(i + 2, e))) nl = true;
      i = e + 2;
    } else if (c === "'" || c === '"') {
      let j = i + 1;
      while (j < n && src[j] !== c && src[j] !== "\n" && src[j] !== "\r") j += src[j] === "\\" ? 2 : 1;
      if (j >= n || src[j] !== c) return null;
      push({ t: "str", v: src.slice(i, j + 1), at: i });
      i = j + 1;
    } else if (c === "`") {
      i = template(i + 1, i);
      if (i < 0) return null;
    } else if (c === "}" && subs.length && subs[subs.length - 1] === depth) {
      subs.pop();
      i = template(i + 1, i);
      if (i < 0) return null;
    } else if (/[A-Za-z_$]/.test(c)) {
      const m = /^[\w$]+/.exec(src.slice(i, i + 256));
      push({ t: "word", v: m[0], at: i });
      i += m[0].length;
    } else if (/[0-9]/.test(c)) {
      const m = /^[\w.]+/.exec(src.slice(i, i + 256));
      push({ t: "num", v: m[0], at: i });
      i += m[0].length;
    } else if (c === "/") {
      const p = toks[toks.length - 1];
      const regex = !p || (p.t === "punct" && !/^[)\]}]$/.test(p.v)) || (p.t === "word" && REGEX_AFTER_WORD.has(p.v));
      if (!regex) {
        push({ t: "punct", v: c, at: i++ });
        continue;
      }
      let j = i + 1;
      let cls = false;
      while (j < n && !LINE_TERMINATOR.test(src[j]) && (cls || src[j] !== "/")) {
        if (src[j] === "\\") j++;
        else if (src[j] === "[") cls = true;
        else if (src[j] === "]") cls = false;
        j++;
      }
      if (j >= n || src[j] !== "/") return null;
      j++;
      while (j < n && /[a-z]/.test(src[j])) j++;
      push({ t: "re", v: src.slice(i, j), at: i });
      i = j;
    } else {
      const v = PUNCTUATORS.find((p) => src.startsWith(p, i)) ?? c;
      if (v === "{") depth++;
      else if (v === "}") depth--;
      push({ t: "punct", v, at: i });
      i += v.length;
    }
  }
  return subs.length ? null : toks;
}

/** For each token index, the index of its matching bracket (both directions). Null when any bracket is unbalanced. */
function matchBrackets(toks) {
  const pair = new Map();
  const stack = [];
  for (let i = 0; i < toks.length; i++) {
    const k = toks[i];
    if (k.t !== "punct") continue;
    if (OPEN[k.v]) stack.push(i);
    else if (CLOSE.has(k.v)) {
      const o = stack.pop();
      if (o === undefined || OPEN[toks[o].v] !== k.v) return null;
      pair.set(o, i).set(i, o);
    }
  }
  return stack.length ? null : pair;
}

const isP = (k, v) => k?.t === "punct" && k.v === v;

/** Splits `text` at commas outside strings, comments and nested brackets. Returns null when the text does not lex or is unbalanced. */
export function splitTopLevel(text) {
  const toks = lex(text);
  if (!toks || !matchBrackets(toks)) return null;
  const parts = [];
  let last = 0;
  let depth = 0;
  for (const k of toks) {
    if (k.t !== "punct") continue;
    if (OPEN[k.v]) depth++;
    else if (CLOSE.has(k.v)) depth--;
    else if (k.v === "," && depth === 0) {
      parts.push(text.slice(last, k.at));
      last = k.at + 1;
    }
  }
  parts.push(text.slice(last));
  return parts;
}

/** Binary operators of the supported value grammar. */
const BINARY = new Set(["+", "-", "*", "%", "**", "==", "===", "!=", "!==", "<", ">", "<=", ">=", "&&", "||", "??", "&", "|", "^"]);
/** Prefix operators of the supported value grammar. */
const PREFIX = new Set(["!", "-", "+", "~", "typeof", "void"]);
/** Reserved words that cannot stand as a value. `true`, `false`, `null` and `this` can; `new` only before a call. */
const RESERVED = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else",
  "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "let", "new", "return", "super",
  "switch", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "await", "async"]);

/**
 * Checks that the tokens `ts` form exactly one value of the supported grammar, by syntax only (nothing is executed):
 *   expr    := unary (BINARY unary)* ["?" expr ":" expr]
 *   unary   := PREFIX* ["new"] primary postfix*     (after `new`, the first postfix must be a call)
 *   primary := identifier | number | string | template without substitution | "(" expr ("," expr)* ")"
 *            | "[" [expr ("," expr)* [","]] "]" | "{" [member ("," member)* [","]] "}"
 *   postfix := "." identifier | "?." identifier | "(" [expr ("," expr)* [","]] ")" | "[" expr "]"
 *   member  := identifier [":" expr]
 * Anything else (assignment, functions, arrows, spread, computed keys, incomplete expressions) is refused.
 */
function validValue(ts) {
  let i = 0;
  const at = (v) => isP(ts[i], v);
  const word = (k) => k?.t === "word" && !RESERVED.has(k.v);
  const list = (close, item) => {
    if (at(close)) return ++i, true;
    for (;;) {
      if (!item()) return false;
      if (at(close)) return ++i, true;
      if (!at(",")) return false;
      i++;
      if (at(close)) return ++i, true;
    }
  };
  const member = () => {
    if (!word(ts[i])) return false;
    i++;
    if (!at(":")) return true;
    i++;
    return expr();
  };
  const primary = () => {
    const k = ts[i];
    if (!k) return false;
    if (k.t === "num" || k.t === "str") return ++i, true;
    if (k.t === "tpl") return k.v.length > 1 && k.v.startsWith("`") && k.v.endsWith("`") && !k.v.endsWith("${") ? (++i, true) : false;
    if (word(k)) return ++i, true;
    if (at("(")) {
      i++;
      if (!expr()) return false;
      while (at(",")) {
        i++;
        if (!expr()) return false;
      }
      return at(")") ? (++i, true) : false;
    }
    if (at("[")) return i++, list("]", expr);
    if (at("{")) return i++, list("}", member);
    return false;
  };
  const unary = () => {
    while ((ts[i]?.t === "punct" || ts[i]?.t === "word") && PREFIX.has(ts[i].v)) i++;
    const isNew = ts[i]?.t === "word" && ts[i].v === "new";
    if (isNew) i++;
    if (!primary()) return false;
    if (isNew && !at("(")) return false;
    for (;;) {
      if (at(".") || at("?.")) {
        i++;
        if (ts[i]?.t !== "word") return false;
        i++;
      } else if (at("(")) {
        i++;
        if (!list(")", expr)) return false;
      } else if (at("[")) {
        i++;
        if (!expr() || !at("]")) return false;
        i++;
      } else return true;
    }
  };
  const expr = () => {
    if (!unary()) return false;
    while (ts[i]?.t === "punct" && BINARY.has(ts[i].v)) {
      i++;
      if (!unary()) return false;
    }
    if (!at("?")) return true;
    i++;
    if (!expr() || !at(":")) return false;
    i++;
    return expr();
  };
  return ts.length > 0 && expr() && i === ts.length;
}

/**
 * Parses the object literal opened at token `o` (closed at `e`). Returns `{ keys, ok }` where `ok` is the value of a
 * leading `ok: true` / `ok: false` member ("true", "false" or null when the first member is not one of those), or null
 * when any member is outside the supported form: a plain identifier, either shorthand or `key: value` whose value is
 * one expression of the supported grammar (validValue); at most one trailing comma.
 */
function objectMembers(toks, pair, o, e) {
  const members = [[]];
  for (let i = o + 1; i < e; i++) {
    if (isP(toks[i], ",")) members.push([]);
    else {
      members[members.length - 1].push(toks[i]);
      if (pair.has(i) && pair.get(i) > i) {
        for (let j = i + 1; j <= pair.get(i); j++) members[members.length - 1].push(toks[j]);
        i = pair.get(i);
      }
    }
  }
  if (members.length > 1 && members[members.length - 1].length === 0) members.pop();
  const keys = [];
  for (const m of members) {
    if (m.length === 0 || m[0].t !== "word") return null;
    if (m.length > 1) {
      if (!isP(m[1], ":") || !validValue(m.slice(2))) return null;
    }
    keys.push(m[0].v);
  }
  const first = members[0];
  const ok = keys[0] === "ok" && first.length === 3 && first[2].t === "word" && (first[2].v === "true" || first[2].v === "false") ? first[2].v : null;
  return { keys, ok };
}

/**
 * The keys of the single success return `return { ok: true, … }` of `snapshotSource`, read from the guard source
 * without executing it. The source is tokenized first, so comments and string, template and regular-expression
 * literals never supply a declaration, a return or a field, and never hide one. Exactly one `snapshotSource` function
 * declaration must exist, exported, outside every bracket. Inside its body, returns of nested functions (a `{` after
 * `=>`, or after the `)` of a parameter list that no control word heads) belong to those functions and are ignored.
 * Every return of snapshotSource itself must be `return { ok: true|false, … };`, and exactly one must succeed, directly
 * in the function body (not in a nested block). Commas and colons inside nested calls, brackets or strings belong to
 * their value. Returns null (fail closed) on anything else: unlexable or unbalanced source, a regular expression or a
 * `/` in the body, another return form, a member that is not a plain identifier (shorthand or `key: value` with a
 * value), or a duplicate key.
 */
export function snapshotFields(guardSource) {
  if (typeof guardSource !== "string") return null;
  const toks = lex(guardSource);
  const pair = toks && matchBrackets(toks);
  if (!pair) return null;
  const decls = [];
  let depth = 0;
  toks.forEach((k, i) => {
    if (k.t === "punct" && OPEN[k.v]) depth++;
    else if (k.t === "punct" && CLOSE.has(k.v)) depth--;
    else if (k.t === "word" && k.v === "snapshotSource" && toks[i - 1]?.t === "word" && toks[i - 1].v === "function") decls.push({ i, depth });
  });
  if (decls.length !== 1 || decls[0].depth !== 0) return null;
  const d = decls[0].i;
  if (toks[d - 2]?.v !== "export" || !isP(toks[d + 1], "(")) return null;
  const b = pair.get(d + 1) + 1;
  if (!isP(toks[b], "{")) return null;
  const end = pair.get(b);
  const own = []; // per open brace inside the body: true when it belongs to snapshotSource itself (a block, an object)
  const ownAt = (i) => {
    for (let j = b + 1; j < i; j++) if (pair.has(j) && pair.get(j) > i && isP(toks[j], "{") && !own[j]) return false;
    return true;
  };
  const successes = [];
  for (let i = b + 1; i < end; i++) {
    const k = toks[i];
    if (k.t === "re" || isP(k, "/")) return null;
    if (isP(k, "{")) {
      const p = toks[i - 1];
      const fn = isP(p, "=>") || (isP(p, ")") && !(toks[pair.get(i - 1) - 1]?.t === "word" && CONTROL_WORDS.has(toks[pair.get(i - 1) - 1].v)));
      own[i] = !fn;
    }
    if (k.t !== "word" || k.v !== "return" || !ownAt(i)) continue;
    // A line terminator after `return` ends the statement (ASI): the `{` that follows is a block, not the value.
    if (!isP(toks[i + 1], "{") || toks[i + 1].nl) return null;
    const close = pair.get(i + 1);
    if (!isP(toks[close + 1], ";") && !isP(toks[close + 1], "}")) return null;
    const obj = objectMembers(toks, pair, i + 1, close);
    if (!obj || obj.ok === null) return null;
    if (obj.ok === "true") successes.push({ i, keys: obj.keys });
  }
  if (successes.length !== 1) return null;
  const s = successes[0];
  for (let j = b + 1; j < s.i; j++) if (pair.has(j) && pair.get(j) > s.i && isP(toks[j], "{")) return null;
  if (new Set(s.keys).size !== s.keys.length) return null;
  return s.keys.slice(1).sort();
}

/** The table rows (as cell arrays) of a section. */
function tableRows(section) {
  return section.split("\n").filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l))
    .map((l) => l.split("|").slice(1, -1).map((c) => norm(c)));
}

function reviewVerdict(row) {
  if (!row) return "review-missing";
  if (row.verdict === "Reject") return "review-rejected";
  if (row.verdict === "Approve") return (row.conditions ?? []).length ? "review-rejected" : null;
  if (row.verdict === "Approve-with-conditions") return (row.conditions ?? []).every((c) => c.status === "closed") ? null : "review-rejected";
  return "review-rejected";
}

/**
 * Evaluates the contract. inputs = { repo, contractPath, contractBytes, reviewPath, logPath }.
 * Returns { results, outcome, head, W, inputs } where `inputs` is the consumed-input inventory.
 */
export function evaluate({ repo, contractPath, contractBytes, reviewPath, logPath }) {
  const results = [];
  const note = (rule, subject, code, detail = "") => results.push({ rule, subject, ok: code === null, code, detail });
  const inv = inventory();
  const head = git(repo, ["rev-parse", "HEAD"]).trim();
  const W = sha256(contractBytes);
  let headBlob = null;
  try {
    headBlob = git(repo, ["rev-parse", `HEAD:${contractPath}`]).trim();
  } catch {
    // absent at HEAD: recorded as absence, never invented
  }
  inv.add({ role: "contract", kind: "working", path: contractPath, commit: head, blob: headBlob ?? "absent-at-HEAD", sha256: W, differsFromHead: headBlob === null ? true : git(repo, ["hash-object", contractPath]).trim() !== headBlob });

  const reviewBytes = readFile(inv, "review", reviewPath);
  const logBytes = readFile(inv, "check-log", logPath);
  let review = null;
  if (reviewBytes) {
    try {
      review = JSON.parse(reviewBytes.toString("utf8"));
    } catch {
      note("schema", "review", "review-unreadable");
    }
  }
  const checkLog = logBytes ? logBytes.toString("utf8") : null;

  const parsed = parseContract(contractBytes.toString("utf8"));
  if (parsed.error) {
    note("schema", contractPath, "contract-unreadable", parsed.error);
    return { results, outcome: "fail", head, W, inputs: inv.items };
  }
  const c = parsed.contract;
  const schema = schemaFindings(c);
  if (schema.length) {
    for (const s of schema) note("schema", s.subject, s.code, s.detail);
    return { results, outcome: "fail", head, W, inputs: inv.items };
  }

  // Review binding: the record must name exactly the bytes under test.
  const reviewBound = review && review.target?.path === contractPath && review.target?.sha256 === W;
  const row = (dor, tuple, scope) => {
    if (!review) return { code: "review-missing" };
    const rows = (review.rows ?? []).filter((r) => r.row === dor && r.tuple === tuple);
    if (!rows.length) return { code: "review-missing" };
    if (!reviewBound) return { code: "review-stale", detail: `review targets ${review.target?.sha256 ?? "nothing"}, tested ${W}` };
    const inScope = rows.find((r) => r.scope === scope);
    if (!inScope) return { code: "review-wrong-scope", detail: `scopes: ${rows.map((r) => r.scope).join(", ")}` };
    return { code: reviewVerdict(inScope) };
  };

  // SV3-DOR-01 — each tuple validated independently against its own historical Register revision (F3).
  const accepted = new Set();
  for (const t of c.tuples) {
    const subject = `${t.id} (${t.entry})`;
    const reg = readGit(repo, inv, `register@${t.id}`, t.registerCommit, REGISTER);
    const sec = reg === null ? null : entrySection(reg, t.entry);
    let code = null;
    let detail = "";
    if (!sec) code = "entry-absent-at-commit";
    else if (!quotedPaths(sec).includes(normPath(t.registeredObjectPath))) code = "entry-object-mismatch";
    else if (!quotedPaths(sec).includes(t.objectSha256)) code = "object-hash-mismatch";
    else if (scopeClause(sec) !== norm(t.scopeClause)) {
      code = "scope-mismatch";
      detail = `registered clause: ${scopeClause(sec) ?? "none"}`;
    } else {
      const bytes = readFile(inv, `object@${t.id}`, t.retainedObjectFile);
      if (!bytes) {
        code = "object-bytes-mismatch";
        detail = "retained object file absent";
      } else if (sha256(bytes) !== t.objectSha256) code = "object-bytes-mismatch";
    }
    if (code === null) ({ code, detail = "" } = row("SV3-DOR-01", t.id, "identity"));
    if (code === null) {
      const u1 = review?.u1Review;
      if (!u1) code = "review-missing";
      else if (u1.commit !== t.registerCommit) code = "review-stale";
      else if (u1.scope !== "U1 registration") code = "review-wrong-scope";
      else code = reviewVerdict(u1);
      if (code) detail = "U1 review citation";
    }
    note("dor-identity", subject, code, detail);
    if (code === null) accepted.add(t.id);
  }

  // SV3-DOR-02 — intent through the mapping (no inline ID required in the entries).
  if (c.inlineIdRequired === true) note("dor-mapping", "contract", "inline-id-required", "intent is validated through the mapping");
  const fn = readGit(repo, inv, "requirement-source@HEAD", head, c.requirementSource);
  const tupleIds = c.tuples.map((t) => t.id);
  for (const m of c.mapping) {
    let code = null;
    if (!tupleIds.includes(m.tuple) || !accepted.has(m.tuple)) code = "mapping-unknown-tuple";
    else if (m.requirements.some((id) => !fn || !fn.includes(`| \`${id}\` |`))) code = "requirement-absent";
    else code = row("SV3-DOR-02", m.tuple, "mapping").code;
    note("dor-mapping", m.tuple, code);
  }

  // SV3-DOR-03 — tier applicability at HEAD; tier-sweep in the bound log; human review.
  const regHead = readGit(repo, inv, "register@HEAD", head, REGISTER);
  const logBound = checkLog && checkLog.includes(`HEAD ${head}`) && checkLog.includes(W);
  const clarifications = Array.isArray(c.tierClarifications) ? c.tierClarifications : [];
  const used = new Set();
  for (const t of c.tuples) {
    const sec = entrySection(regHead, t.entry);
    const bad = sec ? unaffectedWithoutReason(sec) : null;
    let code = null;
    let detail = "";
    const mine = clarifications.filter((x) => x.tuple === t.id);
    if (!sec || bad === null) code = "tier-table-missing";
    else {
      // B1: a reasonless row is resolved only by a clarification bound to this entry, this row and its recorded reason.
      for (const r of bad) {
        const label = norm(r.split("|").slice(1, -1)[0] ?? "");
        const cl = mine.find((x) => norm(x.rowLabel) === label);
        if (!cl) {
          code = "unaffected-without-reason";
          break;
        }
        used.add(cl);
        const csec = entrySection(regHead, cl.decision);
        if (csec) readGit(repo, inv, `clarification@${t.id}`, head, REGISTER);
        const bound = cl.entry === t.entry && csec && tableRows(csec).some((cells) =>
          cells.includes(`\`${t.entry}\``) && cells.includes(label) && cells.includes(norm(cl.reason)));
        if (!bound) {
          code = "tier-clarification-unbound";
          detail = csec ? `no row in ${cl.decision} binds ${t.entry}, this row and this reason` : `${cl.decision} absent at HEAD`;
          break;
        }
      }
    }
    if (code) {
      // already refused
    } else if (!checkLog) code = "check-log-missing";
    else if (!logBound) code = "check-log-stale";
    else if (!/^\s*PASS\s+tier-sweep\b/m.test(checkLog)) code = "tier-sweep-fail";
    else code = row("SV3-DOR-03", t.id, "tiers").code;
    note("dor-tiers", t.id, code, detail);
  }
  // A clarification that resolves no reasonless row is not a reason for anything: refused, never ignored.
  for (const x of clarifications) if (!used.has(x)) note("dor-tiers", `${x.tuple} clarification`, "tier-clarification-unused", norm(x.rowLabel));

  // SV3-DOR-04 — execution and verification boundaries, each equal to its accepted source at HEAD.
  const b = c.boundaries;
  const rule = readGit(repo, inv, "expected-bytes-rule@HEAD", head, b.expectedBytesRule.source);
  note("dor-boundaries", "expected-bytes rule", rule && norm(rule).includes(norm(b.expectedBytesRule.phrase)) ? null : "expected-bytes-rule-absent");
  const ex = readFile(inv, "check-exceptions", b.checkExceptions.file);
  note("dor-boundaries", "check exceptions", ex && sha256(ex) === b.checkExceptions.sha256 ? null : "exception-text-mismatch");
  const fields = snapshotFields(readGit(repo, inv, "guard-source@HEAD", head, b.bindings.source));
  const want = [...b.bindings.fields].sort();
  note("dor-boundaries", "binding fields", fields === null ? "binding-source-unparsed" : JSON.stringify(fields) === JSON.stringify(want) ? null : "binding-list-drift",
    fields ? `guard: ${fields.join(",")}` : "snapshotSource not found");
  note("dor-boundaries", "review roles", b.roles.phrases.every((p) => norm(regHead ?? "").includes(norm(p))) ? null : "role-mismatch");
  const adopt = entrySection(regHead, b.t2t3.decision);
  note("dor-boundaries", "T2/T3 adoption", adopt && [b.t2t3.t2, b.t2t3.t3].every((p) => norm(adopt).includes(norm(p))) ? null : "t2-t3-not-adopted");

  // SV3-DOR-05 — structure and no backdating.
  const tpl = readGit(repo, inv, "template@HEAD", head, c.template.path);
  note("dor-structure", "template", tpl !== null && sha256(Buffer.from(tpl, "utf8")) === c.template.sha256 ? null : "template-hash-mismatch");
  for (const s of c.states) {
    let code = null;
    if (s.state !== "proposed") {
      const ev = s.evidence;
      const p = ev?.path ? (isAbsolute(ev.path) ? ev.path : join(repo, ev.path)) : null;
      const bytes = p ? readFile(inv, `state-evidence@${s.item}`, p) : null;
      if (!bytes || !ev?.sha256 || sha256(bytes) !== ev.sha256) code = "backdated-state";
    }
    note("dor-structure", `state ${s.item}`, code);
  }
  if (c.resultRoot && existsSync(join(repo, c.resultRoot))) note("dor-structure", c.resultRoot, "result-file-present");

  return { results, outcome: results.every((r) => r.ok) ? "pass" : "fail", head, W, inputs: inv.items };
}

function arg(argv, name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
}

export function main(argv) {
  const repo = arg(argv, "repo");
  const contractPath = arg(argv, "contract");
  const out = arg(argv, "out");
  if (!repo || !contractPath) {
    console.error("usage: validate-dor --repo <root> --contract <repo-relative path> --review <review.json> --check-log <log> [--out <receipt>]");
    return 2;
  }
  const full = join(repo, contractPath);
  if (!existsSync(full)) {
    console.error(`contract not found: ${contractPath}`);
    return 2;
  }
  const { results, outcome, head, inputs } = evaluate({
    repo, contractPath, contractBytes: readFileSync(full), reviewPath: arg(argv, "review"), logPath: arg(argv, "check-log"),
  });
  const self = fileURLToPath(import.meta.url);
  const selfBytes = readFileSync(self);
  const inRepo = resolve(self).startsWith(resolve(repo));
  const selfRel = inRepo ? resolve(self).slice(resolve(repo).length + 1).split("\\").join("/") : null;
  let selfBlob = null;
  if (selfRel) {
    try {
      selfBlob = git(repo, ["rev-parse", `HEAD:${selfRel}`]).trim();
    } catch {
      selfBlob = "absent-at-HEAD";
    }
  }
  const receipt = {
    tool: "validate-dor",
    version: 2,
    head,
    validator: { path: selfRel ?? self, commit: head, blob: selfBlob ?? "outside-repo", sha256: sha256(selfBytes) },
    normalization: "Inputs are hashed as the exact bytes read and decoded as UTF-8 with no newline change. Scope clauses, phrases and requirement rows are compared with runs of whitespace collapsed; paths after backslash-to-slash and drive-letter lowercasing.",
    inputs,
    results,
    outcome,
    meaning: "DoR completion only. Not a DoD attempt result, not Phase 2 proof, and no commit, push or release authority.",
  };
  const text = JSON.stringify(receipt, null, 2) + "\n";
  if (out) writeFileSync(out, text, { flag: "wx" });
  else process.stdout.write(text);
  const failed = results.filter((r) => !r.ok);
  console.error(`validate-dor · ${outcome} · ${results.length - failed.length}/${results.length} checks hold`);
  for (const f of failed) console.error(`  FAIL ${f.rule} · ${f.subject} · ${f.code}${f.detail ? ` (${f.detail})` : ""}`);
  return outcome === "pass" ? 0 : 1;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  process.exitCode = main(process.argv.slice(2));
}
