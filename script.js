// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.fade-in-scroll').forEach((el) => observer.observe(el));

// Scroll suave para el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// WhatsApp
function enviarAWhatsApp() {
  const nombre = document.getElementById("cliente-nombre").value;
  const telefono = document.getElementById("cliente-telefono").value;
  if (!nombre || !telefono) { alert("Completá nombre y teléfono"); return; }
  const mensaje = `Hola La Escondida, soy ${nombre}. Solicito info del brochure y el Open Field.`;
  window.open(`https://wa.me/59899907130?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Inicializar Swiper
const swiper = new Swiper('.gallery-swiper', {
  loop: true,
  effect: 'fade',
  autoplay: { delay: 3500 },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});