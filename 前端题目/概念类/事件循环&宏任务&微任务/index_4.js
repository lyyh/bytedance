console.log(1)
 
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
}, 0);
 
new Promise((resolve) => {
  console.log(4);
  resolve();
}).then(() => {
  console.log(5);
  setTimeout(() => console.log(6), 0)
});
 
console.log(7);

// 1 -> 4 -> 7 -> 5 -> 2 -> 3 -> 6