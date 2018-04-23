$(document).ready(function() {
  // slick carousel
  $('.slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    prevArrow: $('.btn_prev'),
    nextArrow: $('.btn_next')
  });
});