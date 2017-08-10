define(["jquery"], function ($) {
    return GoTop = (function () {

        function GoTop($btn) {
            this.$btn = $btn;
            this.init();
        }

        GoTop.prototype = {
            init: function () {
                this.check();
                this.onScroll();
                this.bind();
            },

            onScroll: function () {
                let _this = this;
                $(window).on("scroll", function () {
                    _this.check();
                })
            },
            check: function () {
                if ($(window).scrollTop() >= $(window).height()) {
                    this.$btn.css("display", "block");
                }else {
                    this.$btn.css("display", "none");
                }
            },
            bind: function () {
                let _this = this;
                this.$btn.on("click", function () {
                    $("html,body").animate({scrollTop: '0px'}, function () {
                        _this.$btn.css("display", "none");
                    })
                })
            }

        }
        return {
            init: function ($btn) {
                new GoTop($btn)
            }
        }
    })()
})