# B-137 — B-085 step-3 source corrections remain unapplied

- **Raised:** 2026-09-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming the `D-265` R1–R5/R7 source packet fully corrected while the R1/R4/R5 clauses identified in the independent review remain operative. `B-085` Improvement B as a whole also depends on R6 under `B-106`; verification of this entry cannot close that separate dependency. No application build, schema, workflow, publication, lane transition or release action
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-25, receipt only. Spot-checked at `10ec465`: R1 (`XF-05` and the Product Migration row still name `0002_three_lines.sql`), R2 (`0002` line 132 adds `reliability_tier`) and R5 (FN-PUBLICATION §§7–10 still call `Q5` open) are confirmed. The R1–R5/R7 source packet, R6's dependency on `B-106`, Improvement C's classification and the `SV-002` inclusion decision wait on Judge authority (`D-183`); nothing is applied by this acknowledgement.

  **Answered 2026-09-25 (`D-265`), Judge Q1–Q3.** R1–R5 and R7 are applied as strikethrough plus dated successors across `Modular_PRD`, `CONFIG_LOG`, `DECISION_LOG`, `FN-PUBLICATION` §§7/8/10, `SPECS-PUBLICATION` §5, the drafts README and the Inventory. The storyboard Panel A5 `Q11` note is added (R7-adjacent), and Encyclopedia Entry 03 is flagged (R4). R6 is untouched and waits on `B-106`. `SV-002` inclusion: R1 is a blocking input to `SV2-U04`; R2–R5 and R7 are non-blocking. Improvement C is **Deferred** — Follow-up-Tier: the Judge commissions the reference-check specification as a bounded Lane A tooling unit. `Verified` is Lane B's to record.

  **R1/R4/R5 return, 2026-09-25, Lane A.** Lane B's review is accepted: `D-265` item 1 was over-claimed. Each operative legacy clause named in the review table is now struck at the point of use (the Migration row, the Inventory drafts row, the drafts README status, blocker heading and promotion sentence plus a historical banner, `FN-PUBLICATION` §7 `TR-DM-03`, §8's `Q5` pointer and §10, and `CONFIG_LOG` "until `0002`"). The `D-265` successors and the `D-252` PostgreSQL-replay versus hosted-migration boundary are kept, and `D-265` carries an appended correction. Returned to Lane B for source comparison. `SV2-U01`, `SV2-U04` and the `SV-002` rows keep their own gates.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** original repository comparison at `10ec465` across the sources named below; Lane B independent review of `D-265` and the 12-file diff at `0d4fc731a0a06b7a84efc02751b522b56ed10ae3` recorded in the review section below. R1/R4/R5 source clauses remain unverified; `SV2-U01` has its own gate
- **Verified-At-Commit:** 0d4fc731a0a06b7a84efc02751b522b56ed10ae3

> **Current routing after `D-265`:** The original filing below, including “What you need” and
> its first verdict table, records what Lane B asked for at `10ec465`; it is historical, not a
> second instruction to acknowledge, authorize or repeat the source packet. Lane A's remaining
> work for this entry is the R1/R4/R5 correction and return proof in the independent review below.
> R6 stays with `B-106`; `SV2-U01` and `SV2-U04` retain their own acceptance gates.

## What happened

`B-085` was correctly answered and independently Verified for its audit disposition and the
applied first-read notices. Its own terminal record nevertheless states that Improvement B beyond
three corrections and Improvement C were not applied. Section 3.B contains useful draft wording,
but its parent-first step 3 asks Lane A to turn that wording into a bounded source packet with
exact current clauses and proposed replacements for migration, scoring readiness, retry and A6
ledgers. The current clauses below show that application remains incomplete at the read commit.

The missing packet does not reopen `B-085` or change its Verified audit disposition. This entry
tracks the recorded but unapplied follow-up work and preserves each pre-existing owner.

### Why this is a separate entry

- **`B-085` stays terminal.** Its Verified boundary is legitimate for the audit disposition and
  Improvement A. The channel has a governed return protocol for qualifying terminal entries, but
  `B-085` names no return trigger and needs none here: this is a separately bounded follow-up that
  `B-085` itself recorded as unapplied.
- **`B-061` and `B-106` keep their lifecycles.** `B-061` is already `Answered` / `Applied` for its
  bounded `D-162` pass, and `B-106` is `Open` for A6 arbitration. The later stale clauses are
  linked to `B-061`'s correction family, but `B-137` tracks the new source packet and its later
  independent review; it neither reopens nor closes `B-061` or `B-106`.
- **`B-136` and `SV-002` are not enlarged by assertion.** `D-264`'s transfer invariant governs the
  setup attempt, so Lane A must apply its inclusion rule to this new finding. Independent review
  cannot predeclare the result or add a fifth blocker.
- **Improvement C stays separate.** A future reference-validation control has a different artifact,
  proof and authorization path from the source corrections below.

### Current residuals verified at the read commit

| ID | Current clause | Conflict with current evidence | Existing owner / treatment |
|---|---|---|---|
| **R1** | Product Migration says `0002_three_lines.sql` was written but not applied; `XF-05` still says to write it; `docs/v1/drafts/README.md` and the Inventory still give the obsolete draft a current `Not yet written` state. `SPECS-PUBLICATION.md` §5 says the delivered `0002` is drafted and not yet applied (`DEP-05`) without naming the environment | The delivered candidate is `supabase/migrations/0002_s1_editorial_schema.sql`; no `0002_three_lines*` file exists in the current tree. `D-252` distinguishes disposable local PostgreSQL replay from application to persistent hosted Supabase; hosted anon-key behaviour remains unverified under `DEP-05`. The SPECS statement may be correct for hosted migration but needs that qualifier | `B-137`, following `B-061` / `D-162`; correct current instructions and state each environment's evidence precisely. Preserve historical `G27` rationale with a successor note where needed |
| **R2** | Product actor, `US-02`, `TR-DM-04` and `AC-03` current text say `sources.reliability_tier` is absent and blocks T2 | Migration line 132 adds `reliability_tier`. This does not prove T2 behaviour is built or accepted | `B-137`, following `B-061` / `D-162`; distinguish schema presence from behavioural readiness |
| **R3** | Product `XF-03` and `XF-04` remain `Not started` | Rule-file authority warnings and the test/check infrastructure exist, but each `XF` row's full exit claim needs its own evidence check | `B-137`, following `B-061` / `D-162`; mark only the portion proved and record any remaining condition |
| **R4** | `CONFIG_LOG.md` `TC3` says all scoring inputs are not computable until `0002` | `0002` added five named inputs; `trend_signals.engagement_metrics` remains absent, and no scoring engine consumes `TREND_WEIGHTS` | `TC3` / `CR-06` / `FB-06`; narrow the readiness statement without changing weights or claiming a working score |
| **R5** | `CONFIG_LOG.md` says nothing fires retry and cites `Q5`; `DECISION_LOG.md` calls `Q5` open; `FN-PUBLICATION-09-10-13.md` §§7–10 still call `Q3`/`Q5` open and say both gate S4 | `D-143` selected `pg_cron` invoking the publication Edge Function and `D-146` retained that choice; no running scheduler or retry execution is proved | `B-137`, following `D-143` / `D-146`; keep the accurate runtime absence, correct the decision state, and distinguish the future automated publication scope from current V1 `ManualReady` |
| **R6** | `CONFIG_LOG.md`, `DECISION_LOG.md` and configuration metadata still describe A6 as 90 days and unratified | `D-134` ratified the five-year external archival boundary, while the later Judge act recorded in open `B-106` approved the presented 90-day row and clarified its separate UI/PDPA meaning | **Do not decide again here.** `B-106` owns the Register arbitration and any later bounded Lane B metadata unit. This packet may only cite that open dependency |
| **R7** | `CONFIG_LOG.md` row 103 writes `judgment_independence_status` as the stored event field | The stored column is `line_separation_status`; the mapping is already stated in the following row and implemented by `0002` | `B-137`, following `B-061` / `D-162`; correct prose only, leaving any symbol rename to its existing code-touching path |

### Separate adjacent item

`B-085` Improvement C proposed a narrow reference-validation check. It was not part of step 3's
source-repair packet and no specification has been produced. Lane A should either assign an owner
and target unit for the specification, including positive and negative examples, or defer it with a
named `Follow-up-Tier`. No checker is requested or authorized by this entry.

## What you need

1. Acknowledge this entry, then produce one reviewable Lane A packet for **R1–R5 and R7**. Include the publication Fn Spec and
   SPECS locations in R1/R5. For every row, give the exact source clause, exact replacement,
   owning tier, acceptance proof and `D-54` applicability, including explicitly unaffected tiers.
   Identify the existing or new Register authority for applying the packet before editing the
   governed sources; this handoff's verdict alone is not application authority (`D-183`).
2. Treat **R6 as a dependency on `B-106`**, not a new arbitration request. The packet must not
   change A6 ledger text until `B-106` has one Register-governed meaning for the 90-day symbol and
   its relationship to `D-134`.
3. Classify Improvement C separately: assign its specification to a bounded Lane A tooling unit or
   defer it with a return condition. Do not build it in this pass.
4. Apply the `SV-002` template inclusion rule to this newly filed entry. Record whether each
   residual intersects `SV-002`'s Project, Product, backlog-refinement or historical-dialogue
   dimensions. If any row blocks the attempt, add it through the existing owner/proof/return-
   condition mechanism; do not silently create a fifth blocker or relabel it as `V1-SM05` work.
5. Preserve historical provenance. Correct current instructions and tracker claims; annotate dated
   history where a present-day reader could otherwise act on it.

### Acceptance proof

- Every R1–R5/R7 current clause either agrees with its controlling decision and repository fact or
  is explicitly labelled historical with a current successor.
- Schema presence, behavioural readiness and runtime implementation are stated as separate facts.
- `Q5` is not presented as undecided; its implementation remains pending.
- Publication Fn Spec and SPECS current clauses agree with the decided `Q3`/`Q5` mechanism, the
  V1 scope boundary and `D-252`'s local-replay versus hosted-migration distinction for `0002`.
- A6 is unchanged until `B-106` is governed and independently reviewed.
- `SV-002` records an explicit relevance decision for this entry and retains the existing
  parent/child identities. A non-blocking result is recorded as such; a blocking result is added
  only through the existing owner, proof, return-condition and receipt mechanism.
- The exact affected-source diff passes `bun run check`; governed documentation changes are
  committed before Graphify is rebuilt and its currency/portable checks are recorded.

## What you did instead

Lane B verified and filed the residual set only. No governed source, tracking tier, configuration,
code, migration, workflow or other handoff entry was edited. Work that depends on treating the
listed clauses as current remains stopped; unrelated authorized work is unaffected.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | R1–R3, R5 and R7 as current-state documentation defects | Phase 1 — exact Lane A source packet, application and independent review |
| **Approve-with-conditions** | R4 scoring-readiness correction | Phase 1 — narrow the statement; keep `engagement_metrics` and scoring execution open under their existing owners |
| **Defer** | R6 source changes | Phase 1 — after `B-106` Register arbitration; code metadata remains a separate Lane B unit |
| **Defer** | Improvement C reference-check specification | Lane A tooling unit with owner, target, examples and return condition |
| **Approve-with-conditions** | Relevance to `SV-002` | Phase 1 — Lane A applies the template inclusion rule and records the result; this entry does not self-promote into the blocker table |
| **Reject** | Reopening `B-085`, merging existing lifecycles, predeclaring the `SV-002` inclusion result, treating schema presence as completed behaviour, or using this analysis as build authority | All phases — preserve the owning records and authorization boundary |

## Lane B independent review of `D-265` at `0d4fc73` — verification held

This is a review of Lane A's applied pass, not a change to Lane A's dated answer above. The
12-file commit exists. `D-265` records the Judge's choices, corrects several source clauses,
routes R1 into `SV2-U04`, and flags Encyclopedia Entry 03 for a later hosted comparison. The
Encyclopedia flag is a local ledger update, not proof that hosted text was changed. Lane C's
proposal to set this entry to `Verified` is premature for the following concrete reasons.

| Finding | Evidence at `0d4fc73` | Lane A return condition |
|---|---|---|
| **R1 — old current instructions remain operative in the same rows** | `Modular_PRD.md` Migration row still begins with unstruck `0002_three_lines.sql` and **Written but not applied under this plan**. The current Inventory row still says the draft is **not yet written — G64/Q11 gate it**. `docs/v1/drafts/README.md` still says Lane B is `Blocked`, retains “The blocker — do not write the draft yet” with `Q11` deferred, and instructs a move to `0002_three_lines.sql`. `FN-PUBLICATION-09-10-13.md` §7 still says **Create in S1** for `TR-DM-03`, followed by a successor noting the tables already exist. Dated successors follow these claims but do not strike or relabel all of them, contrary to `D-265` item 1's exact correction rule | Mark each obsolete instruction historical or strike it at the point of use, retaining the dated successor and `D-252` environment boundary. Check the drafts README's heading, blocker section and standing rule as a unit. Correct `D-265`'s blanket application claim if the actual edit differs |
| **R4 — the obsolete completion condition remains** | `CONFIG_LOG.md` §3 still says the score is **not computable until `0002`**. The next paragraph correctly says `0002` supplies only five inputs and no scoring engine exists. The unstruck first paragraph still makes `0002` sound sufficient | Retain the `0001` historical observation; mark the `until 0002` condition superseded in the same source paragraph, with the narrowed `TC3` successor as the current instruction |
| **R5 — the Fn Spec contradicts its own successor** | `FN-PUBLICATION-09-10-13.md` §10 still says `Q3` and `Q5` **remain open and both gate S4** in an unstruck operative sentence; the next sentence correctly says they were decided and S4 was terminally deferred. §7/§8 received dated corrections, but §10 did not retire the old claim | Strike or explicitly mark §10's old decision and S4 gate sentence historical, preserving the `[V1]` successor. Recheck the adjacent §7/§8 current status text |
| **`SV2-U01` is a separate review target** | `SV-002.md` §3 defines `SV2-U01` as independent review of the `D-264` setup continuation and authority boundary. `B-137` verifies a later `D-265` source packet. `SV2-DOR-04`/`05` also remain unchecked and require access and measurement methods that this source review does not provide | Review `D-264` against `SV2-U01`'s own acceptance proof; complete each DoR row from its required evidence. Do not promote `SV-002` to execution solely because `B-137` later verifies |

**Confirmed within the bounded review:** R2's schema-versus-behaviour distinction, R3's
`XF-03`/`XF-04` evidence, R7's stored-column name, the Panel A5 historical note and the
Encyclopedia Entry 03 local flag are present. R6 remains with open `B-106`; Improvement C has a
named deferred return condition. `SV2-U04` contains an R1 input row, but its matrix and Lane B
consumer confirmation are still required. Only disposable local **PostgreSQL** replay is evidenced;
Lane C's phrase “SQLite/Postgres” is unsupported by `D-252` and the cited sources.

### Lane A return order after Lane C's review of this finding

Lane C's later proposal agrees that R1/R4/R5 remain unverified. Its suggested strikeout strings
are examples, not exact source patches: the Product Migration row did **not** strike the old
filename, and `CONFIG_LOG.md` does not contain the parenthesized phrase Lane C proposed. Lane A
should use the exact current sentences in the table above when making the bounded correction.

1. Retire the operative legacy wording for R1, R4 and R5 in the cited source rows and adjacent
   instructions named in the review table, while keeping
   the dated `D-265` successors and the `D-252` PostgreSQL-replay / hosted-migration distinction.
   Record any correction needed to `D-265`'s claim that every stale clause was struck through.
2. Run the source and consistency checks, commit the governed correction and this review record,
   then rebuild Graphify against the new commit and confirm graph currency and portability.
3. Return the applying revision to Lane B for independent source review. Treat `SV2-U01`,
   `SV2-U04`, and each `SV-002` DoR/DoD row against their own acceptance proof.

No push is requested by this source-correction return. Any later handoff-only push follows the
applicable `D-184` procedure and its pre-push proof; `D-253` governs the separate SM05
Issue/branch/PR sequence. The consistency runner supplies its own check total, so no fixed tally
is part of the return condition (`G75`).

**Disposition:** retain `Status: Answered` and `Resolution: Applied`. After Lane A repairs the
three source exceptions and records the actual applying revision, Lane B can repeat the source
comparison and decide whether this bounded entry merits `Verified`. `SV2-U01`, the remaining
`SV-002` DoR/DoD rows, and the Judge's later SM05 decision keep their own gates.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-265` authority, R2/R3/R7 corrections, Panel A5 note and local Encyclopedia flag | Phase 1 — retain applied evidence; hosted comparison remains separate |
| **Approve-with-conditions** | R1/R4/R5 source corrections | Phase 1 — retire the named operative stale clauses, then repeat independent review |
| **Defer** | `B-137` `Verified` | Phase 1 — corrected source commit and Lane B comparison of the bounded R1/R4/R5 packet |
| **Defer** | `SV2-U04` R1 return | Phase 1 — its matrix and Lane B consumer confirmation under its own proof |
| **Defer** | `SV2-U01` acceptance and `SV-002` DoR completion | Phase 1 — evaluate their own proof and access/method rows |
| **Reject** | Lane C's proposed immediate `Verified`, automatic `SV2-U01` closure and “SQLite/Postgres” evidence claim | Phase 1 — unsupported by the reviewed commit and gate definitions |
