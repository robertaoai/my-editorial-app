# B-126 — SM05 phantom existing-Issue blocker

- **Raised:** 2026-09-23 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** truthful B-125 disposition and selection of the correct Parent-4 GitHub Issue workflow
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** user-supplied GitHub Issues screenshot dated 2026-09-23; `D-254`; `docs/handoff/B-125`; repository HEAD `4f0751c`
- **Verified-At-Commit:** 4f0751c57dca2e77ce32ec0cb58bd499b4d48658

## What happened

Lane B reviewed Lane C's post-`D-254` worklog and the user-supplied screenshot of the GitHub Issues
page for `robertaoai/my-editorial-app`. The screenshot currently shows zero open and zero closed
Issues. It therefore provides no existing V1-SM05 Issue to remediate and contradicts B-125's active
SM05-specific assumption that the Judge must supply an existing Issue number or URL.

This finding is deliberately narrower than `D-254`. `D-254`'s exceptional remediation rule remains
valid as a general rule for any Issue actually created before DoR closes. The evidence only says
that the exceptional path is not currently applicable to V1-SM05. It does not prove an unlimited
historical claim that no Issue ever existed, and it does not predict the number GitHub will assign
to the future Issue.

Parent 1 is complete at `4f0751c`: Lane A recorded `D-254` and propagated it under `D-54`. Repository,
upstream and Graphify metadata agreed at that commit when this entry was raised. The Antigravity
`implementation_plan.md` and `walkthrough.md` cited in Lane C's worklog are external scratch files;
they are not canonical governance and do not prove that the governed `DOR-R5` walkthrough occurred.

## What you need

### Parent 1 — verify and correct the handoff record

1. Independently verify the repository's current GitHub Issue list.
2. If it still contains no open or closed Issue, update B-125 in place:
   - remove remediation of an existing Issue from `Blocks`;
   - remove the existing-Issue number/URL from its outstanding-input list;
   - replace Parent 4 with normal post-DoR creation of one V1-SM05 Issue;
   - retain `D-254`'s generic exceptional-remediation rule without applying it to SM05;
   - do not predict the Issue number; record the identifier and URL GitHub assigns after creation.
3. If independent verification finds an Issue that the screenshot did not show, record its exact URL
   and return to `D-254`'s exceptional remediation path. Do not create a duplicate.

### Parent 2 — complete pre-start readiness

After the record correction, continue the existing readiness sequence without treating external
scratch files as evidence:

1. Record the five operator facts in B-119 without changing the hash-anchored receipts. An
   `UNRECOVERABLE — <reason>` value records an evidence gap and requires an explicit Judge exception
   before compatibility readiness can be accepted.
2. Apply the governed compatibility text, update B-120 by citation and close B-124 only when the
   evidence or exception exists.
3. Complete `DOR-R5` with the authoritative normal/revision wireflow and matching data flow, the
   actual Chief Editor walkthrough, and dispositioned Lane B/C feasibility feedback.
4. Complete `DOR-R6` through hosted comparison of Entries 01, 05 and 06 or an explicit Judge
   opt-in deferral.
5. Confirm all applicable DoR criteria are accepted and the DoD is defined and testable but remains
   unchecked before construction.

### Parent 3 — publish Pass 1

Commit the readiness corrections on `docs/journal-2026-08-16`, rebuild and re-merge Graphify, run
the complete consistency suite to completion, then obtain explicit authority to push and verify the
remote base tip.

### Parent 4 — normal Issue creation

Create the V1-SM05 GitHub Issue from the accepted DoR package and defined DoD. Record the exact
number and URL assigned by GitHub. No existing-Issue remediation step is required unless Parent 1's
independent check finds contrary evidence.

### Parent 5 — non-empty State-1 branch

Create `features/feature-V1-SM05` from the verified pushed base tip. On that branch, propagate the
assigned Issue identity to the Register, Artifact Inventory and V1-SM05 packet and add the State-1
readiness presentation. Commit the documentation-only delta, rebuild/re-merge Graphify, run the
complete consistency suite, then obtain authority to push and open the draft PR.

### Parent 6 — selection and construction

Judge selection, the bounded Lane A work order and the lane transfer must precede Lane B's State-2
construction. All applicable DoD criteria must pass before acceptance and Squash and Merge; B-122
is the controlling handoff citation for the integration mode.

## What Lane B did instead

Lane B recorded the corrected boundary and stopped. No B-125 status field, canonical Lane A source,
external scratch artifact, application file, migration, GitHub Issue, branch, remote or PR was
changed. No Graphify rebuild was required for this handoff-only entry.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-254` and the two-pass architecture | Parent 1 complete; preserve through Parents 2–6 |
| **Approve-with-conditions** | Normal V1-SM05 Issue creation | After accepted DoR and independent confirmation that no Issue exists |
| **Approve-with-conditions** | Operator evidence, `DOR-R5` and `DOR-R6` | Complete the governed evidence, walkthrough/review and comparison/deferral |
| **Defer** | Pass-1 push, feature branch, State-1 PR and construction | Their named evidence and authorities remain outstanding |
| **Reject** | Requiring an existing V1-SM05 Issue URL on the present evidence | Verify and remove the phantom blocker from B-125 |
| **Reject** | Predicting the future Issue number | Record GitHub's assigned identifier after creation |
| **Reject** | Treating Antigravity scratch files as canonical governance or R5 evidence | Use repository-owned evidence and the governed review |
| **Reject** | Editing B-125 from Lane B or opening a duplicate Issue | Lane A owns the status correction; preserve one-Issue sequencing |
