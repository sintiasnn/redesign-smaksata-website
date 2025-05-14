// Import libraries
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Initialize all functionality
  initHeaderScroll();
  initMobileMenu();
  initSliders();
  initBackToTop();
});

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