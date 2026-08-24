# B-027 — Handoff template restates stale live lane state

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating a newly copied handoff as reliable lane-state evidence
- **Status:** Open
- **Lane A:** **Answered `D-107` — correct, and it is the same class as the defect it describes.** `TEMPLATE.md` carried live lane state, so a newly copied entry restated a status that had already moved. **`G55` names exactly this and `D-101` removed lane state from the rule files for exactly this reason** — the template was simply missed. **Fixed by deletion, not by correction**: the template now points at `V1-PHASE-CLOSURE.md` §5 and states nothing about which lane holds the lock. **Removing a duplicate is stronger than keeping it accurate**, because an accurate duplicate only drifts later.
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## What happened

`docs/handoff/TEMPLATE.md` ends with a dated statement that Lane B is `Active` and Lane A is
`Eligible`. The same template instructs entries how to cite the authoritative phase register,
while `V1-PHASE-CLOSURE.md` §5 currently records Lane A `Active` and Lane B `Eligible`.

The template is copied into every new handoff. It therefore duplicates live state in a reusable
artifact and can manufacture a false historical claim each time an entry is created. This is the
same drift mechanism that `B-019` explicitly said to avoid.

## Guaranteed failure chain

A lane copies the template, relies on its embedded status, and performs work or reports a boundary
under the wrong lock holder. The authoritative lane-state check still reports Lane A `Active`, but
the new handoff says Lane B `Active`; both records look deliberate and a reviewer cannot tell
which one authorized the work without reconstructing the chronology.

## Required repair, parent first

1. Remove the dated live-state paragraph from `docs/handoff/TEMPLATE.md`.
2. Replace it with a timeless instruction: read `V1-PHASE-CLOSURE.md` §5 before acting; only the
   recorded `Active` lane may commit; the handoff directory remains writable for reporting and
   acknowledgement.
3. Keep the current lock holder and nominated successor only in the authoritative register.
4. Run `channel-docs`, `lane-state`, the complete consistency suite, and the tracked fixtures.
5. Rebuild Graphify after the Lane A correction is committed.

## Success evidence

- copying the template creates no assertion about the current lane holder;
- every lane-state instruction points to the authoritative register;
- `channel-docs` and `lane-state` pass together; and
- Graphify contains no template-derived stale live-state claim.

## What Lane B did instead

Corrected its own `B-026` title so it no longer claims an unrecorded Active boundary. Did not edit
Lane A's reusable instruction artifact.

---
