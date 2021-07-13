/*
原型继承的方式存在的缺点：
1、通过一个实例改变了原型上的属性时，所有实例上的该属性都会发生改变
2、构造 child 实例的时候，无法向 Parent 传参
*/

function Parent() {
    this.name = ['jack', 'eason'];
}
Parent.prototype.sayName = function() {
    console.log('hi, sayName：', this.name);
}

function Child() {

}
Child.prototype = new Parent();

var child1 = new Child();
var child2 = new Child();
child1.sayName();
child2.sayName();
console.log(child1.name);
child1.name.push(123);
console.log(child1.name);
child1.sayName();
child2.sayName();