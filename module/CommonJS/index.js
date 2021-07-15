const {a, foo} = require('./module1.js');
const {c, b, bar} = require('./module2');
// const module2 = require('./module2');

console.log('运行模块1:', a);
foo();
console.log('运行模块2:', c, b);
bar();

