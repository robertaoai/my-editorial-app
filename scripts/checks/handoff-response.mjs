// `C-14` check 10 — `D-90`: does a build lane's feedback get read?
//
// EXTENDED BY `D-92` to Lane C. As written for `D-90` the filename filter was
// `/^B-d+/`, so a `C-NNN` entry was not merely unchecked — it was INVISIBLE.
// The check would have reported "no entries" while Lane C's blocker sat in the
// directory, which is the exact failure this check exists to prevent, aimed at
// the one lane it did not cover. A control scoped to one lane is a control that
// cannot fail for the others.
//
// `D-75` required a handoff at every lane boundary and named no location for
// it. `docs/handoff/` is that location. This check closes the loop: without
// one, an entry can sit unread exactly as `G54` sat stale in §5.1 for two days
// while every check passed.
//
// WHAT IT FAILS ON:
//   * a malformed entry — missing or BLANK `Kind`, `Status`, `Lane A`, or
//     `Phase`; or a `Phase` naming no row in the register (`D-102`, `B-017`)
//   * `Status: Answered` with an empty `Lane A` line — a claim with nothing
//     behind it
//   * `Status: Open` with NO acknowledgement — the "feedback sits unread" case
//   * a `## Return record` (`B-097`) missing or blanking any of its four
//     facts, or coexisting with a still-terminal header — see
//     `checkReturnRecord()` below. This is FORM only; the companion
//     history-aware check lives in `terminal-return.mjs` because it needs
//     git history and this check deliberately does not (stays CI-safe)
//   * a `## Re-close record` (`D-364`) missing or blanking any of its facts,
//     with no Return record before it, repeated for one episode, or not
//     citing the Returned-At-Commit it completes; and a header that disagrees
//     with the CURRENT episode — `Open` beside a completed return, or
//     terminal beside an open one. Each record is validated as its own block
//   * a non-report entry with no `Verified-By` line, or an `Answered` entry
//     whose `Verified-By` still reads the raised form (`D-364`, `U4-G8`)
//   * a `## Terminal annotation record` (`B-113`) missing or blanking any of
//     its five facts, an `Annotation-Type` outside the four governed values,
//     a `No-Scope-Reopened` that isn't literally `true`, or a non-hex
//     `Annotated-At-Commit` — see `checkTerminalAnnotations()` below. A file
//     may carry several; each is validated independently. Also FORM only —
//     whether the citation actually covers the episode it claims to is
//     `terminal-return.mjs`'s job
//   * a `Kind: turn-report` with a missing, blank, unregistered, or duplicate
//     `Run:` (`D-123`, `D-124`) — see `runRegistry()` below
//   * a `Kind: turn-report` carrying `Resolution`, `Verified-By`, or
//     `Verified-At-Commit`, even blank, or a blank `Evidence` (`D-124`) — see
//     `CLOSURE_ONLY` below
//
// `D-124`, raised as `B-055`'s own critic pass (`D-93`): this list went stale
// the moment the two rules above it were added, which is the exact
// `arrival_not_correctness` shape this check exists to catch — turned on its
// own header. **Nothing coupled this comment to the code below it**;
// `channel-docs` (check 16) couples the README and template to the checks, but
// a check's own prose about itself is read by nothing. Kept current by hand;
// not solved.
//
// WHAT IT DELIBERATELY DOES NOT FAIL ON:
//   * an open entry that HAS been acknowledged. A queue is healthy. Failing on
//     one would make `bun run check` red whenever a lane has a pending request,
//     and a check that is red in the normal case is a check people stop
//     reading — the reasoning `D-83` used to make `lane-boundary` report a
//     crossing rather than forbid one.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It checks FORM, not substance. It cannot tell whether an answer is
//     correct, or whether a `Withdrawn` was justified — the same
//     arrival-not-correctness limit `G65` records for the tier sweep.
//   * Reading the entries is still a person's job.
//   * It cannot make a lane write an entry. A blocker never recorded is
//     invisible to it.
//
// `D-102`, raised as `B-017`: this check reported PASS on three entries whose
// `Kind` was blank, because its field pattern used `\s*` and stepped over the
// newline into the next metadata line. **The metadata parser now lives in
// `handoff-fields.mjs`** — line-bounded, one copy, shared with check 13. The
// same file also owns the phase register reader, which had been copied here
// and into check 13 verbatim.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CLOSURE_PATH as CLOSURE, ENTRY_FILE, field, fieldPresent, phaseSets, stripFences } from "./handoff-fields.mjs";

const DIR = "docs/handoff";

// `C-19` (`D-95`, raised as `B-010`) — `Reopens-Phase:` enforcement.
//
// `D-93` added the field and deferred the check because no phase had closed,
// which would have made it vacuous. `B-010` showed that reasoning was already
// stale: the field can be WRONGLY used before any phase closes, and it was —
// `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never
// closed. **Reopening presupposes a closure.** The check is non-vacuous
// because the error it catches does not require a closed phase to exist.
//
// Reads `§5`'s phase register BY COLUMN NAME — see `handoff-fields.mjs`, which
// carries that reader and the three positional-parsing defects that produced
// it. Nothing about it is duplicated here any more.
// `Acknowledged`, `Answered`, `Withdrawn` — anything else is not a disposition.
const DISPOSITIONS = /^(Acknowledged|Answered|Withdrawn)\b/i;

// `D-124`, raised as `B-056`. CLOSURE-ONLY MARKERS A TURN REPORT MAY NOT CARRY.
//
// `Evidence` is deliberately NOT in this set, and that is a correction to
// `D-123`'s own prose. `D-123` listed four fields; `B-047` — the canonical turn
// report it designated in the same pass — carries a FILLED `Evidence:` line, so
// the rule as written condemned the entry it had just made canonical. `B-056`
// inherited the list and asked for all four while also requiring every existing
// canonical report to pass; those cannot both hold. A report's whole job is to
// point at what the turn produced, so `Evidence` is permitted — and must not be
// blank, which was `B-051`'s actual complaint.
const CLOSURE_ONLY = ["Resolution", "Verified-By", "Verified-At-Commit"];

// `B-116` item 5 (`D-375`): header fields that may appear at most once.
const SINGLETONS = [
  "Kind", "Phase", "Receiver", "Status", "Resolution",
  "Verified-By", "Verified-At-Commit", "Follow-up-Tier", "Superseded-By",
];

// `D-124`, raised as `B-055`. The run identifiers are ASSIGNED in the live phase
// record (`§5.0a`) and copied into a report — a report does not mint its own.
// Parsed by matching backticked identifiers inside that section rather than by
// column position: three positional-parsing defects preceded this approach in
// `handoff-fields.mjs`, and a header-driven table here would break on a column
// being added exactly as that one did.
const RUN_ID = /^L[A-C]-[A-Z]\d+-\d+$/;

// `B-097`'s return-protocol contract, applied to `README.md`/`TEMPLATE.md` in
// the same pass as this function. Validates the SHAPE of a return only — form,
// not substance, matching every other rule in this file. The companion
// history-aware detection (did substantive work land after a terminal
// disposition with no return record at all) is `terminal-return.mjs`, kept
// separate because it needs git history and this file is tracked-files-only
// so it can run in CI.
//
// `D-364` (P0a, `D-363` option (a)) — the Re-close record. The SOP defined how
// an entry RETURNS and how a terminal entry is ANNOTATED, but not how a
// returned entry becomes terminal again: `B-130`'s answer was complete and
// the entry could not leave `Open`, because every Return record held the
// header open forever. A `## Re-close record`, appended after the Return
// record it completes, ends that return episode. The Return record stays —
// history is never rewritten.
//
// EPISODES, NOT THE FIRST MATCH. `field()` reads the first matching line in
// the whole text, so it could only ever see a file's FIRST Return record.
// Return and Re-close records are therefore split into blocks, in document
// order, and each is validated on its own. A Re-close record binds to the
// Return record immediately before it; the episode that governs the header is
// the LAST Return record. A later reopening needs a new Return record and a
// new Re-close record — an earlier Re-close never covers it.
const EPISODE_HEADING = /^##\s+(Return record|Re-close record)\s*$/gm;

function episodeBlocks(text) {
  const matches = [...text.matchAll(EPISODE_HEADING)];
  return matches.map((m) => {
    const rest = text.slice(m.index + m[0].length);
    const nextHeading = rest.search(ANY_HEADING);
    return { kind: m[1] === "Return record" ? "return" : "reclose", body: rest.slice(0, nextHeading < 0 ? rest.length : nextHeading) };
  });
}

/** `true` when `cited` names `sha`: some hexadecimal token of at least seven
 * characters in it is a prefix of `sha`, or `sha` of it. Either may be
 * abbreviated. Exported so the fixture suite can assert it directly. */
export function citesCommit(cited, sha) {
  if (!cited || !sha) return false;
  const want = sha.toLowerCase();
  return [...String(cited).matchAll(/\b[0-9a-f]{7,40}\b/gi)].some(([t]) => {
    const tok = t.toLowerCase();
    return want.startsWith(tok) || tok.startsWith(want);
  });
}

/**
 * A metadata field's value INCLUDING its wrapped continuation lines — the
 * corpus wraps long act citations onto indented lines (`B-071`'s
 * `Return-Act`), and `field()` reads only the first. Used only to compare
 * identities; presence and blankness are still judged by `field()`.
 */
function wrappedValue(text, name) {
  const m = new RegExp(`^-[ \\t]*\\*\\*${name}:\\*\\*[ \\t]*(.*)$`, "mi").exec(text);
  if (!m) return null;
  const parts = [m[1].trim()];
  for (const line of text.slice(m.index + m[0].length).split("\n").slice(1)) {
    if (!/^[ \t]+\S/.test(line) || /^[ \t]*-[ \t]*\*\*/.test(line)) break;
    parts.push(line.trim());
  }
  return parts.join(" ").trim();
}

/**
 * `B-152` F2, the Judge's token rule (2026-09-30, `D-366`). The identity of a
 * Return-Act that a Re-close must cite: every decision ID (`D-NNN`) the act
 * names, or — when it names none, as `B-071`'s Chief Editor ruling does — every
 * date it names. An act naming neither cannot be bound. Exported for fixtures.
 */
export function actTokens(act) {
  if (!act) return [];
  const ids = [...new Set(act.match(/\bD-\d+\b/g) || [])];
  if (ids.length) return ids;
  return [...new Set(act.match(/\b\d{4}-\d{2}-\d{2}\b/g) || [])];
}

// Written as explicit calls rather than a loop over a field-name array on
// purpose: `channel-docs` (check 16) discovers which fields a check reads by
// grepping check source for quoted field names passed as the second argument,
// matched against the literal parameter identifier `text`. A name reached
// only through an array variable is invisible to that grep, so a loop here
// would read these fields at runtime and still fail the coupling check that
// exists to prove they are read. Each validator takes ONE block as `text`.
function checkReturnBlock(text, path, findings) {
  if (!field(text, "Previous-Resolution")) {
    findings.push(
      fieldPresent(text, "Previous-Resolution")
        ? `${path}: Return record **Previous-Resolution:** is present but BLANK — a return names all four facts (\`B-097\`), or it is not a return`
        : `${path}: Return record has no **Previous-Resolution:** — a return names all four facts (\`B-097\`), or it is not a return`,
    );
  }
  if (!field(text, "Return-Trigger")) {
    findings.push(
      fieldPresent(text, "Return-Trigger")
        ? `${path}: Return record **Return-Trigger:** is present but BLANK — a return names all four facts (\`B-097\`), or it is not a return`
        : `${path}: Return record has no **Return-Trigger:** — a return names all four facts (\`B-097\`), or it is not a return`,
    );
  }
  if (!field(text, "Return-Act")) {
    findings.push(
      fieldPresent(text, "Return-Act")
        ? `${path}: Return record **Return-Act:** is present but BLANK — a return names all four facts (\`B-097\`), or it is not a return`
        : `${path}: Return record has no **Return-Act:** — a return names all four facts (\`B-097\`), or it is not a return`,
    );
  }
  const returnedAt = field(text, "Returned-At-Commit");
  if (!returnedAt) {
    findings.push(
      fieldPresent(text, "Returned-At-Commit")
        ? `${path}: Return record **Returned-At-Commit:** is present but BLANK — a return names all four facts (\`B-097\`), or it is not a return`
        : `${path}: Return record has no **Returned-At-Commit:** — a return names all four facts (\`B-097\`), or it is not a return`,
    );
  } else if (!/^[0-9a-f]{7,40}$/i.test(returnedAt)) {
    findings.push(
      `${path}: Return record **Returned-At-Commit:** "${returnedAt}" is not a hexadecimal commit SHA. Existence is proven separately by \`terminal-return\`, which has git history; this check does not`,
    );
  }
}

function checkRecloseBlock(text, path, findings) {
  if (!field(text, "Reclosed-Return")) {
    findings.push(
      fieldPresent(text, "Reclosed-Return")
        ? `${path}: Re-close record **Reclosed-Return:** is present but BLANK — a re-close names the return episode it completes (\`D-364\`)`
        : `${path}: Re-close record has no **Reclosed-Return:** — a re-close names the return episode it completes (\`D-364\`)`,
    );
  }
  if (!field(text, "Completion-Condition")) {
    findings.push(
      fieldPresent(text, "Completion-Condition")
        ? `${path}: Re-close record **Completion-Condition:** is present but BLANK — name the obligation whose completion permits the disposition (\`D-364\`)`
        : `${path}: Re-close record has no **Completion-Condition:** — name the obligation whose completion permits the disposition (\`D-364\`)`,
    );
  }
  if (!field(text, "Completion-Evidence")) {
    findings.push(
      fieldPresent(text, "Completion-Evidence")
        ? `${path}: Re-close record **Completion-Evidence:** is present but BLANK — a re-close without the accepted act and artifact behind it is a claim, not a completion (\`D-364\`)`
        : `${path}: Re-close record has no **Completion-Evidence:** — a re-close without the accepted act and artifact behind it is a claim, not a completion (\`D-364\`)`,
    );
  }
  if (!field(text, "Reclose-Act")) {
    findings.push(
      fieldPresent(text, "Reclose-Act")
        ? `${path}: Re-close record **Reclose-Act:** is present but BLANK — name the adopted rule and the receiver's dated disposition act (\`D-364\`)`
        : `${path}: Re-close record has no **Reclose-Act:** — name the adopted rule and the receiver's dated disposition act (\`D-364\`)`,
    );
  }
  const reclosedAt = field(text, "Reclosed-At-Commit");
  if (!reclosedAt) {
    findings.push(
      fieldPresent(text, "Reclosed-At-Commit")
        ? `${path}: Re-close record **Reclosed-At-Commit:** is present but BLANK — the commit read when recording the disposition (\`D-214\`, \`D-364\`)`
        : `${path}: Re-close record has no **Reclosed-At-Commit:** — the commit read when recording the disposition (\`D-214\`, \`D-364\`)`,
    );
  } else if (!/^[0-9a-f]{7,40}$/i.test(reclosedAt)) {
    findings.push(
      `${path}: Re-close record **Reclosed-At-Commit:** "${reclosedAt}" is not a hexadecimal commit SHA. Existence, and that it follows the return, are proven separately by \`terminal-return\`, which has git history; this check does not`,
    );
  }
}

/**
 * Validates every Return and Re-close record in `text`, binds each Re-close
 * to the Return before it, and checks the header against the CURRENT episode.
 * Returns `{ returns, recloses }` counts for the detail line.
 */
function checkReturnRecord(text, path, findings) {
  text = stripFences(text); // an illustrative example fence is not a live return
  const blocks = episodeBlocks(text);
  const counts = { returns: 0, recloses: 0 };
  if (blocks.length === 0) return counts;

  let latest = null; // { at, reclosed } for the most recent Return record
  for (const block of blocks) {
    if (block.kind === "return") {
      counts.returns++;
      checkReturnBlock(block.body, path, findings);
      latest = { at: field(block.body, "Returned-At-Commit"), act: wrappedValue(block.body, "Return-Act"), reclosed: false };
      continue;
    }
    counts.recloses++;
    checkRecloseBlock(block.body, path, findings);
    if (!latest) {
      findings.push(
        `${path}: has a Re-close record with no Return record before it — a re-close completes a return episode, and there is none to complete (\`D-364\`)`,
      );
    } else if (latest.reclosed) {
      findings.push(
        `${path}: has a second Re-close record for the same return episode — a later reopening needs its own Return record first; a re-close never covers an episode twice (\`D-364\`)`,
      );
    } else {
      // `B-152` F2: BOTH identity components of the episode — its
      // Returned-At-Commit and its Return-Act (`D-364` item 1). A citation
      // naming only the right SHA, or the right SHA beside another act, is
      // not a binding to this episode.
      const cited = wrappedValue(block.body, "Reclosed-Return");
      if (cited && field(block.body, "Reclosed-Return")) {
        if (latest.at && !citesCommit(cited, latest.at)) {
          findings.push(
            `${path}: Re-close record **Reclosed-Return:** "${cited}" does not cite \`${latest.at}\`, the Returned-At-Commit of the Return record it follows — a re-close binds to exactly one episode (\`D-364\`)`,
          );
        }
        const tokens = actTokens(latest.act);
        if (latest.act && tokens.length === 0) {
          findings.push(
            `${path}: the Return record's **Return-Act:** names no decision ID and no date, so no Re-close can cite it — name the act's decision or date in the Return record (\`B-152\`, \`D-366\`)`,
          );
        } else {
          const missing = tokens.filter((t) => !new RegExp(`\\b${t}\\b`).test(cited));
          if (missing.length) {
            findings.push(
              `${path}: Re-close record **Reclosed-Return:** does not cite the Return-Act of the Return record it follows — missing ${missing.map((t) => `\`${t}\``).join(", ")}. It must name both the act and \`${latest.at ?? "its commit"}\` (\`B-152\`, \`D-364\` item 1)`,
            );
          }
        }
      }
      latest.reclosed = true;
    }
  }
  if (!latest) return counts;

  // Header fields describe the whole entry (`D-204`). While the LATEST return
  // is open, a terminal field beside it is the header/body mismatch `B-097`
  // exists to prevent. Once a Re-close record completes it, the header must
  // carry the disposition — an `Open` header beside a completed episode is the
  // same mismatch in the other direction.
  const status = field(text, "Status");
  if (!latest.reclosed) {
    if (!status || !/^Open\b/i.test(status)) {
      findings.push(
        `${path}: has a Return record but **Status:** is not \`Open\` — a returned entry is active again, not still terminal. To complete the return, append a \`## Re-close record\` (\`D-364\`)`,
      );
    }
    if (fieldPresent(text, "Resolution")) {
      findings.push(
        `${path}: has a Return record but still carries **Resolution:** — a returned entry has no current terminal disposition, only the history the return record preserves, until a \`## Re-close record\` completes it (\`D-364\`)`,
      );
    }
    if (fieldPresent(text, "Follow-up-Tier")) {
      findings.push(
        `${path}: has a Return record but still carries **Follow-up-Tier:** — that belonged to the terminal disposition this return record supersedes`,
      );
    }
  } else {
    // `B-152` F1: a completed episode reads exactly `Answered`. Testing only
    // for `Open` let `Withdrawn` through, which the general status branch
    // below accepts on its own.
    if (!status || /^Open\b/i.test(status)) {
      findings.push(
        `${path}: has a Re-close record completing its latest return, but **Status:** is still \`Open\` — record \`Answered\` with the disposition, or remove the Re-close record (\`D-364\`)`,
      );
    } else if (!/^Answered\b/i.test(status)) {
      findings.push(
        `${path}: has a Re-close record completing its latest return, but **Status:** is "${status}" — a completed return reads \`Answered\` (\`D-364\` item 2, \`B-152\`). A genuine withdrawal is not a re-close`,
      );
    }
    if (!field(text, "Resolution")) {
      findings.push(
        `${path}: has a Re-close record completing its latest return, but no **Resolution:** — a re-close is a disposition, and the header carries it (\`D-364\`)`,
      );
    }
  }
  return counts;
}

// `B-113` (Chief Editor Option A, 2026-09-16) — the other governed record
// `terminal-return`'s history walk can cite: a correction, cross-reference or
// normalization that touched an already-terminal entry WITHOUT reopening its
// scope. Unlike a Return record, a file may carry several of these — one per
// historically annotated commit — so this splits on every heading and
// validates each block independently rather than reading only the first.
const ANNOTATION_HEADING = /^##\s+Terminal annotation record\s*$/gm;
const ANY_HEADING = /^##[ \t]/m;
const ANNOTATION_TYPES = new Set(["metadata-normalization", "verification-evidence", "cross-reference", "correction"]);

function annotationBlocks(text) {
  const matches = [...text.matchAll(ANNOTATION_HEADING)];
  return matches.map((m, i) => {
    const start = m.index + m[0].length;
    const rest = text.slice(start);
    const nextHeading = rest.search(ANY_HEADING);
    return rest.slice(0, nextHeading < 0 ? rest.length : nextHeading);
  });
}

function checkTerminalAnnotations(outerText, path, findings) {
  const blocks = annotationBlocks(stripFences(outerText)); // an illustrative example fence is not a live annotation
  if (blocks.length === 0) return 0;

  // Each iteration reassigns a local named `text` (not `block`), for the
  // same reason `checkReturnRecord` reassigns its own parameter: `channel-
  // docs` (check 16) discovers which fields a check reads by grepping check
  // source for a literal `text` as the first argument to `field()`/
  // `fieldPresent()`. A differently-named variable reads correctly at
  // runtime and is invisible to that grep — this file has hit that exact
  // gap twice now.
  for (const text of blocks) {
    if (!field(text, "Current-Resolution")) {
      findings.push(
        fieldPresent(text, "Current-Resolution")
          ? `${path}: Terminal annotation record **Current-Resolution:** is present but BLANK — an annotation names all five facts (\`B-113\`), or it is not an annotation`
          : `${path}: Terminal annotation record has no **Current-Resolution:** — an annotation names all five facts (\`B-113\`), or it is not an annotation`,
      );
    }
    const annotationType = field(text, "Annotation-Type");
    if (!annotationType) {
      findings.push(
        fieldPresent(text, "Annotation-Type")
          ? `${path}: Terminal annotation record **Annotation-Type:** is present but BLANK — an annotation names all five facts (\`B-113\`), or it is not an annotation`
          : `${path}: Terminal annotation record has no **Annotation-Type:** — an annotation names all five facts (\`B-113\`), or it is not an annotation`,
      );
    } else if (!ANNOTATION_TYPES.has(annotationType.trim())) {
      findings.push(
        `${path}: Terminal annotation record **Annotation-Type:** "${annotationType}" is not one of metadata-normalization | verification-evidence | cross-reference | correction — inventing a fifth type is how this vocabulary drifts from what \`B-113\` adopted`,
      );
    }
    if (!field(text, "Annotation-Act")) {
      findings.push(
        fieldPresent(text, "Annotation-Act")
          ? `${path}: Terminal annotation record **Annotation-Act:** is present but BLANK — an annotation names all five facts (\`B-113\`), or it is not an annotation`
          : `${path}: Terminal annotation record has no **Annotation-Act:** — an annotation names all five facts (\`B-113\`), or it is not an annotation`,
      );
    }
    const noScopeReopened = field(text, "No-Scope-Reopened");
    if (!noScopeReopened) {
      findings.push(
        fieldPresent(text, "No-Scope-Reopened")
          ? `${path}: Terminal annotation record **No-Scope-Reopened:** is present but BLANK — an annotation names all five facts (\`B-113\`), or it is not an annotation`
          : `${path}: Terminal annotation record has no **No-Scope-Reopened:** — an annotation names all five facts (\`B-113\`), or it is not an annotation`,
      );
    } else if (noScopeReopened.trim().toLowerCase() !== "true") {
      findings.push(
        `${path}: Terminal annotation record **No-Scope-Reopened:** "${noScopeReopened}" is not \`true\` — an annotation exists to assert that scope did NOT reopen; a record saying otherwise is a Return, not an annotation, and belongs in \`## Return record\` instead`,
      );
    }
    const annotatedAt = field(text, "Annotated-At-Commit");
    if (!annotatedAt) {
      findings.push(
        fieldPresent(text, "Annotated-At-Commit")
          ? `${path}: Terminal annotation record **Annotated-At-Commit:** is present but BLANK — an annotation names all five facts (\`B-113\`), or it is not an annotation`
          : `${path}: Terminal annotation record has no **Annotated-At-Commit:** — an annotation names all five facts (\`B-113\`), or it is not an annotation`,
      );
    } else if (!/^[0-9a-f]{7,40}$/i.test(annotatedAt)) {
      findings.push(
        `${path}: Terminal annotation record **Annotated-At-Commit:** "${annotatedAt}" is not a hexadecimal commit SHA. Existence and episode coverage are proven separately by \`terminal-return\`, which has git history; this check does not`,
      );
    }
  }
  return blocks.length;
}

function runRegistry() {
  let text;
  try {
    text = readFileSync(CLOSURE, "utf8");
  } catch {
    return null;
  }
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^#{2,4}\s+5\.0a\b/.test(l));
  if (start < 0) return null;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => /^#{2,4}\s/.test(l));
  const block = (end < 0 ? rest : rest.slice(0, end)).join("\n");
  const ids = new Set(
    [...block.matchAll(/`([^`]+)`/g)].map((m) => m[1].trim()).filter((v) => RUN_ID.test(v)),
  );
  return ids.size === 0 ? null : ids;
}

export function run() {
  if (!existsSync(DIR)) {
    return {
      name: "handoff-response",
      findings: [],
      detail: `${DIR} absent — no channel, no entries`,
    };
  }

  // `B-` is Lane B (`D-90`), `C-` is Lane C (`D-92`). Lane A does not raise
  // entries here — it answers them; a Lane A concern goes in the register.
  //
  // `D-272`: each series has a RECEIVER, the lane that answers it. `B-` is
  // always Lane A. `C-` names its receiver in `Receiver:` — Lane B by default,
  // Lane A when the dependency sits on a Lane A surface — and the receiver
  // writes its own answer field. Reading `Lane A` for every entry would
  // report a Lane B answer as "sitting unread" and pass an unread one.
  const entries = readdirSync(DIR).filter((f) => ENTRY_FILE.test(f));
  const findings = [];
  const phases = phaseSets();
  let reopening = 0;
  let open = 0;
  let answered = 0;
  let withdrawn = 0;
  let unresolved = 0;
  let reports = 0;
  let returned = 0;
  let reclosed = 0;
  let annotated = 0;
  // `D-123`, raised as `B-053`: two turn reports for one run (`B-043`/`B-047`,
  // both committed at `d826b53` for `LB-S1-01`) read as two turns when nothing
  // named the run they shared. `Run:` is optional — legacy reports predate it —
  // but when two LIVE (non-superseded/withdrawn) turn reports both name the
  // SAME run, that is the exact duplicate this decision closed and a repeat is
  // a channel-check failure, not a second read of the corpus.
  const runsSeen = new Map(); // run -> path of the first live turn-report claiming it

  for (const file of entries) {
    const path = join(DIR, file);
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      findings.push(`${path}: unreadable`);
      continue;
    }

    const kind = field(text, "Kind");

    // `G84`, raised as `B-037` item 3. A TURN REPORT IS A RECORD, NOT A
    // CORRECTION. `D-105` requires one at every lane boundary and `D-106` files
    // it under the reporting lane's own phase — but there is nothing in it to
    // resolve, so it can never carry a terminal `Resolution`, and it was
    // therefore counted forever among the entries that "still carry NO
    // resolution". Four of them sat in that number. **A backlog figure that
    // permanently includes items which cannot leave it stops measuring the
    // backlog**, and the fix is a kind the checks can see, not a convention.
    //
    // It is EXCLUDED from the unresolved tally and REPORTED separately — never
    // dropped. `B-037` names both halves: a report must not inflate the
    // unresolved backlog, and must not disappear from boundary evidence either.
    const isTurnReport = kind !== null && /^turn-report\b/i.test(kind);
    if (isTurnReport) reports++;

    // `D-123`. A turn-report carries no `Resolution` by design, so a superseded
    // one is reclassified `Kind: finding` (the `B-043` precedent) rather than
    // marked superseded in place — which means every remaining `turn-report` is
    // live by construction, and two of them sharing a `Run:` is unconditionally
    // the duplicate this decision closed.
    //
    // `D-124`, raised as `B-055`: this branch used to read `if (run)`, so a
    // report with NO `Run:` passed and never entered the map. **The duplicate
    // check could reject a repeated key but not require the key whose
    // uniqueness it protects** — the control was optional at exactly the point
    // it had to be mandatory, and the two legacy reports demonstrated the
    // passing shape a future report could copy.
    if (isTurnReport) {
      const run = field(text, "Run");
      if (!run) {
        findings.push(
          fieldPresent(text, "Run")
            ? `${path}: **Run:** is present but BLANK — a turn report names the run it reports (\`D-123\`). Assign one from the run table in ${CLOSURE} §5.0a.`
            : `${path}: no **Run:** field — a turn report names the run it reports (\`D-123\`), and without it the one-report-per-run control cannot see this entry at all. Assign one from the run table in ${CLOSURE} §5.0a.`,
        );
      } else {
        // The value carries explanatory prose after the identifier, so the KEY
        // is the leading token — comparing whole lines would let two reports on
        // one run differ by a comment and both pass.
        const id = run.split(/[\s—–,;]/)[0];
        const registry = runRegistry();
        if (registry && !registry.has(id)) {
          findings.push(
            `${path}: **Run:** "${id}" is not in the run table at ${CLOSURE} §5.0a — a report copies an ASSIGNED identifier and does not mint its own (\`D-124\`). Add the run there first, or correct the value.`,
          );
        }
        const prior = runsSeen.get(id);
        if (prior) {
          findings.push(
            `${path}: **Run:** "${id}" duplicates the canonical turn report at ${prior} — one run gets one turn report (\`D-123\`). Reclassify the earlier or later one \`Kind: finding\`, \`Resolution: Superseded\`, \`Superseded-By:\` the report that stands.`,
          );
        } else {
          runsSeen.set(id, path);
        }
      }

      // `D-124`, raised as `B-056`. `D-123` normalized the shape and installed
      // NOTHING that could detect its violation — a copied legacy field returns,
      // the parser maps it to `null`, and the suite stays green. Tested with
      // `fieldPresent`, not `field`: a BLANK marker is the exact regression
      // `B-051` reported, and `field()` cannot see it by construction.
      for (const name of CLOSURE_ONLY) {
        if (fieldPresent(text, name)) {
          findings.push(
            `${path}: a turn report carries no **${name}:** — there is nothing in a report to resolve (\`G84\`, \`D-123\`). Remove the line; blank is not omitted.`,
          );
        }
      }
      // Permitted, but not as an empty marker — `B-051`'s complaint was blank
      // fields, and a blank `Evidence` on a report points at nothing.
      if (fieldPresent(text, "Evidence") && !field(text, "Evidence")) {
        findings.push(
          `${path}: **Evidence:** is present but BLANK on a turn report — name what the turn produced, or remove the line.`,
        );
      }
    }

    // `D-108`: `0 open` reads as an empty backlog. It is not — most entries are
    // answered and UNRESOLVED, which is the state `D-101` separated out.
    if (!field(text, "Resolution") && !isTurnReport) unresolved++;
    const status = field(text, "Status");
    // Both lane fields are read LITERALLY, so `channel-docs` sees each
    // template field as read by a check (`fieldsRead` matches literals only).
    let receiver = "Lane A";
    if (/^C-/.test(file)) {
      const r = field(text, "Receiver");
      if (!r) {
        findings.push(
          fieldPresent(text, "Receiver")
            ? `${path}: **Receiver:** is present but BLANK — a \`C-\` entry must name the lane that answers it (\`Lane A\` or \`Lane B\`, \`D-272\`)`
            : `${path}: no **Receiver:** field — a \`C-\` entry must name the lane that answers it (\`Lane A\` or \`Lane B\`, \`D-272\`)`,
        );
      } else if (/^Lane B\b/i.test(r.replace(/^[*_`\s]+/, ""))) {
        receiver = "Lane B";
      } else if (!/^Lane A\b/i.test(r.replace(/^[*_`\s]+/, ""))) {
        findings.push(`${path}: **Receiver:** "${r}" is not \`Lane A\` or \`Lane B\` — only those lanes answer \`C-\` entries (\`D-272\`)`);
      }
    }
    const response = receiver === "Lane B" ? field(text, "Lane B") : field(text, "Lane A");
    const responsePresent = receiver === "Lane B" ? fieldPresent(text, "Lane B") : fieldPresent(text, "Lane A");
    const reopens = field(text, "Reopens-Phase");

    // `C-19`. A missing field is the normal case and never a finding.
    if (reopens !== null && reopens !== "") {
      const phase = reopens.trim().replace(/[^0-9]/g, "");
      if (!phase) {
        findings.push(`${path}: **Reopens-Phase:** "${reopens}" names no phase number`);
      } else if (phases === null) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no phase register found in ${CLOSURE}`);
      } else if (!phases.seen.has(phase)) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no such phase in the register`);
      } else if (!phases.closed.has(phase)) {
        findings.push(
          `${path}: **Reopens-Phase:** ${phase} — but phase ${phase} has never closed. Reopening presupposes a closure; a finding against an open phase is an ordinary entry and needs no field.`,
        );
      } else {
        reopening++;
      }
    }

    const episodes = checkReturnRecord(text, path, findings);
    returned += episodes.returns;
    reclosed += episodes.recloses;
    annotated += checkTerminalAnnotations(text, path, findings);

    // `B-116` item 5 (`D-375`). SINGLETON CARDINALITY. `field()` reads the first
    // match, so a second `Verified-At-Commit` (`B-113`) or a stale pre-return
    // `Verified-By` pair (`B-071`) stayed green while different readers could
    // review different states. Each top-level lifecycle or audit field appears
    // at most once in the header — everything before the first `## ` heading,
    // fences stripped. Records below a heading (Return, Re-close, Terminal
    // annotation) stay repeatable by design.
    {
      const plain = stripFences(text);
      const cut = plain.search(/^## /m);
      const head = cut < 0 ? plain : plain.slice(0, cut);
      for (const name of SINGLETONS) {
        // `gmi`, matching `field()`'s own case-insensitive reader (Lane B, `38c1cb4`; `D-378`):
        // a duplicate the reader would see must not hide behind a different case.
        const n = (head.match(new RegExp(`^-[ \\t]*\\*\\*${name}:\\*\\*`, "gmi")) || []).length;
        if (n > 1) {
          findings.push(
            `${path}: **${name}:** appears ${n} times in the header — a lifecycle or audit field is a singleton, and the first-match reader silently ignores the rest. Keep one; move history into prose (\`B-116\`, \`D-375\`)`,
          );
        }
      }
    }

    // `D-364` (`U4-G8`). Header consistency the lifecycle fields rely on.
    // `B-127`/`B-128` carried `Resolution: Applied` beside the raised,
    // pre-disposition `Verified-By` for days and no check saw it; `B-118`/
    // `B-119` carried no `Verified-By` line at all. Every non-report entry
    // carries the field: the raised form while undispositioned, the
    // dispositioned form or a named verifier once answered (`D-215`).
    if (!isTurnReport) {
      const verifiedBy = field(text, "Verified-By");
      if (!fieldPresent(text, "Verified-By")) {
        findings.push(
          `${path}: no **Verified-By:** field — every entry carries it: \`— not yet dispositioned; raised by Lane <X>\` while open, \`— not independently verified; dispositioned by Lane <X>\` or the named verifier once answered (\`D-215\`, \`D-364\`)`,
        );
      } else if (/^Answered\b/i.test(field(text, "Status") || "") && verifiedBy && /not yet dispositioned/i.test(verifiedBy)) {
        findings.push(
          `${path}: Status is Answered but **Verified-By:** still reads the raised, pre-disposition form — use \`— not independently verified; dispositioned by Lane <X>\`, or name the independent verifier (\`D-215\`, \`U4-G8\`, \`D-364\`)`,
        );
      }
    }

    if (!kind) {
      findings.push(
        fieldPresent(text, "Kind")
          ? `${path}: **Kind:** is present but BLANK — cannot route it. (This is the case that used to read the next line and pass: \`B-017\`.)`
          : `${path}: no **Kind:** field — cannot route it`,
      );
    }

    // `B-017` repair 3. Phase-scoped closure gating is only as good as the
    // field it scopes by. A missing or unknown `Phase` used to remove the
    // entry from every gate SILENTLY, so a real blocker could disappear from
    // the phase it blocks. It fails here, immediately — not at the boundary.
    const phaseVal = field(text, "Phase");
    if (!phaseVal) {
      findings.push(
        `${path}: no **Phase:** value — closure gating is phase-scoped, and an entry with no phase blocks nothing and is checked by nothing`,
      );
    } else if (phases === null) {
      findings.push(`${path}: **Phase:** ${phaseVal} — no phase register found in ${CLOSURE}`);
    } else if (!phases.seen.has(phaseVal.replace(/[^0-9]/g, ""))) {
      findings.push(`${path}: **Phase:** "${phaseVal}" — no such phase in the register`);
    }
    if (!status) {
      findings.push(`${path}: no **Status:** field — cannot tell if it is live`);
      continue;
    }

    // `G83`, raised as `B-037`. THIS BRANCH USED TO `continue` BEFORE ANY
    // COUNTER RAN. So an entry with a blank `Lane A` — which is precisely the
    // "feedback sitting unread" case this check exists for — was counted in no
    // bucket at all, and the detail line read `0 open` with FOUR unread entries
    // in the directory. **The one line a human reads was wrong in the direction
    // that hides work**, and `closure-readiness` said `open 4` in the same run.
    // Two checks disagreeing about the same directory is how the defect
    // surfaced; nothing in either check compares them.
    //
    // It also misdescribed the file. `- **Lane A:**` was PRESENT and blank, and
    // the message said the field did not exist — `fieldPresent()` was written
    // for exactly this distinction (`D-102`) and was used for `Kind` and not
    // here. A malformed file and an unfinished entry need different messages
    // because they need different repairs.
    if (response === null) {
      if (/^Open\b/i.test(status)) open++;
      else if (/^Answered\b/i.test(status)) answered++;
      else if (/^Withdrawn\b/i.test(status)) withdrawn++;

      findings.push(
        responsePresent
          ? `${path}: **${receiver}:** is present but BLANK — ${status} with no disposition. Add \`Acknowledged\` at minimum; answering can wait, seeing it cannot.`
          : `${path}: no **${receiver}:** field — nowhere to record a disposition`,
      );
      continue;
    }

    // Dispositions are routinely written bold — `**Acknowledged ...**`. The
    // marker is emphasis, not content, so it is stripped before the test.
    const acknowledged = DISPOSITIONS.test(response.replace(/^[*_\s]+/, ""));

    if (/^Open\b/i.test(status)) {
      open++;
      if (!acknowledged) {
        findings.push(
          `${path}: Open with no ${receiver} disposition — feedback is sitting unread. Add \`Acknowledged\` at minimum; answering can wait, seeing it cannot.`,
        );
      }
    } else if (/^Answered\b/i.test(status)) {
      answered++;
      if (!response) {
        findings.push(`${path}: Status is Answered but the **${receiver}:** line is empty`);
      }
    } else if (/^Withdrawn\b/i.test(status)) {
      withdrawn++;
      if (!response) {
        findings.push(
          `${path}: Withdrawn with no reason — a withdrawal with nothing behind it is not a disposition`,
        );
      }
    } else {
      findings.push(`${path}: Status "${status}" is not Open, Answered, or Withdrawn`);
    }
  }

  const detail =
    entries.length === 0
      ? "channel installed, no entries yet"
      : `${entries.length} entr${entries.length === 1 ? "y" : "ies"}: ${open} open, ${answered} answered, ${withdrawn} withdrawn; ${unresolved} still carry NO resolution${reports ? `; ${reports} turn report(s) excluded from that count (G84)` : ""}${reopening ? `, ${reopening} reopening a closed phase` : ""}${returned ? `; ${returned} return record(s) (B-097)` : ""}${reclosed ? `; ${reclosed} re-close record(s) (D-364)` : ""}${annotated ? `; ${annotated} terminal annotation record(s) (B-113)` : ""}`;

  return { name: "handoff-response", findings, detail };
}
