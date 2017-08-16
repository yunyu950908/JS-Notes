import './index.css';
import './index1.css'

var test1 = require("./index1.js")
console.log(1)
for (var i = 0; i < 5; i++) {
    new test1()
}