var test = function () {
    var box = document.createElement("div")
    box.style.height = 100+"px"
    box.style.width = 100+"px"
    box.style.background = "#fff000"
    box.style.margin = 20+"px"
    box.style.display = "inline-block"
    document.body.appendChild(box)
}

module.exports = test