import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/actionTypes";

import * as api from "../api/index.js";
import Constants from "../constants/Constants";

export const signin = (email, password, router) => async (dispatch) => {
  try {
    var config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await api.signIn({ email, password }, config);
    dispatch({ type: USER_LOGIN_REQUEST });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem(Constants.userInfo, JSON.stringify(data));
    router("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem(Constants.userInfo);
  localStorage.removeItem(Constants.userType);
  dispatch({ type: USER_LOGOUT });
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await api.signUp(formData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem(Constants.userInfo, JSON.stringify(data));
    localStorage.setItem(Constants.userType, Constants.mentee);

    router("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signupwithgoogle = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await api.signUpWithGoogle(formData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem(Constants.userInfo, JSON.stringify(data));
    localStorage.setItem(Constants.userType, Constants.mentee);

    router("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signinWithGoogle = (formData, router) => async (dispatch) => {
  try {
    var config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await api.loginWithGoogle(formData, config);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem(Constants.userInfo, JSON.stringify(data));
    router("/");
    
  } catch (error) {
    alert(error.response.data.message);
  }
};
