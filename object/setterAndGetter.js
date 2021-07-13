let obj = {
    a: 4,
}

Object.defineProperty(obj, 'a', {
    vlaue: 5,
    writable: false,
    
});
obj.a = 6;
console.log(obj.a);

Object.defineProperty(obj, 'a', {
  set: function (val) {
    this._a = val * 2;
  },
  get: function() {
    return this._a;
  },
});
obj.a = 20;
console.log(obj.a);

