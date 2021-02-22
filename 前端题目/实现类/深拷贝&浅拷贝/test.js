// var is
// var type = () => 
var type = val => Object.prototype.toString.call(val).slice(8, -1)
var isArray = val => type(val) === 'Array'
var isObject = val => type(val) === 'Object'

var deepClone = function (target) {
    if (typeof target !== 'object') return target

    var obj = null
    if (isArray(target)) obj = []
    if (isObject(target)) obj = {}

    for (var prop of Reflect.ownKeys(target)) {
        if (isArray(target[prop]) || isObject(target[prop])) {
            obj[prop] = deepClone(target[prop])
        } else {
            obj[prop] = target[prop]
        }
    }
    return obj
}

// test
var arr1 = [{
    a: 1
}]
var arr2 = deepClone(arr1)
console.log(arr1 === arr2) // false
console.log(arr1[0] === arr2[0]) // true
// shallowClone(['1'])