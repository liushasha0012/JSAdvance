// 使用 module.exports 暴露模块
define(function(require, exports, module){
    let m2 = "这里是模块2";
    function showM2() {
        console.log(m2);
    }
    module.exports = {showM2}
})