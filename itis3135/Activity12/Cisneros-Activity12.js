$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager"
    });
});