// 柯里化
function curry(fn, args = []) {
  let length = fn.length;
  return function () {
    let newArgs = [...args, ...Array.prototype.slice.call(arguments)];
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  }
}


function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

let a = multi(2)(3)(4);
let b = multi(2, 3, 4);
let c = multi(2)(3, 4);
let d = multi(2, 3)(4);

console.log(a, b, c, d);