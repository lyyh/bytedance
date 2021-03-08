// 功能：Promise.race(iterable) 返回一个 promise，一旦 iterable 中的一个 promise 状态是 fulfilled / rejected ，那么 Promise.race 返回的 promise 状态是 fulfilled / rejected.
// 如果传入的参数为空的可迭代对象，那么 Promise.race 返回的 promise 永远是 pending 态
// 如果传入的参数中不包含任何 promise，Promise.race 会返回一个处理中（pending）的 promise
// 如果 iterable 包含一个或多个非 promise 值或已经解决的promise，则 Promise.race 将解析为 iterable 中找到的第一个值。
// 参考 https://github.com/YvetteLau/Step-By-Step/issues/29

Promise.race = function(promises){
    if (!Array.isArray(promises)) {
		throw new TypeError('You must pass array')
    }
    return new Promise(function(resolve,reject){
       if(promises.length){
            for(var p of promises){
                Promise.resolve(p)
                .then(val=>{
                    resolve(val)
                }).catch(err =>{
                    reject(err)
                })
            }
        }
    })
}

