var preorderTraversal = function(root){
    if(!root)return []
    var stack = []
    var res = []
    stack.push(root)
    while(stack.length){
        var p = stack.pop()
        res.push(p.val)
        if(p.right){
            stack.push(p.right)
        }
        if(p.left){
            stack.push(p.left)
        }
    }
    return res
}