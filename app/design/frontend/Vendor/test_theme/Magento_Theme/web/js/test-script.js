define(["jquery", "mage/tabs", "slick"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            $(".templates-wrapper").toggle(false);
            $(".button-popup-wrapper").toggle(false);
        });
    };
});
