import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = { isAuthenticated : false }

export const authSlice = createSlice({
    name: "auth",
    initialState : initalAuthState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions
export default authSlice