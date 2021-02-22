var app = {
    middlearewares: [],
    use: function (fn) {
        this.middlearewares.push(fn)
    },
    compose: function () {
        var self = this
        function dispatch(index) {
            if (index === self.middlearewares.length - 1) return Promise.resolve()
            const route = self.middlearewares[index]
            return Promise.resolve(route(() => dispatch(++index)))
        }
        dispatch(0)
    }
}
function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}
app.use(async function(next) {
    await sleep()
    await next();
})
app.use(async function(next) {
    console.log('aaaa')
    await next()
})
app.compose()