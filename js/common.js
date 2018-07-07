$(document).ready(function () {


    $(window).on('scroll', function () {
        var scroll = $('.pointer').offset().top;
        var clientHeight = document.documentElement.clientHeight;
        if(scroll < clientHeight)
            $('.pointer').css('opacity', 0);
        else
            $('.pointer').css('opacity', scroll / (clientHeight * 3));

    });

    $('.pointer').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });

    $('.top_mnu li a').on('click', function (e) {
        e.preventDefault();

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 500)
    });

    $(".testimonials").slick({
        adaptiveHeight: true,
        arrows: true,
        centerMode: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        touchThreshold: 2,
        fade: true
    });

    // language=JQuery-CSS
    $('.work').on('click', '.gallery_item img', function () {
        if ($(this).css('opacity') == 0) {
            $(this).animate({
                opacity: 1
            }, 500);
            $(this).prev().animate({
                opacity: 0
            }, 500);
        }
        if ($(this).css('opacity') == 1) {
            $(this).animate({
                opacity: 0
            }, 500);
            $(this).prev().animate({
                opacity: 1
            }, 500);
        }
    });

    $('.faq').on('click', 'h4', function(){
        if($(this).next().css('display') == 'none'){
            $('.faq p').slideUp(500);
            $(this).next().slideToggle(500);
        }
    });

    document.body.onclick = function (event) {
        var t = event.target || event.srcElement;
        console.log(t);
    }


    /*$('.gi_1').on('click', function () {
         $('.c_1').toggleClass('flipped');
    });
    $('.gi_2').on('click', function () {
         $('.c_2').toggleClass('flipped');
    });
    $('.gi_3').on('click', function () {
         $('.c_3').toggleClass('flipped');
    });
    $('.gi_4').on('click', function () {
         $('.c_4').toggleClass('flipped');
    });
    $('.gi_5').on('click', function () {
         $('.c_5').toggleClass('flipped');
    });
    $('.gi_6').on('click', function () {
         $('.c_6').toggleClass('flipped');
    });
    $('.gi_7').on('click', function () {
         $('.c_7').toggleClass('flipped');
    });
    $('.gi_8').on('click', function () {
         $('.c_8').toggleClass('flipped');
    });*/


});