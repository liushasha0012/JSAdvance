// function ObjConstructor(name) {
//   this.name = name;
//   // return {
//   //     name,
//   //     age: 18,
//   // }
// }

// let obj = new ObjConstructor('shasha.liu');
// console.log(obj);

function foo(a) {
    this.a = a;
}
const obj1 = {};
var baz = foo.bind(obj1); // baz 里的 this 被硬性指向了 obj1
baz(2);
console.log(obj1.a);

var bar = new baz(3); // new 使得 baz 中的this 指向了新创建的对象。
console.log(obj1.a);
console.log(bar.a);


