const incrementEl = document.getElementById("increment")
const decrementEl = document.getElementById("decrement")
const counterEl = document.getElementById("counter")

// initial state
const initialState = {
    value: 0
}

// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    }
    else {
        return { ...state }
    }
}

// Create store
const store = Redux.createStore(counterReducer)

const render = ()=>{
    const state = store.getState();
    counterEl.innerText = state.value.toString()
}

// Update UI initially
render()


store.subscribe(render)


// button event listener
incrementEl.addEventListener("click", ()=>{
    store.dispatch({
        type: "increment"
    })
})

decrementEl.addEventListener("click", ()=>{
    store.dispatch({
        type: "decrement"
    })
})

