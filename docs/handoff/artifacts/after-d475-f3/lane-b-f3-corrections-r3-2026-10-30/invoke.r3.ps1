# PLANNED ONLY. Run only after independent review and Judge release.
# Host: exact existing pwsh.exe below, PowerShell Core 7.6.5. No installation or shell switch is performed by this draft.
# Start that host with -NoProfile -NonInteractive -File <released copy of this exact text>.
# Bind the released wrapper path/bytes in the Judge act. Do not paste into a different shell.
$ErrorActionPreference = 'Stop'
$shellPath = 'C:/Users/rober_24syk4j/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe'
if ((Get-Process -Id $PID).Path -ne $shellPath.Replace('/','\') -or $PSVersionTable.PSEdition -ne 'Core' -or $PSVersionTable.PSVersion.ToString() -ne '7.6.5') { throw 'Wrong reviewed host' }
if ((Get-FileHash -LiteralPath $shellPath).Hash.ToLowerInvariant() -ne '362a356ce7f0940ec74f73a8fc2c990a2cc24a38a11c90bbd8eca947110ad139') { throw 'Shell bytes changed' }
$node = 'C:/Program Files/nodejs/node.exe'
$capture = 'C:/CoWork/outputs/lane-b-f3-corrections-r3-2026-10-30/capture.r3.mjs'
if ((Get-FileHash -LiteralPath $node).Hash.ToLowerInvariant() -ne '9a4eb5f1c29c6a2e93852ead46b999e284a6a5ca8bab4d4e241d587d025a52de') { throw 'Node bytes changed' }
if ((Get-FileHash -LiteralPath $capture).Hash.ToLowerInvariant() -ne 'bbb00be10f46b95e809ab994673ce94e3f1d71ffdb83086f7a54bb0d96715952') { throw 'Capture bytes changed' }
# No native stream redirection or pipeline. Capture owns both raw files and actual launcher exit.
# Keep the calling terminal transcript for bootstrap failure and host-result stdout fallback.
$ErrorActionPreference = 'Continue'
$PSNativeCommandUseErrorActionPreference = $false
$global:LASTEXITCODE = $null
& $node $capture
$captureExit = $LASTEXITCODE
if ($null -eq $captureExit) { exit 6 }
exit $captureExit
