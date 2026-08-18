# Audit Model and Gap Remediation Plan

**Date:** 2026-08-18
**Status:** Planning only. No code, no migration, no schema decided.
**Scope class:** **Project Scope** — no Customer Request asks for CPA-style audit reporting. Proposed key `PSK-10`.
**Normalized against:** `graphify` queries on assurance/Three Lines vocabulary; direct reads of `Modular_PRD.md` §6.3/§6.4, `NFR-02`, `SEC-04`, the media-SOP remedy ladder, and the PoC briefcase artifacts.

## 1. The model being adopted

An editorial business is auditable in the same sense a financial statement is auditable: an independent party must be able to re-perform the work from retained evidence and reach its own conclusion. That imposes a specific discipline — **issued reports are immutable; the record is insert and read only; nothing is updated or deleted.**

### 1.1 Mapping to what already exists

| Financial audit concept | Editorial equivalent here | Status |
|---|---|---|
| Statements **as at** a date | Report as at its issue timestamp | **Missing** |
| Reporting framework (IFRS/GAAP) | Report template version | **Missing** |
| Auditing standards applied | Rule-set version | Required by `PSK-09`, not recorded |
| Working papers / audit evidence | Editorial Briefcase artifacts | Exists, as manual folders only |
| Management's assertion | Chief Editor's `Publish`/`Hold`/`Escalate` disposition | Exists |
| **Independent auditor's opinion** | — | **Missing — see `GA6`** |
| Prior-period adjustment / restatement | Correction ladder: Clarify → Correction → Retraction | Exists in media-SOP |
| Never erase prior statements; issue a restatement | Never delete; supersede with a new report citing the original | Partially — `NFR-02` covers one table |
| Retention of working papers | `DATA_RETENTION_ARCHIVE_DAYS`; transitions never deleted | **Conflicts with erasure — `GA5`** |
| Auditor independence | `OD2`, Line 3, `Q2` | Open |

The correction ladder already **is** the restatement model — graduated, and it never erases the original. That alignment is genuine and worth stating explicitly rather than leaving implicit.

## 2. Gaps this framing exposes

| # | Gap | Severity |
|---|---|---|
| **GA1** | **No report entity exists.** `TR-DM-01`…`06` define articles, transitions, topics, sources, trend signals, and publication targets. The Client Decision Report and briefcase artifacts are *manual folder conventions*, not records. An immutable report cannot be immutable if it is not a record | **S1** |
| **GA2** | **Append-only covers one table, not the report chain.** `NFR-02` revokes UPDATE/DELETE on `workflow_transitions` only. `articles` is mutable by design — it carries `revision_reason`, `return_count`, changing state. A report that *references* live article data therefore cannot be reproduced later; it must carry a **frozen snapshot**, exactly as a balance sheet is not regenerated from today's ledger | **S1** |
| **GA3** | **No "as at" concept.** Transitions have `created_at`; nothing expresses "the state of this work at the moment the report was issued" | **S1** |
| **GA4** | **Three versions are needed and none is recorded** — template version (how it was rendered), rule-set version (by what standard it was judged), and the data snapshot (what was true then). Earlier analysis named two; the audit framing adds the third and makes it the load-bearing one | **S1** |
| **GA5** | **Retention and erasure directly contradict each other.** `Modular_PRD.md` §6.3 states `workflow_transitions` is **never deleted**; `SEC-04` requires **GDPR Art. 17 erasure** for personal data in sourced articles; PDPA now applies directionally to the POC lane. These cannot all hold. `SEC-04`/`SEC-05` are explicitly **unowned** — *"no legal function… the Chief Editor is not qualified to discharge them"* — and `XF-09` records Legal as Blocked. **This was latent before; audit retention makes it load-bearing** | **CHR / escalate** |
| **GA6** | **Management assertion is doing double duty as audit opinion.** The Chief Editor's disposition is a *management* assertion. No independent opinion exists anywhere in the model. In audit terms the current state is management preparing the accounts and also signing the opinion — precisely what independent assurance exists to prevent, and the same collision `A23`/`SEC-01` already guard against elsewhere | **CHR** |
| **GA7** | **Auditor access conflicts with tenant isolation.** Tenancy exists to isolate customers for indemnity. An auditor needs to read across tenants. Both are correct; the reconciliation is undesigned | **CHR** |
| **GA8** | **No Project Scope key.** No Customer Request asks for CPA-style audit reporting. Unregistered, it becomes undisclosed funded scope — the exact defect `FB-04` named | **DOC** |

## 3. Remediation steps

Ordered so that documentation precedes decisions, and decisions precede anything irreversible.

### Step 1 — Register the capability as Project Scope `PSK-10` *(documentation, now)*

Add `PSK-10 — Immutable audit reporting and report reproducibility` alongside `PSK-01`…`PSK-09`. Without a key this is funded scope the customer never requested and was never told about. Closes `GA8`.

### Step 2 — State the immutability rule once, explicitly *(documentation, now)*

One sentence, in the governed spec rather than scattered:

> An issued report is never edited and never deleted. A superseded report is answered by issuing a **new** report that cites the original. The correction ladder — Clarify, Correction, Retraction — is the editorial restatement mechanism.

Lands in `Modular_PRD.md` §6.3 and the P0-EVR PRD. Closes the stated half of `GA2`.

### Step 3 — Separate management assertion from audit opinion *(documentation, now)*

Record plainly that the Chief Editor's disposition is a management assertion, that **no independent audit opinion currently exists**, and that presenting the disposition as independent assurance would be a misrepresentation. Route the substantive question to `Q2` (Line 3 external, or state that v1 has no independent assurance). Addresses `GA6` as disclosure; does not resolve it.

### Step 4 — Decide the report record's shape *(decision, before S1)*

Report identity, as-at timestamp, tenant, template version, rule-set version, and frozen data snapshot. Same decision window as `Q10`, `Q11`, and `QA3` — all touch the same migration. Closes `GA1`, `GA3`, `GA4`.

### Step 5 — Name which tables become insert/read-only *(decision, before S1)*

Today the answer is one table. Reports must join it. `articles` cannot — it mutates by design, which is *why* reports need frozen snapshots rather than references. Produce the explicit list. Closes the remainder of `GA2`.

### Step 6 — Apply the statutory retention floor; escalate what remains *(part resolved, part escalated)*

**Updated 2026-08-18.** The Chief Editor states that Singapore law requires financial and accounting records to be retained **at least 5 years**, enforced by IRAS and ACRA for tax and corporate compliance. Recorded as the stated basis for retention planning.

This **bounds** `GA5` rather than leaving it open-ended. A statutory retention obligation supplies a lawful reason to retain during that window, which an erasure request cannot simply override. What it does **not** do is justify *indefinite* retention:

- **Years 0–5:** a stated statutory basis exists.
- **Beyond 5 years:** `NFR-02`'s *"never deleted"* has no stated basis. Singapore's PDPA also imposes a **retention-limitation** obligation — personal data should not be kept once the purpose is served and no legal or business need remains — so "forever" is the part that is hard to defend, not "five years."

**Recommendation:** restate `NFR-02`'s retention rule as *"retained for not less than the statutory period; disposal only under a documented, approved policy"* rather than "never deleted." Append-only immutability and infinite retention are **different properties**, and the current wording conflates them: a table can forbid UPDATE and DELETE during its retention life and still be lawfully disposed of at end of life under policy.

**Still requiring qualified external input — do not resolve internally:**

1. Whether editorial workflow records count as *accounting records* for the 5-year rule. Engagement, invoice, and payment records plainly do. Gate transitions evidence *what service was delivered*, which supports the accounting record without necessarily being one — the categories should not be silently merged.
2. How the retention obligation and the erasure right interact for **third-party personal data inside sourced articles** (`SEC-04`), where the data subject is neither the customer nor a party to the engagement.
3. Whether PDPA's retention-limitation obligation requires a defined disposal point after year 5.

**Operational consequence in the meantime:** `B-P0-06` stays constrained — POC client personal data should be collected minimally until items 1–3 are answered.

### Step 7 — Design the auditor access model *(decision, before the P0-EVR charter)*

Reconcile cross-tenant audit read against tenant isolation. Options exist — a separate audit role, per-tenant scoped reports plus an aggregate view, or auditor access granted per engagement — but the choice is undesigned and belongs in the charter. Closes `GA7`.

### Step 8 — Decide the independent assurance path *(decision, `Q2`)*

Either Line 3 is external for v1, or v1 states plainly that it has no independent assurance. **Not the Chief Editor** — `A23` already established that naming him collides Line 2 with Line 3. Resolves `GA6` substantively.

## 4. Sequencing

| When | Steps |
|---|---|
| Now — documentation only | 1, 2, 3 |
| Before the S1 migration | 4, 5, 9, 11 |
| Before the P0-EVR charter | 7, 10 |
| Part applied, remainder escalated to counsel | 6 |
| Open decision, `Q2` | 8 |

**The S1 migration decision window now holds seven items**, and they must be settled together because they alter the same append-only table in one pass: `Q10` *(tenancy — **answered**)*, `Q11` *(field rename)*, `QA3` *(typed columns versus JSON payload)*, **Step 4** *(report record shape)*, **Step 5** *(which tables become insert/read-only)*, **Step 9** *(retention floor and table classification)*, **Step 11** *(cascade behaviour and archival restatement)*.

## 5. Retention review across every table

**Requirement being applied:** the chain from **trigger to published article must remain traceable for the retention period, regardless of final status** — including work that was rejected, held, or abandoned. Both lanes (AP-01 MVP and P0-EVR POC).

### 5.1 A finding this immediately produces

`Modular_PRD.md` §6.3 currently reads: *"rejected and archived after `DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely; `workflow_transitions` never deleted."*

**"Regardless of final status" contradicts that first clause.** If rejected work is archived or purged before the retention period ends, the audit chain breaks precisely where it is most interesting — an auditor's first question is usually about what was *rejected*, not what sailed through. `DATA_RETENTION_ARCHIVE_DAYS` is currently `UNSET`; it must not be set below the statutory floor, and "archived" must be defined as *moved, still retrievable* rather than *deleted*.

### 5.2 Two different properties, not one

The review keeps these separate, because conflating them is what produced the `GA5` contradiction:

- **Immutability** — may a row be changed or removed *during its life*? (append-only)
- **Retention** — how long must the row exist *at all*? (statutory floor, then policy)

### 5.3 Table-by-table

Existing tables are from `0001_init.sql`; planned tables from `TR-DM-03`/`TR-DM-06`; proposed tables from this session's analysis.

| Table | Role in the trigger → publication chain | Today | Needs |
|---|---|---|---|
| `topics` | Classifies the article; drives audience-fit judgement | Mutable master data | Point-in-time meaning. A renamed topic makes an old report resolve to today's label |
| `sources` | Source identity and `reliability_tier` | Mutable master data | The tier **as it stood at the decision** is evidence. Today's tier is not what the reviewer saw |
| `articles` | The work itself | **Mutable by design** — `revision_reason`, `return_count`, changing state | Snapshot at each gate and at report issue. Cannot be made append-only; that is *why* snapshots are required |
| `trend_signals` | Why this item was judged newsworthy — backs `CR-06` | Unclear whether overwritten on recompute | **Confirm append-only.** If signals are recomputed in place, the newsworthiness decision becomes unexplainable |
| `workflow_transitions` | The state chain | Append-only (`NFR-02`) | Already correct. Only the *"never deleted"* wording needs the Step 6 restatement |
| `publication_targets` / `publications` | Whether and where it published | To be created (S1, `TR-DM-03`) | Design as **append-only status events**, not a mutable status column — otherwise retry and partial-failure history is lost |
| `allowed_transitions` | The sequence rules backing the `NFR-01` trigger | To be created (S1, `TR-DM-06`) | **Effective-dating.** An audit must show which rules were in force *then*, not now. This is the rule-set version of `GA4` and `PSK-09` |
| Report entity | The issued artifact | Proposed (`GA1`) | Insert/read only; carries the frozen snapshot |
| Intent vocabulary | Reason codes | Proposed | Codes **retired, never deleted** — historical rows must keep their original meaning |
| Engagement / payment records | The commercial record | Proposed (P0-EVR) | **Clearest statutory case** — this is the accounting record the 5-year rule plainly covers |
| Briefcase artifacts | Claims, Evidence, Uncertainty, Counterargument, Classification, Explainable Draft | Manual folder documents, editable | **Versioned, not edited in place.** If the Journalist reviewed draft v1 and the Chief Editor saw draft v3, the audit needs both |

### 5.4 The master-data problem, and the cheaper fix

`topics`, `sources`, and `allowed_transitions` are reference data that changes slowly. If a report stores only an ID, then renaming a topic or re-tiering a source silently rewrites the meaning of every historical report pointing at it — the same failure as renaming a chart-of-accounts line and making prior-year statements unreadable.

Two ways to fix it:

| Option | Approach | Assessment |
|---|---|---|
| **(a)** Effective-date every master table | Full temporal history on `topics`, `sources`, `allowed_transitions` | Complete, and considerably more machinery than a zero-to-one business needs now |
| **(b)** Freeze resolved values into the report snapshot | The report stores the topic *name*, source *tier*, and rule *version* as they were, not just IDs | **Recommended.** Cheaper, and it is already required by `GA2`'s snapshot decision — no separate mechanism |

`allowed_transitions` is the one exception: it is the rule set itself, so it likely needs effective-dating under **(a)** regardless, since `PSK-09` already requires rule versioning with rollback.

### 5.5 Added remediation step

**Step 9 — Set the retention floor and classify every table** *(decision, before S1)*
Set `DATA_RETENTION_ARCHIVE_DAYS` at or above the statutory floor; redefine "archived" as retrievable rather than deleted; confirm `trend_signals` immutability; and record the §5.3 classification as the retention policy. Belongs with Steps 4 and 5 in the same S1 decision window.

## 6. Policy, control, and disposal — three layers, not one

**Clarification adopted 2026-08-18:** "no deletion" is a **policy of intent**, not an implementation instruction. Conflating the two is what makes the rule look unimplementable. Three distinct layers:

| Layer | Question it answers | Where it belongs |
|---|---|---|
| **Policy** | What must not happen, and why | Governed spec — `NFR-02`, `PSK-10` |
| **Control** | How the system prevents it | Postgres triggers and RLS (`TC1`'s forced conclusion) |
| **Disposal** | How data lawfully leaves at end of retention life, and who may authorize it | Documented, authorized procedure — **currently undefined** |

Postgres has no native read-only table. Protection is enforced by triggers or RLS, and therefore any lawful disposal is necessarily a **deliberate, privileged bypass** of that protection. That is normal and expected — but it relocates the real control from the database to *who may execute the bypass*.

### 6.1 The governance finding this produces

Every disposal mechanism is, by construction, an override of the control. So the control is only ever as strong as the control over the override. Today:

- `§0.3` records **one human** on the project; no other role exists to hold a separate key.
- `TC1` records `SUPABASE_SERVICE_ROLE_KEY` as *declared in `.env.example` and used nowhere*, and RLS as `for all using (true)` on every table.
- The sprint plan names S4's publish route as *"the first place the architecture gets a privileged path at all."* **Disposal would be the second.**

If the same person operates the pipeline and holds the key that bypasses its protections, then append-only is a **promise, not a control**. An independent auditor would record that as a material weakness — the same segregation-of-duties principle behind `SEC-01`, and the data-layer restatement of `GA6`. This is not an argument against disposal; it is an argument that disposal authority needs naming before it is exercised.

### 6.2 Assessment of the three mechanisms

| Method | Fit | Assessment |
|---|---|---|
| **1 — Disable triggers in a transaction** | Poor for bulk disposal | Works, but `DISABLE TRIGGER ALL` disables **internal foreign-key constraint triggers too**, so referential integrity is unenforced for the duration — including the `on delete cascade` from `articles` to `workflow_transitions`. A bulk delete in that window can orphan rows. `DISABLE TRIGGER USER` is the safer variant; it leaves system and FK triggers intact. Also takes an `ACCESS EXCLUSIVE` lock and requires elevated privilege for constraint triggers |
| **2 — `service_role` / SQL editor** | Poor as routine practice | Bypasses RLS entirely and leaves no application-visible trace. Acceptable for a one-off authorized act, unacceptable as a standing disposal route — it is precisely the "operator can silently erase the audit trail" shape |
| **3 — Detach and drop a partition** | **Best fit — recommended** | Correct for lifecycle disposal, and for better reasons than skipping triggers: it is O(1) rather than O(rows), avoids bloat and vacuum pressure, aligns naturally with retention windows if partitioned by period, and the detached partition can be **exported and archived before** it is dropped — which is what makes end-of-life disposal defensible rather than destructive |

**The caveat that applies to all three:** each removes data without leaving evidence *in the data*. Method 3 most completely of all, since `DROP TABLE` is DDL and skips row-level triggers and RLS by design.

### 6.3 The missing control: disposal must itself be auditable

Financial practice already solves this. Records are not simply destroyed at end of retention — a **certificate of destruction** is produced and retained, and it outlives what it describes. The editorial equivalent:

A **disposal record**, written *before* the disposal, stored outside the table being disposed of, and subject to the same immutability, naming: what was disposed (scope and period), under which retention policy and version, the authorizing party, the date, the mechanism used, and where the archived copy went if one was taken.

Without it, the audit trail has a hole exactly where an auditor looks hardest — the boundary where records stopped existing. With it, "we disposed of FY2026 under policy v1.2, authorized by X on date Y, archive at Z" is a defensible answer.

### 6.4 Added remediation step

**Step 10 — Define disposal authority and the disposal record** *(decision, before any disposal; not S1-blocking)*
Name who may authorize disposal and who may execute it — ideally not the same party, which is a live constraint given `§0.3`'s single human. Adopt partition-based disposal as the default mechanism, require export-before-drop, and specify the immutable disposal record in §6.3. Record the introduction of a second privileged path as an amendment to `TC1`'s finding rather than an undocumented drift.

This is **not** S1-blocking: no disposal can occur until the retention floor elapses. It **is** charter-relevant, because it determines whether the audit model is credible to an outside reviewer.

## 7. Challenge to the existing archival intent policy *(Project Scope)*

**Definition adopted:** archiving moves old data to separate storage and keeps it for long-term or legal needs; deletion erases it permanently. In Postgres/Supabase the archive pattern is: copy rows to an archive table, then delete them from the live table.

**Current policy** (`Modular_PRD.md` §6.3): *"rejected and archived after `DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely; `workflow_transitions` never deleted."* The value is **90 days**, sourced to `A6`, and **unratified**.

Taking the definition seriously is what breaks the policy. Six challenges:

### C1 — "Then delete from the live table" *is* the forbidden operation

`NFR-02` revokes DELETE on `workflow_transitions`. The archive pattern's second step is a DELETE. So archival is **not** a gentler middle ground between keeping and erasing — it is deletion with a copy step in front of it, requiring the identical privileged bypass analysed in §6.1, with identical governance consequences. A policy that forbids deletion while mandating archival is instructing two incompatible things.

### C2 — Under the applied schema, archiving an article destroys its audit trail

`0001_init.sql` defines `workflow_transitions.article_id` as `references articles(id) **on delete cascade**`.

Archiving an article means deleting its row from `articles`. That fires the cascade and **deletes every transition row for that article** — the precise records `NFR-02` declares must never be deleted. The archival operation destroys the audit chain as a side effect, silently, with no error raised.

### C3 — Archive tables lose the controls that made the data trustworthy

An archive table conventionally carries no foreign keys, no triggers, no enum constraints, and no RLS. Moving evidence there moves it from a controlled environment to an uncontrolled one. In audit terms the chain of custody breaks at the archive boundary: the same rows, materially weaker as evidence.

### C4 — 90 days against a 5-year floor is a 20:1 mismatch

With retention at 5 years (1,825 days) and archival at 90, data spends **under 5% of its required retention life** in the live table. The 90-day value predates the retention analysis and was set against no stated floor.

### C5 — The volume does not justify archival at all

`PRD.md`'s own success criterion is **5+ articles per week**. That is roughly 260 per year, ~1,300 over a five-year retention period, and — at ten or so transitions each — on the order of 13,000 transition rows. Even at ten times the success criterion, this is a trivial working set for Postgres. **The archival policy solves a performance problem this system does not have, while creating governance problems it does.**

### C6 — Archiving rejected work inverts the audit priority

The policy singles out **rejected** work for archival. Rejected and held work is what an auditor examines first — it is where judgment was exercised most visibly. Making the most audit-relevant records the least accessible is backwards.

### 7.1 Recommendation

1. **Separate storage tiering from retention lifecycle.** They are different decisions. The current policy fuses them, which is why it reads as a retention rule while functioning as a performance rule.
2. **Defer archival entirely** until volume warrants it. Keep everything live for the retention period. Revisit against a stated row-count threshold rather than a day count.
3. **If archival becomes necessary, use partitioning — not archive tables.** Per §6.2 Method 3: partitioning keeps rows in the same logical table under the same constraints, and detaching a partition fires no cascades and loses no triggers. It achieves the archival goal while preserving the audit properties that the copy-and-delete pattern forfeits.
4. **Do not move `articles` rows while `on delete cascade` stands.** Either the cascade changes, or archival destroys the trail — see `GA9`.
5. **Do not ratify `DATA_RETENTION_ARCHIVE_DAYS = 90` as written.** It is unratified today; that is the correct state, and it should not be ratified until items 1–4 are settled.

### 7.2 New gap

| # | Gap | Severity |
|---|---|---|
| **GA9** | **`on delete cascade` contradicts `NFR-02` in the applied schema.** `NFR-02` declares `workflow_transitions` append-only with DELETE revoked; `0001_init.sql` simultaneously provides a deletion path for those rows via the parent article. This is a live contradiction in **applied** SQL, not a documentation drift, and it exists independently of archival — any article deletion triggers it | **S1** |

### 7.3 Added remediation step

**Step 11 — Resolve the cascade contradiction and restate the archival policy** *(decision, before S1)*
Decide the referential behaviour for `workflow_transitions.article_id` — `on delete restrict` would make the contradiction structurally impossible rather than merely discouraged. Restate §6.3's retention rule per §7.1, and leave `DATA_RETENTION_ARCHIVE_DAYS` unratified. `0001_init.sql` must not be edited; this belongs in migration `0002`, per the standing rule.

## 8. What this does not do

Closes no Open Decision. Ratifies nothing. Amends no governing document. Decides no schema and authorizes no migration. Determines no legal obligation — `GA5` in particular is recorded as a conflict requiring qualified external input, not resolved here. `PSK-10` and all step content remain proposals until the Board records a decision.
