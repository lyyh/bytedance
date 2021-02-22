// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。【编程】
function dupNum(arr) {
    var res = []
    for(var i =0;i < arr.length;i++){
        if(arr[arr[i]] == -1){
            res.push(arr[i])
        }else{
            arr[i] = -1
        }
    }
    return res
}

console.log(dupNum([4,3,2,7,8,2,3,1]))