// function isValid(str) {
//   let result = '';

//   for (let i = 0; i <= str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let s = str.slice(i, j);
//       let temp = s.split('').reverse().join('');
//       if (temp === s) {
//         result = result.length > temp.length ? result : temp;
//       }
//     }
//   }

//   return result;
// }
// console.log(isValid('cbbad'));
var longestPalindrome = function (str) {
  let resLeft = 0;
  let resRight = 0;
  let maxLen = 0;
  let i = 0;
  while (i < str.length) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && str[left] === str[i]) {
      left--;
    }
    while (right < str.length && str[right] === str[i]) {
      right++;
    }
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    while (maxLen < right - left -1) {
      maxLen = right-left-1;
      resLeft = left+1;
      resRight = right-1;
    }
    i++
  }
  return str.substring(resLeft, resRight + 1);
};
console.log(longestPalindrome('cbbabb'));