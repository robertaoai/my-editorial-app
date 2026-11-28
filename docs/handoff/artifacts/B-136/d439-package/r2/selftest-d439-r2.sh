#!/usr/bin/env bash
# Failure-path tests for run-controls-d439-r2.sh (F2, Lane B review of eb0aa44). Changes nothing in the harness.
# Each test makes one harness step fail on purpose. Required for every test: exit 3; no result line after the failing
# step (result-line count = the stated value); no verdict line; a SETUP FAILURE line and the run's logs kept.
#   T1 clone failure: CONTROLS_SRC names a missing repository -> 0 result lines.
#   T2 fixture-commit failure: GIT_CONFIG_* sets core.hooksPath to a pre-commit hook that exits 1; the first fixture
#      commit (K2) fails -> 4 result lines.
#   T3 evidence-copy failure: a 'cp' shim exits 1; the K2 expected-record copy fails -> 5 result lines.
#   T4-N evidence-write failure: a counting 'tee' shim fails on its Nth call -> N-1 result lines. N = 1 (first line),
#      9, 10, 12, 13 (the four K3 branches: only-E12 after verify, owner-TBD fixture, only-E12 after verify-commit,
#      expected-record equality), and 43 (the verdict line).
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
HARN="$HERE/run-controls-d439-r2.sh"; H="$HERE/ev-apply-d439-r2.mjs"; O="$HERE/ownership-eb0aa44.json"
HS=$(sha256sum < "$H" | cut -c1-64); OS=$(sha256sum < "$O" | cut -c1-64)
OUT="$HERE/selftest-d439-r2.txt"; [ -e "$OUT" ] && { echo "exists: $OUT"; exit 1; }
SHIM="$(mktemp -d)"; mkdir -p "$SHIM/hooks" "$SHIM/cpbin" "$SHIM/teebin"
printf '#!/bin/sh\nexit 1\n' > "$SHIM/hooks/pre-commit"; chmod +x "$SHIM/hooks/pre-commit"
printf '#!/bin/sh\ncat > /dev/null 2>&1\nexit 1\n' > "$SHIM/cpbin/cp"; chmod +x "$SHIM/cpbin/cp"
cat > "$SHIM/teebin/tee" <<'SH'
#!/bin/sh
n=$(cat "$TEE_COUNTER" 2>/dev/null || echo 0); n=$((n+1)); echo "$n" > "$TEE_COUNTER"
if [ "$n" -eq "$TEE_FAIL_AT" ]; then cat > /dev/null; exit 1; fi
exec /usr/bin/tee "$@"
SH
chmod +x "$SHIM/teebin/tee"
fails=0
latest() { ls -d "$HERE"/runs/*/ | sort | tail -1; }
check() { # $1 test, $2 exit, $3 run folder, $4 required result-line count
  local r="$3" res="$3results.txt"
  local cases; cases=$(grep -c ' | ' "$res" 2>/dev/null || true)
  local verdict; verdict=$(grep -c '^--- cases:' "$res" 2>/dev/null || true)
  local setup; setup=$(grep -c '^SETUP FAILURE' "$res" 2>/dev/null || true)
  local logs; logs=$(ls "$r/logs" 2>/dev/null | wc -l)
  local ok=OK
  [ "$2" = 3 ] && [ "$cases" = "$4" ] && [ "$verdict" = 0 ] && [ "$setup" = 1 ] || ok=WRONG
  [ "$ok" = WRONG ] && fails=$((fails+1))
  echo "$1 | exit $2 (want 3) | result lines $cases (want $4) | verdict lines $verdict (want 0) | setup-failure lines $setup (want 1) | logs kept $logs | $ok | $(grep '^SETUP FAILURE' "$res" 2>/dev/null)" >> "$OUT"
  sleep 1
}
echo "harness $(sha256sum < "$HARN" | cut -c1-64); helper $HS; ownership $OS" > "$OUT"

CONTROLS_SRC=/c/nonexistent-d439-source bash "$HARN" "$H" "$HS" "$O" "$OS" > /dev/null 2>&1; e=$?
check T1-clone-failure $e "$(latest)" 0

GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=core.hooksPath GIT_CONFIG_VALUE_0="$SHIM/hooks" \
  bash "$HARN" "$H" "$HS" "$O" "$OS" > /dev/null 2>&1; e=$?
check T2-fixture-commit-failure $e "$(latest)" 4

PATH="$SHIM/cpbin:$PATH" bash "$HARN" "$H" "$HS" "$O" "$OS" > /dev/null 2>&1; e=$?
check T3-evidence-copy-failure $e "$(latest)" 5

for N in 1 9 10 12 13 43; do
  rm -f "$SHIM/count"
  TEE_COUNTER="$SHIM/count" TEE_FAIL_AT=$N PATH="$SHIM/teebin:$PATH" bash "$HARN" "$H" "$HS" "$O" "$OS" > /dev/null 2>&1; e=$?
  check "T4-$N-evidence-write-failure" $e "$(latest)" $((N-1))
done

echo "--- tests: $(grep -c ' | ' "$OUT") wrong: $fails" >> "$OUT"
rm -rf "$SHIM"
cat "$OUT"
[ "$fails" -eq 0 ] || exit 1
