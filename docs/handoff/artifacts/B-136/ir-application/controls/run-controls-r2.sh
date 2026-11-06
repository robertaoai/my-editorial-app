#!/usr/bin/env bash
# D-438 controls r2: helper and ownership manifest bound by SHA-256; each case requires an exact exit code and,
# for refusals, an exact reason substring; any wrong case makes this script exit 1.
# Usage: bash run-controls-r2.sh <helper.mjs> <helper-sha256> <ownership.json> <ownership-sha256>
set -u
HELPER="$1"; HSHA="$2"; OWN="$3"; OSHA="$4"
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC=/c/robertaoai/my-editorial-app
BASE=128e0d4
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
RES="$HERE/results-r2.txt"; : > "$RES"
[ "$(sha256sum < "$HELPER" | cut -c1-64)" = "$HSHA" ] || { echo "helper hash mismatch" | tee -a "$RES"; exit 1; }
[ "$(sha256sum < "$OWN" | cut -c1-64)" = "$OSHA" ] || { echo "ownership manifest hash mismatch" | tee -a "$RES"; exit 1; }
echo "helper $HSHA; ownership $OSHA; base $BASE" >> "$RES"
work="$HERE/work"; rm -rf "$work"; mkdir -p "$work"; wrong=0

fresh() {
  local d="$work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" && git -C "$d" checkout -q "$BASE" \
    && git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" && git -C "$d" config user.name robertaoai
  echo "$d"
}
# run <control> <want-exit> <want-reason-substring or -> <dir> <helper args...>
run() {
  local c="$1" want="$2" why="$3" d="$4"; shift 4
  mkdir -p "$d.out"
  IR_REPO="$d" IR_OUT="$d.out" IR_OWNERSHIP="$OWN" node "$HELPER" "$@" > "$d.out/$c-$1.log" 2>&1; local e=$?
  local last; last="$(tail -1 "$d.out/$c-$1.log")"
  local ok=OK
  [ "$e" = "$want" ] || ok=WRONG
  [ "$why" = "-" ] || grep -qF "$why" "$d.out/$c-$1.log" || ok=WRONG
  [ "$ok" = WRONG ] && wrong=$((wrong+1))
  echo "$c | $* | want exit $want${why:+ / \"$why\"} | got exit $e | $ok | $last" | tee -a "$RES"
}

d=$(fresh c1); run C1 0 - "$d" s0
d=$(fresh c2a); printf '# Note\n`D-438` is reserved for the setup registration batch.\n' > "$d/docs/handoff/X-conflict.md"
git -C "$d" add -A && git -C "$d" commit -qm C2a; run C2a 2 "not in the reviewed ownership manifest: docs/handoff/X-conflict.md" "$d" s0
d=$(fresh c2b); printf '\n## Lane B — setup registration note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136"
git -C "$d" add -A && git -C "$d" commit -qm C2b; run C2b 2 "not in the reviewed ownership manifest: $B136" "$d" s0
d=$(fresh c2d); printf '\n## Lane A — IR application note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136"
git -C "$d" add -A && git -C "$d" commit -qm C2d; run C2d 2 "not in the reviewed ownership manifest: $B136" "$d" s0
d=$(fresh c2c); printf '\n## 5.14e262 `D-438` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md"
git -C "$d" add -A && git -C "$d" commit -qm C2c; run C2c 2 "S0 D-438 already in Register" "$d" s0
d=$(fresh c3); run C3 0 - "$d" apply
git -C "$d" add -A && git -C "$d" commit -qm C3; run C3 0 "five paths, every blob = expected" "$d" verify-apply "$(git -C "$d" rev-parse --short HEAD)"
d=$(fresh c4a); IR_TEST_INJECT=docs/Modular_PRD.md run C4a 2 "E2b written docs/Modular_PRD.md" "$d" apply
d=$(fresh c4b); run C4b 0 - "$d" apply
printf 'X' >> "$d/docs/specs/SPECS-PUBLICATION.md"
git -C "$d" add -A && git -C "$d" commit -qm C4b; run C4b 2 "E5 blob docs/specs/SPECS-PUBLICATION.md" "$d" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

echo "--- wrong: $wrong" | tee -a "$RES"
[ "$wrong" -eq 0 ] || exit 1
