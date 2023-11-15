define(["jquery", "mage/tabs"], function ($) {
    return function (config, element) {
        $(document).ready(function () {
            $(element.id).tabs({
                "mage/tabs": {
                    openedState: "active",
                    animate: { duration: 100 },
                    active: 1,
                    disabled: [2],
                    disabledState: "disabled",
                },
            });
        });
    };
});
