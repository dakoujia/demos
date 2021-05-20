function myNew(fn) {
  // 定义一个对象
  let obj = {};
  // 判断fn显式原型是否null
  if (fn.prototype !== null) {
    // 将函数显示原型赋值给隐式原型
    obj.__proto__ = fn.prototype;
  }
  // 获取参数
  let args = [...arguments].slice(1);
  let ret = fn.apply(obj, args);

  return ["object", "function", null].includes(typeof ret) ? ret : obj;
}

// 验证
function A() { };
let a = myNew(A);

console.log(JSON.stringify(a));
a.name = "hshh";

console.log(a.name);