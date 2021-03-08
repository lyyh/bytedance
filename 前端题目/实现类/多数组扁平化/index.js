var source = [
    [0],
    [2, 3, 4], 1, [1, [2, 3]]
];
// Array.prototype.flat
console.log(source.flat(Infinity))

// toString
console.log(source.toString().split(',').map(v => parseInt(v)))

// 递归
function flatten(source) {
    if (!Array.isArray(source)) return source
    return source.reduce(function (acc, cur) {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

console.log(flatten(source))

// 传入参数控制拉平层级
function flatLevel(source, num) {
    return num > 0 ? source.reduce(function (acc, cur) {
        return acc.concat(Array.isArray(cur) ? flatLevel(cur, num - 1) : cur)
    }, []) : source.slice(0)
}

console.log(flatLevel(source,1))