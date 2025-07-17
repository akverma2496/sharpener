import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "./auth-actions";

const authSlice = createSlice({
    name: "auth",
    initialState : {
        idToken : localStorage.getItem("idToken"),
        isLoggedIn : localStorage.getItem("idToken"),
        localId : localStorage.getItem("localId"),
        emailVerified : false,
        displayName: "",
        //loading : false
    },
    reducers : {

        emailverify(state, action){
          state.emailVerified = action.payload
        },

        completeProfile(state, action){
          state.displayName = action.payload
        },

        logout(state){
            state.idToken = null;
            state.isLoggedIn = false;
            state.localId = null;
            localStorage.clear()
        }
    },

    extraReducers: (builder) => {
    builder
        // signup user
      .addCase(signUpUser.pending, (state) => {
        //state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        //state.loading = false;
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        state.localId = action.payload.localId;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        //state.loading = false;
        state.error = action.payload;
      })

      // login user
      .addCase(loginUser.pending, (state) => {
        //state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        //state.loading = false;
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        state.localId = action.payload.localId;
      })
      .addCase(loginUser.rejected, (state, action) => {
        //state.loading = false;
        state.error = action.payload;
      });
  },
})

export const authActions = authSlice.actions
export default authSlice