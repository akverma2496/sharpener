//import { createStore } from "redux"
import {configureStore, createSlice} from "@reduxjs/toolkit"

const initialState = {
    counter : 0,
    showCounter : true
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

//counterSlice.actions.toggerCounter 
// returns an action object of this shape 
// {type : some auto-gen unique identifier}


// const counterReducer = (state = initalState, action) => {
//     if(action.type == "increment"){
//         return {
//             counter : state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type == "decrement"){
//         return {
//             counter : state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === "toggle"){
//         return {
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }

//     return state
// }


//const store = createStore(counterReducer)
//const store = createStore(counterSlice.reducers)

//what if we have multiple slice
// in redux we have combineReducers functions
// in RTK we have configureStore function which accepts a object as parameter

const store = configureStore({
    reducer: counterSlice.reducer
    //reducer: {counter : counterSlice.reducer}
})

export const counterActions = counterSlice.actions

export default store;
