let s1 = Symbol('s1');
let s2 = Symbol('s2');
class privateMethods {
    constructor(name) {
        this.name = name;
    }
    public() {
        this[s1]();
    }
    [s1]() {
        console.log('这是我的名字哦：', this.name);
    }
}

let class1 = new privateMethods('apply');
class1.public();
class1[s1]();

