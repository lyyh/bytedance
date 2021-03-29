function allSettled(promises) {
    if (promises.length === 0) return Promise.resolve([])
    const _promises = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )
    return new Promise(function (resolve, reject) {
        const result = []
        const unSettled = _promises.length
        _promises.forEach(function (promise, index) {
            promise
                .then(function (value) {
                    result[index] = {
                        status: 'fullfilled',
                        value
                    }
                    if (--unSettled === 0) {
                        resolve(result)
                    }
                })
                .catch(function (reason) {
                    result[index] = {
                        status: 'reject',
                        reason
                    }
                    if (--unSettled === 0) {
                        resolve(result)
                    }
                })
        })
    })
}

var p1 = Promise.reject(1)
var p2 = Promise.resolve(2)
allSettled([p1,p2]).then(res => console.log(res))