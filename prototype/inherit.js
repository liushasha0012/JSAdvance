function Foo(name) {
    this.name = name;
}

Foo.prototype.sayName = function() {
    console.log('my name is', this.name);
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype); // Bar.prototype 是一个以Foo.prototype 为原型的对象

Bar.prototype.myLabel = function() {
    console.log('this is my name:', this.name, '\nthis is my label:', this.label);
}

var a = new Bar('grape', 'little cat');
console.log(Object.getPrototypeOf(a) === Bar.prototype);
// a.sayName();
// a.myLabel();

// console.log(a instanceof Function);

// function A (a) {
//     this.a = a;
// }
// var obj = {

// };
// var B = A.bind(obj, 1);

// var b = new B();
// console.log(A.prototype);

