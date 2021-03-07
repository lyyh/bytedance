function debounce(fn,wait){
    var timer = null
    return function(){
        var context = this
        var args = arguments
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function(){
            fn.apply(context,args)
        },wait)
    }
}


var fn = function () {
	console.log('boom')
}
setInterval(debounce(fn,500),1000) // 第一次在1000ms后触发，之后每1000ms触发一次