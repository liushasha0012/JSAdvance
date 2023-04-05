// "1+2-3+12-10"
// 写个函数 
// 输入：已知格式正确的加减表达式，没有括号
// 输出：表达式计算结果

// function calculate(str) {
//     let addArr = str.split('+');
//     let res = 0;
//     for(let i=0; i<addArr.length; i++) {
//         if(!isNaN(+addArr[i])) {
//             res += +addArr[i];
//         } else {
//             let reduce = addArr[i].split('-');
//             res += +reduce[0]
//             for (let j = 1; j < reduce.length; j++) {
//               res -= +reduce[j];
//             }

//         }
//     }
//     return res;
// }

// console.log(calculate('-11-1-333-1-1-2'));
// console.log(-11 - 1 - 333 - 1 - 1 - 2);
function calculate(str) {
    let num = '';
    let index = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] !== '+' && str[i] !== '-') {

        } else {
            index = i;
        }
    }
}