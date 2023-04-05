console.log('start');
// start 0 1 2 end promise0 promise1 promise2 setTimeout

setTimeout(()=>{
    console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  resolve();
})
  .then(() => {
    console.log('promise0');
  })
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

console.log('end');