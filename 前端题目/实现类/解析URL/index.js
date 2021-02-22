function f(url){ 
    var l = url.indexOf('?'); 
    if(l!=-1){ 
        var obj = {}; 
        var arr = url.substring(l+1,url.length).split('&'); 
        for(var i = 0; i<arr.length; i++){ 
            obj[arr[i].split('=')[0]] = arr[i].split('=')[1]; 
        } 
        return obj; 
    } 
} 

console.log(f('http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6'))