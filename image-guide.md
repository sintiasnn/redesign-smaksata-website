# Panduan Gambar — SMK Negeri 1 Tabanan

## Spesifikasi Per Bagian

| Bagian | Resolusi Min. | Aspek Rasio | Max Size | Format |
|---|---|---|---|---|
| **Hero** (fullscreen) | 1920×1080px | 16:9 | 200KB | WebP / JPEG |
| **Profil** (gedung) | 1200×800px | 3:2 | 150KB | WebP / JPEG |
| **Program** (4 kartu) | 800×600px | ~4:3 | 100KB | WebP / JPEG |
| **Berita** (3 kartu) | 800×600px | ~4:3 | 100KB | WebP / JPEG |
| **Galeri** (8+ foto) | 800×600px | ~4:3 | 100KB | WebP / JPEG |
| **Acara** (6 kartu) | 800×600px | ~4:3 | 100KB | WebP / JPEG |

## Aturan Umum

1. **Format**: WebP paling kecil, kalau gak support pake JPEG quality 80%
2. **Ukuran file**: makin kecil makin cepat loading
3. **Hero** — pilih foto dengan subjek jelas (gedung, siswa, kegiatan), hindari foto terlalu gelap/terang karena ada overlay hitam 50%
4. **Kartu** — foto akan di-crop otomatis (`object-cover`), pastikan subjek utama di tengah
5. **Logo** — tetap pakai SVG yang sudah ada di `src/assets/`

## Nama File

Gunakan format: `nama-bagian-deskripsi.jpg`

Contoh:
```
hero-gedung-depan.jpg
hero-kegiatan-lab.jpg
hero-upacara.jpg
profil-gedung.jpg
program-akuntansi.jpg
program-bisnis-digital.jpg
program-manajemen-perkantoran.jpg
program-tkj.jpg
berita-ppdb.jpg
berita-prestasi.jpg
berita-kerjasama.jpg
galeri-01.jpg
galeri-02.jpg
...
acara-literasi.jpg
acara-p5.jpg
acara-bpjs.jpg
```

## Cara Ganti

1. Taruh foto di folder `src/assets/images/`
2. Update `src` di file terkait:
   - **Hero**: langsung di `index.html` (3 slide)
   - **Profil**: langsung di `index.html`
   - **Program, Galeri, Acara**: di `src/js/main.js` (array data)
   - **Berita**: langsung di `index.html`
