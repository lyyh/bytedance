function express() {
    var middlewares = []
    var app = function (req, res) {
        var i = 0

        function next() {
            var task = middlewares[i++]
            if (!task) {
                return
            }
            task(req, res, next)
        }
        next();
    }

    app.use = function (task) {
        middlewares.push(task)
    }

    return app
}

var app = express();

function middlewareA(req, res, next) {
    console.log('中间件1');
    next();
}

function middlewareB(req, res, next) {
    console.log('中间件2');
    next();
}

function middlewareC(req, res, next) {
    console.log('中间件3');
    next();
}
app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app('req','res')