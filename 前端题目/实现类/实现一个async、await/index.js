function asyncToGenerator(generatorFunc) {
    return function () {
        var gen = generatorFunc.apply(this, arguments)
        return new Promise(function (resolve, reject) {
            function step(action, args) {
                let generatorResult
                try {
                    generatorResult = gen[action](args)
                } catch (error) {
                    return reject(error)
                }
                const {
                    value,
                    done
                } = generatorResult
                if (done) {
                    return resolve(value)
                } else {
                    return Promise.resolve(value).then(val => step('next', val)).catch(err => step('throw', err))
                }
            }
            step('next')
        })
    }
}

function asyncToFunction(generatorFunc) {
    return function(){
        var gen = generatorFunc.apply(this,arguments)
        return new Promise(function (resolve, reject) {
            function step(action,args) {
                var generatorResult = null
                try {
                    generatorResult = gen[action](args)
                } catch (err) {
                    return reject(err)
                }
                var {
                    done,
                    value
                } = generatorResult
                if(!done){
                    return Promise.resolve(value).then(res => step('next',res),err => step('throw',err))
                }else{
                    return resolve(value)
                }
            }
            step('next')
        })
    }
}

var sleep = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello')
            // reject('error')
        }, 100)
    })
}
var exe = asyncToGenerator(function* () {
    try {
        var val = yield sleep()
        return val
    } catch (err) {
        console.log('err', err)
    }
})

exe().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})