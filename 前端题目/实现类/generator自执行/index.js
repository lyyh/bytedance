function generatorAutoRun(gen){
    var g = gen()
    var res = g.next()
    while(!res.done){
        res = g.next(res.value)
    }
}

let gen = function* () {
    let r1 = yield 1
    let r2 = yield 2
    console.log(r1 + r2) 
}

generatorAutoRun(gen)

