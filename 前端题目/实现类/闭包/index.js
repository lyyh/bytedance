// 实现一个函数，第i次执行输出i
var getNum = (function(){
    var i = 0
    return function(){
        return ++i
    }
})()

for(var i = 0;i<10;i++){
    console.log(getNum())
}