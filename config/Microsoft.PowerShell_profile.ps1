Import-Module posh-git;
$Env:http_proxy = "socks5://127.0.0.1:7890";
$Env:https_proxy = "socks5://127.0.0.1:7890";
$env:LC_ALL = 'C.UTF-8';
function prettier_write_all {
  if ((Test-Path "./.prettierrc.json") -and (Test-Path "./.prettierignore")) {
    prettier --write "**/*.{json,js,yml,md}"
  }
  elseif ((Test-Path "./.prettierrc.json") -and !(Test-Path "./.prettierignore")) {
    prettier --ignore-path "D://Applications/.prettierignore" --write "**/*.{json,js,yml,yaml,md}"
  }
  elseif (!(Test-Path "./.prettierrc.json") -and (Test-Path "./.prettierignore")) {
    prettier --config "D://Applications/.prettierrc.json" --write "**/*.{json,js,yml,yaml,md}"
  }
  elseif (!(Test-Path "./.prettierrc.json") -and !(Test-Path "./.prettierignore")) {
    prettier --config "D://Applications/.prettierrc.json" --ignore-path "D://Applications/.prettierignore" --write "**/*.{json,js,yml,yaml,md}"
  }
}
function prettier_check_all {
  if ((Test-Path "./.prettierrc.json") -and (Test-Path "./.prettierignore")) {
    prettier --check "**/*.{json,js,yml,yaml,md}"
  }
  elseif ((Test-Path "./.prettierrc.json") -and !(Test-Path "./.prettierignore")) {
    prettier --ignore-path "D://Applications/.prettierignore" --check "**/*.{json,js,yml,yaml,md}"
  }
  elseif (!(Test-Path "./.prettierrc.json") -and (Test-Path "./.prettierignore")) {
    prettier --config "D://Applications/.prettierrc.json" --check "**/*.{json,js,yml,yaml,md}"
  }
  elseif (!(Test-Path "./.prettierrc.json") -and !(Test-Path "./.prettierignore")) {
    prettier --config "D://Applications/.prettierrc.json" --ignore-path "D://Applications/.prettierignore" --check "**/*.{json,js,yml,yaml,md}"
  }
}
Set-Alias lint prettier_write_all
Set-Alias check prettier_check_all
Write-Host "Personal profile:"$($($MyInvocation.MyCommand.Definition -replace [regex]::Escape($Env:UserProfile), '%UserProfile%') -replace [regex]::Escape($Env:windir), '%windir%') -ForegroundColor green
Write-Host "Personal profile loading......" -ForegroundColor green