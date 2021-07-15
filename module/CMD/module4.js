// 引入依赖模块
define(function(require, exports, module) {
    let m1 = require('./module1.js');
    m1.showCMDMsg();
    let m3 = require('./module3.js');
    function showM4() {
        console.log('这里是模块4在执行，它引入了模块3的变量', m3.API_KEY);
    }
    exports.showM4 = showM4;
    // 异步引入 m2
    require.async('./module2.js', function(m2) {
        m2.showM2();
    });
})
