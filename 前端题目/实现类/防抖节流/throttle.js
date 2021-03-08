function throttle(fn,wait){
    var timer = null
    return function(...args){
        var that = this
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(that,args)
                clearTimeout(time)
                timer = null
            },wait)
        }
    }
}