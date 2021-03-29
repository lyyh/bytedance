var quickSort = function (arr) {
    var len = arr.length
    if (len < 1) return arr
    var pivotIndex = Math.floor(len / 2)
    var pivot = arr[pivotIndex]
    var left = []
    var right = []
    for (var i = 0; i < len; i++) {
        if (i === pivotIndex) continue
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

