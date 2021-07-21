function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve('嘻嘻嘻嘻'), ms);
    });
}

async function test(ms) {
    await timeout(ms).then((res)=>{ // timeout() 返回的是一个 promise 实例，如果没有使用then，就没有给这个promise 实例 传成功的回调，但是会执行promise传入的函数。
        console.log('我来看看是谁没有在学习', res);
    });
    console.log('函数在', ms/1000,'秒之后执行了'); // 等 promise 的状态成为已决之后，async 函数才会继续执行后面的代码，所以2秒后会打印这句话。
}

test(2000).then(()=>{
    console.log('为什么不可以这么写呢？');
});


