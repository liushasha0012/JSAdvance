// 用 Reflect 和 Proxy 实现观察者模式
let queueObservers = new Set();
let observe = fn => queueObservers.add(fn);
let observerable = obj => new Proxy(obj, {set, get});

function set(target, propKey, value, receiver) {
    let result = Reflect.set(target, propKey, value, receiver);
    queueObservers.forEach((observe) => observe());
    return result;
}
function get(target, propKey,receiver) {
    let result = Reflect.get(target, propKey, receiver);
    return result;
}
let objTest = {
    name: '章三',
    age: 20
}
function print() {
    console.log(`${person.name}, ${person.age}`);
}
let person = observerable(objTest);
observe(print);
person.name = '里斯';