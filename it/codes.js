window.CODES = {
 "cant-connect": {
  "cat": "Connessione / cadute",
  "name": "Non si connette / connessione fallita",
  "alias": "non si connette connessione fallita impossibile connettersi timeout non entra cant connect 连不上",
  "sym": "Il client dice \"impossibile connettersi al computer remoto / connessione fallita / timeout\"; non entri nell'host.",
  "cause": "Host spento / non connesso / offline, firewall o antivirus che blocca, interruttore remoto difettoso, IP di casa cambiato o porta occupata.",
  "fix": "1) Conferma che l'host è acceso, connesso e online; 2) consenti UU Remote in firewall e antivirus; 3) spegni e riaccendi l'interruttore remoto per resettare; 4) riavvia il router per rinnovare l'IP; 5) se la porta 3389 è occupata, cambiala o ferma il programma in conflitto.",
  "prevent": "Dai all'host un IP LAN fisso, aggiungilo alla lista attendibili, tienilo acceso e online.",
  "sev": "Alta"
 },
 "black-screen": {
  "cat": "Immagine / schermo nero",
  "name": "Schermo nero dopo la connessione",
  "alias": "schermo nero nero nessuna immagine black screen connesso nero 黑屏",
  "sym": "Connesso ma l'immagine è completamente nera, spesso mentre senti l'audio e vedi il mouse.",
  "cause": "Risoluzione non supportata, risoluzione a schermo intero del gioco != risoluzione dello streaming, driver GPU vecchio o cache bitmap persistente danneggiata.",
  "fix": "1) Passa l'host a una risoluzione comune come 1080p; 2) metti il gioco a schermo intero in finestra; 3) aggiorna il driver GPU; 4) disattiva la \"cache bitmap persistente\" (scheda Prestazioni di RDP).",
  "prevent": "Usa una risoluzione compatibile, tieni il driver GPU recente.",
  "sev": "Alta"
 },
 "lag": {
  "cat": "Latenza / lag",
  "name": "Lag / ritardo di input",
  "alias": "lag latenza ritardo ritardo di input scatti intoppi lento 卡顿",
  "sym": "Ritardo di input evidente, scatti / frame persi, scarsa reattività.",
  "cause": "Congestione di rete / perdita di pacchetti, Wi-Fi debole, scarso upload dell'host, bitrate sopra la banda, o latenza anomala dell'encoder da un nuovo driver GPU.",
  "fix": "1) Passa a cavo o avvicinati al Wi-Fi 5 GHz; 2) abbassa il limite di bitrate/banda per lasciare margine; 3) controlla la perdita di pacchetti, chiudi altre app che consumano banda; 4) ripristina sull'host un driver GPU stabile.",
  "prevent": "Preferisci il cavo; bitrate < upload con margine.",
  "sev": "Media"
 },
 "disconnect": {
  "cat": "Connessione / cadute",
  "name": "Cadute frequenti / cade dopo secondi",
  "alias": "disconnessione cadute frequenti cade dopo secondi si disconnette sempre disconnect 掉线",
  "sym": "Cade dopo pochi secondi o un minuto, riconnettendosi di continuo.",
  "cause": "Instabilità di rete / perdita, nessun keep-alive configurato, un problema di livello di sicurezza o certificato, o un errore di protocollo TermDD X.224 (Event ID 50).",
  "fix": "1) Controlla la perdita di pacchetti e la stabilità del routing; 2) configura un intervallo keep-alive sull'host; 3) esamina il livello di sicurezza e la cifratura; 4) controlla l'Event ID 50 nel Visualizzatore eventi per localizzare l'interruzione del protocollo.",
  "prevent": "Rete stabile, livello di sicurezza e certificato corretti.",
  "sev": "Alta"
 },
 "no-audio": {
  "cat": "Audio / periferica",
  "name": "Audio assente",
  "alias": "audio assente niente audio non si sente muto senza altoparlante 没声音",
  "sym": "L'immagine va bene ma non c'è audio sul lato remoto.",
  "cause": "L'host non ha un dispositivo audio utilizzabile (un PC cloud / senza altoparlante mostra \"Nessun altoparlante o cuffia collegati\") o è scelto il dispositivo di acquisizione sbagliato.",
  "fix": "1) Installa un dispositivo audio virtuale (come VB-Cable) sull'host; 2) scegli il dispositivo di acquisizione giusto nelle impostazioni; 3) se qualcuno è connesso, riconnetti per applicare.",
  "prevent": "Assicurati che l'host abbia un dispositivo di uscita audio utilizzabile.",
  "sev": "Media"
 },
 "controller": {
  "cat": "Audio / periferica",
  "name": "Controller / periferica non rilevati",
  "alias": "controller gamepad non rilevato periferica tastiera mouse joystick nessuna risposta 手柄",
  "sym": "Un controller, tastiera/mouse o altra periferica non viene rilevato o non risponde sul lato remoto.",
  "cause": "Passthrough del controller non abilitato sul client, driver del controller mancanti sull'host, o un altro programma che tiene il dispositivo in esclusiva.",
  "fix": "1) Abilita il passthrough controller/periferica in UU Remote; 2) installa il driver del controller adatto sull'host; 3) riconnetti e chiudi il programma che tiene il dispositivo in esclusiva.",
  "prevent": "Installa i driver in anticipo e abilita il passthrough.",
  "sev": "Media"
 },
 "port-conflict": {
  "cat": "Connessione / cadute",
  "name": "Conflitto di porta / problema di listener",
  "alias": "conflitto di porta porta 3389 porta occupata listener netstat 端口",
  "sym": "Listener anomalo / connessione rifiutata, comune in RDP self-hosted / stessa macchina.",
  "cause": "La porta RDP predefinita 3389 (o la porta configurata) è usata da un altro programma.",
  "fix": "1) Usa netstat -a -o per trovare il PID che usa la porta; 2) abbinalo con tasklist /svc; 3) cambia la porta o ferma il programma in conflitto, poi riavvia il servizio remoto.",
  "prevent": "Evita che più strumenti remoti si contendano la stessa porta.",
  "sev": "Media"
 },
 "sleep-wake": {
  "cat": "Connessione / cadute",
  "name": "Irraggiungibile in sospensione/ibernazione",
  "alias": "sospensione ibernazione risveglio wol wake on lan non si connette dormiente 睡眠",
  "sym": "L'host non risponde e non si connette in alcun modo.",
  "cause": "L'host è entrato in sospensione o ibernazione, quindi la scheda di rete è senza alimentazione e non risponde.",
  "fix": "1) Imposta il piano di alimentazione dell'host su mai sospensione/ibernazione; 2) sveglialo con Wake-on-LAN o l'accensione remota UU; 3) avvia la connessione dopo il risveglio.",
  "prevent": "Disattiva sospensione/ibernazione, configura l'accensione remota.",
  "sev": "Media"
 },
 "ipv6": {
  "cat": "Connessione / cadute",
  "name": "IPv6 causa una connessione instabile",
  "alias": "ipv6 instabile intermittente a volte si connette instabile a tratti 时连时断",
  "sym": "A intermittenza non si connette, va e viene, si connette di nuovo su un'altra rete.",
  "cause": "Il sistema si adatta male a IPv6 e preferisce un percorso IPv6 irraggiungibile.",
  "fix": "1) Disattiva IPv6 temporaneamente per testare se si riprende; 2) imposta router/sistema su IPv4; 3) assicurati che entrambi i lati usino lo stesso stack di rete.",
  "prevent": "Tieni entrambi i lati sullo stesso stack; disattiva IPv6 se serve.",
  "sev": "Bassa"
 },
 "artifacts": {
  "cat": "Immagine / schermo nero",
  "name": "Artefatti / immagine sfocata",
  "alias": "artefatti sfocato sfocata macroblocco pixelato bassa qualita 花屏",
  "sym": "Artefatti / macroblocchi, o un'immagine nel complesso sfocata e poco nitida.",
  "cause": "Bitrate troppo basso e ridotto automaticamente, decodifica hardware anomala, o perdita di pacchetti che rompe l'immagine.",
  "fix": "1) Aumenta il bitrate; 2) disattiva la decodifica hardware su host/client per provare la decodifica software; 3) controlla la perdita di pacchetti e la stabilità di rete.",
  "prevent": "Dai bitrate sufficiente; tieni la rete stabile e senza perdite.",
  "sev": "Bassa"
 },
 "security-error": {
  "cat": "Connessione / cadute",
  "name": "Errore di sicurezza - non si connette",
  "alias": "errore di sicurezza security error certificato cifratura autenticazione credenziali 安全错误",
  "sym": "Mostra \"a causa di un errore di sicurezza, il client non ha potuto connettersi al computer remoto\".",
  "cause": "Livello di autenticazione/cifratura mal configurato, o un certificato di licenza (autorizzazione) danneggiato.",
  "fix": "1) Configura il livello di sicurezza e il livello di cifratura corretti; 2) se il certificato di licenza è danneggiato, dopo il backup elimina le chiavi di registro del certificato X509 e riattiva il servizio di licenze; 3) conferma che ora e credenziali siano corrette.",
  "prevent": "Certificato e configurazione delle licenze corretti.",
  "sev": "Alta"
 },
 "no-permission": {
  "cat": "Audio / periferica",
  "name": "L'account non ha permesso remoto",
  "alias": "nessun permesso accesso negato utenti desktop remoto limite connessioni diritti di accesso 权限",
  "sym": "Dopo l'accesso non puoi avviare il controllo remoto, con avviso di permesso mancante o negato.",
  "cause": "L'account non è nel gruppo \"Utenti Desktop remoto\", o il criterio \"Limita numero di connessioni\" blocca.",
  "fix": "1) Aggiungi l'account al gruppo \"Utenti Desktop remoto\" dell'host; 2) controlla e allenta il criterio di gruppo \"Limita numero di connessioni\"; 3) conferma che l'account ha diritti di accesso remoto.",
  "prevent": "Autorizza gli account correttamente, criterio di limite connessioni ragionevole.",
  "sev": "Media"
 }
};
window.LABELS = {"miss": "Non elencato - prova un'altra forma (es. non si connette / schermo nero / lag / audio assente / controller) o guarda la tabella completa sotto.", "codeword": ""};
window.FIELDS = [["sym", "Sintomo"], ["cause", "Causa più probabile"], ["fix", "Passi di soluzione"], ["prevent", "Prevenzione / auto-verifica"], ["sev", "Gravità"]];
window.THEAD = ["Problema", "Categoria", "Sintomo", "Direzione di soluzione"];
window.CHIPS = ["non si connette", "schermo nero", "lag", "audio assente", "disconnessione", "controller"];
