// 给一个正整数数组和一个数字 n，返回告知该数组中是否有连续序列，和为 n
// 滑动窗口法
function subSum(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        var sum = arr[i]
        if (sum > n) continue
        for (var j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            if (sum === n) {
                return true
            } else if (sum > n) {
                break;
            }
        }
    }
    return false
}
console.log(subSum([2, 1, 3, 4, 5, 6], 10))

// 前缀和
function subSum1(arr, n) {
    var map = new Map()
    var sum = 0
    map.set(0, true)
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
        var preSum = sum - n
        if (map.get(preSum)) {
            return true
        }
        map.set(sum, true)
    }
    return false
}
console.log(subSum1([2, 1, 3, 4, 5, 6], 10))

// dp
function subSumDp(arr, n) {
    var dp = []
    dp[0] = true;
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
        var preSum = sum - n
        if (dp[preSum]) {
            return true
        }
        dp[sum] = true
    }
    return false
}
console.log(subSumDp([2, 1, 3, 4, 5, 6], 10))