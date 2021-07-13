/*
组合继承（结合构造函数继承和原型继承两种方式的一种继承方法）
1、使用了原型继承，所以可以访问 Parent 原型上的属性和方法
2、使用了构造函数继承，所以可以为每个实例单独添加引用类型的属性，并且可以向 Parent 传参
*/
function Parent(name) {
    this.name = name;
    this.home = "mommy's home";
}

Parent.prototype.sayName = function() {
    console.log('My name is：', this.name);
};

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = new Parent(); // 此时，Child.prototype.constructor === Parent
Child.prototype.constructor = Child;

var child1 = new Child('葡萄小宝贝', '10个月大啦');
var child2 = new Child('葡宝', '10个月大');

child1.sayName();
child2.sayName();

function test(name, age, home) {
    console.log('我的名字是：', name, '\n', '我现在',age, '\n我的家是', home)
}
test(child1.name, child1.age);
test(child2.name, child2.age);

child1.name = 'grape';
child1.home = "妈妈的家";
test(child1.name, child1.age, child1.home);
child1.sayName();

console.log('---------------child2---------------');

test(child2.name, child2.age, child2.home);
child2.sayName();

