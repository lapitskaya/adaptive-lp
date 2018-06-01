$(document).ready(function () {

    sectionMainPaddingTop();

    $(window).resize(function () {
        sectionMainPaddingTop();
    });
    $(window).scroll(function () {
        y_windowTopScroll = $(this).scrollTop();
        sectionMainPaddingTop();
    });


    $('.footer ').click(function () {
        $('.footer ').hide();
        if ($(document).scrollTop() != 0) {
            $('html,body').animate({
                'scrollTop': 0
            }, 900);
        }
    });

//fix menu
    var height_preheader,
        y_windowTopScroll;

    function sectionMainPaddingTop(){
        height_preheader = $('.header-container').outerHeight();
        $('main.main').css('padding-top', height_preheader + 'px');
    }

});