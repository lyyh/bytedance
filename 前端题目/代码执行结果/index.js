// 以下代码执行会输出什么
const  myfun = () => {
    const args = arguments;
    if (true) {
        console.log(args.join());
    }
}
myfun(1, 2);