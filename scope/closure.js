// function foo() {
//     var a = 3;
//     return function bar() {
//         console.log(a);
//     }
// }
// foo()();
// 是否可以理解为闭包的作用是：向外部暴露函数内部的东西，这就是模块模式

// for(var i=1; i<=5;i++) {
//     // setTimeout(function timer() {
//     //     console.log(i)
//     // }, i*1000);
//     (function(j){
//         setTimeout(() => {
//             console.log(j)
//         }, j*1000);
//     })(i)

// }

// 闭包模块
// var MyModules = (function manager() {
//     var modules = {};

//     function define(name, deps, impl) {
//         modules[name] = impl.apply(impl, deps);
//     }

//     function get(name) {
//         return modules[name];
//     }

//     return {
//         define: define,
//         get: get
//     }
// })();

// MyModules.define('foo', [], function() {
//     function greeting () {
//         console.log('hello, this is a foo module');
//     }
//     return {
//         greeting: greeting
//     }
// });

// MyModules.define('bar', ['foo'], function() {
//     function daxie() {
//         foo.greeting();
//         console.log('hhh');
//     }
//     return {
//         daxie: daxie
//     }
// });
// var foo = MyModules.get('foo');
// var bar = MyModules.get('bar'); 
// foo.greeting();
// bar.daxie();

// foo.greeting = function () {
//     console.log('哈哈哈，我把你改了');
// }
// foo.greeting();

// 暴露出来的函数可以任意被修改


function foo() {
    console.log(a);
}

function bar() {
    var a = 3;
    foo();
}
var a = 2;
bar();
