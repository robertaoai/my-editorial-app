// The fixture suites, one per check that claims to have been negative-tested.
//
// Each suite opens with a POSITIVE CONTROL — the live repository, unmutated,
// expected to stay green. A suite with no green case proves only that a check
// can fail, never that it can pass, and a check that fails on everything is as
// useless as one that fails on nothing.

import { execFileSync } from "node:child_process";
import { fixture, read, write, withRetry, TRANSIENT_CODES, existsSync, rmSync, mkdirSync } from "./harness.mjs";
import { readdirSync, readFileSync } from "node:fs";
import { field, ENTRY_FILE } from "../checks/handoff-fields.mjs";

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
    expectDetail: "1 open",
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
export async function phaseScope(results) {
  const orig = read(CLOSURE);
  const p1 = "docs/handoff/B-017-handoff-closure-parser-false-green.md"; // Phase 1, Open
  const p1Orig = read(p1);
  const restore = () => { write(CLOSURE, orig); write(p1, p1Orig); };

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

  await fixture(results, {
    name: "phase scope: an OPEN Phase 1 entry fails Phase 1 closure",
    modulePath: CHECK("closure-readiness.mjs"),
    mutate: () => write(CLOSURE, closePhase1(orig)),
    restore,
    expect: "phase 1 claims closure",
  });

  // The other half: a Phase 3 entry must NOT fail Phase 1's boundary. Asserted
  // by name, because "no findings" would also be satisfied by a disabled gate.
  {
    write(CLOSURE, closePhase1(orig));
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

  // Making the entry terminal must silence the gate FOR THAT ENTRY. Other
  // Phase 1 entries are still open and still fail, so "no findings at all" is
  // the wrong assertion — and asserting it that way is how this fixture was
  // first written, which is why it missed (`D-106`). The claim is narrow:
  // B-017 specifically stops being named.
  {
    write(CLOSURE, closePhase1(orig));
    write(p1, p1Orig.replace(/^- \*\*Resolution:\*\*.*$/m, "- **Resolution:** Withdrawn"));
    try {
      const mod = await import(`${CHECK("closure-readiness.mjs")}?t=${Date.now()}`);
      const out = mod.run();
      const stillNamed = out.findings.some((f) => f.includes("B-017"));
      const gateStillLive = out.findings.some((f) => f.includes("claims closure"));
      results.push({
        name: "phase scope: a terminal Phase 1 entry stops blocking",
        ok: !stillNamed && gateStillLive,
        detail: stillNamed
          ? "B-017 is terminal and the gate still names it"
          : gateStillLive
            ? "B-017 silenced while the gate stays live for the others"
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

export const SUITES = [
  ["handoff metadata and closure fields (`D-102`)", handoffFields],
  ["tier sweep fallback (`G98`, raised as `B-054`)", tierSweep],
  ["retention policy coupling (`D-134`)", retentionPolicyCoupling],
  ["phase-scoped closure gating (`D-102`)", phaseScope],
  ["sync-docs uniqueness (`D-102`)", syncDocs],
  ["lane state (`D-103`)", laneState],
  ["channel documentation (`D-104`)", channelDocs],
  ["lane crossing declaration (`D-105`)", laneGate],
  ["config coupling (`C-17`, raised as `B-024`)", configCoupling],
  ["reopens-phase (`C-19`, raised as `B-025`)", reopensPhase],
  ["fixture retry resilience (`D-139`, raised against this session's own run)", retryResilience],
];
