// async 函数的错误捕获机制
async function errTest() {
    throw new Error('阿呀呀，出错啦');
}

errTest().then(()=>{console.log('这里是成功的回调');},(err) => {
    console.log('失败回调',err);
})

// 理解一下promise
/*
1. promise 接受一个函数作为参数，这个函数里面做一些异步的操作。并且这个函数接受两个参数，第一个参数是表示成功的回调resolve，第二个参数是表示失败的回调reject
2. 当执行 .then 方法的时候，promise 才会去执行异步操作，then 方法接受两个参数，第一个参数就是表示resolve的函数，这个函数会接受resolve传来的参数，第二个参数是reject 函数，会接受失败的结果。
*/
