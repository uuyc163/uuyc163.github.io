window.CODES = {
 "cant-connect": {
  "cat": "Sambungan / putus",
  "name": "Tak bersambung / sambungan gagal",
  "alias": "tak bersambung sambungan gagal tak dapat bersambung timeout tak masuk cant connect 连不上",
  "sym": "Klien berkata \"tak dapat bersambung ke komputer jauh / gagal / timeout\"; anda tak masuk ke hos.",
  "cause": "Hos dimatikan / tak log masuk / luar talian, tembok api atau antivirus menyekat, suis jauh rosak, IP rumah berubah, atau port diguna.",
  "fix": "1) Pastikan hos dihidupkan, dilog masuk, dalam talian; 2) benarkan UU Remote dalam tembok api dan antivirus; 3) matikan kemudian hidupkan suis jauh untuk set semula; 4) mulakan semula penghala untuk segarkan IP; 5) jika port 3389 diguna, ubah atau hentikan program berkonflik.",
  "prevent": "Beri hos IP LAN tetap, tambah ke senarai dipercayai, kekal dihidupkan dan dalam talian.",
  "sev": "Tinggi"
 },
 "black-screen": {
  "cat": "Gambar / skrin hitam",
  "name": "Skrin hitam selepas bersambung",
  "alias": "skrin hitam hitam tiada gambar black screen bersambung hitam 黑屏",
  "sym": "Bersambung tapi gambar hitam sepenuhnya, sering sedangkan dengar bunyi dan nampak tetikus.",
  "cause": "Resolusi tak disokong, resolusi skrin penuh permainan != resolusi penstriman, pemacu GPU lama, atau cache bitmap kekal rosak.",
  "fix": "1) Tukar hos ke resolusi lazim seperti 1080p; 2) jadikan permainan skrin penuh mod tetingkap; 3) kemas kini pemacu GPU; 4) lumpuhkan \"cache bitmap kekal\" (tab Prestasi RDP).",
  "prevent": "Guna resolusi serasi, kekalkan pemacu GPU terkini.",
  "sev": "Tinggi"
 },
 "lag": {
  "cat": "Kependaman / lag",
  "name": "Lag / lengah input",
  "alias": "lag kependaman lengah lengah input tersekat tergagap perlahan 卡顿",
  "sym": "Lengah input ketara, tersekat / kehilangan bingkai, gerak balas lemah.",
  "cause": "Kesesakan rangkaian / paket hilang, Wi-Fi lemah, muat naik hos rendah, kadar bit melebihi lebar jalur, atau kependaman pengekod luar biasa dari pemacu GPU baharu.",
  "fix": "1) Tukar ke kabel atau hampiri Wi-Fi 5 GHz; 2) turunkan had kadar bit/lebar jalur untuk beri lebihan; 3) periksa paket hilang, tutup aplikasi pemakan lebar jalur lain; 4) pulihkan pemacu GPU hos ke versi stabil.",
  "prevent": "Utamakan kabel; kadar bit < muat naik dengan lebihan.",
  "sev": "Sederhana"
 },
 "disconnect": {
  "cat": "Sambungan / putus",
  "name": "Kerap putus / putus dalam saat",
  "alias": "putus kerap putus putus dalam saat asyik terputus disconnect 掉线",
  "sym": "Putus dalam beberapa saat atau seminit, menyambung semula berulang.",
  "cause": "Rangkaian tak stabil / kehilangan, keep-alive tak ditetapkan, masalah lapisan keselamatan atau sijil, atau ralat protokol TermDD X.224 (Event ID 50).",
  "fix": "1) Periksa paket hilang dan kestabilan penghalaan; 2) tetapkan selang keep-alive di hos; 3) semak lapisan keselamatan dan penyulitan; 4) lihat Event ID 50 dalam Pemapar Peristiwa untuk lokalisasi gangguan protokol.",
  "prevent": "Rangkaian stabil, lapisan keselamatan dan sijil betul.",
  "sev": "Tinggi"
 },
 "no-audio": {
  "cat": "Bunyi / periferal",
  "name": "Tiada bunyi",
  "alias": "tiada bunyi tiada audio tak dengar senyap pembesar suara 没声音",
  "sym": "Gambar baik tapi tiada bunyi di hujung jauh.",
  "cause": "Hos tiada peranti audio boleh guna (PC awan / tanpa pembesar suara papar \"Tiada pembesar suara atau fon kepala dipasang\") atau peranti tangkap salah dipilih.",
  "fix": "1) Pasang peranti audio maya (seperti VB-Cable) di hos; 2) pilih peranti tangkap betul dalam tetapan; 3) jika ada yang bersambung, sambung semula untuk berkesan.",
  "prevent": "Pastikan hos ada peranti output audio boleh guna.",
  "sev": "Sederhana"
 },
 "controller": {
  "cat": "Bunyi / periferal",
  "name": "Kawalan / periferal tak dikesan",
  "alias": "kawalan gamepad tak dikesan periferal papan kekunci tetikus joistik tiada gerak balas 手柄",
  "sym": "Kawalan, papan kekunci/tetikus atau periferal lain tak dikesan atau tak bergerak balas di hujung jauh.",
  "cause": "Passthrough kawalan tak didayakan di klien, pemacu kawalan hilang di hos, atau program lain memegang peranti secara eksklusif.",
  "fix": "1) Dayakan passthrough kawalan/periferal dalam UU Remote; 2) pasang pemacu kawalan sesuai di hos; 3) sambung semula dan tutup program yang memegang peranti secara eksklusif.",
  "prevent": "Pasang pemacu lebih awal dan dayakan passthrough.",
  "sev": "Sederhana"
 },
 "port-conflict": {
  "cat": "Sambungan / putus",
  "name": "Konflik port / masalah pendengar",
  "alias": "konflik port port 3389 port diguna pendengar listener netstat 端口",
  "sym": "Pendengar luar biasa / sambungan ditolak, lazim dalam RDP layan sendiri / mesin sama.",
  "cause": "Port RDP lalai 3389 (atau port ditetapkan) diguna program lain.",
  "fix": "1) Guna netstat -a -o untuk cari PID yang guna port; 2) padankan dengan tasklist /svc; 3) ubah port atau hentikan program berkonflik, kemudian mulakan semula perkhidmatan jauh.",
  "prevent": "Elak beberapa alat jauh berebut port sama.",
  "sev": "Sederhana"
 },
 "sleep-wake": {
  "cat": "Sambungan / putus",
  "name": "Tak dapat dicapai semasa tidur/hibernasi",
  "alias": "tidur hibernasi kejut wol wake on lan tak bersambung lena 睡眠",
  "sym": "Hos tak bergerak balas dan tak bersambung langsung.",
  "cause": "Hos masuk tidur atau hibernasi, jadi kad rangkaian terputus kuasa dan tak bergerak balas.",
  "fix": "1) Tetapkan pelan kuasa hos supaya tak pernah tidur/hibernasi; 2) kejutkan dengan Wake-on-LAN atau penghidupan jauh UU; 3) mulakan sambungan selepas terjaga.",
  "prevent": "Matikan tidur/hibernasi, tetapkan penghidupan jauh.",
  "sev": "Sederhana"
 },
 "ipv6": {
  "cat": "Sambungan / putus",
  "name": "IPv6 menyebabkan sambungan tak stabil",
  "alias": "ipv6 tak stabil kadang bersambung tak menentu hidup mati 时连时断",
  "sym": "Kadang tak bersambung, hidup mati, bersambung semula di rangkaian lain.",
  "cause": "Sistem buruk menyesuaikan diri ke IPv6 dan memilih laluan IPv6 tak dapat dicapai.",
  "fix": "1) Lumpuhkan IPv6 sementara untuk uji sama ada pulih; 2) tetapkan penghala/sistem ke IPv4; 3) pastikan kedua-dua hujung guna timbunan rangkaian sama.",
  "prevent": "Kekalkan kedua-dua hujung pada timbunan sama; lumpuhkan IPv6 bila perlu.",
  "sev": "Rendah"
 },
 "artifacts": {
  "cat": "Gambar / skrin hitam",
  "name": "Artifak / gambar kabur",
  "alias": "artifak kabur kabur makroblok piksel kualiti rendah 花屏",
  "sym": "Artifak / makroblok, atau gambar yang keseluruhannya kabur dan tak jelas.",
  "cause": "Kadar bit terlalu rendah dan diturunkan automatik, penyahkodan perkakasan luar biasa, atau paket hilang merosakkan gambar.",
  "fix": "1) Naikkan kadar bit; 2) lumpuhkan penyahkodan perkakasan di hos/klien untuk cuba penyahkodan perisian; 3) periksa paket hilang dan kestabilan rangkaian.",
  "prevent": "Beri kadar bit cukup; kekalkan rangkaian stabil dan tanpa kehilangan.",
  "sev": "Rendah"
 },
 "security-error": {
  "cat": "Sambungan / putus",
  "name": "Ralat keselamatan - tak bersambung",
  "alias": "ralat keselamatan security error sijil penyulitan pengesahan kelayakan 安全错误",
  "sym": "Papar \"kerana ralat keselamatan, klien tak dapat bersambung ke komputer jauh\".",
  "cause": "Lapisan pengesahan/penyulitan salah tetapan, atau sijil lesen (kebenaran) rosak.",
  "fix": "1) Tetapkan lapisan keselamatan dan tahap penyulitan betul; 2) jika sijil lesen rosak, selepas sandaran padam kunci registri sijil X509 dan aktifkan semula perkhidmatan pelesenan; 3) pastikan masa dan kelayakan betul.",
  "prevent": "Sijil dan tetapan pelesenan betul.",
  "sev": "Tinggi"
 },
 "no-permission": {
  "cat": "Bunyi / periferal",
  "name": "Akaun tiada kebenaran jauh",
  "alias": "tiada kebenaran akses dinafikan pengguna desktop jauh had sambungan hak log masuk 权限",
  "sym": "Selepas log masuk anda tak boleh mula kawalan jauh, dengan amaran tiada kebenaran atau dinafikan.",
  "cause": "Akaun tiada dalam kumpulan \"Pengguna Desktop Jauh\", atau dasar \"Hadkan bilangan sambungan\" menyekat.",
  "fix": "1) Tambah akaun ke kumpulan \"Pengguna Desktop Jauh\" hos; 2) semak dan longgarkan dasar kumpulan \"Hadkan bilangan sambungan\"; 3) pastikan akaun ada hak log masuk jauh.",
  "prevent": "Beri kebenaran akaun dengan betul, dasar had sambungan munasabah.",
  "sev": "Sederhana"
 }
};
window.LABELS = {"miss": "Tiada dalam senarai - cuba perkataan lain (cth. tak bersambung / skrin hitam / lag / tiada bunyi / kawalan) atau lihat jadual penuh di bawah.", "codeword": ""};
window.FIELDS = [["sym", "Gejala"], ["cause", "Punca paling mungkin"], ["fix", "Langkah pembaikan"], ["prevent", "Pencegahan / semak kendiri"], ["sev", "Tahap"]];
window.THEAD = ["Masalah", "Kategori", "Gejala", "Arah penyelesaian"];
window.CHIPS = ["tak bersambung", "skrin hitam", "lag", "tiada bunyi", "putus", "kawalan"];
