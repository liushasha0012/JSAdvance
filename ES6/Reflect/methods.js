// get
let obj1 = {
    foo: 1,
    bar: 2,
    get baz() {
       return this.foo + this.bar
    },
    set baz(value) {
        return this.foo = value;
    },
};

let receiverObj = {
    foo: 4,
    bar: 4,
};

console.log('obj1.baz ===', Reflect.get(obj1, 'baz', receiverObj));

// set
Reflect.set(obj1, 'baz', 5, receiverObj);
console.log('obj1.foo ===', Reflect.get(obj1, 'foo'));
console.log('receiverObj.foo ===', Reflect.get(receiverObj, 'foo'));

// has
console.log('Reflect.has', Reflect.has(obj1, 'foo'));

// deleteProperty
console.log('Reflect.deleteProperty', Reflect.deleteProperty(obj1, 'bar'));
console.log(obj1.bar);



