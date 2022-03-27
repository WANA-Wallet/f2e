<!-- 換裝區 swiper -->
let swiperDressEye = new Swiper(".swiper.dress-eye", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 500,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: false,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next.dress-eye',
        prevEl: '.swiper-button-prev.dress-eye',
    },
    allowTouchMove: true,
    preventClicks: true,
});
