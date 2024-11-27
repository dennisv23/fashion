// Variable para rastrear la diapositiva actual
let currentSlide = 0;
// Selecciona el contenedor de las diapositivas
const slides = document.querySelector('.slides');

// Función para cambiar la diapositiva
function changeSlide(index) {
    // Actualiza la diapositiva actual con el índice proporcionado
    currentSlide = index;
    // Calcula el ancho de cada diapositiva
    const slideWidth = document.querySelector('.slider').clientWidth;
    // Cambia la posición de las diapositivas
    slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Añade un evento de clic al botón de información para mostrar/ocultar el pop-up
document.getElementById('infoButton').addEventListener('click', () => {
    const infoPopup = document.getElementById('infoPopup');
    // Alterna la clase 'hidden' para mostrar u ocultar el pop-up
    if (infoPopup.classList.contains('hidden')) {
        infoPopup.classList.remove('hidden');
    } else {
        infoPopup.classList.add('hidden');
    }
});

// Función para añadir un artículo al carrito
function addToCart(item) {
    // Selecciona el contenedor del carrito
    const cartItems = document.getElementById('cartItems');
    // Crea un nuevo elemento de lista
    const li = document.createElement('li');
    // Añade el nombre del artículo al elemento de lista
    li.textContent = item;
    // Añade el elemento de lista al carrito
    cartItems.appendChild(li);
}

// Función para mostrar información al hacer clic en los iconos de redes sociales
function showInfo(info) {
    alert(info); // Cambia esto para personalizar cómo se muestra la información
}

// Añadir eventos a los iconos de redes sociales
document.querySelector('.whatsapp').addEventListener('click', () => showInfo('Información de WhatsApp'));
document.querySelector('.facebook').addEventListener('click', () => showInfo('Información de Facebook'));
document.querySelector('.instagram').addEventListener('click', () => showInfo('Información de Instagram'));
document.querySelector('.tiktok').addEventListener('click', () => showInfo('Información de TikTok'));
