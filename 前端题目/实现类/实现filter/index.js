Array.prototype.filter = function(fn,callbackThis){
    if(typeof fn !== 'function'){
        throw new TypeError('callback is not function')
    }
    var cbThis = callbackThis || undefined
    return this.reduce(function (acc,cur,index,arr) {
        if(fn.call(cbThis,cur,index,arr)){
            acc.push(cur)
        }
        return acc
    },[])
}

var a = [1,2,3]
console.log(a.filter((item,index)=>{
    console.log(this)
    if(item ===2)return true
    return false
},{}))