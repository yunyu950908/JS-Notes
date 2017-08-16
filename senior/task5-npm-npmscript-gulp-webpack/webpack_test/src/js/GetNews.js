// define(["jquery"], function ($) {
var $ = require("./jquery.min.js")
    var GetNews = (function () {

        function News($newsTemp, $newsBtn) {
            this.time = null;
            this.$newsTemp = $newsTemp;
            this.$newsBtn = $newsBtn;
            this.num = 50;
            this.page = 1;
            this.newsList = [];
            this.title = [];
            this.picUrl = [];
            this.ctime = [];
            this.url = [];
            this.init();
            //status
            //this.ststus = 0;
        }

        News.prototype = {
            init: function () {
                this.getNews();
                this.bind();
            },

            bind: function () {
                var _this = this;
                this.$newsBtn.on("click", function () {
                    if (_this.newsList.length < 10) {
                        _this.page++;
                        _this.getNews()
                        return;
                    }
                    _this.saveNews();
                    _this.setNews();
                })
            },

            //获取时间YYYYMMDDHHMMSS
            generateTimeReqestNumber: function () {
                function setZero(n) {
                    return n < 10 ? '0' + n : n
                }

                var date = new Date();
                this.time = date.getFullYear().toString()
                    + setZero(date.getMonth() + 1)
                    + setZero(date.getDate())
                    + setZero(date.getHours())
                    + setZero(date.getMinutes())
                    + setZero(date.getSeconds());

            },

            //ajax获取新闻数据
            getNews: function () {
                var _this = this;
                //设置status
                this.status = 0;
                //获取时间YYYYMMDDHHMMSS
                this.generateTimeReqestNumber();
                //ajax获取新闻数据
                var newsAPI = "http://route.showapi.com/198-1?" +
                    "showapi_appid=43629&" +
                    "showapi_sign=b643847244b14f1d9058090a18b695ed&" +
                    "showapi_timestamp=" + _this.time +
                    "&num=" + _this.num +
                    "&page=" + _this.page;
                $.get(newsAPI,false)
                    .done(function (json) {
                        //console.log(json)
                        //var jsonFormat = JSON.parse(json);
                        _this.newsList = json.showapi_res_body.newslist;
                        _this.saveNews();
                        _this.setNews();
                    })
                    .fail(function () {
                        console.log("ajax fail")

                    })
            },

            //获取的json数据分类存储
            saveNews: function () {
                var _this = this;
                for (var i = 0; i < 10; i++) {
                    this.title.push(_this.newsList[i].title);
                    this.picUrl.push(_this.newsList[i].picUrl);
                    this.ctime.push(_this.newsList[i].ctime);
                    this.url.push(_this.newsList[i].url);
                }
                //倒序
                this.newsList.reverse();
                //删除最后十条
                this.newsList.length -= 10;
                //倒回来
                this.newsList.reverse();
            },

            //创建元素放入新闻数据
            setNews: function () {
                var _this = this;
                for (var i = 0; i < 10; i++) {
                    //创建设置外层容器与跳转容器
                    var $newsCt = $("<div class='newsCt'></div>");
                    var $newsUrl = $("<a class='newsUrl'></a>");
                    $newsUrl.attr("href", _this.url[i])
                    //创建设置预览图片
                    var $newsPic = $("<div class='newsPic'></div>");
                    var $img = $("<img src=''>");
                    $img.attr("src", _this.picUrl[i]);
                    $newsPic.append($img)
                    //创建设置新闻描述
                    $newsTitle = $("<div class='newsTitle'></div>");
                    $newsTitle.text(_this.title[i]);
                    //创建设置时间
                    $newsTime = $("<div class='newsTime'></div>")
                    $newsTime.text(_this.ctime[i]);
                    //组合成一个新闻块
                    $newsUrl.append($newsPic);
                    $newsUrl.append($newsTitle);
                    $newsUrl.append($newsTime);
                    $newsCt.append($newsUrl);
                    //将当前新闻块放入最外部的新闻模块容器
                    _this.$newsTemp.append($newsCt);

                }
                //清空
                this.title = [];
                this.picUrl = [];
                this.ctime = [];
                this.url = [];
                //status
                //this.status = 1;
            }
        }
        return {
            init: function ($newsTemp, $newsBtn) {
                new News($newsTemp, $newsBtn)
            }
        }
    })()
// })

module.exports = GetNews;
