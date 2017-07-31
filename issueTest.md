问题9：对String做扩展，实现如下方式获取字符串中频率最高的字符

var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
问题10： instanceOf有什么作用？内部逻辑是如何实现的？

继承相关问题
问题11：继承有什么作用?

问题12： 下面两种写法有什么区别?

//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);
问题13： Object.create 有什么作用？兼容性如何？

问题14： hasOwnProperty有什么作用？ 如何使用？

问题15：如下代码中call的作用是什么?

function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    this.age = age;
}
问题16： 补全代码，实现继承 

function Person(name, sex){
    // todo ...
}

Person.prototype.getName = function(){
    // todo ...
};    

function Male(name, sex, age){
   //todo ...
}

//todo ...
Male.prototype.getAge = function(){
    //todo ...
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.printName();