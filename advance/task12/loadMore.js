//V1

router.get('/getInfoV1', function (req, res) {
    var nextIndex = req.query.index,
        len = req.query.length,
        data = []
    for (var i = 0; i < len; i++) {
        data.push("内容" + (parseInt(nextIndex) + i))
    }
    console.log(nextIndex, data)
    res.send(data)
})


//V2

router.get('/getInfoV2', function (req, res) {
    var nextIndex = req.query.index,
        len = req.query.length,
        data = []
    for (var i = 0; i < len; i++) {
        data.push("内容" + (parseInt(nextIndex) + i))
    }
    setTimeout(function () {
        res.send(data)
    }, 1000)
})

