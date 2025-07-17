import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState : {
        activated : false || localStorage.getItem("activated"),
        totalExpenseAmount : 0,
        allExpenses : {}
    },

    reducers: {

        activatePremium(state, action){
            state.activated = action.payload
        },
        
        addExpense(state, action) {
            state.allExpenses[action.payload.id] = action.payload
            state.totalExpenseAmount+= action.payload.amount
        },

        setExpenses(state, action) {
            console.log(action.payload?.activated)
            state.allExpenses = action.payload?.allExpenses || {};
            state.totalExpenseAmount = action.payload?.totalExpenseAmount || 0;
            state.activated = action.payload?.activated || false
        },

        deleteExpense(state, action) {
            delete state.allExpenses[action.payload.id]
            state.totalExpenseAmount -= action.payload.amount
        },

        updateExpense(state, action) {
            console.log(state.allExpenses[action.payload.id].amount)
            state.totalExpenseAmount = state.totalExpenseAmount - state.allExpenses[action.payload.id].amount + action.payload.amount
            state.allExpenses[action.payload.id] = action.payload
        },

        // fetchExpenses(state, action) {
        //     state.allExpenses = action.payload
        // }
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice