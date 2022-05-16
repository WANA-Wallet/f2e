<!-- 換裝區 swiper -->
let eyesIndex = 0;
let swiperDressEyesList = new Swiper(".swiper.dress-eyes", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
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

let swiperDressClothesList = new Swiper(".swiper.dress-clothes", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
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

let swiperDressHairList = new Swiper(".swiper.dress-hair", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
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
        nextEl: '.swiper-button-next.dress-hair',
        prevEl: '.swiper-button-prev.dress-hair',
    },
    allowTouchMove: true,
    preventClicks: true,
});

let swiperDressBackgroundList = new Swiper(".swiper.dress-background", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
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
        nextEl: '.swiper-button-next.dress-background',
        prevEl: '.swiper-button-prev.dress-background',
    },
    allowTouchMove: true,
    preventClicks: true,
});
