var a = 1;
console.log(a);

//require到./a.js得到exports对象
var sayHello = require("./a.js").sayHello;
sayHello("liyu");

//调用npm下载的包可以直接调用
var marked = require("marked");
var str = marked("# hello world");
console.log(str)