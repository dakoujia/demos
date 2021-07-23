function myInstanceof(left, right) {
  if (left === null) return false;
  let proto = left.__proto__;
  let prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    // 通过原型链查找
    proto = proto.__proto__;
  }
}

function A() { };
let a = new A();

let b = [];

console.log(myInstanceof(a, A));
console.log(myInstanceof(b, Array));
console.log(myInstanceof(a, Array));
console.log(myInstanceof(null, Object));