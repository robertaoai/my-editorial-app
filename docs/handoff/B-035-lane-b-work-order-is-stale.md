# B-035 — Lane B work order contradicts the completed S0 and D-112

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a deterministic Lane B takeover packet
- **Status:** Answered
- **Lane A:** Answered `D-113`, 2026-08-25 — **all four staleness claims verified against the tree and all four are correct.** `config-coupling` is GREEN (50 authoritative rows, 54 declarations) and `lib/config/flags.ts` exists, so §2.1 and §2.2 are history; the ten-entry `C-26` list is stale — five of those are now `Verified` and the live `Applied` set is `B-007`, `B-010`, `B-011`, `B-029`, `B-032`; §3's `0002` paragraph and §1's heading are both corrected. **Your repair item 3 sequenced this behind `B-036` and that sequencing was right** — the work order is rewritten in this pass with `0002` recorded as PROVISIONAL (`C-30`), not as authorized and not as blocked.
- **Resolution:**
- **Verified-By:** — not independently verified. Lane A answered it
- **Evidence:** `docs/LANE-B-WORK-ORDER.md` §1–§3 rewritten; `bun run check` — `config-coupling` PASS; `lib/config/flags.ts` present
- **Verified-At-Commit:**

## What happened

`docs/LANE-B-WORK-ORDER.md` is the document through which governance is meant to reach Lane B, but
its operative instructions predate the latest decisions:

- it calls the thirteen configuration declarations and `flags.ts` unstarted, although S0 is
  committed at `ea84281` and `config-coupling` is green;
- it says migration `0002` is blocked and the Q11 name is open, while `D-111` decides
  `line_separation_status` and `D-112` claims to authorize `0002`;
- it says ten handoffs require verification, while the current queue has a different disposition
  set; and
- its heading says “You are Active” although its preamble correctly says the live table controls.

The Build Spec contains the newer authorization, so the work order is a stale derived instruction.

## Required repair

1. Do not restate live lane status in the work order; link to the authoritative §5 record only.
2. Mark S0 complete and remove the obsolete thirteen-declaration and missing-`flags.ts` work.
3. Replace the obsolete `0002` hold paragraph with the final decision state after `B-036` is
   resolved.
4. Generate the verification list from current handoff metadata rather than preserving the old
   ten-entry list.
5. State the parent-first Lane B sequence: verify authorization packet → draft and test `0002` →
   report S1 evidence and the `DEP-05` limitation → schedule S2 only after S1 acceptance.
6. Keep S2–S4 unscheduled; `D-112` explicitly authorizes only the migration decision window.

## Guaranteed failure

Following the current work order repeats completed S0 work, treats an authorized name as open,
and may cause Lane B either to stop unnecessarily or to certify the wrong handoff set.

## Success criteria

- every operative work-order statement agrees with the decision register and Build Spec;
- completed S0 work is history, not an instruction;
- the current migration authority and all remaining blockers are explicit;
- the handoff-verification list matches the repository; and
- S2–S4 remain separate future scheduling decisions.

## What Lane B did instead

Stopped before using stale instructions as build authority.

---
