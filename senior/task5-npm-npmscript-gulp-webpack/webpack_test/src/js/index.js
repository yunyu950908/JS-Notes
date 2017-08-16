import "../css/fullPageBanner.css";
import "../css/GetNews.css";
import "../css/GoTop.css";
import "../css/index.css";

var $ = require("jquery"),
    fullScreenCarousel = require("./fullPageCarousel.js"),
    WaterFall = require("./WaterFall.js"),
    GetNews = require("./GetNews.js"),
    GoTop = require("./GoTop.js")

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

