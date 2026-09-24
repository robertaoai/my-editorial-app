// Jev System One — the two-checkpoint evidence evaluator (`D-259`).
//
// WHAT IT IS. A deterministic reader of canonical behaviour IDs at two points
// in one MMF's life:
//
//   * `readiness`  — before the GitHub Issue: does every in-scope behaviour
//                    have a complete DoR→DoD evidence plan, pinned to the
//                    exact source row it cites?
//   * `completion` — after construction: does every DoD obligation have
//                    current, passing, revision-pinned delivery evidence,
//                    including the negative and failing-first proof it owes?
//
// WHAT IT IS NOT. A receipt is EVIDENCE. It does not check a DoR box, create
// an Issue, close a lane, accept a DoD or authorize a merge — those remain the
// governed record and the Judge's acts (`D-245`, `D-254`, `D-259`). A passing
// completion receipt means "ready for independent review", never "done".
//
// It cites, it never copies: a behaviour is a source path plus a stable ID
// plus the hash of that one row. A changed row is stale evidence, not a
// silent pass. No model output reaches the pass/fail result; `advisories`
// exists so a later advisory reviewer has somewhere to write that is NOT the
// gate.

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const TOOL = "jev-system-one";
export const VERSION = "1.0.0";

/** Source-row tags that put a behaviour outside current build scope. */
const OUT_OF_SCOPE_TAGS = ["[historical]", "[decided_target_held]"];

export const sha256 = (text) => createHash("sha256").update(text).digest("hex");

const read = (root, rel) => readFileSync(join(root, rel), "utf8").replace(/\r\n/g, "\n");

const cells = (line) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());

const bare = (text) => text.replace(/`/g, "").trim();

/** The row whose first cell, stripped of backticks and tags, equals `id`. */
export function findRows(markdown, id) {
  const rows = [];
  const lines = markdown.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith("|")) continue;
    const first = bare(cells(lines[i])[0] ?? "")
      .replace(/\s*⚠\s*/g, " ")
      .replace(/\s*\[[A-Za-z0-9_→]+\]\s*/g, " ")
      .trim();
    if (first === id) rows.push({ line: lines[i], lineNo: i + 1, header: headerFor(lines, i) });
  }
  return rows;
}

function headerFor(lines, i) {
  let j = i;
  while (j > 0 && lines[j - 1].startsWith("|")) j--;
  return cells(lines[j]).map((h) => h.toLowerCase());
}

/** Given/When/Then cells of a table row, located by its own header. */
export function gwt(row) {
  const c = cells(row.line);
  const at = (name) => c[row.header.indexOf(name)] ?? "";
  return { given: at("given"), when: at("when"), then: at("then") };
}

/** `- [ ] **Label.**` / `- [x] **Label:**` items under `## DoD checklist`. */
export function dodLabels(packet) {
  const section = packet.split(/^## DoD checklist$/m)[1]?.split(/^## /m)[0] ?? "";
  return [...section.matchAll(/^- \[[ x]\] \*\*([^*]+?)[.:]?\*\*/gm)].map((m) => bare(m[1]));
}

/** `- [x] \`DOR-Rn\`` lines → { "DOR-R1": true, ... }. */
export function dorBoxes(packet) {
  const boxes = {};
  for (const m of packet.matchAll(/^- \[([ x])\] `(DOR-R\d+)`/gm)) boxes[m[2]] = m[1] === "x";
  return boxes;
}

/** The `| DoR row | DoD obligation | Evidence class |` map, recorded once in the packet. */
export function dorDodMap(packet) {
  const lines = packet.split("\n");
  const start = lines.findIndex((l) => /^\|\s*DoR row\s*\|\s*DoD obligation\s*\|\s*Evidence class\s*\|/i.test(l));
  if (start < 0) return null;
  const rows = [];
  for (let i = start + 2; i < lines.length && lines[i].startsWith("|"); i++) {
    const [dor, dod, evidence] = cells(lines[i]);
    rows.push({ dor: bare(dor), dod: dod.split(";").map((s) => bare(s)).filter(Boolean), evidence: bare(evidence ?? "") });
  }
  return rows;
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

export function revision(root) {
  try {
    return { head: git(root, ["rev-parse", "HEAD"]), clean: git(root, ["status", "--porcelain"]) === "" };
  } catch {
    return { head: null, clean: false };
  }
}

function receipt(mode, root, manifestPath, manifestText, results, sources) {
  const failed = results.filter((r) => !r.ok);
  const { head, clean } = revision(root);
  return {
    tool: TOOL,
    version: VERSION,
    mode,
    packet: JSON.parse(manifestText).packet,
    evaluatedAt: head,
    treeClean: clean,
    generatedAt: new Date().toISOString(),
    manifest: { path: manifestPath, sha256: sha256(manifestText) },
    sources: [...sources].sort().map((p) => ({ path: p, sha256: sha256(read(root, p)) })),
    results,
    advisories: [],
    outcome: failed.length === 0 ? (mode === "completion" ? "ready-for-independent-review" : "pass") : "fail",
    meaning:
      "Evidence only (D-259). Does not check a DoR box, create an Issue, close a lane, accept a DoD or authorize a merge.",
  };
}

/** Pre-Issue checkpoint. */
export function readiness(root, manifestPath) {
  const manifestText = read(root, manifestPath);
  const m = JSON.parse(manifestText);
  const results = [];
  const note = (rule, subject, ok, detail = "") => results.push({ rule, subject, ok, detail });
  const sources = new Set([manifestPath]);

  if (!existsSync(join(root, m.packetPath))) {
    note("packet-exists", m.packetPath, false, "packet file missing");
    return receipt("readiness", root, manifestPath, manifestText, results, sources);
  }
  sources.add(m.packetPath);
  const packet = read(root, m.packetPath);
  const labels = dodLabels(packet);
  const boxes = dorBoxes(packet);
  const map = dorDodMap(packet);

  // 1. Every DoR row exists in the packet and maps exactly once to real DoD obligations.
  for (const dor of m.dorRows) {
    note("dor-row-present", dor, dor in boxes, dor in boxes ? (boxes[dor] ? "checked" : "unchecked") : "no checkbox line");
  }
  if (!map) {
    note("dor-dod-map-present", m.packetPath, false, "no `| DoR row | DoD obligation | Evidence class |` table");
  } else {
    for (const dor of m.dorRows) {
      const hits = map.filter((r) => r.dor === dor);
      if (hits.length !== 1) {
        note("dor-maps-once", dor, false, `${hits.length} map rows`);
        continue;
      }
      const missing = hits[0].dod.filter((d) => !labels.includes(d));
      note("dor-maps-once", dor, true);
      note("dor-maps-to-dod", dor, hits[0].dod.length > 0 && missing.length === 0,
        missing.length ? `unknown DoD obligation(s): ${missing.join(", ")}` : hits[0].dod.join("; "));
      note("evidence-class-named", dor, hits[0].evidence.length > 0);
    }
    for (const r of map) if (!m.dorRows.includes(r.dor)) note("map-in-scope", r.dor, false, "map row not in the manifest's DoR rows");
  }

  // 2. Every behaviour is pinned to exactly one live, in-scope, complete source row.
  for (const b of m.behaviours) {
    const subject = `${b.id} @ ${b.source}`;
    if (!existsSync(join(root, b.source))) {
      note("source-exists", subject, false, "source file missing");
      continue;
    }
    sources.add(b.source);
    const rows = findRows(read(root, b.source), b.id);
    if (rows.length !== 1) {
      note("row-unique", subject, false, `${rows.length} matching rows`);
      continue;
    }
    const row = rows[0];
    const g = gwt(row);
    const empty = Object.entries(g).filter(([, v]) => !v).map(([k]) => k);
    note("gwt-complete", subject, empty.length === 0, empty.length ? `empty: ${empty.join(", ")}` : `line ${row.lineNo}`);
    const hash = sha256(row.line.trim());
    note("row-pinned", subject, hash === b.rowHash, hash === b.rowHash ? "" : `row changed since pinned (now ${hash.slice(0, 12)})`);
    const tag = OUT_OF_SCOPE_TAGS.find((t) => row.line.includes(t));
    const excused = tag && b.disposition?.decision;
    note("row-in-scope", subject, !tag || Boolean(excused),
      tag ? (excused ? `${tag} carried under ${b.disposition.decision}` : `source row is ${tag}; needs a recorded Judge disposition`) : "");
    note("behaviour-maps-to-dod", subject, labels.includes(b.dod), b.dod);
  }

  // 3. Scope parity: the packet DoD's acceptance line and the behaviours pinned to that obligation are
  //    the SAME set — nothing silently added or dropped. Any ID shape counts (`AC-01`, `SM05-N1`), not
  //    only `AC-*`; decision and DoR references on the line are not behaviours (`D-260`, closing `B-133`).
  const acceptance = m.acceptanceObligation ?? "Acceptance cases pass against the real database";
  const lines = packet.split("\n");
  const at = lines.findIndex((l) => l.includes(`**${acceptance}`));
  let end = at + 1;
  while (at >= 0 && end < lines.length && /^\s+\S/.test(lines[end])) end++;
  const acLine = at < 0 ? "" : lines.slice(at, end).join(" "); // the whole checklist item, wrapped lines included
  const listed = [...new Set([...acLine.matchAll(/`([A-Z][A-Z0-9]*-[A-Za-z0-9-]+)`/g)].map((x) => x[1]))]
    .filter((id) => !/^(D-\d+|DOR-R\d+|G\d+|B-\d+)$/.test(id));
  const pinned = m.behaviours.filter((b) => b.dod === acceptance).map((b) => b.id);
  for (const id of listed) note("scope-covered", id, pinned.includes(id), pinned.includes(id) ? "" : "listed in DoD, not in manifest");
  for (const id of pinned) note("scope-authorized", id, listed.includes(id), listed.includes(id) ? "" : "in manifest, not listed in DoD");

  return receipt("readiness", root, manifestPath, manifestText, results, sources);
}

/** Post-build checkpoint. `evidencePath` is the Lane B evidence manifest named in the work order. */
export function completion(root, manifestPath, evidencePath) {
  const manifestText = read(root, manifestPath);
  const m = JSON.parse(manifestText);
  const results = [];
  const note = (rule, subject, ok, detail = "") => results.push({ rule, subject, ok, detail });
  const sources = new Set([manifestPath, m.packetPath]);

  if (!existsSync(join(root, evidencePath))) {
    note("evidence-exists", evidencePath, false, "evidence manifest missing");
    return receipt("completion", root, manifestPath, manifestText, results, sources);
  }
  sources.add(evidencePath);
  const ev = JSON.parse(read(root, evidencePath));
  const labels = dodLabels(read(root, m.packetPath));

  // 1. It builds on a passing readiness receipt for the SAME scope.
  const rr = ev.readinessReceipt ?? {};
  if (!rr.path || !existsSync(join(root, rr.path))) {
    note("readiness-receipt", rr.path ?? "(none)", false, "readiness receipt missing");
  } else {
    const text = read(root, rr.path);
    const r = JSON.parse(text);
    note("readiness-receipt-hash", rr.path, sha256(text) === rr.sha256);
    note("readiness-receipt-mode", rr.path, r.mode === "readiness" && r.outcome === "pass", `${r.mode}/${r.outcome}`);
    note("readiness-same-scope", rr.path, r.manifest?.sha256 === sha256(manifestText), "manifest changed since readiness");
  }

  // 2. Every DoD obligation (except those only a later actor can meet) has evidence.
  const owed = labels.filter((l) => !(m.completionExempt ?? []).includes(l));
  for (const l of owed) {
    const items = (ev.items ?? []).filter((i) => i.dod === l);
    note("dod-evidenced", l, items.length > 0, `${items.length} item(s)`);
    if ((m.negativeRequired ?? []).includes(l)) {
      note("negative-evidence", l, items.some((i) => i.negative === true), "needs at least one negative/refusal item");
    }
  }

  // 3. Each item is real, passing, current, and inside the pinned scope.
  const ids = new Set(m.behaviours.map((b) => b.id));
  const covered = new Set();
  const { head } = revision(root);
  for (const [n, i] of (ev.items ?? []).entries()) {
    const subject = `item ${n + 1} (${i.dod})`;
    note("item-dod-known", subject, labels.includes(i.dod));
    const exists = Boolean(i.artifact) && existsSync(join(root, i.artifact));
    note("artifact-exists", subject, exists, i.artifact ?? "(none)");
    note("result-pass", subject, i.result === "pass", String(i.result));
    for (const id of i.ids ?? []) {
      note("id-in-scope", `${subject} ${id}`, ids.has(id));
      covered.add(id);
    }
    if (exists && i.revision && head) {
      let current = false;
      try {
        git(root, ["merge-base", "--is-ancestor", i.revision, head]);
        current = git(root, ["diff", "--name-only", i.revision, head, "--", i.artifact]) === "";
      } catch {
        current = false;
      }
      note("artifact-current", subject, current, current ? i.revision.slice(0, 12) : "revision unknown or artifact changed since");
    } else {
      note("artifact-current", subject, false, "no revision recorded");
    }
    if ((m.failingFirstRequired ?? []).includes(i.dod)) {
      const ff = i.failingFirst?.result === "fail" && Boolean(i.failingFirst?.revision);
      note("failing-first", subject, ff || Boolean(i.characterization), ff ? "" : i.characterization ? "characterized" : "no failing-first run or characterization");
    }
  }
  for (const id of ids) note("behaviour-evidenced", id, covered.has(id));

  return receipt("completion", root, manifestPath, manifestText, results, sources);
}

/** Current row hashes for a manifest — used when a Register act re-pins scope. */
export function pins(root, manifestPath) {
  const m = JSON.parse(read(root, manifestPath));
  return m.behaviours.map((b) => {
    const rows = existsSync(join(root, b.source)) ? findRows(read(root, b.source), b.id) : [];
    return { id: b.id, source: b.source, rows: rows.length, rowHash: rows.length === 1 ? sha256(rows[0].line.trim()) : null };
  });
}
