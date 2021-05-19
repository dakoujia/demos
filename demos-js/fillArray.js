// 如下：{1:222, 2:123, 5:888}，
// 请把数据处理为如下结构：
// [222, 123, null, null, 888, null, null, null, null, null, null, null]。

let source = { 1: 222, 2: 123, 5: 888 };
let result = [];
let keys = [];

for (let i in source) {
  keys.push(i);
}
for (let j = 0; j < 12; j++) {
  if (keys.includes(String(j + 1))) {
    result.push(source[j + 1]);
  } else {
    result.push(null)
  }
}

console.log(result);

let obj = { 1: 222, 2: 123, 5: 888 };
let arr = Array.from({ length: 12 }, (item, index) => obj[index + 1] || null)
console.log(arr);