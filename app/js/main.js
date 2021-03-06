
$('select').styler();

$('.mobile-nav__btn').click(function(){
  $('html').animate({scrollTop: 0}, "slow");
});

$(window).scroll(function(e) {
  if($(window).scrollTop()>=200) {
    $('.mobile-nav').fadeIn(200);
  } else {
    $('.mobile-nav').fadeOut(200);
  }
});

$('.main-slider__inner').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  nextArrow: '<div type="button" class="slick-btn slick-next"></div>',
  prevArrow: '<div type="button" class="slick-btn slick-prev"></div>',
  infinite: false,
});

$('.middle-slider-inner__wrapper').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  nextArrow: '<div type="button" class="slick-btn slick-next"></div>',
  prevArrow: '<div type="button" class="slick-btn slick-prev"></div>',
  infinite: false,
});

$('.popular-toys-inner__slider.home').slick({
  dots: true,
  speed: 300,
  arrows: true,
  nextArrow: '<div type="button" class="slick-btn popular slick-next"></div>',
  prevArrow: '<div type="button" class="slick-btn popular slick-prev"></div>',
  infinite: false,
  dotsClass: 'slick-dots-popular',
  slidesToShow: 4,
  slidesToScroll: 4,
});

$('.toy-intro__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  // asNavFor: '.category-dslider__img'
});

$('.toy-intro__small').slick({
  asNavFor: '.toy-intro__big',
  arrows: false,
  focusOnSelect: true,
  variableWidth: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
});

// ===== Мобильное меню ===== 

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

// ===== Аккордеон футер =====

let foot = document.getElementsByClassName("footer__wrap");
let k;

for (k=0; k<foot.length; k++) {
  foot[k].addEventListener ("click", function () {
    this.classList.toggle("active");

    let panel1 = this.nextElementSibling;

    if (panel1.style.maxHeight) {
      panel1.style.maxHeight = null;
    } else {
      panel1.style.maxHeight = panel1.scrollHeight + "px";
    }
  });
}

// ===== Действия в моб. меню =====

$('.catalog__btn').on('click', function() {
  $('.header-wrapper__inner').toggleClass('show');
  $('.header-wrapper__catalog').toggleClass('show');
});

// ===== Аккордеон =====


let acc = document.getElementsByClassName("select__btn");
let i;

for (i=0; i<acc.length; i++) {
  acc[i].addEventListener ("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



// ===== Двойной range =====

let nonLinearSlider = document.getElementById('slider-summ_attachment');
let padding = [0, 99999];
let temp = [];
let val;
let separator = ' ';
let inputPrettify = $('.summ_attachment-box input');
let stepSlider = 1;

noUiSlider.create(nonLinearSlider, {
  connect: true,
  behaviour: 'tap',
  start: [1688, 99999],
  step: stepSlider,
  range: {
    'min': [padding[0]],
    '20%': [1000, 1],
    '40%': [5000, 1000],
    '60%': [10000, 5000],
    '80%': [50000, 10000],
    'max': [padding[1]]
  }
});

let nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];

nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    temp[handle] = parseInt( values[handle] );
    val = temp[handle].toString();
  	val = val.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    nodes[handle].value = val;

});

// ===== Аккордеон 2 =====

let acc2 = document.getElementsByClassName("mob-select__btn");
let j;

for (j=0; j<acc2.length; j++) {
  acc2[j].addEventListener ("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "100%";
    }
  });
}








