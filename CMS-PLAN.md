# CMS Plan — SMK Negeri 1 Tabanan

## Keputusan

**Stay di Decap CMS** + pindah ke **GitHub Organization** supaya editor bisa login pake akun masing-masing.

## Arsitektur

```
GitHub Org (smkn1tabanan)
  └── Repo: smkn1tabanan/website (baru)
        └── Decap CMS di /admin/
              ├── Login via GitHub OAuth PKCE
              ├── Editor login pake akun GitHub pribadi
              └── Langsung edit konten, ga pernah buka GitHub
```

## Kenapa Org, Bukan Share Password

| | Share Password | Org |
|---|---|---|
| Keamanan | Password bocor kalau 1 orang resign | Tinggal revoke akses |
| Tracking commit | Semua atas nama `smkn1tabanan` | Masing-masing punya jejak sendiri |
| CMS Login | Semua pake 1 akun | Masing-masing pake akun sendiri |
| Setup | 1 akun, no invitation | Invite, 1 klik accept |

## Cara Kerja buat Editor (Guru/Admin)

1. **Daftar GitHub** — buka github.com/signup, pake email pribadi (misal `guru@gmail.com`)
   - Nama bebas, foto bebas — ga perlu isi apa-apa lagi
   - Butuh waktu 2 menit
2. **Accept invite** — cek email, klik "View invitation" → "Accept"
3. **Masuk ke CMS** — buka `smkn1tabanan.github.io/website/admin/` → "Login with GitHub"
4. **Selesai** — tinggal nulis berita, upload gambar, klik "Publish"

**Sekali setup, ga pernah buka GitHub lagi** — yang dibuka cuma halaman admin doang.

## Yang Harus Dilakukan

### 1. Setup di GitHub
- [ ] Bikin org `smkn1tabanan` (atau nama lain)
- [ ] Bikin repo `website` (atau `smkn1tabanan.github.io`) di dalam org
- [ ] Saya transfer/bantu setup kode ke repo baru

### 2. Setup OAuth & Domain
- [ ] Bikin GitHub OAuth App baru — callback URL → `https://smkn1tabanan.github.io/website/`
- [ ] Setup Cloudflare Pages (custom domain nanti)
- [ ] Update `config.yml` — `repo`, `client_id`

### 3. Invite Editor
- [ ] Bikin daftar email editor (kepala TU, waka humas, dll)
- [ ] Kirim invite ke org
- [ ] Kasih tau: "Buka link ini, klik Login with GitHub"

### 4. Konten Awal
- [ ] Ganti placeholder image dengan foto asli sekolah
- [ ] Isi berita (minimal 3-5 artikel)
- [ ] Update social media links (Instagram, YouTube)
- [ ] Setup form kontak (formspree.io — gratis)

## Catatan
- **Biaya: Rp0** — GitHub gratis, Decap CMS gratis, Cloudflare Pages gratis
- **Hosting:** GitHub Pages dulu, nanti pindah ke Cloudflare Pages
- **Kalau editor ga mau daftar GitHub:** masih ada opsi Sanity (login email) — tapi migrasi datanya butuh effort
