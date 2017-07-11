## 0、对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？

- HTTP是基于 TCP/IP 协议的应用层协议。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，所以HTML、CSS、JS、JSON本质上只是符合通信格式的字符串。

- **在HTTP协议中常见的一些格式：**

```
text/plain
text/html
text/css
image/jpeg
image/png
image/svg+xml
audio/mp4
video/mp4
application/javascript
application/pdf
application/zip
application/atom+xml
```

## 1、使用数组拼接出如下字符串 ，其中styles数组里的个数不定

```
    var prod = {
        name: '女装',
        styles: ['短款', '冬季', '春装']
    };
    function getTpl(data) {
        var arr1 = data.styles, arr2 = [];
        var str1 = '<dl class="product">', str2 = "</dl>";
        for (var i = 0; i < arr1.length; i++) {
            arr2[i] = "<dd>" + arr1[i] + "</dd>";
        }
        arr2 = arr2.join("");//数组按空字符串拼接成字符串
        return str1 + arr2 + str2;
    }
    getTpl(prod);
    var result = getTpl(prod);  //result为下面的字符串
    //<dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>
    console.log(result);
```

## 2、写出两种以上声明多行字符串的方法

**例如：**

```
var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'
```

- 方法一：使用加号"+"

```
var str = 'abcdeabcdeabcdea'
 + 'ncdeabcdeabc'
 + 'deabcdeancdea'
 + 'bcdeabcdeabcd'
 + 'eancdeabcdeab'
 + 'cdeabcdeancde'
```

- 方法二：使用反斜杠"\"（不能多加任何空格）

```
var str = 'abcdeabcdeabcdea\
ncdeabcdeabc\
deabcdeancdea\
bcdeabcdeabcd\
eancdeabcdeab\
cdeabcdeancde'
```

- 方法三：多行注释"/**/"再生成字符串

```
(function () { /*
abcdeabcdeabcdea
ncdeabcdeabc
deabcdeancdea
bcdeabcdeabcd
eancdeabcdeab
cdeabcdeancde
*/}).toString().split('\n').slice(1,-1).join('\n')
```

## 3、补全如下代码,让输出结果为字符串: hello\\饥人谷

```
var str = "hello\\\\饥人谷"//补全代码
console.log(str)
```

## 4、以下代码输出什么?为什么

```
   var str = 'jirengu\nruoyu'
   console.log(str.length) //=>13=>"\n"表示一个换行符
```

## 5、写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

```
    //回文判断
    function definite(str) {
        if (typeof str !== "string") {
            console.log("请输入字符串")
            return
        } else {
            var str2 = str.split("").reverse().join("")
            if (str2 === str) {
                console.log("TRUE")
            } else {
                console.log("FALSE")
            }
        }
    }
```

## 6、写一个函数，统计字符串里出现出现频率最多的字符

```
    //获取出现频率最高的字符
    function maxStr(str) {
        if (typeof str !== "string") {
            console.log("请输入字符串")
            return
        } else {
            var str2 = {} //保存出现次数的键值对
            for (var i = 0; i < str.length; i++) {
                if (str2[str[i]]) {
                    str2[str[i]]++
                } else {
                    str2[str[i]] = 1
                }
            }
            var maxCount = 0, maxKey //最大频率的键值对
            for (var key in str2) {
                if (str2[key] > maxCount) {
                    maxCount = str2[key]
                    maxKey = key
                }
            }
            console.log(maxKey, maxCount)
        }
    }
```

## 7、写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如

```
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```

```
    function camelize(str) {
        var arr = str.split("-")
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
        var str2 = arr.join("")
        str2 = str2[0].toLowerCase() + str2.slice(1)
        return str2
    }
```

## 8、写一个 ucFirst函数，返回第一个字母为大写的字符 （***）

```
ucFirst("hunger") == "Hunger"
```

```
    function ucFirst(str) {
        for (var i = 0; i < str.length; i++) {
            var str2 = str[0].toUpperCase() + str.slice(1)
        }
        return str2
    }
```

## 9、写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如

```
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"
```

```
    function truncate(str, maxlength) {
        var arr = str.split("")
        var arr2 = arr.splice(0, maxlength + 1)
        var str2 = arr2.join("")
        if (arr.length > maxlength) {
            return str2 + "..."
        } else {
            return str2
        }
    }
```

## 10、什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？

>JSON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript (w3c制定的js规范)的一个子集，采用完全1.独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。

- "JSON小火车"

```
{
    "port_password":{
         "8989":"password0",
         "9001":"password1",
         "9002":"password2",
         "9003":"password3",
         "9004":"password4"
    },
    "method":"aes-256-cfb",
    "timeout":600,
    "other":["TCP","UDP","MTU"]
}
```

- [参考：Introducing JSON](http://json.org)

- window.JSON是浏览器内置对象，可用于判断浏览器是否兼容JSON的用法，例如IE8版本以上才内置支持JSON.parse方法。

- JSON对象内置了JSON.parse()、JSON.stringify()两种方法

## 11、如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?

- JSON.parse()

```
	var str='{ "port_password":{ "8989":"password0", "9001":"password1", "9002":"password2", "9003":"password3", "9004":"password4" }, "method":"aes-256-cfb", "timeout":600, "other":["TCP","UDP","MTU"] }'
	JSON.parse(str)
```

- JSON.stringify()

```
    var obj = {
        "port_password":{
             "8989":"password0",
             "9001":"password1",
             "9002":"password2",
             "9003":"password3",
             "9004":"password4"
        },
        "method":"aes-256-cfb",
        "timeout":600,
        "other":["TCP","UDP","MTU"]
    }
    JSON.stringify(obj)
```



