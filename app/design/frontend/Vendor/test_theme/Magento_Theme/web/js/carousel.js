define(["jquery", "slick"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            if ($(element).parent().hasClass("active")) {
                toggler();
            }

            $(element).on("click", toggler);

            function toggler() {
                $(".templates-wrapper").toggle(true);
                $(".button-popup-wrapper").toggle(false);
                $(".templates-wrapper").not(".slick-initialized").slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                });
            }
        });
    };
});
