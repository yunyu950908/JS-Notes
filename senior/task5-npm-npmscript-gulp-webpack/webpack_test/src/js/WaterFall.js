// define(["jquery"], function ($) {
var $ = require("./jquery.min.js")
var WaterFall = (function () {

    function WaterFall($outerCt, $innerCt) {
        this.$outerCt = $outerCt;
        this.$innerCt = $innerCt;
        this.maxHeight = 0;
        this.init();
    }

    WaterFall.prototype = {
        init: function () {
            this.setOuterWidth();
            this.resizeLayout();
            this.waterfallLayout();
            this.setOuterHeight();

        },

        setOuterWidth: function () {
            var ctWidth = $(window).width();
            this.$outerCt.width(ctWidth);
        },
        setOuterHeight: function () {
            this.$outerCt.height(this.maxHeight)
        },

        resizeLayout: function () {
            var _this = this;
            $(window).resize(function () {
                _this.setOuterWidth();
                _this.waterfallLayout();
                _this.setOuterHeight();
            })
        },

        waterfallLayout: function () {
            var _this = this;
            //获取一行能放多少列
            var colLength = parseInt(this.$outerCt.width() / this.$innerCt.outerWidth(true))
            console.log(this.$innerCt.outerWidth(true), colLength)

            //初始化每列的高
            var arr = [];
            for (var i = 0; i < colLength; i++) {
                arr[i] = 0;
            }

            //遍历每一项innerCt,找到最短的，然后定位当前项
            this.$innerCt.each(function (i, e) {
                //获取最短的那一列的高和索引
                var minHeight = Math.min.apply(null, arr),
                    minIndex = arr.indexOf(minHeight);
                //绝对定位至最短的那个位置下面
                $(e).css({
                    top: arr[minIndex],
                    left: $(e).outerWidth(true) * minIndex
                })
                //修改该次改变的列长
                arr[minIndex] += $(e).outerHeight(true)
                _this.maxHeight = arr[minIndex]
            })
        }
    }
    return {
        init: function ($outerCt, $innerCt) {
            new WaterFall($outerCt, $innerCt)
        }
    }
})()
// })
module.exports = WaterFall;