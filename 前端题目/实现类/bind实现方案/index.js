function MyBind(context) {
    var me = this
    var args = [].slice.call(arguments, 1)

    function bound() {
        var extrasArgs = [].slice.call(arguments)
        var finalArags = args.concat(extrasArgs)
        // 使用 thi instanceof 判断
        return me.apply(this.constructor === me ? this : context, finalArags)
    }
    bound.prototype = me.prototype
    return bound
}


Function.prototype.MyBind = MyBind
var bar = {
    name: 123
}
var fun = function () {
    console.log('args', [...arguments])
    console.log(this.name)
}
var afterBindFun = fun.MyBind(bar, 'hello')
afterBindFun('world')