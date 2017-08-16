// define(["jquery"], function ($) {
var $ = require("./jquery.min.js")
var fullScreenCarousel = (function () {

    function fullScreenCarousel($bannerLis, jsonUrl) {
        this.$bannerLis = $bannerLis;
        this.jsonUrl = jsonUrl;
        this.$parent = $bannerLis.parent();
        this.$bullets = this.$parent.parent().find(".bullets > li");
        //自动轮播定时器ID
        this.timeId = 0;
        //获取初始轮播图数量
        this.bannerLength = $bannerLis.length;
        //轮播步长
        this.stepLength = 0;
        //轮播索引
        this.imgIndex = 0;
        //设置动画锁
        this.animate = false;
        //启动
        this.init();
    }

    fullScreenCarousel.prototype = {
        init: function () {
            var _this = this;
            this.setBannerUrls(_this.jsonUrl)
            this.setCss();
            this.setSize();
            this.resize();
            this.bind();
        },

        //1、获取轮播图的Url并设置
        setBannerUrls: function (jsonUrl) {
            var _this = this;
            $.get(jsonUrl + Math.random())
                .done(function (json) {
                    var jsonFormat = JSON.parse(json);
                    _this.$bannerLis.each(function (i, e) {
                        $(e).css("background-image", "url('" + jsonFormat[i] + "')")
                        _this.setSize()
                    })
                })
                .fail(function () {
                    _this.setSize()
                    console.log("请求失败")
                })
        },

        //2、设置CSS
        setCss: function () {

            //设置容器外层遮罩
            this.$parent.parent().css({
                "overflow": "hidden",
                "position": "relative"
            })

            //设置轮播图的容器
            this.$parent.css({
                "display": "flex",
                "position": "absolute"
            })
        },

        //4、设置全屏轮播的尺寸
        setSize: function () {
            var bannerHeight = $(window).height(),
                bannerWidth = $(window).width();
            //设置步长
            this.stepLength = bannerWidth;
            //设置轮播图和容器的尺寸确保全屏覆盖
            this.$bannerLis.each(function (i, e) {
                $(e).height(bannerHeight)
                $(e).width(bannerWidth)
            })
            //设置外层遮罩尺寸
            this.$parent.parent().width(bannerWidth);
            this.$parent.parent().height(bannerHeight);
        },

        //窗口大小改变的时候重新设置轮播图大小
        resize: function () {
            var _this = this;
            $(window).resize(function () {
                _this.setSize();
            })
        },

        //设置bullet
        setBullet: function () {
            this.$bullets.each(function (i, bullet) {
                bullet.classList.remove("active");
            })
            this.$bullets[this.imgIndex].classList.add("active");
        },

        playBullet: function () {
            var _this = this;
            this.$bullets.each(function (i, j) {
                $(j).on("click", function () {
                    if (i > _this.imgIndex) {
                        _this.playNext(i - _this.imgIndex);
                    } else {
                        _this.playPre(_this.imgIndex - i);
                    }
                    _this.setBullet();
                })
            })
        },

        //上一张轮播
        playPre: function (num) {
            var _this = this;
            if (this.isAnimate == true) return;
            this.isAnimate = true;
            for (var i = 0; i < num; i++) {
                this.$parent.prepend(_this.$parent.children().last())
            }
            this.$parent.css("left", -this.stepLength)
            $(this.$parent).animate({
                left: "+=" + _this.stepLength * num
            }, function () {
                _this.$parent.css("left", "0")
                if (_this.imgIndex == 0) {
                    _this.imgIndex = _this.bannerLength;
                }
                _this.imgIndex -= num;
                console.log(_this.imgIndex)
                _this.setBullet();
                _this.isAnimate = false;
            })
        },

        //下一张轮播
        playNext: function (num) {
            var _this = this;
            if (this.isAnimate == true) return;
            this.isAnimate = true;
            $(this.$parent).animate({
                left: "-=" + _this.stepLength * num
            }, function () {
                for (var i = 0; i < num; i++) {
                    _this.$parent.append(_this.$parent.children().first())
                }
                _this.$parent.css("left", "0")
                if (_this.imgIndex == _this.bannerLength - 1) {
                    _this.imgIndex = -1;
                }
                _this.imgIndex += num;
                //console.log(_this.imgIndex)
                _this.setBullet();
                _this.isAnimate = false;
            })
        },

        //自动播放
        autoPlay: function () {
            var _this = this;
            this.timeId = setInterval(function () {
                _this.playNext(1);
            }, 3000)
        },

        //绑定事件
        bind: function () {
            var _this = this;
            this.$parent.parent().find(".next").on("click", function () {
                _this.playNext(1);
            })
            this.$parent.parent().find(".pre").on("click", function () {
                _this.playPre(1);
            })
            this.playBullet();
            this.autoPlay();
            this.$parent.parent().find(".next").on("mouseover", function () {
                clearInterval(_this.timeId)
            })
            this.$parent.parent().find(".pre").on("mouseover", function () {
                clearInterval(_this.timeId)
            })
            this.$parent.parent().find(".next").on("mouseout", function () {
                _this.autoPlay();
            })
            this.$parent.parent().find(".pre").on("mouseout", function () {
                _this.autoPlay();
            })

        },
    }
    return {
        init: function ($bannerLis, jsonUrl) {
            new fullScreenCarousel($bannerLis, jsonUrl)
        }
    }
})()
// })

module.exports = fullScreenCarousel;
