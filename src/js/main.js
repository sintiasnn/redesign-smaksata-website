// Import libraries
import 'aos/dist/aos.css';
import AOS from 'aos';
import { programs } from '../data/programs.js';

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Initialize all functionality
  renderPrograms();
  renderGallery();
  renderEvents();
  AOS.refresh();
  initHeaderScroll();
  initMobileMenu();
  initSliders();
  initBackToTop();
});

// Render program cards from data
function renderPrograms() {
  const grid = document.getElementById('program-grid');
  if (!grid) return;

  const images = [
    'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
  ]

  const colorMap = {
    primary: 'text-primary-600 hover:text-primary-700',
    secondary: 'text-secondary-600 hover:text-secondary-700',
    accent: 'text-accent-600 hover:text-accent-700',
  }

  grid.innerHTML = programs
    .map(
      (p, i) => `
    <div class="program-card" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
      <img src="${images[i]}" alt="${p.nama}" class="w-full h-48 object-cover">
      <div class="p-6">
        <div class="program-icon">
          <span>${p.icon}</span>
        </div>
        <h3 class="text-xl font-bold mb-3">${p.nama}</h3>
        <p class="text-neutral-600 mb-4">${p.deskripsi}</p>
        <a href="/detail.html?id=${p.id}" class="${colorMap[p.warna]} font-medium">Pelajari lebih lanjut →</a>
      </div>
    </div>
  `
    )
    .join('')
}

// Gallery data
const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg',
    caption: 'Kegiatan Belajar Mengajar',
    kategori: 'Akademik',
  },
  {
    src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    caption: 'Fasilitas Laboratorium',
    kategori: 'Fasilitas',
  },
  {
    src: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg',
    caption: 'Kegiatan Olahraga',
    kategori: 'Non-Akademik',
  },
  {
    src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    caption: 'Prestasi Siswa',
    kategori: 'Prestasi',
  },
  {
    src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg',
    caption: 'Gedung Sekolah',
    kategori: 'Sekolah',
  },
  {
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    caption: 'Kerjasama Industri',
    kategori: 'Kerjasama',
  },
  {
    src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    caption: 'Praktik Komputer',
    kategori: 'Akademik',
  },
  {
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    caption: 'Kegiatan Kantor',
    kategori: 'Akademik',
  },
]

let currentIndex = 0

function renderGallery() {
  const grid = document.getElementById('gallery-grid')
  if (!grid) return

  grid.innerHTML = galleryImages
    .map(
      (img, i) => `
    <div class="relative group cursor-pointer overflow-hidden rounded-xl gallery-item" onclick="openLightbox(${i})" data-aos="zoom-in" data-aos-delay="${(i % 4) * 100}">
      <img src="${img.src}" alt="${img.caption}" class="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span class="text-white text-sm font-medium">${img.caption}</span>
      </div>
    </div>
  `
    )
    .join('')

  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const lightboxCaption = document.getElementById('lightbox-caption')
  const prevBtn = document.getElementById('prev-btn')
  const nextBtn = document.getElementById('next-btn')
  const closeBtn = document.getElementById('close-lightbox')

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.add('hidden')
      lightbox.classList.remove('flex')
      document.body.style.overflow = ''
    })
  }

  if (prevBtn && nextBtn && lightbox && lightboxImg) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
      updateLightbox(currentIndex)
    })

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      currentIndex = (currentIndex + 1) % galleryImages.length
      updateLightbox(currentIndex)
    })

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') lightbox.classList.add('hidden')
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
          updateLightbox(currentIndex)
        }
        if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % galleryImages.length
          updateLightbox(currentIndex)
        }
      }
    })
  }
}

function updateLightbox(index) {
  const img = document.getElementById('lightbox-img')
  const caption = document.getElementById('lightbox-caption')
  if (img && caption) {
    img.src = galleryImages[index].src
    caption.textContent = galleryImages[index].caption
  }
}

window.openLightbox = function (index) {
  currentIndex = index
  const lightbox = document.getElementById('lightbox')
  if (lightbox) {
    updateLightbox(index)
    lightbox.classList.remove('hidden')
    lightbox.classList.add('flex')
    document.body.style.overflow = 'hidden'
  }
}

window.closeLightbox = function (event) {
  if (event.target === event.currentTarget) {
    const lightbox = document.getElementById('lightbox')
    if (lightbox) {
      lightbox.classList.add('hidden')
      lightbox.classList.remove('flex')
      document.body.style.overflow = ''
    }
  }
}

// Events data
const events = [
  {
    date: '19 Sep 2024',
    title: 'Sosialisasi Uji Kemahiran Berbahasa Indonesia',
    desc: 'Dalam rangka pengembangan literasi SMK PK, SMK Negeri 1 Tabanan bekerja sama dengan Balai Bahasa Provinsi Bali.',
    image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg',
  },
  {
    date: '4-6 Sep 2024',
    title: 'Workshop Penguatan Literasi dan Numerasi',
    desc: 'Kegiatan workshop bersama Balai Bahasa Provinsi Bali untuk meningkatkan kompetensi literasi dan numerasi siswa.',
    image: 'https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg',
  },
  {
    date: '4 Sep 2024',
    title: 'Projek Penguatan Profil Pelajar Pancasila (P5)',
    desc: 'P5 merupakan kegiatan projek penguatan profil pelajar pancasila dalam mendukung program sekolah pusat keunggulan.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  },
  {
    date: '4 Sep 2024',
    title: 'Kolaborasi dengan BPJS Ketenagakerjaan',
    desc: 'SMK Negeri 1 Tabanan melaksanakan program kegiatan P5 berkolaborasi dengan BPJS Ketenagakerjaan.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  },
  {
    date: '12 Nov 2023',
    title: 'Finalis 10 Besar MEA 2023',
    desc: '3 Siswa SMAKSATA berhasil menjadi finalis 10 besar MEA (Marketing Entrepreneurship Award) 2023.',
    image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg',
  },
  {
    date: '28 Okt 2023',
    title: 'Juara LMSKU OJK Championship 2023',
    desc: 'SMKN 1 Tabanan meraih juara dalam LMSKU OJK Championship 2023 tingkat nasional.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
  },
]

function renderEvents() {
  const grid = document.getElementById('events-grid')
  if (!grid) return

  grid.innerHTML = events
    .map(
      (e, i) => `
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <div class="relative">
        <img src="${e.image}" alt="${e.title}" class="w-full h-44 object-cover">
        <div class="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          ${e.date}
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-bold mb-2">${e.title}</h3>
        <p class="text-neutral-600 text-sm mb-4">${e.desc}</p>
        <a href="#" class="text-primary-600 text-sm font-medium hover:text-primary-700">Selengkapnya →</a>
      </div>
    </div>
  `
    )
    .join('')
}

// Handle header background on scroll
function initHeaderScroll() {
  const header = document.getElementById('header');
  const scrollThreshold = 100;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Initial check for page refresh
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      menuToggle.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      menuToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  
  // Close mobile menu when clicking on links
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      menuToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Initialize all sliders
function initSliders() {
  // Hero slider
  const heroSlider = new Swiper('.hero-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Achievement slider
  const achievementSlider = new Swiper('.achievement-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// Back to top button functionality
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  const scrollThreshold = 300;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
  
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Active navigation link highlighting
function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let isValid = true;
      
      if (!name.value.trim()) {
        markInvalid(name, 'Nama tidak boleh kosong');
        isValid = false;
      } else {
        markValid(name);
      }
      
      if (!email.value.trim()) {
        markInvalid(email, 'Email tidak boleh kosong');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        markInvalid(email, 'Email tidak valid');
        isValid = false;
      } else {
        markValid(email);
      }
      
      if (!message.value.trim()) {
        markInvalid(message, 'Pesan tidak boleh kosong');
        isValid = false;
      } else {
        markValid(message);
      }
      
      if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';
        
        setTimeout(() => {
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim Pesan';
          alert('Terima kasih! Pesan Anda telah terkirim.');
        }, 1500);
      }
    });
  }
});

// Helper functions for form validation
function markInvalid(input, message) {
  input.classList.add('border-error-500');
  input.classList.remove('border-neutral-300');
  
  // Add error message
  let errorElement = input.parentElement.querySelector('.error-message');
  
  if (!errorElement) {
    errorElement = document.createElement('p');
    errorElement.className = 'error-message text-sm text-error-500 mt-1';
    input.parentElement.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
}

function markValid(input) {
  input.classList.remove('border-error-500');
  input.classList.add('border-neutral-300');
  
  const errorElement = input.parentElement.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Call active nav link function
highlightActiveNavLink();