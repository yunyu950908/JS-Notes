let ExposureCenter = (function () {
    function Exposure($target, callback) {
        this.$target = $target;
        this.callback = callback;
        this.bind();
    }

    Exposure.prototype = {

        bind: function () {
            $(window).on("scroll", () => {
                if (this.$target.hasClass("load")) {
                    return;
                } else {
                    this.check();
                }
            })

        },

        check: function () {
            if (this.isShow()) {
                console.log(this.isShow())
                this.callback(this.$target);
                this.$target.addClass("load")
            }
        },

        isShow: function () {
            let windowHeight = $(window).height(),
                scrollHeight = $(window).scrollTop(),
                offsetTop = this.$target.offset().top,
                targetHeight = this.$target.height();
            if (windowHeight + scrollHeight > offsetTop && scrollHeight < offsetTop + targetHeight) {
                return true;
            } else {
                return false;
            }
        },
    }
    return {
        init: function ($targets, callback) {
            $targets.each((idx, target) => {
                new Exposure($(target), callback)
            })
        }
    }
})();