var arr = [1, 2, '3js', [4, 5, [6], [7, 8, [9, 10, 11], null, 'abc'], {age: 58}, [13, 14]], '[]', null];

function flatter(args) {
    return Array.isArray(args)?
        args.reduce(function (prev,cur) {
            return Array.isArray(cur)?prev.concat(flatter(cur)):prev.concat(cur)
        },[]):args
}
console.log(flatter(arr))