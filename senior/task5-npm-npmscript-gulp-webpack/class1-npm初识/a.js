function sayHello(name) {
    console.log('hello' + name);
};

exports.sayHello = sayHello;
//exports是一个对象，sayHello是对象上的一个方法
