# B-159 — SR-3 documentation correction intake: five new defects and F2

- **Raised:** 2026-10-21 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** D-453(c) consolidated draft review and subsequent corrections; no construction or attempt release
- **Status:** Open
- **Lane A:** Acknowledged 2026-10-21. Receiver receipt only; consolidated replacements remain pending D-453(c) review.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Source text examined at `c188a78dd8f280f492a3326c611ae44c435fe42a`; baseline snapshots, Git blob IDs, SHA-256 hashes and draft revalidation retained in `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/` (`baseline-sources.json`, `draft-revalidation.json`, `preconditions.json`). This is an examined baseline, not a verification result.
- **Verified-At-Commit:** 7ef7df212b804638c79b6fd0c510a0ab07f6dfed

## What happened

Lane B raises the six distinct findings below under [D-453, §5.14e276](../v1/V1-DECISION-REGISTER.md#514e276-d-453--sr-3-bounded-documentation-corrections-seven-file-scope-routing-review-gates-and-cumulative-push-coverage-twelfth-intervening-entry-permitted), step (b), after approving its separate recording. Lane A is the receiver and correction owner. Only Lane A may write the answer field; independent verification is unset. Resolution and the misnamed verification audit fields are omitted under the Judge's explicit filing instruction. No receiver acknowledgement or independent result is supplied by the raiser.

The retained five-defect draft is proposal history. Its old fragments were rechecked against the examined baseline; its former five-file scope and unreleased-planning language are superseded for this filing by D-453's seven-file scope and sequence. Its proposed metadata revision/date are not pre-approved application facts. No historical check, installation, CI result or local schema replay is presented as a fresh test.

### Authority and retained provenance

| Record | Original locator | Retained exact text and SHA-256 |
|---|---|---|
| Judge's bounded SR-3 release | Lane A transcript `417d4ead-c5b7-481e-b141-3a8989ce9446.jsonl`, line 6936, message `96e7c8f8-e789-4c6f-8970-aa7705a09176`; D-453 authority paragraph | `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/JUDGE-SR3-RELEASE.md`; `4981ff37624c0f553380cf0c378d72d1235cb115070c58eaff763a0fbf38b6d9` |
| Original SR-3 draft | `C:/Users/rober_24syk4j/.codex/sessions/2026/10/21/rollout-2026-10-21T18-57-57-01a15e1c-553b-7120-b366-39e047b4d59c.jsonl`, line 203, message `msg_07ec61c203e9dc4f016ad89de2cc448191ac85f660e516b3bd`, `output_text`, 10,288 UTF-8 bytes | `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/LANE-B-SR3-SRC-2026-10-21T18-57-57-line203.txt`; `60f022b548fb7f5331ae2f7f3bc586f0a73e1bc2dda31f0c0fa821b4701d0a75` |
| Draft as relayed to Lane A | Lane A transcript line 6895; D-453 item 1 | `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/LANE-B-SR3-DRAFT-as-pasted.md`; `8a7b0d5b0e1b1f4b4bba67ff6bf695f26f691e779950af1a8f8021efa237fb8a` |
| Lane B approval of D-453 recording | `C:/Users/rober_24syk4j/.codex/sessions/2026/10/21/rollout-2026-10-21T03-31-43-01a1450c-56ae-73a2-95c0-6c0d44d45f08_01a15acc-56e0-7801-a238-395e69a0b901.jsonl`, line 1939, message `msg_0359a885ce55f8dd016ad8a64d7454819192c5f2b1d3aa0d14`, 2,597 UTF-8 bytes | `C:/CoWork/outputs/lane-b-sr3-provenance-audit-2026-10-21/LANE-B-D453-RECORDING-APPROVAL.txt`; `e87d81221ca068939714555b185e2149f1f623634b564b0423bf649359125d57` |
| Judge's instruction for this filing | `C:/Users/rober_24syk4j/.codex/sessions/2026/10/21/rollout-2026-10-21T19-49-20-01a15e4b-5ee5-7d50-b390-ec9b74f8b8af.jsonl`, line 16, message `msg_01a15e4b-730f-7c61-90af-854905660c6e`, 3,801 UTF-8 bytes | `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/CURRENT-JUDGE-FILING-INSTRUCTION.txt`; `c90443fb8eba31a0d8c5428a23d9bd5e0ed8329cbc0a0edd37ed3e4fb3a28f70` |

The recording commit is `c188a78dd8f280f492a3326c611ae44c435fe42a`, sole parent `1adb938ae345a0df09577c5f6072ee3e43f32533`. Current checkout, origin, branch, initial clean tree and empty index were confirmed before drafting. Phase Closure §5 records A Active, B Eligible, C Blocked; no lane state changes. B-159 was absent from current paths, all-ref history and reflog history before allocation; the bound path is `docs/handoff/B-159-sr3-documentation-correction-intake.md`. Audit commands and results are retained in `C:/CoWork/outputs/lane-b-sr3-provenance-audit-2026-10-21/B-159-NUMBER-AUDIT.txt`.

## What you need

### SR3-01 — Project PRD is incorrectly grouped into the plan pack

**Source and observed text:** `docs/source/README.md`, **Related**, baseline lines 81–82:

```markdown
- `../` (PRD, ARCHITECTURE, DATA_MODEL, …) — the repo's own plan pack. **Not a governing
  document**; see `../README.md`.
```

**Evidence and proposed correction:** Separate the frozen Project PRD from the scaffold plan pack. The classification must agree with D-29/D-58, `docs/README.md`'s authority guide and `docs/Modular_PRD.md`'s corrected prologue (line 12, D-438). The retained draft proposes a direct `../PRD.md` link describing the frozen customer baseline, followed by the existing nonauthoritative plan-pack warning.

**Owner:** Lane A, Phase 1. **Draft-review trigger:** D-453(c), present the exact old → new classification and links to Lane B before correction. **Success criterion and completion proof:** The PRD is explicitly governing and separate from the nonauthoritative plan pack; both links resolve; the frozen PRD remains byte-identical. Supply the approved diff and the common correction proof below at D-453(d)–(e).

### SR3-02 — Audit specification still presents Q11 naming as pending

**Source and observed text:** `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md`, **§7 Dependencies**, baseline line 138:

```markdown
| `Q11` field naming | Names the independence field this record carries | **Open**, S1 window |
```

In **§10 Scope limits**, line 170, the final sentence reads:

```text
Field names remain proposals pending `Q11`.
```

**Evidence and proposed correction:** D-97 decides the structural shape and D-111 names `workflow_transitions.line_separation_status`; D-112 propagates it. The column exists in `supabase/migrations/0002_s1_editorial_schema.sql`. Replace the two pending-name claims with the decided structural Line-separation field and cited decisions. Preserve the surrounding AC-12 qualification and scope limits. The migration candidate is schema evidence; hosted behavior and cognitive independence are **UNVERIFIED** by this filing.

**Existing route:** Link [B-136 IR-3](B-136-multi-lane-governance-canonical-owners-and-state2-gate.md), “IR-3 Q11 status — SPECS-TRANSITION-ENFORCEMENT” (baseline line 12443). That route names §10 line 239, already corrected by D-438; `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` **§8 Dependencies**, line 220, still says `**Open** — irreversible after S1`. This is residual evidence for IR-3, not a duplicate new finding. **Both Q11 source corrections must land in the same correction commit**: the Audit file and the Transition Enforcement file.

**Owner:** Lane A, Phase 1, including the linked IR-3 residual. **Draft-review trigger:** D-453(c), show both source files together, the exact IR-3 routing and the unchanged AC-12 boundary. **Success criterion and completion proof:** Neither Audit location nor the linked Transition Enforcement dependency calls Q11 naming open; both point to the decided column without claiming hosted verification or changing transition scope. Supply the same-commit diff, its identity, and common correction proof at D-453(d)–(e). B-136 remains Open.

### SR3-03 — Two Fn source headers point acceptance criteria to the wrong section

**Sources and observed text:** Each file's **Source header**, baseline line 6:

```markdown
**Source:** `Modular_PRD` §5 (`FR-07`, `FR-08`), §6 (`AC-11`–`AC-13`), `US-07`, `US-08`.
```

The line above is in `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md`. In `docs/fn-specs/FN-PUBLICATION-09-10-13.md`:

```markdown
**Source:** `Modular_PRD` §5 (`FR-09`, `FR-10`, `FR-13`), §6 (`AC-14`–`AC-16`, `AC-19`), `US-09`, `US-10`, `US-13`; Addendum T7, T10, T11.
```

**Evidence and proposed correction:** `docs/Modular_PRD.md` **§9.1 Functional** begins at baseline line 1087; the cited criteria are at lines 1109–1115 and 1120. Change only the AC section pointer in each Source line from §6 to §9.1. Preserve every FR, AC and US identifier and the Addendum references.

**Owner:** Lane A, Phase 1. **Draft-review trigger:** D-453(c), present both complete Source lines and the parent criterion locations. **Success criterion and completion proof:** Every cited AC resolves to its unchanged §9.1 parent row; the approved diff changes only the erroneous pointers. Supply that diff and common correction proof at D-453(d)–(e).

### SR3-04 — Modular PRD document-control metadata lags its source corrections

**Source and observed text:** `docs/Modular_PRD.md`, **§0 Document Control**, baseline lines 34–35: Version `1.44` and `Last Updated` `2026-09-27 (D-271)`. **§0.1 Change Log**, line 91, ends with revision `1.44`. The prologue, line 12, and Q8 disposition, line 1181, already contain corrections dated `2026-10-15 (D-438)`.

**Evidence and proposed correction:** Reconcile the header's document revision and last-updated date with one accurate appended changelog row. The retained draft proposes `1.45` and an application date of `2026-10-21`; Lane A must verify the next free revision against current source/history and use the actual application date. A future revision allocation or application date remains **UNVERIFIED** until that review. Preserve existing changelog rows and D-438 correction notes. No FR, AC, NFR, readiness or lane status changes follow from metadata.

**Owner:** Lane A, Phase 1. **Draft-review trigger:** D-453(c), present the exact header rows, proposed changelog row, revision-availability evidence and actual intended application date. **Success criterion and completion proof:** Header and appended row agree, revision is unique and follows the existing lineage, date is not backdated, and the row describes supported changes. This finding approves no unresolved F3 content addition to this file. Supply the exact metadata diff and common correction proof at D-453(d)–(e).

### SR3-05 — Publication specification retains an obsolete live sprint label

**Source and observed text:** `docs/specs/SPECS-PUBLICATION.md`, **header**, baseline line 8:

```markdown
**Sprint:** S4.
```

**Evidence and proposed correction:** Identify `SETUP-SPIKE-000/S4` as the original allocation, terminally deferred and closed without DoD credit under D-258. State the current automated WordPress/retry disposition as V2-target backlog under D-243/D-244; no V2 build is opened. Preserve this specification's future automated-path decisions D-143/D-146 and its `[V1]` section-origin markers. Current V1's bounded LinkedIn target-level `ManualReady` outcome belongs to V1-SM06 and `FN-PUBLICATION-09-10-13.md` §12; it does not receive automated publication by this correction.

**Owner:** Lane A, Phase 1. **Draft-review trigger:** D-453(c), present the complete replacement header alongside the S4 terminal packet and publication Fn §10/§12 disposition. **Success criterion and completion proof:** Original allocation remains discoverable, current delivery allocation is unambiguous, origin markers remain intact, and no implementation authority is implied. Supply the approved header diff and common correction proof at D-453(d)–(e).

### SR3-06 — F2: verification tooling still described as absent after recorded delivery

**Source and observed text:** `docs/specs/SPECS-VERIFICATION-APPARATUS.md`:

| Section / baseline line | Current stale claim |
|---|---|
| Header, line 5 | “The runner, `__tests__/`, and CI remain uninstalled.” |
| Header, line 7 | “Installation remains gated on the standing build guardrail.” |
| §1 Executive summary, line 33 | “no test runner, no `__tests__/`, and no CI”; DoDs described as currently unfalsifiable |
| §1 Limitations, line 45 | “`bun test` is still unverified”; “no test exists yet”; R3 “written, locally unverified” |
| §7 Dependencies, line 138 | Installation guardrail “In force for the runner, `__tests__/`, and CI”; lifted only for G59 |
| §9 Scope limits, line 155 | Only the lockfile exception is recognized; “`G59` is recorded, not resolved”; installation remains gated for R3 |

**Evidence and proposed correction:** D-70, **§5.14af What now exists**, baseline Register lines 3341–3351, records installation of Stages A–C and historical runner/test/CI proof. This specification's **§6 Definition of done**, line 132, already says all six were satisfied on `2026-08-21 (D-70)`. At the examined baseline `package.json` declares `test: bun test`, `__tests__/smoke.test.ts` exists, and `.github/workflows/ci.yml` exists. These are source and historical delivery observations, not fresh execution results.

Reconcile the current absence/installation-gate claims with that dated delivery record, preserving historical proposals as clearly dated history where useful. Lane A must enumerate exact status clauses and evidence limits in its draft, including any corresponding stale explanatory sentence in §4, without importing unrelated CI-skip corrections into F2. The standing guardrail's reinstatement and unrelated held work remain effective. **Fresh runner success, current CI green, a new deliberately broken-type test, and hosted behavior are UNVERIFIED** here; this filing runs no such test and creates no new DoD credit.

**Routing:** F2 is included explicitly in this entry because no existing route was established by the inspected B-136/B-158 records (D-453 item 3). No earlier route is invented. F3 remains separate below.

**Owner:** Lane A, Phase 1. **Draft-review trigger:** D-453(c), present all proposed F2 status replacements, their D-70/source citations and the boundary between historical proof and fresh operational claims. **Success criterion and completion proof:** No current status clause describes the recorded installed apparatus as absent or awaiting its original installation release; unsupported current claims retain UNVERIFIED; historical proof stays dated. Supply the enumerated approved diff and common correction proof at D-453(d)–(e).

### Routing and scope questions reserved for draft review

F3/`terminal-return` wording stays on [B-158 F03 — Two small documentation defects](B-158-consolidated-documentation-review.md#f03--two-small-documentation-defects). F03's baseline **Sources**, lines 151–163, name `docs/Modular_PRD.md` line 1072 (three CI skips versus the Workflow Spec's four) and `docs/graph-fragments/README.md` line 60 (retired guidance pointer). They do **not** name `docs/specs/SPECS-VERIFICATION-APPARATUS.md`, whose §4 CI table, baseline line 90, also names the three-check skip set.

**Draft-review question:** How does the D-453 Apparatus F3 target relate to F03's actual source locations, and does F03's Modular PRD defect join the correction scope? Lane A presents the route and exact old → new text; Lane B reviews under D-453(c). Unresolved scope or meaning stops correction. This filing makes no F3 scope decision. **The graph-fragments README is outside the seven-file scope and is not added.** No workflow correction or graph operation follows.

D-453's entire possible correction source set remains exactly:

```text
docs/specs/SPECS-TRANSITION-ENFORCEMENT.md
docs/specs/SPECS-VERIFICATION-APPARATUS.md
docs/source/README.md
docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md
docs/fn-specs/FN-PUBLICATION-09-10-13.md
docs/Modular_PRD.md
docs/specs/SPECS-PUBLICATION.md
```

This entry changes none of those seven files. Source correction and Lane A's answer remain separate later commits. No additional recording path is released by this filing.

### Required completion proof and review sequence

For **each** finding, Lane A's D-453(c) draft supplies the exact old → new text, source location, evidence, route and recording paths. Unresolved meaning/scope stops the unit. D-453(d) correction proof must identify the approved diff, source commit(s), exact changed paths and finding-specific success criteria above, proving frozen `docs/PRD.md`, `docs/source/project-charter-v1.md` and `supabase/migrations/0001_init.sql` unchanged against the execution baseline.

Each final candidate receives two `bun run check` runs under D-453 item 5. All required checks pass or only `docs-drift` may fail; every other failure stops. Preserve complete logs, exit codes, tested HEAD, working path/context, content hashes and tested = staged = committed proof. An allowed failure is disclosed as a failure, never a full pass. Hooks run normally with `241258103+robertaoai@users.noreply.github.com`; never `--no-verify`. Independent Lane B Level 1 and Lane C Level 2 review follow at D-453(e). Only Lane A answers at D-453(f), in its own authorized commit; only an independent actor may record Verified.

**Filing gate conflict retained:** The Judge requires this raiser filing's Lane A field and independent verification fields unset. At the examined baseline, `scripts/checks/handoff-response.mjs` requires a `Verified-By` field at lines 700–704 and rejects a blank receiver field at lines 753–765. D-453 permits only `docs-drift` failure. The raiser cannot invent Lane A's acknowledgement to clear this condition. Run the requested checks on this exact working candidate and stop before staging/commit if that non-excepted failure occurs; retain the complete result externally without a result-only repository commit.

The cumulative SR-3 push-coverage record is retained externally as `C:/CoWork/outputs/lane-b-sr3-filing-2026-10-21/cumulative-sr3-push-coverage.json`, starting at `1adb938ae345a0df09577c5f6072ee3e43f32533`. It includes authority commit `c188a78dd8f280f492a3326c611ae44c435fe42a` and this filing's actual content/commit state, then later authorized correction and answer commits as they exist. A working candidate has no commit ID; it must not be represented as committed or remotely preserved. No push is released. Any later bounded push still requires fresh checks, freeze clearance, exact server-base/refspec gates and mandatory post-push remote proof.

## What you did instead

Lane B prepared only this raiser entry. No source correction, receiver answer, independent verification, DoR, DoD or attempt is completed. Check results and content/commit-state proof belong to the retained external receipts, not a later result-only commit.

Stop for independent filing review and then Lane A's D-453(c) draft-review stage, subject to the filing gate above. U-C stays held. B-136 and D-439 stay Open. J1/D-440 and J2/D-441 remain separately registered; both transfers stay held. No installation, activation, construction, graph prepare or resume, publication, push, attempt release, baseline naming or Gate 2 closure. SR-2, SR-4 and SR-5 remain unreleased; all other holds are unchanged.

| Verdict | Item / owner | Condition and follow-up phase |
|---|---|---|
| Approve-with-conditions | Six evidence-supported findings — Lane B raiser; Lane A receiver | Filing checks and independent filing review, D-453(b); no source correction or completion credit |
| Defer | Durable filing if the receiver/audit-field gate fails — Judge; Lane A owns the channel/check surface | Reconcile the explicit unset-field instruction with the non-docs-drift stop rule before any staging or commit, Phase 1 filing gate |
| Defer | Consolidated replacements, Q11 same-commit proof, F2 wording and unresolved F3 location/scope question — Lane A; Lane B reviewer | D-453(c) draft review; unresolved meaning or scope stops correction |
| Defer | Source corrections, final independent review and Lane A answer — Lane A; Lane B Level 1; Lane C Level 2 | D-453(d)–(f), each phase's own authorized proof |
| Defer | Push and every held unit — Judge and existing owners | Later bounded push and existing release checkpoints; no hold lifted here |

## Lane A — receiver acknowledgement, 2026-10-21

Filed under the Judge's decision "Judge decision — release B-159 acknowledgement and audit metadata only" (retained as
`C:/CoWork/outputs/lane-a-b159-ack-2026-10-21/JUDGE-B159-ACK.md`, SHA-256
`41e52028d73d49c3b1387e6116dccca8f4bb7ee85e9bb5dc277c33f675ce10dd`; transcript
`417d4ead-c5b7-481e-b141-3a8989ce9446.jsonl` line 7158), which accepts Lane B's filing review of this entry at `7ef7df2`
(Lane B's segment `rollout-2026-10-21T03-31-43-01a1450c-56ae-73a2-95c0-6c0d44d45f08_01a15acc-56e0-7801-a238-395e69a0b901.jsonl`
line 2192, message `msg_0359a885ce55f8dd016ad8c20d89f081918fa6cdb5fce681d9`, SHA-256
`62a4ef3288458aef701b55efc5738dbf15e0c38b007a47cdeb94797e7175e821`).

- Lane A has received the six findings.
- F3's source and scope question remains unresolved; it is settled at the D-453(c) draft review.
- No source correction, final disposition or completion credit is recorded here. `Verified-At-Commit` names the examined
  filing baseline; it is not an independent-verification result. Status stays Open.
