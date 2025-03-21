document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavButtons = document.querySelectorAll('.mobile-menu .nav-button');
    const navButtons = document.querySelectorAll('.nav-buttons .nav-button');
    const sections = {
        'btnInicio': 'ventanaInicio',
        'btnNosotros': 'ventanaNosotros',
        'btnHabilidades': 'ventanaHabilidades',
        'btnProyectos': 'ventanaProyectos',
        'btnFooter': 'ventanaFooter',
        'btnInicioMobile': 'ventanaInicio',
        'btnNosotrosMobile': 'ventanaNosotros',
        'btnHabilidadesMobile': 'ventanaHabilidades',
        'btnProyectosMobile': 'ventanaProyectos',
        'btnFooterMobile': 'ventanaFooter'
    };

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
        mobileMenu.classList.remove('active');
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            scrollToSection(sections[button.id]);
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    mobileNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            scrollToSection(sections[button.id]);
        });
    });
});

// BOTONES PARA INFO

const subtitles = document.querySelectorAll('.phantom-subtitle');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot) => {
  dot.addEventListener('click', function() {
    const index = parseInt(this.getAttribute('data-index')); // Obtiene el índice del punto clickeado
    const currentActiveDot = document.querySelector('.dot.active-dot'); // Obtiene el punto activo actual
    const currentActiveSubtitle = document.querySelector('.phantom-subtitle[style*="display: block"]'); // Obtiene el subtitulo activo actual

    if (currentActiveDot) {
      currentActiveDot.classList.remove('active-dot'); // Remueve la clase active del punto actual
    }
    if (currentActiveSubtitle) {
      currentActiveSubtitle.style.display = 'none'; // Oculta el subtítulo actual
    }

    dots[index].classList.add('active-dot'); // Añade la clase active al nuevo punto
    subtitles[index].style.display = 'block'; // Muestra el nuevo subtítulo
  });
});

// CARRUSEL

const carouselImages = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

function nextImage() {
  // Oculta la imagen actual
  carouselImages[currentIndex].classList.remove('active-carousel-img');

  // Calcula el siguiente índice
  currentIndex = (currentIndex + 1) % carouselImages.length;

  // Muestra la siguiente imagen
  carouselImages[currentIndex].classList.add('active-carousel-img');
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
setInterval(nextImage, 5000);


// PARA EL TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});