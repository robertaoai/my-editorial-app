# B-098 — the established setup spike preserves the existing sprint/version baseline

- **Raised:** 2026-09-14 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Lane A disposition of B-098's earlier roadmap-reset interpretation; no build, sprint remap or governed-source change
- **Status:** Answered
- **Lane A:** **Acknowledged 2026-09-15 at read commit `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`.**
  The corrected interpretation is accepted: the existing sprint/version sequence
  remains the planning baseline; `D-185` already owns `SETUP-SPIKE-000` provenance and is cited,
  not restated. B-098's earlier proposal at `258842a` (reading the setup-spike clarification as a
  reset of S0 to S1, removal of S0, or remap of S3/S4) is marked **Withdrawn** in full; no part of
  it is retained as operative. The verified B-087/B-090/B-092/B-093 records are preserved
  unchanged. B-088 and B-094 through B-097 continue on their own lifecycles; none are closed by
  this acknowledgement. This acknowledgement changes no sprint status and authorizes no
  governed-source or build action. **Correction, 2026-09-15 (B-100):** this disposition is complete
  and is recorded below as `Resolution: Applied`, not left as `Status: Open` beside a settled
  answer.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Verified-At-Commit:** e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6
- **Evidence:** Chief Editor clarification and screenshot `codex-clipboard-cc3676c0-7c5d-4a55-89b3-f9501478cf07.png`, supplied 2026-09-14, SHA-256 `6EA0FCE6A25E0DBC350ED37DAFC63AA1794416C71B444E6F732277C492D8A8BD`; `SETUP-SPIKE-000` decision `D-185`; `docs/README.md:12`; `docs/journal/2026-08-16-sprint-plan.md:9-13`; B-072 root analysis; verified B-087, B-090, B-092 and B-093 lifecycle records; B-088/B-094–B-098 lifecycle headers; existing `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `V1-PHASE-CLOSURE.md`, `LANE-B-WORK-ORDER.md` and `Modular_PRD.md`; Graphify query read with the stale-revision qualification below.

## Raiser correction

**This revision corrects Lane B's own B-098 interpretation at commit `258842a`.** That version read
the Judge's description of the setup spike as a new direction that reset sprint completion, removed
S0 from the operative sequence and remapped S3/S4. The Chief Editor has now clarified that there is
**no new roadmap direction**: the spike context has governed the conversation since Friday,
2026-09-11, `SETUP-SPIKE-000` was registered earlier, and the existing sprint/version sequence stays
the planning baseline. Conversation recommendations remain advisory and authorize no build.

Git history preserves the earlier mistaken version. This current entry withdraws its reset/remap
proposal rather than rewriting the evidence as though the error never occurred.

## Normalized request

Explain which setup-spike and handoff artifacts are complete, which related items remain open, and
what Lane A must correct after Lane B mistakenly treated an established planning boundary as a new
roadmap decision. Preserve the existing sprint/version plan, `SETUP-SPIKE-000` lineage and completed
technical evidence. Review the Product requirements, storyboard/story panels, embedded UML and data
flow, Encyclopedia and cross-references only for impact. Draft no application or governed-source
change unless a real remaining gap owns it.

## Highest parent — already settled, not a new decision

The controlling statement is the original backlog-review condition shown in the supplied screenshot:

> Treat the current work as an agile project-setup spike. Use the existing sprint and version plans
> as the baseline; recommendations in the conversation are advisory inputs, not a replacement plan
> or authorization to build.

`D-185` already names the lineage root:

- identifier: `SETUP-SPIKE-000` — Zero-to-One Project Setup and Governance Spike;
- Git base: `53ace36`;
- first branch-specific applied commit: `00d21cd`; and
- effect: historical lineage only, granting no present build, lane-transition, push or deployment
  authority.

The phrase **historical lineage only** does not deny that current planning work descends from the
spike. It separates provenance from authority: D-185 says where the work came from; the operative
Register, Build Spec, Phase Closure, Product tracker and handoffs say what may happen now.

### Parent-first decision table

| Order | Decision | Accept effect | Reject / return condition | Disposition |
|---:|---|---|---|---|
| 1 | Existing sprint/version sequence remains the planning baseline | Preserves the operative V1 trackers and prevents advisory chat analysis from replacing them | Return only through a separately scoped Judge act that expressly changes the roadmap | **Accept — clarified governing context** |
| 2 | `SETUP-SPIKE-000` is the established historical root | Keeps one identifier, Git lineage and meaning | Reject treating it as a newly invented sprint, version, live authorization or duplicate tracker | **Accept — already recorded by D-185** |
| 3 | B-098's reset/remap proposal at `258842a` is withdrawn | Removes the false instruction to reset S0/S1, delete S0 or remap S3/S4 | Reject retaining any part as operative merely because it was committed | **Accept** |
| 4 | “The application is not built” is kept distinct from sprint-scoped evidence already completed | Preserves real config, migration and local test evidence while maintaining honest end-to-end readiness | Reject erasing evidence or calling the full application/release ready | **Accept** |
| 5 | Open child handoffs continue through their existing owners | B-071/B-084/B-088/B-094–B-097 retain their own lifecycle and completion criteria | Reject using B-087 planning closure or B-098 withdrawal to close them | **Accept** |

No new S1 definition, S3/S4 remap, demand-tier successor or sprint-status reset is required by this
clarification. Those were consequences invented by B-098's earlier reading.

## What is complete and what remains open

| Track | Current evidence | Meaning |
|---|---|---|
| `SETUP-SPIKE-000` registration | **Complete:** D-185 records the name, base, first applied commit and authority boundary | Provenance established; no current build authority |
| B-087 setup-spike alignment packet | **Verified** at `b965125` | Its planning outcome and routing are complete |
| B-090 tracking-boundary review | **Verified** at `5097a4d` | B-087 planning closure stays separate from B-084 source correction |
| B-092 closure-evidence sequence | **Verified** at `bb3488e` | Exact planning-closure evidence order accepted |
| B-093 independent execution-record review | **Verified** | Confirms the bounded B-092 record; closes no sibling handoff |
| B-072 root/commit-authority work | **Applied**, not independently verified | D-184/D-185 changes exist; `Applied` remains provisional by channel rules |
| B-071 ontology/route work | **Deferred** in its header; B-097 challenges later live additions | Do not call active or complete until its return protocol is resolved |
| B-084 manual-intake source reconciliation | **Applied with residual work owned there** | B-087 may cite it; cannot close it |
| B-088 C-39 independent review | **Open and acknowledged** | The token-boundary/checker defect remains unresolved; acknowledgement proves receipt only |
| B-094 Chief Editor decisions | **Open** | Remaining choices and evidence still need Lane A acknowledgement/disposition |
| B-095 manual-intake exact-write contradictions | **Open** | Existing Product/storyboard/traceability/Encyclopedia anchors still require their own correction packet |
| B-096 state/metadata/report separation | **Open** | Logical contracts and the `GA1` check remain unanswered |
| B-097 deferred-entry return protocol | **Open** | Lane A must define how a terminal handoff returns before B-071 accepts more live work |
| B-098 current correction | **Open** | Lane A must acknowledge this correction and disposition the earlier reset/remap proposal |

**Completion is local to each record.** A verified planning spike proves its bounded planning outcome;
it does not prove a working application, a corrected Product specification, a closed ontology item,
release readiness or Graphify currency.

The current open-entry ledger is therefore **six entries: B-088 and B-094 through B-098**. B-088
must not be dropped because it is already acknowledged: acknowledgement changes receipt, not the
entry's `Open` state or its completion evidence.

## Evidence and audit anchors — two different SHAs

The screenshot is now re-identifiable by filename and SHA-256 in the header. Its temporary local
path is not treated as durable authority; the content hash is the stable evidence anchor.

Lane A proposed changing B-098's former `Verified-At-Commit: 258842a` because the corrected text was
committed later at `9e03bb3`. That diagnosis conflates the read anchor with the record's own commit:

- `258842a` was correct for the rewrite committed at `9e03bb3`, because `258842a` was HEAD when that
  rewrite was prepared;
- `9e03bb3` is the rewrite's own commit and is derivable with Git, so D-214 deliberately does not
  store it in `Verified-At-Commit`; and
- this new evidence/open-ledger revision was prepared after B-097 landed at `35d3d43`, so the field
  now correctly advances to `35d3d43` — the tree read for this revision, not this revision's future
  commit.

The field changes because the record is rewritten again, not because its prior value was stale.

## Clarifying “not built” without erasing completed evidence

The repository contains S0/S1-labelled artifacts and accepted narrow evidence. The current application
is still scaffolding and no real user can complete the Product success journey end to end. Both facts
can be true:

| Fact type | Correct statement |
|---|---|
| Artifact existence | Config files, `0002_s1_editorial_schema.sql` and tests exist |
| Bounded verification | Local PostgreSQL and configuration checks have recorded results |
| Sprint tracker state | Read from the operative V1 files unless a later Judge act expressly changes it |
| End-to-end application readiness | Not achieved; S2 remains held and no working Product journey is authorized |
| Release readiness | Not achieved; credentials, hosted behavior, operational recovery and release evidence remain separate |

“No sprint has produced the complete application” must not be shortened to “no sprint-scoped work
was completed.” The latter contradicts retained evidence and was B-098's error.

## Artifact impact review — correction, not a new write set

| Artifact | Impact of this clarification | Remaining owner |
|---|---|---|
| `Modular_PRD.md` | **Unaffected by the clarification itself.** Keep its current sprint mapping until an explicit roadmap decision changes it | B-084/B-071/B-096 retain their existing Product corrections |
| `V1-DECISION-REGISTER.md` | D-185 already records `SETUP-SPIKE-000`; no duplicate decision needed | Lane A records only B-098's disposition if its process requires it |
| `V1-BUILD-SPEC.md` / Inventory / Phase Closure | Preserve current sequence, artifact evidence, freeze rules and live lane state | Existing named gaps only; do not apply B-098's withdrawn reset |
| `LANE-B-WORK-ORDER.md` | Preserve its current no-executable-S2 boundary | A fresh work order still requires its existing authorization conditions |
| Storyboard and story panels | No sprint remap from this clarification. Historical/current-use corrections remain with B-084 and B-071 | Existing owners, no duplicate panel set |
| UML and data flow | They remain embedded storyboard views; create no standalone duplicate | B-071 for gate order; B-096 for state/metadata/report authority |
| Encyclopedia | No new sprint-reset update. Existing stale/dependency findings remain with B-084/B-095/B-096 | Hosted content must be actually reviewed before parity is claimed |
| Cross-reference/traceability | Preserve existing sprint/version links; correct only contradictions already named by their handoffs | B-095 and existing traceability owners |

Because this correction creates, sequences and retires **no governed artifact**, the Build Spec,
Inventory and Product tier are unaffected. D-54 does not require duplicating the correction across
them. The affected artifact is this open handoff itself.

## What was unclear, what would fail, and the success criterion

| Ambiguity or failure | Guaranteed failure | Success criterion |
|---|---|---|
| Established spike context read as a new roadmap act | Every later clarification can silently reset the plan despite the screenshot's advisory boundary | D-185 and the baseline condition are cited; no plan changes without a separately scoped Judge act |
| `SETUP-SPIKE-000` treated as a live sprint/status tracker | Historical provenance would compete with the operative V1 trackers | Root identity remains historical; current authority stays in the Register/Build Spec/Phase Closure/handoffs |
| “Not built” used to erase completed artifacts | Migration/config/test evidence disappears from planning and must be rediscovered | Artifact, bounded verification, sprint status, application readiness and release readiness are reported separately |
| B-087 verification read as closure of every routed branch | Open B-088 and B-094–B-097 work becomes invisible | Each handoff closes only on its own lifecycle and evidence |
| B-098's earlier S1–S4 proposal survives as partial advice | An erroneous roadmap can re-enter through later summaries | Lane A explicitly withdraws or supersedes the entire reset/remap proposal, with no retained operative rows |
| Graphify query treated as current | New handoffs and corrections remain absent while semantic output appears authoritative | Final analyzed head equals final Git HEAD; coverage includes B-094–B-098; curated fragments verify; full local suite runs |

## Lane A follow-up — parent before children

1. Acknowledge B-096, B-097 and this corrected B-098; receipt is not acceptance.
2. Confirm the existing sprint/version sequence remains the planning baseline and D-185 already owns
   `SETUP-SPIKE-000` provenance.
3. Mark B-098's `258842a` reset/remap proposal withdrawn or superseded in the handoff response. Apply
   none of its proposed V1 tracking/Product changes.
4. Preserve the verified B-087/B-090/B-092/B-093 planning records and their bounded completion.
5. Continue B-088 and B-094–B-097 through their existing decisions and completion evidence; do not consolidate
   their lifecycles into B-098.
6. Review Product, storyboard/story panels, embedded UML/data flow, Encyclopedia and traceability only
   through the already named B-071/B-084/B-095/B-096 owners.
7. Keep implementation, sprint activation, roadmap replacement, external publication and release
   actions held.
8. Synchronize Graphify last. At this review `.graphify/branch.json` still analyzed `f63d6eb`, while
   Git HEAD was `258842a`; the boolean stale flag is not sufficient when the hashes differ.

## What you did instead

Corrected the open B-098 in place, identified the verified setup-spike records, preserved the
existing sprint/version baseline and routed every remaining gap to its existing owner. Did not edit
the Register, Build Spec, Product requirements, storyboard, Encyclopedia, code, schema, lane state or
Graphify runtime.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | Existing sprint/version sequence as the planning baseline | Phase 1 — preserve; no new roadmap act |
| Approve | `SETUP-SPIKE-000` as the already-recorded historical root under D-185 | Phase 1 — cite, do not duplicate or reinterpret as live authority |
| Approve | B-087/B-090/B-092/B-093 as completed within their bounded planning/review scope | Phase 1 — preserve their verified evidence |
| Approve | Six-entry open ledger: B-088 and B-094–B-098 | Phase 1 — retain each lifecycle and owner |
| Approve-with-conditions | B-098 correction as complete | Lane A acknowledges and withdraws/supersedes the whole `258842a` reset/remap proposal |
| Reject | Resetting S0/S1, removing S0 or remapping S3/S4 from this clarification | Those were Lane B inferences, not Judge direction |
| Reject | Treating “not built” as “no sprint-scoped artifact or test was completed” | Report artifact evidence separately from application and release readiness |
| Reject | Re-anchoring a record to its own later commit | `Verified-At-Commit` names the tree read while writing; the disposition commit remains derivable |
| Defer | B-071/B-084/B-094–B-097 closure, implementation and Graphify sync | Their existing owners and criteria; synchronize only after final tracked corrections |
