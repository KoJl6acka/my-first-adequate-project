$(document).ready(function () {


     function scrollFunction() {
        var scroll = $('.pointer').offset().top;
        var clientHeight = document.documentElement.clientHeight;
        if(scroll < clientHeight)
            $('.pointer').css('opacity', 0);
        else
            $('.pointer').css('opacity', scroll / (clientHeight * 3));
    }

    scrollFunction();

    $(window).on('scroll', scrollFunction);

    $('.pointer').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000, $.bez([.88,.01,0,.69]));
    });



    $('#navbar-main li a').on('click', function (e) {
        e.preventDefault();

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 1000, $.bez([.88,.01,0,.69]));
    });

    $(".testimonials").slick({
        //adaptiveHeight: true,
        arrows: true,
        centerMode: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        touchThreshold: 2,
        fade: true
    });

    /*$('.work').on('click', '.gallery_item img', function () {
        if ($(this).css('opacity') < 0.9) {
            $(this).animate({
                opacity: 1
            }, 500);
            $(this).prev().animate({
                opacity: 0
            }, 500);
        }
        if ($(this).css('opacity') > 0.1) {
            $(this).animate({
                opacity: 0
            }, 500);
            $(this).prev().animate({
                opacity: 1
            }, 500);
        }
    });*/
    var isRun = false;
    $('.work').on('click', '.gallery_item img', function () {

        if(isRun){
            return
        }
        isRun = true;
        var $el = $(this);
        $(this).slideToggle(400, function(){
            $el.siblings().slideToggle();
            isRun = false;
        });
    });

    $('.work').on('click', '.work_btn', function(){
       $('#hide').slideToggle();
    });


    $('.faq').on('click', 'h4', function(){
        if($(this).next().css('display') == 'none'){
            $('.faq p').slideUp(500);
            $(this).next().slideToggle(500);
        }
    });

    /*document.body.onclick = function (event) {
        var t = event.target || event.srcElement;
        console.log(t);
    }*/



});