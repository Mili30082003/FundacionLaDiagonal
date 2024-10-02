document.addEventListener('DOMContentLoaded', function () {
  // Selección del carrusel
  const carouselElement = document.querySelector('#carouselExampleFade');
  
  // Configurar el carrusel con diferentes intervalos para pantallas grandes y pequeñas
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: window.innerWidth > 600 ? 2000 : false, // Si la pantalla es mayor a 600px, desliza automáticamente cada 2000ms
    ride: window.innerWidth > 600 ? 'carousel' : false // Solo se activa automáticamente en pantallas grandes
  });

  // Evento para controlar el deslizamiento automático al cambiar el tamaño de la pantalla
  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
      carousel.cycle(); // Reanuda el deslizamiento automático en pantallas grandes
    } else {
      carousel.pause(); // Pausa el deslizamiento automático en pantallas pequeñas
    }
  });

  // Añadir comportamiento para los textos del carrusel
  carouselElement.addEventListener('slid.bs.carousel', function () {
    // Quitar la clase 'active' de todos los textos
    document.querySelectorAll('.Carousel-Text').forEach(function (text) {
      text.classList.remove('active');
    });

    // Agregar la clase 'active' al texto del elemento activo
    const activeItem = carouselElement.querySelector('.carousel-item.active .Carousel-Text');
    if (activeItem) {
      activeItem.classList.add('active');
    }
  });

  // Inicializar el primer texto como activo
  const initialActive = carouselElement.querySelector('.carousel-item.active .Carousel-Text');
  if (initialActive) {
    initialActive.classList.add('active');
  }
});
