# SAGE-AI FINAL — Siklus Air + Ekosistem

Build final revisi sesuai standar yang dikunci bersama:

- Satu aplikasi SAGE-AI berisi dua materi: **Siklus Air** dan **Ekosistem**.
- Alur belajar kedua materi sengaja berbeda.
- Semua objek pembelajaran memakai visual foto nyata yang relevan; tidak menggunakan emoji sebagai objek belajar.
- Foto tidak dibuat sebagai satu background yang diulang di semua tahap. Setiap tahap memakai konteks visual yang berbeda.
- Eksperimen/simulasi bersifat interaktif dengan kontrol yang dapat diubah dan hasil yang ikut berubah.
- Siswa tidak dapat melompat ke tahap berikutnya sebelum tahap sebelumnya selesai.
- Jawaban salah dapat diperbaiki dan dicoba lagi.
- Progress tersimpan di localStorage.
- Tampilan mobile-first dan area belajar dibuat tanpa page-scroll panjang.

## Alur Siklus Air
1. Observasi
2. Telusuri jejak air
3. Laboratorium penguapan
4. Simulasi cuaca
5. Diagnosis perubahan air
6. Misi menjaga aliran air
7. Refleksi

## Alur Ekosistem
1. Survei sawah nyata
2. Baca peran komponen
3. Bangun jaring makanan
4. Uji keseimbangan populasi
5. Uji gangguan ekosistem
6. Misi keseimbangan sawah
7. Refleksi

## Visual
Foto diambil dari Wikimedia Commons melalui `Special:FilePath` sehingga halaman GitHub Pages memuat foto langsung dari sumber Commons. Daftar sumber dan lisensi ada di bawah. Pastikan koneksi internet tersedia saat membuka website.

### Sumber foto utama
- Rice Field Indonesia — EkoSadewo — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Rice_Field_Indonesia.jpg
- Oryza sativa L. — Syariful Msth — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Oryza_sativa_L.jpg
- Rice grasshopper — Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Rice_grasshopper.jpg
- Rice paddy frogs — J. Patrick Fischer — CC BY 3.0: https://commons.wikimedia.org/wiki/File:Rice_paddy_frogs_genus_Fejervarya.jpg
- Sparrows in the rice field — Pillar1984 — CC BY-SA 2.0: https://commons.wikimedia.org/wiki/File:Sparrows_in_the_rice_field_(14749194072).jpg
- Close up fish 01 — foto ikan nyata dari akuarium: https://commons.wikimedia.org/wiki/File:Close_up_fish_01.JPG (CC BY-SA 4.0, Celinebj)
- Mina padi Java — Kembangraps — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Mina_padi_java_Pj_IMG-20150313-WA0004.jpg
- Panen padi di sawah — Arnawakomang — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Panen_padi_di_sawah.jpg
- Paddy field in Kalibaru — Farah Salsabila: https://commons.wikimedia.org/wiki/File:Paddy_field_in_Kalibaru,_East_Java,_Indonesia.jpg
- Sea, Indonesia — Rahmat budi cahyono — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Sea,_Indonesia.jpg
- Ngebel lake — Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Ngebel_lake.jpg
- River and stream in Bogor — Wikimedia Commons: https://commons.wikimedia.org/wiki/File:River_and_stream.jpg
- Indonesian Waterfall — Athalia 10206 — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Indonesian_Waterfall.jpg
- Mountain in west Java — Ulfaannisa — CC0: https://commons.wikimedia.org/wiki/File:Mountain_in_west_java.jpg
- Awan kumulonimbus — Aulivia Gabyriela REVI — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Awan_kumulonimbus.jpg
- Sunset from Indonesia — Fitrah 9131 — CC BY 3.0: https://commons.wikimedia.org/wiki/File:Sunset_from_Indonesia.jpg
- Two Glasses of Water — TNSE Mahalingam VNR: https://commons.wikimedia.org/wiki/File:Two_Glasses_of_Water_(with_cm_Scale)_O.jpg
- The Water Cycle — Illustrator184396 — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:The_Water_Cycle.png
- Beautiful Landscape in Indonesia — Luthfan AP — CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Beautiful_Landscape_in_Indonesia.jpg

## Upload ke GitHub Pages
Upload seluruh isi folder ini ke repository. Buka `index.html` melalui GitHub Pages. Karena foto memakai sumber online, koneksi internet diperlukan.

## Standar visual terkunci
- Foto pembelajaran harus sesuai label dan konteks; objek utama harus jelas dan utuh.
- Card menggunakan area konsisten; foto tidak boleh di-crop atau di-stretch.
- Modal memakai foto yang sama dengan card dan `object-fit: contain`; foto dibatasi viewport.
- Mobile 360–430 px dan desktop wajib bebas horizontal overflow.
- Jika foto salah objek, ambigu, blur berat, atau terpotong pada card/modal: foto TIDAK LULUS dan harus diganti.
- Siklus Air dan Ekosistem mempertahankan alur belajar yang berbeda; tidak boleh menjadi template aktivitas yang sama.

## QA final
Sebelum dipublikasikan, cek setiap foto pada card dan modal di mobile portrait dan desktop. Cek juga seluruh tujuh tahap pada masing-masing materi.

### Verifikasi perubahan foto
- **Ikan:** menggunakan *Close up fish 01.JPG*, yaitu foto nyata ikan dari akuarium sehingga objek ikan terlihat jelas. Sumber Commons: https://commons.wikimedia.org/wiki/File:Close_up_fish_01.JPG
- **Tanah:** menggunakan *Soil.jpg*, foto yang secara langsung menampilkan objek tanah. Sumber Commons: https://commons.wikimedia.org/wiki/File:Soil.jpg
- **Katak:** menggunakan *Paddy Frog (Fejervarya limnocharis).jpg*, sehingga objek katak terlihat sebagai satu objek yang jelas. Sumber Commons: https://commons.wikimedia.org/wiki/File:Paddy_Frog_(Fejervarya_limnocharis).jpg
