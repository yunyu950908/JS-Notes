router.get('/loadMore', function (req, res) {
    var nextIndex = req.query.index,
        len = req.query.length,
        data = []
    console.log(nextIndex, len)
    for (var i = 0; i < len; i++) {
        data.push("JOJO的奇妙冒险" + (parseInt(nextIndex) + i))
    }
    res.header("Access-Control-Allow-Origin", "*")
    setTimeout(function () {
        res.send(data)
    }, 300)
})
