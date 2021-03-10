var stateIndex = 0
var lastState = 0
function useState(initialState){
    lastState[currentIndex] = lastState[currentIndex] || initialState
    var currentIndex = stateIndex
    function setState(state){
        lastState[currentIndex] = state
        render()
    }
    return [lastState[stateIndex++],setState]
}

function render(){
    ReactDOM.render(<App/>,document.getElementById('app'))
    // 重置stateIndex
    stateIndex = 0
}