/**
 * use case:
 * template('hello {{ name }}')({name: 'xiaoming'})
 * result:
 * hello xiaoming
 */
var assert = require('assert')
function template(tplStr) {
    var format = (args) =>
        // macth 匹配到的字符串
        // p 表示匹配的分组
        // offset 偏移量
        
        tplStr.replace(/{{\s*([a-zA-Z0-9]*)\s*}}/g, (match, p) => {
            console.log('p',p)
            return args[p] || ''
        })
    return format
}

console.log(assert.strictEqual(template('hello {{ name }} {{ age }}')({
    name: 'world',
    age: '100'
}),'hello world 100'))