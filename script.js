// <!-- 第五部分 A&N-->
// gif圖 hover動圖、靜態切換效果
// TODO: click、hover出去再進來時，重load gif圖 (方法: 改變Image src)
$(function () {
    $('.animate-on-hover').on('click mouseover').hover(
        function () {
            let bgImgUrl = $(this).css('background-image');
            $(this).css('background-image', bgImgUrl.replace('png', 'gif'));
        },
        function () {
            let bgImgUrl = $(this).css('background-image');
            $(this).css('background-image', bgImgUrl.replace('gif', 'png'));
        }
    );
});

// <!-- 第七部分 人物區 swiper -->
let swiperCharacter = new Swiper(".swiper.character", {
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
    centeredSlides: true,
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
    stretch: 5000,
    autoHeight: true,
    speed: 1000,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: false,
    loop: true,
    grabCursor: false,
    simulateTouch: true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: true,
    preventClicks: true,
});

// AOS 捲動動畫效果
AOS.init();
