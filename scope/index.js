// function foo(str, a) {
//     eval(str);
//     console.log(a, b); // 词法欺骗而来的 b
// }

// var b = 2;
// foo("var b=3", 1);
// console.log(b); // 全局作用域中的b

// let obj = {
//     a: 4,
//     b: 5,
//     c: 6
// };

// with(obj) {
//     a=1;
//     b=2;
//     c=3;
// }

// console.log(obj);

function foo(obj) {
    with(obj) {
        a=2;
    }
}

let o1 = {
    a:1
}
foo(o1);
console.log(o1.a);

let o2 = {
    b:2
};
foo(o2);
console.log(o2.a);
console.log(a); // 因为 o2 中没有声明 a 的属性，a被泄漏到全局作用域中了