class firstClass {
    constructor(name, age,...args) {
        this.name = name;
        this.age = age;
        this.args = [name, age, ...args];
    }
    sayHi() {
        console.log(`Hello, my name is ${this.name}`);
    }
    get name() {
        return '只有葡萄';
    }
    set name(value) {
        console.log('看看是哪个小妖精：', value);
    }
    *[Symbol.iterator]() {
        for(let i of this.args) {
            yield i+100;
        }
    }
    static speak() {
        return '我来说句公道话';
    }
}

let lihua = new firstClass('Hua Li', 20, '一', '二', '三');
lihua.sayHi();
lihua.name = '哈哈';
for(let key of lihua) {
    console.log('key===', key);
}
console.log(firstClass.speak());
// 类的数据类型是函数
console.log(typeof firstClass);

// 类中定义的方法，都是不可枚举的
console.log(Object.getOwnPropertyDescriptors(firstClass.prototype));
console.log(Object.getOwnPropertyNames(firstClass.prototype));

// 类的表达式
let myClass = class testClass {
    sayClassName() {
        console.log(testClass.name);
    }
}
let test = new myClass();
test.sayClassName();

let class1 = new class Me {
    // constructor(name) {
    //     this.name = name;
    // }
    name = 'ahha';
    static propStatic = '静态属性';
    sayName() {
        console.log('Hi,', this.name);
        console.log(Me.propStatic);
    }
}('李四');
class1.sayName();