$(function(){
    $('.fairy-tail__slider').slick({
        prevArrow:'<button type="button"class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow:'<button type="button"class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay:true,
        fade: true,
    });

    $('.our-trip__slider').slick({
        prevArrow:'<button type="button"class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow:'<button type="button"class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay:true,
        fade: true,
    });


    $('.fairy-tail__border').on('mouseover', () => {
        $('.fairy-tail__body').addClass('hover');
    });

    $('.fairy-tail__border').on('mouseout', () => {
        $('.fairy-tail__body').removeClass('hover');
    });
});