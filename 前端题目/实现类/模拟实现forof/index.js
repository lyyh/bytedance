function forOf(obj,cb) {
    var iterable = obj[Symbol.iterator]()
    var res = iterable.next()
    while (!res.done) {
        cb(res.value)
        res = iterable.next()
    }
}

var a = [1,2,3,4]
console.log(forOf(a,(val)=>{
    console.log(val)
}))