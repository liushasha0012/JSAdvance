if(!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        var curried = [].slice.call(arguments, 1);
        var bound = function()  {
            fn.apply(
              !this || this === (window || global) ? obj : this,
              curried.concat.call(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}
function foo() {
    console.log('name：' + this.name);
}

var obj = {name: 'obj'};
var obj2 = {name: 'obj2'};
var obj3 = {name: 'obj3'};

var fooObj = foo.softBind(obj);

obj2.foo = fooObj;
obj2.foo();

fooObj.call(obj3);

setTimeout(fooObj, 1000);