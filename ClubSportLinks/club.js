document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active'); 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active'); 
    }

    slides[slideIndex - 1].classList.add('active'); 
    dots[slideIndex - 1].classList.add('active'); 
  }

  
  document.querySelector('.prev-button').addEventListener('click', () => {
    plusSlides(-1);
  });

  document.querySelector('.next-button').addEventListener('click', () => {
    plusSlides(1);
  });

});