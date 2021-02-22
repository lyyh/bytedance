setTimeout(() => {
    console.log('timeout1');
    Promise.resolve().then(data => {
        console.log('then1');
    });
}, 0);

Promise.resolve().then(data => {
    console.log('then2');
    setTimeout(() => {
        console.log('timeout2');
    }, 0);
});

// 打印顺序： then2 -> timeout1 -> then1 -> timeout2
