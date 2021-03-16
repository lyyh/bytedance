// 参考 https://juejin.cn/post/6844903917835436045
function myObjectCreate(proto,properties){
    function F(){}
    F.prototype = proto
    if(properties){
        Object.defineProperties(F,properties)
    }
    return new F()
}

