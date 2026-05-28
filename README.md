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

- **Landing page** 6 section: Hero slider, Profil, Program, Berita, Galeri, Kontak
- **Halaman terpisah:** Sejarah (timeline), Fasilitas, Prestasi
- **Halaman detail** setiap program keahlian (AKL, BDP, MPLB/OTKP, TKJ)
- **Data-driven** — program dari JSON, berita dari MDX content collections
- **Decap CMS** — manajemen konten via panel admin
- **TypeScript strict** — type-safe di semua komponen

---

## Struktur Project

```
redesign-smaksata-website/
├── public/
│   ├── admin/             # Decap CMS
│   └── assets/            # Static images
├── src/
│   ├── components/        # Navbar, Footer, PageHero
│   ├── content/
│   │   ├── programs/      # JSON
│   │   └── berita/        # MDX
│   ├── css/main.css       # Tailwind v4 + custom styles
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sejarah.astro
│   │   ├── fasilitas.astro
│   │   ├── prestasi.astro
│   │   └── detail/[id].astro
│   └── types.d.ts
├── .github/workflows/deploy.yml
├── CMS-PLAN.md            # Rencana CMS + GitHub Org
├── CONTRIBUTING.md        # Pedoman kontribusi
├── DEPLOYMENT.md          # Rencana deployment
├── UI-UX-GUIDE.md         # Pedoman desain & prioritas
├── astro.config.mjs
├── src/content.config.ts
├── package.json
└── tsconfig.json
```

---

## Fitur

- **Hero slider** — Swiper fullscreen dengan autoplay, overlay, CTA
- **Navbar dropdown** — hover di desktop, accordion di mobile
- **Timeline Sejarah** — linimasa visual dari 1962 di `/sejarah`
- **Program data-driven** — JSON + halaman detail tiap jurusan
- **Galeri + Lightbox** — keyboard navigasi (panah, ESC)
- **Berita via CMS** — MDX content collection + Decap CMS
- **Animasi scroll** — AOS fade-in tiap section
- **Responsif** — mobile-first, hamburger menu
- **TypeScript strict** — 0 error typecheck
- **Palette Biru Navy + Emas** — identitas SMK Negeri
- **Build otomatis** — push → GitHub Actions → deploy

---

## Dokumen Terkait

| File | Isi |
|------|-----|
| [CONTRIBUTING.md](CONTRIBUTING.md) | Pedoman kontribusi untuk developer |
| [UI-UX-GUIDE.md](UI-UX-GUIDE.md) | Design system, component inventory, prioritas kerja |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Rencana deployment 5 tahap (target: Cloudflare Pages) |
| [CMS-PLAN.md](CMS-PLAN.md) | Rencana CMS + migrasi ke GitHub Organization |

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

### 4. Typecheck
```bash
npm run typecheck
```

### 5. Preview Build
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
