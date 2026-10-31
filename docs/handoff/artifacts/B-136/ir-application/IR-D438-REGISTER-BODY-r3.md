## {SEC} `D-438` — IR Documentation Corrections: Five Source Repairs (B-136 IR-1 to IR-5)

**Authority: the Judge, directly to Lane A, {DATE}**, in chat: **"{AUTH_QUOTE}"**. Route: **{D1_QUOTE}**. Publication:
**{J1_QUOTE}**. Receipt exception: **{J2_QUOTE}**. The object is IR correction packet r2 (SHA-256
`bc29c616e5d3d2850e00e5037420e7f0bae534a243bcbecac77f8c1cd0fcb71c`), design Verified by Lane B at B-136 `26ac629`, with
application act `{ACT_FILE}` (SHA-256 `{ACT_SHA}`). Lane A is `Active`. This act changes no V1 scope, sequence or DoD.

{ROUTE_B_ITEM_0}

### The decision

1. **Scope.** Ten replacements A1–A10 in five files, exactly as IR packet r2 states them: `docs/Modular_PRD.md` (A1–A4),
   `docs/v1/work-packets/V1/V1-SM05.md` (A5–A6), `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` (A7–A8),
   `docs/specs/SPECS-PUBLICATION.md` (A9), `docs/v1/V1-ARTIFACT-INVENTORY.md` (A10). No other text changes. The historical
   question paragraph of this Register (§5, the list after "Historical question-summary paragraph") is not touched.
2. **Preservation.** The pinned original revisions plus accurate dated correction notes preserve history. Not every
   replaced sentence is repeated inline; no history is deleted.
3. **Stages.** The application act §D (stages S0–S7) is the only pass/stop rule. A mismatch stops the unit and keeps its
   evidence. A new binding needs reassessment and Lane B review before use. Only `docs-drift` may fail from this act's
   commit to publication (`D-428`), except the receipt interval in item 5. Hooks are never skipped.
4. **Exact content.** The applying commit equals the application act §E: the five paths only, each committed blob equal
   to its expected bytes, computed before writing from the bound inputs.
5. **Graph cycle.** Prepare (`D-425`), Lane A answers from source, Lane B's receipt in B-050 (bytes and meaning), then
   publication as the J1 authority above states, then a separate health record in B-136. Receipt exception, if
   authorized above: for this cycle only, between Lane B's B-050 acceptance and its one-file Terminal annotation, only
   `terminal-return` and `docs-drift` may fail; after the annotation `terminal-return` passes; it expires at the health
   record. No earlier unit's exception (`D-432`–`D-436`) is reused.
6. **Push.** After the applying commit and before prepare, at a separate checkpoint where the Judge names the exact
   range; then the handoff SOP: fresh fetch, upstream equals the approved base, push, fetch again, upstream equals
   `HEAD`. No fetch and no push from prepare to the health record.
7. **Not given:** any Inventory row; the `FR-10` UI spec; a `Q8` outcome; SM06 or publication design (B-078 Child 4); a
   reference checker; BCP-1 r4 disposition; setup execution, readiness or registration beyond {SETUP_CLAUSE}; `V1-SM05`
   selection, Gate 2, work order, lane change or construction.

### Tier applicability (`D-54`)

| Tier | Disposition |
|---|---|
| **Register** | ✅ this entry |
| **Build Spec** | — unaffected: no artifact created, sequenced or retired; no V1 scope, sequence or DoD change |
| **Inventory** | Follow: applying commit, UX-route row wording only (A10); no row added or retired |
| `Modular_PRD.md`, `V1-SM05.md`, `SPECS-TRANSITION-ENFORCEMENT.md`, `SPECS-PUBLICATION.md` | Follow: applying commit |
| `docs/PRD.md`, Charter, `0001`, FN specs, `docs/README.md`, rule files, Phase Closure, graph fragments, application code | — unaffected |
| B-136 | Follow: its own handoff commits |
| **Encyclopedia** | unaffected per the local citation map `docs/ENCYCLOPEDIA-SYNC.md`; hosted parity not checked |
| **Graphify** | Governed drift, expected; cleared only by this act's guarded cycle, never by a raw rebuild |
