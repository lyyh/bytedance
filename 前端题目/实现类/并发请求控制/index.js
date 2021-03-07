// 只能每次 num 次并发请求
// function sendRequest(urls,callback,num){
//     var _urls = [...urls]
//     function request(results){
//         if(_urls.length){
//             Promise.all(_urls.splice(0,num).map(url => fetch(url))).then(r => request(results.concat(r)))
//         }else{
//             callback(results)
//         }
//     }
//     request([])
// }


function handleFetchQueue(urls, max, callback) {
    if (!urls.length) return callback([])
    var requestQueue = []
    var results = []
    var i = 0

    function request(url) {
        var req = fetchFn(url).then((data) => {
            var len = results.push(data)
            if (len < urls.length && i + 1 < urls.length) {
                requestQueue.shift()
                request(urls[++i])
            } else if (typeof callback === 'function' && len === urls.length) {
                callback(results)
            }
        }).catch((error) => {
            results.push(error)
        })
        if (requestQueue.push(req) < max) {
            request(urls[++i])
        }
    }
    request(urls[i])
}

var urls = Array.from({
    length: 10
}, (v, k) => k);

var fetchFn = function (idx) {
    return new Promise(resolve => {
        console.log(`start request ${idx}`);
        const timeout = parseInt(Math.random() * 1e4);
        setTimeout(() => {
            console.log(`end request ${idx}`);
            resolve(idx)
        }, timeout)
    })
};

var max = 4;

var callback = () => {
    console.log('run callback');
};