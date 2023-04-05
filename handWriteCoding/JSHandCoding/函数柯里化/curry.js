// 函数柯里化 —— 简单版
// 简单版的柯里化，只能让函数转换一次，像 fn()()就会报错
function curry(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
        let newArgs = args.concat([...args]);
        return fn.apply(this, newArgs);
    }
}

// 进阶版
// 通过递归来解决 fn()()连续调用的问题
// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1);
//   return function () {
//     return fn.apply(this, args.concat([].slice.call(arguments)));
//   };
// }

// function curry(fn, length) {
//   length = length || fn.length;

//   var slice = Array.prototype.slice;

//   return function () {
//     if (arguments.length < length) {
//       var combined = [fn].concat(slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else {
//       return fn.apply(this, arguments);
//     }
//   };
// }

// add(1)(2)(3)

function add(x) {
    return function(y) {
        return function(z) {
            return x+y+z
        };
    }
}
// console.log(add(1)(2)(3));
// add() 返回一个函数 add()()还是返回一个函数 

function _add() {
    let args = [...arguments];
    let inner = function() {
      // 这里是为了让几次传入的参数进行拼接，并且用 args 闭包变量存储起来，
      // 每一个返回的 inner 都可以使用这个闭包变量
      args = args.concat([...arguments]);
      return inner;
    }
    // inner.toString = function () {
    //   return args.reduce((prev, next) => {
    //     return prev + next;
    //   });
    // };
    return inner;
}
// _add(1)(2)(3);

// console.log('_add(1)(2)(3) 返回值：', _add(1)(2)(3));

function _curry(fn, args) {
    let length = fn.length;
    let _args = args || [];
    let inner = function() {
        _args = _args.concat(Array.prototype.slice.call(arguments));
        if (_args.length < length) {
          // 参数还没有传够，需要递归返回这个函数
          return _curry(fn, _args);
        } else {
          fn.apply(null, _args);
        }
    }
    return inner;
}

function addFn(x,y,z) {
    let args = [...arguments];
    return args.reduce((prev, next) => {
        return prev + next;
    })
}

let _addFn = _curry(addFn, [1])
console.log(_addFn(2,3))


