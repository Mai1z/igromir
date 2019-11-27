
$('.main-slider__inner').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
});

function toggleMenu() {
  $('.header-wrapper__btn').toggleClass('closewrap');
  $('.header-mobmenu').toggleClass('activewrap');
  $('.header-inner-mobile__burg').toggleClass('active');
  $('body').toggleClass('fixed');
}

$('.header-inner-mobile__burg, .header-wrapper__btn, .header-mobmenu').on('click', toggleMenu);
$('.header-wrapper').on('click', function(e) {
  e.stopPropagation();
  return 0;
});

$('.catalog__btn').on('click', function() {
  $('.header-wrapper__inner').toggleClass('show');
  $('.header-wrapper__catalog').toggleClass('show');
});

$('.footer-inner__links').on('click', function() {
  $(this).toggleClass('show');
});
