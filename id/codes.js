window.CODES = {
 "cant-connect": {
  "cat": "Koneksi / putus",
  "name": "Tidak tersambung / koneksi gagal",
  "alias": "tidak tersambung koneksi gagal tak bisa tersambung timeout tak masuk cant connect 连不上",
  "sym": "Klien berkata \"tidak dapat tersambung ke komputer jarak jauh / gagal / timeout\"; Anda tak masuk ke host.",
  "cause": "Host mati / tak masuk / luring, firewall atau antivirus memblokir, sakelar jarak jauh bermasalah, IP rumah berubah, atau port terpakai.",
  "fix": "1) Pastikan host menyala, masuk, dan daring; 2) izinkan UU Remote di firewall dan antivirus; 3) matikan lalu nyalakan sakelar jarak jauh untuk reset; 4) mulai ulang router untuk segarkan IP; 5) jika port 3389 terpakai, ubah atau hentikan program yang berkonflik.",
  "prevent": "Beri host IP LAN tetap, masukkan ke daftar tepercaya, jaga menyala dan daring.",
  "sev": "Tinggi"
 },
 "black-screen": {
  "cat": "Gambar / layar hitam",
  "name": "Layar hitam setelah tersambung",
  "alias": "layar hitam hitam tanpa gambar black screen tersambung hitam 黑屏",
  "sym": "Tersambung tapi gambar hitam sepenuhnya, sering padahal terdengar suara dan terlihat mouse.",
  "cause": "Resolusi tak didukung, resolusi layar penuh game != resolusi streaming, driver GPU lama, atau cache bitmap persisten rusak.",
  "fix": "1) Ganti host ke resolusi umum seperti 1080p; 2) jadikan game layar penuh mode jendela; 3) perbarui driver GPU; 4) nonaktifkan \"cache bitmap persisten\" (tab Kinerja RDP).",
  "prevent": "Gunakan resolusi kompatibel, jaga driver GPU tetap baru.",
  "sev": "Tinggi"
 },
 "lag": {
  "cat": "Latensi / lag",
  "name": "Lag / jeda input",
  "alias": "lag latensi jeda jeda input patah-patah tersendat lambat 卡顿",
  "sym": "Jeda input terasa, patah-patah / frame turun, respons buruk.",
  "cause": "Kemacetan jaringan / paket hilang, Wi-Fi lemah, upload host rendah, bitrate di atas bandwidth, atau latensi encoder tak normal dari driver GPU baru.",
  "fix": "1) Pindah ke kabel atau dekati Wi-Fi 5 GHz; 2) turunkan batas bitrate/bandwidth untuk beri cadangan; 3) periksa paket hilang, tutup aplikasi pemakan bandwidth lain; 4) kembalikan driver GPU host ke versi stabil.",
  "prevent": "Utamakan kabel; bitrate < upload dengan cadangan.",
  "sev": "Sedang"
 },
 "disconnect": {
  "cat": "Koneksi / putus",
  "name": "Sering putus / putus dalam detik",
  "alias": "putus sering putus putus dalam detik terus terputus disconnect 掉线",
  "sym": "Putus dalam beberapa detik atau semenit, menyambung ulang terus.",
  "cause": "Jaringan tak stabil / kehilangan, keep-alive tak diatur, masalah lapisan keamanan atau sertifikat, atau galat protokol TermDD X.224 (Event ID 50).",
  "fix": "1) Periksa paket hilang dan stabilitas perutean; 2) atur interval keep-alive di host; 3) tinjau lapisan keamanan dan enkripsi; 4) lihat Event ID 50 di Penampil Peristiwa untuk lokalisasi gangguan protokol.",
  "prevent": "Jaringan stabil, lapisan keamanan dan sertifikat benar.",
  "sev": "Tinggi"
 },
 "no-audio": {
  "cat": "Suara / periferal",
  "name": "Tanpa suara",
  "alias": "tanpa suara tak ada audio tak terdengar bisu tanpa speaker 没声音",
  "sym": "Gambar baik tapi tak ada suara di sisi jarak jauh.",
  "cause": "Host tak punya perangkat audio yang bisa dipakai (PC awan / tanpa speaker menampilkan \"Tidak ada speaker atau headphone terpasang\") atau perangkat tangkap salah dipilih.",
  "fix": "1) Pasang perangkat audio virtual (seperti VB-Cable) di host; 2) pilih perangkat tangkap yang benar di pengaturan; 3) jika ada yang tersambung, sambung ulang agar berlaku.",
  "prevent": "Pastikan host punya perangkat keluaran audio yang bisa dipakai.",
  "sev": "Sedang"
 },
 "controller": {
  "cat": "Suara / periferal",
  "name": "Kontroler / periferal tak terdeteksi",
  "alias": "kontroler gamepad tak terdeteksi periferal keyboard mouse joystick tak merespons 手柄",
  "sym": "Kontroler, keyboard/mouse, atau periferal lain tak terdeteksi atau tak merespons di sisi jarak jauh.",
  "cause": "Passthrough kontroler tak aktif di klien, driver kontroler hilang di host, atau program lain memegang perangkat secara eksklusif.",
  "fix": "1) Aktifkan passthrough kontroler/periferal di UU Remote; 2) pasang driver kontroler yang sesuai di host; 3) sambung ulang dan tutup program yang memegang perangkat secara eksklusif.",
  "prevent": "Pasang driver lebih awal dan aktifkan passthrough.",
  "sev": "Sedang"
 },
 "port-conflict": {
  "cat": "Koneksi / putus",
  "name": "Konflik port / masalah listener",
  "alias": "konflik port port 3389 port terpakai listener netstat 端口",
  "sym": "Listener tak normal / koneksi ditolak, umum di RDP self-host / mesin sama.",
  "cause": "Port RDP bawaan 3389 (atau port yang diatur) dipakai program lain.",
  "fix": "1) Pakai netstat -a -o untuk cari PID yang memakai port; 2) cocokkan dengan tasklist /svc; 3) ubah port atau hentikan program yang berkonflik, lalu mulai ulang layanan jarak jauh.",
  "prevent": "Hindari beberapa alat jarak jauh berebut port yang sama.",
  "sev": "Sedang"
 },
 "sleep-wake": {
  "cat": "Koneksi / putus",
  "name": "Tak terjangkau saat tidur/hibernasi",
  "alias": "tidur hibernasi bangun wol wake on lan tidak tersambung tertidur 睡眠",
  "sym": "Host tak merespons dan tak tersambung sama sekali.",
  "cause": "Host masuk tidur atau hibernasi, jadi kartu jaringan mati daya dan tak merespons.",
  "fix": "1) Atur paket daya host agar tak pernah tidur/hibernasi; 2) bangunkan dengan Wake-on-LAN atau penyalaan jarak jauh UU; 3) mulai koneksi setelah bangun.",
  "prevent": "Matikan tidur/hibernasi, atur penyalaan jarak jauh.",
  "sev": "Sedang"
 },
 "ipv6": {
  "cat": "Koneksi / putus",
  "name": "IPv6 menyebabkan koneksi labil",
  "alias": "ipv6 labil kadang tersambung tak stabil hidup mati 时连时断",
  "sym": "Kadang tak tersambung, hidup mati, tersambung lagi di jaringan lain.",
  "cause": "Sistem buruk beradaptasi ke IPv6 dan memilih jalur IPv6 yang tak terjangkau.",
  "fix": "1) Nonaktifkan IPv6 sementara untuk uji apakah pulih; 2) atur router/sistem ke IPv4; 3) pastikan kedua sisi memakai tumpukan jaringan sama.",
  "prevent": "Jaga kedua sisi pada tumpukan sama; nonaktifkan IPv6 bila perlu.",
  "sev": "Rendah"
 },
 "artifacts": {
  "cat": "Gambar / layar hitam",
  "name": "Artefak / gambar buram",
  "alias": "artefak buram kabur makroblok pikselasi kualitas rendah 花屏",
  "sym": "Artefak / makroblok, atau gambar yang secara umum buram dan tak jelas.",
  "cause": "Bitrate terlalu rendah dan diturunkan otomatis, dekode perangkat keras tak normal, atau paket hilang merusak gambar.",
  "fix": "1) Naikkan bitrate; 2) matikan dekode perangkat keras di host/klien untuk coba dekode perangkat lunak; 3) periksa paket hilang dan stabilitas jaringan.",
  "prevent": "Beri bitrate cukup; jaga jaringan stabil dan tanpa kehilangan.",
  "sev": "Rendah"
 },
 "security-error": {
  "cat": "Koneksi / putus",
  "name": "Galat keamanan - tidak tersambung",
  "alias": "galat keamanan security error sertifikat enkripsi autentikasi kredensial 安全错误",
  "sym": "Menampilkan \"karena galat keamanan, klien tidak dapat tersambung ke komputer jarak jauh\".",
  "cause": "Lapisan autentikasi/enkripsi salah konfigurasi, atau sertifikat lisensi (otorisasi) rusak.",
  "fix": "1) Konfigurasi lapisan keamanan dan tingkat enkripsi yang benar; 2) jika sertifikat lisensi rusak, setelah cadangan hapus kunci registri sertifikat X509 dan aktifkan ulang layanan lisensi; 3) pastikan waktu dan kredensial benar.",
  "prevent": "Sertifikat dan konfigurasi lisensi benar.",
  "sev": "Tinggi"
 },
 "no-permission": {
  "cat": "Suara / periferal",
  "name": "Akun tanpa izin jarak jauh",
  "alias": "tanpa izin akses ditolak pengguna desktop jarak jauh batas koneksi hak masuk 权限",
  "sym": "Setelah masuk Anda tak bisa memulai kendali jarak jauh, dengan peringatan tanpa izin atau ditolak.",
  "cause": "Akun tak ada di grup \"Pengguna Desktop Jarak Jauh\", atau kebijakan \"Batasi jumlah koneksi\" memblokir.",
  "fix": "1) Tambahkan akun ke grup \"Pengguna Desktop Jarak Jauh\" host; 2) periksa dan longgarkan kebijakan grup \"Batasi jumlah koneksi\"; 3) pastikan akun punya hak masuk jarak jauh.",
  "prevent": "Otorisasi akun dengan benar, kebijakan batas koneksi wajar.",
  "sev": "Sedang"
 }
};
window.LABELS = {"miss": "Tidak terdaftar - coba kata lain (mis. tidak tersambung / layar hitam / lag / tanpa suara / kontroler) atau lihat tabel lengkap di bawah.", "codeword": ""};
window.FIELDS = [["sym", "Gejala"], ["cause", "Penyebab paling mungkin"], ["fix", "Langkah perbaikan"], ["prevent", "Pencegahan / periksa mandiri"], ["sev", "Tingkat"]];
window.THEAD = ["Masalah", "Kategori", "Gejala", "Arah solusi"];
window.CHIPS = ["tidak tersambung", "layar hitam", "lag", "tanpa suara", "putus", "kontroler"];
