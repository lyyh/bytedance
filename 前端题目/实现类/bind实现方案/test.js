function MyBind(context) {
    var bindArgs = [].slice.call(arguments,1)
    var self = this
    function bound() {
        var entityArgs = bindArgs.concat(arguments)
        if(this instanceof bound){
            self.apply(this,entityArgs)
        }else{
            self.apply(context,entityArgs)
        }
    }
    var Empty = function () {}
    // 这里如果不加入Empty，直接bound.prototype = target.prototype的话
    // 改变bound.prototype则会影响到target.prototype，原型继承基本都会加入这么一个中间对象做屏障
    Empty.prototype = self.prototype
    bound.prototype = new Empty()
    return bound
}

Function.prototype.MyBind = MyBind

function myFn(a) {
    this.a = a
}

var myFn = myFn.bind(null)
console.log(new myFn('a'))