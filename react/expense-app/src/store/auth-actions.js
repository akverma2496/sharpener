import { authActions } from "./auth-slice"
import { uiActions } from "./ui-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

// when user is creating an account
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("localId", data.localId);
      localStorage.setItem("refreshToken", data.refreshToken);

      return {
        idToken: data.idToken,
        localId: data.localId,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



// check user completed the profile or not
export const isProfileCompleted = (navigate) => {

    return async (dispatch) => {

      dispatch(uiActions.setLoading(true));

        const checkForUser = async () => {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
                method: "POST",
                body: JSON.stringify({ idToken: localStorage.getItem("idToken") }),
                headers: { "Content-Type": "application/json" }
            })

            if (!response.ok) {
                const { error } = await response.json()
                throw new Error(error.message)
            }

            const data = await response.json()
            const user = data.users?.[0]
            if (!user) throw new Error("No user found");
            return user
        }

        try {
            const user = await checkForUser()
            console.log(user)
            dispatch(authActions.emailverify(user.emailVerified))
            dispatch(authActions.completeProfile(user.displayName || ""))
            
        } catch (error) {
          console.log(error)
          dispatch(authActions.logout())
          navigate("/login")
        }
        finally{
          dispatch(uiActions.setLoading(false))
        }
    }
}


// when user is logging in 

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("localId", data.localId);
      localStorage.setItem("refreshToken", data.refreshToken);

      return {
        idToken: data.idToken,
        localId: data.localId,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);