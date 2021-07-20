# 个人配置说明

所有提供个人配置的说明

## Notepad3

1. [`theme/`](https://github.com/yi-Xu-0100/Application-Lists/tree/main/config/Notepad3) 内容是 [`Notepad3`](https://github.com/rizonesoft/Notepad3) 的主题配色配置文件，来自[`maboroshin/Notepad3ColorTheme`](https://github.com/maboroshin/Notepad3ColorTheme)。
2. [`register-right-click-menu.reg`](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/Notepad3/register-right-click-menu.reg) 是 `Windows` 的注册表文件，用于给 `Notepad3` 注册单文件右键打开选项。**要求 `Notepad3` 的安装位置在 `D:\\Applications\\Notepad3\\Notepad3.exe`，可编辑该文件以适配。**

## SumatraPDF.txt

SumatraPDF 的配置文件。

## pakku.json

[pakku](https://s.xmcp.ml/pakkujs/) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/pakku.json)。

## tampermonkey.zip

[tampermonkey](https://www.tampermonkey.net/?ext=dhdg&browser=chrome) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/tampermonkey.zip)。

## stylus.json

[stylus](https://add0n.com/stylus.html) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/stylus.json)。

## snipaste.ini

[snipaste](https://zh.snipaste.com/) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/snipaste.ini)。

## TrafficMonitor

[`TrafficMonitor`](https://github.com/zhongyang219/TrafficMonitor) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/tree/main/config/TrafficMonitor)。

## v2rayN.txt

v2rayN 中设置的个人自定义 pac 配置。

## ClashForWindows

### cfw-settings.yaml

[`clash_for_windows_pkg`](https://github.com/Fndroid/clash_for_windows_pkg) 的界面配置 - [`cfw-settings.yaml`](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/ClashForWindows/cfw-settings.yaml)。

**请注意以下几点，没有提到可提 [`issue`](https://github.com/yi-Xu-0100/Application-Lists/issues)。**

1. 文件中的 `profilePath` 为无法使用的路径，使用配置后，需要在软件中选择自己的配置文件并重启软件！
2. `parsers` 默认启用，脚本均来自 [`yi-Xu-0100/cfw-script`](https://github.com/yi-Xu-0100/cfw-scripts)，请自行适配！
3. `childProcess` 默认启动 [`subconverter`](https://github.com/tindy2013/subconverter)，请自行适配！

### mixin.yaml

[`mixin`](https://docs.cfw.lbyczf.com/contents/mixin.html) 配置片段的[示例](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/ClashForWindows/mixin.yaml)。

### parser.yaml

[`parser`](https://docs.cfw.lbyczf.com/contents/parser.html) 配置片段的[示例](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/ClashForWindows/parser.yaml)。

## neatdownloadmanager.json

neatdownloadmanager 的 menifest.json 文件，用于不在哔哩哔哩网站上显示下载图标。

## memreduct.ini

memreduct 的 个人配置文件。

## cmd_init.bat

cmd 启动加载的个人配置文件。

## Microsoft.PowerShell_profile.ps1

[PowerShell](https://docs.microsoft.com/en-us/powershell/) 启动加载的个人配置文件。

1. 安装 `posh-git`。

   ```powershell
   Install-Module posh-git -Scope CurrentUser
   ```

2. 使用 `$profile` 获得初始化脚本位置。
3. 将 [Microsoft.PowerShell_profile.ps1](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/Microsoft.PowerShell_profile.ps1) 的内容加入初始化脚本中。

## TranslucentTB.cfg

[TranslucentTB](https://github.com/TranslucentTB/TranslucentTB) 的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/translucenttb.cfg)。

## office

`office 365` 组件并不需要全部使用，可以通过下面完成自选部分组件的安装。

1. 获取 `Microsoft Store URL`。访问 <https://store.rg-adguard.net/>，使用 `word` 的购买链接查询。( `word` 购买链接：<https://www.microsoft.com/en-us/microsoft-365/p/word/cfq7ttc0k7c7>)

2. **首先安装 `Microsoft.Office.Desktop_16051.14026.20246.0_neutral_~_8wekyb3d8bbwe.appxbundle`!（此处的版本号后缀可能有区别，个人取最大值，后缀为 `appxbundle` 即可）**

3. 安装完 `Microsoft.Office.Desktop` 之后，再挑选需要的组件（后缀为 `appxbundle` 即可）下载安装。

4. 基本安装流程就是一个标准的 `UWP` 应用。

5. 最后安装完登陆微软账户,激活完事~

## saladict.json

[沙拉查词](https://saladict.crimx.com/)的[配置文件](https://github.com/yi-Xu-0100/Application-Lists/blob/main/config/saladict.json)。
