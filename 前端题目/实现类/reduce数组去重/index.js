var arr = [1,2,3,4,2,3]
var res = arr.reduce(function (prev,cur) {
    if(!prev.includes(cur))prev.push(cur)
    return prev
},[])
console.log(res)