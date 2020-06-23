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
    $('.top-menu').addClass('active');
  } else {
    $('.top-menu').removeClass('active');
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
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_icon = document.querySelector('.burger');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});