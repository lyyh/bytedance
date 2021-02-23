const tree = {
    name: "c",
    children: [{
        name: "a",
        children: []
    }, {
        name: "b",
        children: [{
            name: 'a',
            children: []
        }]
    }]
}

const treePath = (node, targetName) => {
    const path = [node.name]
    if (node.name === targetName) {
        res.push(path)
    }
    const res = []
    dfs(node, targetName, path, res)
    return res
}

const dfs = (node, targetName, path, res) => {
    if (!node.children.length) {
        return
    }
    const _path = [...path]
    for (var child of node.children) {
        _path.push(child.name)
        if (targetName !== child.name) {
            dfs(child, targetName, _path, res)
        } else {
            res.push([..._path])
        }
        _path.pop()
    }
}

console.log(treePath(tree, 'a'))