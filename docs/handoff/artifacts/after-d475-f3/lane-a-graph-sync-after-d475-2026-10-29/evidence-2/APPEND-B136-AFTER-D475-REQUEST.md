
## Lane A — graph-sync candidate ready at S = `D-475` `22b0a8c`; request for Lane B's exact-byte candidate review, 2026-10-29

Filed under the operative `D-425`–`D-429` procedure and `D-451`, and the Judge's direct acts, each retained verbatim under
`C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/`: the cycle release that accepts `D-475` and confirms the
operator freeze from entry through publication (`evidence/JUDGE-AFTER-D475-CYCLE-RELEASE.jsonl`, Lane A line 5830, SHA-256
`f02a332835c51ace8b156ed8d5cc0240eed7b5fdd6294625c47c2cf85e9bdf76`), and the one-resume release
(`reviews-1/JUDGE-RESUME-RELEASE.jsonl`, Lane A line 5933, SHA-256
`08ab4ba0ee3e168df1455c0bb4eca8576037fd7c9c40eb9ab3090830a2ab93df`). Each is approval received, pending durable
registration in a later, separately authorized entry. This is the cycle's first handoff commit (R). It requests review
only and claims no candidate acceptance, publication or full health. This cycle carries no push authority.

### What happened

| Binding | Value |
|---|---|
| Source S (`D-475`) | `22b0a8ce2fb06c16152fa9490d21aae829a45974`, tree `7e28fd350438bb6e4b1cb871d75ad9185d44703b`; parent H6 `b4604bc8a8ee69081b46d235166442a0ae7acb7b` (upstream) |
| Work folder / work ID | `C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work`; `7bd2af2f-82a0-40fc-872c-31009278ff1c` (from the guard) |
| Entry gates | 2026-10-29T11:22:19Z, 0 findings (`evidence/entry-gates-20261029T112219Z.json`), including the frozen stray work `cac590ad` (4,306 files unchanged) |
| Prepare | 11:22:54.890Z–11:26:29.469Z, exit 3, pending: 0 descriptions, 3 community names |
| Answers | r1, SHA-256 `89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70` (STATE `answersHash`), approved by Lane B (`reviews-1/LANE-B-PREPARE-ANSWERS-REVIEW.md`, SHA-256 `61a8e66604b13f614d62a3e77a6e723ccafbd3b53fa4079cf8a6a4a4e37d47a0`). Names are bound to complete member-set hashes |
| Resume | Pre-resume gates 2026-10-29T11:32:29Z, 0 findings (`evidence-2/preresume-gates-20261029T113229Z.json`); `prepare --resume … --answers …/evidence/answers-proposed.r1.json`, 11:32:51.430Z–11:56:22.263Z, **exit 0, `ready`**, attempt 2 |
| STATE | `work/STATE.json`, state `ready`, 2 attempts, SHA-256 `1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e` |
| Candidate (staging) | `work/attempt-2/staging` |
| Graph | `graph.json` SHA-256 `df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557` (3,614 nodes, 7,548 links, 177 communities) |
| Manifest | `guard-treeDigest-v1` digest `34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13`, 583 files; frozen at 2026-10-29T11:56:03.435Z |
| Baseline (guard-selected) | release locus `77af44a2fcf84a7e7c05013308cc474e6bfaef41` (receipt K of the Q6 cycle), digest `a51dc92d0ee08082c87b871dfe3117d08fd68089851f9372cbd3538bea8eaf4d`, 583 files |
| Selection | oracle `04347a29a9cb55c7f0e4255afe78be08e5e9779fda5e773fddd5a701deb30f3b` |

**Lane A's read-only verification of the staged candidate** (`evidence-2/candidate-verification.json`, SHA-256
`4369433559afa4dc14cb669448ae9e8c747f672bc2d9a063062c1799b9b8e2ab`; not candidate acceptance):

- Graph bytes equal STATE; an independent recomputation of the 583-file tree gives the same manifest digest.
- Fragment parity (guard read-only function): **140 / 140 exact**, no diffs. Name binding: **0 findings**. 177 labels, no
  duplicate; all 3 answered names are applied; every node's `community_name` equals its label.
- Unresolved semantic items: **0**. `missing-desc.json` is empty. Two nodes carry no description; both are undescribed in
  the baseline too (inherited, not new).
- Branch record in the candidate: `lastAnalyzedHead` S, `stale: false`.

**Freeze.** Operator coverage was confirmed by the Judge in the cycle release, before the entry gates. From the entry
snapshot to after the resume (`evidence-2/post-resume-freeze.json`, 0 findings): every ref outside
`refs/codex/turn-diffs/` is unchanged, configuration is unchanged, no lock or journal exists, the live graph is unchanged
(still the Q6 release, `4c3829a5…`, 16 receipts), the linked-worktree untracked skill paths equal the accepted inventory
(`3e32d008…`), with HEADs `5ddf17c` and `1945c19`, and the stray work `cac590ad` is unchanged. Earlier byte continuity
stays unproved.

### What you need

Lane B's independent exact-byte review of this candidate: bindings; complete bytes and manifest; fragment parity;
descriptions; complete member sets and applied names; producer projections; Git extraction and selection; final state;
zero unresolved semantics. On approval, Lane B records one canonical "### F3 acceptance record" in B-050 (K), then a
separate terminal annotation (N). On a finding, the cycle stops under the operative failure route (`D-467` item 9).

### What you did instead

- No B-050 receipt, annotation, publication or push. The live graph is not touched. Stray work `cac590ad` stays frozen.
- B-136 stays **Open**; its header is unchanged. B-158 and D-439 stay Open. U-C stays held. J1/`D-440` and J2/`D-441`
  stay separate with both transfers held.
- Coverage: 61 historically delivered commits through H6 `b4604bc`; `D-475` pending; this commit joins when created. K, N
  and the health record stay prospective. No fresh remote-state claim.
