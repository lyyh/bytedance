var curry = function (fn, args) {
    var args = args || []
    var length = length || fn.length
    return function () {
        var _args = args.concat([].slice.call(arguments))
        if (length > _args.length) {
            return curry.call(this, fn, _args)
        } else {
            return fn.apply(this, _args)
        }
    }
}

var fn = curry(function (a, b, c) {
    return a + b + c
})

console.log(fn("a", "b")) // [Function]
console.log(fn("a", "b").call(global.Array,'c')) // ["a", "b", "c"]
console.log(fn("a")("b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b", "c")) // ["a", "b", "c"]