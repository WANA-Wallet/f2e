const swiperCharacter = new Swiper('.swiper.character', {
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

<!-- 第二三部分 文章滑動區塊 swiper -->
let swiperArticle = new Swiper(".swiper.article", {
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    autoHeight: false,
    resizeObserver: true,
    speed: 1000,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: false,
    loop: false,
    grabCursor: false,
    simulateTouch: true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next.article',
        prevEl: '.swiper-button-prev.article',
    },
    allowTouchMove: true,
    preventClicks: true,
});
