class EventEmitter{
    constructor(){
        this.events = {}
    }
    on(type,listener){
        if(this.events[type]){
            this.events[type].push(listener)
        }else{
            this.events[type] = [listener]
        }
    }
    emit(type){
        var args = [].slice.call(arguments,1)
        this.events[type].forEach(cb => {
            cb.apply(null,args)
        })
    }
    once(type,listener){
        var self = this
        function fn(){
            var args = [].slice.call(arguments)
            listener.apply(null,args)
            self.off(type,listener)
        }
        this.on(type,fn)
    }
    off(type,listener){
        var events = this.events[type]
        var offset = events.indexOf(listener)
        if(offset !== -1){
            events.splice(offset,1)
        }
    }
}

const emitter = new EventEmitter();

const handler = function (evt) {
    console.log(1, evt);
};

emitter.on('foo', handler);

emitter.once('foo', function (evt) {
    console.log('evt',evt)
    console.log(2, evt);
});

emitter.emit('foo',{
    type: 'foo',
    value: 'hello'
});