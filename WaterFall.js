var WaterFall = (function () {

    function WaterFall($outerCt, $innerCt) {
        this.$outerCt = $outerCt;
        this.$innerCt = $innerCt;
        this.init();
    }

    WaterFall.prototype = {
        init: function () {
            this.waterfallLayout();
            this.resizeLayout();
        },

        resizeLayout: function () {
            let _this = this;
            $(window).resize(function () {
                _this.waterfallLayout();
            })
        },

        waterfallLayout: function () {
            //获取一行能放多少列
            let colLength = parseInt(this.$outerCt.width() / this.$innerCt.width(true));
            //初始化每列的高
            let arr = [];
            for (let i = 0; i < colLength; i++) {
                arr[i] = 0;
            }

            //遍历每一项innerCt,找到最短的，然后定位当前项
            this.$innerCt.each(function (i, e) {
                //获取最短的那一列的高和索引
                let minHeight = Math.min.apply(null, arr),
                    minIndex = arr.indexOf(minHeight);
                //绝对定位至最短的那个位置下面
                $(e).css({
                    top: arr[minIndex],
                    left: $(e).outerWidth(true) * minIndex
                })
                //修改该次改变的列长
                arr[minIndex] += $(e).outerHeight(true)

            })
        }
    }
    return {
        init: function ($outerCt, $innerCt) {
            new WaterFall($outerCt, $innerCt)
        }
    }
})()

