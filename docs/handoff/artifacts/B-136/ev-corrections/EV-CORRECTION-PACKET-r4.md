# EV correction packet r4 — Business Charter policy (JE1 received), release-feedback record, PRD navigation, document control

**Answers:** Lane B `8842c1a` (JE1 clarification and release-evidence plan). **Status:** design draft for Lane B review;
not applied. **Observed at:** `8842c1a`. **Kept unchanged:** r3 `2a1d73a7…`, r2 `bbbacadc…`, r1 `e47d1c27…`.
**Proposed act:** `D-439`. At `8842c1a` it is referenced only by Lane A's EV records (B-136 answer `65e0bed`; EV packet r1), which commit it to this act; ownership is re-checked by exact line at recording. Recorded and applied only
**after `D-438`'s separate health record**, under its own bounded act and guarded cycle. `D-437` stays promised.

**Pins (blob, `--no-filters`, at `8842c1a`):** `docs/Modular_PRD.md` `8dcaedc8…`; `docs/source/README.md` `ba7b0db3…`;
`docs/governance/requirements-traceability-map.md` `53fcb80e2f4d17807f8061bcc93d29c0f6401dde`.

## 0. Authority — JE1 is decided; no R/G choice remains

**The Judge, verbatim (2026-10-15, recorded by Lane B at B-136 `8842c1a`):**
> Project Charter is setup for V1 and hence implies there is a Business Charter built inside Project Charter; since Business Charter had not been provided explicitly the project can request yet not a requirement ; hence survival of the fitness of what is validated on release will be the progressive inclusion into the Busines Charter at each release cycle;

**Lane A's reading (for review):**
1. The Project Charter's business-intent content (Problem, For, workflow, weekly success, users, benefits) is the V1
   starting point. It is the **frozen** Project Charter; it is not edited.
2. A separate Business Charter **has not been supplied**. The project may request it; it is **not required**, and its
   absence alone blocks no release. The missing upstream remains a limit on verifying `PRD.md`'s derivation.
3. At each release, approved business criteria are assessed against evidence from the **delivered** scope. Conclusions the
   Chief Editor accepts are added, release by release, to a **cumulative Business Charter record** (§3). Failed and
   unmeasured results are kept. A test pass or a release does not change any baseline by itself.
4. The **exit strategy** is a separate condition. It stays a production go-live condition (`DEP-09`), **Open**.

## 1. EV-1 — Business Charter wording (r4; replaces r3 E1–E3)

**E1 — Modular_PRD §9.4, old (exact):** `- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)`
**New:** `- Business Charter — **may be requested, not required** (\`D-NNN\`, \`FB-07\`). V1 starts from the business intent in the Project Charter; accepted release conclusions are added to the cumulative record in \`requirements-traceability-map.md\` §7.1. Its absence alone blocks no release. *Corrected {DATE} (\`D-NNN\`): earlier a required checklist item.*`

**E2 — Modular_PRD §7.5, old (exact):** `` | `DEP-09` | **Business Charter and exit strategy** | ``
**New:** `` | `DEP-09` | **Exit strategy** *(the Business Charter component: may be requested, not required — `D-NNN`, {DATE}; see §9.4)* | ``
Rest of the row (Governance, Chief Editor, "Production go-live only", **Open**) unchanged.

**E3 — source/README "Gaps still outstanding", old (exact, two lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0; both are required
before a production go-live decision.
```
**New (four lines):**
```
do not conflate them) and an **exit strategy**. Neither blocks Phase 0. The **exit strategy** is required
before a production go-live decision (`DEP-09`). The Business Charter may be requested and is not required
(`D-NNN`): V1 starts from the business intent in the Project Charter, and accepted release conclusions are added
to the cumulative record (`../governance/requirements-traceability-map.md` §7.1).
```

## 2. EV-2 and EV-3 — unchanged from r3

- **E4** (source/README "Related": `PRD.md` as the frozen governing baseline, apart from the scaffold plan pack): as r3.
- **E6** (Modular_PRD `Last Updated` with the Register pointer list; Version and §0.1 unchanged): as r3.
- **E5, E7:** withdrawn (r3). The R/G question is gone; there is no Option G text.

## 3. EV-4 — cumulative Business Charter record and release-feedback record (new)

**Destination (canonical):** a new subsection **§7.1 "Business Charter record — cumulative, by release"** in
`docs/governance/requirements-traceability-map.md`, inside §7 (Customer feedback register, where `FB-07` lives). No new
file. Reason: the map already holds the customer/project boundary, the Business Charter section and `FB-07`; release
conclusions return to the customer through the same route.

**Phase split.** §7.1 holds **Phase 1 intent**: accepted business conclusions. The **Phase 2 evidence** stays where each
release keeps it today (the release's work packet, its feature-run records such as `V1-SM05-FV-001`, and the acceptance
harness runs, `scripts/acceptance/`, P22). §7.1 links to that evidence; it does not copy it.

**Release-feedback record (one row per business criterion per release):**

| Field | Content |
|---|---|
| `BCR-<release>-<n>` | Row ID, e.g. `BCR-V1-SM05-1`; never reused |
| Release and approved scope | Release ID (the work packet, e.g. `V1-SM05`) and the Register act that accepted its DoD |
| Business claim and source | The business statement and its anchor (Project Charter line, `CR-xx`, `FR-xx`/`AC-xx`) |
| Criterion | The measurable test of that claim for this release |
| Evidence | Path and commit of the release evidence (feature-run record, acceptance-harness run) |
| Result | `met`, `not met` or `not measured` — all kept |
| Limits | What the evidence does not show |
| Chief Editor disposition | `accepted`, `rejected` or `deferred`, with date and the Register act or quote |
| Incorporation | `input pending incorporation` until accepted; then `incorporated in §7.1 v<k>` |
| Next action | Owner and trigger, or `none` |

**Version rules for §7.1.** Rows are append-only. A later finding never edits an earlier row; it adds a new row that names
the row it supersedes. Each release adds one dated block. Until the Chief Editor accepts a row, it is labelled
**Business Charter input pending incorporation**, never as an updated Business Charter. A passing test changes nothing
by itself. The block's version is the release ID plus the date of the Chief Editor's disposition.

**E8 — map, end of "On the Business Charter", old (exact):**
`That limitation is recorded and accepted. It blocks nothing. Logged as **FB-07**, reclassified from Gap to **Recommendation**.`
**New:** the same sentence, then on a new paragraph:
`**Judge direction, {DATE} (\`D-NNN\`):** the Project Charter carries the V1 business intent; a separate Business Charter may be requested and is not required; validated release conclusions are added to the cumulative record in §7.1 at each release cycle.`

**E9 — map, `FB-07` row:** append to its first cell, after `this blocks nothing.**`: ` *Policy and cumulative record: \`D-NNN\`, §7.1.*`
(Old text, exact: `**No obligation implied; this blocks nothing.**` — occurs once; verified at application.)

**E10 — map, insert before the line `## 8. Maintenance`:** the §7.1 heading, one paragraph stating the phase split and
version rules above, the field table above, and an empty first block: `*No release has been accepted yet; no row exists.*`

**E11 — map §8 Maintenance, insert after the row starting `| Sprint DoD written |`:**
`| A release's DoD is accepted | Add its release-feedback rows to §7.1 as inputs pending incorporation; record the Chief Editor's disposition per row |`

**Observed:** the map's §9 changelog ends at v1.3 (2026-08-19) although the map changed later; no row is proposed (same
reasoning as EV-3).

## 4. D-54 reassessment (r4; not copied from r3)

| Tier | Disposition and reason |
|---|---|
| **Register** | ✅ `D-439`: records the Judge's JE1 words verbatim, Lane A's reading (§0) and E1–E4, E6, E8–E11 |
| `Modular_PRD.md` | Follow: E1, E2, E6 |
| `source/README.md` | Follow: E3, E4 |
| `requirements-traceability-map.md` | **Affected** (r3 said unaffected): E8–E11 |
| **Build Spec** | Unaffected: no scope, sequence or DoD change. The release-feedback rows record the existing SM05 DoD obligation "the Judge accepts the business outcome" (`D-245`, `D-259`); they add no DoD row, no SM05 entry gate and no new Charter file |
| **Inventory** | Unaffected: no file created, sequenced or retired (§7.1 is a subsection) |
| Work packets (`V1-SM05`, `V1-SM06`) | Unaffected now; each release's evidence stays in its packet |
| Frozen `docs/PRD.md`, Project Charter, `0001` | Unaffected; never edited |
| FN, SPECS, rule files, fragments | Unaffected |
| **Encyclopedia** | Entry 06 (`CR-14`) cites the map's §4 and §7; §7.1 adds no `CR-14` text → **unaffected in substance**, flagged for the act's review. Other entries: no mapped section changes (local map); hosted parity not checked |
| **Graphify** | Governed drift from `D-439`, cleared by its own guarded cycle |

## 5. Application unit (unchanged rules from r3, with r4 scope)

- **Scope:** E1, E2, E6 (Modular_PRD); E3, E4 (source/README); E8–E11 (traceability map). Every old text or anchor exactly
  once at S0; one act commit; one applying commit; E2a/E2b/E5 byte proofs.
- **Helper:** text-bound ownership (`D-438` helper r4 or later), this unit's own pinned ownership manifest, its own
  controls run by a harness that integrates every case before its verdict.
- **Order:** after `D-438`'s health record.
- **Acceptance:** no current clause in the three files states the Business Charter as required; `DEP-09` still names the
  exit strategy as **Open**; source/README lists `PRD.md` apart from the plan pack; §7.1 exists with the field table, the
  rules and no rows; `Last Updated` = act date with the Register pointer list.
