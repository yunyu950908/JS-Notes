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

- 概述
为每个匹配元素的特定事件绑定事件处理函数。

- jQuery 3.0中已弃用此方法，请用 `on()`代替。

- 参数

```
bind(type,[data],fn)

type,[data],function(eventObject)String,Object,Function
type: 含有一个或多个事件类型的字符串，由空格分隔多个事件。比如"click"或"submit"，还可以是自定义事件名。
data:作为event.data属性值传递给事件对象的额外数据对象
fn:绑定到每个匹配元素的事件上面的处理函数
false: 将第三个参数设置为false会使默认的动作失效。

//通过返回false来取消默认的行为并阻止事件起泡。
$("form").bind("submit", function() { return false; })
```

2. `live`

- 概述
jQuery 给所有匹配的元素附加一个事件处理函数，即使这个元素是以后再添加进来的也有效。
这个方法是基本是的 `.bind()` 方法的一个变体。使用 `.bind()` 时，选择器匹配的元素会附加一个事件处理函数，而以后再添加的元素则不会有。为此需要再使用一次 `.bind()` 才行。

- 从 jQuery 1.7 开始，不再建议使用 `.live()` 方法。请使用 `.on()` 来添加事件处理。

- 参数

```
live(type, [data], fn)

type:一个或多个事件类型，由空格分隔多个事件。
fn:要从每个匹配元素的事件中反绑定的事件处理函数
data:传递给事件处理函数的附加参数
false:设置为false会使默认的动作失效。

$('.clickme').live('click', function() {
  alert("Live handler called.");
});
```

- 事件委托
`.live()` 方法能对一个还没有添加进DOM的元素有效，是由于使用了事件委托：绑定在祖先元素上的事件处理函数可以对在后代上触发的事件作出回应。传递给 `.live()` 的事件处理函数不会绑定在元素上，而是把他作为一个特殊的事件处理函数，绑定在 DOM 树的根节点上。当点击新的元素后，会依次发生下列步骤：

1. 生成一个`click`事件传递给 来处理
2. 由于没有事件处理函数直接绑定在 `$('.clickme')` 上，所以事件冒泡到DOM树上
3. 事件不断冒泡一直到DOM树的根节点，默认情况下上面绑定了这个特殊的事件处理函数。
4. 执行由 `.live()` 绑定的特殊的 `click` 事件处理函数。
5. 这个事件处理函数首先检测事件对象的 `target` 来确定是不是需要继续。这个测试是通过检测 `$(event.target).closest('.clickme')` 能否找到匹配的元素来实现的。
6. 如果找到了匹配的元素，那么调用原始的事件处理函数。

由于只有在事件发生时才会在上面的第五步里做测试，因此在任何时候添加的元素都能够响应这个事件。


3. `delegate`

- 概述
指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
使用 `delegate()` 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。

- jQuery 3.0中已弃用此方法，请用 `on()`代替。

- 参数

```
delegate(selector,[type],[data],fn)

selector:选择器字符串，用于过滤器触发事件的元素。
type:附加到元素的一个或多个事件。 由空格分隔多个事件值。必须是有效的事件。
fn:当事件发生时运行的函数
data:传递到函数的额外数据

$("div").delegate("button","click",function(){
  $("p").slideToggle();
});
```


4. `on`
- 概述
在选择元素上绑定一个或多个事件的事件处理函数。
`on()`方法绑定事件处理程序到当前选定的jQuery对象中的元素。

- 参数

```
on(events,[selector],[data],fn)

events:一个或多个用空格分隔的事件类型和可选的命名空间，如"click"或"keydown.myPlugin" 。
selector:一个选择器字符串用于过滤器的触发事件的选择器元素的后代。如果选择的< null或省略，当它到达选定的元素，事件总是触发。
data:当一个事件被触发时要传递event.data给事件处理函数。
fn:该事件被触发时执行的函数。 false 值也可以做一个函数的简写，返回false。

$("p").on("click", function(){
alert( $(this).text() );
});
```

5. `unbind` `die` `undelegate` `off`都是取消绑定事件。

- `off`

- 概述
在选择元素上移除一个或多个事件的事件处理函数。
`off()` 方法移除用`.on()`绑定的事件处理程序。

- 参数

```
off(events,[selector],[fn])

events:一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如"click", "keydown.myPlugin", 或者 ".myPlugin".
selector:一个最初传递到.on()事件处理程序附加的选择器。
fn:事件处理程序函数以前附加事件上，或特殊值false.

$("p").off() //Remove all event handlers
$("body").off("click", "p", foo) //Remove just one previously bound handler
```

---

- 由于在新版本中`bind/unbind/delegete/undelegete/live/die` 都已经弃用，推荐使用`on/off`

---

- on 的事件代理写法

```
// 事件委托/代理，让div下所有的span绑定事件，可以把事件绑定到div上
$('div').on('click', 'span', function(e){
    console.log(this); //被点击的span
    console.log(e);
});
```


## 题目4：jQuery 如何展示/隐藏元素？

```
$(selecctor).hide(speed,callback);
$(selecctor).show(speed,callback);
```


## 题目5： jQuery 动画如何使用？

- 渐变

`fadeIn` 通过淡入的方式显示匹配元素

```
$('div').fadeIn('slow', function(){})
```

`fadeOut` 通过淡出的方式隐藏匹配元素

```
$('div').fadeOut('slow', function(){})
```

`fadeToggle` 通过匹配的元素的不透明度动画，来显示或隐藏它们

```
$('div').fadeToggle('slow', "linear")
```

- 滑动

`slideDown` 用滑动动画显示一个匹配元素

```
$('div').slideDown('slow', function(){})
```

`slideUp` 用滑动动画隐藏一个匹配元素

```
$('div').slideUp('slow', function(){})
```

- 自定义animate

```
$('div').animate( properties [, duration ] [, easing ] [, complete ] )
properties：是一个CSS属性和值的对象，动画将根据这组对象移动。
duration：动画将运行多久。默认值: "normal"。
easing:表示过渡使用哪种缓动函数，jQuery自身提供"linear" 和 "swing"。
complete：在动画完成时执行的函数
```

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
无参数时，获取值
有参数时，设置值
.attr(attributeName)
获取元素特定属性的值
.attr(attributeName, value)
为元素属性赋值
```