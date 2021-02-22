var sub_curry = function (fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        var _args = args.concat([].slice.call(arguments))
        return fn.apply(this, _args)
    }
}

var curry = function (fn, length) {
    var length = length || fn.length
    var slice = Array.prototype.slice
    return function () {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments))
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments)
        }
    }
}

var fn = curry(function (a, b, c) {
    return [a, b, c];
});

console.log(fn("a", "b", "c")) // ["a", "b", "c"]
console.log(fn("a", "b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b", "c")) // ["a", "b", "c"]