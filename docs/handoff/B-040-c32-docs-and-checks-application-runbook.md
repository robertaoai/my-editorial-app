# B-040 — Apply approved C-32 framework to documents and checks before product code

- **Raised:** 2026-08-25 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** applying the approved C-32 framework without inventing its remaining business values
- **Status:** Open
- **Lane A:**
- **Resolution:**
- **Verified-By:**
- **Evidence:** `B-039`; `D-117`; `C-32`; `D-54`; `G89`
- **Verified-At-Commit:**

## What happened

The Chief Editor approved the `B-039` framework: retention and archival are business-owned Project
Scope; archival and disposal are external and distinct; the product receives a supplied absence
fact; the policy has precedence, versioning, exceptions, and review events; and the five parked
consumers close independently.

That approval did not provide values that `B-039` deliberately left for decision. Lane A must not
invent them while applying the framework:

- whether the proposed 90-day archival boundary is ratified or replaced;
- the bounded minimum period for each record class;
- the external archive operator/location class;
- archive restoration authority; and
- later disposal authority.

This runbook drafts the governing documents and their controls first. It authorizes no application
code, schema, migration change, archive job, or disposal mechanism. Migration `0002` remains
unconditional and separate.

## Parent-first application sequence

### 1. Record the business decision status before derived text

Lane A records a new register decision only after the Chief Editor supplies the five missing
values. Until then, record the framework as approved and `C-32` as **open on named values**. Do not
write “policy approved” or close any consumer while a placeholder remains.

Use one canonical identifier and version, proposed as:

```text
Policy ID: RET-EDITORIAL
Policy Version: 0.1-provisional
Accountable owner: Chief Editor
Approval status: FRAMEWORK APPROVED; OPERATIVE VALUES PENDING
```

The identifier is a proposed label, not a new product requirement. The Chief Editor may rename it
before propagation; once propagated, one rename must update every reference in the same pass.

### 2. Alpha Portfolio — add the obligation and accountable owner

Add a new subsection after §6.4 in
`docs/governance/alpha-portfolio-business-continuity-implementation-plan.md`:

```markdown
### 6.5 Retention and archival governance — C-32

Retention and archival are Project Scope obligations under PSK-10 and have no Customer Request
anchor. The business owns the policy; the product does not set retention periods or perform
archival or disposal.

The Chief Editor is the accountable policy owner while the business has one natural person. A
future Board assumes approval authority when constituted. External counsel, regulator orders,
contracts, platform duties, active holds, and correction/retraction obligations may require an
amendment or exception.

The operative detail is RET-EDITORIAL version 0.1-provisional in `docs/source/business-case.md`
§Compliance & Governance Disclosures. `docs/source/blueprint.md` A6 records its delivery
interpretation. Approval of the framework does not approve values still marked
CHIEF-EDITOR-DECISION-REQUIRED.
```

Do not restate retention numbers in the Alpha Portfolio. It owns obligation and accountability,
not the detailed schedule.

### 3. Business Case — add the canonical policy detail

Under `docs/source/business-case.md` §Compliance & Governance Disclosures, add this canonical
policy section:

```markdown
### RET-EDITORIAL 0.1-provisional — Retention, Archival, and Explainable Absence

**Status:** Framework approved; operative values marked
`CHIEF-EDITOR-DECISION-REQUIRED` are not yet approved.

**Accountable owner:** Chief Editor. A future Board assumes approval authority when constituted.
The policy is reviewed at least annually and immediately on first external-counsel engagement,
jurisdiction change, regulator order, new customer contract, POC payment activation, or material
platform-rule change.

**Definitions**

- Current set: records available to the live editorial correction/retraction workflow.
- Archived: moved out of the current set by an external process, still retrievable with its audit
  relationships intact. Archival is not deletion.
- Disposed: irreversibly removed by an authorized external process with evidence retained according
  to the governing policy. V1 performs no disposal.
- Queue cleanup: removal from an active work queue. It is not archival unless a governed archive
  move is also recorded.

| Record class | Current-set rule | Archive trigger | Minimum retained period | Disposal authority |
|---|---|---|---|---|
| Published editorial records and correction/retraction evidence | Remain current while correction or retraction must remain possible | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` |
| Rejected, abandoned, and unpublished editorial work | `CHIEF-EDITOR-DECISION-REQUIRED` | Ratify or replace the proposed 90 days and name its start event | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` |
| Append-only transitions, reports, publication targets, and publication events | Remain linked to their originating editorial record | Follow the originating record without breaking the chain | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` |
| Sources and personal data supporting editorial work | Limited to the approved editorial and evidential purpose | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` | `CHIEF-EDITOR-DECISION-REQUIRED` |
| POC payment-confirmation/commercial records | Outside the v1 editorial migration; governed before commercial activation | Deferred to the commercial policy | Deferred | Deferred |

The policy does not characterize editorial records as financial or accounting records merely to
borrow a statutory period. If a five-year floor is selected without identified legal authority,
it is labelled a house-policy risk control and is reviewed when counsel becomes available.

**External archive control**

- Operator/location class: `CHIEF-EDITOR-DECISION-REQUIRED`.
- Retrieval authority: `CHIEF-EDITOR-DECISION-REQUIRED`.
- Restoration authority: `CHIEF-EDITOR-DECISION-REQUIRED`.
- Integrity requirement: preserve article, transition, report, source, and publication links.

**Supplied absence fact**

An external archival or disposal act supplies: affected record or period identifier; archived or
disposed classification; effective timestamp; actor and authority; reason; policy ID and version;
archive reference and retrievability when archived; and disposal-evidence reference when disposed.

**Precedence and holds**

Law, regulator orders, contracts, platform duties, active disputes, legal or regulatory holds,
whistleblower protection, warranty obligations, and correction/retraction duties override the
ordinary schedule. An override is recorded with authority, reason, affected scope, start time, and
review/expiry event.
```

This section is the sole home of detailed periods. Other tiers cite it instead of copying values.

### 4. Blueprint A6 — replace assumptions with a reference and reconcile cleanup

Update every current-value A6/D8/G1 retention row in `docs/source/blueprint.md` so that:

- A6 points to `RET-EDITORIAL 0.1-provisional` rather than restating a period;
- its ratification status remains pending while the Business Case contains any
  `CHIEF-EDITOR-DECISION-REQUIRED` marker;
- the 48-hour and seven-day stale-intake actions are labelled **queue cleanup**, not archival,
  unless they also produce the governed external archive fact;
- the Week 4–6 row says external archive integration is deferred and is not v1 product behavior;
  and
- historical D8/G1 rows point to A6 and are not treated as separate policy sources.

Proposed A6 wording:

```markdown
| A6 | Retention and archival | Governed by RET-EDITORIAL 0.1-provisional. Archival is an external, retrievable move; disposal is separate and absent from v1. Operative periods remain pending wherever the policy marks `CHIEF-EDITOR-DECISION-REQUIRED`. | Framework approved; values pending |
```

### 5. Re-evaluate the five consumers without auto-closing them

After the policy contains no placeholders, inspect each item separately:

| Item | Closure evidence |
|---|---|
| `NFR-02` | Names `RET-EDITORIAL` and states the applicable bounded rule without copying its period |
| `AC-12a` | Tests archived/disposed classification, timestamp, reason, and policy version for absent current data |
| `G40` | `NFR-08` is explicitly bounded to records retained under the governing policy |
| `G88` | The supplied absence fact has a named external source and complete semantic fields |
| `G41` | UI behavior distinguishes no activity, archived, disposed, unavailable, and retrieval-pending outcomes |

`G89` is separate: verify `AC-12a` has its creating decision and parent in `Modular_PRD`. Closing
`C-32` is not evidence that this tier-control gap closed.

### 6. Add a structural coupling check on Lane A's surface

Create `scripts/checks/retention-policy-coupling.mjs` and add it to
`scripts/check-consistency.mjs`. The check reads structure, not legal correctness. It must fail on:

1. a missing `RET-EDITORIAL` section in any required tier;
2. different policy IDs or versions across the Alpha Portfolio, Business Case, Blueprint,
   register, and the five consumers once activated;
3. `C-32` or a consumer marked closed while `CHIEF-EDITOR-DECISION-REQUIRED` remains;
4. “archive” defined as delete/dispose or marked non-retrievable;
5. a numeric period copied into the Alpha Portfolio or Blueprint instead of cited from the
   Business Case;
6. the Blueprint's 48-hour/seven-day cleanup described as governed archival without a supplied
   archive fact;
7. `0002`, a migration, or an S1 gate naming `C-32` as a dependency; and
8. `AC-12a` present without a creating decision/parent, preserving `G89`'s direction.

It must deliberately not decide whether a period is legally sufficient. A parser cannot perform
legal judgment, and a check that pretends it can is worse than no check.

### 7. Add negative fixtures before believing the check

Extend `scripts/fixtures/suites.mjs` with positive control plus fixtures for every failure above.
Each fixture asserts the exact finding, restores the changed files, and uses no scratchpad-only
evidence. Update `V1-ARTIFACT-INVENTORY.md` for the new check and fixture suite; record the decision
in the register and state Build Spec/Modular PRD applicability under `D-54`.

### 8. Extend tier mapping only where the decision declares those tiers

`tier-sweep.mjs` maps the Alpha Portfolio but not the Business Case or Blueprint. If the new
decision's applicability table names those documents as columns, add exact mappings:

```text
business case -> docs/source/business-case.md
blueprint -> docs/source/blueprint.md
```

Do not map a label never used by a tier table merely to increase coverage. `source-sweep` remains
the inverse/history signal for living governing documents.

### 9. Verification and Graphify sequence

After the Chief Editor supplies the values and Lane A applies the packet:

1. run the new negative fixtures;
2. run the full consistency suite with full git history;
3. commit the document/script decision set;
4. run Graphify update against the committed HEAD;
5. re-merge curated fragments using `docs/graph-fragments/merge7.js` semantics;
6. confirm `branch.json.lastAnalyzedHead` equals Git HEAD and `stale` is false;
7. run `graphify portable-check .graphify`; and
8. do not propose graph artifacts for commit until portability passes or every remaining issue is
   explicitly excluded as untracked runtime output under an approved rule.

## Guaranteed failure

- The framework is called approved policy while operative values remain placeholders.
- Lane A chooses periods or archive operators on behalf of the business.
- Numbers are copied across tiers and drift independently.
- Queue cleanup is mistaken for governed archival.
- A structural check claims legal sufficiency.
- `C-32` closes all five consumers without their own evidence.
- Graphify is called synchronized because HEAD matches while semantic enrichment or portability is
  still failing.

## Success criteria

- the Chief Editor supplies every named business value;
- one versioned policy detail exists in the Business Case and other tiers cite it;
- no `CHIEF-EDITOR-DECISION-REQUIRED` marker remains at closure;
- the five consumers are individually dispositioned;
- the coupling check fails on every tracked defect shape and passes the approved corpus;
- no product, schema, or migration work is added by the policy pass;
- all governing-source changes are recorded through the register; and
- Graphify is semantically current and portable before graph artifacts are proposed.

## What Lane B did instead

Drafted this complete Lane A application runbook in the handoff channel. Lane B did not edit Lane
A's documents or scripts and did not change application code, schema, migration `0001`, or
migration `0002`.

---
