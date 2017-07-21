## 题目1： jQuery 能做什么？

- 选择网页元素
- 改变结果集
- 元素的操作：取值和赋值
- 元素的操作：移动
- 元素的操作：复制、删除和创建
- 工具方法
- 事件操作
- 特殊效果
- AJAX

## 题目2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？

- jQuery对象是通过jQuery包装DOM对象后产生的对象

**区别：**
1. jQuery选择器得到的jQuery对象和DOM 原生对象是两种不同的对象类型，两者不等价；
2. jQuery无法使用原生DOM对象的任何方法，同理原生DOM对象也不能使用jQuery里的方法. 乱使用会报错。

**jQuery对象转成DOM对象：**

- 方法1：[index]

```
var $div =$('div'); //获取div
var divFirst=$div[0]; //通过下标index，得到DOM对象
```

- 方法2：get(index)

```
var $div=$('div');     //jQuery对象
var divFirst=$$div.get(0);   //得到DOM对象
```

**DOM对象转成jQuery对象：**

- 只需要用$()把DOM对象包装起来，就可以获得一个jQuery对象了。

```
$( document.querySelector('div') )
```

## 题目3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？

**绑定方式：**

1. `bind`

- `bind(type,[data],function(eventObject))`

- `bind`是使用频率较高的一种，作用就是在选择到的元素上绑定特定事件类型的监听函数，参数的含义如下：

- type:事件类型，如`click`、`change`、`mouseover`等;
- data:传入监听函数的参数，通过`event.data`取到。可选;
- function:监听函数，可传入event对象，这里的event是jQuery封装的event对象，与原生的event对象有区别，使用时需要注意。
- `bind`的特点就是会把监听器绑定到目标元素上，有一个绑一个，在页面上的元素不会动态添加的时候使用它没什么问题。

2. `live`

- `live(type, [data], fn)`

- `live`的参数和`bind`一样，可以看到`live`方法并没有将监听器绑定到自己`this`身上，而是绑定到了`this.context`上了。

- `live`正是利用了事件委托机制来完成事件的监听处理，把节点的处理委托给了`document`

- 使用事件委托的优点：新添加的元素不必再绑定一次监听器。

3. `delegate`

- `delegate: function( selector, types, data, fn )`

- 将监听事件绑定在就近的父级元素上，为指定元素的子元素添加一个或多个事件处理程序。

这下，我们的选择又多了一些灵活性，不单可以利用事件委托，还可以**选择委托的对象**。毕竟老麻烦同一个人帮忙很不好嘛。对于如何选择委托对象，还是需要一定的策略的，毕竟父级元素可以有很多。我觉得原则应该是选择最近的“稳定”元素，选择最近是因为事件可以更快的冒泡上去，能够在第一时间进行处理。所谓“稳定”是指该父级元素是一开始就在页面上的，不是动态添加上来的，而且将来也不会消失掉，这样可以保证它可以时时监控着自己的孩子。

4. `on`

- `on(type,[selector],[data],fn)`

- 参数与`delegate`差不多但还是有细微的差别，首先`type`与`selector`换位置了，其次`selector`变为了可选项。

- 传`selector`进去，就是跟`delegate`一样的意义了，除了参数顺序不同，其他完全一样。

5. `unbind` `die` `undelegate` `off`都是取消绑定事件。

`bind`、`delegate`、`live`都**已经废弃**，**现在使用**`on`方法来替换它们。

```
$('#myol li').on('click',$('ul'),getHtml);
```


## 题目4：jQuery 如何展示/隐藏元素？

```
$(selecctor).hide(speed,callback);
$(selecctor).show(speed,callback);
```


## 题目5： jQuery 动画如何使用？

```
$(selector).animate({params},speed,callback);
//例子
$('#box').animate({left:'30px',top:'100px'},500);
//也可以
$('#box').animate({left:'30px',top:'100px'},500，function(){
	$('#box').animate({left:'30px',top:'100px'},500，function(){
		...
	});
});
//也可以
$('#box').animate({left:'30px',top:'100px'},500);
$('#box').animate({left:'40px',top:'110px'},500);
$('#box').animate({left:'50px',top:'120px'},500);
//
$('#box').animate({left:'30px',top:'100px'},500);
.animate({left:'40px',top:'110px'},500);
.animate({left:'50px',top:'120px'},500);
```

## 题目6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

```
$('#ele').html() //获取
$('#ele').html(value) //设置
$('#ele').text();
$('#ele').text(value);
```

## 题目7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

```
.val([string])
无参数时，获取表单用户的输入值
有参数时，设置表单的输入值
.attr(attributeName)
获取元素特定属性的值
.attr(attributeName, value)
为元素属性赋值
```