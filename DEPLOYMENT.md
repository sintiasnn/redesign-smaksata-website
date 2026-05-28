# Rencana Deployment

## Current Setup

| Aspek | Detail |
|-------|--------|
| Hosting | GitHub Pages (`sintiasnn.github.io`) |
| URL | `https://sintiasnn.github.io/redesign-smaksata-website/` |
| Base path | `/redesign-smaksata-website/` |
| Builder | Astro 6 → static HTML (`dist/`) |
| CI/CD | GitHub Actions (`peaceiris/actions-gh-pages`) |
| CMS | Decap CMS dengan PKCE OAuth |
| Domain | Belum ada custom domain |

---

## Tahap 1: Stabilisasi + UI/UX (Sekarang)

### Technical
- [x] Build otomatis via Actions saat push ke `main`
- [ ] Ganti form `action` URL (daftar di formspree.io atau setup endpoint sendiri)
- [ ] Setup GitHub OAuth App untuk Decap CMS — **done** (client_id: `Ov23liLNWmREkAN2pg0g`)
- [ ] Jadikan Decap CMS release (bukan draft)
- [ ] Verifikasi semua internal link berfungsi di production
- [ ] `npm run typecheck` lulus — **done** (0 error)

### UI/UX
- [ ] Buat komponen reusable: `Card.astro`, `SectionHeading.astro`, `ProgramCard.astro`
- [ ] Ganti semua placeholder image dengan foto asli sekolah (gedung, kegiatan, fasilitas)
- [ ] Alt text galeri — ganti yang seragam `"Dokumentasi Sekolah"` jadi deskripsi per foto
- [ ] Mobile dropdown — tambah scroll atau grouping biar ga kepanjangan
- [ ] Dropdown keyboard navigation — bukan cuma CSS hover
- [ ] Skip to content link untuk aksesibilitas
- [ ] Loading state gambar (aspect-ratio placeholder biar no layout shift)
- [ ] Section padding konsisten — buat pattern dari `py-16 md:py-24` + bg selang-seling
- [ ] Halaman detail berita (`/berita/:slug`) — saat ini link berita masih dead
- [ ] Social media links — ganti `href="#"` dengan akun real (Instagram, YouTube)
- [ ] Favicon — ganti dengan logo asli sekolah
- [ ] Animasi AOS di hero slider — efektif ga? slide berganti tiap 5 detik

---

## Tahap 2: Production Ready

### 2a. Custom Domain (Opsional 1 — Recommended)

Beli domain (misal `smkn1tabanan.sch.id` atau `smkn1-tabanan.sch.id`).

**Konfigurasi:**
1. Di repo Settings → Pages → masukkan custom domain
2. Tambah CNAME record di DNS provider pointing ke `sintiasnn.github.io`
3. Update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://smkn1-tabanan.sch.id',
  base: '/',  // root domain — no subpath needed
})
```
4. Hapus semua prefix `base` dari internal links (karena base jadi `/`)
5. Update `public/admin/config.yml` — `repo` tetap sama
6. Update GitHub OAuth callback URL ke domain baru

**Catatan:** Kalau pake `.sch.id` — pastikan registrasi domain sudah diurus oleh pihak sekolah (biasanya via Pandi atau penyedia `.sch.id`).

### 2b. Pindah ke Netlify (Opsional 2)

Netlify lebih mudah untuk Decap CMS karena OAuth built-in.

**Langkah:**
1. Buat akun Netlify, connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist/`
4. Netlify otomatis handle HTTPS + custom domain
5. Decap CMS bisa pake Netlify Identity + Git Gateway (tanpa setup OAuth App manual)
6. Update `config.yml`:
```yaml
backend:
  name: git-gateway
  repo: sintiasnn/redesign-smaksata-website
  branch: main
```
7. Update `public/admin/index.html` — hapus `CMS_CONFIG` (Netlify handle auth)
8. Netlify form handler built-in — form kontak tinggal tambah `netlify` attribute

### 2c. Pindah ke Vercel (Opsional 3)

1. Import repo ke Vercel
2. Framework preset: Astro
3. Vercel otomatis handle HTTPS + CDN
4. Untuk Decap CMS tetap perlu OAuth server atau GitHub PKCE (seperti sekarang)
5. Form kontak pake Vercel Edge Functions atau formspree

---

## Tahap 3: Optimasi

- [ ] **Image optimization** — implement Astro `<Image />` component untuk lazy loading + responsive images
- [ ] **Font optimization** — Google Fonts di-load via CSS `@font-face` dengan `font-display: swap`
- [ ] **CSS minification** — sudah otomatis oleh Astro/Vite
- [ ] **JS bundle splitting** — Astro otomatis code-split per halaman
- [ ] **Preload critical assets** — hero image, logo
- [ ] **SEO audit** — meta tags, Open Graph, structured data (JSON-LD)
- [ ] **Accessibility audit** — Lighthouse target score ≥90

---

## Tahap 4: CMS & Konten

- [ ] Training admin sekolah cara pakai Decap CMS
- [ ] Template berita — pastikan format MDX konsisten
- [ ] Backup content collections secara berkala
- [ ] Halaman detail berita (`/berita/:slug`) — perlu routing + template

---

## Tahap 5: Monitoring & Maintenance

| Item | Tools |
|------|-------|
| Uptime monitoring | UptimeRobot / BetterStack (free tier) |
| Error tracking | — (belum ada, bisa pakai Sentry nanti) |
| Analytics | Google Analytics / Plausible / Umami |
| Form submissions | Formspree dashboard atau Netlify Forms |
| CMS usage log | Decap CMS sudah ada commit history di GitHub |

---

## Rollback Plan

Jika terjadi masalah setelah deploy:
1. GitHub Pages: trigger ulang workflow dari commit sebelumnya
2. Netlify: rollback ke deploy sebelumnya dari dashboard
3. Vercel: instant rollback dari dashboard

---

## Checklist Final Production

- [ ] Custom domain aktif + HTTPS
- [ ] Semua gambar real (no placeholder)
- [ ] Form kontak mengirim ke email sekolah
- [ ] Decap CMS bisa login + create/edit konten
- [ ] Social media links mengarah ke akun real
- [ ] Favicon = logo asli sekolah
- [ ] Google Maps pin titik sekolah benar
- [ ] Nomor telepon & email kontak valid
- [ ] `npm run typecheck` lulus
- [ ] Lighthouse score ≥80 semua kategori
- [ ] Test di Chrome, Firefox, Safari, mobile
