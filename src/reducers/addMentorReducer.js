import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  MENTOR_DELETE_REQUEST,
  MENTOR_DELETE_SUCCESS,
  MENTOR_DELETE_FAILURE,
  MENTOR_UPDATE_REQUEST,
  MENTOR_UPDATE_SUCCESS,
  MENTOR_UPDATE_FAILURE,
} from "../constants/actionTypes";

export const addMentorReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        data: "Added as Mentor You profile will be live on Mentors Page",
      };
    case USER_UPDATE_FAIL:
      return { loading: false, data: "Something Went Wrong" };
    default:
      return state;
  }
};

export const removeMentorReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_DELETE_REQUEST:
      return { loading: true };
    case MENTOR_DELETE_SUCCESS:
      return { loading: false, data: "Removed As Mentor!!" };
    case MENTOR_DELETE_FAILURE:
      return { loading: false, data: "Something Went Wrong" };
    default:
      return state;
  }
};

export const updateMentorReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_UPDATE_REQUEST:
      return { loading: true };
    case MENTOR_UPDATE_SUCCESS:
      return { loading: false };
    case MENTOR_UPDATE_FAILURE:
      return { loading: false };
    default:
      return state;
  }
};
