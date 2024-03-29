import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/Auth/authSlice";

export default configureStore({
    reducer: {
        user: authSlice,
    },
})