await Promise.resolve();
this.setState({
    content: "123"
}, () => {
    console.log('callback content')
});
console.log('11111')
this.setState({
    text: "324"
});
console.log("aaa");

// 打印
// render => callback content => 111 => render => aaa