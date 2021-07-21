function timeout1(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve('我是第一个 timeout'), ms);
    })
}
function timeout2(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve('我是第二个 timeout'), ms);
  });
}

async function callTimeout() {
    await timeout1(1000).then((res)=>{
        console.log(res);
    });
    // return '这里先不要执行了';
    await timeout2(2000).then((res)=>{
        console.log(res);
    });
    return '这里先不要执行了';
}
callTimeout().then((res)=>{
    console.log(res, '康康执行了几个 timeout');
});