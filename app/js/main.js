$(function(){
  $('.main-slider__inner').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });

  document.querySelector('.header-inner-mobile__burg').onclick = function() {
    this.classList.toggle('active');
  }
});