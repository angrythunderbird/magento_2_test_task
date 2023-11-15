define(["jquery"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            if ($(element).closest().hasClass("active")) {
                $(".templates-wrapper").toggle(false);
                $(".button-popup-wrapper").toggle(true);
            }
            $(element).on("click", function () {
                $(".button-popup-wrapper").toggle(true);
                $(".templates-wrapper").toggle(false);
            });
        });
    };
});
