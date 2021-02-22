// var isObject = 
var type = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1)
}

var isObject = val => type(val) === 'Object'
var isArray = val => type(val) === 'Array'

var deepClone = function (target, map = new WeakMap()) {
    if (typeof target !== 'object') return target

    var obj = null

    if (isObject(target)) obj = {}
    if (isArray(target)) obj = []

    if (map.get(target)) return map.get(target)

    map.set(target, obj)

    for (var prop of Reflect.ownKeys(target)) {
        obj[prop] = map.get(target) ? map.get(target) : deepClone(target[prop], map)
    }
    return obj
}

var log = {
    msg: {
        info: 1
    },
    list: [{
        name: 'xiaoming'
    }],
    logInline: log
}
var logCloned = deepClone(log)
console.log(logCloned)
console.log(logCloned.list === log.list)
console.log(logCloned.logInline === logCloned)