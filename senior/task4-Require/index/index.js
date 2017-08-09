define(["jquery", "Exposure", "Carousel", "Tab", "fullPageCarousel", "WaterFall", "GetNews"], function ($, Exposure, Carousel, Tab, fullScreenCarousel, WaterFall, GetNews) {
    let test = $(".test")
    console.log(test)
    let newsChLen = $(".newsCt").length,
        baseLen = 10;

    console.log(newsChLen)

    fullScreenCarousel.init($(".banner .carousel > li "), "../json/bannerList.txt?_")
    GetNews.init($(".newsTemp"), $(".newsBtn"))

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
})


// define(function (require, exports, module) {
//     let $ = require("jquery"),
//         Exposure = require("Exposure"),
//         Carousel = require("Carousel"),
//         Tab = require("Tab");
//
//     let test = $(".test")
//     console.log(Carousel)
//
// })