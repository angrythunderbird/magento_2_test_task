define(["jquery"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            if ($(element).parent().hasClass("active")) {
                toggler();
            }

            $(element).on("click", toggler);

            function toggler() {
                $(".templates-wrapper").toggle(false);
                $(".button-popup-wrapper").toggle(true);
            }
        });
    };
});
