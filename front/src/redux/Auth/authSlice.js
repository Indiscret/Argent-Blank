import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    // état initial avec valeurd fictives
    name: "user",
    initialState: {
        email: "john@doe.com",
        id: 1,
        password: "password123",
        firstName: "John",
        lastName: "Doe",
        error: false,
        token: "",
    },
    // gere les ations redux + chaque reducer mets à jour l'état du slice selon les données reçues
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token;
            state.error = false;
        },
        loginError: (state, action) => {
            state.error = action.payload.message;
        },
        logoutSuccess: (state) => {
            state.token = "";
            state.error = false;
        },
        logoutError: (state, action) => {
            state.error = action.payload.message;
        },
        fetchUserSuccess: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.id = action.payload.id;
            state.error = false;
        },
        fetchUserError: (state) => {
            state.error = true;
        },
        updateUserSuccess: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.error = false;
        },
        updateUserError: (state) => {
            state.error = true;
        },
    }
})
export const {
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    fetchUserSuccess,
    fetchUserError,
    updateUserSuccess,
    updateUserError,
} = authSlice.actions
export default authSlice.reducer