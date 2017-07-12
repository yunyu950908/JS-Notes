# Math任务
## 1、写一个函数，返回从min到max之间的 随机整数，包括min不包括max
## 2、写一个函数，返回从min都max之间的 随机整数，包括min包括max
## 3、写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。

```
function getRandStr(len){
  //补全函数
}
var str = getRandStr(10); // 0a3iJiRZap
```

## 4、写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```
function getRandIP(){
  //补全
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```

## 5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff

```
function getRandColor(){
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```

# 数组任务
## 1、数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法
## 2、写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作

```
function squareArr(arr){
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```

## 3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变

```
function filterPositive(arr){
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```

# Date 任务
## 1、 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

```
var str = getChIntv("2017-02-08");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒
```

## 2、把hh-mm-dd格式数字日期改成中文日期

```
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日
```

## 3、写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

```
刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)
```

```
function friendlyDate(time){
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
```