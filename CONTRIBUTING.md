# Pedoman Kontribusi

Terima kasih sudah tertarik berkontribusi di project redesign website SMK Negeri 1 Tabanan! Project ini terbuka untuk alumni yang punya pengalaman di **UI/UX Design**, **Frontend**, atau **Fullstack**.

---

## Cara Berkontribusi

1. **Diskusi dulu** — Hubungi author via Instagram [@nptsintias](https://instagram.com/nptsintias) untuk koordinasi dan tahu apa yang sedang dikerjakan.
2. **Fork repository** — Clone fork ke lokal kamu.
3. **Buat branch** — Gunakan nama yang deskriptif:
   - `feat/nama-fitur` untuk fitur baru
   - `fix/nama-bug` untuk perbaikan bug
   - `update/nama-bagian` untuk pembaruan konten
4. **Commit** — Pakai pesan commit yang jelas dalam Bahasa Indonesia.
5. **Pull Request** — Kirim PR ke branch `main` dengan deskripsi perubahan.

---

## Aturan Coding

### Umum
- Gunakan **JavaScript Vanilla** (ES Modules), tanpa framework.
- Gaya kode mengikuti **Prettier** (jika terpasang) atau konsisten dengan kode yang sudah ada.
- Path file menggunakan **tanda petik tunggal** (`'`), bukan petik ganda.

### HTML
- Indentasi 4 spasi.
- Nama ID dan class pake **kebab-case**.
- Path aset pake path relatif (`/src/...`).

### CSS / Tailwind
- Class Tailwind diutamakan. CSS kustom hanya untuk hal yang tidak bisa di-cover Tailwind.
- Custom CSS ditempatkan di file terpisah (`main.css`, `components.css`, `animations.css`).
- Warna menggunakan variable CSS (`--color-primary-500`, dll) atau class Tailwind (`text-primary-600`).

### JavaScript
- Nama fungsi: **camelCase**.
- Nama konstanta array/objek: **camelCase** (kecuali konstanta global pake UPPER_SNAKE).
- Gunakan `const` dan `let`, hindari `var`.
- Import libraries di bagian atas file.

### Data
- Konten program keahlian (AKL, BDP, OTKP, TKJ) ada di `src/data/programs.js`.
- Jika ada perubahan konten, update file data, **bukan** hardcode di HTML/JS.

---

## Gambar

- Format: **WebP** (prioritas) atau **JPEG quality 80%**.
- Ukuran maks: lihat [image-guide.md](image-guide.md) untuk spesifikasi lengkap (resolusi, format, dan penamaan file).
- Taruh di folder `src/assets/images/`.
- Jangan commit foto screenshot pribadi atau foto tidak resmi.

---

## Alur Kerja

```bash
# Clone
git clone https://github.com/sintiasnn/redesign-smaksata-website.git
cd redesign-smaksata-website

# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

---

## Kontak

Ada pertanyaan? DM Instagram [@nptsintias](https://instagram.com/nptsintias).
