#!/usr/bin/env bash
# D-438 controls C1-C4 for helper r2, each in a disposable clone at the historical input 128e0d4.
# Usage: bash run-controls.sh   (writes results.txt beside this script)
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC=/c/robertaoai/my-editorial-app
HELPER=/c/CoWork/outputs/lane-a-ir-doc-corrections-2026-10-15/apply/ir-apply-r2.mjs
BASE=128e0d4
B136=docs/handoff/B-136-multi-lane-governance-canonical-owners-and-state2-gate.md
RES="$HERE/results.txt"; : > "$RES"
work="$HERE/work"; rm -rf "$work"; mkdir -p "$work"

fresh() { # $1 = name -> prints clone dir
  local d="$work/$1"
  git clone -q --no-hardlinks "$SRC" "$d" && git -C "$d" checkout -q "$BASE" \
    && git -C "$d" config user.email "241258103+robertaoai@users.noreply.github.com" && git -C "$d" config user.name robertaoai
  echo "$d"
}
run() { # $1 control, $2 expected (pass|refuse), $3 dir, rest = helper args
  local c="$1" want="$2" d="$3"; shift 3
  mkdir -p "$d.out"
  IR_REPO="$d" IR_OUT="$d.out" node "$HELPER" "$@" > "$d.out/$c-$1.log" 2>&1; local e=$?
  local got=pass; [ $e -ne 0 ] && got=refuse
  local verdict=OK; [ "$got" != "$want" ] && verdict=WRONG
  echo "$c | mode $* | expected $want | got $got (exit $e) | $verdict | $(tail -1 "$d.out/$c-$1.log")" | tee -a "$RES"
}

# C1 valid IR promise: historical input as it was.
d=$(fresh c1); run C1 pass "$d" s0

# C2a conflicting commitment in a new file.
d=$(fresh c2a); printf '# Note\n`D-438` is reserved for the setup registration batch.\n' > "$d/docs/handoff/X-conflict.md"
git -C "$d" add -A && git -C "$d" commit -qm "control C2a"; run C2a refuse "$d" s0

# C2b conflicting commitment inside B-136, in a section about other work.
d=$(fresh c2b); printf '\n## Lane B — setup registration note, 2026-10-15\n\n`D-438` is reserved for the setup registration batch.\n' >> "$d/$B136"
git -C "$d" add -A && git -C "$d" commit -qm "control C2b"; run C2b refuse "$d" s0

# C2c Register already holds D-438.
d=$(fresh c2c); printf '\n## 5.14e262 `D-438` — other act\n' >> "$d/docs/v1/V1-DECISION-REGISTER.md"
git -C "$d" add -A && git -C "$d" commit -qm "control C2c"; run C2c refuse "$d" s0

# C3 multiple authorized writes: five files written one by one, committed, verified.
d=$(fresh c3); run C3 pass "$d" apply
git -C "$d" add -A && git -C "$d" commit -qm "control C3 apply"; run C3 pass "$d" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

# C4a unexpected edit between writes: one extra byte in the first written file.
d=$(fresh c4a); IR_TEST_INJECT=docs/Modular_PRD.md run C4a refuse "$d" apply

# C4b unexpected edit after the last write: caught by E5 on the committed objects.
d=$(fresh c4b); run C4b pass "$d" apply
printf 'X' >> "$d/docs/specs/SPECS-PUBLICATION.md"
git -C "$d" add -A && git -C "$d" commit -qm "control C4b"; run C4b refuse "$d" verify-apply "$(git -C "$d" rev-parse --short HEAD)"

echo "---" >> "$RES"
grep -c "| OK |" "$RES" | sed 's/^/OK count: /' | tee -a "$RES"
grep -c "| WRONG |" "$RES" | sed 's/^/WRONG count: /' | tee -a "$RES"
