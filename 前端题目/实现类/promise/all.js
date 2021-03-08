// Promise.all接收一个数组，如果传入数组的每个元素不是promise对象，则将其转换为promise对象。当数组中每个promise的执行结果都变为resolve时，调用then方法的成功回调函数；如果数组中有一个promise对象的执行结果变为reject，则调用then方法的失败回调函数。
// 参考 https://github.com/YvetteLau/Step-By-Step/issues/25
Promise.all = function(promises){
    if (!Array.isArray(promises)) {
		throw new TypeError('You must pass array')
    }
    return new Promise(function(resolve,reject){
        var len = promises.length
        var count = 0
        var res = []
        for(var i = 0;i < len;i++){
            Promise.resolve(p)
            .then(data=>{
                res[i] = data
                count++
                if(count === len){
                    return resolve(res)
                }
            }).catch(err=>{
                reject(err)
            })
        }
    })
}