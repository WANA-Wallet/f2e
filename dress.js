<!-- 換裝區 swiper -->
let eyesIndex = 0;
let swiperDressEyesList = new Swiper(".swiper.dress-eyes", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 500,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next.dress-eyes',
        prevEl: '.swiper-button-prev.dress-eyes',
    },
    allowTouchMove: true,
    preventClicks: true,
});


// swiperDressEyesList.forEach(swiperDressEyes => {
//     swiperDressEyes.on('slideChange', function (e) {
//         eyesIndex = swiperDressEyes.realIndex;
//         console.log(eyesIndex);
//     });
// })

let swiperDressClothes = new Swiper(".swiper.dress-clothes", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 500,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next.dress-clothes',
        prevEl: '.swiper-button-prev.dress-clothes',
    },
    allowTouchMove: true,
    preventClicks: true,
});
