// Event loop
const p1 = new Promise((resolve, reject) => {
  console.log("111111111");
  setTimeout(() => {
    console.log("44444444444");
  }, 0);
  new Promise((resolve1, reject1) => {
    console.log("22222222222");
    resolve1("555555555555");
  }).then(res => {
    console.log(res);
  });
});
console.log("33333333333");