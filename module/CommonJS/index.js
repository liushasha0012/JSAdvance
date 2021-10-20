const {a, foo} = require('./module1.js');
const {c, b, bar} = require('./module2');
const moduleThree = require('./module3.js');
foo();
bar();

console.log(moduleThree.num);
moduleThree.incNum();
moduleThree.incNum();
console.log('计算之后的值：', moduleThree.num);

