# SMK Negeri 1 Tabanan — Redesign Website

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)

[Live Site](https://smkn1tabanan.sch.id)

Landing page modern untuk SMK Negeri 1 Tabanan — sekolah menengah kejuruan di Bali. Dibangun dengan Vite dan Tailwind CSS, menampilkan informasi program keahlian yang akurat bersumber dari Instagram resmi dan website sekolah.

---

## Daftar Isi
- [Ringkasan](#ringkasan)
- [Struktur Project](#struktur-project)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Memulai](#memulai)
- [Kontributor](#kontributor)
- [Author](#author)

---

## Ringkasan
**Redesign SMK Negeri 1 Tabanan** adalah revamp total dari website sekolah. Situs asli menggunakan WordPress; versi ini berupa landing page statis dengan halaman detail untuk setiap program keahlian (AKL, BDP, OTKP, TKJ), dibangun sebagai single-page application dengan konten yang dikelola secara data-driven.

---

## Struktur Project
```text
redesign-smaksata-website/
├── src/
│   ├── assets/              # Logo SVG & Aset Gambar
│   ├── css/
│   │   ├── main.css         # Tailwind Base, Components, Utilities
│   │   ├── components.css   # Style Komponen Spesifik
│   │   └── animations.css   # Animasi Keyframe Kustom
│   ├── data/
│   │   └── programs.js      # Data Program Keahlian (AKL, BDP, OTKP, TKJ)
│   └── js/
│       ├── main.js          # Logika Landing Page
│       └── detail.js        # Logika Halaman Detail
├── index.html               # Landing Page
├── detail.html              # Template Halaman Detail Jurusan
├── image-guide.md           # Panduan Spesifikasi Gambar
├── vite.config.js           # Konfigurasi Vite (Multi-Page)
├── tailwind.config.js       # Design Token Tailwind
├── postcss.config.js        # Konfigurasi PostCSS
├── package.json             # Inventory Project & Scripts
├── .gitignore               # Mapping File yang Diabaikan
└── README.md                # Dokumentasi Project
```

---

## Fitur

### 1. Kartu Program Data-Driven
Empat kartu program keahlian di-render secara dinamis dari `src/data/programs.js` dengan informasi akurat dari sumber resmi.

### 2. Halaman Detail Tiap Program
Klik "Pelajari lebih lanjut" pada kartu program untuk melihat halaman detail berisi kompetensi, fasilitas, prospek kerja, dan tempat PKL.

### 3. Timeline Sejarah
Linimasa visual sejarah sekolah dari tahun 1962 hingga sekarang, dengan layout selang-seling kiri-kanan di desktop dan daftar rapi di mobile.

### 4. Galeri Interaktif
Grid gambar responsif dengan lightbox — klik thumbnail untuk melihat ukuran penuh, navigasi keyboard (panah, ESC).

### 5. Hero Slider
Slider Swiper layar penuh dengan autoplay, pagination, navigasi, dan teks overlay dengan tombol CTA.

### 6. Animasi Scroll
Setiap section muncul dengan animasi fade saat di-scroll menggunakan AOS (Animate on Scroll).

### 7. Desain Responsif
Fully responsive dari monitor lebar hingga perangkat mobile. Navigasi berubah menjadi hamburger menu di layar kecil.

### 8. Form Kontak
Form kontak fungsional dengan validasi client-side dan embed Google Maps.

---

## Teknologi
- **Build Tool**: Vite 5 untuk HMR cepat dan build produksi yang optimal.
- **Styling**: Tailwind CSS 3 dengan design token kustom (warna, font, spacing).
- **Frontend**: Vanilla JavaScript (ES Modules) tanpa framework.
- **Library**: Swiper 11 (slider hero & prestasi), AOS 2 (animasi scroll).
- **Format Gambar**: WebP / JPEG (lihat `image-guide.md` untuk spesifikasi).

---

## Memulai

### Prasyarat
- Node.js (v18 atau lebih baru)
- npm

### 1. Clone Repository
```bash
git clone https://github.com/sintiasnn/redesign-smaksata-website.git
cd redesign-smaksata-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Buka di Browser
Akses `http://localhost:5173`.

### 5. Build untuk Produksi
```bash
npm run build
```

---

## Kontributor

Project ini terbuka untuk alumni SMK Negeri 1 Tabanan yang punya pengalaman **UI/UX Design**, **Frontend**, atau **Fullstack** dan ingin berkontribusi. Silakan hubungi author melalui Instagram DM [@nptsintias](https://instagram.com/nptsintias) untuk koordinasi lebih lanjut.

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk pedoman kontribusi, aturan coding, dan alur git.

---

## Author
**Ni Putu Sintia Wati**
- GitHub: [@sintiasnn](https://github.com/sintiasnn)
- Project: [SMK Negeri 1 Tabanan Redesign](https://github.com/sintiasnn/redesign-smaksata-website)
