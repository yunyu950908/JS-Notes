define(["jquery"], function ($) {
    return fullScreenCarousel = (function () {

        function fullScreenCarousel($bannerLis, jsonUrl) {
            this.$bannerLis = $bannerLis;
            this.$parent = this.$bannerLis.parent();
            this.stepLength = 0;

            this.setBannerUrls(jsonUrl);

            this.setCss()
            this.resize();
            this.clone()
            //this.autoPlay()
        }

        fullScreenCarousel.prototype = {

            //1、获取轮播图的Url并设置
            setBannerUrls: function (jsonUrl) {
                let _this = this;
                $.get(jsonUrl + Math.random())
                    .done(function (json) {
                        let jsonFormat = JSON.parse(json);
                        _this.$bannerLis.each(function (i, e) {
                            $(e).css("background-image", "url('" + jsonFormat[i] + "')")
                            _this.setBannerSize()
                        })
                    })
                    .fail(function () {
                        console.log("请求失败")
                    })
            },

            //2、克隆首尾图片
            clone: function () {
                let arr = [];
                this.$bannerLis.each(function (i, e) {
                    arr.push(e)
                })

                let firstImg = arr[0],
                    lastImg = arr[arr.length - 1];

                let cFirstImg = firstImg.cloneNode(true),
                    cLastImg = lastImg.cloneNode(true);
                this.$parent.append(cFirstImg);
                this.$parent.prepend(cLastImg);
                console.log(firstImg)
                console.log(lastImg)
                console.log(cFirstImg)
                console.log(cLastImg)
            },

            //3、设置CSS
            setCss: function () {
                //设置每张轮播图的css
                this.$bannerLis.each(function (i, e) {
                    $(e).css({
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    })
                })
                //设置轮播图的容器
                this.$parent.css({
                    "display": "flex",
                    "position": "absolute"
                })
                //设置容器外层的容器
                this.$parent.parent().css({
                    "overflow": "hidden",
                    "position": "relative"
                })
            },

            //4、设置全屏轮播的尺寸
            setBannerSize: function () {
                let bannerHeight = $(window).height(),
                    bannerWidth = $(window).width();
                this.stepLength = bannerWidth;
                this.$parent.parent().width(bannerWidth);
                this.$parent.parent().height(bannerHeight);
                this.$bannerLis.each(function (i, e) {
                    $(e).width(bannerWidth);
                    $(e).height(bannerHeight)
                })
            },

            //窗口大小改变的时候重新设置轮播图大小
            resize: function () {
                let _this = this;
                $(window).resize(function () {
                    _this.setBannerSize();
                })
            },

            //自动轮播
            autoPlay: function () {
                let _this = this;
                setInterval(function () {
                    _this.playNext(1)
                }, 2000)
            },

            //下一张轮播
            playNext: function (num) {
                let _this = this;
                this.$parent.animate({
                    left: "-=" + _this.stepLength * num
                })
            },

            //上一张轮播
            playPre: function (num) {
                let _this = this;
                this.$parent.animate({
                    left: "+=" + _this.stepLength * num
                })
            },


        }
        return {
            init: function ($bannerLis, jsonUrl) {
                new fullScreenCarousel($bannerLis, jsonUrl)
            }
        }
    })()
})


//
//
// function setBannerSize() {
//     let bannerHeight = $(window).height(),
//         bannerWidth = $(window).width();
//     $bannerLis.parent().parent().width(bannerWidth);
//     $bannerLis.parent().parent().height(bannerHeight);
//     $bannerLis.each(function (i, e) {
//         $(e).width(bannerWidth);
//         $(e).height(bannerHeight)
//     })
// }
//
// $(window).resize(function () {
//     setBannerSize();
// })
//
// $.get("'" + jsonUrl + "'" + Math.random())
//     .done(function (json) {
//         let jsonFormat = JSON.parse(json);
//         $(".banner .carousel > li ").each(function (i, e) {
//             setBannerSize()
//             $(e).css("background-image", "url('" + jsonFormat[i] + "')")
//         })
//     })
//     .fail(function () {
//         console.log("请求失败")
//     })
//$(".banner .carousel > li ")
//../json/bannerlist.txt?_=