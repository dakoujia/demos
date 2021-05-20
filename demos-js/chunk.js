let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(array = [], size = 4) {
  let length = array.length;
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size));

  //   while (index < length) {
  //     result[resIndex++] = array.slice(index, (index += size))
  //   }

  // 遍历赋值
  for (let i = 0; i < result.length; i++) {
    result[i] = array.slice(index, (index += size));
  }
  return result
}

console.log(chunk(a));