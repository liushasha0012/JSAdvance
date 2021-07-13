// 常量属性
var obj = {
    a: 2
};

Object.defineProperty(obj, 'a', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});

obj.a = 3;
console.log(obj.a);

// 不可拓展

var obj2 = {
    a: 1,
};
Object.preventExtensions(obj2);
obj2.b = 3;
console.log(obj2.b);

// 密封对象
var obj3 = {
    a: 4,
};
Object.seal(obj3);
obj3.b = 5;
obj3.a = 6;
console.log(obj3);
delete obj3.a;
console.log(obj3);

// 冻结对象
var obj4 = {
    name: '刘',
    target: obj3,

}
Object.freeze(obj4);
obj4.name = '葡';
console.log(obj4.name);
delete obj4.name;
console.log(obj4);
obj3.a = 10;
console.log(obj4);