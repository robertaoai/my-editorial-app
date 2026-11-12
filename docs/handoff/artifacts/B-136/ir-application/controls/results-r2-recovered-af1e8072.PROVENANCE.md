# Provenance — results-r2-recovered-af1e8072.txt

- **What it is:** a byte-exact recovery of the helper r3 controls summary that B-136 `b0c8290` bound as `results-r2.txt`
  (SHA-256 `af1e8072818cb347784f7bf98bf201fccc48d2259f91b3c0ea8004e3052563d7`, 1,948 bytes, LF, final newline).
- **Why:** Lane A's later helper r4 runs used the same harness and overwrote that file (disclosed at B-136 `257bccf`).
- **How:** recipe from Lane B (B-136 `8842c1a`): copy `results-r3-rerun.txt` (`18446a7e…`) and, only in its two
  `verify-apply` rows, replace C3's `4045b3e` with `65b73e5` and C4b's `1dc75fc` with `fd7148d`. The historical commit
  ids come from the earlier run's transcript; `logs/c3-C3-verify-apply.log` independently shows `65b73e5`.
- **Check:** the result's SHA-256 equals the bound value exactly.
- **It is not a new execution.** The rerun (`results-r3-rerun.txt`) and the overwritten file
  (`results-r2-overwritten-by-r4.txt`) are kept beside it.
