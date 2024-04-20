import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/Auth/authSlice";

export default configureStore({
    //  gere l'état de l'utilisateur avvec la clé user
    reducer: {
        user: authSlice,
    },
})