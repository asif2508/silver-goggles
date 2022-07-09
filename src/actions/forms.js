import {
  CALLBOOK_SUCESSFULL,
  FORM_SAVE_FAILURE,
  FORM_SAVE_REQUEST,
  FORM_SAVE_SUCCESS,
  CALLBOOK_FAILURE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const bookCall = (formData) => async (dispatch) => {
  try {
    const { data } = await api.bookCall(formData);
    if (data) {
      dispatch({ type: CALLBOOK_SUCESSFULL });
    }
  } catch (error) {
    dispatch({ type: CALLBOOK_FAILURE });
    alert(error.response.data.message);
  }
};

export const contact = (formData) => async (dispatch) => {
  try {
    dispatch({ type: FORM_SAVE_REQUEST });
    try {
      const { data } = await api.contact(formData);
      if (data) {
        dispatch({ type: FORM_SAVE_SUCCESS, data });
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
