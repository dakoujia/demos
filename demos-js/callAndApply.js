// call
Function.prototype.myCall = function (context) {
  // 先判断空
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  // 将当前this指向传入的上下文
  context.fn = this;
  // 获取参数
  const args = [...arguments].slice(1);
  // 调用函数
  const result = args ? context.fn(...args) : context.fn();
  // 删除fn
  delete context.fn;
  return result;
};

// apply
Function.prototype.myApply = function (context) {
  // is undefined or null
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = args ? context.fn(args) : context.fn();
  delete context.fn;
  return result;
};
let objA = {
  name: "A",
  say: function (skill) {
    this.skill = skill;
    console.log("name: " + this.name, "skill: " + this.skill);
  },
};
let objB = {
  name: "B",
};
console.log(objA.say("sing"));
console.log(objA.say.myCall(objB, "dance"));
console.log(objA.say.myApply(objB, "speak"));