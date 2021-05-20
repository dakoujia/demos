// bind
Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw Error("not a function");
  }
  let self = this;
  const args = [...arguments].slice(1);
  return function () {
    return self.apply(context, [...args, ...Array.prototype.slice.call(arguments)])
  };
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
console.log(objA.say.myBind(objB)("wawawa"));