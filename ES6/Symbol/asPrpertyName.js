// Symbol 作为对象属性值，如何被获取键名
let obj = {
    [Symbol('key_1')]: 'symbol property',
    a: 1,
    b: 2,
    [Symbol('key_2')]: 'symbol property tow'
};
// 方法一：获取所有Symbol属性名
let key1 = Object.getOwnPropertySymbols(obj);
console.log(key1);
// 方法二：获取对象所有类型的键名
let key2 = Reflect.ownKeys(obj);
console.log(key2);

const x = {};
x[Symbol.replace] = (...s) => console.log(s);
'Hello'.replace(x, 'World'); // [ 'Hello', 'World' ]