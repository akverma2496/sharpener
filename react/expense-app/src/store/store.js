import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import expenseSlice from "./expense-slice";

const store = configureStore({
    reducer : { auth : authSlice.reducer, ui: uiSlice.reducer, expense : expenseSlice.reducer}
})

export default store