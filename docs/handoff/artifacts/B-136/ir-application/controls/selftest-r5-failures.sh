#!/usr/bin/env bash
# Disposable failure-path tests for run-controls-r5.sh (G4, Lane B 07737b4). Changes nothing in the harness.
# T4 fixture-commit failure: GIT_CONFIG_* sets core.hooksPath to a folder whose pre-commit hook exits 1, so the first
#    fixture commit (C2a) fails. Required: exit 3; C1 recorded; no case after C2a; no verdict line; logs kept.
# T5 evidence-write failure: a 'tee' shim first on PATH exits 1, so the first result write fails. Required: exit 3;
#    no case result line; no verdict line; the header and the C1 raw log kept.
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
H="$HERE/ir-apply-r4.mjs"; O="$HERE/ownership-128e0d4.json"
HS=$(sha256sum < "$H" | cut -c1-64); OS=$(sha256sum < "$O" | cut -c1-64)
OUT="$HERE/selftest-r5-failures.txt"; [ -e "$OUT" ] && { echo "exists: $OUT"; exit 1; }
SHIM="$(mktemp -d)"; mkdir -p "$SHIM/hooks" "$SHIM/bin"
printf '#!/bin/sh\nexit 1\n' > "$SHIM/hooks/pre-commit"; chmod +x "$SHIM/hooks/pre-commit"
printf '#!/bin/sh\ncat > /dev/null\nexit 1\n' > "$SHIM/bin/tee"; chmod +x "$SHIM/bin/tee"
latest() { ls -d "$HERE"/runs/*/ | sort | tail -1; }
check() { # $1 test, $2 exit, $3 run folder
  local r="$3" res="$3results.txt"
  local cases; cases=$(grep -c ' | ' "$res" 2>/dev/null || true)
  local verdict; verdict=$(grep -c '^--- cases:' "$res" 2>/dev/null || true)
  local logs; logs=$(ls "$r/logs" 2>/dev/null | tr '\n' ' ')
  echo "$1 | exit $2 (want 3) | case lines $cases | verdict lines $verdict (want 0) | logs: $logs| results tail: $(tail -1 "$res" 2>/dev/null)" | tee -a "$OUT"
}
echo "harness $(sha256sum < "$HERE/run-controls-r5.sh" | cut -c1-64); helper $HS; ownership $OS" > "$OUT"

GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=core.hooksPath GIT_CONFIG_VALUE_0="$SHIM/hooks" \
  bash "$HERE/run-controls-r5.sh" "$H" "$HS" "$O" "$OS" > "$HERE/selftest-T4.out" 2>&1; e=$?
check T4-fixture-commit-failure $e "$(latest)"; sleep 1

PATH="$SHIM/bin:$PATH" bash "$HERE/run-controls-r5.sh" "$H" "$HS" "$O" "$OS" > "$HERE/selftest-T5.out" 2>&1; e=$?
check T5-evidence-write-failure $e "$(latest)"

rm -rf "$SHIM"
