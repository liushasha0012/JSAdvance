console.log('模块2 运行了');

exports.c = 3;

module.exports = {
    b: 2,
    bar: function() {
        console.log('这里是模块2');
    }
}