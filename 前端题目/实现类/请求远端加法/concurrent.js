var addRemote = (a, b) => new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(a + b)
    }, 100)
})

var cache = {}
var addFn = (a, b) => {
    var key1 = `${a}${b}`
    var key2 = `${b}${a}`
    var cacheVal = cache[key1] || cache[key2]
    if(cacheVal)return Promise.resolve(cacheVal)
    return addRemote(a,b).then(res => {
        cache[key1] = res
        cache[key2] = res
        return res
    })
}

function add(...args) {
    if (args.length <= 1) return Promise.resolve(args[0])
    var promiseList = []
    for (var i = 0; i * 2 < args.length - 1; i++) {
        var promise = addFn(args[i * 2], args[i * 2 + 1])
        promiseList.push(promise)
    }
    if (args.length % 2) {
        var promise = Promise.resolve(args[args.length - 1])
        promiseList.push(promise)
    }
    return Promise.all(promiseList)
        .then(res => add(...res))
}

add(1, 2, 3, 4).then(data => console.log(data))