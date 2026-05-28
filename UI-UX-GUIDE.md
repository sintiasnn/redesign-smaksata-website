# Pedoman UI/UX & Frontend — SMK Negeri 1 Tabanan

## 1. Design System

### Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-500` | `#1B3A5C` | Biru Navy — header, button utama, judul |
| `primary-600` | `#162E4A` | Hover state primary |
| `primary-800` | `#0B1725` | Dropdown menu bg |
| `primary-900` | `#03080F` | Header bg transparan |
| `accent-500` | `#D4A017` | Emas — CTA button, aksen, highlight |
| `accent-400` | `#E2B233` | Hover / active state accent |
| `neutral-50` | `#fafafa` | Background section |
| `neutral-900` | `#171717` | Text utama, footer bg |

Gradasi lengkap ada di `src/css/main.css` lines 4-52.

### Font
- **Heading:** Poppins 500/600/700 (Google Fonts)
- **Body:** Inter 400/500/600 (Google Fonts)
- CSS vars: `--font-heading`, `--font-body`

### Spacing
- Section vertical: `py-16 md:py-24` (4rem / 6rem)
- Container: `max-w-80rem`, padding `1rem` (mobile) → `2rem` (desktop)
- Grid gap: `gap-8` (2rem) antar card

## 2. Component Inventory

```
src/components/
├── Navbar.astro      — Navigasi utama (desktop hover dropdown, mobile accordion)
├── Footer.astro      — 4 kolom grid (logo, Tentang, Program, Kontak)
└── PageHero.astro    — Banner halaman (gradient biru navy, judul + deskripsi)
```

**Tidak** ada komponen card, button, atau section yang reusable — semuanya masih inline di halaman. Prioritaskan refactor ini.

## 3. Halaman & Routing

| Route | File | Konten |
|-------|------|--------|
| `/` | `index.astro` | Hero slider, Profil (visi misi), Program, Berita, Galeri, Kontak |
| `/sejarah` | `sejarah.astro` | Timeline milestone |
| `/fasilitas` | `fasilitas.astro` | Grid facility cards |
| `/prestasi` | `prestasi.astro` | Achievement cards |
| `/detail/:id` | `detail/[id].astro` | Detail program keahlian |

Semua link internal WAJIB pake `{base}` prefix. `base = import.meta.env.BASE_URL.replace(/\/?$/, '/')` — sudah ada di Layout.

## 4. CSS Architecture

File: `src/css/main.css`
- Tailwind v4 (NO `tailwind.config.js` — pakai `@theme` di CSS)
- Custom classes: `.btn`, `.nav-link`, `.dropdown-menu`, `.program-card`, `.facility-card`, `.news-card`, `.form-input`, `.hero-page-banner`
- Swiper CSS di-import via `@import` di main.css
- AOS CSS di-import via `import 'aos/dist/aos.css'` di Layout.astro
- Animasi custom: `fadeInUp`, `fadeInDown`, `scaleIn`, dll.

### Aturan CSS
- JANGAN pakai `@apply` (Tailwind v4 tidak mendukung)
- Utility classes di CSS untuk pattern yang diulang >2x
- Inline style dihindari — pakai CSS class
- Warna: pakai `var(--color-primary-500)` atau Tailwind class `bg-primary-500`

## 5. Development

### Setup
```bash
nvm use 22
npm install
npm run dev        # astro dev
npm run build      # astro build
npm run typecheck  # astro check
```

### Branch
- Kerja di branch sendiri, pull request ke `main`
- Jangan commit langsung ke `main`

### Build & Deploy
- Build otomatis via GitHub Actions saat push ke `main`
- Deploy ke GitHub Pages: `https://sintiasnn.github.io/redesign-smaksata-website/`
- Base URL: `/redesign-smaksata-website/`

## 6. Hal yang Perlu Dibenahi (Prioritas)

### High Priority
1. **Buat komponen reusable:** `Card.astro`, `SectionHeading.astro`, `Button.astro`, `ProgramCard.astro`
2. **Ganti placeholder image** — foto asli sekolah (gedung, kegiatan, fasilitas)
3. **Form kontak** — ganti `action` endpoint Formspree dengan yang beneran (daftar di formspree.io)
4. **Halaman detail berita** — `/berita/:slug` — saat ini link berita dead
5. **Alt text galeri** — ganti `"Dokumentasi Sekolah"` (sama semua) dengan deskripsi per foto
6. **Mobile dropdown** — accordion menu terlalu panjang untuk 4+ item; kasih scroll atau grouping

### Medium Priority
7. **Skip to content link** — aksesibilitas dasar
8. **Dropdown keyboard navigation** — saat ini CSS hover-only, keyboard ga bisa buka submenu
9. **Active link tracking** — navbar highlight section saat scroll (sudah ada di Layout, tes di semua halaman)
10. **Loading state gambar** — skeleton loader atau aspect-ratio placeholder biar ga layout shift
11. **Section padding konsisten** — `py-16 md:py-24` dan `bg-white` / `bg-neutral-50` berselang-seling, buat pattern

### Low Priority
12. **Animasi AOS di hero slider** — ga efektif karena slide berganti tiap 5 detik
13. **Social media links** — ganti `href="#"` dengan akun real (Instagram, YouTube)
14. **Favicon** — ganti dengan logo asli sekolah
15. **Font loading** — preconnect sudah ada, tapi render blocking masih bisa dioptimasi

## 7. Content Management (Decap CMS)

- Admin panel: `/admin/`
- Login via GitHub OAuth (PKCE flow — sudah diset)
- Content types: `berita` (MDX), `programs` (JSON)
- Config: `public/admin/config.yml`
- Media uploads → `public/assets/images/`

## 8. Referensi Visual

Inspirasi dari: `smkn1denpasar.sch.id`
- Navbar compact dengan dropdown
- Footer 4 kolom dengan heading underline accent
- Palette Biru Navy + Emas
