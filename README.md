# Konstitusi Quest 🏛️

Website game edukasi PPKn untuk siswa SD dengan enam misi tentang konstitusi, UUD NRI Tahun 1945, hak, kewajiban, hubungan hak dan kewajiban, serta sikap bertanggung jawab.

## Fitur
- Enam misi pembelajaran dengan materi singkat.
- Kuis pilihan ganda dan pembahasan jawaban.
- Skor otomatis, XP, level, dan lencana.
- Dashboard progres siswa.
- Leaderboard demo.
- Dashboard guru demo dan ekspor laporan CSV.
- Progres tersimpan pada browser menggunakan `localStorage`.
- Responsif untuk HP, tablet, dan laptop.

## Cara menjalankan
1. Unduh atau ekstrak folder proyek.
2. Buka `index.html` di browser modern.
3. Untuk pengalaman terbaik, jalankan melalui server lokal atau GitHub Pages.

Tidak membutuhkan proses build untuk versi statis ini.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah semua isi folder ini ke root repository (pastikan `index.html` ada di root).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
6. Tunggu proses deployment selesai; GitHub akan menampilkan URL website.

## Catatan penting tentang versi ini
Versi ini dibuat sebagai website statis yang dapat langsung dipublikasikan di GitHub Pages. Data progres dan hasil disimpan pada browser perangkat yang digunakan. Nama tampilan dan hasil tidak otomatis tersinkron ke perangkat lain.

Leaderboard berisi data demo dan progres lokal, bukan leaderboard kelas yang tersinkron. Dashboard guru juga merupakan ringkasan lokal pada browser yang sama, bukan sistem akun guru/siswa dengan akses terpisah.

Untuk penggunaan kelas sungguhan dengan login aman, data siswa, leaderboard bersama, dan laporan lintas perangkat, tambahkan backend/database serta autentikasi dan aturan otorisasi. Jangan memasukkan data pribadi siswa ke versi demo ini.

## Struktur
- `index.html` — struktur halaman website.
- `style.css` — desain responsif.
- `script.js` — bank soal, penilaian, progres, leaderboard demo, dan dashboard.
- `README.md` — petunjuk penggunaan dan deployment.

## Materi konstitusi
Materi disederhanakan untuk pembelajaran SD. Untuk penggunaan formal, guru sebaiknya memeriksa kembali rumusan pasal terhadap naskah resmi UUD NRI Tahun 1945 dan menyesuaikannya dengan tujuan pembelajaran serta fase kelas.
