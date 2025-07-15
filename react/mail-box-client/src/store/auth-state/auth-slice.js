import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./auth-actions";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        loading : false,
    } ,
    reducers : {

    },

    extraReducers: (builder) => {
    builder

    // signup user
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        //state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        //state.isLoggedIn = true;
        //state.idToken = action.payload.idToken;
        //state.localId = action.payload.localId;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        //state.error = action.payload;
      })
    }
})

export const authActions = authSlice.actions
export default authSlice