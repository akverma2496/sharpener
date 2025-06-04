//import { createStore } from "redux"
import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter-slice"
import authSlice from "./auth-slice";

// const initialCounterState = {
//     counter : 0,
//     showCounter : true
// }

// const counterSlice = createSlice({
//     name: "counter",
//     initialState : initialCounterState,
//     reducers : {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         toggleCounter(state){
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const initalAuthState = { isAuthenticated : false }

// const authSlice = createSlice({
//     name: "auth",
//     initialState : initalAuthState,
//     reducers: {
//         logIn(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state){
//             state.isAuthenticated = false;
//         }
//     }
// })

//counterSlice.actions.toggerCounter()
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
    //reducer: counterSlice.reducer
    //reducer: {counter : counterSlice.reducer}
    reducer: {counter : counterSlice.reducer, auth: authSlice.reducer}
})

export default store;
