/*
* 构造函数继承
1、每个实例对象可以拥有自己单独的属性，原型上的引用类型的属性不会被所有实例共享
2、可以向 Parent 传参

缺点：不可以访问 Parent 原型上的方法和属性
*/

function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log('My name is ', this.name);
}

function Child(name,age) {
    Parent.call(this, name);
    this.age = age;
}

var child1 = new Child('putao', '10 months');
var child2 = new Child('葡萄', '10个月大啦');

// child1.sayName();
console.log(child1.name, child1.age);
console.log(child2.name, child2.age);