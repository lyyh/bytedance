curried(1)(2)(3); // => [1, 2, 3]
curried(1, 2)(3); // => [1, 2, 3]
curried(1, 2, 3); // => [1, 2, 3]

var curry = func => (...args) => {
    if (func.length < args.length) {
        return () => {
            return func(...args.concat(Array.from(arguments)))
        }
    }
    return func(...args)
}

var addAll = (a, b, c) => {
    return a + b + c
}

var curryFn = curry(addAll)
console.log(curryFn(1, 2)(3))