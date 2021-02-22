var loopDeepClone = function (target) {
    const root = {}
    const loopList = [{
        parent: root,
        key: undefined,
        data: target
    }]

    while (loopList.length) {
        var node = loopList.pop();
        var {
            parent,
            key,
            data
        } = node

        var res = parent
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for (var key of Object.keys(data)) {
            if (typeof data[key] === 'object') {
                loopList.push({
                    parent: res,
                    key: key,
                    data: data[key]
                })
            } else {
                res[key] = data[key]
            }
        }
    }
    return root
}

var log = {
    msg: {
        info: 1
    },
    list: [{
        name: 'xiaoming'
    }],
    logInline: log
}
var logCloned = loopDeepClone(log)
console.log(logCloned)
console.log(logCloned.msg === log.msg)