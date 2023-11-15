define(["jquery", "slick"], function ($) {
    return function () {
        $(document).ready(function () {
            $(".templates-wrapper").toggle(true);
            $(".button-popup-wrapper").toggle(false);
            $(".templates-wrapper").not(".slick-initialized").slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
            });
        });
    };
});
