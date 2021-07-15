// 定义没有依赖的模块
define(function(require, exports, module){
    let msg = "葡宝是世界上最乖巧的小猫咪了";
    function showCMDMsg() {
        console.log('这里是CMD模块没有依赖的时候定义模块的方法：', msg);
    }
    exports.showCMDMsg = showCMDMsg;
})