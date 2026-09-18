# SAGE-AI — Final Competition Build

SAGE-AI adalah laboratorium sains digital bertema siklus air dengan alur investigasi satu jalur.

## Alur siswa
1. Explore — Dunia Air
2. Observe — Amati Sebelum Menebak
3. Predict — Buat Prediksi
4. Experiment — Laboratorium Penguapan
5. Analyze — Temukan Buktinya
6. Explain — Susun Siklus Air
7. Connect — Sains di Lingkungan
8. Reflect — Refleksi Ilmuwan
9. Profile — Profil Ilmuwan (terbuka setelah Reflect selesai)

## Aturan interaksi
- Dunia Air: objek dapat diketuk untuk membuka petunjuk dan dapat digeser dengan sentuhan.
- Observe: slider waktu mengubah ukuran genangan dan menampilkan uap.
- Predict: pilihan, alasan, dan tingkat keyakinan dapat diubah sebelum lanjut.
- Experiment: kondisi dapat diubah dan hasil dihitung oleh model simulasi yang sama.
- Analyze: siswa harus membaca beberapa data sebelum lanjut.
- Explain: urutan dapat diulang; proses terakhir dapat dihapus untuk memperbaiki jawaban.
- Connect: pilihan dan alasan harus diisi.
- Reflect: tiga jawaban dapat diedit sebelum perjalanan diselesaikan.
- Menu tahap yang belum terbuka dinonaktifkan. Siswa mengikuti satu jalur.
- Progress disimpan di localStorage sehingga tidak hilang saat berpindah tahap.

## Tampilan
- Area aplikasi menggunakan viewport layar sehingga aktivitas utama tidak membutuhkan scroll vertikal.
- Layout responsif untuk layar HP kecil maupun layar lebih lebar.
- Navigasi bawah tetap terlihat dan tidak membuka tahap yang terkunci.

## Deploy ke GitHub Pages
Upload isi folder ini ke repository, pastikan `index.html` berada di root publik repository, lalu aktifkan GitHub Pages.

## QA sebelum build dikirim
- JavaScript syntax check: PASS (`app.js`, `sage.js`, `data.js`, `simulation.js`).
- Logic smoke test: PASS untuk alur unlock 8 tahap, progress 0–100%, siklus benar, dan profile unlock.
- CSS audit: `#screen` memiliki ukuran fixed viewport dan `overflow:hidden`; breakpoint HP tersedia.
- Pointer interaction: `pointerdown` + `pointermove` + `pointerup` digunakan untuk objek Dunia Air.

Catatan: pengujian sentuhan fisik di perangkat HP pengguna tidak dapat disimulasikan dari lingkungan kerja; setelah upload ke GitHub Pages, lakukan satu pengecekan akhir pada HP target untuk memastikan browser perangkat tidak menerapkan zoom/aksesibilitas khusus.
