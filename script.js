// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.fade-in-scroll');
hiddenElements.forEach((el) => observer.observe(el));


// Funcionalidad Menú Hamburguesa
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});


// Inicializar Galería Swiper con Miniaturas
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: { slidesPerView: 6 }
  }
});

const galleryMain = new Swiper('.gallery-main', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


// Función para enviar a WhatsApp con texto del 21 de Marzo
function enviarAWhatsApp() {
  const nombre = document.getElementById('cliente-nombre').value;
  const email = document.getElementById('cliente-email').value;
  
  if (nombre === '' || email === '') {
    alert('Por favor, completá tu nombre y tu email para continuar.');
    return;
  }

  const telefonoDestino = '59899907130';
  const mensaje = `Hola! Soy ${nombre}. Me interesa recibir más información sobre La Escondida y reservar mi lugar para el Open Field del 21 de marzo. Mi email es: ${email}.`;
  
  const urlDesktop = `https://web.whatsapp.com/send?phone=${telefonoDestino}&text=${encodeURIComponent(mensaje)}`;
  const urlMobile = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(mensaje)}`;
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    window.open(urlMobile, '_blank');
  } else {
    window.open(urlDesktop, '_blank');
  }
}
