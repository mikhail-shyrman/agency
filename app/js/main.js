$(document).ready(function() {
    // slick carousel
    $('.slider').slick({
        dots: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        verticalSwiping: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next')
    });
});

$(function(){
    $('.btn_menu').click(function(){
        $('.menu ul').slideToggle();
    });
});

$("#menu, #btn_top").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

$(function(){
    $("#btn_top").hide().removeAttr("href");
    if ($(window).scrollTop()>="350") $("#btn_top").fadeIn("slow")
    $(window).scroll(function(){
        if ($(window).scrollTop()<="350") $("#btn_top").fadeOut("slow")
        else $("#btn_top").fadeIn("slow")
    });
});