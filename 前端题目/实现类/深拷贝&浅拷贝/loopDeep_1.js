// var isObject = 
var type = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1)
}

var isObject = val => type(val) === 'Object'
var isArray = val => type(val) === 'Array'

var deepCloneWithCircular= function (target, map = new WeakMap) {
    if (typeof target !== 'object') return target

    if (map.get(target)) return map.get(target)

    var obj = null

    if (isObject(target)) obj = {}
    if (isArray(target)) obj = []

    map.set(target, obj)

    for (var prop of Object.keys(target)) {
        obj[prop] = deepCloneWithCircle(target[prop], map)
    }

    return obj
}

var target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

var clonedTarget = deepCloneWithCircle(target)
console.log(clonedTarget)