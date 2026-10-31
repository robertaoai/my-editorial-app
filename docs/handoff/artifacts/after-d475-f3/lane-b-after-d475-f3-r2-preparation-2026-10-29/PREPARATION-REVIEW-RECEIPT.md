# Lane B preparation receipt — author review, not independent F3 acceptance

The requested external draft is complete at R `71dfbbe7a09f194a9986c1f29d42ad507aec1af7`. This receipt records preparation and static inspection only. It is not an independent actor's `Verified` record, an execution release, a B-050 acceptance block, K, or N.

The execution packet and preparation packet were checked absent before creation. `entry.mjs` was exclusively created once. Its final binding is **52,288 bytes**, SHA-256 **`6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3`**. The separate preparation manifest binds it by absolute path. The execution packet contains only that file and remains unsealed; launcher, child and capture output directories remain absent.

Read and cross-checked: governance reference; Build Spec and operative Register entries; live lane/work-order constraints; current sync-docs §§7/9 and graph-fragment README §§4/5; B-136's final after-D-475 request; B-050's canonical F3 acceptance/lifecycle contract; pinned guard implementation; failed attempt and Git-path diagnosis; approved launcher r4 and plan r4b. The read-only planning task is the current authority. No other unit or lane execution permission is inferred.

Static inspection covers required-check completeness and fail-closed completion, full hash bindings, inherited environment, generated checkout reads, full candidate map, fragment node/edge fields, source-bound descriptions, complete member arrays and applied labels, historical Git-selection windows and final merges, file-policy composition, producer projections, linked/stray inventory, partial evidence retention and the two-record finalization contract. The worker retains the pinned validator's projection logic; explicit source-text changes are listed in `assembly-transformations.json`, including retained scratch, strict optional-JSON parsing and explicit completion/exit markers. No mutation entry point of the guard is called.

Preparation measurements, recorded in `preparation-final-check.json`:

- Child bytes unchanged from assembly; both child and embedded worker **parse**, exit 0 under Node `--check`. This confirms parsing only.
- Launcher r4 is still 21,015 bytes, SHA-256 `1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462`.
- Row-24 retained instruction equals source line **6410** plus LF, UUID `664d1468-91a3-422c-ae7c-6d7d4987a5a4`, in Lane A session `42f609c0-3f3b-49b0-abf7-f3d587359462`. Line 6413 is metadata. `row24-provenance.json` records this without changing the retained evidence.
- Before/after repository HEAD, clean status/staging, tracked-file hashes and configuration match. Refs outside `refs/codex/turn-diffs/` match; excluded checkpoint refs are retained separately.
- Before/after complete content maps match for the approved launcher packet, Lane A's entire after-D-475 packet (including work, STATE, answers, both generated checkouts and staging), the failed Lane B packet, frozen stray work, live graph state and release-receipt directory. See `preparation-preservation.json` and the two full snapshots.
- No child, launcher, projection, `bun run check`, install, transfer, prepare, resume, publication, fetch, push, staging, commit, K or N was run/recorded. No PATH or configuration assignment was made.

The preparation assembler was accidentally invoked a second time after creation; its empty-packet guard refused before any write. Existing bytes and that refusal remain qualified in the plan. No failed runtime attempt was retried or reclassified.

Runtime review remains wholly **planned**. In particular, parsing does not establish projection correctness, successful subprocess behavior, finalization fault-case behavior, semantic acceptance or full health. The independent reviewer should inspect the exact child, invocation, worker derivation, required-check ledger, historical-evidence limits and preservation rules. The child does not reconstruct unretained historical intermediate scope files or establish earlier continuity. Missing or contradictory required evidence must return a nonzero result; a positive binding check alone cannot count as F3 acceptance.

The approved launcher’s r4b failure matrix remains authoritative, including row 24. No launcher fault cases were run here. The planned runtime capture retains stdout, structured stderr fallback, preliminary records, authoritative completion records and all partial files. A missing capture/record or disagreement with the actual exit prevents acceptance.

Coverage remains **61 historically delivered; D-475 and R locally pending**. No fresh server claim. Preserve accepted deliveries, evidence and provenance gaps. U-C held; J1/D-440 and J2/D-441 separate with both transfers held; B-136, B-158 and D-439 Open; work-r3 held; `cac590ad` frozen and excluded; all other holds unchanged.

| Item | Verdict | Follow-up phase |
|---|---|---|
| Approved launcher r4 and plan r4b | Approve — preserved | Existing approval |
| External child and preparation artifacts | Approve-with-conditions — author preparation only | Independent exact-byte review |
| Runtime validation/F3 acceptance | Defer | Judge release, execution, independent evidence review |
| K and separate N | Defer | Existing gates after complete positive F3 |
| Publication, push and all held work | Defer | Existing separate gates |
