/**
 * 1. 创建一个空对象
 * 2. 把构造的空对象关联到构造函数 __proto__ = 构造对象.prototype
 * 3. 把构造的空对象作为构造函数的上下文
 * 4. 如果构造函数有返回值且为对象，则返回该对象，否则返回新创建的对象
 */
var newFn = function (...args) {
    var constructor = args.shift();
    var obj = Object.create(constructor.prototype)
    var res = constructor.apply(obj, args)
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj
}

var Parent = function (age) {
    this.age = age
}

const instance = newFn(Parent, 100)

console.log(instance)