// 手写 new
/*
new 的执行过程
1. 创建一个空对象
2. 将函数中的 this 绑定到这个空对象上
3. 空对象的 [[prototype]] 和函数的 prototype 会进行关联
4. 如果函数没有返回其它对象，就会返回这个新对象
*/

function myNew(Fn) {
    let obj = Object.create(Fn.prototype);
    let args = [...arguments].slice(1);
    Fn.call(obj, ...args);
    if (Fn() instanceof Object) {
        return Fn();
    }
    return obj;
}

function Constructor(b) {
    this.a = 2;
    this.b =b;
}

let obj = myNew(Constructor,4);
console.log(obj);