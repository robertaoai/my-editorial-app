# B-163 — Lane A push follow-up after local recording

- **Raised:** 2026-11-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** [B-162](B-162-consolidated-findings-and-delivery-controls.md), Lane A's answer for Units 2–4 and Task 2 G5; [Decision Register §5.14e308](../v1/V1-DECISION-REGISTER.md#514e308-d-485--hook-evidence-gap-for-b-162-filing-e85a044); the direct Judge push approval in Codex thread `01a1c544-bf94-70b1-895f-644ed0db8e57`, message `01a1c628-660e-7ac1-9f34-c48ef3060b46`; Lane B's fresh fetch before this filing.
- **Verified-At-Commit:** d4893d46c8e5fd01c54d78da08709bd6bd8696c7

## What happened

Lane A recorded the B-162 answer in `e85a0445b6217d0c55c84ee7b755444ec31e5ceb`. Lane A then recorded the hook evidence disposition in D-485 at `d4893d46c8e5fd01c54d78da08709bd6bd8696c7`. The first commit has sole parent `6d09a390f8983a7547c2699e0f85a5a277103f04`. The second has the first as its sole parent.

The recording acts left both commits local. A follow-up Judge instruction had to name Lane A, both commits in order, the destination `origin/features/feature-V1-SM05`, and the fresh upstream and pre-push checks. The gap was the late handoff from local recording to remote delivery. Keeping the commits local before release respected the recording scope.

Before this filing, Lane B fetched the target branch. The fetched tip, configured upstream and local `HEAD` all equaled `d4893d46c8e5fd01c54d78da08709bd6bd8696c7`. The outgoing count was zero. This proves both commits are upstream now. It does not reconstruct Lane A's pre-push receipts or prove the historical `commit-msg` invocation or result for `e85a044`. D-485 keeps that evidence gap open.

## What you need

Lane A: answer this finding in the Lane A field. Use B-162 units U1, U3 and U4 for the existing delivery control work. Add this case as acceptance evidence for those units. Keep their existing releases and owners.

1. At the recording checkpoint, state the intended delivery owner and destination. Mark push authority as pending until the Judge names the exact range. Put the push checkpoint in the same delivery plan so the owner can request a decision when the commit IDs are available.
2. At the push checkpoint, bind the approved base, ordered commit IDs and destination to fresh upstream and pre-push proof. Stop on a range mismatch or a required check failure. Apply an exception only if it covers this exact push. A recording-only D-428 exception cannot release a push.
3. Return the push result and fresh remote-tip proof. Report `local only` and the exact blocker when delivery stops. Report `pushed` when the remote tip matches the approved tip. Show one successful case and one refusal for an unexpected outgoing commit when the existing units reach authorized verification.

## What you did instead

Lane B checked the exact parent chain and confirmed the remote already contained both Lane A commits before raising this finding. The new entry is a separate one-path filing under D-184, D-272 and the Judge's current instruction. It leaves B-162 Open, receiver access open and Unit 5b deferred. All other holds stand, including D-479 2a/2b, D-484, the full-manifest gate, the stop on 10024 and the guarded graph work. D-478 T3/T4/T4a/T4b stays on its separate route.

| Scope | Verdict | Follow-up phase |
| --- | --- | --- |
| Record this delivery case | Approve | Phase 1: Lane A answers and links the case to B-162. |
| Add acceptance evidence to the existing delivery controls | Approve-with-conditions | Phase 1: use the existing unit releases, exact range proof and independent review. |
| Historical hook verification and all held work | Defer | Existing release routes. D-485 preserves the historical evidence gap. |
