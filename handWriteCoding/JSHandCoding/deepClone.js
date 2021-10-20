// 1. JSON.parse(JSON.stringify(obj))
/*
有很多局限性：
    1. 会忽略 undefined
    2. 会忽略symbol
    3. 不能拷贝函数，因为函数不能序列化
    4. 不能拷贝不可枚举属性
    5. 不能拷贝原对象的原型链
    6. 拷贝 RegExp 引用类型会变成控对象
    7. 拷贝 Date 类型会变成空字符串
    8. 对象中含有 NaN，Infinity，-Infinity 时，JSON 序列化结果是 null
    9. 无法解决循环引用的对象，即 obj[key] = obj; 也就是对象成环。会报错
*/

let obj = {
    a: 1,
    b: new Date(),
    c: /\s/g,
    d: NaN,
    aa: undefined,
    bb: Symbol(2),
    cc: function () {console.log(123)}
};
// obj.e = obj;
let objClone = JSON.parse(JSON.stringify(obj));
console.log(objClone);
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
