define(["jquery", "fullPageCarousel", "WaterFall", "GetNews", "GoTop"], function ($, fullScreenCarousel, WaterFall, GetNews, GoTop) {
    // let getWeatherTest = $(".getWeatherTest")
    // console.log(getWeatherTest)

    //全屏轮播
    fullScreenCarousel.init($(".banner .carousel > li "), "../json/bannerList.txt?_")

    //获取新闻
    GetNews.init($(".newsTemp"), $(".newsBtn"))

    //新闻内容添加到DOM树后渲染
    var newsChLen = $(".newsCt").length,
        baseLen = 10;
    check(baseLen);

    function check(num) {
        var sum = num;
        clearTimeout(timeID1)
        clearTimeout(timeID2)
        if (newsChLen == sum) {
            var timeID1 = setTimeout(function () {
                WaterFall.init($(".newsTemp"), $(".newsCt"));
                sum += 10;
                baseLen += 10;
            }, 50)
        } else {
            var timeID2 = setTimeout(function () {
                newsChLen = $(".newsCt").length
                console.log(newsChLen)
                check(sum)
            }, 50)
        }
    }

    $(".newsBtn").on("click", function () {
        check(baseLen);
    })

    //回到顶部
    GoTop.init($(".gotop"))


})


// define(function (require, exports, module) {
//     let $ = require("jquery"),
//         Exposure = require("Exposure"),
//         Carousel = require("Carousel"),
//         Tab = require("Tab");
//
//     let getWeatherTest = $(".getWeatherTest")
//     console.log(Carousel)
//
// })