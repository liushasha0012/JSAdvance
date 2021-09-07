/*
将一个 promise 对象作为另一 promise 的 resolve 的参数。
*/

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error('嘻嘻嘻，这个 promise 出错啦'));
    }, 3000)
});
let p2 = new Promise((resolve, reject) => {
    resolve(p1);
});

p2.then((res) => {
    console.log('*********',res);  // p2.then 会拿到 p2 这个 promise 的执行结果，并且接受p1作为参数
}).catch(err => {
    console.log('报错了', err);
}) // p2 的状态失效了，3秒后，p1 会报错，所以这里会捕获到 p1 报的错误