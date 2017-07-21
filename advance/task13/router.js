router.get('/getNews', function (req, res) {
    var news = [
        "111111",
        "222222",
        "333333",
        "444444",
        "555555",
        "666666"
    ];
    var data = []
    for (var i = 0; i < 3; i++) {
        var index = parseInt(Math.random() * news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }


    //CORS

    res.header("Access-Control-Allow-Origin", "*")
    res.send(data)
    console.log(data)


    //JSONP

    // var callback = req.query.callback;
    // if (callback) {
    //     res.send(callback + '(' + JSON.stringify(data) + ')');
    // } else {
    //     res.send(data);
    // }
})
