// The fixture suites, one per check that claims to have been negative-tested.
//
// Each suite opens with a POSITIVE CONTROL — the live repository, unmutated,
// expected to stay green. A suite with no green case proves only that a check
// can fail, never that it can pass, and a check that fails on everything is as
// useless as one that fails on nothing.

import { execFileSync } from "node:child_process";
import { fixture, read, write, withRetry, TRANSIENT_CODES, existsSync, rmSync, mkdirSync, runCheck } from "./harness.mjs";
import { readdirSync, readFileSync } from "node:fs";
import { field, ENTRY_FILE } from "../checks/handoff-fields.mjs";
import { classify } from "../checks/lane-boundary.mjs";
import { classifyChangedPaths } from "../checks/governed-intent.mjs";
import { getChangedPaths } from "../checks/docs-drift.mjs";
import {
  isAuditOnlyDiff,
  isRecordOnlyDiff,
  resolutionAfterDiff,
  coveredCommits,
  currentEpisodeStart,
  walkEpisodes,
  fileHistory,
  diffAt,
} from "../checks/terminal-return.mjs";

const CHECK = (n) => new URL(`../checks/${n}`, import.meta.url).href;

const HANDOFF = "scripts/checks/handoff-response.mjs";
const CLOSURE_CHK = "scripts/checks/closure-readiness.mjs";
const SYNCDOCS = "scripts/checks/sync-docs-uniqueness.mjs";
const LANESTATE = "scripts/checks/lane-state.mjs";
const CHANNEL = "scripts/checks/channel-docs.mjs";

const ENTRY = "docs/handoff/B-001-s0-completion-boundary.md";
const CLOSURE = "docs/v1/V1-PHASE-CLOSURE.md";
const README = "docs/handoff/README.md";
const TEMPLATE = "docs/handoff/TEMPLATE.md";
const CANON = ".claude/skills/sync-docs/SKILL.md";

/**
 * The live channel's counts, READ rather than restated (`G93`, `D-119`).
 *
 * The `G83`/`G84` fixtures asserted absolute literals — "0 still carry NO
 * resolution; 3 turn report(s)". **The channel grows, so the literals went
 * stale within two turns**, which is `C-21`'s tally problem inside the very
 * apparatus that exists to catch it, and `G91`'s lesson one file over:
 * **a fixture must assert a RELATIONSHIP, not a live value.**
 */
function channelBaseline() {
  let unresolved = 0;
  let reports = 0;
  for (const f of readdirSync("docs/handoff").filter((x) => ENTRY_FILE.test(x))) {
    const t = readFileSync("docs/handoff/" + f, "utf8");
    const kind = field(t, "Kind");
    const isReport = kind !== null && /^turn-report/i.test(kind);
    if (isReport) reports++;
    else if (!field(t, "Resolution")) unresolved++;
  }
  return { unresolved, reports };
}

/**
 * The live Open count, counted the same way `handoff-response.mjs` counts it
 * (`^Open\b` against `Status`) — `B-108`. A separate function from
 * `channelBaseline()` rather than a field added to it: that one's two
 * counters are consumed together by other fixtures, and a caller wanting only
 * the Open count should not have to know or preserve the other two.
 */
function openBaseline() {
  let open = 0;
  for (const f of readdirSync("docs/handoff").filter((x) => ENTRY_FILE.test(x))) {
    const t = readFileSync("docs/handoff/" + f, "utf8");
    const status = field(t, "Status") ?? "";
    if (/^Open\b/i.test(status)) open++;
  }
  return open;
}

/**
 * The run identifiers, READ from the two places that own them (`D-124`).
 *
 * `G91` and `G93` both record the same lesson from the other direction: a
 * fixture that hardcodes a live value goes stale the moment the corpus moves.
 * A run that is free today is taken the moment Lane B files its next report, so
 * **which** run is free is derived, never written down here.
 */
function runFacts() {
  const table = readFileSync(CLOSURE, "utf8");
  const start = table.split("\n").findIndex((l) => /^#{2,4}\s+5\.0a\b/.test(l));
  const rest = table.split("\n").slice(start + 1);
  const end = rest.findIndex((l) => /^#{2,4}\s/.test(l));
  const block = (end < 0 ? rest : rest.slice(0, end)).join("\n");
  const assigned = [...block.matchAll(/`([^`]+)`/g)]
    .map((m) => m[1].trim())
    .filter((v) => /^L[A-C]-[A-Z]\d+-\d+$/.test(v));

  const used = new Set();
  for (const f of readdirSync("docs/handoff").filter((x) => ENTRY_FILE.test(x))) {
    const t = readFileSync("docs/handoff/" + f, "utf8");
    const kind = field(t, "Kind");
    if (kind === null || !/^turn-report/i.test(kind)) continue;
    const run = field(t, "Run");
    if (run) used.add(run.split(/[\s—–,;]/)[0]);
  }
  const free = assigned.find((r) => !used.has(r));
  const taken = assigned.find((r) => used.has(r));
  if (!free || !taken) {
    throw new Error(
      "fixtures: §5.0a must assign at least one run a report uses and one it does not; " +
        `assigned=${assigned.join(",")} used=${[...used].join(",")}`,
    );
  }
  return { free, taken };
}

/** `D-102`, raised as `B-013` and `B-017` — entry metadata and closure fields. */
export async function handoffFields(results) {
  const { free: FREE_RUN, taken: TAKEN_RUN } = runFacts();
  // `ENTRY` currently resolves and is not a turn report, so each mutation below
  // moves exactly one counter by one. Asserted as base±1, never as a literal.
  const base = channelBaseline();
  const orig = read(ENTRY);
  const restore = () => write(ENTRY, orig);
  const verified = (by, at) =>
    orig
      .replace(/^- \*\*Resolution:\*\*.*$/m, "- **Resolution:** Verified")
      .replace(/^- \*\*Verified-By:\*\*.*$/m, `- **Verified-By:** ${by}`)
      .replace(/^- \*\*Verified-At-Commit:\*\*.*$/m, `- **Verified-At-Commit:** ${at}`);
  // A VALID turn report built from the live entry (`D-124`): the kind changes,
  // a run is named, and the three closure-only markers are REMOVED rather than
  // blanked — blank is precisely what `B-051` reported and `B-056` asked to be
  // made detectable. `Evidence` stays, filled, because a report points at what
  // the turn produced.
  const asTurnReport = (run) =>
    orig
      .replace(/^- \*\*Kind:\*\*.*$/m, `- **Kind:** turn-report\n- **Run:** ${run}`)
      .replace(/^- \*\*Resolution:\*\*.*$\n?/m, "")
      .replace(/^- \*\*Verified-By:\*\*.*$\n?/m, "")
      .replace(/^- \*\*Verified-At-Commit:\*\*.*$\n?/m, "");

  await fixture(results, {
    name: "handoff: the live entries, unmutated",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "handoff: blank Kind directly above another field",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, orig.replace(/^- \*\*Kind:\*\*.*$/m, "- **Kind:** ")),
    restore,
    expect: "present but BLANK",
  });
  await fixture(results, {
    name: "handoff: blank Phase",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, orig.replace(/^- \*\*Phase:\*\*.*$/m, "- **Phase:** ")),
    restore,
    expect: "no **Phase:** value",
  });
  await fixture(results, {
    name: "handoff: Phase names no row in the register",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, orig.replace(/^- \*\*Phase:\*\*.*$/m, "- **Phase:** 9")),
    restore,
    expect: "no such phase in the register",
  });
  // `G83`, `D-113`. AN OPEN ENTRY WITH A BLANK `Lane A` MUST BE COUNTED OPEN.
  // The branch handling that case used to `continue` before any counter ran, so
  // the check reported `0 open` with four unread entries in the directory —
  // **the one line a human reads, wrong in the direction that hides work.**
  // Asserting on the FINDING alone would still have passed: the finding fired,
  // the count did not. This is the first fixture in the apparatus to assert on a
  // detail line, and the defect is why the harness gained `expectDetail`.
  //
  // `B-108`: this used to assert the literal `expectDetail: "1 open"`, true
  // only while the channel had zero Open entries at authoring time. `ENTRY`
  // is read fresh and is not itself Open before mutation, so counting the
  // live baseline BEFORE mutating it and asserting `baseOpen + 1` afterward
  // proves the same relationship without copying today's backlog size.
  const baseOpen = openBaseline();
  await fixture(results, {
    name: "handoff: an unread entry is COUNTED open, not merely reported",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(
        ENTRY,
        orig
          .replace(/^- \*\*Status:\*\*.*$/m, "- **Status:** Open")
          .replace(/^- \*\*Lane A:\*\*.*$/m, "- **Lane A:**"),
      ),
    restore,
    expect: "present but BLANK",
    expectDetail: `${baseOpen + 1} open`,
  });
  // The other half. A blank `Lane A` is an UNFINISHED entry; an absent one is a
  // MALFORMED file, and they need different messages because they need
  // different repairs. `fieldPresent()` existed for exactly this and this
  // caller did not use it.
  await fixture(results, {
    name: "handoff: an ABSENT Lane A line is malformed, not merely blank",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, orig.replace(/^- \*\*Lane A:\*\*.*$\n/m, "")),
    restore,
    expect: "no **Lane A:** field",
  });
  // `G84`, `D-113`. A turn report can never carry a terminal `Resolution`, so
  // it must not be counted among the entries that lack one. Asserting the
  // EXCLUSION rather than the presence of a message: the bug was arithmetic.
  //
  // `D-124`: this fixture used to set `Kind: turn-report` and blank the
  // `Resolution`, leaving `Verified-By` and `Verified-At-Commit` standing and
  // naming no run. **That shape is now itself a failure**, so the fixture builds
  // a VALID report — which is the coupling working: a rule with no fixture to
  // break is a rule nothing holds in place.
  await fixture(results, {
    name: "handoff: a turn-report is excluded from the unresolved count",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, asTurnReport(FREE_RUN)),
    restore,
    shouldPass: true,
    expectDetail: `${base.unresolved} still carry NO resolution; ${base.reports + 1} turn report(s)`,
  });
  // `D-124`, raised as `B-055` — the key the uniqueness control protects was
  // itself optional. Missing and blank are SEPARATE fixtures because they are
  // separate repairs and the check gives them different messages.
  await fixture(results, {
    name: "handoff: a turn-report naming NO run",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, asTurnReport(FREE_RUN).replace(/^- \*\*Run:\*\*.*$\n/m, "")),
    restore,
    expect: "no **Run:** field",
  });
  await fixture(results, {
    name: "handoff: a turn-report whose run is BLANK",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, asTurnReport("")),
    restore,
    expect: "present but BLANK",
  });
  await fixture(results, {
    name: "handoff: a turn-report minting a run the phase record never assigned",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, asTurnReport("LB-S9-99")),
    restore,
    expect: "is not in the run table",
  });
  await fixture(results, {
    name: "handoff: two canonical turn-reports naming one run",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, asTurnReport(TAKEN_RUN)),
    restore,
    expect: "duplicates the canonical turn report",
  });
  // `D-124`, raised as `B-056`. Tested per marker: `D-123` normalized the shape
  // and installed nothing that could detect a regression, so each prohibited
  // field gets its own proof that its return turns the suite red — including
  // when it comes back BLANK, which `field()` cannot see by construction.
  for (const marker of ["Resolution", "Verified-By", "Verified-At-Commit"]) {
    await fixture(results, {
      name: `handoff: a turn-report carrying a blank ${marker}`,
      modulePath: CHECK("handoff-response.mjs"),
      mutate: () =>
        write(ENTRY, asTurnReport(FREE_RUN).replace(/^- \*\*Phase:\*\*/m, `- **${marker}:**\n- **Phase:**`)),
      restore,
      expect: `a turn report carries no **${marker}:**`,
    });
  }
  // The positive control for the set above — `Evidence` is PERMITTED on a
  // report and only its blankness is a defect. Without this the six fixtures
  // prove only that fields can be banned, not that the right ones were.
  await fixture(results, {
    name: "handoff: a turn-report keeps a FILLED Evidence line",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(ENTRY, asTurnReport(FREE_RUN).replace(/^- \*\*Evidence:\*\*.*$/m, "- **Evidence:** the S0 packet")),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "handoff: a turn-report whose Evidence is blank",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(ENTRY, asTurnReport(FREE_RUN).replace(/^- \*\*Evidence:\*\*.*$/m, "- **Evidence:**")),
    restore,
    expect: "BLANK on a turn report",
  });
  // The positive control for the exclusion. The SAME entry, unresolved, as an
  // ordinary kind — it must land in the count. Without this the fixture above
  // proves only that a number can be made smaller.
  await fixture(results, {
    name: "handoff: the same entry as a finding IS counted unresolved",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(
        ENTRY,
        orig
          .replace(/^- \*\*Kind:\*\*.*$/m, "- **Kind:** finding")
          .replace(/^- \*\*Resolution:\*\*.*$/m, "- **Resolution:**"),
      ),
    restore,
    shouldPass: true,
    expectDetail: `${base.unresolved + 1} still carry NO resolution`,
  });
  await fixture(results, {
    name: "closure: Verified-At-Commit is not hexadecimal",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(ENTRY, verified("Lane B", "not-a-sha")),
    restore,
    expect: "is not a commit identifier",
  });
  await fixture(results, {
    name: "closure: a well-formed SHA that does not exist",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(ENTRY, verified("Lane B", "deadbeefdead")),
    restore,
    expect: "no such commit in this repository",
  });
  await fixture(results, {
    name: "closure: Verified-By is the answering side",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(ENTRY, verified("Acknowledged", "983f058")),
    restore,
    expect: "not an independent verifier",
  });

  // `C-39` — the leading-actor allowlist, proven BOTH ways; Judge-approved as
  // "the 9-accept / 6-reject fixture". ACCEPT: the nine live values `C-39`
  // names, READ from each cited entry at run time and never retyped — so a later
  // edit to any of them fails here instead of being silently tolerated.
  for (const id of ["B-044", "B-058", "B-078", "B-079", "B-080", "B-081", "B-082", "B-083", "B-085"]) {
    const file = readdirSync("docs/handoff").find((f) => f.startsWith(`${id}-`));
    const live = file ? (read(`docs/handoff/${file}`).match(/^- \*\*Verified-By:\*\* *(.*)$/m) || [])[1] : undefined;
    await fixture(results, {
      name: `closure C-39 accept: ${id}'s live Verified-By`,
      modulePath: CHECK("closure-readiness.mjs"),
      mutate: () => {
        if (!live) throw new Error(`${id}: no live Verified-By to read`);
        write(ENTRY, verified(live, "983f058"));
      },
      restore,
      shouldPass: true,
    });
  }

  // REJECT: `C-39`'s must-fail probes verbatim from the register — including
  // "both em-dash disclaimer forms", which the register defines as the initial
  // audit record raised by Lane B "(or Lane C)" — plus the one excluded token the
  // old regex never listed: `Claude Cowork`, the answering side since `D-200`.
  // Each case names the RULE it must trip, so a rejection for the wrong reason is
  // a MISS, not a pass.
  const C39_UNKNOWN = "does not open with a known actor token";
  const C39_ANSWERING = "is the answering side or a receipt state";
  for (const [probe, why] of [
    ["Lane A", C39_ANSWERING],
    ["reviewed by Lane A", C39_UNKNOWN],
    ["verified by Lane A", C39_UNKNOWN],
    ["\u2014 not yet dispositioned; raised by Lane B", C39_UNKNOWN],
    ["\u2014 not yet dispositioned; raised by Lane C", C39_UNKNOWN],
    ["Claude Cowork", C39_ANSWERING],
  ]) {
    await fixture(results, {
      name: `closure C-39 reject: "${probe}"`,
      modulePath: CHECK("closure-readiness.mjs"),
      mutate: () => write(ENTRY, verified(probe, "983f058")),
      restore,
      expect: why,
    });
  }
  await fixture(results, {
    name: "closure: Verified-At-Commit reads pending",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(ENTRY, verified("Lane B", "pending — this pass")),
    restore,
    expect: "no **Verified-At-Commit:**",
  });
  await fixture(results, {
    name: "closure: malformed Resolution while NO phase is closed",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(ENTRY, orig.replace(/^- \*\*Resolution:\*\*.*$/m, "- **Resolution:** Done")),
    restore,
    expect: "is not one of Verified, Applied",
  });
}

/** `D-102`, `B-013` item 6 — closure gating is phase-scoped, both halves. */
/**
 * `D-102`, `B-013` item 6 — closure gating is phase-scoped, both halves.
 *
 * `B-107`: this used to borrow B-017 (Phase 1) and B-016 (Phase 3) exactly as
 * they stood live, on the assumption that B-017 was Open and B-016 was a
 * live Phase-3 blocker. Both are long since terminal, so the isolation case
 * could no longer manufacture the Phase-3 finding it needed to prove
 * exclusion — reporting `MISS` — and the terminal-entry case could pass
 * without ever observing a transition, because B-017 was already terminal
 * before the fixture mutated it. Every case below now manufactures its own
 * non-terminal state from the real entries' saved bytes (never a live
 * value), and each assertion names the specific entry it is proving
 * something about, not a generic phrase any open Phase-1 entry could satisfy.
 */
export async function phaseScope(results) {
  const orig = read(CLOSURE);
  const p1 = "docs/handoff/B-017-handoff-closure-parser-false-green.md"; // real Phase 1 entry, terminal today
  const p3 = "docs/handoff/B-016-lane-c-required-check-transition-defects.md"; // real Phase 3 entry, terminal today
  const blocker = "docs/handoff/B-999-fixture-phase-scope-blocker.md"; // synthetic-only; never a real ID
  const p1Orig = read(p1);
  const p3Orig = read(p3);
  const restore = () => {
    write(CLOSURE, orig);
    write(p1, p1Orig);
    write(p3, p3Orig);
    if (existsSync(blocker)) rmSync(blocker);
  };

  // Close Phase 1 by filling its `Closed` cell.
  const closePhase1 = (text) => {
    const lines = text.split("\n");
    const i = lines.findIndex((l) => /^\|\s*\*\*A\*\*\s*\|/.test(l) && /1 — Orchestration/.test(l));
    if (i < 0) throw new Error("Phase 1 row not found");
    const cells = lines[i].split("|");
    const header = lines.find((l) => /^\|\s*Lane\s*\|/.test(l));
    const names = header.split("|").map((c) => c.replace(/\*/g, "").trim().toLowerCase());
    const iClosed = names.findIndex((c) => c.startsWith("closed"));
    if (iClosed < 0) throw new Error("Closed column not found");
    cells[iClosed] = " 2026-08-24 ";
    lines[i] = cells.join("|");
    return lines.join("\n");
  };

  // Manufacture a non-terminal control from a real entry's own saved bytes:
  // drop the `Resolution:` line entirely, which is exactly the `!resolution`
  // shape `closure-readiness.mjs` names by PATH in its own finding — so
  // asserting on the entry's ID is asserting on the manufactured state, not
  // on whichever real entries happen to be open the day this fixture runs.
  const stripResolution = (text) => text.replace(/^- \*\*Resolution:\*\*.*\n/m, "");

  const blockerText = [
    "# B-999 — fixture-only synthetic Phase 1 blocker",
    "",
    "- **Raised:** fixture",
    "- **Kind:** finding",
    "- **Phase:** 1",
    "- **Status:** Open",
    "- **Lane A:**",
    "",
    "Synthetic entry, created and removed by `phaseScope()` in `scripts/fixtures/suites.mjs` (`B-107`).",
    "It exists only so \"the gate stays live for other Phase 1 entries\" does not depend on which real",
    "handoff entries happen to be open when this fixture runs.",
    "",
  ].join("\n");

  await fixture(results, {
    name: "phase scope: an OPEN Phase 1 entry fails Phase 1 closure",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => {
      write(CLOSURE, closePhase1(orig));
      write(p1, stripResolution(p1Orig));
    },
    restore,
    expect: "B-017",
  });

  // The other half: a Phase 3 entry must NOT fail Phase 1's boundary. Both
  // controls are manufactured non-terminal so the finding can only come from
  // the phase-scoping logic itself, never from incidental live state.
  {
    write(CLOSURE, closePhase1(orig));
    write(p1, stripResolution(p1Orig));
    write(p3, stripResolution(p3Orig));
    try {
      const mod = await import(`${CHECK("closure-readiness.mjs")}?t=${Date.now()}`);
      const out = mod.run();
      const leaked = out.findings.some((f) => f.includes("B-016"));
      const gated = out.findings.some((f) => f.includes("B-017"));
      results.push({
        name: "phase scope: an OPEN Phase 3 entry does NOT fail Phase 1 closure",
        ok: !leaked && gated,
        detail: leaked ? "a Phase 3 entry failed Phase 1's boundary" : gated ? "scoped correctly" : "the gate did not fire at all — it may be disabled rather than scoped",
      });
    } finally {
      restore();
    }
  }

  // Making the entry terminal must silence the gate FOR THAT ENTRY. A
  // separately manufactured Phase 1 blocker (never B-017 itself) proves the
  // gate has not simply gone silent for everyone — the claim this fixture
  // makes is narrow: B-017 specifically stops being named, nothing broader.
  {
    write(CLOSURE, closePhase1(orig));
    write(p1, stripResolution(p1Orig).replace(/^(- \*\*Status:\*\*.*)$/m, "$1\n- **Resolution:** Withdrawn"));
    write(blocker, blockerText);
    try {
      const mod = await import(`${CHECK("closure-readiness.mjs")}?t=${Date.now()}`);
      const out = mod.run();
      const stillNamed = out.findings.some((f) => f.includes("B-017"));
      const otherBlockerNamed = out.findings.some((f) => f.includes("B-999"));
      results.push({
        name: "phase scope: a terminal Phase 1 entry stops blocking",
        ok: !stillNamed && otherBlockerNamed,
        detail: stillNamed
          ? "B-017 is terminal and the gate still names it"
          : otherBlockerNamed
            ? "B-017 silenced while the manufactured B-999 blocker keeps the gate live"
            : "the gate went silent entirely — that is a disabled gate, not a satisfied one",
      });
    } finally {
      restore();
    }
  }
}

/** `D-102`, raised as `B-014` and `B-018` — exactly one propagation runbook. */
export async function syncDocs(results) {
  const canon = read(CANON);
  const dupDir = ".agents/skills/sync-docs";

  await fixture(results, {
    name: "sync-docs: the live repository, unmutated",
    modulePath: CHECK("sync-docs-uniqueness.mjs"),
    mutate: () => {},
    restore: () => {},
    shouldPass: true,
  });
  await fixture(results, {
    name: "sync-docs: an UNTRACKED duplicate runbook",
    modulePath: CHECK("sync-docs-uniqueness.mjs"),
    mutate: () => {
      mkdirSync(dupDir, { recursive: true });
      write(`${dupDir}/SKILL.md`, "# duplicate\nAGENTS.md, AGENTS.md, graphify.md\n");
    },
    restore: () => rmSync(`${dupDir}/SKILL.md`, { force: true }),
    expect: "duplicate sync-docs procedure",
  });
  await fixture(results, {
    name: "sync-docs: the canonical runbook deleted from disk",
    modulePath: CHECK("sync-docs-uniqueness.mjs"),
    mutate: () => rmSync(CANON, { force: true }),
    restore: () => write(CANON, canon),
    expect: "does not exist",
  });
  await fixture(results, {
    name: "sync-docs: the canonical triple omits CLAUDE.md",
    modulePath: CHECK("sync-docs-uniqueness.mjs"),
    mutate: () => write(CANON, canon.replace(/CLAUDE\.md/g, "AGENTS.md")),
    restore: () => write(CANON, canon),
    expect: "omits `CLAUDE.md`",
  });
}

/** `D-103` — exactly one lane is `Active`. */
/**
 * `D-103`/`D-108` — the lane lock as a state machine.
 *
 * LANE-AGNOSTIC BY CONSTRUCTION (`G91`, `D-117`). Every mutation below used to
 * name a lane letter, which silently assumed Lane A held the lock. **The first
 * time the lock moved, three of these fixtures would have stopped testing what
 * their names claim** — one would have produced a single `Active` instead of
 * two, and two would have fired a different finding than the one asserted.
 *
 * That is `D-106`'s lesson repeating: *retarget at structure, not at a live
 * value.* A fixture suite that only works while one particular lane is `Active`
 * is a suite that breaks on **the exact event it exists to protect** — the
 * boundary. The suite now reads which lane holds the lock and mutates by role.
 */
export async function laneState(results) {
  const orig = read(CLOSURE);
  const restore = () => write(CLOSURE, orig);

  // Replace a lane row's STATE cell, leaving Phase and every trailing column
  // untouched. Anchored on the lane letter, so no phase label is hard-coded.
  const row = (L) => new RegExp(`^\\| \\*\\*${L}\\*\\* \\|([^|]*)\\|([^|]*)\\|`, "m");
  const setState = (text, L, state) =>
    text.replace(row(L), (_m, phase) => `| **${L}** | ${phase.trim()} | ${state} |`);
  const stateOf = (L) => (row(L).exec(orig) ?? [])[2] ?? "";

  const LANES = ["A", "B", "C"];
  const active = LANES.find((L) => /`Active`/.test(stateOf(L)));
  // Between turns there is no `Active` lane and these fixtures have no role to
  // mutate. Saying so beats emitting confident nonsense.
  if (!active) {
    results.push({
      name: "lane-state: suite requires a turn in progress",
      ok: false,
      detail: "no lane is `Active` in the live register — the role-based mutations have no subject",
    });
    return;
  }
  const others = LANES.filter((L) => L !== active);

  await fixture(results, {
    name: "lane-state: the live register, unmutated",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: `lane-state: TWO lanes are Active (${active} + ${others[0]})`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, setState(orig, others[0], "**`Active`**")),
    restore,
    expect: "lanes are `Active`",
  });
  // `D-156` inverted three of these against `D-108` (`G110`). Kept as fixtures
  // rather than deleted: the pairs below are the proof the inversion took
  // effect, and a deleted negative test leaves no evidence either way.
  await fixture(results, {
    name: `lane-state: ONE Eligible beside Active is the nomination (${others[0]} offered while ${active} runs)`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, setState(orig, others[0], "**`Eligible`**")),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: `lane-state: TWO lanes are Eligible (${others[0]} + ${others[1]})`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () =>
      write(
        CLOSURE,
        others.reduce((t, L) => setState(t, L, "**`Eligible`**"), orig),
      ),
    restore,
    expect: "lanes are `Eligible`",
  });
  await fixture(results, {
    name: "lane-state: NO lane is Active — every lane Eligible",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () =>
      write(
        CLOSURE,
        LANES.reduce((t, L) => setState(t, L, "**`Eligible`**"), orig),
      ),
    restore,
    expect: "NO lane is `Active`",
  });
  await fixture(results, {
    name: `lane-state: NO lane is Active — ${active} steps out with others Blocked`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, setState(orig, active, "**`Eligible`**")),
    restore,
    expect: "NO lane is `Active`",
  });
  await fixture(results, {
    name: `lane-state: ${others[1]} carries a state outside the four`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, setState(orig, others[1], "**`Paused`**")),
    restore,
    expect: "no recognised state",
  });
  await fixture(results, {
    name: `lane-state: ${others[1]} is Blocked naming nothing it is blocked on`,
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, setState(orig, others[1], "**`Blocked`**")),
    restore,
    expect: "names nothing it is blocked on",
  });
}

export async function channelDocs(results) {
  const r0 = read(README);
  const t0 = read(TEMPLATE);
  const restore = () => { write(README, r0); write(TEMPLATE, t0); };

  await fixture(results, {
    name: "channel-docs: the live documents, unmutated",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "channel-docs: README drops a resolution the check implements",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => write(README, r0.replace(/\bApplied\b/g, "Landed")),
    restore,
    expect: "does not name the `Applied` resolution",
  });
  await fixture(results, {
    name: "channel-docs: template drops a resolution the check implements",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => write(TEMPLATE, t0.replace(/\bWithdrawn\b/g, "Retracted")),
    restore,
    expect: "does not offer the `Withdrawn` resolution",
  });
  await fixture(results, {
    name: "channel-docs: template declares a field no check reads",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => write(TEMPLATE, t0.replace("- **Evidence:**", "- **Provenance:**\n- **Evidence:**")),
    restore,
    expect: "declares **Provenance:** and no check reads it",
  });
  await fixture(results, {
    name: "channel-docs: template drops a field the checks read",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => write(TEMPLATE, t0.replace(/^- \*\*Phase:\*\*.*$/m, "")),
    restore,
    expect: "a check reads **Phase:** and the template does not declare it",
  });
  await fixture(results, {
    name: "channel-docs: a prose tally returns",
    modulePath: CHECK("channel-docs.mjs"),
    mutate: () => write(README, r0.replace("The dispositions are", "There are three dispositions:")),
    restore,
    expect: "is a restated count",
  });
}

/**
 * `D-227` — the retired Cowork/Code tool-crossing classifier stays retired.
 *
 * `classify()` is a pure function of a path list; no file mutation or restore
 * is needed. The positive control proves ordinary single-lane and
 * multi-lane behaviour is unaffected; the negative-shaped cases prove the
 * specific regression this suite exists to catch: a `docs/` + `scripts/`
 * change — the exact shape the removed `A_SUB` classifier used to flag as an
 * "A-cowork + A-code" surface crossing — must classify as Lane A only, with
 * no sub-classification signal anywhere in the returned shape.
 */
export async function laneBoundaryToolCrossing(results) {
  const cases = [
    {
      name: "lane-boundary: docs/ only classifies as Lane A (positive control)",
      files: ["docs/Modular_PRD.md"],
      check: (r) => r.byLane.size === 1 && r.byLane.has("A"),
      detail: (r) => `byLane=${[...r.byLane.keys()].join(",")}`,
    },
    {
      name: "lane-boundary: app/ only classifies as Lane B (positive control)",
      files: ["app/page.tsx"],
      check: (r) => r.byLane.size === 1 && r.byLane.has("B"),
      detail: (r) => `byLane=${[...r.byLane.keys()].join(",")}`,
    },
    {
      name: "lane-boundary: docs/ + app/ still reports an A+B lane crossing",
      files: ["docs/Modular_PRD.md", "app/page.tsx"],
      check: (r) => r.byLane.size === 2 && r.byLane.has("A") && r.byLane.has("B"),
      detail: (r) => `byLane=${[...r.byLane.keys()].sort().join("+")}`,
    },
    {
      name: "lane-boundary: docs/ + scripts/ — the former A-cowork+A-code shape — is Lane A only, no sub-classification",
      files: ["docs/Modular_PRD.md", "scripts/check-consistency.mjs"],
      check: (r) => r.byLane.size === 1 && r.byLane.has("A") && !("bySub" in r),
      detail: (r) => `byLane=${[...r.byLane.keys()].join(",")}, bySub present=${"bySub" in r}`,
    },
    {
      name: "lane-boundary: .agents/rules/graphify.md + docs/graph-fragments/*.json — the former exact-file exceptions — carry no sub-classification either",
      files: [".agents/rules/graphify.md", "docs/graph-fragments/frag131.json"],
      check: (r) => r.byLane.size === 1 && r.byLane.has("A") && !("bySub" in r),
      detail: (r) => `byLane=${[...r.byLane.keys()].join(",")}, bySub present=${"bySub" in r}`,
    },
  ];

  for (const c of cases) {
    const r = classify(c.files);
    const ok = c.check(r);
    results.push({ name: c.name, ok, detail: c.detail(r) });
  }
}

/**
 * `D-231` — the shared governed-intent exclusion matcher, and `docs-drift`'s
 * use of it, per `docs/handoff/B-102`'s four named cases. `classifyChangedPaths`
 * is a pure function of a path list, exactly like `classify()` above, so these
 * cases need no git commits, file mutation or restore.
 */
export async function governedIntentExclusion(results) {
  const cases = [
    {
      name: "governed-intent: a handoff-only advance is excluded-only (passes)",
      paths: ["docs/handoff/B-999-example.md"],
      check: (r) => r.excludedOnly === true && r.governed.length === 0,
      detail: (r) => `excludedOnly=${r.excludedOnly}, governed=${JSON.stringify(r.governed)}`,
    },
    {
      name: "governed-intent: graphify scratch output is also excluded",
      paths: ["docs/.graphify/GRAPH_REPORT.md"],
      check: (r) => r.excludedOnly === true && r.governed.length === 0,
      detail: (r) => `excludedOnly=${r.excludedOnly}, governed=${JSON.stringify(r.governed)}`,
    },
    {
      name: "governed-intent: a governed-doc advance is NOT excluded-only (fails)",
      paths: ["docs/Modular_PRD.md"],
      check: (r) => r.excludedOnly === false && r.governed.length === 1,
      detail: (r) => `excludedOnly=${r.excludedOnly}, governed=${JSON.stringify(r.governed)}`,
    },
    {
      name: "governed-intent: a mixed handoff+governed advance is NOT excluded-only (fails)",
      paths: ["docs/handoff/B-999-example.md", "docs/Modular_PRD.md"],
      check: (r) => r.excludedOnly === false && r.governed.length === 1 && r.governed[0] === "docs/Modular_PRD.md",
      detail: (r) => `excludedOnly=${r.excludedOnly}, governed=${JSON.stringify(r.governed)}`,
    },
    {
      name: "governed-intent: no changed paths at all is excluded-only (the matching-analysis case passes)",
      paths: [],
      check: (r) => r.excludedOnly === true && r.governed.length === 0,
      detail: (r) => `excludedOnly=${r.excludedOnly}, governed=${JSON.stringify(r.governed)}`,
    },
  ];

  for (const c of cases) {
    const r = classifyChangedPaths(c.paths);
    const ok = c.check(r);
    results.push({ name: c.name, ok, detail: c.detail(r) });
  }
}

/**
 * `B-109` — `docs-drift`'s range lookup passes Git arguments as an array,
 * never shell text. An injected mock executor records exactly what it was
 * called with, proving the argument SHAPE without spawning a real process —
 * and a real process is the wrong tool anyway: a shell-metacharacter value
 * cannot exist as an actual Git object to diff against, so the only way to
 * prove it is passed through inert is to intercept the call itself.
 */
export async function docsDriftArgumentSafety(results) {
  const cases = [
    {
      name: "docs-drift: getChangedPaths calls git with an argument array, not a shell string",
      analyzed: "abc1234",
      head: "def5678",
      mockOutput: "docs/handoff/B-999.md\n",
      check: (calls, out) =>
        calls.length === 1 &&
        calls[0].cmd === "git" &&
        Array.isArray(calls[0].args) &&
        calls[0].args.join(" ") === "diff --name-only abc1234 def5678" &&
        JSON.stringify(out) === JSON.stringify(["docs/handoff/B-999.md"]),
    },
    {
      name: "docs-drift: a shell-metacharacter analyzed value is passed as ONE inert argument",
      analyzed: "$(rm -rf /); echo pwned",
      head: "def5678",
      mockOutput: "",
      check: (calls) =>
        calls.length === 1 &&
        calls[0].args.length === 4 &&
        calls[0].args[2] === "$(rm -rf /); echo pwned",
    },
    {
      name: "docs-drift: a real unreachable-commit failure still propagates (fail-closed, not swallowed here)",
      analyzed: "0000000",
      head: "def5678",
      mockThrows: true,
      check: (calls, out, threw) => threw && calls.length === 1,
    },
  ];

  for (const c of cases) {
    const calls = [];
    const mockExec = (cmd, args, opts) => {
      calls.push({ cmd, args, opts });
      if (c.mockThrows) throw new Error("simulated: unknown revision");
      return c.mockOutput;
    };
    let out;
    let threw = false;
    try {
      out = getChangedPaths(c.analyzed, c.head, mockExec);
    } catch {
      threw = true;
    }
    const ok = c.check(calls, out, threw);
    results.push({
      name: c.name,
      ok,
      detail: ok ? "argument array confirmed" : `calls=${JSON.stringify(calls)}, threw=${threw}`,
    });
  }
}

/** `D-105` — the crossing declaration must be what git parses as a trailer. */
export async function laneGate(results) {
  const CI = ".github/workflows/ci.yml";
  const CFG = "docs/CONFIG_LOG.md";
  const ci0 = read(CI);
  const cfg0 = read(CFG);
  const msgDir = ".git/lane-gate-fixture";
  const msgPath = `${msgDir}/msg`;

  const setup = () => {
    mkdirSync(msgDir, { recursive: true });
    write(CI, `${ci0}\n# fixture\n`);
    write(CFG, `${cfg0}\n<!-- fixture -->\n`);
    execFileSync("git", ["add", CI, CFG]);
  };
  const teardown = () => {
    try { execFileSync("git", ["restore", "--staged", CI, CFG]); } catch { /* nothing staged */ }
    write(CI, ci0);
    write(CFG, cfg0);
    rmSync(msgDir, { recursive: true, force: true });
  };

  const cases = [
    {
      name: "lane-gate: declaration IN the trailer block",
      msg: "docs: thing\n\nbody\n\nLane-Crossing: authorised\nCo-Authored-By: X <x@y>\n",
      expectCode: 0,
      expectText: "",
    },
    {
      name: "lane-gate: declaration separated by a blank line — the `d6d406a` shape",
      msg: "docs: thing\n\nbody\n\nLane-Crossing: authorised\n\nCo-Authored-By: X <x@y>\n",
      expectCode: 1,
      expectText: "NOT in the trailer block",
    },
    {
      name: "lane-gate: no declaration at all",
      msg: "docs: thing\n\nbody\n",
      expectCode: 1,
      expectText: "spans lanes",
    },
  ];

  try {
    setup();
    for (const c of cases) {
      write(msgPath, c.msg);
      let code = 0;
      let out = "";
      try {
        out = execFileSync(process.execPath, ["scripts/lane-gate.mjs", msgPath], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
      } catch (e) {
        code = e.status ?? 1;
        out = `${e.stdout ?? ""}${e.stderr ?? ""}`;
      }
      const codeOk = code === c.expectCode;
      const textOk = !c.expectText || out.includes(c.expectText);
      results.push({
        name: c.name,
        ok: codeOk && textOk,
        detail: codeOk ? (textOk ? `exit ${code}, message names it` : `exit ${code} but message did not name "${c.expectText}"`) : `exit ${code}, expected ${c.expectCode}`,
      });
    }
  } finally {
    teardown();
  }
}

/**
 * `C-17` / `D-95` — `CONFIG_LOG.md` ↔ `lib/config/`, both directions.
 *
 * **`D-106` claimed `G80` closed and left this check with no fixture at all** —
 * along with `C-19` below. `B-007` and `B-010` cite exactly these two as their
 * negative-test evidence, so **two of the fourteen claims `D-106` set out to
 * back were still unbacked when it recorded the gap as closed.** Raised by Lane
 * B as `B-024` and `B-025`, and they are right (`D-107`).
 */
export async function configCoupling(results) {
  const LOG = "docs/CONFIG_LOG.md";
  const BUILD = "lib/config/build-config.ts";
  const log0 = read(LOG);
  const build0 = read(BUILD);
  const restore = () => { write(LOG, log0); write(BUILD, build0); };

  await fixture(results, {
    name: "config-coupling: the live pair, unmutated",
    modulePath: CHECK("config-coupling.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });

  // The direction `C-17` was opened for: a published value nobody implemented.
  // The pre-existing test could not fail here, which is why `C-17` exists.
  await fixture(results, {
    name: "config-coupling: an authoritative row with no declaration",
    modulePath: CHECK("config-coupling.mjs"),
    mutate: () =>
      write(LOG, log0.replace(/^\| `SUCCESS_ARTICLES_LOGGED_MIN`/m, "| `FIXTURE_UNIMPLEMENTED_VALUE` | 1 | fixture | — | No |\n| `SUCCESS_ARTICLES_LOGGED_MIN`")),
    restore,
    expect: "FIXTURE_UNIMPLEMENTED_VALUE",
  });

  // And the inverse, which a one-way check would license.
  await fixture(results, {
    name: "config-coupling: a declaration with no authoritative row",
    modulePath: CHECK("config-coupling.mjs"),
    mutate: () => write(BUILD, `${build0}\nexport const FIXTURE_UNDOCUMENTED_VALUE = 1;\n`),
    restore,
    expect: "FIXTURE_UNDOCUMENTED_VALUE",
  });

  // `D-94`'s rule: a derived view must NOT be required to have a declaration.
  // Without this the check would push Lane B into storing two sources of truth.
  await fixture(results, {
    name: "config-coupling: a §7.2 derived view needs no declaration",
    modulePath: CHECK("config-coupling.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
}

/**
 * `C-19` / `D-95` — `Reopens-Phase:` cannot name a phase that never closed.
 *
 * The other claim `D-106` left unbacked (`B-025`). Reopening presupposes a
 * closure, and **no phase has ever closed**, so every use is currently an
 * error — which is exactly why the check is not vacuous.
 */
export async function reopensPhase(results) {
  const orig = read(ENTRY);
  const restore = () => write(ENTRY, orig);
  const withField = (v) => orig.replace(/^(- \*\*Status:\*\*.*)$/m, `$1\n- **Reopens-Phase:** ${v}`);

  await fixture(results, {
    name: "C-19: the live entries carry no Reopens-Phase",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "C-19: Reopens-Phase names a phase that never closed",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, withField("1")),
    restore,
    expect: "has never closed",
  });
  await fixture(results, {
    name: "C-19: Reopens-Phase names no phase at all",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, withField("soon")),
    restore,
    expect: "names no phase number",
  });
  await fixture(results, {
    name: "C-19: Reopens-Phase names a phase not in the register",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, withField("9")),
    restore,
    expect: "no such phase in the register",
  });
}

/**
 * `G98`, `D-124` (raised as `B-054`) — the tier sweep's fallback.
 *
 * The sweep required "at least one ID from the row's Item cell appears in the
 * mapped document". Item cells usually name an ENTRY or a CONDITION, not the
 * decision — so a condition already mentioned in the target file from an
 * earlier pass satisfied a claim about a NEW edit. `D-123` went green on a
 * Phase-closure propagation it never performed.
 */
const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";

export async function tierSweep(results) {
  const orig = read(CLOSURE);
  const restore = () => write(CLOSURE, orig);
  const origReg = read(REGISTER);
  const restoreReg = () => write(REGISTER, origReg);

  await fixture(results, {
    name: "tier-sweep: the live register, unmutated",
    modulePath: CHECK("tier-sweep.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  // The `B-054` shape exactly: the decision's own citation is removed from the
  // TARGET tier's own file (`D-124` mapped to "Phase closure" is
  // `V1-PHASE-CLOSURE.md`, not this file) while the register row still claims
  // ✅ for it — which is what used to be rescued by any other ID in the cell.
  await fixture(results, {
    name: "tier-sweep: a claimed tier edit whose decision never landed there",
    modulePath: CHECK("tier-sweep.mjs"),
    mutate: () => write(CLOSURE, orig.replace(/D-124/g, "D-000")),
    restore,
    expect: "marked ✅ for",
  });
  // `D-125`'s critic pass backtested `sectionDecision` against all 74 live rows
  // that depend on it — zero mismatches — but zero of those rows exercise the
  // OTHER branch: a row appearing before any decision heading has been seen at
  // all, where `sectionDecision` is still `null` and the check must fall back
  // to the pre-`G98` behavior (any ID in the cell) rather than crash or silently
  // pass. Constructed because no live row currently exercises it — the backtest
  // proved the covered path correct; this proves the UNcovered path degrades
  // safely rather than being untested by omission.
  //
  // First attempt used the "Register" column, whose tier maps to `files: []` —
  // and `checked` only increments INSIDE the loop over `tier.files`, so that
  // column can never be counted at all regardless of the fallback. Caught by
  // this very fixture MISSing on its first run: `189` stayed `189`. Rebuilt
  // against "Build spec", a tier with a real target file, using `G00` —
  // confirmed absent from it — so the fallback path is provably REACHED and
  // EVALUATED: a finding proves that far more directly than a count would.
  await fixture(results, {
    name: "tier-sweep: a checkmarked row before any decision heading exists",
    modulePath: CHECK("tier-sweep.mjs"),
    mutate: () => {
      const table =
        "\n| Item | Build spec |\n|---|---|\n| pre-heading probe (`G00`) | ✅ nowhere real |\n";
      write(REGISTER, table + origReg);
    },
    restore: restoreReg,
    expect: "marked ✅ for",
  });
}

const RETENTION_CHK = "scripts/checks/retention-policy-coupling.mjs";
const ALPHA = "docs/governance/alpha-portfolio-business-continuity-implementation-plan.md";
const BUSINESS_CASE = "docs/source/business-case.md";
const BLUEPRINT = "docs/source/blueprint.md";
const MODULAR_PRD = "docs/Modular_PRD.md";

/** `D-134` — `RET-EDITORIAL` coupled across the four tiers that cite it. */
export async function retentionPolicyCoupling(results) {
  const bcOrig = read(BUSINESS_CASE);
  const alphaOrig = read(ALPHA);
  const blueprintOrig = read(BLUEPRINT);
  const prdOrig = read(MODULAR_PRD);
  const restoreAll = () => {
    write(BUSINESS_CASE, bcOrig);
    write(ALPHA, alphaOrig);
    write(BLUEPRINT, blueprintOrig);
    write(MODULAR_PRD, prdOrig);
  };

  await fixture(results, {
    name: "retention-policy-coupling: the live corpus, unmutated",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () => {},
    restore: restoreAll,
    shouldPass: true,
  });
  await fixture(results, {
    name: "retention-policy-coupling: version disagreement across tiers (2)",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () =>
      write(
        BUSINESS_CASE,
        bcOrig.replace("### RET-EDITORIAL 0.1-provisional", "### RET-EDITORIAL 0.2-final"),
      ),
    restore: restoreAll,
    expect: "version disagreement",
  });
  await fixture(results, {
    name: "retention-policy-coupling: archive directly defined as delete (4)",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () =>
      write(
        ALPHA,
        alphaOrig.replace(
          "### 6.5 Retention and archival governance",
          "Archival is deletion.\n\n### 6.5 Retention and archival governance",
        ),
      ),
    restore: restoreAll,
    expect: "directly defined as delete/dispose",
  });
  await fixture(results, {
    name: "retention-policy-coupling: a period copied into the Blueprint uncited (5)",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () =>
      write(
        BLUEPRINT,
        blueprintOrig.replace(
          "| A6 | Data retention |",
          "| A6 | Data retention | Rejected work is archived after 5 years. |\n| A6-old | Data retention |",
        ),
      ),
    restore: restoreAll,
    expect: "no RET-EDITORIAL citation on the same line",
  });
  // Deliberately mutates `V1-BUILD-SPEC.md` (Lane A's own surface), never the
  // `0002` migration itself (Lane B's, `D-56`) — check 7 fires on either, and
  // a fixture that briefly touched Lane B's real schema file would risk
  // looking like a lane crossing if `B-021`'s restore-failure class hit it.
  const buildSpecOrig = read("docs/v1/V1-BUILD-SPEC.md");
  await fixture(results, {
    name: "retention-policy-coupling: Build Spec gates S1 on C-32 as a dependency (7)",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () => write("docs/v1/V1-BUILD-SPEC.md", buildSpecOrig + "\nS1 blocks and gates on C-32.\n"),
    restore: () => write("docs/v1/V1-BUILD-SPEC.md", buildSpecOrig),
    expect: "dependency/gate on S1",
  });
  await fixture(results, {
    name: "retention-policy-coupling: AC-12a with no D-116 citation anywhere (8)",
    modulePath: CHECK("retention-policy-coupling.mjs"),
    mutate: () => write(MODULAR_PRD, prdOrig.replace(/D-116/g, "D-000")),
    restore: restoreAll,
    expect: "without any occurrence citing its creating decision",
  });
}

/**
 * `D-139` — `withRetry` tested directly, not through a check module.
 *
 * The failure this answers: a single-process write hit a millisecond-scale
 * Windows lock (`EBUSY`/`UNKNOWN`) with no concurrent process running, and
 * the fixture runner reported it as ten unrelated MISSes cascading from one
 * root cause. Three shapes must all hold, or the fix is worse than nothing:
 * a transient error that clears within the retry budget must succeed: a
 * persistent one must still fail rather than hang or loop forever; and a
 * non-transient error must fail on the FIRST attempt, never retried, so a
 * genuinely missing file reports immediately instead of stalling.
 */
function retryResilience(results) {
  {
    let calls = 0;
    const out = withRetry(() => {
      calls++;
      if (calls < 3) {
        const e = new Error("simulated transient lock");
        e.code = "EBUSY";
        throw e;
      }
      return "ok";
    });
    const ok = out === "ok" && calls === 3;
    results.push({
      name: "withRetry: a transient error clearing within budget succeeds",
      ok,
      detail: ok ? `succeeded on attempt ${calls}` : `got "${out}" after ${calls} call(s)`,
    });
  }
  {
    let calls = 0;
    let threw = null;
    try {
      withRetry(() => {
        calls++;
        const e = new Error("simulated persistent lock");
        e.code = "EBUSY";
        throw e;
      });
    } catch (e) {
      threw = e;
    }
    const ok = threw !== null && threw.code === "EBUSY" && calls === 4;
    results.push({
      name: "withRetry: a persistent transient error still fails, bounded",
      ok,
      detail: ok ? `threw after ${calls} attempt(s), not masked` : `calls=${calls} threw=${threw ? threw.code : "none"}`,
    });
  }
  {
    let calls = 0;
    let threw = null;
    try {
      withRetry(() => {
        calls++;
        const e = new Error("simulated missing file");
        e.code = "ENOENT";
        throw e;
      });
    } catch (e) {
      threw = e;
    }
    const ok = threw !== null && threw.code === "ENOENT" && calls === 1;
    results.push({
      name: "withRetry: a non-transient error fails on the first attempt, never retried",
      ok,
      detail: ok ? "failed immediately, no retry spent on a real error" : `calls=${calls} threw=${threw ? threw.code : "none"}`,
    });
  }
  {
    const ok = TRANSIENT_CODES.has("EBUSY") && TRANSIENT_CODES.has("UNKNOWN") && !TRANSIENT_CODES.has("ENOENT");
    results.push({
      name: "withRetry: the transient set names EBUSY/UNKNOWN, excludes ENOENT",
      ok,
      detail: ok ? "set is exactly the observed transient class" : `set=${[...TRANSIENT_CODES].join(",")}`,
    });
  }
}

/** `B-097` — the `## Return record` shape, validated by `handoff-response`. */
export async function returnRecordForm(results) {
  const orig = read(ENTRY);
  const restore = () => write(ENTRY, orig);

  // Builds a returned variant of the live scratch entry: Status forced to
  // `Open`, `Resolution` removed unless `keepResolution`, `Verified-By` set
  // to the raised-not-dispositioned form, and a `## Return record` appended
  // with all four facts filled — except whichever `fields` overrides supply,
  // where `null` OMITS the line entirely (missing) and `""` leaves it BLANK
  // (present but empty) — the same distinction `fieldPresent()` exists for.
  const returned = ({ status = "Open", keepResolution = false, fields = {} } = {}) => {
    let s = orig
      .replace(/^- \*\*Status:\*\*.*$/m, `- **Status:** ${status}`)
      .replace(/^- \*\*Verified-By:\*\*.*$/m, "- **Verified-By:** — not yet dispositioned; raised by Lane B");
    if (!keepResolution) s = s.replace(/^- \*\*Resolution:\*\*.*$\n?/m, "");
    const f = {
      "Previous-Resolution": "Verified",
      "Return-Trigger": "test condition satisfied",
      "Return-Act": "test act, Chief Editor/Judge, 2026-09-16",
      "Returned-At-Commit": "67706ca",
      ...fields,
    };
    const block = Object.entries(f)
      .filter(([, v]) => v !== null)
      .map(([k, v]) => `- **${k}:** ${v}`)
      .join("\n");
    return `${s}\n\n## Return record\n\n${block}\n`;
  };

  await fixture(results, {
    name: "return record: complete shape, terminal header cleared — passes",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned()),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "return record: an illustrative fenced EXAMPLE is not a live return",
    modulePath: CHECK("handoff-response.mjs"),
    // Mirrors `B-097`'s own draft: a ```markdown fence showing the shape,
    // with no un-fenced return record anywhere. The header stays terminal,
    // which would fail on its own if this fixture's fence were read as live.
    mutate: () =>
      write(
        ENTRY,
        `${orig}\n\n### Draft fix\n\n\`\`\`markdown\n## Return record\n\n- **Previous-Resolution:** Deferred\n- **Return-Trigger:** <condition>\n- **Return-Act:** <act>\n- **Returned-At-Commit:** <commit>\n\`\`\`\n`,
      ),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "return record: missing Return-Trigger (field absent, not merely blank)",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ fields: { "Return-Trigger": null } })),
    restore,
    expect: "no **Return-Trigger:**",
  });
  await fixture(results, {
    name: "return record: blank Return-Act",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ fields: { "Return-Act": "" } })),
    restore,
    expect: "**Return-Act:** is present but BLANK",
  });
  await fixture(results, {
    name: "return record: blank Previous-Resolution",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ fields: { "Previous-Resolution": "" } })),
    restore,
    expect: "**Previous-Resolution:** is present but BLANK",
  });
  await fixture(results, {
    name: "return record: Returned-At-Commit is not hexadecimal",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ fields: { "Returned-At-Commit": "not-a-commit" } })),
    restore,
    expect: "is not a hexadecimal commit SHA",
  });
  await fixture(results, {
    name: "return record: retained terminal Resolution beside an active return",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ keepResolution: true })),
    restore,
    expect: "still carries **Resolution:**",
  });
  await fixture(results, {
    name: "return record: invented `Returned` status instead of `Open`",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, returned({ status: "Returned" })),
    restore,
    expect: "is not `Open`",
  });
}

/** `B-113` — the Terminal annotation record's FORM, validated by
 * `handoff-response`. Unlike a Return record, this does NOT touch
 * Status/Resolution — an annotation preserves the terminal header. */
export async function terminalAnnotationForm(results) {
  const orig = read(ENTRY);
  const restore = () => write(ENTRY, orig);

  const annotated = (fields = {}) => {
    const f = {
      "Current-Resolution": "Verified",
      "Annotation-Type": "correction",
      "Annotation-Act": "test act, Chief Editor/Judge, 2026-09-16",
      "No-Scope-Reopened": "true",
      "Annotated-At-Commit": "67706ca",
      ...fields,
    };
    const block = Object.entries(f)
      .filter(([, v]) => v !== null)
      .map(([k, v]) => `- **${k}:** ${v}`)
      .join("\n");
    return `${orig}\n\n## Terminal annotation record\n\n${block}\n`;
  };

  await fixture(results, {
    name: "terminal annotation: complete shape, terminal header untouched — passes",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated()),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "terminal annotation: an illustrative fenced EXAMPLE is not a live annotation",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(
        ENTRY,
        `${orig}\n\n\`\`\`markdown\n## Terminal annotation record\n\n- **Current-Resolution:** Deferred\n- **Annotation-Type:** <type>\n- **Annotation-Act:** <act>\n- **No-Scope-Reopened:** true\n- **Annotated-At-Commit:** <commit>\n\`\`\`\n`,
      ),
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "terminal annotation: missing Annotation-Act (field absent, not merely blank)",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated({ "Annotation-Act": null })),
    restore,
    expect: "no **Annotation-Act:**",
  });
  await fixture(results, {
    name: "terminal annotation: blank Current-Resolution",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated({ "Current-Resolution": "" })),
    restore,
    expect: "**Current-Resolution:** is present but BLANK",
  });
  await fixture(results, {
    name: "terminal annotation: Annotation-Type outside the four governed values",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated({ "Annotation-Type": "reopening" })),
    restore,
    expect: "is not one of metadata-normalization",
  });
  await fixture(results, {
    name: "terminal annotation: No-Scope-Reopened is false — belongs in a Return record instead",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated({ "No-Scope-Reopened": "false" })),
    restore,
    expect: "is not `true`",
  });
  await fixture(results, {
    name: "terminal annotation: Annotated-At-Commit is not hexadecimal",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () => write(ENTRY, annotated({ "Annotated-At-Commit": "not-a-commit" })),
    restore,
    expect: "is not a hexadecimal commit SHA",
  });
  await fixture(results, {
    name: "terminal annotation: two records on one file are each validated independently",
    modulePath: CHECK("handoff-response.mjs"),
    mutate: () =>
      write(
        ENTRY,
        `${annotated()}\n\n## Terminal annotation record\n\n- **Current-Resolution:** Verified\n- **Annotation-Type:** cross-reference\n- **Annotation-Act:**\n- **No-Scope-Reopened:** true\n- **Annotated-At-Commit:** 58072b5\n`,
      ),
    restore,
    expect: "**Annotation-Act:** is present but BLANK",
  });
}

/**
 * `B-097`/`B-113` — `terminal-return`'s history-aware half, three kinds of case:
 *
 *   1. PURE decisions (`currentEpisodeStart`, `walkEpisodes`) against
 *      synthetic step sequences — no git, no file mutation, same separation
 *      `governed-intent.mjs`'s `classifyChangedPaths()` fixtures use.
 *   2. PURE classifiers (`isAuditOnlyDiff`, `resolutionAfterDiff`,
 *      `coveredCommits`) against synthetic diff/text — same reason.
 *   3. Git plumbing (`fileHistory`/`diffAt`) against a MOCKED exec — proves
 *      the argument shape is safe, the same way `docsDriftArgumentSafety`
 *      proves it for `getChangedPaths()`.
 */
export async function terminalReturnDecision(results) {
  // --- currentEpisodeStart: which transition counts as "current" ----------
  const episodeStartCases = [
    {
      name: "currentEpisodeStart: never terminal — -1",
      steps: [{ resolutionAfter: "Open" }, { resolutionAfter: "Answered" }],
      expect: -1,
    },
    {
      name: "currentEpisodeStart: one transition into terminal — finds it",
      steps: [{ resolutionAfter: "Open" }, { resolutionAfter: "Deferred" }],
      expect: 1,
    },
    {
      name: "currentEpisodeStart: terminal from the very first step (prior is null, not Open)",
      steps: [{ resolutionAfter: "Withdrawn" }],
      expect: 0,
    },
    {
      // `B-001`'s real shape: Verified -> Applied -> Verified. The CURRENT
      // episode starts at the LAST such transition (index 2), not the first
      // (index 0) — re-litigating the first would punish the 2026-08-21 dip
      // that happened weeks before `B-097` existed and was never touched again.
      name: "currentEpisodeStart: Verified -> Applied -> Verified — finds the MOST RECENT entry, not the first",
      steps: [{ resolutionAfter: "Verified" }, { resolutionAfter: "Applied" }, { resolutionAfter: "Verified" }],
      expect: 2,
    },
  ];
  for (const c of episodeStartCases) {
    const got = currentEpisodeStart(c.steps);
    const ok = got === c.expect;
    results.push({ name: c.name, ok, detail: ok ? `start=${got}` : `expected ${c.expect}, got ${got}` });
  }

  // --- walkEpisodes: violations within the CURRENT episode only -----------
  const walkCases = [
    {
      name: "walkEpisodes: already terminal, touched again, not covered — FLAGS that commit",
      steps: [
        { commit: "c1", resolutionAfter: "Deferred", isAuditOnly: false },
        { commit: "c2", resolutionAfter: "Deferred", isAuditOnly: false },
      ],
      covered: new Set(),
      expect: ["c2"],
    },
    {
      name: "walkEpisodes: the commit that MADE it terminal is not itself flagged",
      steps: [{ commit: "c1", resolutionAfter: "Deferred", isAuditOnly: false }],
      covered: new Set(),
      expect: [],
    },
    {
      name: "walkEpisodes: audit-only step — does not flag",
      steps: [
        { commit: "c1", resolutionAfter: "Deferred", isAuditOnly: false },
        { commit: "c2", resolutionAfter: "Deferred", isAuditOnly: true },
      ],
      covered: new Set(),
      expect: [],
    },
    {
      name: "walkEpisodes: covered by a matching citation — does not flag",
      steps: [
        { commit: "c1", resolutionAfter: "Deferred", isAuditOnly: false },
        { commit: "c2", resolutionAfter: "Deferred", isAuditOnly: false },
      ],
      covered: new Set(["c2"]),
      expect: [],
    },
    {
      // `B-113`'s actual Row 4 finding: a citation for the FIRST episode
      // (c2) must not protect an uncovered step in a SECOND, later episode
      // (c5) that starts after a genuine return (c3, non-terminal).
      name: "walkEpisodes: multi-cycle — an old episode's citation does not cover a later, separate episode",
      steps: [
        { commit: "c1", resolutionAfter: "Deferred", isAuditOnly: false }, // episode 1 starts
        { commit: "c2", resolutionAfter: "Deferred", isAuditOnly: false }, // covered — episode 1's own annotation
        { commit: "c3", resolutionAfter: "Open", isAuditOnly: false }, // returns — episode 1 ends
        { commit: "c4", resolutionAfter: "Deferred", isAuditOnly: false }, // episode 2 starts
        { commit: "c5", resolutionAfter: "Deferred", isAuditOnly: false }, // NOT covered — episode 2's own violation
      ],
      covered: new Set(["c2"]), // only episode 1's citation exists
      expect: ["c5"],
    },
  ];
  for (const c of walkCases) {
    const got = walkEpisodes(c.steps, c.covered);
    const ok = JSON.stringify(got) === JSON.stringify(c.expect);
    results.push({ name: c.name, ok, detail: ok ? `violations=${JSON.stringify(got)}` : `expected ${JSON.stringify(c.expect)}, got ${JSON.stringify(got)}` });
  }

  // --- isAuditOnlyDiff -----------------------------------------------------
  // `B-112`: nine live entries were flagged by a single `D-205` bulk commit
  // that touched ONLY `Verified-By`/`Verified-At-Commit`. `isAuditOnlyDiff`
  // is the pure classifier that must say so — synthetic diffs, no git.
  const auditCases = [
    {
      name: "isAuditOnlyDiff: a bare Verified-By line, nothing else — audit-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -9,0 +10 @@\n+- **Verified-By:** — not independently verified; dispositioned by Lane A\n",
      expect: true,
    },
    {
      name: "isAuditOnlyDiff: Verified-By AND Verified-At-Commit both changed — still audit-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -9,2 +9,2 @@\n-- **Verified-By:**\n-- **Verified-At-Commit:**\n+- **Verified-By:** — not independently verified; dispositioned by Lane A\n+- **Verified-At-Commit:** 9f6047a\n",
      expect: true,
    },
    {
      name: "isAuditOnlyDiff: a real prose line beside an audit line — NOT audit-only (B-017 shape)",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -80,0 +81,4 @@\n+## Post-verification fixture gap\n+\n+This does not reopen the parser repair.\n+- **Verified-By:** — not independently verified; dispositioned by Lane A\n",
      expect: false,
    },
    {
      name: "isAuditOnlyDiff: an empty diff is NOT trusted as audit-only (nothing to classify)",
      diff: "",
      expect: false,
    },
  ];
  for (const c of auditCases) {
    const got = isAuditOnlyDiff(c.diff);
    const ok = got === c.expect;
    results.push({ name: c.name, ok, detail: ok ? `isAuditOnlyDiff=${got}` : `expected ${c.expect}, got ${got}` });
  }

  // --- isRecordOnlyDiff ------------------------------------------------------
  // The infinite-regress bug, caught the first time this mechanism was used
  // for real: the commit that ADDS a Terminal annotation record is itself a
  // touch to an already-terminal file, so satisfying one violation created a
  // second — the annotating commit itself. `isRecordOnlyDiff` is what makes
  // a record-only addition self-exempting, the same way audit-only already is.
  const recordOnlyCases = [
    {
      name: "isRecordOnlyDiff: adding a complete Terminal annotation record, nothing else — record-only (the real B-004 shape)",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -54,3 +55,11 @@\n context\n \n ---\n+\n+## Terminal annotation record\n+\n+- **Current-Resolution:** Superseded\n+- **Annotation-Type:** metadata-normalization\n+- **Annotation-Act:** test act\n+- **No-Scope-Reopened:** true\n+- **Annotated-At-Commit:** d6d406ae1d4045a6c3db9d85856120e6c65a5fa6\n",
      expect: true,
    },
    {
      name: "isRecordOnlyDiff: adding a Return record, nothing else — also record-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,0 +2,5 @@\n+## Return record\n+\n+- **Previous-Resolution:** Deferred\n+- **Return-Trigger:** test\n+- **Returned-At-Commit:** abc1234\n",
      expect: true,
    },
    {
      name: "isRecordOnlyDiff: a field value wraps onto continuation lines (the real B-017 shape) — still record-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,0 +2,4 @@\n+## Terminal annotation record\n+\n+- **Annotation-Act:** a long citation that wraps\n+  onto a continuation line without its own field marker\n",
      expect: true,
    },
    {
      name: "isRecordOnlyDiff: content BEFORE any record heading — NOT record-only",
      diff: "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,0 +2,2 @@\n+Some unrelated line first.\n+## Terminal annotation record\n",
      expect: false,
    },
    {
      name: "isRecordOnlyDiff: a DIFFERENT heading after the record — scope creep, NOT record-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,0 +2,3 @@\n+## Terminal annotation record\n+\n+## Unrelated new section\n",
      expect: false,
    },
    {
      name: "isRecordOnlyDiff: an unrecognized bullet-field name inside the block — NOT record-only",
      diff:
        "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,0 +2,2 @@\n+## Terminal annotation record\n+- **New-Work-Item:** this is not one of the nine known fields\n",
      expect: false,
    },
    {
      name: "isRecordOnlyDiff: removes a line — a record-only commit adds, it does not remove",
      diff: "diff --git a/x b/x\nindex 1..2 100644\n--- a/x\n+++ b/x\n@@ -1,3 +1,0 @@\n-## Terminal annotation record\n-\n-- **Current-Resolution:** Superseded\n",
      expect: false,
    },
    {
      name: "isRecordOnlyDiff: an empty diff is NOT trusted as record-only (nothing to classify)",
      diff: "",
      expect: false,
    },
  ];
  for (const c of recordOnlyCases) {
    const got = isRecordOnlyDiff(c.diff);
    const ok = got === c.expect;
    results.push({ name: c.name, ok, detail: ok ? `isRecordOnlyDiff=${got}` : `expected ${c.expect}, got ${got}` });
  }

  // --- resolutionAfterDiff --------------------------------------------------
  const resolutionCases = [
    {
      name: "resolutionAfterDiff: an added Resolution line changes the value",
      diff: "@@ -9,0 +10 @@\n+- **Resolution:** Superseded\n",
      prior: "Deferred",
      expect: "Superseded",
    },
    {
      name: "resolutionAfterDiff: a diff that never touches Resolution carries the prior value forward",
      diff: "@@ -9,0 +10 @@\n+- **Phase:** 1\n",
      prior: "Deferred",
      expect: "Deferred",
    },
    {
      name: "resolutionAfterDiff: a removed-line-only diff (blanked, no replacement) is a stated gap — prior carries forward, not corrected to blank",
      diff: "@@ -9 +9,0 @@\n-- **Resolution:** Deferred\n",
      prior: "Deferred",
      expect: "Deferred", // documents the known limitation, not a claim it is right
    },
  ];
  for (const c of resolutionCases) {
    const got = resolutionAfterDiff(c.diff, c.prior);
    const ok = got === c.expect;
    results.push({ name: c.name, ok, detail: ok ? `resolution=${got}` : `expected ${c.expect}, got ${got}` });
  }

  // --- coveredCommits --------------------------------------------------------
  const coveredCases = [
    {
      name: "coveredCommits: a Return record's Returned-At-Commit is covered",
      text: "## Return record\n\n- **Returned-At-Commit:** abc1234\n",
      expect: ["abc1234"],
    },
    {
      name: "coveredCommits: a Terminal annotation record's Annotated-At-Commit is covered",
      text: "## Terminal annotation record\n\n- **Annotated-At-Commit:** def5678\n",
      expect: ["def5678"],
    },
    {
      name: "coveredCommits: several Terminal annotation records each contribute their own citation",
      text:
        "## Terminal annotation record\n\n- **Annotated-At-Commit:** aaa1111\n\n## Terminal annotation record\n\n- **Annotated-At-Commit:** bbb2222\n",
      expect: ["aaa1111", "bbb2222"],
    },
    {
      name: "coveredCommits: a fenced illustrative example contributes nothing",
      text: "```markdown\n## Terminal annotation record\n\n- **Annotated-At-Commit:** <commit>\n```\n",
      expect: [],
    },
    {
      name: "coveredCommits: a placeholder value is not a citation",
      text: "## Terminal annotation record\n\n- **Annotated-At-Commit:** <existing commit>\n",
      expect: [],
    },
  ];
  for (const c of coveredCases) {
    const got = [...coveredCommits(c.text)].sort();
    const ok = JSON.stringify(got) === JSON.stringify([...c.expect].sort());
    results.push({ name: c.name, ok, detail: ok ? `covered=${JSON.stringify(got)}` : `expected ${JSON.stringify(c.expect)}, got ${JSON.stringify(got)}` });
  }

  // --- git plumbing argument safety ------------------------------------------
  {
    const calls = [];
    const mockExec = (cmd, args) => {
      calls.push({ cmd, args });
      return "";
    };
    diffAt("docs\\handoff\\B-999.md", "aaa", "bbb", mockExec);
    const ok =
      calls.length === 1 &&
      calls[0].args[0] === "diff" &&
      calls[0].args[1] === "aaa" &&
      calls[0].args[2] === "bbb" &&
      calls[0].args[calls[0].args.length - 1] === "docs/handoff/B-999.md";
    results.push({
      name: "terminal-return: diffAt passes shas and a forward-slash path as separate inert arguments",
      ok,
      detail: ok ? "argument array confirmed" : `calls=${JSON.stringify(calls)}`,
    });
  }
  {
    const calls = [];
    const mockExec = (cmd, args, opts) => {
      calls.push({ cmd, args, opts });
      return "abc1234\ndef5678\n";
    };
    const out = fileHistory("docs\\handoff\\B-999 (evil) & whoami.md", { reverse: true, exec: mockExec });
    const ok =
      calls.length === 1 &&
      calls[0].cmd === "git" &&
      Array.isArray(calls[0].args) &&
      calls[0].args.includes("--reverse") &&
      calls[0].args[calls[0].args.length - 1] === "docs/handoff/B-999 (evil) & whoami.md" &&
      JSON.stringify(out) === JSON.stringify(["abc1234", "def5678"]);
    results.push({
      name: "terminal-return: fileHistory normalizes backslashes, requests --reverse, and passes the path as ONE inert argument",
      ok,
      detail: ok ? "argument array confirmed, path normalized" : `calls=${JSON.stringify(calls)}`,
    });
  }

  // Not a positive control in the usual sense: the live corpus is NOT
  // expected to be clean right now — `B-097`'s whole reason to exist is that
  // it presently is not, and that count will keep changing as entries get
  // returned. Asserting `findings.length === 0` here would be exactly the
  // stale-literal mistake `G91`/`G93` already named; asserting a specific
  // count would be worse. What stays true regardless is the SHAPE of the
  // result and that it actually runs against real history rather than
  // silently skipping.
  {
    const out = await runCheck(CHECK("terminal-return.mjs"));
    const ok =
      out.name === "terminal-return" &&
      Array.isArray(out.findings) &&
      typeof out.detail === "string" &&
      !out.skipped &&
      /file\(s\) with at least one terminal episode|no file has ever entered/.test(out.detail);
    results.push({
      name: "terminal-return: the live repository, unmutated — runs against real history, does not skip",
      ok,
      detail: ok ? out.detail : `unexpected shape: ${JSON.stringify(out)}`,
    });
  }
}

/**
 * `D-246` — the coverage-only manifest and exact source-path evidence
 * (`B119-GRAPH-SCOPE` Choice A, amending `D-231`). Every function under test
 * is PURE, so these cases need no git commits, graph file, mutation or restore.
 *
 * They pin the six properties `docs/handoff/B-119` named, plus the reverse
 * reference, so a future edit that loosens any of them fails here by name.
 */
export async function graphCoverageManifest(results) {
  const {
    COVERAGE_ONLY_MANIFEST,
    HISTORICAL_JOURNAL_PATHS,
    isCoverageExcludedPath,
    isExcludedPath,
    manifestViolations,
    evaluateCoverage,
    normalizeSourcePath,
  } = await import("../checks/governed-intent.mjs");

  const storyboard = "docs/journal/2026-08-18-storyboard-business-and-digital-twin.md";
  const traceability = "docs/governance/requirements-traceability-map.md";
  const journal = HISTORICAL_JOURNAL_PATHS[0];
  const add = (name, ok, detail) => results.push({ name, ok, detail });

  // 1. every manifest path is excluded from graph coverage
  const notExcluded = COVERAGE_ONLY_MANIFEST.filter((p) => !isCoverageExcludedPath(p));
  add(
    "graph-coverage: every manifest path is excluded from coverage",
    COVERAGE_ONLY_MANIFEST.length > 0 && notExcluded.length === 0,
    `not excluded: ${JSON.stringify(notExcluded)}`,
  );

  // 2. the same paths stay visible to docs-drift — the base matcher does not exclude them
  const driftHidden = COVERAGE_ONLY_MANIFEST.filter(
    (p) => isExcludedPath(p) || classifyChangedPaths([p]).excludedOnly,
  );
  add(
    "graph-coverage: every manifest path remains visible to docs-drift",
    driftHidden.length === 0,
    `hidden from drift: ${JSON.stringify(driftHidden)}`,
  );

  // 3. no broad glob: exact entries only, canonical sources stay coverage-required
  const globby = COVERAGE_ONLY_MANIFEST.filter((p) => /[*?[\]{}]/.test(p));
  add(
    "graph-coverage: the manifest holds exact paths, never a glob",
    globby.length === 0,
    `glob characters in: ${JSON.stringify(globby)}`,
  );
  add(
    "graph-coverage: the canonical storyboard and the traceability map stay coverage-required",
    !isCoverageExcludedPath(storyboard) && !isCoverageExcludedPath(traceability),
    `storyboard excluded=${isCoverageExcludedPath(storyboard)}, traceability excluded=${isCoverageExcludedPath(traceability)}`,
  );
  add(
    "graph-coverage: a lookalike of a manifest journal is not excluded (no prefix or suffix matching)",
    !isCoverageExcludedPath(`${journal}.bak`) &&
      !isCoverageExcludedPath(journal.replace("2026-08-18", "2026-08-99")),
    "a path that only resembles a manifest entry must stay coverage-required",
  );

  // 4. a mixed governed/handoff advance still marks the graph stale, including a manifest path
  const mixed = classifyChangedPaths(["docs/handoff/B-999-example.md", journal]);
  add(
    "graph-coverage: a mixed handoff + manifest-journal advance still marks the graph stale",
    mixed.excludedOnly === false && mixed.governed.length === 1,
    `excludedOnly=${mixed.excludedOnly}, governed=${JSON.stringify(mixed.governed)}`,
  );

  // 5. reverse reference: a later live citation removes the exclusion by failing, and names it
  const cited = manifestViolations(
    new Map([["docs/Modular_PRD.md", `see ${journal.slice(journal.lastIndexOf("/") + 1)} for history`]]),
  );
  add(
    "graph-coverage: a live source citing a manifest journal fails closed and names both paths",
    cited.length === 1 && cited[0].path === journal && cited[0].citedBy === "docs/Modular_PRD.md",
    JSON.stringify(cited),
  );
  const notLive = manifestViolations(
    new Map([
      ["docs/journal/2026-08-20-other.md", journal.slice(journal.lastIndexOf("/") + 1)],
      ["docs/handoff/B-999-example.md", journal.slice(journal.lastIndexOf("/") + 1)],
    ]),
  );
  add(
    "graph-coverage: a citation from another journal or the handoff worklog is not a violation",
    notLive.length === 0,
    JSON.stringify(notLive),
  );

  // 6. every non-excluded missing path is reported; the test is EXACT source_file, not a basename
  const docPaths = ["docs/Modular_PRD.md", "docs/README.md", "docs/handoff/B-999-example.md", journal];
  const strong = evaluateCoverage({
    docPaths,
    nodes: [
      { source_file: "docs\\Modular_PRD.md" }, // backslash form still normalizes to a match
      // a node that merely MENTIONS README.md elsewhere must not cover docs/README.md
      { source_file: "docs/v1/README.md", label: "README.md" },
    ],
  });
  add(
    "graph-coverage: a document is covered only by a node whose source_file equals its path",
    JSON.stringify(strong.missing) === JSON.stringify(["docs/README.md"]),
    `missing=${JSON.stringify(strong.missing)}`,
  );
  add(
    "graph-coverage: excluded classes never appear as missing",
    !strong.missing.includes("docs/handoff/B-999-example.md") && !strong.missing.includes(journal),
    `missing=${JSON.stringify(strong.missing)}`,
  );
  add(
    "graph-coverage: source paths normalize to forward slashes",
    normalizeSourcePath(".\\docs\\a\\b.md") === "docs/a/b.md",
    normalizeSourcePath(".\\docs\\a\\b.md"),
  );
}

export const SUITES = [
  ["handoff metadata and closure fields (`D-102`)", handoffFields],
  ["return record form (`B-097`)", returnRecordForm],
  ["terminal annotation record form (`B-113`)", terminalAnnotationForm],
  ["terminal-return history-aware detection (`B-097`)", terminalReturnDecision],
  ["tier sweep fallback (`G98`, raised as `B-054`)", tierSweep],
  ["retention policy coupling (`D-134`)", retentionPolicyCoupling],
  ["phase-scoped closure gating (`D-102`)", phaseScope],
  ["sync-docs uniqueness (`D-102`)", syncDocs],
  ["lane state (`D-103`)", laneState],
  ["channel documentation (`D-104`)", channelDocs],
  ["lane crossing declaration (`D-105`)", laneGate],
  ["lane-boundary tool-crossing retirement (`D-227`)", laneBoundaryToolCrossing],
  ["governed-intent exclusion matcher (`D-231`)", governedIntentExclusion],
  ["graph-coverage manifest and exact source-path evidence (`D-246`)", graphCoverageManifest],
  ["docs-drift argument safety (`B-109`)", docsDriftArgumentSafety],
  ["config coupling (`C-17`, raised as `B-024`)", configCoupling],
  ["reopens-phase (`C-19`, raised as `B-025`)", reopensPhase],
  ["fixture retry resilience (`D-139`, raised against this session's own run)", retryResilience],
];
