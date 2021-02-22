Function.prototype.myApply = function (context,args) {
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    var meFn = this
    var fn = Symbol()

    context[fn] = meFn
    context[fn](...args)
    delete context[fn]
}

var fn = function () {
    console.log(this)
    console.log([...arguments])
}

console.log(fn.myApply({a:1},[1,2,3]))