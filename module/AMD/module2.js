define(['./module1.js'], function(m1) {
    let age = 'ten months';
    function intro() {
        m1.showMsg();
        console.log('葡萄的年龄：', age);
    }
    return { intro };
})