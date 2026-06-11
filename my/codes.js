window.CODES = {
 "cant-connect": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "မချိတ်နိုင် / ချိတ်ဆက်မှုကျရှုံး",
  "alias": "မချိတ်နိုင် ချိတ်ဆက်မှုကျရှုံး ချိတ်မရ timeout မဝင်နိုင် cant connect 连不上",
  "sym": "client က \"remote computer သို့ ချိတ်မရ / ကျရှုံး / timeout\" ပြ; host ထဲ မဝင်နိုင်.",
  "cause": "host ပိတ် / မ login / offline, firewall သို့မဟုတ် antivirus ပိတ်ဆို့, remote switch ချွတ်ယွင်း, အိမ် IP ပြောင်း, သို့မဟုတ် port အသုံးပြုနေ.",
  "fix": "1) host ဖွင့်, login & online ဖြစ်ကြောင်း အတည်ပြု; 2) firewall & antivirus တွင် UU Remote ခွင့်ပြု; 3) remote switch ပိတ်-ဖွင့်၍ reset; 4) IP refresh အတွက် router restart; 5) port 3389 အသုံးပြုနေလျှင် ပြောင်း သို့မဟုတ် ပဋိပက္ခ program ရပ်.",
  "prevent": "host ကို LAN IP အမြဲတမ်းပေး, ယုံကြည်စာရင်းတွင်ထည့်, ဖွင့် & online ထား.",
  "sev": "မြင့်"
 },
 "black-screen": {
  "cat": "ပုံ / မျက်နှာပြင်မည်း",
  "name": "ချိတ်ပြီးနောက် မျက်နှာပြင်မည်း",
  "alias": "မျက်နှာပြင်မည်း မည်း ပုံမရှိ black screen ချိတ်မည်း 黑屏",
  "sym": "ချိတ်ထားသော်လည်း ပုံ လုံးဝမည်း, မကြာခဏ အသံကြား & mouse မြင်.",
  "cause": "resolution မပံ့ပိုး, ဂိမ်း full-screen resolution != streaming resolution, GPU driver ဟောင်း, သို့မဟုတ် persistent bitmap caching ပျက်.",
  "fix": "1) host ကို 1080p ကဲ့သို့ ဖြစ်လေ့ရှိ resolution သို့ပြောင်း; 2) full-screen ဂိမ်းကို window လုပ်; 3) GPU driver update; 4) \"persistent bitmap caching\" ပိတ် (RDP Performance tab).",
  "prevent": "သဟဇာတ resolution သုံး, GPU driver အသစ်ထား.",
  "sev": "မြင့်"
 },
 "lag": {
  "cat": "နှောင့်နှေး / lag",
  "name": "နှေး / input နှောင့်နှေး",
  "alias": "နှေး lag input နှောင့်နှေး ဆွဲ တုံ့ နှေး lag 卡顿",
  "sym": "input နှောင့်နှေး ထင်ရှား, ဆွဲ / frame ကျ, တုံ့ပြန်မှုညံ့.",
  "cause": "ကွန်ရက်ပိတ်ဆို့ / packet ဆုံးရှုံး, Wi-Fi အားနည်း, host upload နည်း, bandwidth ထက် bitrate ပို, သို့မဟုတ် GPU driver အသစ်မှ encoder နှောင့်နှေး ပုံမှန်မဟုတ်.",
  "fix": "1) cable သို့မဟုတ် Wi-Fi 5GHz အနီးသွား; 2) လပ်ရာအတွက် bitrate/bandwidth ကန့်သတ်လျှော့; 3) packet ဆုံးရှုံးစစ်, bandwidth စားသော app ပိတ်; 4) host တွင် တည်ငြိမ်သော GPU driver ပြန်.",
  "prevent": "cable ဦးစား; bitrate < upload လပ်ရာဖြင့်.",
  "sev": "အလယ်အလတ်"
 },
 "disconnect": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "မကြာခဏပြတ် / စက္ကန့်အတွင်းပြတ်",
  "alias": "ပြတ် မကြာခဏပြတ် စက္ကန့်အတွင်းပြတ် အမြဲပြတ် disconnect 掉线",
  "sym": "စက္ကန့်အနည်းငယ် သို့မဟုတ် တစ်မိနစ်အတွင်း ပြတ်, ထပ်ခါထပ်ခါ ပြန်ချိတ်.",
  "cause": "ကွန်ရက်မတည်ငြိမ် / ဆုံးရှုံး, keep-alive မသတ်မှတ်, security layer သို့မဟုတ် certificate ပြဿနာ, သို့မဟုတ် TermDD X.224 protocol error (Event ID 50).",
  "fix": "1) packet ဆုံးရှုံး & routing တည်ငြိမ်မှုစစ်; 2) host တွင် keep-alive interval သတ်မှတ်; 3) security layer & encryption စစ်; 4) protocol ပြတ်တောက်မှုအတွက် Event Viewer Event ID 50 ကြည့်.",
  "prevent": "တည်ငြိမ်ကွန်ရက်, မှန်ကန်သော security layer & certificate.",
  "sev": "မြင့်"
 },
 "no-audio": {
  "cat": "အသံ / peripheral",
  "name": "အသံမရှိ",
  "alias": "အသံမရှိ audio မရှိ မကြား ပိတ်ထား speaker မရှိ 没声音",
  "sym": "ပုံကောင်းသော်လည်း remote ဘက်တွင် အသံမရှိ.",
  "cause": "host တွင် အသုံးပြုနိုင်သော audio device မရှိ (cloud PC / speaker မရှိ \"speaker သို့မဟုတ် headphone မချိတ်ထား\" ပြ) သို့မဟုတ် မှားသော capture device ရွေး.",
  "fix": "1) host တွင် virtual audio device (VB-Cable ကဲ့သို့) တပ်; 2) settings တွင် မှန်ကန်သော capture device ရွေး; 3) တစ်စုံတစ်ဦးချိတ်ထားလျှင် အသုံးချရန် ပြန်ချိတ်.",
  "prevent": "host တွင် အသုံးပြုနိုင်သော audio output device ရှိစေ.",
  "sev": "အလယ်အလတ်"
 },
 "controller": {
  "cat": "အသံ / peripheral",
  "name": "ထိန်းချုပ်ကိရိယာ / peripheral မမှတ်မိ",
  "alias": "ထိန်းချုပ်ကိရိယာ gamepad မမှတ်မိ peripheral keyboard mouse joystick မတုံ့ပြန် 手柄",
  "sym": "ထိန်းချုပ်ကိရိယာ, keyboard/mouse သို့မဟုတ် အခြား peripheral သည် remote ဘက်တွင် မမှတ်မိ သို့မဟုတ် မတုံ့ပြန်.",
  "cause": "client တွင် controller passthrough မဖွင့်, host တွင် controller driver မရှိ, သို့မဟုတ် အခြား program က device ကို သီးသန့်ကိုင်.",
  "fix": "1) UU Remote တွင် controller/peripheral passthrough ဖွင့်; 2) host တွင် သင့်လျော်သော controller driver တပ်; 3) ပြန်ချိတ် & device ကို သီးသန့်ကိုင်ထားသော program ပိတ်.",
  "prevent": "driver ကြိုတင်တပ် & passthrough ဖွင့်.",
  "sev": "အလယ်အလတ်"
 },
 "port-conflict": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "port ပဋိပက္ခ / listener ပြဿနာ",
  "alias": "port ပဋိပက္ခ port 3389 port အသုံးပြုနေ listener netstat 端口",
  "sym": "listener ပုံမှန်မဟုတ် / ချိတ်ဆက်မှု ငြင်းပယ်, self-hosted / တူညီစက် RDP တွင် ဖြစ်လေ့ရှိ.",
  "cause": "default RDP port 3389 (သို့မဟုတ် သတ်မှတ် port) ကို အခြား program သုံး.",
  "fix": "1) port သုံးသော PID ရှာရန် netstat -a -o; 2) tasklist /svc ဖြင့်တွဲ; 3) port ပြောင်း သို့မဟုတ် ပဋိပက္ခ program ရပ်, ထို့နောက် remote service restart.",
  "prevent": "remote tool များစွာ တူညီ port ကို မလုကြစေ.",
  "sev": "အလယ်အလတ်"
 },
 "sleep-wake": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "sleep/hibernate တွင်မရောက်နိုင်",
  "alias": "sleep hibernate နှိုး wol wake on lan မချိတ်နိုင် အိပ် 睡眠",
  "sym": "host မတုံ့ပြန် & လုံးဝ မချိတ်နိုင်.",
  "cause": "host သည် sleep သို့မဟုတ် hibernate ဝင်သွား၍ network card လျှပ်စစ်မရှိ & မတုံ့ပြန်.",
  "fix": "1) host power plan ကို ဘယ်တော့မှ sleep/hibernate မဖြစ်အောင်သတ်မှတ်; 2) Wake-on-LAN သို့မဟုတ် UU remote power-on ဖြင့်နှိုး; 3) နိုးပြီးနောက် ချိတ်ဆက်မှုစတင်.",
  "prevent": "sleep/hibernate ပိတ်, remote power-on သတ်မှတ်.",
  "sev": "အလယ်အလတ်"
 },
 "ipv6": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "IPv6 ကြောင့် မတည်ငြိမ်ချိတ်ဆက်မှု",
  "alias": "ipv6 မတည်ငြိမ် အလှည့်လိုက် တစ်ခါတစ်ရံချိတ် မတည်ငြိမ် တစ်ခါရ တစ်ခါမရ 时连时断",
  "sym": "အလှည့်လိုက် မချိတ်နိုင်, တစ်ခါရ တစ်ခါမရ, အခြားကွန်ရက်တွင် ပြန်ချိတ်ရ.",
  "cause": "system သည် IPv6 နှင့် ညံ့ဖျင်းစွာ လိုက်လျော၍ မရောက်နိုင်သော IPv6 လမ်းကြောင်း ဦးစားပေး.",
  "fix": "1) ပြန်ကောင်းမလားစစ်ရန် IPv6 ယာယီပိတ်; 2) router/system ကို IPv4 သို့သတ်မှတ်; 3) နှစ်ဖက် တူညီ network stack သုံးကြောင်း သေချာစေ.",
  "prevent": "နှစ်ဖက် တူညီ stack တွင်ထား; လိုအပ်လျှင် IPv6 ပိတ်.",
  "sev": "နိမ့်"
 },
 "artifacts": {
  "cat": "ပုံ / မျက်နှာပြင်မည်း",
  "name": "artifact / ဝါးသောပုံ",
  "alias": "artifact ဝါး မှုန် macroblock pixel အရည်အသွေးနိမ့် 花屏",
  "sym": "artifact / macroblock, သို့မဟုတ် အလုံးစုံ ဝါး၍ မရှင်းသောပုံ.",
  "cause": "bitrate နိမ့်လွန်း & အလိုအလျောက်လျှော့, hardware decoding ပုံမှန်မဟုတ်, သို့မဟုတ် ပုံကို ဖျက်သော packet ဆုံးရှုံး.",
  "fix": "1) bitrate တိုး; 2) software decoding စမ်းရန် host/client တွင် hardware decoding ပိတ်; 3) packet ဆုံးရှုံး & ကွန်ရက်တည်ငြိမ်မှုစစ်.",
  "prevent": "လုံလောက်သော bitrate ပေး; ကွန်ရက် တည်ငြိမ် & မဆုံးရှုံးထား.",
  "sev": "နိမ့်"
 },
 "security-error": {
  "cat": "ချိတ်ဆက်မှု / ပြတ်",
  "name": "security error - မချိတ်နိုင်",
  "alias": "security error လုံခြုံရေးအမှား certificate encryption authentication credential 安全错误",
  "sym": "\"security error ကြောင့် client သည် remote computer သို့ ချိတ်မရ\" ပြ.",
  "cause": "authentication/encryption layer မှားယွင်းပြင်ဆင်, သို့မဟုတ် license (authorization) certificate ပျက်.",
  "fix": "1) မှန်ကန်သော security layer & encryption level ပြင်ဆင်; 2) license certificate ပျက်လျှင် backup ပြီးနောက် X509 certificate registry key များဖျက် & licensing service ပြန်activate; 3) အချိန် & credential မှန်ကန်စစ်.",
  "prevent": "မှန်ကန်သော certificate & licensing ပြင်ဆင်ချက်.",
  "sev": "မြင့်"
 },
 "no-permission": {
  "cat": "အသံ / peripheral",
  "name": "account တွင် remote ခွင့်မရှိ",
  "alias": "ခွင့်မရှိ access ငြင်းပယ် remote desktop users connection limit logon ခွင့် 权限",
  "sym": "login ဝင်ပြီးနောက် remote control မစတင်နိုင်, ခွင့်မရှိ သို့မဟုတ် ငြင်းပယ် သတိပေးချက်ဖြင့်.",
  "cause": "account သည် \"Remote Desktop Users\" group တွင်မရှိ, သို့မဟုတ် \"Limit number of connections\" policy ပိတ်ဆို့.",
  "fix": "1) account ကို host ၏ \"Remote Desktop Users\" group တွင်ထည့်; 2) \"Limit number of connections\" group policy စစ် & လျှော့; 3) account တွင် remote logon ခွင့်ရှိကြောင်း အတည်ပြု.",
  "prevent": "account များ မှန်ကန်စွာခွင့်ပြု, သင့်လျော်သော connection limit policy.",
  "sev": "အလယ်အလတ်"
 }
};
window.LABELS = {"miss": "စာရင်းတွင်မရှိ - အခြားစကားလုံး စမ်းကြည့်ပါ (ဥပမာ မချိတ်နိုင် / မျက်နှာပြင်မည်း / နှေး / အသံမရှိ / ထိန်းချုပ်ကိရိယာ) သို့မဟုတ် အောက်ရှိ ဇယားအပြည့်ကြည့်ပါ.", "codeword": ""};
window.FIELDS = [["sym", "ရောဂါလက္ခဏာ"], ["cause", "ဖြစ်နိုင်ဆုံးအကြောင်းရင်း"], ["fix", "ဖြေရှင်းနည်းအဆင့်များ"], ["prevent", "ကာကွယ်ရေး / ကိုယ်တိုင်စစ်"], ["sev", "ပြင်းထန်မှု"]];
window.THEAD = ["ပြဿနာ", "အမျိုးအစား", "ရောဂါလက္ခဏာ", "ဖြေရှင်းဦးတည်ရာ"];
window.CHIPS = ["မချိတ်နိုင်", "မျက်နှာပြင်မည်း", "နှေး", "အသံမရှိ", "ပြတ်", "ထိန်းချုပ်ကိရိယာ"];
