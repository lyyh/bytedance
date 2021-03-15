function createStore(reducer){
    var state,listeners = []
    function subscribe(callback){
        listeners.push(callback)
    }

    function dispatch(action){
        state = reducer(state,action)
        listeners.forEach(handler =>{
            handler()
        })
    }

    function getState(){
        return state
    }

    var store = {
        getState,
        dispatch,
        subscribe
    }
    return store
}