# B-134 — SM05 business-record scenarios lack Product-tier anchors

- **Raised:** 2026-09-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating the full SM05 DoR as independently verified and creating its GitHub Issue
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-24, receipt only. Lane A accepts the finding: `D-260` placed the SM05 scenarios in
  `FN-GATES` §4.4 before a `Modular_PRD` owner existed, reversing `D-29`. Judge answers the same day: a new `[V1]`
  Product group `US-15`/`FR-15`/`AC-23`–`AC-26`; SM05 intake anchored to `AC-23`, keeping `AC-02`; Jev completion
  to require each test file to name its scenario ID. **`D-261` is drafted, not recorded or applied** — no
  Product, spec, packet, manifest, receipt or `DOR-R7` change is made by this acknowledgement. `Status` stays `Open`.

  **Answered and applied 2026-09-24 (`D-261`).** Parent 1 kept. Parent 2: `US-15`/`FR-15`/`AC-23`–`AC-26` added to
  `Modular_PRD.md` (1.38) with no existing row changed; `CR-11` joins `CR-01`/`CR-10` as context only. Child 2A: every
  `FN-GATES` §4.3/§4.4 row names its Product anchor; `V1-SM05` drops `AC-01`, keeps `AC-02` under a recorded
  cross-tier mapping, and labels `FR-04`/`FR-05` display provenance; the traceability map is re-anchored. Child 2B:
  Jev readiness gains Product-intent parity and completion requires each test file to name its scenario ID, each
  rule with self-test cases. Child 2C: `DOR-R7` reopened in Commit A (`719e72b`) and re-checked in Commit B on a
  receipt that passes at that clean commit. `B-131`–`B-133` `Verified-By` normalized; `B-130` left untouched.
  `Verified` is Lane B's to record.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A under `D-261`
- **Evidence:** `D-29`; `D-54`; `D-260`; `docs/Modular_PRD.md` §§5/9; `docs/fn-specs/FN-GATES-01-05.md` §§4.4/5; `docs/governance/requirements-traceability-map.md` §6.1; `docs/v1/work-packets/V1/V1-SM05.md`; `scripts/jev/lib.mjs`; passing Jev receipt at the commit below
- **Verified-At-Commit:** edc64d7f9b9371be810b7b79c2b66d0b16c7f359

## What happened

Lane A applied `D-260`, pushed both commits and produced a clean passing Jev receipt. Lane B's
independent mechanical review passes: the full consistency suite is green; Jev readiness passes at
the clean current HEAD; every Jev self-test behaves as named; Graphify is current; and the Option-A
held IDs no longer appear in the SM05 manifest.

One normative defect remains. `D-260` made `FN-GATES-01-05.md` §4.4 the behavior source for the
`business:T1`–`T5` evidence slice without first anchoring that behavior to a `Modular_PRD` feature
group. That reverses the `D-29` chain and the binding feature-group input rule.

| Collision | Product tier | Applied SM05 interpretation |
|---|---|---|
| `AC-01` | `Modular_PRD` §9 requires a transition row recording executor and Line facts | `FN-GATES` §5 uses the same ID but requires only creation at the entry state; `D-260` selects this lower-tier row |
| `FR-02` / `AC-03` | Requires two distinct technical transitions | Traceability row 4 uses it to anchor `business:T2`/`T3` judgment records while Option A creates no `transition:T*` row |
| `FR-03` / `AC-04` | Requires drafting, article state `Drafted`, adaptation, target and checklist | Traceability row 5 cites `FR-03` for `business:T4` fallout-comparison evidence while Option A changes no article state |
| `FR-04` | Historical/held human T5 review requirement | Used only as a display anchor and as a loose anchor for the different `business:T5` ranking record |

Source-qualified hashes make Jev deterministic, but they do not resolve this hierarchy collision.
The current parity rule proves that the packet, its functional scenarios and manifest agree with one
another. It does not prove that every functional scenario derives from the Product feature group that
owns the behavior.

### Guaranteed failure if left as-is

Two incompatible definitions of success remain possible:

- a Lane B build can pass `SM05-N1`–`N6` while failing the transition/state-change clauses attached to
  the Product IDs cited by the packet; or
- later reviewers can require the Product clauses and reintroduce technical transition execution that
  Option A explicitly excluded.

Graphify, the Encyclopedia, a green Jev receipt and an opened Issue cannot arbitrate that conflict.
The Register records decisions, but the resulting Product behavior must still land in its owning tier
before the lower functional tier elaborates it.

## What you need

Apply one parent-first correction before creating the SM05 Issue.

### Parent 1 — preserve the valid `D-260` evidence

Do not roll back Option A, the §4.4 scenarios, the widened Jev control, the clean receipt or the push.
Keep the held technical transition behavior under `D-171`. The current receipt remains proof that the
applied packet is internally coherent.

### Parent 2 — establish the Product owner for the Option-A slice

In `Modular_PRD.md`, create or identify the feature group that owns the `business:T1`–`T5` stage,
task, evidence, revision, visible-fact and exclusion behavior. Use distinct Product requirement and
acceptance identifiers for the evidence-only slice, or explicitly decompose an existing Product row
into separately identified evidence and transition obligations. Do not reuse one unqualified ID for
different Given/When/Then outcomes.

The recommended approach is distinct `[V1]` Product identifiers for Option A because it preserves the
held transition requirements unchanged and makes partial delivery explicit. Lane A chooses the exact
identifiers only after checking the Product ID register; this handoff does not invent them.

### Child 2A — restore the intent chain

1. Point every `FN-GATES` §4.4 scenario to its owning Product requirement/acceptance identifier.
2. Replace SM05's source-qualified lower-tier `AC-01` shortcut with an unambiguous Product anchor; keep
   the original Product `AC-01` intact unless its owning row is explicitly decomposed by the Judge act.
3. Update `V1-SM05.md` and the traceability map so cited `FR`/`AC` identifiers mean the behavior SM05
   actually promises. A display-only use of held `FR-04`/`FR-05` must be labelled provenance, not
   implementation acceptance.
4. State explicitly which Product obligations remain held and which evidence-only obligations SM05
   completely satisfies.

### Child 2B — extend Jev from scope parity to intent parity

Add a deterministic Product-anchor mapping to each manifest behavior. Jev readiness must fail when:

- a functional scenario has no Product feature-group anchor;
- the same unqualified ID resolves to different Given/When/Then behavior across tiers without a
  Register mapping;
- a packet cites only part of a Product acceptance criterion as if the whole criterion passed; or
- a held Product row is used as build acceptance rather than display provenance.

Add negative fixtures for each condition. Model-assisted semantic comparison remains advisory; the
gateable control is explicit IDs, mappings, scope dispositions and hashes.

### Child 2C — regenerate readiness evidence

Return `DOR-R7` to unchecked while this correction is open. Re-pin the manifest to the Product-owned
anchors, run Jev at a clean commit and check R7 again only when:

- every §4.4 scenario traces through `Modular_PRD` → `Fn_Spec` → packet → DoD evidence class;
- no unqualified ID carries two acceptance meanings;
- every cited Product acceptance obligation is either fully covered or explicitly outside SM05; and
- the receipt passes both scope parity and intent parity.

### Propagation and lifecycle

| Tier / record | Required disposition |
|---|---|
| Register | Amend `D-260` with the Product anchoring method and temporary R7 return |
| `Modular_PRD.md` | Add/decompose the owning Product feature and acceptance rows; update its changelog; frozen Project PRD unaffected |
| `FN-GATES-01-05.md` | Cite the Product anchors for every §4.4 scenario; preserve `[V1]` marking |
| Build Spec / Inventory / SM05 packet / traceability map | Replace ambiguous FR/AC anchors and record the new receipt state |
| Jev manifest / engine / self-test / receipt | Add deterministic intent parity and re-pin |
| Storyboard Panel A11 | Visual behavior unchanged; update pointers only if Product identifiers change |
| Held `FR-04a`/`FR-05a`, `AC-05a`/`AC-06a`, Encyclopedia, rules, migrations, application code | Unaffected |
| Handoff lifecycle | `B-131` may be verified separately; keep `B-132`/`B-133` Applied until this residual is independently closed. Their current `Verified-By` values also need normalization from the raised form to the dispositioned form if they remain Applied |

The branch is already pushed: local HEAD equals `origin/docs/journal-2026-08-16`. Do not request or
repeat that act. The GitHub Issue is the next external act, but it remains deferred by this defect.

## Success criteria derived from failure

| Failure to prevent | Observable success criterion |
|---|---|
| Lower-tier scenarios become product intent by assertion | Every §4.4 row names a real `Modular_PRD` feature/acceptance anchor |
| One ID means two outcomes | Every unqualified acceptance ID has one Given/When/Then meaning across the active chain, or an explicit versioned mapping |
| Partial Product acceptance is reported as complete | The packet states exactly which Product obligations are satisfied and which remain held |
| Jev proves only internal document agreement | A deliberate missing/wrong Product anchor makes intent parity fail for the expected reason |
| Issue creation freezes an ambiguous contract | R7 is rechecked only after a clean intent-parity receipt; Issue creation follows afterward |

## What you did instead

Lane B independently reviewed `9be84bb` and `edc64d7`, reran the consistency suite, Jev readiness and
Jev's negative self-test, checked the pushed branch and Graphify currency, and stopped at the new
Product/Fn_Spec boundary. No canonical document, script, manifest, receipt, application file, Issue,
branch, PR or lane state was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Option A, held-scope removal and D-260 mechanical propagation | Phase 1 / preserve the two pushed commits |
| **Approve** | §4.4 scenarios as the accepted behavioral draft | Phase 1 / retain content while adding Product anchors |
| **Approve-with-conditions** | Full SM05 DoR completion | Phase 1 / restore the Product→Fn Spec chain and pass intent parity |
| **Approve-with-conditions** | Jev readiness | Phase 1 / scope parity plus deterministic Product intent parity |
| **Defer** | GitHub Issue and subsequent branch/PR/lane acts | Phase 1→2 / after corrected R7; push is already complete |
| **Reject** | Treating a source-qualified lower-tier `AC-01` as resolution of the higher-tier `AC-01` contract | It preserves two meanings for one acceptance ID |
| **Reject** | Treating Panel A11 or the Register alone as the Product feature-group input to `Fn_Specs` | Contradicts `D-29` and the binding feature-group input rule |
