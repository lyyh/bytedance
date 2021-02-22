var getType = function (val) {
    return Object.prototype.toString.call(val).slice(8,-1).toLowerCase()
}

console.log(getType('123123'))
console.log(getType([]))