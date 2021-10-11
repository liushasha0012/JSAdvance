let proxy1 = new Proxy({
    _prop: 'foo',
    prop: 'name'
}, {
    get(target, property) {
        return target[property];
    },
    set(target, key, value) {
        console.log('setting');
        target[key] = value;
    },
    has(target, propKey) {
        console.log('has');
        return true;
    },
    deleteProperty(target, propKey) {
        console.log('delete');
        if (propKey[0] === '_') {
            throw new Error('非法删除');
        }
        return true;
    }
});
delete proxy1.prop;
console.log(proxy1.prop);
delete proxy1._prop;
