import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/actionTypes";

import * as api from "../api/index.js";
import { addMentor } from "./mentors";

function configAuth(token) {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

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
    localStorage.setItem("userInfo", JSON.stringify(data));
    router("/");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await api.signUp(formData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    router("/profile");
  } catch (error) {
    alert(error);
  }
};

export const updateProfile =
  (user, { name, work, education, choices }, img, router) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });

      // getting img url to upload img
      const { data } = await api.gets3url(configAuth(user.token));
      if (data.url === null) {
        return alert(
          "There are some error occured,Please try again after refresing page"
        );
      }

      // uploading img to s3
      await fetch(data.url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: img,
      });
      const pic = data.url.split("?")[0];

      // updating user profile as mentor true
      if (pic !== null) {
        const newData = {
          isMentor: true,
        };

        const res = await api.updateMentorProfile(
          newData,
          configAuth(user.token)
        );

        // adding mentor to db
        dispatch(
          addMentor(res.data, { work, education, choices, pic }, router)
        );

        dispatch({ type: USER_UPDATE_SUCCESS });
      } else {
        dispatch({ type: USER_UPDATE_FAIL });
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

export const mentorProfile = (user, router, fromProfile) => async () => {
  try {
    const dt = await api.getMentorProfile(configAuth(user.token));
    localStorage.removeItem("userInfo");
    localStorage.setItem("userInfo", JSON.stringify(dt.data));
    if (!fromProfile) {
      router("/profile");
    }
  } catch (error) {
    console.log(error);
  }
};
