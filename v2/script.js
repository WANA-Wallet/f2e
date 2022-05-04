const swiper = new Swiper('.swiper.character', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 150,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 200,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 300,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 350,
        },
    },
    autoHeight: true,
    speed: 2000,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    loop: true,
    grabCursor: true,
    simulateTouch: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});
