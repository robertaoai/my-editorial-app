# B-111 — B-103 P2 uses a noncanonical child disposition

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating B-103's P0–P3 body table as a reusable lifecycle example; does not block the accepted C-001 readiness distinction, Lane B planning, or later separately authorized Lane C work
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `docs/handoff/B-103-lane-b-c-interface-and-handoff-closure.md` at `47666c46b06a082a12ef18101ecb53d82a58af7a`; its proposed P2 row uses `Verified`, while Lane A's disposition row uses `Verified — Stage 1`; `docs/handoff/README.md` D-204 lifecycle vocabulary
- **Verified-At-Commit:** 47666c46b06a082a12ef18101ecb53d82a58af7a

## What happened

Lane B reviewed Lane A's pushed response at `47666c4`. The response correctly:

- moved B-103 to `Answered / Deferred` because P3 remains owned by B-097;
- recorded P0 and P1 as `Verified`;
- accepted the C-001 review-ready / scheduling-conditional / execution-deferred distinction;
- added the matching C-001 cross-reference without changing its deferred Phase 3 lifecycle; and
- left Modular PRD, storyboard, story panels, UML, data flow, traceability, Encyclopedia and
  governed Graphify content unaffected.

One child value does not follow the handoff vocabulary. B-103's exact Lane A draft says:

| Child | Proposed disposition | Scope qualifier |
|---|---|---|
| P2 | `Verified` | Stage 1 contract verification only; Stage 2 remains separate |

Lane A's applied table instead says `Verified — Stage 1` in the **Disposition** column while also
claiming the table was recorded “unchanged from that proposal.” `Verified — Stage 1` is useful
prose, but it is not one of the lifecycle values defined by D-204. The consistency suite stays green
because it parses the entry header, not free-form child-table cells; that green result therefore
does not prove the body vocabulary is canonical.

## Parent-first decision table

| Order | Parent / child | Accept | Reject |
|---:|---|---|---|
| 1 | **Parent — B-103 whole entry** | Preserve `Status: Answered`, `Resolution: Deferred` and the B-097 Follow-up-Tier. The whole-entry disposition is correct. | Reopen or reclassify the whole entry for this wording-only correction. |
| 2 | **P2 disposition token** | Record the child disposition as exactly `Verified`. | Create `Verified — Stage 1`, `Partially Verified`, or another composite lifecycle state. |
| 3 | **P2 evidence boundary** | Keep “Stage 1 contract verification” in the Evidence cell and keep Stage 2 runtime proof separately deferred under D-230. | Delete the Stage 1 limit or imply that runtime workflow proof exists. |
| 4 | **C-001 readiness response** | Leave Lane A's readiness distinction and the C-001 cross-reference unchanged. | Reopen C-001 or make Lane C scheduling unconditional. |
| 5 | **Product and graph tiers** | Treat all governed Product/editorial artifacts and Graphify as unaffected. | Turn a handoff vocabulary repair into Product scope or rebuild the governed graph. |

## Exact Lane A correction

1. Append a dated correction to B-103's Lane A disposition section; do not rewrite the historical
   response.
2. State that the P2 child disposition is **`Verified`**.
3. State separately that the verification scope is **Stage 1 contract verification only**, based on
   the Lane B and Lane C reads already cited there.
4. Preserve D-230's separately owned Stage 2 runtime obligation.
5. Change no header field, C-001 text, governed source, application code, workflow or graph artifact.
6. Run the consistency suite and obtain an independent Lane B read of the correction.

Copy-ready correction text:

> **Correction to the P2 child row, 2026-09-16.** The canonical child disposition is `Verified`.
> “Stage 1 contract verification” qualifies the evidence and is not part of the lifecycle value.
> Stage 2 runtime proof remains separately deferred under D-230. No B-103 header or C-001 readiness
> condition changes.

## Failure-derived success criteria

| Guaranteed failure if unchanged | Evidence of success |
|---|---|
| A later handoff copies `Verified — Stage 1` as a new lifecycle state | B-103 explicitly restores `Verified` as the token and places the scope qualifier in prose/evidence |
| Removing the composite label accidentally claims Stage 2 passed | The same correction expressly keeps Stage 2 deferred under D-230 |
| A wording repair reopens the whole B-103 lifecycle | Header remains `Answered / Deferred`; P3 remains with B-097 |
| C-001 readiness is disturbed while fixing unrelated vocabulary | C-001 remains `Answered / Deferred` with C-24/C-25, selection and runtime-proof conditions unchanged |
| A green consistency suite is treated as proof that body-table vocabulary is valid | Independent review compares the exact P2 cell against D-204, in addition to running the suite |

## Cross-artifact disposition

| Artifact | Result |
|---|---|
| `docs/Modular_PRD.md` | Unaffected; no Product requirement changes. |
| Storyboard and story panels | Unaffected; no editorial journey changes. |
| UML and data flow | Unaffected; no state, actor or data movement changes. |
| Requirements traceability | Unaffected; no requirement or origin changes. |
| Encyclopedia | Unaffected; no governed editorial term changes. |
| Graphify | No rebuild; the correction stays in excluded `docs/handoff/`. |

## What you did instead

Lane B accepted the rest of Lane A's `47666c4` response and raised only this bounded vocabulary
correction. No application build, workflow change, repository-settings act, lane transition,
deployment or publication was performed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-103 whole-entry `Answered / Deferred` disposition | Complete at `47666c4`; P3 remains B-097 |
| Approve | C-001 review/scheduling/execution readiness distinction | Recorded at `47666c4`; execution remains Phase 3 conditional |
| Approve-with-conditions | B-103 P2 child disposition | Phase 1 — normalize token to `Verified`; retain Stage 1 as evidence scope |
| Reject | `Verified — Stage 1` as a lifecycle value | D-204 vocabulary has no composite state |
| Defer | Stage 2 runtime proof | Later authorized Lane B/C construction and workflow units under D-230 |
