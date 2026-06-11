window.CODES = {
 "cant-connect": {
  "cat": "Verbinding / wegvallen",
  "name": "Geen verbinding / verbinding mislukt",
  "alias": "geen verbinding verbinding mislukt kan niet verbinden timeout komt er niet in cant connect 连不上",
  "sym": "De client meldt \"kan geen verbinding maken met de externe computer / mislukt / timeout\"; je komt niet in de host.",
  "cause": "Host uit / niet aangemeld / offline, firewall of antivirus blokkeert, defecte remote-schakelaar, gewijzigd thuis-IP of bezette poort.",
  "fix": "1) Bevestig dat de host aan, aangemeld en online is; 2) sta UU Remote toe in firewall en antivirus; 3) zet de remote-schakelaar uit en weer aan om te resetten; 4) herstart de router om het IP te vernieuwen; 5) is poort 3389 bezet, wijzig hem of stop het conflicterende programma.",
  "prevent": "Geef de host een vast LAN-IP, voeg toe aan de vertrouwenslijst, houd hem aan en online.",
  "sev": "Hoog"
 },
 "black-screen": {
  "cat": "Beeld / zwart scherm",
  "name": "Zwart scherm na verbinden",
  "alias": "zwart scherm zwart geen beeld black screen verbonden zwart 黑屏",
  "sym": "Verbonden maar het beeld is helemaal zwart, vaak terwijl je geluid hoort en de muis ziet.",
  "cause": "Resolutie niet ondersteund, volledig-scherm-resolutie van het spel != streaming-resolutie, oude GPU-driver of beschadigde persistente bitmap-caching.",
  "fix": "1) Schakel de host naar een gangbare resolutie zoals 1080p; 2) zet het volledig-scherm-spel in venstermodus; 3) werk de GPU-driver bij; 4) schakel \"persistente bitmap-caching\" uit (RDP-tabblad Prestaties).",
  "prevent": "Gebruik een compatibele resolutie, houd de GPU-driver recent.",
  "sev": "Hoog"
 },
 "lag": {
  "cat": "Latency / lag",
  "name": "Lag / invoervertraging",
  "alias": "lag latency vertraging invoervertraging haperingen stotteren traag 卡顿",
  "sym": "Merkbare invoervertraging, haperingen / frame-drops, slechte respons.",
  "cause": "Netwerkcongestie / pakketverlies, zwakke wifi, lage host-upload, bitrate boven de bandbreedte, of abnormale encoder-latency door een nieuwe GPU-driver.",
  "fix": "1) Schakel naar kabel of ga dicht bij 5GHz-wifi; 2) verlaag de bitrate-/bandbreedtelimiet voor marge; 3) controleer pakketverlies, sluit andere bandbreedtevretende apps; 4) rol op de host terug naar een stabiele GPU-driver.",
  "prevent": "Geef kabel de voorkeur; bitrate < upload met marge.",
  "sev": "Middel"
 },
 "disconnect": {
  "cat": "Verbinding / wegvallen",
  "name": "Frequent wegvallen / valt na seconden weg",
  "alias": "verbreking frequent wegvallen valt na seconden weg verbreekt steeds disconnect 掉线",
  "sym": "Valt na een paar seconden of een minuut weg, telkens opnieuw verbinden.",
  "cause": "Netwerkinstabiliteit / verlies, geen keep-alive ingesteld, een beveiligingslaag- of certificaatprobleem, of een TermDD X.224 protocolfout (Event ID 50).",
  "fix": "1) Controleer pakketverlies en routingstabiliteit; 2) stel een keep-alive-interval in op de host; 3) bekijk de beveiligingslaag en encryptie; 4) bekijk Event ID 50 in Logboeken om de protocolonderbreking te lokaliseren.",
  "prevent": "Stabiel netwerk, juiste beveiligingslaag en certificaat.",
  "sev": "Hoog"
 },
 "no-audio": {
  "cat": "Geluid / randapparaat",
  "name": "Geen geluid",
  "alias": "geen geluid geen audio hoort niets gedempt geen luidspreker 没声音",
  "sym": "Het beeld is goed maar er is geen geluid aan de externe kant.",
  "cause": "De host heeft geen bruikbaar audioapparaat (een cloud-pc / zonder luidspreker toont \"Er zijn geen luidsprekers of koptelefoons aangesloten\") of het verkeerde opnameapparaat is gekozen.",
  "fix": "1) Installeer een virtueel audioapparaat (zoals VB-Cable) op de host; 2) kies het juiste opnameapparaat in de instellingen; 3) is iemand verbonden, verbind opnieuw om het toe te passen.",
  "prevent": "Zorg dat de host een bruikbaar audio-uitvoerapparaat heeft.",
  "sev": "Middel"
 },
 "controller": {
  "cat": "Geluid / randapparaat",
  "name": "Controller / randapparaat niet herkend",
  "alias": "controller gamepad niet herkend randapparaat toetsenbord muis joystick geen reactie 手柄",
  "sym": "Een controller, toetsenbord/muis of ander randapparaat wordt niet herkend of reageert niet aan de externe kant.",
  "cause": "Controller-passthrough niet ingeschakeld op de client, ontbrekende controller-drivers op de host, of een ander programma dat het apparaat exclusief vasthoudt.",
  "fix": "1) Schakel controller-/randapparaat-passthrough in in UU Remote; 2) installeer de juiste controller-driver op de host; 3) verbind opnieuw en sluit het programma dat het apparaat exclusief vasthoudt.",
  "prevent": "Installeer drivers vooraf en schakel passthrough in.",
  "sev": "Middel"
 },
 "port-conflict": {
  "cat": "Verbinding / wegvallen",
  "name": "Poortconflict / listener-probleem",
  "alias": "poortconflict poort 3389 poort in gebruik listener netstat 端口",
  "sym": "Abnormale listener / verbinding geweigerd, vaak bij zelf-gehost / zelfde-machine RDP.",
  "cause": "De standaard RDP-poort 3389 (of je ingestelde poort) is door een ander programma in gebruik.",
  "fix": "1) Gebruik netstat -a -o om de PID te vinden die de poort gebruikt; 2) koppel met tasklist /svc; 3) wijzig de poort of stop het conflicterende programma, herstart daarna de remote-service.",
  "prevent": "Voorkom dat meerdere remote-tools om dezelfde poort vechten.",
  "sev": "Middel"
 },
 "sleep-wake": {
  "cat": "Verbinding / wegvallen",
  "name": "Onbereikbaar in slaapstand/sluimerstand",
  "alias": "slaapstand sluimerstand wekken wol wake on lan geen verbinding slaapt 睡眠",
  "sym": "De host reageert niet en verbindt op geen enkele manier.",
  "cause": "De host ging in slaap- of sluimerstand, dus de netwerkkaart is stroomloos en reageert niet.",
  "fix": "1) Stel het energiebeheer van de host in op nooit slapen/sluimeren; 2) wek hem met Wake-on-LAN of UU-remote-inschakelen; 3) start de verbinding na het wekken.",
  "prevent": "Schakel slaap-/sluimerstand uit, stel remote-inschakelen in.",
  "sev": "Middel"
 },
 "ipv6": {
  "cat": "Verbinding / wegvallen",
  "name": "IPv6 veroorzaakt een wankele verbinding",
  "alias": "ipv6 wankel intermitterend soms verbinding instabiel met tussenpozen 时连时断",
  "sym": "Met tussenpozen geen verbinding, gaat aan en uit, verbindt weer op een ander netwerk.",
  "cause": "Het systeem past zich slecht aan IPv6 aan en geeft de voorkeur aan een onbereikbaar IPv6-pad.",
  "fix": "1) Schakel IPv6 tijdelijk uit om te testen of het herstelt; 2) zet router/systeem op IPv4; 3) zorg dat beide kanten dezelfde netwerkstack gebruiken.",
  "prevent": "Houd beide kanten op dezelfde stack; schakel IPv6 uit indien nodig.",
  "sev": "Laag"
 },
 "artifacts": {
  "cat": "Beeld / zwart scherm",
  "name": "Artefacten / wazig beeld",
  "alias": "artefacten wazig vaag macroblok pixelig lage kwaliteit 花屏",
  "sym": "Artefacten / macroblokken, of een over het geheel wazig, onduidelijk beeld.",
  "cause": "Bitrate te laag en automatisch verlaagd, abnormale hardware-decoding, of pakketverlies dat het beeld breekt.",
  "fix": "1) Verhoog de bitrate; 2) schakel hardware-decoding uit op host/client om software-decoding te proberen; 3) controleer pakketverlies en netwerkstabiliteit.",
  "prevent": "Geef voldoende bitrate; houd het netwerk stabiel en verliesvrij.",
  "sev": "Laag"
 },
 "security-error": {
  "cat": "Verbinding / wegvallen",
  "name": "Beveiligingsfout - geen verbinding",
  "alias": "beveiligingsfout security error certificaat encryptie authenticatie referenties 安全错误",
  "sym": "Toont \"door een beveiligingsfout kon de client geen verbinding maken met de externe computer\".",
  "cause": "Verkeerd geconfigureerde authenticatie-/encryptielaag, of een beschadigd licentie-(autorisatie-)certificaat.",
  "fix": "1) Configureer de juiste beveiligingslaag en encryptieniveau; 2) is het licentiecertificaat beschadigd, verwijder na back-up de X509-certificaat-registersleutels en heractiveer de licentieservice; 3) bevestig dat tijd en referenties correct zijn.",
  "prevent": "Correct certificaat en licentieconfiguratie.",
  "sev": "Hoog"
 },
 "no-permission": {
  "cat": "Geluid / randapparaat",
  "name": "Account zonder remote-rechten",
  "alias": "geen rechten toegang geweigerd gebruikers extern bureaublad verbindingslimiet aanmeldrechten 权限",
  "sym": "Na het inloggen kun je geen afstandsbediening starten, met een melding over ontbrekende rechten of weigering.",
  "cause": "Het account zit niet in de groep \"Gebruikers extern bureaublad\", of het beleid \"Aantal verbindingen beperken\" blokkeert.",
  "fix": "1) Voeg het account toe aan de groep \"Gebruikers extern bureaublad\" van de host; 2) controleer en versoepel het groepsbeleid \"Aantal verbindingen beperken\"; 3) bevestig dat het account externe aanmeldingsrechten heeft.",
  "prevent": "Autoriseer accounts correct, redelijk verbindingslimietbeleid.",
  "sev": "Middel"
 }
};
window.LABELS = {"miss": "Niet vermeld - probeer een andere formulering (bv. geen verbinding / zwart scherm / lag / geen geluid / controller) of bekijk de volledige tabel hieronder.", "codeword": ""};
window.FIELDS = [["sym", "Symptoom"], ["cause", "Meest waarschijnlijke oorzaak"], ["fix", "Oplosstappen"], ["prevent", "Preventie / zelfcontrole"], ["sev", "Ernst"]];
window.THEAD = ["Probleem", "Categorie", "Symptoom", "Oplosrichting"];
window.CHIPS = ["geen verbinding", "zwart scherm", "lag", "geen geluid", "verbreking", "controller"];
