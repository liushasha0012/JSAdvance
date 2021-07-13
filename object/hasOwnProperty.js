let obj = Object.create(null);

console.log(obj instanceof Object);
obj.a = 4;
console.log(obj);

console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));

let obj1 = {
    a: 1,
}
console.log(obj1.hasOwnProperty('a'));

let arr = [1,2,3,4];
arr.name = '数组';
for(let i in arr) {
    console.log(i, arr[i]);
}
