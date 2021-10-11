let arr = [1, 2, 3];

// arr['name'] = '葡萄';
// arr['2'] = '小猫咪';
// console.log(arr, arr.length, arr[2]);

// reduce 的用法
let sum = arr.reduce((prev, current) => {
    return prev + current;
});
console.log('sum===', sum)

let arr1 = [1,2,3,4,4,1]
let newArr = arr1.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
},[])
console.log(newArr);// [1, 2, 3, 4]
