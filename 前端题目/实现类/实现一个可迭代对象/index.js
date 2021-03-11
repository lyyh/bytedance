var obj = {
    a:1,
    b:2
}
obj[Symbol.iterator] = function () {
    var idx = 0
    var vals = Object.values(obj)
    return {
        next: function () {
            var done = idx >= vals.length
            var value = vals[idx++]
            return {
                done,
                value
            }
        },
        return:function () {
            console.log('return')
            return {}
        }
    }
}

for(var v of obj){
    if(v===1)break;
    console.log(v)
}