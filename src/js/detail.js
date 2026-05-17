import { programs } from '../data/programs.js'

const heroImages = {
  akl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
  bdp: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
  otkp: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
  tkj: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const program = programs.find((p) => p.id === id)

  if (!program) {
    window.location.href = '/#program'
    return
  }

  renderDetail(program)
  renderFooterPrograms()
  initHeaderScroll()
  initMobileMenu()
  initBackToTop()
})

function renderDetail(p) {
  document.title = `${p.nama} — SMK Negeri 1 Tabanan`

  const heroBg = document.getElementById('detail-hero-bg')
  if (heroBg) heroBg.style.backgroundImage = `url('${heroImages[p.id] || heroImages.akl}')`

  setText('detail-badge', `${p.kode} — ${p.singkat}`)
  setText('detail-title', p.nama)
  setText('detail-bidang', `Bidang Keahlian: ${p.bidang}`)
  setText('detail-daya-tampung', `Daya Tampung: ${p.dayaTampung} siswa`)
  setText('detail-deskripsi', p.deskripsi)

  renderList('pelajaran-list', p.pelajaran, (item) => `
    <div class="flex items-start bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
      <span class="text-primary-600 mr-3 mt-0.5">✓</span>
      <span class="text-neutral-700">${item}</span>
    </div>
  `)

  if (p.fasilitas && p.fasilitas.length) {
    renderList('fasilitas-list', p.fasilitas, (item) => `
      <div class="flex items-start bg-neutral-50 p-4 rounded-xl border border-neutral-200">
        <span class="text-secondary-500 mr-3 mt-0.5">✦</span>
        <span class="text-neutral-700">${item}</span>
      </div>
    `)
  } else {
    const el = document.getElementById('detail-fasilitas')
    if (el) el.style.display = 'none'
  }

  renderList('prospek-list', p.prospek, (item) => `
    <div class="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 text-center hover:shadow-md transition-shadow">
      <div class="text-accent-500 text-2xl mb-2">💼</div>
      <span class="text-neutral-800 font-medium">${item}</span>
    </div>
  `)

  renderList('pkl-list', p.pkl, (item) => `
    <span class="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">${item}</span>
  `)
}

function setText(id, text) {
  const el = document.getElementById(id)
  if (el) el.textContent = text
}

function renderList(id, items, fn) {
  const el = document.getElementById(id)
  if (el) el.innerHTML = items.map(fn).join('')
}

function renderFooterPrograms() {
  const el = document.getElementById('footer-program-links')
  if (!el) return
  el.innerHTML = programs
    .map((p) => `<li><a href="/detail.html?id=${p.id}">${p.nama}</a></li>`)
    .join('')
}

function initHeaderScroll() {
  const header = document.getElementById('header')
  const scrollThreshold = 100
  const check = () => {
    header.classList.toggle('scrolled', window.scrollY > scrollThreshold)
  }
  window.addEventListener('scroll', check)
  check()
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle')
  const menuClose = document.getElementById('menu-close')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileLinks = document.querySelectorAll('.mobile-nav-link')

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.remove('translate-x-full')
    menuToggle.classList.add('open')
    document.body.style.overflow = 'hidden'
  })

  menuClose?.addEventListener('click', () => {
    mobileMenu?.classList.add('translate-x-full')
    menuToggle?.classList.remove('open')
    document.body.style.overflow = ''
  })

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('translate-x-full')
      menuToggle?.classList.remove('open')
      document.body.style.overflow = ''
    })
  })
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top')
  if (!btn) return

  window.addEventListener('scroll', () => {
    btn.classList.toggle('hidden', window.scrollY <= 300)
  })

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
