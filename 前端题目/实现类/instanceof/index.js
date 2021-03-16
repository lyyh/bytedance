function MyInstanceof(instance,Constructor){
    if(typeof instance === 'object' || Constructor === null)return false

    var proto = Object.getPrototypeOf(instance)
    while(true){
        if(proto === null)return false
        if(proto === Constructor.prototype)return true
        proto = Object.getPrototypeOf(proto)
    }
}