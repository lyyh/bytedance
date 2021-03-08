Array.prototype.myForEach = function(fn,context){
    var arr = this
    for(var i = 0;i < arr.length;i++){
        fn.call(context,arr[i],i,arr)
    }
}

var arr = [1,2,3,4]
arr.myForEach(function(item,index,arr){
    console.log(this)
    console.log(arr)
},null)