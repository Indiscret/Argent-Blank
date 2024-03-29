import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
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
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token;
            state.error = false;
        },
        loginError: (state, action) => {
            state.error = action.payload.message;
        },
        signUpSuccess: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.error = false;
        },
        signUpError: (state) => {
            state.error = true;
        },
        fetchUserSucces: (state, action) => {
            state.error = false;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.id = action.payload.id;
        },
        fetchUserError: (state) => {
            state.error = true;
        },
    }
})
export const {
    loginSuccess,
    loginError,
    signUpSuccess,
    signUpError,
    fetchUserSucces,
    fetchUserError,
  } = authSlice.actions
export default authSlice.reducer