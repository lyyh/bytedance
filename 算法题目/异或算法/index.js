// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。【编程】
// 找到所有出现两次的元素。你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？(限时5分钟)
var arr = [4, 3, 2, 7, 8, 2, 3, 1]
var findDuplicate = function (arr) {
    var res = []
    arr.forEach(function (item) {
        if (arr[item] !== -1 && item !== -1) {
            arr[item] = -1
        } else {
            res.push(item)
        }
    })
    return res
}
console.log(findDuplicate(arr))