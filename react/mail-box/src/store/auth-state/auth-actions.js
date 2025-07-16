import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const apiKey = import.meta.env.VITE_API_KEY;

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {

            const { data } = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
                {
                    email, password,
                    returnSecureToken: true,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            localStorage.setItem("auth", JSON.stringify({idToken : data.idToken, localId : data.localId, email: data.email}));

            return {
                idToken: data.idToken,
                localId: data.localId,
                email: data.email
            };

        } catch (error) {  
            return rejectWithValue(error.response.data.error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({email, password}, {rejectWithValue}) => {
        try {
            const { data } = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
                {
                    email, password,
                    returnSecureToken : false
                },
                {
                    headers : { "Content-Type" : "application/json"}
                }
            );

            localStorage.setItem("auth", JSON.stringify({idToken : data.idToken, localId : data.localId, email: data.email}));

            return {
                idToken: data.idToken,
                localId: data.localId,
                email: data.email
            };

        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    }
)