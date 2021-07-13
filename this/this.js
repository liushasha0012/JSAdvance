// this 并不是简单的指向函数本身。
// 通过下面这个例子看，如果foo 是指向函数本身的话， foo.count 应该是4。
// 因为函数是一个对象，foo.count 相当于给函数对象添加了一个属性，所以this 指向的是函数对象本身。
// 结果显然不是这样，所以说 this 并不是指向函数自身这么简单的定义。
// 能否理解 this 为指向当前作用域的对象？ ❌。作用域对象是无法被 JS 代码访问的，是存在于 JS 引擎里面的

function foo(i) {
    console.log(i);

    // this.count++;
    foo.count++;
}
foo.count = 0;

for(var i=0; i<10;i++) {
    if(i>5) {
        foo(i);
    }
}
console.log(foo.count); // 0
// console.log(count); //NaN