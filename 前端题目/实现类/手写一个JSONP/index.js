const jsonp = ({
    url,
    params,
    callbackName = 'callback'
}) => {
    const generatorUrl = () => {
        var query = []
        for (var key in params) {
            query.push(`${key}=${params[key]}`)
        }
        var dataStr = `${query.join('&')}&callback=${callbackName}`
        return `url?${dataStr}`
    }
    return new Promise(function (resolve, reject) {
        var scriptElement = document.createElement('script')
        scriptElement.src = generatorUrl()
        document.body.appendChild(scriptElement)
        window[callbackName] = function (data) {
            try {
                resolve(data)
            } catch (err) {
                reject(err)
            } finally {
                document.body.removeChild(scriptElement)
            }
        }
    })
}