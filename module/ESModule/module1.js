export let count = 1;
export function incCounter() {
    count++;
}
export let b=3;
setTimeout(() => {
    b=4
}, 500)

console.log('模块被加载了');