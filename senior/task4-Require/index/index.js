
define(["jquery", "Exposure", "Carousel", "Tab", "fullPageCarousel"], function ($, Exposure, Carousel, Tab, fullScreenCarousel) {
    let test = $(".test")
    console.log(test)
    fullScreenCarousel.init($(".banner .carousel > li "),"../json/bannerList.txt?_")

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