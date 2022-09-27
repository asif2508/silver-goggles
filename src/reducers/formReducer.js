import {
  FORM_SAVE_REQUEST,
  FORM_SAVE_SUCCESS,
  FORM_SAVE_FAILURE,
  CALLBOOK_SUCESSFULL,
  CALLBOOK_FAILURE,
  CALLBOOK_REQUEST,
} from "../constants/actionTypes";

export const formReducer = (state = { }, action) => {
  switch (action.type) {
    case FORM_SAVE_REQUEST:
      return { loading: true };
    case FORM_SAVE_SUCCESS:
      return { loading: false, data: "Form submitted successfully" };
    case FORM_SAVE_FAILURE:
      return { loading: false, data: "Something Went Wrong" };
    default:
      return state;
  }
};
export const callBookReducer = (state = {}, action) => {
  switch (action.type) {
    case CALLBOOK_REQUEST:
      return { loading: true, data: "Booking Call..." };
    case CALLBOOK_SUCESSFULL:
      return { success: true, data: "Form submitted successfully" };
    case CALLBOOK_FAILURE:
      return { success: false };
    default:
      return state;
  }
};
