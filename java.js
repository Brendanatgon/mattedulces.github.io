// Función para el desplazamiento suave a las secciones
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Carrusel automático
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // Cambia la imagen cada 3 segundos
document.getElementById('inicio').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave hacia la parte superior
    });
});
