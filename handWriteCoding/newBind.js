
Function.prototype.newBind = function(context) {
    let args = Array.prototype.slice.call(arguments,1);
    let _this = this;
    return function() {
        let finalArgs = args.concat(args, ...arguments)
        _this.apply(context, finalArgs);
    }
};

function fn() {
    console.log(this.a);
}

let obj = {
    a: 1,
};
let obj2 = {
    a: 10
}
let a = 2;
fn.newBind(obj)();
fn.newBind(obj2)();

