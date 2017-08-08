define(["jquery"], function ($) {
    function GoTop($btn) {
        this.$btn = $btn;
        this.init();
    }

    GoTop.prototype = {
        init: function () {
            this.check();
        },

        check: function () {
            let scrollTop = $(window).scrollTop();
            if (scrollTop >= $(window.height())) {
                this.$btn.css("display","block");
            }
        }

    }
})