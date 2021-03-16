
String.prototype.indexOf = function(str){
    for(var i = 0;i <= this.length - str.length;i++){
        if(this.charAt(i) === str.charAt(0) && this.substring(i,str.length + 1) === str){
            return i
        }
    }
    return -1
}

var a = '123'
console.log(a.indexOf('23'))