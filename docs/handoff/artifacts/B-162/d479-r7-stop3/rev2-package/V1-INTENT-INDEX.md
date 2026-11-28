# V1 Intent Index

**Status:** Recorded by `D-479` items 6 and 9 (Register §5.14e302, decided 2026-11-07). This file is the read-first navigation map for V1 slot work. It grants no build authority: selection, a work order and the `Active` lane are still required (`D-183`, `D-186`). Where this file and a governed source differ, the source decides (`D-58`).

## 1. Lexicon

| Term | Meaning |
|---|---|
| MMF | Minimum Marketable Feature: a small, self-contained feature that can be developed quickly and that delivers significant value to the user (Agile Alliance glossary). Not an MVP. Each MMF states a benefit hypothesis (`D-479` item 1). |
| Enabler | Work that makes MMFs possible or releasable, with no direct user value of its own (SAFe term). |
| IP iteration | Innovation and Planning iteration: a buffer iteration with no feature work and no feature DoD (SAFe). |
| Slot | A live V1 sprint label, `V1-SM05` to `V1-SM09` (`D-479` item 6). `SM` is an opaque label (`B-117:1409`). Bare `SM05-*` and `SM06-*` IDs are historical and name no slot. |
| Dated record | A record dated before `D-479` that says `V1-SM05` or `V1-SM06` means the binding then in force: `V1-SM05` = the `FR-15` evidence slice, now `V1-SM07`; `V1-SM06` = board and `ManualReady` (`D-479` item 6). |
| `EG1` to `EG5`, Delivery | The editorial nodes of `FN-GATES-01-05.md` §11. The UI uses these names (`D-479` item 4). |
| `T*` | Internal process transitions. Never shown in the UI or in human-facing text (`D-479` item 4). |
| Manual publish | At the Delivery node, the Chief Editor enters and confirms the live LinkedIn post URL for a target that holds a `ManualReady` event (`FR-10`, LinkedIn only, `D-479` item 7). |
| `TASKS-S1` to `S4` | Historical provenance only: the four sprints in `docs/TASKS.md`, which is not authoritative (`D5`). |
| `PRD-S0` to `S6` | The sprint rows in `docs/Modular_PRD.md` §8.1. Different content from `TASKS-S*`. |

## 2. Read order for a builder

The authority order in `AGENTS.md` "Before any work" governs. This file is read first for navigation only; it adds no authority and changes none of that order.

1. This file, to find your slot.
2. `docs/v1/V1-BUILD-SPEC.md` and the Register, as `AGENTS.md` requires. In the Register, read `D-479` and each decision named in your row.
3. Your slot's governed packet, `docs/v1/work-packets/V1/<slot>.md`. `V1-SM08` and `V1-SM09` have no packet file yet.
4. The universal DoR and DoD: `docs/handoff/B-117-open-backlog-aging-and-refinement-closure.md`, lines 240–277 at `4e54628` (`D-479` item 2). Your packet's DoR and DoD fill those rows and add the benefit hypothesis.
5. The fn-spec sections named in your row.

## 3. Index

| Slot | MMF | Status | User outcome | PRD V1 bullet | `TASKS.md` (historical provenance) | FR | AC | Fn-spec |
|---|---|---|---|---|---|---|---|---|
| `V1-SM05` | `MMF-V1-PIPELINE` | Not started; not selected; DoR not written | Paste a source. See it on the board by state. Move it through `EG1` to `EG5` on `ROUTE-PROD-1`; each move is logged. The Chief Editor makes the final decision at `EG5`. Return it with a reason. | Log article; five-gate pipeline; every transition logged; approval; board (state) | `TASKS-S1` DoD | FR-01, FR-02, FR-03, FR-04a (`ROUTE-PROD-1`), FR-05a, FR-06, FR-07, FR-08 (state) | AC-01 to AC-04, AC-05a, AC-06a, AC-07a, AC-09 to AC-12, AC-13 (state), AC-22, AC-NF-01, AC-NF-02, AC-NF-05 | `FN-GATES-01-05` §11; `FN-EXCEPTIONS-06-11-12`; `FN-AUDIT-VISIBILITY-07-08` |
| `V1-SM06` | `MMF-V1-PUBLISH` | Not started; not selected | Delivery: after the `EG5` final decision (article `Approved`), the article's LinkedIn target becomes eligible for `ManualReady`. `ROLE-SENIOR-JOURNALIST` is the sole requester, and readiness binds to the exact accepted content. The Chief Editor posts it and enters the live LinkedIn URL. A valid URL writes one `Published` event for that target; if this is the article's first live target, the article becomes `Published` in the same transaction. Filter by topic and category. Read the audit view. | Publish or mark LinkedIn-ready; board filters | `TASKS-S2` DoD, less WordPress (`D-243`) and less generated AI tagging (`D-194`) | FR-08, FR-09 (LinkedIn), FR-10 (LinkedIn) | AC-13, AC-14a, AC-16; `D-250` as amended by `D-479` item 7 | `FN-PUBLICATION-09-10-13` §4.2, §12 |
| `V1-SM07` | `MMF-V1-CORE` (identity kept) | `BLOCKED` (packet status, `D-434`); not selected | Record newsdesk ranking and routing evidence for each commission | None (enrichment) | None | FR-15 | AC-23 to AC-26 | `FN-GATES-01-05` (FR-15 part) |
| `V1-SM08` | `ENB-V1-RELEASE` (enabler, not an MMF) | Planned enabler work packet; no packet file yet | V1 runs on hosted Supabase, Phase 3 CI is in place, and the PRD success criteria are measured. | Success Criteria | None | NFR-01, NFR-02, NFR-04, NFR-07 | AC-NF-01 to AC-NF-05; receipts `SM06-P3-01` to `SM06-P3-06` (`D-479` item 8) | `SPECS-VERIFICATION-APPARATUS` |
| `V1-SM09` | IP iteration (no MMF, no feature DoD) | Planned; no packet file yet | Buffer, V1 inspect and adapt, freeze decision (`D-203`), V2 backlog ranking | None | None | None | None | None |

## 4. Retired or outside V1

| Item | Disposition |
|---|---|
| `MMF-V1-USABLE` | Retired (`D-479` item 6). Its board content moves to `V1-SM05`; its `ManualReady` content moves to `V1-SM06`. |
| Automated WordPress publication, retry and credentials | V2 target (`D-243`), unchanged. `FR-10` enters V1 for the LinkedIn target only (`D-479` item 3). |
| Generated AI tagging at the Reporter gate | Stays `PBL-11` (`D-194`, `D-479` item 3). V1 keeps the manual contract. |
| FR-11, FR-12, FR-13, FR-14 | Outside V1, unchanged. |
| `TASKS-S3` (auth lock-down), `TASKS-S4` (insights) | Historical provenance; outside V1. The PRD has a single account and no login wall. |

## 5. Decisions

| Decision | State |
|---|---|
| MMF means Minimum Marketable Feature; `B071-R76` closed | Recorded, `D-479` item 1 |
| Universal DoR and DoD from `B-117` | Recorded, `D-479` item 2 |
| `D-232` mapping and `D-260` item 1 boundary superseded; `MMF-V1-USABLE` retired; slots `V1-SM05` to `V1-SM09` | Recorded, `D-479` item 6 |
| `D-171` released for the `EG` catalog contract on `ROUTE-PROD-1` | Recorded, `D-479` item 5 |
| `D-243` and `D-250` amended: `FR-10` LinkedIn manual publish in V1; the LinkedIn target becomes eligible for `ManualReady` after the `EG5` final decision | Recorded, `D-479` items 3 and 7 |
| Phase 3 CI and the hosted migration move to `V1-SM08` | Recorded, `D-479` item 8 |
| The separately accepted baseline-promotion PR is `V1-SM08`'s entry prerequisite | `D-486` |
| Normalise the `business:T*` stages (`FR-15`) | Pending: needed before the `V1-SM07` DoR (`D-479` item 4) |
| Lift the `V1-SM07` `BLOCKED` packet status (`D-434`) | Pending: needed before the `V1-SM07` DoR |
| Select a slot, write its DoR, issue its work order | Pending: `D-479` selects no slot |
