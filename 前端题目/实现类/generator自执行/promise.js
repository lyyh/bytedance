function generatorAutoRun(gen){
    var g = gen()
    function next(data){
        var res = g.next(data)
        if(res.done){
            return res.value
        }
        res.value.then(next)
    }
    next()
}

function sleep(){
    return Promise.resolve(1)
}

let gen = function* () {
    let r1 = yield sleep()
    let r2 = yield sleep()
    console.log(r1 + r2) 
}

generatorAutoRun(gen)

