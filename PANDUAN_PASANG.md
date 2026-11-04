# Cara memasang portofolio ke project Astro kamu

1. Buka folder `portofolio` kamu di VS Code. Hentikan server kalau sedang jalan (Ctrl + C di terminal).
2. Dari zip ini, salin folder `src` dan `public` ke dalam folder `portofolio` kamu. Saat ditanya "Replace?", pilih Ya / Replace all.
3. Jalankan lagi: `npm run dev` lalu buka http://localhost:4321

Bahasa awal halaman adalah Inggris. Pengunjung bisa ganti ke Indonesia lewat tombol EN/ID di pojok kanan atas.

## Mengisi foto, gambar, video, dan dokumen
Cukup taruh file di folder yang tepat dengan nama yang persis sama. Kalau file belum ada, bagian itu tetap tampil rapi dengan tampilan cadangan.
Di proyek, semua file muncul sebagai slide yang bisa digeser (tombol panah, titik, atau tarik dengan mouse/jari). Kalau slide diklik, file terbuka layar penuh, bisa digeser ke file berikutnya dengan panah atau swipe, dan ditutup dengan tanda silang (X) atau tombol Esc. Sertifikat dan dokumen juga terbuka dengan cara yang sama. Catatan: di sebagian HP, PDF tidak tampil di dalam popup; gunakan tautan "Buka di tab baru" di bagian atas popup.

| Isi | Taruh di | Nama file |
|---|---|---|
| Foto profil | public/images/ | profile.jpg (atau .png / .webp) |
| Isi proyek (BOLEH BANYAK: gambar, video, PDF) | public/projects/NAMA-PROYEK/ | Cara termudah: buat folder per proyek lalu masukkan semua file di dalamnya, nama file bebas, urutannya mengikuti angka/abjad (contoh: public/projects/chili/01-dashboard.png, 02-hasil.png, 03-demo.mp4, 04-paper.pdf). Nama proyek: chili, lazismu, sirimby, retail, sentiment, spotify, sql. Jenis yang didukung: png, jpg, webp, gif, mp4, webm, pdf. |
| Sertifikat (gambar atau PDF) | public/certs/ | bnsp-data-science, ibm-granite, bootcamp-smartpath, magang-lazismu, hki-sirimby, eprt (ekstensi .jpg, .png, .webp, atau .pdf) |
| Surat keterangan lulus | public/docs/ | surat-keterangan-lulus.pdf (atau .jpg / .png) |
| Transkrip nilai | public/docs/ | transkrip-nilai.pdf (atau .jpg / .png) |
| CV | public/ | CV_Fathimah_Ella_Syarif.pdf (sudah ada, ganti kalau mau) |

Tips video: pakai format .mp4 dan usahakan di bawah 20 MB supaya cepat dibuka.

## Mengubah teks dan link
Semua teks (Indonesia dan Inggris) ada di satu file: `src/data/content.js`.
- Link GitHub, LinkedIn, dan nomor WhatsApp: bagian `profile` di paling atas.
- Link proyek (GitHub, demo): isi `href` di bagian `projects`. Tombol hanya muncul kalau `href` terisi.
- Link paper: isi `href` di bagian `publications`.

## Catatan
- Logo teknologi (Python, Pandas, dst.) dimuat dari internet (Simple Icons). Kalau ada logo yang gagal dimuat, otomatis diganti kotak kecil berwarna.
- Nomor WhatsApp dan email tampil publik di halaman. Hapus `whatsapp` di `profile` kalau suatu saat tidak ingin menampilkannya.
- Logo Power BI dan VS Code disimpan lokal di `public/icons/` (powerbi.png, vscode.png), jadi pasti muncul.

## Tips menampilkan hasil Power BI
Jangan upload file .pbix ke Google Drive: Drive tidak bisa menampilkannya, dan orang butuh Power BI Desktop untuk membukanya.
Cara terbaik: ekspor dashboard Power BI jadi PDF (File > Export > PDF) atau screenshot per halaman, lalu taruh di `public/projects/lazismu/`. Otomatis muncul di galeri geser dengan preview layar penuh.
Kalau perlu video demo yang besar, upload ke Google Drive (akses "siapa saja yang memiliki link") atau YouTube unlisted, lalu isi `href` pada tombol "Dashboard Power BI" di `src/data/content.js`.
Data donatur Lazismu itu data asli: samarkan nama/nomor donatur (blur atau data dummy) sebelum dipublikasikan.

## Thumbnail untuk sertifikat berbentuk PDF
Kalau sertifikat berupa PDF, kartunya menampilkan gambar halaman pertama (bukan kotak "PDF"). Taruh gambarnya di `public/certs/` dengan nama `NAMA-thumb.jpg`, contoh: `hki-sirimby.pdf` dan `hki-sirimby-thumb.jpg`. Cara termudah membuatnya: screenshot halaman pertama PDF-nya. Kalau tidak ada gambar thumbnail, otomatis kembali ke kotak "PDF". Saat diklik, PDF lengkapnya tetap terbuka di preview layar penuh.

## File paper (publikasi)
Paper dan sertifikat penulis SMART ada di `public/papers/` (smart-paper.pdf, smart-sertifikat.pdf). Tombolnya muncul di kartu publikasi dan membuka preview layar penuh. Untuk menambah file ke publikasi lain, tambahkan daftar `files` di bagian `publications` pada `src/data/content.js` dan taruh filenya di `public/papers/`.

## Urutan galeri proyek dan sampul PDF
Slide galeri diurutkan menurut nama file, jadi beri awalan angka: 01-..., 02-..., 03-... (contoh SIRIMBY: 03-manual-book.pdf menjadi slide ketiga).
Untuk slide PDF, gambar sampulnya dibuat dengan nama yang sama ditambah `-thumb`, contoh `03-manual-book-thumb.jpg`. File `-thumb` tidak dihitung sebagai slide sendiri.
