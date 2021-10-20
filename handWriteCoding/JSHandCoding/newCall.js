Function.prototype.newCall = function (context) {
  let args = [...arguments].slice(1);
  let key = Symbol('key');
  context[key] = this;
  var res = context[key](...args);
  delete context[key];
  return res;
};

function fn(m,n) {
  console.log(this.a);
  console.log(m,n);
}
var a = 10;
fn(10,10);
let obj1 = { a: 2 }
let obj2 = { a: 3 };
fn.newCall(obj1,4,5);
fn.newCall(obj2,6,7);
