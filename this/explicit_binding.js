function foo() {
    console.log(this.a);
}
var a=20;
// // foo()
// (function() {
//     "use strict";
//     foo();
// })()
// console.log(a);

function bar(fn) {
    var a = 2;
    fn();
}
bar(foo);
