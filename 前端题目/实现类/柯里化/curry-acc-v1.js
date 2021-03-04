// curried(1)(2)(3); // => [1, 2, 3]
// curried(1, 2)(3); // => [1, 2, 3]
// curried(1, 2, 3); // => [1, 2, 3]

// var addAll = (a, b, c) => {
//     return a + b + c
// }

// var curry = func => (...args) => {
//     if(func.length < args.length){
//         return () => {
            
//         }
//     }
//     return 
// }
var curry = func => (...args) => {
    if (func.length > args.length) {
        return (...params) => {
            var _args = [...args,...params]
            return curry(func)(..._args)
        }
    }
    return func(...args)
}

var addAll = (a, b, c) => {
    return a + b + c
}

var curryFn = curry(addAll)
console.log(curryFn(1, 2)(3))
console.log(curryFn(1,2,3,4))