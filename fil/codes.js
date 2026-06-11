window.CODES = {
 "cant-connect": {
  "cat": "Koneksyon / diskonekta",
  "name": "Hindi kumokonekta / nabigong koneksyon",
  "alias": "hindi kumokonekta nabigong koneksyon di makakonekta timeout di makapasok cant connect 连不上",
  "sym": "Sinasabi ng client na \"hindi makakonekta sa remote computer / nabigo / timeout\"; hindi ka makapasok sa host.",
  "cause": "Host naka-off / hindi naka-login / offline, humaharang ang firewall o antivirus, sirang remote switch, nagbagong IP sa bahay, o gamit na ang port.",
  "fix": "1) Kumpirmahin na naka-on, naka-login, at online ang host; 2) payagan ang UU Remote sa firewall at antivirus; 3) i-off tapos i-on ang remote switch para mag-reset; 4) i-restart ang router para mag-refresh ng IP; 5) kung gamit ang port 3389, palitan o ihinto ang conflicting program.",
  "prevent": "Bigyan ang host ng fixed LAN IP, idagdag sa trusted list, panatilihing naka-on at online.",
  "sev": "Mataas"
 },
 "black-screen": {
  "cat": "Larawan / black screen",
  "name": "Black screen pagkatapos kumonekta",
  "alias": "black screen itim walang larawan blangko nakakonekta itim 黑屏",
  "sym": "Nakakonekta pero ganap na itim ang larawan, kadalasang habang naririnig ang tunog at nakikita ang mouse.",
  "cause": "Hindi suportado ang resolusyon, fullscreen resolution ng laro != resolusyon ng streaming, lumang GPU driver, o sirang persistent bitmap caching.",
  "fix": "1) Ilipat ang host sa karaniwang resolusyon tulad ng 1080p; 2) gawing windowed ang fullscreen na laro; 3) i-update ang GPU driver; 4) i-disable ang \"persistent bitmap caching\" (RDP Performance tab).",
  "prevent": "Gumamit ng compatible na resolusyon, panatilihing bago ang GPU driver.",
  "sev": "Mataas"
 },
 "lag": {
  "cat": "Latency / lag",
  "name": "Lag / input delay",
  "alias": "lag latency delay input delay pautal frame drop mabagal 卡顿",
  "sym": "Kapansin-pansin na input delay, pautal / frame drops, mahinang tugon.",
  "cause": "Network congestion / packet loss, mahinang Wi-Fi, mababang upload ng host, bitrate lampas sa bandwidth, o abnormal na encoder latency mula sa bagong GPU driver.",
  "fix": "1) Lumipat sa cable o lumapit sa 5GHz Wi-Fi; 2) ibaba ang bitrate/bandwidth limit para may reserba; 3) suriin ang packet loss, isara ang ibang bandwidth-hungry na app; 4) sa host ibalik ang stable na GPU driver.",
  "prevent": "Unahin ang cable; bitrate < upload na may reserba.",
  "sev": "Katamtaman"
 },
 "disconnect": {
  "cat": "Koneksyon / diskonekta",
  "name": "Madalas na diskonekta / diskonekta sa segundo",
  "alias": "nadidiskonekta madalas na diskonekta diskonekta sa segundo lagi nadidiskonekta disconnect 掉线",
  "sym": "Nadidiskonekta sa ilang segundo o isang minuto, paulit-ulit na nagko-connect muli.",
  "cause": "Network instability / loss, walang keep-alive, problema sa security layer o certificate, o TermDD X.224 protocol error (Event ID 50).",
  "fix": "1) Suriin ang packet loss at katatagan ng routing; 2) mag-set ng keep-alive interval sa host; 3) suriin ang security layer at encryption; 4) tingnan ang Event ID 50 sa Event Viewer para lokalisahin ang putol sa protocol.",
  "prevent": "Matatag na network, tamang security layer at certificate.",
  "sev": "Mataas"
 },
 "no-audio": {
  "cat": "Tunog / peripheral",
  "name": "Walang tunog",
  "alias": "walang tunog walang audio di marinig naka-mute walang speaker 没声音",
  "sym": "Maganda ang larawan pero walang tunog sa remote end.",
  "cause": "Walang magamit na audio device ang host (cloud PC / walang speaker ay nagpapakita ng \"No speakers or headphones are plugged in\") o maling capture device ang napili.",
  "fix": "1) Mag-install ng virtual audio device (tulad ng VB-Cable) sa host; 2) piliin ang tamang capture device sa settings; 3) kung may nakakonekta, mag-connect muli para mailapat.",
  "prevent": "Siguruhing may magamit na audio output device ang host.",
  "sev": "Katamtaman"
 },
 "controller": {
  "cat": "Tunog / peripheral",
  "name": "Hindi natutukoy ang controller / peripheral",
  "alias": "controller gamepad hindi natutukoy peripheral keyboard mouse joystick walang tugon 手柄",
  "sym": "Hindi natutukoy o hindi tumutugon ang controller, keyboard/mouse, o ibang peripheral sa remote end.",
  "cause": "Hindi naka-enable ang controller passthrough sa client, kulang na controller driver sa host, o may ibang programa na humahawak sa device nang eksklusibo.",
  "fix": "1) I-enable ang controller/peripheral passthrough sa UU Remote; 2) i-install ang tamang controller driver sa host; 3) mag-connect muli at isara ang programang humahawak sa device nang eksklusibo.",
  "prevent": "Mag-install ng driver nang maaga at i-enable ang passthrough.",
  "sev": "Katamtaman"
 },
 "port-conflict": {
  "cat": "Koneksyon / diskonekta",
  "name": "Port conflict / problema sa listener",
  "alias": "port conflict port 3389 gamit ang port listener netstat 端口",
  "sym": "Abnormal na listener / tinanggihan ang koneksyon, karaniwan sa self-hosted / same-machine RDP.",
  "cause": "Ginagamit ng ibang programa ang default RDP port 3389 (o ang naka-set na port).",
  "fix": "1) Gamitin ang netstat -a -o para hanapin ang PID na gumagamit ng port; 2) itugma sa tasklist /svc; 3) palitan ang port o ihinto ang conflicting program, tapos i-restart ang remote service.",
  "prevent": "Iwasan ang maraming remote tool na nag-aagawan sa parehong port.",
  "sev": "Katamtaman"
 },
 "sleep-wake": {
  "cat": "Koneksyon / diskonekta",
  "name": "Hindi maabot kapag naka-sleep/hibernate",
  "alias": "sleep hibernate gisingin wol wake on lan hindi kumokonekta natutulog 睡眠",
  "sym": "Hindi tumutugon ang host at hindi talaga kumokonekta.",
  "cause": "Pumasok sa sleep o hibernate ang host, kaya walang kuryente ang network card at hindi tumutugon.",
  "fix": "1) I-set ang power plan ng host sa hindi kailanman mag-sleep/hibernate; 2) gisingin gamit ang Wake-on-LAN o UU remote power-on; 3) umpisahan ang koneksyon pagkatapos magising.",
  "prevent": "I-disable ang sleep/hibernate, i-set ang remote power-on.",
  "sev": "Katamtaman"
 },
 "ipv6": {
  "cat": "Koneksyon / diskonekta",
  "name": "IPv6 ang sanhi ng pabago-bagong koneksyon",
  "alias": "ipv6 pabago-bago paminsan kumokonekta hindi matatag minsan oo minsan hindi 时连时断",
  "sym": "Paminsan-minsan hindi kumokonekta, pabago-bago, kumokonekta muli sa ibang network.",
  "cause": "Mahina ang adaptasyon ng system sa IPv6 at mas pinipili ang hindi maabot na IPv6 path.",
  "fix": "1) I-disable muna ang IPv6 para subukan kung gumaling; 2) i-set ang router/system sa IPv4; 3) siguruhing pareho ang network stack ng dalawang dulo.",
  "prevent": "Panatilihing pareho ang stack ng dalawang dulo; i-disable ang IPv6 kung kailangan.",
  "sev": "Mababa"
 },
 "artifacts": {
  "cat": "Larawan / black screen",
  "name": "Artifacts / malabong larawan",
  "alias": "artifacts malabo malabo macroblock pixelated mababang kalidad 花屏",
  "sym": "Artifacts / macroblocking, o sa kabuuan malabo at hindi malinaw na larawan.",
  "cause": "Masyadong mababa ang bitrate at awtomatikong ibinaba, abnormal na hardware decoding, o packet loss na sumisira sa larawan.",
  "fix": "1) Itaas ang bitrate; 2) i-disable ang hardware decoding sa host/client para subukan ang software decoding; 3) suriin ang packet loss at katatagan ng network.",
  "prevent": "Magbigay ng sapat na bitrate; panatilihing matatag at walang loss ang network.",
  "sev": "Mababa"
 },
 "security-error": {
  "cat": "Koneksyon / diskonekta",
  "name": "Security error - hindi kumokonekta",
  "alias": "security error certificate encryption authentication credentials 安全错误",
  "sym": "Nagpapakita ng \"dahil sa security error, hindi makakonekta ang client sa remote computer\".",
  "cause": "Maling-config na authentication/encryption layer, o sirang license (authorization) certificate.",
  "fix": "1) I-config ang tamang security layer at encryption level; 2) kung sira ang license certificate, pagkatapos mag-backup tanggalin ang X509 certificate registry keys at i-reactivate ang licensing service; 3) kumpirmahin na tama ang oras at credentials.",
  "prevent": "Tamang certificate at licensing configuration.",
  "sev": "Mataas"
 },
 "no-permission": {
  "cat": "Tunog / peripheral",
  "name": "Walang remote permission ang account",
  "alias": "walang pahintulot tinanggihan ang access remote desktop users connection limit logon rights 权限",
  "sym": "Pagkatapos mag-login hindi mo maumpisahan ang remote control, may babala na walang pahintulot o tinanggihan.",
  "cause": "Wala sa grupong \"Remote Desktop Users\" ang account, o humaharang ang policy na \"Limit number of connections\".",
  "fix": "1) Idagdag ang account sa grupong \"Remote Desktop Users\" ng host; 2) suriin at luwagan ang group policy na \"Limit number of connections\"; 3) kumpirmahin na may remote logon rights ang account.",
  "prevent": "I-authorize nang tama ang mga account, makatuwirang connection limit policy.",
  "sev": "Katamtaman"
 }
};
window.LABELS = {"miss": "Wala sa listahan - subukan ang ibang pananalita (hal. hindi kumokonekta / black screen / lag / walang tunog / controller) o tingnan ang buong talahanayan sa ibaba.", "codeword": ""};
window.FIELDS = [["sym", "Sintomas"], ["cause", "Pinaka-malamang na sanhi"], ["fix", "Mga hakbang sa pag-ayos"], ["prevent", "Pag-iwas / self-check"], ["sev", "Bigat"]];
window.THEAD = ["Problema", "Kategorya", "Sintomas", "Direksyon ng solusyon"];
window.CHIPS = ["hindi kumokonekta", "black screen", "lag", "walang tunog", "nadidiskonekta", "controller"];
