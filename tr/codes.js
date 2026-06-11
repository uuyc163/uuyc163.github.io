window.CODES = {
 "cant-connect": {
  "cat": "Bağlantı / kopma",
  "name": "Bağlanmıyor / bağlantı başarısız",
  "alias": "baglanmiyor baglanti basarisiz baglanamiyor timeout giremiyorum cant connect 连不上",
  "sym": "İstemci \"uzak bilgisayara bağlanılamadı / başarısız / timeout\" diyor; host'a giremiyorsun.",
  "cause": "Host kapalı / oturum açmamış / çevrimdışı, güvenlik duvarı veya antivirüs engelliyor, bozuk uzak anahtar, değişen ev IP'si veya dolu port.",
  "fix": "1) Host'un açık, oturum açmış ve çevrimiçi olduğunu doğrula; 2) UU Remote'a güvenlik duvarı ve antivirüste izin ver; 3) uzak anahtarı kapat-aç; 4) IP yenilemek için yönlendiriciyi yeniden başlat; 5) port 3389 doluysa değiştir veya çakışan programı durdur.",
  "prevent": "Host'a sabit LAN IP ver, güven listesine ekle, açık ve çevrimiçi tut.",
  "sev": "Yüksek"
 },
 "black-screen": {
  "cat": "Görüntü / siyah ekran",
  "name": "Bağlandıktan sonra siyah ekran",
  "alias": "siyah ekran kara ekran goruntu yok black screen baglandi siyah 黑屏",
  "sym": "Bağlı ama görüntü tamamen siyah, genelde ses duyup fareyi görürken.",
  "cause": "Çözünürlük desteklenmiyor, oyunun tam ekran çözünürlüğü != yayın çözünürlüğü, eski GPU sürücüsü veya bozuk kalıcı bit eşlem önbelleği.",
  "fix": "1) Host'u 1080p gibi yaygın çözünürlüğe geçir; 2) tam ekran oyunu pencereye al; 3) GPU sürücüsünü güncelle; 4) \"kalıcı bit eşlem önbelleği\"ni kapat (RDP Performans sekmesi).",
  "prevent": "Uyumlu çözünürlük kullan, GPU sürücüsünü yeni tut.",
  "sev": "Yüksek"
 },
 "lag": {
  "cat": "Gecikme",
  "name": "Gecikme / giriş gecikmesi",
  "alias": "gecikme lag giris gecikmesi takilma tutukluk yavas 卡顿",
  "sym": "Belirgin giriş gecikmesi, takılma / kare düşüşü, kötü tepki.",
  "cause": "Ağ tıkanıklığı / paket kaybı, zayıf Wi-Fi, düşük host upload, bant üstü bitrate veya yeni GPU sürücüsünden anormal kodlayıcı gecikmesi.",
  "fix": "1) Kabloya veya 5 GHz Wi-Fi'ye yaklaş; 2) pay için bitrate/bant limitini düşür; 3) paket kaybını kontrol et, bant yiyen uygulamaları kapat; 4) host'ta kararlı GPU sürücüsüne dön.",
  "prevent": "Kabloyu yeğle; bitrate < upload, payla.",
  "sev": "Orta"
 },
 "disconnect": {
  "cat": "Bağlantı / kopma",
  "name": "Sık kopma / saniyelerde kopuyor",
  "alias": "kopuyor sik kopma saniyelerde kopuyor surekli kopuyor disconnect 掉线",
  "sym": "Birkaç saniye veya bir dakikada kopuyor, tekrar tekrar bağlanıyor.",
  "cause": "Ağ kararsızlığı / kayıp, keep-alive yok, güvenlik katmanı veya sertifika sorunu ya da TermDD X.224 protokol hatası (Event ID 50).",
  "fix": "1) Paket kaybı ve yönlendirme kararlılığını kontrol et; 2) host'ta keep-alive aralığı ayarla; 3) güvenlik katmanı ve şifrelemeyi incele; 4) protokol kesintisini bulmak için Olay Görüntüleyici Event ID 50'ye bak.",
  "prevent": "Kararlı ağ, doğru güvenlik katmanı ve sertifika.",
  "sev": "Yüksek"
 },
 "no-audio": {
  "cat": "Ses / çevre birim",
  "name": "Ses yok",
  "alias": "ses yok audio yok duyulmuyor sessiz hoparlor yok 没声音",
  "sym": "Görüntü iyi ama uzak uçta ses yok.",
  "cause": "Host'ta kullanılabilir ses aygıtı yok (bulut PC / hoparlörsüz \"Bağlı hoparlör veya kulaklık yok\" gösterir) veya yanlış yakalama aygıtı seçili.",
  "fix": "1) Host'a sanal ses aygıtı (VB-Cable gibi) kur; 2) ayarlarda doğru yakalama aygıtını seç; 3) biri bağlıysa uygulanması için yeniden bağlan.",
  "prevent": "Host'ta kullanılabilir ses çıkış aygıtı olduğundan emin ol.",
  "sev": "Orta"
 },
 "controller": {
  "cat": "Ses / çevre birim",
  "name": "Kol / çevre birim algılanmıyor",
  "alias": "kol gamepad algilanmiyor cevre birim klavye fare joystick tepkisiz 手柄",
  "sym": "Kol, klavye/fare veya başka çevre birim uzak uçta algılanmıyor veya tepki vermiyor.",
  "cause": "İstemcide kol passthrough açık değil, host'ta kol sürücüsü eksik veya başka program aygıtı özel tutuyor.",
  "fix": "1) UU Remote'ta kol/çevre birim passthrough'ı aç; 2) host'a uygun kol sürücüsü kur; 3) yeniden bağlan ve aygıtı özel tutan programı kapat.",
  "prevent": "Sürücüleri önceden kur ve passthrough'ı aç.",
  "sev": "Orta"
 },
 "port-conflict": {
  "cat": "Bağlantı / kopma",
  "name": "Port çakışması / dinleyici sorunu",
  "alias": "port catismasi port 3389 port dolu dinleyici listener netstat 端口",
  "sym": "Anormal dinleyici / bağlantı reddedildi, kendi barındırılan / aynı makine RDP'de yaygın.",
  "cause": "Varsayılan RDP port 3389 (veya ayarladığın port) başka programca kullanılıyor.",
  "fix": "1) Portu kullanan PID'yi bulmak için netstat -a -o; 2) tasklist /svc ile eşle; 3) portu değiştir veya çakışan programı durdur, sonra uzak hizmeti yeniden başlat.",
  "prevent": "Birden çok uzak aracın aynı port için çekişmesini önle.",
  "sev": "Orta"
 },
 "sleep-wake": {
  "cat": "Bağlantı / kopma",
  "name": "Uyku/hazırda bekletmede erişilemez",
  "alias": "uyku hazirda bekletme uyandirma wol wake on lan baglanmiyor uyuyor 睡眠",
  "sym": "Host yanıt vermiyor ve hiçbir şekilde bağlanmıyor.",
  "cause": "Host uyku veya hazırda bekletmeye girdi, ağ kartı elektriksiz ve yanıt vermiyor.",
  "fix": "1) Host güç planını asla uyuma/hazırda bekletme yap; 2) Wake-on-LAN veya UU uzaktan açma ile uyandır; 3) uyandıktan sonra bağlantıyı başlat.",
  "prevent": "Uyku/hazırda bekletmeyi kapat, uzaktan açmayı ayarla.",
  "sev": "Orta"
 },
 "ipv6": {
  "cat": "Bağlantı / kopma",
  "name": "IPv6 kararsız bağlantıya yol açıyor",
  "alias": "ipv6 kararsiz aralikli bazen baglaniyor stabil degil bir oluyor bir olmuyor 时连时断",
  "sym": "Aralıklı bağlanmıyor, bir oluyor bir olmuyor, başka ağda yine bağlanıyor.",
  "cause": "Sistem IPv6'ya kötü uyum sağlıyor ve erişilemez bir IPv6 yolunu tercih ediyor.",
  "fix": "1) Düzelip düzelmediğini test için IPv6'yı geçici kapat; 2) yönlendirici/sistemi IPv4'e al; 3) iki ucun aynı ağ yığınını kullandığından emin ol.",
  "prevent": "İki ucu aynı yığında tut; gerekirse IPv6'yı kapat.",
  "sev": "Düşük"
 },
 "artifacts": {
  "cat": "Görüntü / siyah ekran",
  "name": "Bozulma / bulanık görüntü",
  "alias": "bozulma bulanik flu makroblok pikselli dusuk kalite 花屏",
  "sym": "Bozulma / makro bloklaşma veya genel olarak bulanık, net olmayan görüntü.",
  "cause": "Bitrate çok düşük ve otomatik düşürülmüş, anormal donanım çözme veya görüntüyü bozan paket kaybı.",
  "fix": "1) Bitrate'i yükselt; 2) yazılım çözmeyi denemek için host/istemcide donanım çözmeyi kapat; 3) paket kaybı ve ağ kararlılığını kontrol et.",
  "prevent": "Yeterli bitrate ver; ağı kararlı ve kayıpsız tut.",
  "sev": "Düşük"
 },
 "security-error": {
  "cat": "Bağlantı / kopma",
  "name": "Güvenlik hatası - bağlanmıyor",
  "alias": "guvenlik hatasi security error sertifika sifreleme kimlik dogrulama kimlik bilgileri 安全错误",
  "sym": "\"Güvenlik hatası nedeniyle istemci uzak bilgisayara bağlanamadı\" gösteriyor.",
  "cause": "Yanlış yapılandırılmış kimlik doğrulama/şifreleme katmanı veya bozuk lisans (yetkilendirme) sertifikası.",
  "fix": "1) Doğru güvenlik katmanı ve şifreleme düzeyini yapılandır; 2) lisans sertifikası bozuksa yedekten sonra X509 sertifika kayıt anahtarlarını sil ve lisanslama hizmetini yeniden etkinleştir; 3) saat ve kimlik bilgilerinin doğru olduğunu doğrula.",
  "prevent": "Doğru sertifika ve lisanslama yapılandırması.",
  "sev": "Yüksek"
 },
 "no-permission": {
  "cat": "Ses / çevre birim",
  "name": "Hesabın uzak izni yok",
  "alias": "izin yok erisim reddedildi uzak masaustu kullanicilari baglanti siniri oturum hakki 权限",
  "sym": "Giriş yaptıktan sonra uzaktan kontrolü başlatamıyorsun, izin yok veya reddedildi uyarısıyla.",
  "cause": "Hesap \"Uzak Masaüstü Kullanıcıları\" grubunda değil veya \"Bağlantı sayısını sınırla\" ilkesi engelliyor.",
  "fix": "1) Hesabı host'un \"Uzak Masaüstü Kullanıcıları\" grubuna ekle; 2) \"Bağlantı sayısını sınırla\" grup ilkesini kontrol et ve gevşet; 3) hesabın uzaktan oturum açma hakkı olduğunu doğrula.",
  "prevent": "Hesapları doğru yetkilendir, makul bağlantı sınırı ilkesi.",
  "sev": "Orta"
 }
};
window.LABELS = {"miss": "Listede yok - başka ifade dene (ör. bağlanmıyor / siyah ekran / gecikme / ses yok / kol) veya aşağıdaki tam tabloya bak.", "codeword": ""};
window.FIELDS = [["sym", "Belirti"], ["cause", "En olası neden"], ["fix", "Çözüm adımları"], ["prevent", "Önlem / öz kontrol"], ["sev", "Önem"]];
window.THEAD = ["Sorun", "Kategori", "Belirti", "Çözüm yönü"];
window.CHIPS = ["bağlanmıyor", "siyah ekran", "gecikme", "ses yok", "kopuyor", "kol"];
