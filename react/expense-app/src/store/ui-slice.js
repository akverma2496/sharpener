import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") || "light";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        loading: false,
        theme: initialTheme
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme);
        },
        setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", state.theme);
        },
    }
})

export const uiActions = uiSlice.actions
export default uiSlice