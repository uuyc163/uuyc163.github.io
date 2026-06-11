window.CODES = {
 "cant-connect": {
  "cat": "Verbindung / Abbrüche",
  "name": "Kein Connect / Verbindung fehlgeschlagen",
  "alias": "kein connect verbindung fehlgeschlagen keine verbindung timeout kommt nicht rein 连不上",
  "sym": "Der Client meldet \"Verbindung zum Remotecomputer nicht möglich / fehlgeschlagen / Timeout\"; du kommst nicht in den Host.",
  "cause": "Host nicht an / nicht angemeldet / offline, Firewall oder Antivirus blockt, defekter Remote-Schalter, geänderte Heim-IP oder belegter Port.",
  "fix": "1) Host an, angemeldet und online prüfen; 2) UU Remote durch Firewall und Antivirus erlauben; 3) Remote-Schalter aus und wieder ein zum Reset; 4) Router neu starten zum IP-Erneuern; 5) ist Port 3389 belegt, ändern oder das Konfliktprogramm stoppen.",
  "prevent": "Dem Host eine feste LAN-IP geben, in die Vertrauensliste, an und online halten.",
  "sev": "Hoch"
 },
 "black-screen": {
  "cat": "Bild / Schwarzbild",
  "name": "Schwarzbild nach dem Verbinden",
  "alias": "schwarzbild schwarzer bildschirm kein bild blank nach verbinden schwarz 黑屏",
  "sym": "Verbunden, aber das Bild ist komplett schwarz, oft während du Ton hörst und die Maus siehst.",
  "cause": "Auflösung nicht unterstützt, Vollbild-Auflösung des Spiels != Streaming-Auflösung, alter GPU-Treiber oder defektes persistentes Bitmap-Caching.",
  "fix": "1) Host auf eine gängige Auflösung wie 1080p; 2) Vollbild-Spiel in den Fenstermodus; 3) GPU-Treiber aktualisieren; 4) \"persistentes Bitmap-Caching\" deaktivieren (RDP-Reiter Anzeige/Leistung).",
  "prevent": "Eine kompatible Auflösung nutzen, GPU-Treiber aktuell halten.",
  "sev": "Hoch"
 },
 "lag": {
  "cat": "Latenz / Lag",
  "name": "Lag / Eingabeverzögerung",
  "alias": "lag latenz verzoegerung eingabeverzoegerung ruckler stottern langsam 卡顿",
  "sym": "Spürbare Eingabeverzögerung, Ruckler / Frame-Drops, schlechte Reaktion.",
  "cause": "Netzwerküberlastung / Paketverlust, schwaches WLAN, geringer Host-Upload, Bitrate über der Bandbreite oder abnormale Encoder-Latenz durch einen neuen GPU-Treiber.",
  "fix": "1) Auf Kabel oder nah ans 5-GHz-WLAN; 2) Bitraten-/Bandbreitenlimit senken für Reserve; 3) Paketverlust prüfen, andere bandbreitenhungrige Apps schließen; 4) Host-GPU-Treiber auf eine stabile Version zurückrollen.",
  "prevent": "Kabel bevorzugen; Bitrate < Upload mit Reserve.",
  "sev": "Mittel"
 },
 "disconnect": {
  "cat": "Verbindung / Abbrüche",
  "name": "Häufige Abbrüche / Abbruch nach Sekunden",
  "alias": "abbruch haeufige abbrueche abbruch nach sekunden trennt staendig auto disconnect 掉线",
  "sym": "Bricht nach ein paar Sekunden oder einer Minute ab, ständig neu verbinden.",
  "cause": "Netzwerk-Instabilität / Verlust, kein Keep-Alive, ein Sicherheitsebenen- oder Zertifikatsproblem oder ein TermDD-X.224-Protokollfehler (Event ID 50).",
  "fix": "1) Paketverlust und Routing-Stabilität prüfen; 2) am Host ein Keep-Alive-Intervall setzen; 3) Sicherheitsebene und Verschlüsselung prüfen; 4) Ereignisanzeiger Event ID 50 prüfen, um die Protokollunterbrechung zu finden.",
  "prevent": "Stabiles Netz, korrekte Sicherheitsebene und Zertifikat.",
  "sev": "Hoch"
 },
 "no-audio": {
  "cat": "Ton / Peripherie",
  "name": "Kein Ton",
  "alias": "kein ton kein audio hoere nichts stumm kein lautsprecher 没声音",
  "sym": "Bild ist gut, aber am Remote-Ende ist kein Ton.",
  "cause": "Der Host hat kein nutzbares Audiogerät (ein Cloud-PC / ohne Lautsprecher zeigt \"keine Lautsprecher oder Kopfhörer angeschlossen\") oder das falsche Aufnahmegerät ist gewählt.",
  "fix": "1) Ein virtuelles Audiogerät (wie VB-Cable) am Host installieren; 2) in den Einstellungen das richtige Aufnahmegerät wählen; 3) ist jemand verbunden, neu verbinden, damit es greift.",
  "prevent": "Sicherstellen, dass der Host ein nutzbares Audio-Ausgabegerät hat.",
  "sev": "Mittel"
 },
 "controller": {
  "cat": "Ton / Peripherie",
  "name": "Controller / Peripherie nicht erkannt",
  "alias": "controller gamepad nicht erkannt peripherie tastatur maus joystick keine reaktion 手柄",
  "sym": "Ein Controller, Tastatur/Maus oder andere Peripherie wird am Remote-Ende nicht erkannt oder reagiert nicht.",
  "cause": "Controller-Passthrough am Client nicht aktiviert, fehlende Controller-Treiber am Host oder ein anderes Programm hält das Gerät exklusiv.",
  "fix": "1) Controller-/Peripherie-Passthrough in UU Remote aktivieren; 2) den passenden Controller-Treiber am Host installieren; 3) neu verbinden und das Programm schließen, das das Gerät exklusiv hält.",
  "prevent": "Treiber vorab installieren und Passthrough aktivieren.",
  "sev": "Mittel"
 },
 "port-conflict": {
  "cat": "Verbindung / Abbrüche",
  "name": "Portkonflikt / Listener-Problem",
  "alias": "portkonflikt port 3389 port belegt listener netstat port besetzt 端口",
  "sym": "Abnormaler Listener / Verbindung abgelehnt, häufig bei selbst gehostetem / Same-Machine-RDP.",
  "cause": "Der Standard-RDP-Port 3389 (oder dein konfigurierter Port) ist von einem anderen Programm belegt.",
  "fix": "1) Mit netstat -a -o die PID finden, die den Port nutzt; 2) mit tasklist /svc zuordnen; 3) den Port ändern oder das Konfliktprogramm stoppen, dann den Remote-Dienst neu starten.",
  "prevent": "Vermeiden, dass mehrere Remote-Tools um denselben Port kämpfen.",
  "sev": "Mittel"
 },
 "sleep-wake": {
  "cat": "Verbindung / Abbrüche",
  "name": "Nicht erreichbar im Ruhe-/Standby-Zustand",
  "alias": "ruhezustand standby aufwecken wol wake on lan kein connect schlaeft 睡眠",
  "sym": "Der Host reagiert nicht und verbindet partout nicht.",
  "cause": "Der Host ging in den Ruhe-/Standby-Zustand, die Netzwerkkarte ist stromlos und antwortet nicht.",
  "fix": "1) Den Energieplan des Hosts auf nie schlafen/Ruhezustand stellen; 2) ihn mit Wake-on-LAN oder UU-Remote-Einschalten wecken; 3) nach dem Aufwachen die Verbindung starten.",
  "prevent": "Ruhe-/Standby-Zustand aus, Remote-Einschalten einrichten.",
  "sev": "Mittel"
 },
 "ipv6": {
  "cat": "Verbindung / Abbrüche",
  "name": "IPv6 verursacht eine wackelige Verbindung",
  "alias": "ipv6 wackelig zeitweise verbindet manchmal instabil mal so mal so 时连时断",
  "sym": "Zeitweise kein Connect, mal geht's mal nicht, in einem anderen Netz wieder.",
  "cause": "Das System passt sich schlecht an IPv6 an und bevorzugt einen unerreichbaren IPv6-Pfad.",
  "fix": "1) IPv6 vorübergehend deaktivieren, um zu testen, ob es sich erholt; 2) Router/System auf IPv4 stellen; 3) sicherstellen, dass beide Enden denselben Netzwerk-Stack nutzen.",
  "prevent": "Beide Enden auf demselben Stack; IPv6 bei Bedarf deaktivieren.",
  "sev": "Niedrig"
 },
 "artifacts": {
  "cat": "Bild / Schwarzbild",
  "name": "Artefakte / unscharfes Bild",
  "alias": "artefakte unscharf verschwommen makroblock verpixelt schlechte qualitaet 花屏",
  "sym": "Artefakte / Makroblocking oder ein insgesamt unscharfes, undeutliches Bild.",
  "cause": "Bitrate zu niedrig und automatisch heruntergestuft, abnormales Hardware-Decoding oder Paketverlust, der das Bild zerstört.",
  "fix": "1) Bitrate erhöhen; 2) Hardware-Decoding an Host/Client deaktivieren, um Software-Decoding zu testen; 3) Paketverlust und Netzstabilität prüfen.",
  "prevent": "Genug Bitrate geben; Netz stabil und verlustfrei halten.",
  "sev": "Niedrig"
 },
 "security-error": {
  "cat": "Verbindung / Abbrüche",
  "name": "Sicherheitsfehler - kein Connect",
  "alias": "sicherheitsfehler security error zertifikat verschluesselung authentifizierung anmeldedaten 安全错误",
  "sym": "Meldet \"wegen eines Sicherheitsfehlers konnte der Client nicht mit dem Remotecomputer verbinden\".",
  "cause": "Falsch konfigurierte Authentifizierungs-/Verschlüsselungsebene oder ein defektes Lizenz-(Autorisierungs-)Zertifikat.",
  "fix": "1) Die korrekte Sicherheitsebene und Verschlüsselungsstufe konfigurieren; 2) ist das Lizenzzertifikat defekt, nach Backup die X509-Zertifikat-Registry-Schlüssel löschen und den Lizenzdienst reaktivieren; 3) Zeit und Anmeldedaten prüfen.",
  "prevent": "Korrektes Zertifikat und Lizenzkonfiguration.",
  "sev": "Hoch"
 },
 "no-permission": {
  "cat": "Ton / Peripherie",
  "name": "Konto ohne Remote-Berechtigung",
  "alias": "keine berechtigung zugriff verweigert remotedesktopbenutzer verbindungslimit anmelderechte 权限",
  "sym": "Nach dem Anmelden kannst du keine Fernsteuerung starten, mit Hinweis auf fehlende Berechtigung oder Verweigerung.",
  "cause": "Das Konto ist nicht in der Gruppe \"Remotedesktopbenutzer\" oder die Richtlinie \"Anzahl der Verbindungen beschränken\" blockt.",
  "fix": "1) Das Konto zur Gruppe \"Remotedesktopbenutzer\" des Hosts hinzufügen; 2) die Gruppenrichtlinie \"Anzahl der Verbindungen beschränken\" prüfen und lockern; 3) bestätigen, dass das Konto Remote-Anmelderechte hat.",
  "prevent": "Konten korrekt autorisieren, sinnvolle Verbindungslimit-Richtlinie.",
  "sev": "Mittel"
 }
};
window.LABELS = {"miss": "Nicht gelistet - andere Schreibweise versuchen (z. B. kein Connect / Schwarzbild / Lag / kein Ton / Controller) oder die vollständige Tabelle unten ansehen.", "codeword": ""};
window.FIELDS = [["sym", "Symptom"], ["cause", "Wahrscheinlichste Ursache"], ["fix", "Lösungsschritte"], ["prevent", "Vorbeugung / Selbsttest"], ["sev", "Schweregrad"]];
window.THEAD = ["Problem", "Kategorie", "Symptom", "Lösungsrichtung"];
window.CHIPS = ["kein Connect", "Schwarzbild", "Lag", "kein Ton", "Abbruch", "Controller"];
