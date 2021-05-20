// 父构造函数
function Parent(name) {
  this.name = name;
};

Parent.prototype.sayName = function () {
  console.log("parent name is :", this.name);
}

// 子构造函数
function Child(name, parentName) {
  Parent.call(this, parentName); // 继承父类的this
  this.name = name;
}

// 将父构造函数的实例赋值给子构造函数的原型
Child.prototype = new Parent();


// 父类验证
let parent = new Parent('parent');

parent.sayName();


// 子类验证 继承了父类的方法sayName
let child = new Child('son');

child.sayName()
