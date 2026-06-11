window.CODES = {
 "cant-connect": {
  "cat": "Połączenie / zrywanie",
  "name": "Nie łączy / połączenie nieudane",
  "alias": "nie laczy polaczenie nieudane nie mozna polaczyc timeout nie wchodzi cant connect 连不上",
  "sym": "Klient mówi \"nie można połączyć z komputerem zdalnym / nieudane / timeout\"; nie wchodzisz na host.",
  "cause": "Host wyłączony / niezalogowany / offline, zapora lub antywirus blokuje, wadliwy przełącznik zdalny, zmieniony domowy IP lub zajęty port.",
  "fix": "1) Potwierdź, że host jest włączony, zalogowany i online; 2) zezwól UU Remote w zaporze i antywirusie; 3) wyłącz i włącz przełącznik zdalny, aby zresetować; 4) zrestartuj router, aby odświeżyć IP; 5) jeśli port 3389 zajęty, zmień go lub zatrzymaj program w konflikcie.",
  "prevent": "Nadaj hostowi stałe IP LAN, dodaj do listy zaufanych, trzymaj włączony i online.",
  "sev": "Wysoka"
 },
 "black-screen": {
  "cat": "Obraz / czarny ekran",
  "name": "Czarny ekran po połączeniu",
  "alias": "czarny ekran czarno brak obrazu black screen polaczono czarno 黑屏",
  "sym": "Połączono, ale obraz jest całkowicie czarny, często gdy słychać dźwięk i widać mysz.",
  "cause": "Nieobsługiwana rozdzielczość, rozdzielczość pełnoekranowa gry != rozdzielczość streamingu, stary sterownik GPU lub uszkodzona trwała pamięć podręczna map bitowych.",
  "fix": "1) Przełącz host na popularną rozdzielczość jak 1080p; 2) ustaw grę pełnoekranową w oknie; 3) zaktualizuj sterownik GPU; 4) wyłącz \"trwałą pamięć podręczną map bitowych\" (zakładka Wydajność RDP).",
  "prevent": "Używaj zgodnej rozdzielczości, trzymaj sterownik GPU świeży.",
  "sev": "Wysoka"
 },
 "lag": {
  "cat": "Opóźnienie / lag",
  "name": "Lag / opóźnienie wejścia",
  "alias": "lag opoznienie opoznienie wejscia przyciecia zacinanie wolno 卡顿",
  "sym": "Zauważalne opóźnienie wejścia, przycięcia / spadki klatek, słaba reakcja.",
  "cause": "Zatłoczenie sieci / utrata pakietów, słabe Wi-Fi, niski upload hosta, bitrate powyżej przepustowości, lub nieprawidłowe opóźnienie enkodera od nowego sterownika GPU.",
  "fix": "1) Przejdź na kabel lub zbliż się do Wi-Fi 5 GHz; 2) obniż limit bitrate/przepustowości dla zapasu; 3) sprawdź utratę pakietów, zamknij inne aplikacje zżerające pasmo; 4) przywróć na hoście stabilny sterownik GPU.",
  "prevent": "Wybierz kabel; bitrate < upload z zapasem.",
  "sev": "Średnia"
 },
 "disconnect": {
  "cat": "Połączenie / zrywanie",
  "name": "Częste zrywanie / zrywa po sekundach",
  "alias": "rozlaczenia czeste zrywanie zrywa po sekundach ciagle sie rozlacza disconnect 掉线",
  "sym": "Zrywa po kilku sekundach lub minucie, ciągle łącząc na nowo.",
  "cause": "Niestabilność sieci / utrata, brak keep-alive, problem warstwy zabezpieczeń lub certyfikatu, lub błąd protokołu TermDD X.224 (Event ID 50).",
  "fix": "1) Sprawdź utratę pakietów i stabilność routingu; 2) ustaw interwał keep-alive na hoście; 3) przejrzyj warstwę zabezpieczeń i szyfrowanie; 4) sprawdź Event ID 50 w Podglądzie zdarzeń, aby zlokalizować przerwę protokołu.",
  "prevent": "Stabilna sieć, poprawna warstwa zabezpieczeń i certyfikat.",
  "sev": "Wysoka"
 },
 "no-audio": {
  "cat": "Dźwięk / urządzenie",
  "name": "Brak dźwięku",
  "alias": "brak dzwieku brak audio nie slychac wyciszone bez glosnika 没声音",
  "sym": "Obraz jest dobry, ale po stronie zdalnej brak dźwięku.",
  "cause": "Host nie ma użytecznego urządzenia audio (PC w chmurze / bez głośnika pokazuje \"Nie podłączono głośników ani słuchawek\") lub wybrano złe urządzenie przechwytywania.",
  "fix": "1) Zainstaluj wirtualne urządzenie audio (jak VB-Cable) na hoście; 2) wybierz właściwe urządzenie przechwytywania w ustawieniach; 3) jeśli ktoś jest połączony, połącz ponownie, aby zastosować.",
  "prevent": "Zapewnij hostowi użyteczne urządzenie wyjścia audio.",
  "sev": "Średnia"
 },
 "controller": {
  "cat": "Dźwięk / urządzenie",
  "name": "Pad / urządzenie niewykryte",
  "alias": "pad gamepad niewykryty urzadzenie klawiatura mysz joystick brak reakcji 手柄",
  "sym": "Pad, klawiatura/mysz lub inne urządzenie nie jest wykrywane lub nie reaguje po stronie zdalnej.",
  "cause": "Passthrough pada niewłączony na kliencie, brak sterowników pada na hoście, lub inny program trzyma urządzenie na wyłączność.",
  "fix": "1) Włącz passthrough pada/urządzenia w UU Remote; 2) zainstaluj odpowiedni sterownik pada na hoście; 3) połącz ponownie i zamknij program trzymający urządzenie na wyłączność.",
  "prevent": "Zainstaluj sterowniki wcześniej i włącz passthrough.",
  "sev": "Średnia"
 },
 "port-conflict": {
  "cat": "Połączenie / zrywanie",
  "name": "Konflikt portu / problem nasłuchu",
  "alias": "konflikt portu port 3389 port zajety nasluch listener netstat 端口",
  "sym": "Nieprawidłowy nasłuch / odmowa połączenia, częste w RDP self-hosted / tej samej maszynie.",
  "cause": "Domyślny port RDP 3389 (lub skonfigurowany) jest używany przez inny program.",
  "fix": "1) Użyj netstat -a -o, aby znaleźć PID używający portu; 2) dopasuj przez tasklist /svc; 3) zmień port lub zatrzymaj program w konflikcie, potem zrestartuj usługę zdalną.",
  "prevent": "Unikaj walki wielu narzędzi zdalnych o ten sam port.",
  "sev": "Średnia"
 },
 "sleep-wake": {
  "cat": "Połączenie / zrywanie",
  "name": "Nieosiągalny w uśpieniu/hibernacji",
  "alias": "uspienie hibernacja wybudzenie wol wake on lan nie laczy spi 睡眠",
  "sym": "Host nie odpowiada i w żaden sposób się nie łączy.",
  "cause": "Host przeszedł w uśpienie lub hibernację, więc karta sieciowa jest bez zasilania i nie odpowiada.",
  "fix": "1) Ustaw plan zasilania hosta na nigdy nie usypiaj/hibernuj; 2) wybudź go przez Wake-on-LAN lub zdalne włączenie UU; 3) rozpocznij połączenie po wybudzeniu.",
  "prevent": "Wyłącz uśpienie/hibernację, skonfiguruj zdalne włączanie.",
  "sev": "Średnia"
 },
 "ipv6": {
  "cat": "Połączenie / zrywanie",
  "name": "IPv6 powoduje niestabilne połączenie",
  "alias": "ipv6 niestabilne z przerwami czasem laczy niestabilne raz tak raz nie 时连时断",
  "sym": "Z przerwami nie łączy, raz działa raz nie, łączy znów w innej sieci.",
  "cause": "System źle adaptuje się do IPv6 i woli nieosiągalną ścieżkę IPv6.",
  "fix": "1) Wyłącz IPv6 tymczasowo, aby sprawdzić, czy wraca; 2) ustaw router/system na IPv4; 3) zapewnij, że obie strony używają tego samego stosu sieciowego.",
  "prevent": "Trzymaj obie strony na tym samym stosie; wyłącz IPv6 w razie potrzeby.",
  "sev": "Niska"
 },
 "artifacts": {
  "cat": "Obraz / czarny ekran",
  "name": "Artefakty / rozmyty obraz",
  "alias": "artefakty rozmyte rozmycie makroblok pikseloza niska jakosc 花屏",
  "sym": "Artefakty / makrobloki, lub ogólnie rozmyty, niewyraźny obraz.",
  "cause": "Bitrate za niski i automatycznie obniżony, nieprawidłowe dekodowanie sprzętowe, lub utrata pakietów psująca obraz.",
  "fix": "1) Podnieś bitrate; 2) wyłącz dekodowanie sprzętowe na hoście/kliencie, aby spróbować programowego; 3) sprawdź utratę pakietów i stabilność sieci.",
  "prevent": "Daj wystarczający bitrate; trzymaj sieć stabilną i bez strat.",
  "sev": "Niska"
 },
 "security-error": {
  "cat": "Połączenie / zrywanie",
  "name": "Błąd zabezpieczeń - nie łączy",
  "alias": "blad zabezpieczen security error certyfikat szyfrowanie uwierzytelnianie poswiadczenia 安全错误",
  "sym": "Pokazuje \"z powodu błędu zabezpieczeń klient nie mógł połączyć z komputerem zdalnym\".",
  "cause": "Źle skonfigurowana warstwa uwierzytelniania/szyfrowania, lub uszkodzony certyfikat licencji (autoryzacji).",
  "fix": "1) Skonfiguruj poprawną warstwę zabezpieczeń i poziom szyfrowania; 2) jeśli certyfikat licencji uszkodzony, po kopii usuń klucze rejestru certyfikatu X509 i reaktywuj usługę licencjonowania; 3) potwierdź poprawność czasu i poświadczeń.",
  "prevent": "Poprawny certyfikat i konfiguracja licencjonowania.",
  "sev": "Wysoka"
 },
 "no-permission": {
  "cat": "Dźwięk / urządzenie",
  "name": "Konto bez uprawnień zdalnych",
  "alias": "brak uprawnien odmowa dostepu uzytkownicy pulpitu zdalnego limit polaczen prawa logowania 权限",
  "sym": "Po zalogowaniu nie możesz rozpocząć zdalnego sterowania, z komunikatem o braku uprawnień lub odmowie.",
  "cause": "Konto nie jest w grupie \"Użytkownicy pulpitu zdalnego\", lub zasada \"Ogranicz liczbę połączeń\" blokuje.",
  "fix": "1) Dodaj konto do grupy \"Użytkownicy pulpitu zdalnego\" hosta; 2) sprawdź i złagodź zasadę grupy \"Ogranicz liczbę połączeń\"; 3) potwierdź, że konto ma prawa logowania zdalnego.",
  "prevent": "Autoryzuj konta poprawnie, rozsądna zasada limitu połączeń.",
  "sev": "Średnia"
 }
};
window.LABELS = {"miss": "Brak na liście - spróbuj innego sformułowania (np. nie łączy / czarny ekran / lag / brak dźwięku / pad) lub zobacz pełną tabelę poniżej.", "codeword": ""};
window.FIELDS = [["sym", "Objaw"], ["cause", "Najbardziej prawdopodobna przyczyna"], ["fix", "Kroki naprawy"], ["prevent", "Zapobieganie / autokontrola"], ["sev", "Powaga"]];
window.THEAD = ["Problem", "Kategoria", "Objaw", "Kierunek rozwiązania"];
window.CHIPS = ["nie łączy", "czarny ekran", "lag", "brak dźwięku", "rozłączenia", "pad"];
