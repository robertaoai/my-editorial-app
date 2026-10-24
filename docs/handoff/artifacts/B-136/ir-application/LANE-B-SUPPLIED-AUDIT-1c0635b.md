# Retained input — Lane B audit of `1c0635b`, supplied by the Judge in chat to Lane A, 2026-10-15

Not a Lane B commit. Summary of the supplied text (findings verbatim in substance):

- Closed for design: G1 route fallback; G2 Register body and successive states; G4 historical push qualification
  (historical checkpoint compliance stays UNVERIFIED). Five artifact hashes and seven source bindings match.
- **N1 — Number guard rejects its own commitment.** Section A stops if `D-438` is "taken or promised"; B-136 now records
  that number as promised to this IR act. Fix: permit the existing commitment to this exact IR object; refuse a
  conflicting commitment or existing registration.
- **N2 — Clean-status scope is undefined.** E2 requires clean status before every write; the first authorized write
  makes the target set dirty and the next write stops. Fix: one clean-state check before the commit's first write; before
  each later write, check the current file against its expected prior bytes; permit only earlier authorized writes whose
  bytes match expected outputs; keep E5.
- Plan: correct N1/N2; update references and hashes; define controls (valid IR promise, conflicting promise, multiple
  authorized writes, unexpected edit); return for delta review; then Judge choices. No drift; 19/19 log inspected, not
  rerun. Decision: REJECT as ready for application; Approve-with-conditions the corrected guard contract.
