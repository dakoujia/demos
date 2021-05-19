// 冒泡排序
function bubbleSort(array) {
  let temp = null;
  for (let i = 0; i < array.length; i++) {
    console.log("i: ", i);
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log("j: ", j);
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(bubble([1, 44, 33, 4, 9, 10, 9, 2, 5]));