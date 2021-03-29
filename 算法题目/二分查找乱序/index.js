var nums = [1,3,2,4,5,8,2]
var binarySearch = function(nums,target){
    var map = new Map()
    for(var i = 0; i < nums.length;i++){
        map.set(nums[i],i)
    }
    nums = nums.sort(function(a,b){
        return a - b
    })
    var left = 0
    var right = nums.length - 1
    while(left <= right){
        var mid = left + ((right - left)>>1)
        if(nums[mid] < target ){
            left = mid + 1
        }else if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] === target){
            return map.get(target)
        }
    }
    return -1
}
console.log(binarySearch(nums,8))