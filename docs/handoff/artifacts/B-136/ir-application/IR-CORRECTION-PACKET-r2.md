# IR correction packet r2 (answers Lane B `63dce74` and `08c648d`: IR-1 to IR-5; IR-3b withdrawn), 2026-10-15

**Status:** final design; recorded in B-136; no source edited. **Observed at:** `08c648d`. r1 is kept unchanged as
`IR-CORRECTION-PACKET-r1-DRAFT.md`. **r2 delta:** IR-3b withdrawn; Inventory-row and Encyclopedia wording qualified;
`Q3`/`Q5` deferral removed. **Applying** these edits needs the
existing bounded route: a Judge act recorded as the next free Register decision (written `D-NNN` below; allocated at
application, not here), then D-54 propagation, a guarded graph sync (`D-425`) and a health record.
**Correction style:** each replacement keeps the old claim as dated history (`*Corrected <date> (D-NNN, B-136 IR-n):*`),
per house style and `D-36`. No `[V1]`/`[V2]` marker changes. No frozen file is touched.

| Target | Pin (last touch) | Section marker |
|---|---|---|
| `docs/Modular_PRD.md` | `b77d186` | prologue; §10 |
| `docs/v1/work-packets/V1/V1-SM05.md` | `29bce67` | header |
| `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` | `a480c97` | §3.1 `[V1]`; §10 `[V1]` |
| `docs/specs/SPECS-PUBLICATION.md` | `0d4fc73` | §2 `[V1]` |
| `docs/v1/V1-ARTIFACT-INVENTORY.md` | `2d7c9bc` | UX route row (L67) |

## IR-1 — authority wording (first; others do not depend on it, but it is the parent rule)

Basis: `D-58` precedence table ("Anything versus `docs/PRD.md` or the Charter → **Frozen documents win**"); `D-29`
hierarchy as restated in `docs/README.md` L18–26 (repaired under B-078).

**IR-1a — Modular_PRD L12, old:**
> **Neither governs the other — they sit on opposite sides of the customer/project boundary.**

**New:**
> **The Project PRD is the frozen customer baseline; this document elaborates it within `D-29`'s hierarchy, and conflicts follow `D-58` (frozen documents win).** *Corrected 2026-10-NN (`D-NNN`, B-136 IR-1): this sentence earlier read "Neither governs the other".*

**IR-1b — Modular_PRD L14, old:** `A difference between the two is therefore never resolved by precedence. It is one of exactly two things:`
**New:** `A difference between the two is one of exactly two things:` (both bullets unchanged).

**IR-1c — Modular_PRD L19, old:** `Resolving a difference by document rank would mean the project team altering the customer's scope without telling them.`
**New:** `A downstream edit never approves a scope change: the frozen baseline stands, and a departure routes to the customer through the sponsor.`
Rest of L19 (traceability map, FB-04, six uncovered items) unchanged.

**IR-1d — Modular_PRD L1181 (§10 `Q8`), old:** `An earlier draft asked which of the two PRDs "governs." That was the wrong question — they sit on opposite sides of the customer/project boundary and neither outranks the other.`
**New:** `An earlier draft asked which of the two PRDs "governs"; `D-29`/`D-58` settle that (see the prologue). *Corrected 2026-10-NN (`D-NNN`).*`
`Q8`'s real question, FB-04, owner and **Open** status unchanged.

**Accept when:** `grep -n "Neither governs\|neither outranks\|never resolved by precedence\|by document rank" docs/Modular_PRD.md` returns only the dated history notes; `Q8` status still `Open`; customer-change routing still present.

## IR-2 — broken SM05 references

**V1-SM05.md L7, old:** ``(`../../SETUP-SPIKE-000/SV-001.md`)`` → **new:** `([SV-001](../SETUP-SPIKE-000/SV-001.md))`
**V1-SM05.md L8, old:** ``(`../../SETUP-SPIKE-000/SV-002.md`)`` → **new:** `([SV-002](../SETUP-SPIKE-000/SV-002.md))`
Observed: both old paths resolve to absent files; both new paths resolve to `docs/v1/work-packets/SETUP-SPIKE-000/SV-00{1,2}.md` (exist at `63dce74`).
**Accept when:** a resolver run from the file's directory finds both targets; no `../../SETUP-SPIKE-000` remains in the file.
No claim is made that clickable-link checks cover code-formatted paths.

## IR-3 — `Q11` shown as open

**IR-3a — SPECS-TRANSITION-ENFORCEMENT L239 (§10), old:** `Names no field — `Q11` is open and irreversible after S1.`
**New:** `Names no field. *Corrected 2026-10-NN (`D-NNN`, B-136 IR-3): this sentence earlier read "`Q11` is open and irreversible after S1". `Q11` is decided: `D-97` fixed the three-value shape, `D-111` the name `line_separation_status`, `D-112` aligned `G-02` (Register `G16`, `G64`). The decided name stays irreversible after S1. This note admits no transition execution into `V1-SM05` and authorizes no schema work.*`
"Closes no Open Decision" and "Authorizes no code, schema, migration, or deployment" stay unchanged.

**IR-3b — withdrawn (Lane B `08c648d`).** Register L175–177 marks the L178 list as dated history, and the
current-reference note at L179–183 records `Q11` closed by `D-111`/`D-112` and `Q3`/`Q5` ruled by `D-143`. No Register
text changes. Cause: Lane A read L178 without its framing lines; an exact anchor match does not prove a current claim.

**Accept when:** no current clause in SPECS-TRANSITION-ENFORCEMENT calls `Q11` open; the history note keeps the old wording; `decision-status` check passes.

## IR-4 — "eleven gates"

**SPECS-TRANSITION-ENFORCEMENT L90 (§3.1), old:** `Four of the eleven gates do not fit a pair table:`
**New:** `Some transition IDs do not fit a fixed `(from_state, to_state)` pair table. The cases are: *(Corrected 2026-10-NN, `D-NNN`, B-136 IR-4: earlier "Four of the eleven gates"; §3 separates judgment gates from transition mechanics, `D-233` L66.)*`
Listed cases, IDs and behaviour unchanged.
**Accept when:** `grep -n "eleven gates" docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` returns only the history note.

## IR-5 — UX directory status (two occurrences, one defect)

**IR-5a — SPECS-PUBLICATION L43 (§2), old cell:** `` `docs/specs/ux/` — separate, currently empty (`V1-ARTIFACT-INVENTORY.md` row 51) ``
**New cell:** `Publication-specific manual-confirm UI specification **not yet written**; `docs/specs/ux/` exists but its governance UX (`UX-MULTI-LANE-AI-GOVERNANCE.md`, `D-271`) does not cover it. *Corrected 2026-10-NN (`D-NNN`): earlier "currently empty (row 51)"; no Inventory row names this spec.*`
Note: "row 51" has no current Inventory target. An Inventory row records an artifact obligation or status; adding
one does not create the file. Whether to add a row for the `FR-10` UI spec is a separate decision; this packet adds none.

**IR-5b — Inventory L67, status cell, old start:** `❌ **Corrected 2026-08-30 (`D-161`, closing `B-061`): the directory does not exist at all** — the prior "exists, empty" claim was wrong.`
**New start:** `❌ **Route spec not written.** *Directory status superseded 2026-09-27: `docs/specs/ux/` exists (row `UX-MULTI-LANE-AI-GOVERNANCE.md`, `D-271`); this `/editorial`, `/request-brief` route UX is still absent (`D-NNN`).* *Earlier, 2026-08-30 (`D-161`, closing `B-061`): the directory did not exist at that time; the prior "exists, empty" claim was wrong.*`
Rest of the cell (S2 blind-review question undecided) unchanged.

**Accept when:** no current clause says the directory is empty or absent; each feature-specific UX absence stays its own item.

## Tier applicability (D-54, for the application act)

| Tier | Affected? |
|---|---|
| Register | yes — the application act's new `D-NNN` row only; no existing Register text changes |
| Build Spec | unaffected (no artifact created, sequenced or retired) |
| Inventory | yes — IR-5b wording only; no row added or retired |
| `docs/PRD.md`, Charter, `0001` | unaffected (frozen) |
| Modular_PRD | yes — IR-1 |
| FN specs | unaffected |
| SPECS | yes — TRANSITION-ENFORCEMENT (IR-3a, IR-4), PUBLICATION (IR-5a) |
| Work packets | yes — V1-SM05 (IR-2) |
| `docs/README.md`, rule files | unaffected |
| Graph | governed paths change → `docs-drift` fires → guarded sync; assess curated fragment descriptions for the six files |
| Encyclopedia | unaffected **per the local citation map** `docs/ENCYCLOPEDIA-SYNC.md` (Modular_PRD prologue/§10, Publication §2, TE §3.1/§10 not mapped; Publication maps §3 only). Hosted artifact parity not checked |

## Out of scope (owners kept)

Publication single-outbound/crash recovery → B-078 Child 4. SM06 snapshot identity, replay key, readiness query →
V1-SM06 DoR L75. Reference/freshness checker → separate optional proposal. Export totals (270/268, 118 links) →
attributed, not verified. None is an SM05 gate.

## B-136 answer

Recorded in B-136 after `08c648d`; the answer carries this file's hash (a file cannot hold its own hash).
