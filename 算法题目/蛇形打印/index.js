var levelOrder = function (root) {
    if (!root) return []
    var queue = [[root, 0]]
    var res = []
    while (queue.length) {
        var [node, level] = queue.shift()
        if (!res[level]) res[level] = []
        // 奇数
        level & 1 ? res[level].unshift(node.val) : res[level].push(node.val);
        node.left && queue.push([node.left, level + 1]);
        node.right && queue.push([node.right, level + 1]);
    }
    return res
}