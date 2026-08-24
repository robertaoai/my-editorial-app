// The fixture suites, one per check that claims to have been negative-tested.
//
// Each suite opens with a POSITIVE CONTROL — the live repository, unmutated,
// expected to stay green. A suite with no green case proves only that a check
// can fail, never that it can pass, and a check that fails on everything is as
// useless as one that fails on nothing.

import { execFileSync } from "node:child_process";
import { fixture, read, write, existsSync, rmSync, mkdirSync } from "./harness.mjs";

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

/** `D-102`, raised as `B-013` and `B-017` — entry metadata and closure fields. */
export async function handoffFields(results) {
  const orig = read(ENTRY);
  const restore = () => write(ENTRY, orig);
  const verified = (by, at) =>
    orig
      .replace(/^- \*\*Resolution:\*\*.*$/m, "- **Resolution:** Verified")
      .replace(/^- \*\*Verified-By:\*\*.*$/m, `- **Verified-By:** ${by}`)
      .replace(/^- \*\*Verified-At-Commit:\*\*.*$/m, `- **Verified-At-Commit:** ${at}`);

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
export async function laneState(results) {
  const orig = read(CLOSURE);
  const restore = () => write(CLOSURE, orig);
  const activeLane = () => (/\| \*\*A\*\* \| \*\*1 — Orchestration\*\* \| \*\*`Active`/.test(orig) ? "A" : "B");

  await fixture(results, {
    name: "lane-state: the live register, unmutated",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => {},
    restore,
    shouldPass: true,
  });
  await fixture(results, {
    name: "lane-state: NO lane is Active — a half-applied handover",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => write(CLOSURE, orig.replace(/\*\*`Active`\.\*\*/, "**`Eligible`.**")),
    restore,
    expect: "NO lane is `Active`",
  });
  await fixture(results, {
    name: "lane-state: TWO lanes are Active — the other half",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () => {
      const other = activeLane() === "A" ? "**`Eligible`.** **Its `D-103` turn" : "**`Eligible`.** Handed over";
      write(CLOSURE, orig.replace(other, other.replace("**`Eligible`.**", "**`Active`.**")));
    },
    restore,
    expect: "lanes are `Active`",
  });
  await fixture(results, {
    name: "lane-state: a state outside the four",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () =>
      write(CLOSURE, orig.replace(/\| \*\*C\*\* \| \*\*3 — CI\/CD\*\* \|[^|]*\|/, "| **C** | **3 — CI/CD** | **`Paused`** |")),
    restore,
    expect: "no recognised state",
  });
  await fixture(results, {
    name: "lane-state: Blocked naming nothing it is blocked on",
    modulePath: CHECK("lane-state.mjs"),
    mutate: () =>
      write(CLOSURE, orig.replace(/\| \*\*C\*\* \| \*\*3 — CI\/CD\*\* \|[^|]*\|/, "| **C** | **3 — CI/CD** | **`Blocked`** |")),
    restore,
    expect: "names nothing it is blocked on",
  });
}

/** `D-104` — the channel documentation coupled to the checks. */
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

export const SUITES = [
  ["handoff metadata and closure fields (`D-102`)", handoffFields],
  ["phase-scoped closure gating (`D-102`)", phaseScope],
  ["sync-docs uniqueness (`D-102`)", syncDocs],
  ["lane state (`D-103`)", laneState],
  ["channel documentation (`D-104`)", channelDocs],
  ["lane crossing declaration (`D-105`)", laneGate],
];
