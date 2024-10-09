document.addEventListener('DOMContentLoaded', function () {
  
  const carouselElement = document.querySelector('#carouselExampleFade');
  
  
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: window.innerWidth > 600 ? 2000 : false, 
    ride: window.innerWidth > 600 ? 'carousel' : false 
  });

 
  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
      carousel.cycle(); 
    } else {
      carousel.pause(); 
    }
  });


  carouselElement.addEventListener('slid.bs.carousel', function () {

    document.querySelectorAll('.Carousel-Text').forEach(function (text) {
      text.classList.remove('active');
    });

   
    const activeItem = carouselElement.querySelector('.carousel-item.active .Carousel-Text');
    if (activeItem) {
      activeItem.classList.add('active');
    }
  });


  const initialActive = carouselElement.querySelector('.carousel-item.active .Carousel-Text');
  if (initialActive) {
    initialActive.classList.add('active');
  }
});



