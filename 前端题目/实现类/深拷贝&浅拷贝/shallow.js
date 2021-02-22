// var isObject = 
var type = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1)
}

var isObject = val => type(val) === 'Object'
var isArray = val => type(val) === 'Array'

var shallowClone = function (target) {
    var obj = null

    if (isObject(target)) obj = {}
    if (isArray(target)) obj = []

    for (var prop of Reflect.ownKeys(target)) {
        obj[prop] = target[prop]
    }
    return obj
}

var log = {
    msg: 1
}
var nums = [1, 2, 3]
var logCloned = shallowClone(log)
var numsCloned = shallowClone(nums)