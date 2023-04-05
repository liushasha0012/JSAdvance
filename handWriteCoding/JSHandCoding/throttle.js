// 节流的概念：指定的间隔时间内，频繁触发某事件时，事件仅触发一次。

function throttle(fn, interval) {
  let timer = null;
  let start = 0;
  return function (...args) {
    let now = new Date().getTime();
    let remainTime = interval - (now - start);
    if (remainTime <= 0) {
      // 需要立刻执行一次
      fn.apply(this, args);
      start = now;
    } else {
      // 延迟 remainTime 执行
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, remainTime);
    }
  };
}
