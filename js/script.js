$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
  ]
})


$(window).resize(function () {
    if ($('body').width() > 1199) {
        sliderSecondBlock()
    }
});
if ($('body').width() > 1199) {
    sliderSecondBlock()
}
$('.reviews .reviewsBlock .slick-arrow').on('click', function() {
    if ($('body').width() > 1199) {
        sliderSecondBlock()
    }
})
function sliderSecondBlock() {
    $('.reviews .reviewsBlock .info-block .item.active').removeClass('active')
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active')
}
                        
// sliderSecondBlock()
// function sliderSecondBlock() {
//     // $('.reviews .evriewsBlock .info-block .item').css('opacity', 0.3);
//     // $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).css('opacity', 1);
//     $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active');
// }

// $('.reviews .reviewsBlock .info-block .slick-arrow').on('click',function sliderSecondBlock(){
//         $('.reviews .reviewsBlock .info-block .item.slick-active').removeClass('active');
//         $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active');
// });

// if($("body").width()>1199){
//     sliderSecondBlock()
// }

