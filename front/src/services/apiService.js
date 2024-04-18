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

export const login = async (user, dispatch, handleError, handleValid) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      user
    );
    dispatch(loginSuccess(res.data));
    handleValid(res.data.message);
  } catch (err) {
    handleError(`${err}`);
    dispatch(loginError(err));
  }
};

export const fetchUser = async (token, dispatch, handleError) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
    const res = await axios.post("http://localhost:3001/api/v1/user/profile");
    dispatch(fetchUserSuccess(res.data.body));
  } catch (err) {
    handleError(`${err}`);
    dispatch(fetchUserError(err));
  }
};

export const logout = async (token, dispatch) => {
  try {
    dispatch(logoutSuccess(token));
  } catch (err) {
    dispatch(logoutError(err));
  }
};

export const updateUser = async (data, dispatch, token, handleError) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
    await axios.put("http://localhost:3001/api/v1/user/profile", data);
    dispatch(updateUserSuccess(data));
  } catch (err) {
    handleError(`${err}`);
    dispatch(updateUserError(err));
  }
};