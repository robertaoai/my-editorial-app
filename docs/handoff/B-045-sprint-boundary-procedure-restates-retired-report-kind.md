# B-045 — Sprint-boundary procedure restates the retired report kind

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** using `V1-PHASE-CLOSURE.md` §5.2 alone as an exact boundary runbook
- **Status:** Answered
- **Verified-At-Commit:**
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:**
- **Lane A:** Answered `D-118` — **fixed in this pass, and it was live.** §5.2 step 1 said *kind `finding`*, the shape `G84` retired, so **a lane following the parent runbook literally would file an entry that can never carry a `Resolution` and would inflate the unresolved backlog** — reproducing the exact defect. Step 1 now requires `Kind: turn-report`, the own-phase rule (`D-106`) and no `Resolution`. **The channel documents, work order and checks already agreed; the boundary runbook was the one that drifted**, which is why nothing caught it — `channel-docs` couples the README, template, work order and workflows spec, and **`V1-PHASE-CLOSURE.md` is not in that set.** **No tally was copied in.**
- **Evidence:** `docs/v1/V1-PHASE-CLOSURE.md` §5.2 step 1; `channel-docs` PASS; `B-043` valid unamended

## What happened

The boundary procedure still instructs the outgoing lane to raise `Kind: finding`. The later
operative channel documents require `Kind: turn-report`, filed against the reporting lane's own
phase and carrying no `Resolution`. `B-043` follows the newer rule, so the actual report is valid;
the parent boundary runbook has drifted.

## Required repair

Lane A should amend §5.2 step 1 to require `Kind: turn-report`, its own-phase rule, and no
`Resolution`. The same pass should confirm the work order, handoff README, template, and channel
check all describe that one shape. No tally should be copied into the phase document.

## Guaranteed failure

An outgoing lane following §5.2 literally files a finding that can never be resolved, inflating
the unresolved backlog and reproducing `G84`.

## Success criteria

- every boundary instruction names `turn-report`;
- the template and checks accept exactly that shape; and
- `B-043` remains valid without amendment.

## What Lane B did instead

Used the newer operative `turn-report` rule and recorded this stale parent instruction for Lane A.
