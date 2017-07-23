function setRouter(app){ 
 var router = app; 

router.get('/loadMore', function (req, res) {
    var nextIndex = req.query.index,
        len = req.query.length,
        data = []
    console.log(nextIndex,len)
    for (var i = 0; i < len; i++) {
        data.push("JOJO的奇妙冒险" + (parseInt(nextIndex) + i))
    }
    setTimeout(function () {
        res.send(data)
    }, 300)
})
}
 module.exports.setRouter = setRouter