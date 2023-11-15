define(["jquery", "slick"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            if ($(element).closest().hasClass("active")) {
                $(".templates-wrapper").toggle(true);
                $(".button-popup-wrapper").toggle(false);
            }
            $(element).on("click", function () {
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
        });
    };
});
