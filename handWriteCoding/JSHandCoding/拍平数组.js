function flat(arr) {
  let res = [];
  for (let i = 0; i++; i < arr.length) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      res.concat(flat(arr[i]));
    }
  }
  return res;
}
function flat1(arr) {
  let res = [];
  let arrString = JSON.stringify(arr);
  let str = arrString.replace(/\[|\]/g, '');
  for (let i = 0; i < str.length; i++) {
    if (!str[i]) {
      res.push(str[i]);
    }
  }
  return res;
}

let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(flat1(arr));