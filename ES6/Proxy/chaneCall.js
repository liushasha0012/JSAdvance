var pipe = function (value) {
  var funcStack = [];
  var oproxy = new Proxy(
    {},
    {
      get: function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, func) {
            return func(val);
          }, value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      },
    }
  );

  return oproxy;
};

var double = (n) => n * 2;
var pow = (n) => n * n;
var reverseInt = (n) => n.toString().split('').reverse().join('') | 0;

pipe(3).double.pow.reverseInt.get; // 63