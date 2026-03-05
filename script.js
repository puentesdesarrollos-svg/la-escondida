// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in-scroll').forEach((el) => observer.observe(el));

// Menú Hamburguesa
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Swiper Galería con Miniaturas
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: { 768: { slidesPerView: 6 } }
});

const galleryMain = new Swiper('.gallery-main', {
  spaceBetween: 10,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  autoplay: { delay: 3500, disableOnInteraction: false },
  thumbs: { swiper: galleryThumbs }
});

// WhatsApp
function enviarAWhatsApp() {
  const nombre = document.getElementById('cliente-nombre').value;
  const email = document.getElementById('cliente-email').value;
  if (!nombre || !email) { alert('Completá nombre y email'); return; }

  const mensaje = `Hola! Soy ${nombre}. Me interesa información de La Escondida y el Open Field del 21/03. Email: ${email}`;
  const url = `https://wa.me/59899907130?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
