define(["jquery", "Magento_Ui/js/modal/modal"], function ($, modal) {
    return function () {
        var options = {
            type: "popup",
            responsive: true,
            title: "Modal",
            buttons: [
                {
                    text: $.mage.__("Ok"),
                    class: "",
                    click: function () {
                        this.closeModal();
                    },
                },
            ],
        };

        var popup = modal(options, $("#modal"));
        $("#button").click(function () {
            $("#modal").modal("openModal");
        });
    };
});
