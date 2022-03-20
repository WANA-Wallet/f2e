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
let swiper = new Swiper(".swiper", {
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
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});


// AOS 捲動動畫效果
AOS.init();
