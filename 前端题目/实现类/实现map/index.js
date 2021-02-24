/**
 * arr1.map(function(item,idx,arr){
    item //数组的每一项
    idx // 当前项的索引
    arr // 当前遍历的数组
    this // 函数体内的 this 为 callbackThis参数，
         // 如果不指定或者指定为 null和 undefined，则 this指向全局对象
},callbackThis)
 */

Array.prototype.map = function (fn, callbackThis) {
    var res = []
    let CBThis = callbackThis || null;
    this.reduce(function (acc, cur, idx, arr) {
        res.push(fn.call(CBThis, cur, idx, arr))
    }, null)
    return res
}

var arr = [1,2,3]
console.log(arr.map(function(val,idx){
    // console.log(this)
    console.log('val',val)
    return val * 2
},globalThis))