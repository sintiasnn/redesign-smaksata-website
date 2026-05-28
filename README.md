# SMK Negeri 1 Tabanan — Redesign Website

![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222?logo=githubpages)

> **Live preview:** [sintiasnn.github.io/redesign-smaksata-website](https://sintiasnn.github.io/redesign-smaksata-website)
>
> Situs resmi sekolah masih di [smkn1tabanan.sch.id](https://smkn1tabanan.sch.id) (WordPress). Repo ini adalah proses redesign. Setelah selesai dan mendapat persetujuan pihak sekolah, hasil redesign akan dideploy ke domain resmi.

Landing page modern untuk SMK Negeri 1 Tabanan — sekolah menengah kejuruan di Bali. Dibangun dengan **Astro 6** dan **Tailwind CSS v4**, menampilkan informasi program keahlian yang akurat bersumber dari data terstruktur.

---

## Ringkasan

**Redesign SMK Negeri 1 Tabanan** adalah revamp total dari website sekolah. Situs asli menggunakan WordPress; versi ini berupa situs statis multi-halaman dengan:

- **Landing page** satu halaman penuh dengan hero slider, profil, sejarah, program keahlian, fasilitas, prestasi, berita, galeri, acara, dan kontak.
- **Halaman detail** untuk setiap program keahlian (AKL, BDP, MPLB/OTKP, TKJ) dengan kompetensi, fasilitas, prospek kerja, dan tempat PKL.
- **Content collections** untuk berita dan acara menggunakan MDX.
- **Data-driven** — data program keahlian dari file JSON, konten dari MDX frontmatter.

---

## Struktur Project

```
redesign-smaksata-website/
├── public/
│   ├── admin/             # Decap CMS config
│   └── assets/            # Static images (copied to build)
├── src/
│   ├── assets/            # Source assets (original copies)
│   ├── components/        # Astro components
│   ├── content/
│   │   ├── programs/      # Program data (JSON)
│   │   ├── berita/        # Berita entries (MDX)
│   │   └── acara/         # Acara entries (MDX)
│   ├── css/
│   │   └── main.css       # Tailwind v4 + custom styles
│   ├── layouts/
│   │   └── Layout.astro   # Root layout (header, footer, SEO)
│   └── pages/
│       ├── index.astro    # Landing page
│       └── detail/
│           └── [id].astro # Program detail pages
├── .github/workflows/
│   └── deploy.yml         # GitHub Actions → GitHub Pages
├── astro.config.mjs       # Astro config (base, integrations)
├── src/content.config.ts  # Content collection schemas
├── package.json           # Dependencies & scripts
└── README.md
```

---

## Fitur

### 1. Hero Slider
Slider Swiper layar penuh dengan autoplay, overlay teks, dan tombol CTA.

### 2. Timeline Sejarah
Linimasa visual dari 1962 hingga sekarang, dengan layout bergantian di desktop.

### 3. Kartu Program Data-Driven
Empat program keahlian di-render dari file JSON dengan warna dan ikon masing-masing.

### 4. Halaman Detail Tiap Program
Halaman terpisah berisi kompetensi, fasilitas, prospek kerja, dan tempat PKL.

### 5. Galeri Interaktif
Grid gambar responsif dengan lightbox — navigasi keyboard (panah, ESC).

### 6. Berita & Acara
Konten dikelola via MDX frontmatter dengan format tanggal dan gambar.

### 7. Animasi Scroll
AOS (Animate on Scroll) — setiap section muncul dengan animasi fade.

### 8. Desain Responsif
Fully responsive dengan hamburger menu di mobile.

### 9. Form Kontak
Form fungsional dengan validasi client-side dan embed Google Maps.

### 10. Deployment Otomatis
Push ke `main` langsung trigger GitHub Actions → build → deploy ke GitHub Pages.

---

## Teknologi

| Kategori        | Teknologi                                |
| --------------- | ---------------------------------------- |
| **Framework**   | Astro 6 (static output)                  |
| **Styling**     | Tailwind CSS v4 + @tailwindcss/vite      |
| **Konten**      | MDX + JSON content collections           |
| **Library**     | Swiper 11, AOS 2.3                       |
| **Deploy**      | GitHub Actions → GitHub Pages            |
| **CMS**         | Decap CMS (admin panel)                  |

---

## Memulai

### Prasyarat
- Node.js ≥ 22.12
- npm

### 1. Clone & Install
```bash
git clone https://github.com/sintiasnn/redesign-smaksata-website.git
cd redesign-smaksata-website
npm install
```

### 2. Development
```bash
npm run dev
```
Akses `http://localhost:4321`.

### 3. Build
```bash
npm run build
```
Hasil build ada di `dist/`.

### 4. Preview Build
```bash
npm run preview
```

---

## Deployment

Push ke `main` otomatis mendeploy ke GitHub Pages via Actions di `.github/workflows/deploy.yml`.

Manual deploy:
```bash
npx gh-pages -d dist --dotfiles
```

**Penting:** File `.nojekyll` wajib ada di root deploy agar direktori `_astro/` tidak diabaikan oleh Jekyll.

---

## Kontributor

Project ini terbuka untuk alumni SMK Negeri 1 Tabanan yang punya pengalaman **UI/UX Design**, **Frontend**, atau **Fullstack** dan ingin berkontribusi. Silakan hubungi author melalui Instagram DM [@nptsintias](https://instagram.com/nptsintias).

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk pedoman kontribusi.

---

## Author

**Ni Putu Sintia Wati**
- GitHub: [@sintiasnn](https://github.com/sintiasnn)
- Project: [SMK Negeri 1 Tabanan Redesign](https://github.com/sintiasnn/redesign-smaksata-website)
