class EventEmitter {
    constructor() {
        this.events = {}
        this.onceEvents = {}
    }
    on(type, fn) {
        this.events[type] = {}
        this.events[type][fn.name] = fn
    }
    fire({
        type,
        val
    }) {
        var _run = 1
        var _find = function (events) {
            for (var i in events) {
                var _type = events[i]
                if (_type === type) {
                    for (var j in events[type]) {
                        events[type][i](val)
                        if (_run) {
                            Reflect.defineProperty(events[type], i)
                        }
                    }
                }
            }
            _run = 0
        }
        _find(this.onceEvents)
        _find(this.events)
    }
    once(type, fn) {
        this.onceEvents[type] = {}
        this.onceEvents[type][fn.name] = fn
    }
    off(type) {
        if (this.events[type]) {
            Reflect.deleteProperty(this.events, type)
        }
    }
}

const emitter = new EventEmitter();

const handler = function (evt) {
    console.log(1, evt);
};
emitter.on('foo', handler);

emitter.once('foo', function (evt) {
    console.log(2, evt);
});

emitter.fire({
    type: 'foo',
    value: 'hello'
});
emitter.fire({
    type: 'foo',
    value: 'world'
});
emitter.off('foo', handler);
emitter.fire({
    type: 'foo',
    value: 'test'
});