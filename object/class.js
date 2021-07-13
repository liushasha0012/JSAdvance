/*
class 只是语法糖，本质上还是 Function
*/

class Obj {}

console.log(Obj instanceof Function);
console.log(Object.getPrototypeOf(Obj))