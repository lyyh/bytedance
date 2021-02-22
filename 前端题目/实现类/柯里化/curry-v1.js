// 仅限制于调用一次，使用参数也有限制
var curry = function (fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        var nextArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, nextArgs)
    }
}

var addCurry = curry(function (a, b) {
    return a + b
}, 1)

console.log(addCurry(1, 2))

