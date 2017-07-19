function setRouter(app){ 
 var router = app; 

app.get('/loadMore', function (req, res) {

    var curIdx = req.query.idx
    var len = req.query.len
    var data = []

    for (var i = 0; i < 5; i++) {
        data.push('news' + (parseInt(curIdx) + i))
    }

    res.send(data);
});}
 module.exports.setRouter = setRouter