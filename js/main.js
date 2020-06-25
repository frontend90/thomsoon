/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/****************      scroll top     ***************/
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll > 20) {
    $('.top-header').addClass('active');
    $('.social').addClass('active');
  } else {
    $('.top-header').removeClass('active');
    $('.social').removeClass('active');
  };
});

/*************   jkit-parallax   **************/
$(document).ready(function () {
  $('body').jKit();
});

/**************    typewrite     ****************/
var typed2 = new Typed('.typewrite', {
  strings: ['portfolio', 'show case', 'projects'],
  typeSpeed: 100,
  backSpeed: 0,
  backDelay: 500,
  fadeOut: false,
  loop: false,
  loopCount: false
});

/************    burger      *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let user_social = document.querySelector('.social');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  user_social.classList.toggle('show');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_icon = document.querySelector('.burger');
    let user_social = document.querySelector('.social');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    user_social.classList.remove('show');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
  $('.social').removeClass('show');
});

/*************     изменение HTML      ******************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.main-menu'); /* куда закинуть блок */
  var headerSocial = $('.social'); /* блок, который закинуть */
  if (w < 800) {
    /* ширина */
    if (!headerSocial.hasClass('done')) {
      headerSocial.addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerSocial.hasClass('done')) {
      headerSocial.removeClass('done').prependTo($('.nav')); /* вернуть блок на прежнее место */
    }
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*****************    preloader    ******************/
$(window).on('load', function () {
  $('.preloader').delay(2000).fadeOut('slow');
});