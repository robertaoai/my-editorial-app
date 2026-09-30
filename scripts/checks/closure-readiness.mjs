// `C-14` check 13 — `D-101`, raised as `B-011`: response is not closure.
// HARDENED BY `D-102`, raised as `B-013` and `B-017`.
//
// Check 10 tests RECEIPT — did Lane A look at the entry. `B-011` showed that
// `D-100` then used "all answered" as evidence that a phase's condition 2 was
// met. **A reply is not a fix.** Nothing distinguished an answer from an
// applied correction, a verified correction, a superseding decision, or a
// deferral with an owner.
//
// This check adds the missing half WITHOUT making the healthy case red:
//
//   * It is SILENT while no phase claims closure. During a sprint a full
//     backlog of `Open` and `Answered` entries is normal, and a check that
//     fired on that would be ignored inside a week (`D-83`, `D-90`).
//   * It FIRES when the phase register marks a phase closed, and then every
//     entry RAISED AGAINST THAT PHASE must carry a terminal `Resolution` —
//     `Verified`, `Deferred` with a `Follow-up-Tier`, `Withdrawn`, or
//     `Superseded` with a `Superseded-By`.
//
// It also reports the derived closure matrix on every run, so the view exists
// without a second hand-maintained backlog file (`B-011` repair item 6).
//
// WHAT `D-102` CHANGED, AND WHY EACH CHANGE WAS EARNED:
//
//   * PHASE SCOPE (`B-013` item 6). The gate was global: any phase closing
//     required EVERY entry in the directory to be terminal, so a Phase 3 item
//     raised next month could fail Phase 1's boundary. The rule always said
//     "raised against it"; the check had no field to read that from. `Phase:`
//     is now mandatory and the gate is scoped to it.
//   * MALFORMED STATE IS REJECTED IMMEDIATELY (`B-017` item 6). Terminal
//     vocabulary, companion fields and commit shape are validated on every
//     run. Only the question "does an OPEN entry block closure" waits for a
//     closure claim. Invalid state used to accumulate silently until the Judge
//     boundary, which is the worst possible moment to discover it.
//   * `Verified-At-Commit` IS PROVEN, NOT ACCEPTED (`B-013` items 2 and 4).
//     Three entries read `pending — this pass`, and `pending` is not a commit;
//     the field was never validated at all. It must now be hexadecimal, and on
//     a full-history local run the object must actually exist.
//   * `Verified-By` IS AN ACTOR (`B-013` item 3, `B-017` items 3 and 4).
//     `B-011` asked for it, `D-101` adopted five fields and dropped this one,
//     and the template then defaulted it to `Acknowledged` — a receipt state
//     wearing the word "verified". A resolution written and verified by the
//     same side is not verification, and the check now says so.
//
// WHAT IT STILL CANNOT DO — stated, not buried:
//   * It cannot tell whether `Evidence` is TRUE. It can now prove the commit
//     exists; nothing re-runs the proof that was performed there. This is the
//     apparatus-wide arrival-not-correctness limit (`F5`, `C-22`).
//   * `Verified-By` is self-declared. The check can reject the answering lane
//     naming itself; it cannot confirm that the named actor did the work.
//     Separation is enforced in FORM, and remains procedural in SUBSTANCE.
//   * On a shallow CI checkout the commit's existence cannot be proven. The
//     check then reports a CLEARLY LABELLED limited result — it does not claim
//     existence was verified. Claiming it would be `probe_that_cannot_fail`.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { ENTRY_FILE, field, phaseSets } from "./handoff-fields.mjs";

const DIR = "docs/handoff";

// Exported so `terminal-return.mjs` (`B-097`) shares this exact vocabulary
// rather than keeping a second copy that can drift from it.
export const TERMINAL = new Set(["verified", "deferred", "withdrawn", "superseded"]);

// `B-013` repair 3, and the honest half of this mechanism.
//
// `D-101` derived the word `Verified` from a field the ANSWERING lane writes.
// `B-011` had asked for `Verified-By` precisely so that word would mean
// something; `D-101` adopted five fields and dropped that one. Ten entries then
// read `Verified` on Lane A's own say-so.
//
// Rather than weaken `Verified`, `D-102` adds the state that was actually true:
// `Applied` — the fix is in the tree and anchored to a commit, and NOBODY
// INDEPENDENT HAS CONFIRMED IT. It is deliberately NON-terminal, so it does not
// satisfy a phase-closure condition. Recording ten honest `Applied` rows costs
// a red condition; recording ten unearned `Verified` rows costs the meaning of
// the word.
// `awaiting` was a second word for the same state and is REMOVED (`D-104`):
// `channel-docs` reported it as a resolution the README and template did not
// offer, which was true — nothing had ever offered it, because `Applied`
// replaced it in the same pass that introduced it.
const PROVISIONAL = new Set(["applied"]);

// A commit identifier, not "a string with no spaces in it". The previous test
// accepted `not-a-sha`; `B-017` item 5 demonstrated it.
const SHA = /^[0-9a-f]{7,40}$/i;

// The answering side cannot be the verifying side. `Acknowledged` is receipt.
//
// `C-39` (`D-207`, correcting `D-206`) — match the LEADING ACTOR against a CLOSED
// allowlist: not by prefix regex, and not by containment. The `^`-anchored regex
// this replaces let the values this channel actually writes straight through —
// "reviewed by Lane A" opens with "reviewed" — and never listed `Claude Cowork`,
// which `D-200` made part of the answering side. Containment (`D-206`) was
// measured to reject nine legitimate records whose verifiers name Lane A
// precisely to assert their independence from it, and is withdrawn.
//
// MEMBERSHIP IS POLICY AND IS COWORK'S (`D-208`); this code only executes it.
// The set is safe ONLY because it is closed: a new actor is added to the
// register's `C-39` block first, then here. An unknown leading word is
// rejected — which is how the em-dash audit records are caught: their leading
// token is the disclaimer, not an actor.
const ACTOR_TOKENS = [
  "lane a", "lane b", "lane c", "claude code", "claude cowork",
  "codex", "antigravity", "robert tan", "chief editor", "judge",
];
const EXCLUDED_WHEN_LEADING = new Set([
  "lane a", "claude code", "claude cowork", "acknowledged", "answered", "self", "same",
]);
// Longest first, so a longer token is never shadowed by a shorter one.
const LEADING_TOKENS = [...new Set([...ACTOR_TOKENS, ...EXCLUDED_WHEN_LEADING])].sort((a, b) => b.length - a.length);
// Decoration only — whitespace, markdown emphasis and code marks, quotes,
// brackets, colons and dashes. Never a word: stripping words is the guess.
const LEADING_DECORATION = /^[\s*_`"'\u201c\u201d\u2018\u2019()[\]>:\u2014\u2013-]+/;

/**
 * The leading actor of a `Verified-By` value, or null when it opens with no
 * known token. A token must end at a word boundary: `Lane B` matches
 * "Lane B (Codex)" but not "Lane Bx"; `Same` does not match "Sameday".
 */
export function leadingActor(value) {
  const s = String(value).replace(LEADING_DECORATION, "").toLowerCase();
  for (const tok of LEADING_TOKENS) {
    if (s.startsWith(tok) && !/[a-z0-9]/.test(s.charAt(tok.length))) {
      return { token: tok, excluded: EXCLUDED_WHEN_LEADING.has(tok) };
    }
  }
  return null;
}

/** Is history deep enough to prove a commit exists? A shallow clone is not. */
function historyIsFull() {
  try {
    return execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim() !== "true";
  } catch {
    return false;
  }
}

function commitExists(sha) {
  try {
    execFileSync("git", ["cat-file", "-e", `${sha}^{commit}`], {
      stdio: ["ignore", "ignore", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

// `D-364` items 5–7, unit `U2`; trigger ruled by the Judge in `D-367` item 3.
// THE GATE 2 MODE. `SV-002` §2.3.1 is the single Gate 2 tracker: one row per
// non-turn-report entry lacking independent verification, each with an Order
// (`O0`–`O5`), a Scope (`SM05` | `non-SM05`) and a Clearance (`open` |
// `closed` | `received`). This mode REPORTS on every run and FAILS only while
// a Gate 2 clearance is claimed — the same "silent until claimed" rule the
// phase gate above follows. An unconditional failure would turn every Lane A
// commit red until Gate 2; a report-only mode could never fail.
//
// Under a claim it fails on exactly `D-364` item 7's two conditions — an
// unclosed non-SM05 row (a live entry missing from the tracker counts: an
// unlisted entry cannot have been cleared), and a derivation older than the
// newest handoff disposition change. SM05 rows not yet `received` are reported
// only: item 5's receipts are reviewed, not parsed, and failing on them would
// exceed the bound item 7 authorized.
export const TRACKER_PATH = "docs/v1/work-packets/SETUP-SPIKE-000/SV-002.md";
export const SM05_PATH = "docs/v1/work-packets/V1/V1-SM05.md";
const TRACKER_HEADING = /^#{3,4}\s+2\.3\.1\s+Gate 2 tracker\b/m;

/** The §2.3.1 tracker, or `null` when the section is absent. Pure. */
export function parseTracker(text) {
  const m = TRACKER_HEADING.exec(String(text));
  if (!m) return null;
  const rest = text.slice(m.index + m[0].length);
  const end = rest.search(/^#{1,4}\s/m);
  const body = end < 0 ? rest : rest.slice(0, end);
  const derivedAt = (/^-\s*\*\*Derived at:\*\*\s*`?([0-9a-f]{7,40})`?/im.exec(body) || [])[1] ?? null;
  const claimRaw = (/^-\s*\*\*Gate 2 clearance claimed:\*\*\s*(.*)$/im.exec(body) || [])[1];
  const claim = claimRaw === undefined ? null : claimRaw.trim();
  const rows = [];
  for (const line of body.split("\n")) {
    const c = line.split("|").slice(1, -1).map((x) => x.trim());
    if (c.length < 5 || !/^`?[BC]-\d+/.test(c[0])) continue;
    const key = c[0].replace(/`/g, "");
    const child = (/\(([^)]+)\)/.exec(key) || [])[1] ?? null;
    rows.push({ key, entry: key.split(/\s/)[0], child, order: c[1], scope: c[2], clearance: c[3] });
  }
  return { derivedAt, claim, rows };
}

/**
 * `U2-F1` (Lane B, `4164ce3`; repaired under `D-370`). The `SV-002` §3.3 child
 * matrix: each keyed child, its parent handoff and its scope. A child whose
 * "Consumed via" cell opens with `none` has no SM05 consumer (non-SM05);
 * any other child is consumed by SM05. A whole-entry tracker row hid mixed
 * children — receiving one SM05 child could make a sibling with open
 * non-SM05 scope look settled. Pure.
 */
export function parseChildMatrix(text) {
  const m = /^###\s+3\.3\s/m.exec(String(text));
  if (!m) return [];
  const rest = text.slice(m.index + m[0].length);
  const end = rest.search(/^###?\s/m);
  const body = end < 0 ? rest : rest.slice(0, end);
  const out = [];
  for (const line of body.split("\n")) {
    const c = line.split("|").slice(1, -1).map((x) => x.trim());
    const key = (/^`([^`]+)`$/.exec(c[0] ?? "") || [])[1];
    if (!key || c.length < 4) continue;
    const parent = /^B071-/.test(key)
      ? "B-071"
      : (/^([BC]-\d{3})\./.exec(key) || [])[1] ?? null;
    out.push({ key, parent, scope: /^none\b/i.test(c[3]) ? "non-SM05" : "SM05", via: c[3] });
  }
  return out;
}

const SCOPES = new Set(["SM05", "non-SM05"]);
const CLEARANCES = new Set(["open", "closed", "received"]);

/** `true` while the SM05 packet's `**Status:**` paragraph still reads BLOCKED. Pure. */
export function sm05Blocked(text) {
  const m = /^\*\*Status:\*\*([\s\S]*?)(?:\n\s*\n|$)/m.exec(String(text));
  return m ? /\bBLOCKED\b/.test(m[1]) : false;
}

/** Whether a Gate 2 clearance is claimed, and why. Pure. */
export function gate2Claimed(tracker, blocked) {
  const lineClaim = tracker && tracker.claim !== null && !/^(no|—|-|none)?$/i.test(tracker.claim);
  if (lineClaim) return `§2.3.1 reads "claimed: ${tracker.claim}"`;
  if (!blocked) return "`V1-SM05` no longer reads BLOCKED";
  return null;
}

/**
 * Gate 2 findings and report. Pure — git answers arrive as arguments.
 * `live`: Map entryId → true when the header is independently Verified.
 * `stale`: true / false, or null when history could not answer.
 */
export function gate2Evaluate({ tracker, live, claimed, stale, children = [] }) {
  const findings = [];
  if (!tracker) {
    if (claimed) findings.push(`${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but §2.3.1 has no tracker (\`D-364\` item 6)`);
    return { findings, report: "Gate 2 tracker absent" };
  }
  const listed = new Set(tracker.rows.map((r) => r.entry));
  const missing = [...live.entries()].filter(([id, verified]) => !verified && !listed.has(id)).map(([id]) => id);

  // `U2-F2` (`D-370`). A Scope or Clearance outside the canonical vocabulary
  // used to fall through both tallies, so a malformed open row read as
  // cleared. An unclassifiable row is now INVALID: reported always, and under
  // a claim it is not closed. `received` belongs to SM05 rows only.
  const childScope = new Map(children.map((c) => [c.key, c]));
  const invalid = [];
  for (const r of tracker.rows) {
    const why = !SCOPES.has(r.scope)
      ? `Scope "${r.scope}" is not \`SM05\` or \`non-SM05\``
      : !CLEARANCES.has(r.clearance)
        ? `Clearance "${r.clearance}" is not \`open\`, \`closed\` or \`received\``
        : r.clearance === "received" && r.scope !== "SM05"
          ? "`received` is an SM05 receipt; a non-SM05 row closes by verification or Judge acceptance"
          : r.child && childScope.has(r.child) && childScope.get(r.child).scope !== r.scope
            ? `Scope "${r.scope}" disagrees with §3.3, where \`${r.child}\` is ${childScope.get(r.child).scope}`
            : null;
    if (why) invalid.push({ row: r, why });
  }
  const isInvalid = new Set(invalid.map((i) => i.row));

  // `U2-F1` (`D-370`). Every §3.3 child of a tracked, unverified entry must be
  // referenced by its own row — an unreferenced child is unclosed, exactly as
  // an unlisted entry is.
  const referenced = new Set(tracker.rows.map((r) => r.child).filter(Boolean));
  const unreferenced = children.filter((c) => c.parent && live.get(c.parent) === false && !referenced.has(c.key));

  const unclosed = tracker.rows.filter(
    (r) => !isInvalid.has(r) && r.scope === "non-SM05" && r.clearance !== "closed" && live.get(r.entry) !== true,
  );
  const unreceived = tracker.rows.filter(
    (r) => !isInvalid.has(r) && r.scope === "SM05" && !["received", "closed"].includes(r.clearance) && live.get(r.entry) !== true,
  );
  if (claimed) {
    for (const { row, why } of invalid) {
      if (live.get(row.entry) === true) continue; // header independently Verified: closed regardless
      findings.push(
        `${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but row \`${row.key}\` cannot be classified — ${why}. An unclassifiable row is not closed (\`D-364\` item 7, \`U2-F2\`)`,
      );
    }
    for (const c of unreferenced) {
      findings.push(
        `${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but §3.3 child \`${c.key}\` (${c.scope}) of unverified \`${c.parent}\` has no tracker row — an unreferenced child cannot have been cleared or received (\`D-364\` item 7, \`U2-F1\`)`,
      );
    }
    for (const r of unclosed) {
      findings.push(
        `${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but non-SM05 row \`${r.key}\` (${r.order}) is not closed — close it by an independent \`Verified-By\` or the Judge's recorded acceptance with its reason (\`D-364\` items 4, 7)`,
      );
    }
    for (const id of missing) {
      findings.push(
        `${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but live entry \`${id}\` lacks independent verification and has no tracker row — an unlisted entry cannot have been cleared (\`D-364\` item 7)`,
      );
    }
    if (stale === true) {
      findings.push(
        `${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but the tracker was derived at \`${tracker.derivedAt}\`, older than the newest handoff disposition change — re-derive it (\`D-364\` item 7)`,
      );
    } else if (stale === null) {
      findings.push(`${TRACKER_PATH}: Gate 2 clearance is claimed (${claimed}) but the derivation's currency cannot be proven here (no derivation commit, or no history)`);
    }
  }
  const age = stale === true ? "stale" : stale === false ? "current" : "currency unproven";
  const report = `Gate 2 ${claimed ? `CLAIMED (${claimed})` : "not claimed — reporting only"}: tracker at ${tracker.derivedAt ?? "?"} (${age}), ${tracker.rows.length} row(s), ${unclosed.length} non-SM05 unclosed, ${unreceived.length} SM05 not received, ${missing.length} live entr${missing.length === 1 ? "y" : "ies"} unlisted, ${unreferenced.length} §3.3 child(ren) unreferenced, ${invalid.length} row(s) invalid${invalid.length ? ` [${invalid.map((i) => i.row.key).join(", ")}]` : ""}`;
  return { findings, report };
}

/** Newest commit changing a handoff disposition line, or null. */
function newestDisposition() {
  try {
    return (
      execFileSync("git", ["log", "-1", "--format=%H", "-G", "^- \\*\\*(Status|Resolution|Verified-By):\\*\\*", "--", DIR], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() || null
    );
  } catch {
    return null;
  }
}

function contains(descendant, ancestor) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], { stdio: ["ignore", "ignore", "ignore"] });
    return true;
  } catch {
    return false;
  }
}

export function run() {
  if (!existsSync(DIR)) {
    return { name: "closure-readiness", findings: [], detail: `${DIR} absent` };
  }

  const entries = readdirSync(DIR).filter((f) => ENTRY_FILE.test(f));
  const phases = phaseSets();
  const closed = phases ? phases.closed : new Set();
  const findings = [];
  const tally = new Map();
  const deep = historyIsFull();
  let proven = 0;
  const live = new Map(); // entryId -> independently Verified? (non-turn-report only)

  for (const file of entries) {
    const path = join(DIR, file);
    const text = readFileSync(path, "utf8");
    const status = (field(text, "Status") ?? "").toLowerCase();
    const resolution = field(text, "Resolution");
    const phase = field(text, "Phase");

    // `G84`, raised as `B-037` item 3. A turn report records that a lane's turn
    // happened and what came of it (`D-105`, `D-106`). **There is nothing in it
    // to resolve**, so it can never reach a terminal `Resolution` — yet the
    // gate below demanded one of every entry filed against a closing phase.
    // Excluding it by kind is the only mechanical way to tell it apart from an
    // unresolved defect; leaving it as a `finding` made the two indistinguishable
    // and put four permanently-unresolvable rows in the closure backlog.
    //
    // It keeps its OWN tally key, so it stays in the boundary evidence rather
    // than vanishing from it — `B-037` requires both halves.
    const entryKind = field(text, "Kind");
    const isTurnReport = entryKind !== null && /^turn-report\b/i.test(entryKind);

    const key = isTurnReport
      ? "turn-report"
      : resolution
        ? resolution.split(/[\s—-]/)[0].toLowerCase()
        : status || "unknown";
    tally.set(key, (tally.get(key) ?? 0) + 1);
    if (!isTurnReport) {
      const by = field(text, "Verified-By");
      const lead = by ? leadingActor(by) : null;
      const independent = /^verified\b/i.test(resolution ?? "") && lead !== null && !lead.excluded;
      live.set(file.split("-").slice(0, 2).join("-"), independent);
    }

    // `B-017` item 4. An entry with no legible phase used to vanish from every
    // gate. It is now the loudest case, not the quietest — check 10 rejects the
    // malformed field, and this check refuses to let it pass unexamined.
    const phaseKnown = phase !== null && phases !== null && phases.seen.has(phase);
    const gated = phaseKnown && closed.has(phase);

    if (!resolution) {
      // `G84`. A turn report needs no resolution and is not a gap in the record.
      // It is still counted above, and check 10 still enforces its metadata.
      if (isTurnReport) continue;
      if (gated) {
        findings.push(
          `${path}: no **Resolution:** — phase ${phase} claims closure and this entry is only "${status || "unset"}". A reply is not a fix.`,
        );
      }
      continue;
    }

    // From here the entry CLAIMS a terminal state, so its form is checked on
    // every run regardless of whether any phase has closed.
    const kind = resolution.split(/[\s—-]/)[0].toLowerCase();

    if (PROVISIONAL.has(kind)) {
      // Provisional is a legitimate state, not a malformed one. It must still
      // say WHERE the change landed, and it does not close anything.
      if (!field(text, "Verified-At-Commit")) {
        findings.push(
          `${path}: **Resolution:** "${resolution}" with no **Verified-At-Commit:** — an applied change that names no commit cannot be re-checked`,
        );
      }
      if (gated) {
        findings.push(
          `${path}: **Resolution:** "${resolution}" — phase ${phase} claims closure, but applied is not verified. Independent confirmation, or an explicit Deferred with an owner.`,
        );
      }
      continue;
    }

    if (!TERMINAL.has(kind)) {
      findings.push(
        `${path}: **Resolution:** "${resolution}" is not one of Verified, Applied, Deferred, Withdrawn, Superseded`,
      );
      continue;
    }

    if (kind === "deferred" && !field(text, "Follow-up-Tier")) {
      findings.push(`${path}: Deferred with no **Follow-up-Tier:** — a deferral with no owner is a drop`);
    }
    if (kind === "superseded" && !field(text, "Superseded-By")) {
      findings.push(`${path}: Superseded with no **Superseded-By:** — nothing records what overtook it`);
    }
    if (kind === "verified") {
      if (!field(text, "Evidence")) {
        findings.push(`${path}: Verified with no **Evidence:** — a claim with nothing behind it`);
      }

      const by = field(text, "Verified-By");
      if (!by) {
        findings.push(
          `${path}: Verified with no **Verified-By:** — nothing records WHO verified it, so "Verified" is the answering lane's own word`,
        );
      } else {
        const lead = leadingActor(by);
        if (lead === null) {
          findings.push(
            `${path}: **Verified-By:** "${by}" does not open with a known actor token (\`C-39\` closed set: ${ACTOR_TOKENS.join(" · ")}). A verifier that cannot be named cannot be shown independent. Name the actor, or use \`Applied\` rather than \`Verified\`.`,
          );
        } else if (lead.excluded) {
          findings.push(
            `${path}: **Verified-By:** "${by}" is the answering side or a receipt state, not an independent verifier. Name the actor, or use \`Applied\` rather than \`Verified\`.`,
          );
        }
      }

      const commit = field(text, "Verified-At-Commit");
      if (!commit) {
        findings.push(
          `${path}: Verified with no **Verified-At-Commit:** — nothing anchors the claim to a re-performable point`,
        );
      } else if (!SHA.test(commit)) {
        findings.push(
          `${path}: **Verified-At-Commit:** "${commit}" is not a commit identifier — 7–40 hex characters, not prose`,
        );
      } else if (deep) {
        if (commitExists(commit)) proven++;
        else findings.push(`${path}: **Verified-At-Commit:** ${commit} — no such commit in this repository`);
      }
    }
  }

  const matrix = [...tally.entries()].sort().map(([k, n]) => `${k} ${n}`).join(", ");
  const scope = closed.size
    ? `closure claimed for phase(s) ${[...closed].sort().join(", ")} — gating those entries`
    : "no phase claims closure — reporting only";
  const anchors = deep
    ? `${proven} verification commit(s) proven to exist`
    : "shallow history — commit existence NOT proven, form only";

  // Gate 2 mode (`D-364` U2).
  const trackerText = existsSync(TRACKER_PATH) ? readFileSync(TRACKER_PATH, "utf8") : "";
  const tracker = trackerText ? parseTracker(trackerText) : null;
  const children = parseChildMatrix(trackerText);
  const blocked = existsSync(SM05_PATH) ? sm05Blocked(readFileSync(SM05_PATH, "utf8")) : true;
  const claimed = gate2Claimed(tracker, blocked);
  let stale = null;
  if (tracker && tracker.derivedAt && deep && commitExists(tracker.derivedAt)) {
    const newest = newestDisposition();
    stale = newest === null ? null : !contains(tracker.derivedAt, newest);
  }
  const gate2 = gate2Evaluate({ tracker, live, claimed, stale, children });
  findings.push(...gate2.findings);

  return {
    name: "closure-readiness",
    findings,
    detail: `${scope}; ${matrix}; ${anchors}; ${gate2.report}`,
  };
}
