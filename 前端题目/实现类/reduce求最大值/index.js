var a = [2,3,1,4]
var maxVal = a.reduce(function (prev,cur) {
    return Math.max(prev,cur)
})
console.log(maxVal)