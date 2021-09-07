// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     })
// });
// p1.then(res => {
//     console.log(res);
//     return 2;
// }).then((resp) => {
//     console.log('链式调用：', resp);
//     return 3;
// }).then((res) => {
//     console.log('第三次调用 then：', res);
//     throw new Error('报错了');
// }).catch((err) => {
//     console.log('error：',err);
// })

const thenable = {
  then(resolve, reject) {
    reject('出错了');
  },
};
Promise.reject(thenable).catch((e) => {
  console.log(e === thenable);
}).catch(err=>console.log(err));