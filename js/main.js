$(function () {

    /* Fixed navigation(header) */

    let header = $('#js__header'),
        intro = $('#js__intro'),
        height__intro,
        scrollPos = $(window).scrollTop(),
        nav__toggle = $('#nav__toggle'),
        nav = $('#js__nav');

    checkScroll(scrollPos, height__intro);

    $(window).on('scroll load resize', function () {

        height__intro = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, height__intro);

    });

    /* Show burger-menu */

    $(nav__toggle).on('click', function (event) {
        event.preventDefault();
        nav.toggleClass('show');
    });


    /* Check scroll */

    function checkScroll(scrollPos, height__intro) {

        if (scrollPos > height__intro) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

    }

    /* Smooth scroll */

    $('[data-scroll]').on('click', function (event) {

        event.preventDefault();

        let elem_Id = $(this).data('scroll'),
            elem_off_set = $(elem_Id).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elem_off_set - 70
        }, 700);
    });

    /* Reviews Slider: https://kenwheeler.github.io/slick/ */

    let slider = $('#reviews__slider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

}); //main function