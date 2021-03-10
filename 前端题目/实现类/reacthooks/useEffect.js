var allDeps = []
var effectCursor = 0

function useEffect(callback,dependencies){
    if(!allDeps[effectCursor]){
        allDeps[effectCursor] = dependencies
        effectCursor++
        setTimeout(callback)
        return
    }

    var currentEffectDeps = allDeps[effectCursor]
    var changed = currentEffectDeps.some((item,index) => {
        return item !== dependencies[index]
    })

    if(changed){
        setTimeout(callback);
        allDeps[effectCursor] = dependencies
    }

    effectCursor++
}

function render(){
    effectCursor = 0
}