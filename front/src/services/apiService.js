import axios from "axios";
import {
  loginError,
  loginSuccess,
  fetchUserSuccess,
  fetchUserError,
  logoutError,
  logoutSuccess,
  updateUserSuccess,
  updateUserError,
} from "../redux/Auth/authSlice";

// fonction pour gerer la connexion de l'utilisateur
export const login = async (user, dispatch, handleError, handleValid) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      user
    );
    const token = res.data.body.token;
    dispatch(loginSuccess(res.data, token ));
    handleValid(res.data.message);
    return token;
  } catch (err) {
    handleError(`${err}`);
    dispatch(loginError(err));
  }
};

// fonction pour recuperer les info de l'utilisateur
export const fetchUser = async (token, dispatch) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post("http://localhost:3001/api/v1/user/profile");
    dispatch(fetchUserSuccess(res.data.body));
  } catch (err) {
    const errorMessage = err.message || 'Unknown error occurred';
    dispatch(fetchUserError(errorMessage));
  }
};

// focntion pour deconnexter l'utilisateur
export const logout = async (token, dispatch) => {
  try {
    dispatch(logoutSuccess(token));
  } catch (err) {
    dispatch(logoutError(err));
  }
};

// fonction pour mettre à jour les info de l'utilisateur
export const updateUser = async (data, dispatch, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.put("http://localhost:3001/api/v1/user/profile", data);
    dispatch(updateUserSuccess(data));
  } catch (err) {
    const errorMessage = err.message || 'Unknown error occurred';
    dispatch(updateUserError(errorMessage));
  }
};