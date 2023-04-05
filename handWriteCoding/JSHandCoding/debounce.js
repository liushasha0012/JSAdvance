// 防抖函数：事件触发后，会间隔一定时间才执行，如果在这个时间内反复触发了，则及时会重新开始
// 应用：输入框联想、窗口的 resize 事件监听等

function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        },delay)
    }
}
