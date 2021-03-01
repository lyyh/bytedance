var obj = {
    a: 1,
    b:[{c:2}]
}

var findPropVal = function(obj,...paths){
    var json = JSON.stringify(obj)
    return paths.map(function(item){
        return (new Function(`return ${json}.${item}`)());
    })
}

var findPropVal_2 = function(obj,...paths){
    var json = JSON.stringify(obj)
    return paths.map(function(item){
        return eval(`(${json}).${item}`)
    })
}

console.log(findPropVal_2(obj,'a','b[0].c'))

// new Function 与 eval 的差别？？？
