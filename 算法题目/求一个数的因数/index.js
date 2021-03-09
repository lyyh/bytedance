function recur(res,cur,n,count){
    if(n === 1)return
    var nextVal
    if(n % cur ===0){
        res.push(cur)
        nextVal = n / cur
        recur(res,cur,nextVal,count)
    }else{
        count++
        while(n % cur !== 0){
            cur = Math.pow(2,count) + 1
        }
        res.push(cur)
        nextVal = n / cur
        recur(res,cur,nextVal,count)
    }
}
function calc (n) {
    var res = []
    var count = 0
    recur(res,Math.pow(2, count) + 1,n,count)
    return res
}
console.log(calc(8))
// [2, 2, 2]
console.log(calc(24))
// [2, 2, 2, 3]
console.log(calc(30))