var lowestCommonAncestor = function(root, p, q) {
    if(!root || root.val === p.val || root.val === q.val)return root;
    var left = lowestCommonAncestor(root.left,p,q)
    var right = lowestCommonAncestor(root.right,p,q)
    if(left && right)return root
    return left || right
};

const shortestDistance = function(root, p, q) {
    // 最近公共祖先
    let lowestCA = lowestCommonAncestor(root, p, q)
    // 分别求出公共祖先到两个节点的路经
    let pDis = [], qDis = []
    getPath(lowestCA, p, pDis)
    getPath(lowestCA, q, qDis)
    // 返回路径之和
    return (pDis.length + qDis.length)
}

var getPath = function(root,p,paths){
    // 找到了
    if(root === p)return true
    paths.push(root)
    var hasFound = false

    if(!root.left){
        hasFound = getPath(root.left,p,paths)
    }
    if(!hasFound && root.right){
        hasFound = getPath(root.right,p,paths)
    }
    if(!hasFound){
        paths.pop()
    }
    return hasFound
}