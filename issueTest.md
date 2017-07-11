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
function getTpl(data){
//todo...
};
var result = getTplStr(prod);  //result为下面的字符串
```

```
<dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>

```





















