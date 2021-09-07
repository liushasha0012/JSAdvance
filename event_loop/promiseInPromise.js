/*
Promise 的回调中嵌套了 Promise，微任务的执行顺序是怎样的？
*/
Promise.resolve().then(() => {
    console.log(1);
    Promise.resolve().then(() => {
        console.log(11);
    }).then(() => {
        console.log(22);
    }).then(() => {
        console.log(33);
    })
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
});


// Promise 成功之后，才会执行 then 回调，then 的回调函数才会进入微任务队列。
// then 的链式调用：后一个 then 方法必须等到前一个 then 方法返回的 Promise 状态改变之后，才会调用里面的回调函数

