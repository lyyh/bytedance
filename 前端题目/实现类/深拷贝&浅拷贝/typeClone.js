const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

function cloneOtherType(target, type) {
    const Ctor = target.constructor;
    switch (target) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(target);
        case regexpTag:
            return cloneReg(target);
        case symbolTag:
            return cloneSymbol(target);
        default:
            return null;
    }
}

function cloneSymbol(target){
    return Object(Symbol.prototype.valueOf.call(target))
}

function cloneReg(target){
    var reFlags = /\w*$/
    var result = new target.constructor(target.source,reFlags.exec(target))
    result.lastIndex = target.lastIndex
    return result
}


