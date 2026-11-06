# B-156 F3–F6 planning packet — revision 1 (Lane A draft, for review)

- **Read at:** `19d6858`. **Measured at:** frozen revision `1640ff7bc1b7d1e70ab6a421ced8a054dafda993`.
- **Status:** draft. Every repair, instrument use, baseline and option below is **proposed**. Nothing is applied.
- **Inputs:** F1 r2 (Verified `0a63ea5`); F2a r2 (Verified `072de37`); F2b r1–r4 (accepted within scope through
  `7a4971e`); F2c (accepted within scope `19d6858`); AG-1–AG-3 (`d8ca854`); the Stripe distinction (`2251b4a`); the
  gstack clarification (`e7bdd29`); the investigation index (`#b156-investigation-chain`).
- **Authority:** the existing B-156 drafting scope. No new approval is needed to draft. Application needs the bounded
  authority named in F6.

---

## F3 — Section-level repair drafts

**Rules for every row.** The new text replaces only the named lines. History stays: a superseded sentence is kept
once as a dated note where its tier keeps history. A change to a `[V1]` section carries a marker
*(corrected `[V1]`, `D-NNN`)*, where `D-NNN` is the act that applies it. Frozen sources (`PRD.md`, the Charter,
`0001_init.sql`) are not touched. **Every path in this section is governed** under the current drift matcher
(`classifyChangedPaths`, `excludedOnly: false`), except the two Lane B/Lane C proposals in F3.6, which are not
Lane A edits.

**Quoted current text is machine-checked.** `F3-citations-1640ff7.json` holds one citation per quoted locus (17 targets,
33 citations); `F3-verify.mjs` re-checks them at `1640ff7` with the accepted `verify()`: 0 failures, negative control
exit 2 with no file. This proves that each quote is on its line; it does not prove that a proposed text is right.

### F3.1 TC6 wording (F2b-R3, F2c `frag13`) — paired spec and fragment repair

| # | Target | Current text (at `1640ff7`) | Proposed text |
|---|---|---|---|
| R1 | `docs/specs/SPECS-VERIFICATION-APPARATUS.md` §4.1 L96–L101 `[V1]` | "`next.config.ts` currently reads:" then a code block with `typescript: { ignoreBuildErrors: true },` and `eslint: { ignoreDuringBuilds: true },` | "`next.config.ts` keeps `typescript: { ignoreBuildErrors: true }`. *(Corrected `[V1]`, `D-NNN`: the `eslint: { ignoreDuringBuilds: true }` line was removed for Next 16 (`B-058`, `D-154`; Verified at `cf51724`); lint runs as `eslint .` through `bun run lint` (`D-66`), never through `next build`. Until that removal, the file read both lines.)*" |
| R2 | Same §4.1, L103 | "because the build has been told to ignore both" | "because the build ignores type errors and never runs lint" |
| R3 | Same §4.1, L105 | "The flags stay as they are; changing deployment behaviour is out of scope here." | "The TypeScript flag stays as it is (`Q6` is Open); changing deployment behaviour is out of scope here." |
| R4 | `docs/graph-fragments/frag13.json`, node `ci_that_cannot_fail`, `description` | "next.config.ts sets ignoreBuildErrors and ignoreDuringBuilds, so a CI job running only next build passes with broken types and lint errors. …" | "next.config.ts sets ignoreBuildErrors, so a CI job running only next build passes with broken types; next build never runs lint (the ignoreDuringBuilds line was removed for Next 16, B-058). Green would mean the bundler completed, not that the code is sound. CI must run typecheck and lint as separate explicit steps. TC6 is narrowed, not resolved: it is compensated for in CI, deployment behaviour is untouched, and Q6 stays open." |

**Pairing rule.** R1–R3 do not regenerate R4. A source-spec edit and a hand-authored fragment edit are two edits in
one unit. The guarded rebuild merges R4 from the fragment file (graph-fragments README §4).

### F3.2 Retired shared-core model (AG-1, F2c `frag7`/`frag15`, F2b `GEMINI.md`)

| # | Target | Current text | Proposed text |
|---|---|---|---|
| R5 | `docs/fn-specs/FN-MULTI-LANE-AI-GOVERNANCE.md` §4.6 L177–L179 `[V1]` | "After the `SV2-U02` report is accepted, the three rule files are refactored **atomically**, with the shared-core parity check and its fixtures, toward the `AIG-06.R1` targets. …" | Keep the paragraph as history and append: "*(Corrected `[V1]`, `D-NNN`:* the refactor was applied atomically by `D-337`. Current state: one shared core in `AGENTS.md`; `CLAUDE.md` imports it through `@AGENTS.md`; `GEMINI.md` carries only Lane C's rules; `rule-budget` replaced the parity check. *)*" |
| R6 | Same file, `AIG-06.C1` row L213 `[V1]` | "The three rule files keep a byte-identical shared core \| `shared-core-hash` check \| exists" | "One shared core in `AGENTS.md`, imported by `CLAUDE.md` and not copied into `CLAUDE.md` or `GEMINI.md` *(corrected `[V1]`, `D-NNN`; was the byte-identical three-file core, retired by `D-337`)* \| `rule-budget` check \| exists" |
| R7 | Same file, `AIG-06.C2` row L214 `[V1]` | "After the refactor, each file meets its `AIG-06.R1` target \| size check at the refactor commit \| planned" | "Each rule file meets its `AIG-06.R1` target \| `rule-budget` check (sizes, import, one copy) \| exists *(corrected `[V1]`, `D-NNN`; the refactor landed at `D-337`)*" |
| R8 | `docs/Modular_PRD.md` §8 AIG table, row `AIG-06` L883 | "… \| After the `SV2-U02` report; `shared-core-hash`" | "… \| After the `SV2-U02` report; `rule-budget` (`D-337` replaced `shared-core-hash`)" |
| R9 | `docs/specs/SPECS-MULTI-LANE-AI-GOVERNANCE.md` §5 L106 `[V1]` | "`scripts/checks/shared-core-hash.mjs`, `lane-state.mjs`, …" | "`scripts/checks/rule-budget.mjs` (replaced `shared-core-hash.mjs`, `D-337`), `lane-state.mjs`, … *(corrected `[V1]`, `D-NNN`)*" |
| R10 | `GEMINI.md` L13 | "Everything above this line is the shared core, identical in all three agents' rule files." | Delete the sentence. L4 already states the current rule ("It holds only Lane C's own rules; it never copies the shared core"). |
| R11 | `docs/graph-fragments/frag7.json`, node `shared_core_agent_rules` | description: "One byte-identical rule core carried by CLAUDE.md, AGENTS.md, and .agents/rules/graphify.md, plus a declared platform tail that legitimately differs. Change all three together or none. …"; `source_file` `CLAUDE.md`; `source_location` `## graphify shared core` | description: "One shared rule core, held only in AGENTS.md (D-337). CLAUDE.md imports it through @AGENTS.md; GEMINI.md carries only Lane C's rules. rule-budget checks the sizes, the import and that no core line is copied. Until D-337 (2026-09-29) the core was carried byte-identically in CLAUDE.md, AGENTS.md and .agents/rules/graphify.md and changed together; that model is retired. It was the first concrete instance of the G11 arbitration rule."; `source_file` `docs/v1/V1-DECISION-REGISTER.md`; `source_location` `§5.14e162 D-337` |
| R12 | `docs/graph-fragments/frag15.json`, node `rule_must_reach_its_subjects` | `source_file` `CLAUDE.md`; `source_location` `shared core, arbitration` | `source_file` `docs/v1/V1-DECISION-REGISTER.md`; `source_location` `§5.14s D-58`. The description stays (it records where D-58 landed at the time). Optional appended clause: "(The three-file core was retired by D-337; the rule now reaches the agents through AGENTS.md and its imports.)" |

### F3.3 CI SKIP contract (F2b-R2, F2b `GEMINI.md`)

| # | Target | Current text | Proposed text |
|---|---|---|---|
| R13 | `.github/WORKFLOWS-SPEC.md` §3 L46–L47 | "**`graph-coverage`, `docs-drift` and `source-sweep` cannot run in a default CI checkout, and the reason is what they read, not their number.**" | "**`graph-coverage`, `docs-drift`, `source-sweep` and `terminal-return` cannot run in a default CI checkout, and the reason is what they read, not their number.**" |
| R14 | Same §3 table, after the `source-sweep` row | — | New row: "\| `terminal-return` \| walks **per-file history** of handoff entries; at depth 1 it reports SKIP (`scripts/checks/terminal-return.mjs`, the shallow-clone branch) \|" |
| R15 | Same §3 L55–L56 | "They differ by exactly these three." | "They differ by the checks that this table names, and only for the reason each row gives." (Names conditions, not a total, under `D-92`.) |
| R16 | Same §4 `C-Q1`, "Why" paragraph (no change to the queued change itself) | "… so the check reports SKIP and the source-side of `D-54` propagation is unverified on every merge." | Append: "The same depth also makes `terminal-return` SKIP; `fetch-depth: 0` lets both run." The queued change, its owner and its trigger are unchanged. |
| R17 | `docs/v1/V1-ARTIFACT-INVENTORY.md` row L69, the sentence "… `graph-coverage` and `docs-drift` need gitignored `.graphify/`, `source-sweep` needs full history — those three SKIP and the rest run." | as quoted | "… `graph-coverage` and `docs-drift` need gitignored `.graphify/`; `source-sweep` and `terminal-return` need full history — those SKIP in a default CI checkout and the rest run." Also append: "This row covers every check that `check-consistency.mjs` runs; some checks also have their own row, and the aggregate row is the rule (`G75`, `C-21`)." |
| R18 | `GEMINI.md` L31–L32 | "`graph-coverage`, `docs-drift` and `source-sweep` skip in CI because of what they read" | "`graph-coverage`, `docs-drift`, `source-sweep` and `terminal-return` skip in a default CI checkout because of what they read" |
| R19 | `GEMINI.md` L34–L35 | "`TC6` disables the type and lint gates at build" | "`TC6` disables the type gate at build, and `next build` never runs lint" |
| R20 | `.github/WORKFLOWS-SPEC.md` §2 L34–L35 | "`TC6` sets `ignoreBuildErrors` and `ignoreDuringBuilds`, so a build stays green on broken types." | "`TC6` sets `ignoreBuildErrors`, and `next build` never runs lint (the `ignoreDuringBuilds` line was removed for Next 16, `B-058`), so a build stays green on broken types and unlinted code." |

### F3.4 Rule-file merge scoping (R2-F2b.4)

| # | Target | Current text | Proposed text |
|---|---|---|---|
| R21 | `.gitattributes`, the current-value list after L37 | `AGENTS.md            merge=text` is the last rule-file line | Add `GEMINI.md            merge=text` after it. |
| R22 | `.gitattributes` comment L30–L31 | "a union-duplicated CLAUDE.md slices identically to a clean one, so shared-core-hash PASSES on a file holding two full copies of the rules." | Keep as history and add: "(`D-337` retired shared-core-hash; a union merge of a rule file can still duplicate rules, so every rule file — including `GEMINI.md`, added by `D-337` — is listed below.)" |

**Verification for R21:** `git check-attr merge -- GEMINI.md` reports `text`. Negative control: a temporary path
`NOT-A-RULE.md` still reports `union`. No merge test on real history is needed.

### F3.5 Build Spec and Register pointers (F2a rows 8 and 11)

| # | Target | Current text | Proposed text |
|---|---|---|---|
| R23 | `docs/v1/V1-BUILD-SPEC.md` L660 (S1, `C-33` note) | "⛔ **`C-33` — this DoD phrase is NOT yet earned (`D-118`, raised by Lane B as `B-044`).** …" | Keep the note as dated history and append: "*Later state: `B-059`'s narrow S1 claim was accepted and `C-33` is satisfied (`V1-PHASE-CLOSURE.md` L429–L430); `B-044` is Verified at `cf51724` (30 PostgreSQL assertions). Live hosted anon-key behaviour stays unverified under `DEP-05`.*" |
| R24 | `docs/v1/V1-DECISION-REGISTER.md` §5.14by, end of the `C-33` section (after L2986) | — | Append one dated line: "**Satisfied (recorded in `V1-PHASE-CLOSURE.md`; `B-044` Verified at `cf51724`).** The DEP-05 limit stays." The Register's own C-33 text stays unchanged above it. |
| R25 | `docs/v1/V1-BUILD-SPEC.md` L531 | "`G11`'s detection half — the shared-core hash, the `D-54` tier sweep, the §5.1 duplicate scan, and `missing.js` — is verification apparatus …" | Keep as history and append: "*(Later state: `D-337` replaced the shared-core hash with `rule-budget`; `D-246` made `graph-coverage` the node check and `missing.js` a reference report only.)*" |

### F3.6 Lane map, merge6.js note, and proposals for other lanes

| # | Target | Proposed change | Note |
|---|---|---|---|
| R26 | `scripts/checks/lane-boundary.mjs`, Lane B `test` | Add `p === "middleware.ts"` | **Proposed, not an allocation.** Basis: application code (F2a.5). Fixture: `middleware.ts` → B; `next.config.ts` stays A; `docs/handoff/x.md` stays unmapped. |
| R27 | Same file, Lane B `test` | Add `p === ".env.example"` | **Proposed.** Limit: no decision names env templates; the basis is `43c51ce` practice and the S0 assignment (F2a.5). The Judge may prefer to leave it unmapped. |
| R28 | `.onlyaiapp` | No map change. Two options for F6: (a) a Register act allocates it; (b) an explicit "unmapped by reason" note in `lane-boundary.mjs` beside the `D-90` comment. | Ownership stays **unknown** until the Judge chooses. |
| R29 | `docs/graph-fragments/README.md` §4 L111 | After "`merge6.js` is retained for history but hard-codes an absolute path", add: "Do not run it: it writes `./.graphify/graph.json` directly, which `D-425` forbids outside the guarded procedure." | F2a O2. |
| P1 | `.github/workflows/ci.yml` L3–L5 comment (**Lane C proposal**) | "`TC6` sets `ignoreBuildErrors` in `next.config.ts`, and `next build` never runs lint, so a build-only job stays green on broken types and unlinted code …" | Lane C decides and applies under its own unit. |
| P2 | `.env.example` comment "used for redirect URLs" (**Lane B proposal**, F2a O3) | Lane B either explains the variable's purpose or removes the comment. | Product-facing; no Lane A edit. |

### F3.7 AG-2 — classification of the initial AGENTS.md conventions (`62c8d8c`)

| Initial section | Classification | Current authority and locus |
|---|---|---|
| Stack (Next 15, React 19, Tailwind 4, Supabase SSR, Bun) | **History.** The current declarations are in `package.json` (Next `^16.3.3`, React `^19`, Tailwind `^4`, bun 1.1.30) | `package.json`; G108/D-157 |
| Supabase client patterns: no service key in the browser | **Keep.** Current requirement | `AC-NF-04` (Modular_PRD L1135); `lib/supabase/client.ts` reads public keys only (F2a row 5) |
| Supabase client patterns: Server Components by default; Server Actions preferred | **Proposed only.** A preference, not a requirement. Each write path follows its selected contract (for example `D-143`: an Edge Function for publication) | `D-143`, Build Spec S4 |
| Path alias `@/*` | **Keep.** Configuration fact | `tsconfig.json` L17–L18 |
| Stripe payments | **History, in three objects:** V1 exclusion (NG-03, live); future capability PBL-02 (unranked, not refinement-ready, no provider); scaffold removal (B-003 Verified at `67706ca`). Not retired from the Project | Modular_PRD §2.5, §2.5.2; D-121/D-187/D-188 |
| gstack workflow (Plan, Review, Ship, Deploy, QA, Security audit) | **Declared inception intent.** Current installation, use and any supersession: **unknown**. The activities map to current mechanisms only as a **proposed** correspondence (F5) | `62c8d8c` AGENTS.md L94–L102; Judge clarification `e7bdd29` |

No row restores retired scope, adopts a tool or authorizes a command.

---

## F4 — Instrument plan (what each instrument observes, and its limits)

| Instrument | Status | What it observes | What it does not establish | Negative control / refusal |
|---|---|---|---|---|
| `git grep` plus source reading | **Adopted** for codebase navigation (`D-433`) | Literal matches at a named revision; the text a reviewer reads | Meaning, completeness; a no-match is not missing intent | `git grep` exit 1 with empty stderr is the only no-match; any other exit is an error |
| Graphify (`graphify query`, guarded rebuild) | **Operative** as a governance/docs projection (`D-425`, `D-426`) | Navigation over governed sources; currency against `lastAnalyzedHead` | Semantic currency (AG-1 is a counterexample); retrieval delivery (AIG-07 is unallocated) | Raw rebuild or update forbidden; currency only through `docs-drift` and `branch.json` |
| B-156 citation verifiers (`F2a-verify-r2.mjs` `verify()`; F2b/F2c wrappers) | Evidence tooling for this audit | That the cited text is on the cited line; absence after a successful tree lookup; same blob at two revisions | Semantic agreement; a correct reading of the whole clause (the G108b miss) | Nine control arms (F2a r2); false-citation arm for each wrapper |
| F2b/F2c measurement scripts | Evidence tooling | Inventory derivation; literal links; fragment structure; endpoint resolution against the **identified** live graph | Locus validity (a tracked `source_file` is not a valid `source_location`); a merge proof; meaning | Refuses unless the derived count is exact; stops on any Git error before writing |
| F2c term probe | Evidence tooling | Case-sensitive match of six terms in node `label` and `description` | Any term not listed; any other field; agreement for nodes with no hit | — (a probe, not a check) |
| F2c conflict fingerprint | Evidence tooling | Duplicate ids whose `label`, `description`, `source_file` or `source_location` differ | Differences in any other node field | — |
| `node scripts/check-consistency.mjs` (19 checks) | **Operative** apparatus | Its checks' contracts | Behaviour, product acceptance; it did not detect F2a-R1 or AG-1 | Each check's own fixtures |
| `rule-budget` | **Operative** | Sizes, the import, no copied core line of 60+ characters, no HTML comment, no live lane-state row | Copied lines shorter than 60 characters | `fixtures` rule-budget suite |
| `bun run fixtures`, `bun test`, `bun run jev:selftest` | **Operative** suites | Their stated cases | Independence (the F2b runs are Lane A's own); CI host behaviour | Positive and negative cases per suite |
| Ripwire | **Not adopted** (`D-433`) | — | — | A proposed use needs its own unit: task, host, configuration, controls, cleanup |
| gstack commands | Declared at inception; **availability unknown** | — | — | No execution in this audit. A mapping proposal states host, permission and lane effects first |
| AIG-07 retrieval | **Proposed, unallocated** (`D-424`) | — | — | No retrieval claim from graph currency |

**Host facts for this packet** (Lane A host): Windows 11, Git Bash and PowerShell 5.1, Node v24.18.0, Git 2.54.0.windows.1, Bun 1.1.30
(`packageManager`). `bun run check` runs the same body as `node scripts/check-consistency.mjs`; Lane B's shell reports
`CouldntReadCurrentDirectory` from Bun, so both lanes cite the Node command. **Cleanup:** every B-156 script writes only
to a named output directory, with exclusive create; scratch outputs stay outside the repository.

**Execution authority.** Running an existing operative instrument read-only needs no new act. A new instrument, a new
trial, a configuration change or a changed host needs its own bounded unit (F6).

---

## F5 — Progressive baseline contract

### F5.1 Truth layers (SPECS-VERIFICATION §18.1)

Each baseline row keeps four layers apart: **normative intent** (decision, requirement, specification),
**implemented revision** (blob at a commit), **deployed instance** (where one exists; none for setup today) and
**searchable projection** (graph identity). A pass in one layer is not a pass in another.

### F5.2 Row format (from `e7bdd29`, extended)

`path` · `role` · `intent/decision locus` and read revision · `requirement/spec and acceptance criterion` ·
`workflow activity` (proposed gstack correspondence) · `mechanism and availability` · `implementation blob` ·
`verification result and revision` · `deployed instance` · `projection identity` · `semantic state` (assessed
agreement / difference / unassessed / known retained gap) · `owner` · `return condition` · `permitted claim`.

### F5.3 Proposed retrospective setup snapshot — label **S0-setup** (proposed, not accepted)

| Field | Value |
|---|---|
| Revision | `1640ff7bc1b7d1e70ab6a421ced8a054dafda993` |
| Corpus | 225 candidates; 224 included; `README.md` excluded as metadata (F1 r2) |
| Projection | Live graph `81ab5cd6…`, analysed head `93aa02f` (fragments identical at `93aa02f` and `1640ff7`) |
| Rows assessed: agreement | F2b 13; F2c 7; F2a rows as Verified |
| Rows with a difference | F2b 6; F2c 3 nodes in 3 fragments; plus governing-text differences R1, R5–R9, R13–R20, R23–R25 |
| Rows unassessed | F2b 43; F2c 130 fragments; plus the unread nodes of 9 partly read fragments |
| Known retained gaps | G108b (`eslint-config-next` pairing, D-157); the G4 Jev receipt is evidence for `31bcf3a` only |
| F2a residual unknowns | `.onlyaiapp` ownership; intent of rows 1–4 and 15; `client.ts` aliases |
| **Permitted claims** | "Every included path has one first F2 row with evidence"; "the listed differences exist at `1640ff7`" |
| **Not permitted** | "Setup source semantically agrees with its requirements"; any SM05 credit; current DOR-R7 readiness; compatibility of G108b |

**Before S0-setup can be accepted**, each unassessed row needs an assessment or an explicit retained scope with owner,
trigger and claim limit. Lane A proposes this order: (1) the 43 F2b rows (governance controls and root configuration
first); (2) the 9 partly read fragments; (3) the 130 fragments, by source document. No row is passed in bulk.

### F5.4 Later baselines

A later baseline names its **predecessor** and the delta: `git diff --name-only <predecessor>..<new>` over the corpus,
then re-runs the measurement and verification scripts. It reassesses **only** changed rows and rows whose cited
source changed; unchanged accepted rows carry forward with their original revision. A comparison claim needs a
predecessor and a criterion (K2). Graph-node or symbol counts are never an acceptance score.

### F5.5 Interface to product baselines

Each product increment (for example `V1-SM05`) has its own baseline under its packet, scenarios and Jev manifest
(`B-127`, `B-134`). S0-setup rows are inputs that the product baseline may cite. They earn no delivery credit. A
product baseline takes a fresh Jev evaluation at its own revision; it does not reuse the `31bcf3a` receipt.

---

## F6 — Review packet and option impacts

### F6.1 Claim rows for independent review

Format (`2251b4a`): claim · object/use case/version · conclusion · governing locus and read revision · support ·
evidence · limit · owner / reviewer / return.

| Claim | Conclusion | Locus (at `1640ff7`) | Reviewer |
|---|---|---|---|
| C1 | SPECS-VERIFICATION §4.1 states a removed lint setting as current | L96–L101; `next.config.ts` L8–L10 | Lane B |
| C2 | `frag13` repeats C1 | node `ci_that_cannot_fail` | Lane B |
| C3 | FN/Modular_PRD/SPECS-ML name the retired parity check as current | FN L177–L179, L213–L214; PRD L883; SPECS-ML L106 | Lane B |
| C4 | `frag7` states the retired three-file model as current; `frag15` cites a dead locus | the two nodes | Lane B |
| C5 | A default CI checkout SKIPs four checks, not three | `terminal-return.mjs` L391–L402; `ci.yml` L22; WORKFLOWS-SPEC §3 | **Lane C** (host output at a named revision) |
| C6 | The `ci.yml` comment names a removed lint setting | `ci.yml` L3–L5 | **Lane C** |
| C7 | `GEMINI.md` L13, L31–L32 and L34–L35 are stale | `GEMINI.md` | Lane B; **Lane C** (its rule file) |
| C8 | `GEMINI.md` falls under `merge=union` | `.gitattributes`; `git check-attr` | Lane B; **Lane C** |
| C9 | `C-33` is satisfied, but Build Spec L660 still reads "NOT yet earned" | Phase Closure L429–L430; B-044 | Lane B |
| C10 | Every repair path in F3 is governed | `classifyChangedPaths` | Lane B |

### F6.2 Overlap with `D-434`

`D-434` revision 2 (accepted for Judge assessment at B-136 `abc9218`) changes: `SV-002.md` (§1, §2.2, §2.3.1, §2.3.2,
§5, §7), `GOV-RES-001`, `V1-SM05.md`, `frag139`, `frag140` (FN leaf), the FN file (SCOPE-1–3: §1, introduction, §4.4),
the Build Spec §1 SM05 cell, the Inventory `SV-002.md` row, and the Register. **Line-level overlap with F3: none.
File-level overlap:** the FN file (R5–R7 are in §4.6 and the §5 table), the Build Spec (R23, R25), the Inventory (R17)
and the Register (R24, and the new act). `D-434` cycle 2 is accepted for issuance and must not be reopened.

### F6.3 Options for applying F3 (for a later Judge decision; none is requested now)

| Option | Authority | Prerequisites | Affected artifacts | Pass / refusal evidence | Sync cost | Stop point |
|---|---|---|---|---|---|---|
| **A (recommended): one bounded unit after `D-434` cycle 2** | A new Register act `D-NNN` naming R1–R29 (or a subset); its own receipt route | `D-434` issued, applied and its cycle 2 complete; Lane B accepts this packet; Lane C reviews C5–C8 | All F3 Lane A paths; Register, Build Spec, Inventory `D-54` entries | Each old text matches before edit (stop on mismatch); `git check-attr` for R21 with its negative control; lane-boundary fixtures for R26–R27; full consistency check (red only for `docs-drift` inside the guarded sequence, `D-428`); Lane B byte and semantic receipt | **One guarded cycle** for the batch, because every path is governed | Stops after the candidate receipt; publication per the act's own option |
| B: fold into `D-434` cycle 2 | Amend `D-434` before issuance | Reopen an accepted, frozen draft | Same, plus D-434 | Same | One cycle | **Not recommended:** it reopens an accepted docket |
| C: split into docs repairs, then map and attribute repairs | Two acts | As A | Split by group | As A | **Two** guarded cycles | After each candidate receipt |
| D: no application now | None | None | None | S0-setup records the differences as known | None | Now; the differences stay open with owners |

Lane C applies P1 (`ci.yml` comment) under its own unit; Lane B decides P2 (`.env.example` comment). Neither is a
Lane A edit. `.onlyaiapp` (R28) needs the Judge's choice between (a) and (b) inside the act.

**The batch push** is separate: it waits for a push point the Judge authorizes, with the range counted again.

### F6.4 What closes B-156 (unchanged from the entry)

The six outputs exist; F1–F6 have independent outcomes; every retained item has an owner, destination and return
condition (`D-264` item 2 applies to the transfer). Applying F3, running new instruments or accepting S0-setup is
**not** required to close the planning unit. Those are later acts.
