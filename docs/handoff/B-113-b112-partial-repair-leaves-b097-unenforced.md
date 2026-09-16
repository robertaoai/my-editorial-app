# B-113 — B-112 partial repair leaves B-097 unenforced and its evidence stale

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent verification of B-112 and B-097; B-103 P3 and whole-entry closure
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** independent review at `9afbb9be229d03c6e47841f0dc48d51b7372706c`; `bun run fixtures` 118/118 with the tree restored; `bun run check` with every control passing except `docs-drift`; `.graphify/branch.json` analyzed at `d80167b8434ca9c67c25a5eff21a55fad1e93f4d`; B-112 header and Lane A response; B-097 minimum correction packet
- **Verified-At-Commit:** 9afbb9be229d03c6e47841f0dc48d51b7372706c

## What happened

Lane A correctly accepted B-112's central finding, fixed the broken audit-only classifier and made
`terminal-return` report-only. The corrected fixtures pass. This safely removes the false blocking
gate, but it does not complete the contract B-097 required and it does not yet provide evidence
that can be independently verified as one complete packet.

Four residual gaps remain:

1. **B-097's prevention control is no longer enforced.** Its minimum packet requires channel checks
   to reject terminal files carrying unreturned live work. `terminal-return` now always returns an
   empty `findings` array. This is a safe interim state, but it is reporting, not prevention.
2. **Six candidates remain unclassified:** `B-004`, `B-008`, `B-017`, `B-046`, `B-103`, `C-001`.
   Their presence is not itself failure; leaving the semantic distinction undecided means B-097
   cannot claim the promised reject/pass boundary.
3. **Multi-cycle history is still unsupported.** An old Return record exempts a file forever, so a
   later close→edit cycle can pass without its own return. B-112 identified this and Lane A accepted
   it as real, but deferred it.
4. **The applied evidence is not pinned to the applied packet.** B-112's Lane A answer still says
   `<pending commit>`, while `Verified-At-Commit` remains `980d8d1`, the commit before Lane A's
   correction. The final correction spans `d80167b` and fixture repair `9afbb9b`. Graphify was
   analyzed at `d80167b`; the later change to `scripts/fixtures/suites.mjs` makes `docs-drift` fail.

No Product or editorial requirement changed. This is a lifecycle-control and evidence defect.

## Parent-first decision table

| Order | Decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | What is B-097's final prevention boundary? | Chief Editor selects Option A or B below | Leave the packet simultaneously described as enforced and report-only | One explicit Judge act, recorded in B-097/B-112 without a second owner |
| 2 | Is the application evidence exact? | Replace `<pending commit>` and pin the final applied commit | Cite `980d8d1`, which contains none of the correction | B-112 names `9afbb9b` or the later single completion commit actually reviewed |
| 3 | Is the history model complete enough for the selected option? | Option A: model terminal annotations and repeated cycles; Option B: remove the unearned enforcement claim | Treat a report-only candidate list as a reject-capable gate | Fixtures match the selected contract, including a second cycle |
| 4 | Is Graphify current? | Rebuild after the final scripts change and preserve curated fragments | Rely on `stale: false` while `lastAnalyzedHead != HEAD` | `lastAnalyzedHead == HEAD`, portable check passes, full consistency suite passes |
| 5 | Can Lane B verify? | Read the final artifacts and rerun both suites at one commit | Self-promote from `Applied`, or verify only the fixtures | B-112 then B-097 independently `Verified`; B-103 P3 may proceed afterward |

## Chief Editor choice required

### Option A — complete the enforceable contract (recommended)

Adopt a bounded terminal-annotation record and make the history check blocking again:

```markdown
## Terminal annotation record

- **Current-Resolution:** <existing terminal resolution, unchanged>
- **Annotation-Type:** audit-normalization | verification-evidence | cross-reference | correction
- **Annotation-Act:** <decision, finding or correction act; date and source locus>
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** <existing commit whose state was read>
```

The lifecycle algorithm then walks commits chronologically:

1. A terminal disposition starts one terminal episode.
2. Audit-only header normalization is allowed mechanically.
3. Other content added during that episode must introduce, in the same commit, either:
   - a valid Return record and `Status: Open`; or
   - a valid Terminal annotation record while preserving the terminal header.
4. A later terminal disposition starts a new episode. An older Return or annotation record cannot
   exempt later edits.
5. The check fails a B-071-shaped unreturned round and passes the B-103 correction/C-001
   cross-reference only after their non-return classification is recorded honestly.

Required fixtures: audit-only normalization; bounded correction; verification note; cross-reference;
genuine resumed scope; missing annotation act; false `No-Scope-Reopened`; and a second unreturned
cycle despite an older Return record.

### Option B — narrow B-097 to form validation and advisory detection

Keep `terminal-return` report-only, but explicitly amend B-097's claimed completion boundary:

- SOP and `handoff-response` enforce the form of a declared return.
- `terminal-return` produces candidates for human review and is not a prevention gate.
- Multi-cycle detection and terminal-annotation vocabulary become a named backlog item.
- B-097 cannot claim that the repository automatically rejects all terminal-plus-live-content
  cases.

This option is smaller, but it accepts that B-071 recurrence is detected only by human review.

## Lane A follow-up

1. Record the Chief Editor's Option A or B decision in this existing chain; do not create a second
   return-protocol owner.
2. Replace B-112's `<pending commit>` and advance its audit anchor to the exact final applied commit.
3. Align B-097's completion claims, fixtures and detector behavior with the selected option.
4. Resolve or explicitly classify the six report-only candidates without fabricating Return acts.
5. Rebuild Graphify after the final scripts edit and re-merge curated fragments if required.
6. Run `bun run check`, `bun run fixtures`, and the portable Graphify check.
7. Return the final packet to Lane B for independent verification. Only then may B-103 P3 resume.

## Cross-artifact disposition

| Artifact | Result |
|---|---|
| `docs/Modular_PRD.md` | Unaffected — no Product behavior or acceptance requirement changes |
| Storyboard and story panels | Unaffected — editorial user journeys do not model handoff-file lifecycle annotations |
| UML and data flow | Unaffected — no application state, event or stored-data shape changes |
| Requirements traceability | Unaffected — this remains Project-Scope verification control work |
| Encyclopedia | Unaffected — Entry 05's D-168 staleness remains separate |
| Graphify | **Sync required after the final correction** — current analyzed head is one governed-intent commit behind |

## Failure-derived success criteria

| Guaranteed failure if unchanged | Required evidence of success |
|---|---|
| B-097 says unreturned work is rejected while the check can never fail | Detector behavior and B-097 claim express the same selected boundary |
| A later terminal cycle inherits an old exemption | Multi-cycle fixture fails, or Option B openly defers this capability |
| Lane B verifies a commit that predates the applied fix | B-112 audit fields cite the exact final packet commit |
| Green fixtures are treated as a green repository | Full consistency suite passes, including `docs-drift` |
| Graph state claims current while its analyzed commit differs from HEAD | Graph branch record matches HEAD and portable check passes |

## What you did instead

Independently reviewed the two Lane A commits, ran the full consistency suite and all fixtures,
and kept B-112/B-097 at `Applied`. Did not invent Return records, modify Lane A's checks, change
Product artifacts, rebuild Graphify out of lane, or close B-103 P3.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Audit-only classifier correction and report-only safety fallback | Phase 1 — applied and fixture-verified |
| Approve-with-conditions | B-112 correction | Phase 1 — exact audit anchor, selected semantic boundary and Graphify sync |
| Reject | Independent verification of B-097 at `9afbb9b` | Its promised prevention boundary is not currently enforced |
| Defer | Six candidate classifications and multi-cycle enforcement | Chief Editor Option A/B decision |
| Defer | B-103 P3 and whole-entry closure | After B-112 and B-097 are independently Verified |
