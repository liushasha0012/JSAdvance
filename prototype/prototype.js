var MysourceObject = {};
var myObject = Object.create(MysourceObject);
myObject.a = 2;
console.log(myObject.a);

console.log(MysourceObject.a);

// console.log('a' in myObject);

// Object.defineProperty(MysourceObject, 'a', {
//     enumerable: false
// });
// for(let k in myObject) {
//     console.log('key', k);
// }
// console.log('a' in myObject);


