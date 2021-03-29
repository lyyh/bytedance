var addRemote = (a,b) => new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(a+b)
    },100)
})

var add = async function(...args){
    var res = 0
    if(args.length === 0 )return res
    if(args.length === 1)return args[0]
    for(var item of args){
        res = await addRemote(item,res)
    }
    return res
}

add(1,2,3,4).then(data => console.log(data))

var addChain = async function(...args){
    if(args.length === 0 )return 0
    var _args = args.slice(1)
    return _args.reduce((promiseChain,item)=>{
        return promiseChain.then(data => {
            return add(data,item)
        })
    },Promise.resolve(args[0]))
}

addChain(1,2,3,4).then(data => console.log(data))