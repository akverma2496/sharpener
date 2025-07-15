import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {

            const data = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
                {
                    email, password,
                    returnSecureToken: true,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );


            // response.status → HTTP status code(e.g., 200, 404)
            // response.data → Actual response body
            // response.headers → Response headers
            // response.statusText → Status text(e.g., "OK", "Not Found")
            console.log(data)
            localStorage.setItem("idToken", data.idToken);
            localStorage.setItem("localId", data.localId);
            localStorage.setItem("refreshToken", data.refreshToken);

            return {
                idToken: data.idToken,
                localId: data.localId,
            };

        } catch (err) {
            // if (err.response) {
            //     console.log('Error status:', err.response.status); // e.g., 400
            //     console.log('Error data:', err.response.data);
            // }
            console.log(err)
            console.log(err.response.data)
            return rejectWithValue(err.response.data.error.message);
        }
    }
);