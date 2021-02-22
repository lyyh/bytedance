var trap = function (height) {
    var left = 0;
    var right = height.length - 1
    var ans = 0
    var l_max = height[left]
    var r_max = height[right]
    while (left <= right) {
        l_max = Math.max(l_max,height[left])
        r_max = Math.max(r_max,height[right])
        if(l_max < r_max){
            ans += l_max - height[left]
            left++
        }else{
            ans += r_max - height[right]
            right--
        }
    }
    return ans
}