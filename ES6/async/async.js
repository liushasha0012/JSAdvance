function spawn(genF) {
  return new Promise(function (resolve, reject) {
    var gen = genF(); // iterator 对象
    function step(nextF) {
      try {
        var next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        function (v) {
          step(function () {
            return gen.next(v);
          });
        },
        function (e) {
          step(function () {
            return gen.throw(e);
          });
        }
      );
    }
    step(function () {
      return gen.next(undefined);
    });
  });
}

async function fn(args) {
    await args;
}
// 等同于
function fn(args) {
  return spawn(function* () {
    yield args
  });
}
fn(1);
// fn() => spawn(genFn) => Promise 对象