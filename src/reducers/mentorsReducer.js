import {
  MENTORS_LIST_REQUEST,
  MENTORS_LIST_SUCCESS,
  MENTORS_LIST_FAILURE,
  GET_MENTOR_REQUEST,
  GET_MENTOR_SUCCESS,
  GET_MENTOR_FAILURE,
} from "../constants/actionTypes";

export const mentorsListReducer = (state = { mentors: [] }, action) => {
  switch (action.type) {
    case MENTORS_LIST_REQUEST:
      return { loading: true };
    case MENTORS_LIST_SUCCESS:
      return { loading: false, mentors: action.payload.mentors };
    case MENTORS_LIST_FAILURE:
      return { loading: false, mentors: "Something Went Wrong" };
    default:
      return state;
  }
};

export const getMentorByIdReducer = (state = { mentor: {} }, action) => {
  switch (action.type) {
    case GET_MENTOR_REQUEST:
      return { loading: true };
    case GET_MENTOR_SUCCESS:
      return { loading: false, mentor: action.payload };
    case GET_MENTOR_FAILURE:
      return { loading: false, mentor: "Something Went Wrong" };
    default:
      return state;
  }
};
