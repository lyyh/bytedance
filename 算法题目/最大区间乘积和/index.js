function getMaxX(arr) {
    var min = [arr[0]]
    var dp = [arr[0] * arr[0]]
    var max = arr[0]    
    for(var i = 1;i < arr.length;i++){
        var cur = arr[i]
        var preMin = min[i-1]
        min[i] = Math.min(preMin,cur)
        var one = dp[i-1] * min[i] / preMin + cur * min[i]
        var two = cur * cur
        if(one > two){
            dp[i] = one
        }else{
            dp[i] = two
            min[i] = cur
        }
        max = Math.max(max,dp[i])
    }
    return max
}

console.log(getMaxX([3,1,6,4,5,2])) // 60