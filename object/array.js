// let arr = ['liu', 'sha', 'sha'];

// arr['name'] = '葡萄';
// arr['2'] = '小猫咪';
// console.log(arr, arr.length, arr[2]);

let obj = {
    a: 1,
    foo: function() {
        console.log(this.a);
    }
}

let discriptorA = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(discriptorA);
Object.defineProperty(obj, 'a', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(obj.a);
let discriptorFoo = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(discriptorFoo);