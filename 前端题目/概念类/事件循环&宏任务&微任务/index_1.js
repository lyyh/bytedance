setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(data => {
    console.log('then');
});

var promise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve('setTimeout then')
    });
})

promise.then(data => console.log(data))

console.log('start');

// 打印出现 start => then => timeout => setTimeout then