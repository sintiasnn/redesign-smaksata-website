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

## Stack

| Teknologi | Keterangan |
|-----------|------------|
| **Astro 6** | Static Site Generator |
| **Tailwind CSS v4** | Utility-first CSS (via `@tailwindcss/vite`) |
| **TypeScript** | Strict mode |
| **Decap CMS** | Content management (di `/admin/`) |
| **GitHub Pages** | Deployment |
| **Node.js** | ≥22.12.0 (via nvm) |

---

## Aturan Coding

### Umum
- **Astro components** (`.astro`) untuk semua UI — jangan buat file `.html` vanilla.
- **TypeScript** wajib — hindari `any`, tambah type annotation di semua callback `.map()`, `.filter()`, `.sort()`.
- Gaya kode mengikuti **Prettier** (jika terpasang) atau konsisten dengan kode yang sudah ada.
- String pake **tanda petik tunggal** (`'`), bukan petik ganda.
- Jalankan `npm run typecheck` sebelum commit.

### Astro Components
- File `.astro` = HTML template di dalamnya, logic TypeScript di frontmatter (`---`).
- Props didefinisikan via `export interface Props { ... }`.
- Import komponen: `import Navbar from '../components/Navbar.astro'`.
- Script client-side: pake `<script>` di bagian bawah file (Astro otomatis bundle).

### CSS / Tailwind v4
- **Tidak ada** `tailwind.config.js` — konfigurasi via `@theme` di `src/css/main.css`.
- **Tidak ada** `@apply` — Tailwind v4 tidak mendukungnya.
- Class Tailwind diutamakan. CSS kustom hanya untuk pattern yang diulang >2x.
- Semua CSS kustom di **satu file**: `src/css/main.css` (293 lines).
- Warna: pakai variable `var(--color-primary-500)` atau Tailwind class `bg-primary-500`.

### TypeScript
- Nama fungsi: **camelCase**.
- Nama konstanta array/objek: **camelCase**.
- Gunakan `const` dan `let`, hindari `var`.
- Type collections: pake `CollectionEntry<'nama-koleksi'>['data']` dari `astro:content`.

### Routing
- Semua halaman di `src/pages/`.
- Static params via `getStaticPaths()`.
- **Semua internal link WAJIB pake `{base}` prefix** — jangan hardcode `/`.
  ```astro
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  ```
  ```astro
  <a href={base + 'sejarah'}>Sejarah</a>  <!-- benar -->
  <a href="/sejarah">Sejarah</a>          <!-- SALAH - akan broken di production -->
  ```

### Content
- Konten via **Astro Content Collections**:
  - `src/content/programs/*.json` — program keahlian
  - `src/content/berita/*.mdx` — berita
- Schema: `src/content.config.ts`.
- Akses data: `await getCollection('programs')`.
- **Jangan hardcode data** di halaman — selalu pake content collection.

---

## Gambar

- Format: **WebP** (prioritas) atau **JPEG quality 80%**.
- Ukuran maks: lihat [image-guide.md](image-guide.md) untuk spesifikasi lengkap.
- Letakkan di folder **`public/assets/images/`**.
- Path di kode: `{base}assets/images/nama-file.jpg`.
- Jangan commit foto screenshot pribadi atau foto tidak resmi.

---

## Alur Kerja

```bash
# Pake Node versi yang benar
nvm use 22

# Clone
git clone https://github.com/sintiasnn/redesign-smaksata-website.git
cd redesign-smaksata-website

# Install
npm install

# Dev
npm run dev

# Typecheck (WAJIB sebelum commit)
npm run typecheck

# Build
npm run build
```

---

## Referensi

- [UI/UX Guide](UI-UX-GUIDE.md) — pedoman desain, prioritas kerja, component inventory
- [Decap CMS Docs](https://decapcms.org/docs/)

---

## Kontak

Ada pertanyaan? DM Instagram [@nptsintias](https://instagram.com/nptsintias).
