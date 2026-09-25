# B-137 — B-085 step-3 source corrections remain unapplied

- **Raised:** 2026-09-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming `B-085` Improvement B complete or relying on the current-state clauses below as accurate; no application build, schema, workflow, publication, lane transition or release action
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-25, receipt only. Spot-checked at `10ec465`: R1 (`XF-05` and the Product Migration row still name `0002_three_lines.sql`), R2 (`0002` line 132 adds `reliability_tier`) and R5 (FN-PUBLICATION §§7–10 still call `Q5` open) are confirmed. The R1–R5/R7 source packet, R6's dependency on `B-106`, Improvement C's classification and the `SV-002` inclusion decision wait on Judge authority (`D-183`); nothing is applied by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** repository comparison at the commit below across `B-085`, `B-061`, `B-106`, `D-134`, `D-143`, `D-146`, `D-198`, `docs/Modular_PRD.md`, `docs/CONFIG_LOG.md`, `docs/DECISION_LOG.md`, `docs/fn-specs/FN-PUBLICATION-09-10-13.md`, `docs/specs/SPECS-PUBLICATION.md`, `docs/v1/V1-ARTIFACT-INVENTORY.md`, `docs/v1/drafts/README.md`, `lib/config/build-config.ts` and `supabase/migrations/0002_s1_editorial_schema.sql`
- **Verified-At-Commit:** 10ec465110c068257cfaf3781cd2e1810378cf1e

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
