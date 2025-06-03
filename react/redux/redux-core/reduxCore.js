const redux = require("redux")

// createStore deprecated but still working
const { createStore } = require("redux")


const counterReducer = (state= {counter : 0}, action) => {

    if(action.type == "increment"){
        return {
        counter: state.counter + 1
    }
    }

    if(action.type == "decrement"){
        return {
        counter: state.counter - 1
    }
    }

    return state
    
}

const store = createStore(counterReducer)

//console.log(store.getState())


// when state gets changed this function gets triggered, (kind of a provider)
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

//binding store with subscriber function
store.subscribe(counterSubscriber)  

store.dispatch({type : "increment"})
store.dispatch({type : "increment"})
store.dispatch({type : "decrement"})