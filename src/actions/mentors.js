import {
  UPDATEMENTOR,
  MENTORS_LIST_SUCCESS,
  MENTORS_LIST_REQUEST,
  MENTORS_LIST_FAILURE,
  MENTOR_DELETE_REQUEST,
  MENTOR_DELETE_SUCCESS,
  MENTOR_UPDATE_REQUEST,
  MENTOR_UPDATE_SUCCESS,
  MENTOR_UPDATE_FAILURE,
  MENTOR_DELETE_FAILURE,
  GET_MENTOR_SUCCESS,
  GET_MENTOR_REQUEST,
  GET_MENTOR_FAILURE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";
import { logout, mentorProfile } from "./auth";

export const addMentor = (user, mentorsData, router) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await api.addMentor(config, mentorsData);
    dispatch({ type: UPDATEMENTOR, data });
    dispatch(
      mentorProfile(JSON.parse(localStorage.getItem("userInfo")), router, false)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeMentor = (user) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_DELETE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    await api
      .removeMentor(config, user.mentorProfile)
      .then((res) => {
        dispatch({ type: MENTOR_DELETE_SUCCESS });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        dispatch({ type: MENTOR_DELETE_FAILURE });
        alert(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

export const editMentor = (user, router) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_UPDATE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    await api
      .removeMentor(config, user.mentorProfile)
      .then((res) => {
        dispatch({ type: MENTOR_UPDATE_SUCCESS });
        dispatch(mentorProfile(user, router, true));
        router("/edit-mentor-profile");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        alert(err.response.data.message);
        dispatch({ type: MENTOR_UPDATE_FAILURE });
      });
  } catch (error) {
    console.log(error);
  }
};

export const getMentors = () => async (dispatch) => {
  try {
    dispatch({ type: MENTORS_LIST_REQUEST });
    const res = await api.getAllMentors();
    const finalData = res.data;
    dispatch({ type: MENTORS_LIST_SUCCESS, payload: finalData });
  } catch (error) {
    dispatch({ type: MENTORS_LIST_FAILURE, payload: error });
    console.log(error);
  }
};

export const disableAsMentor = (user, router) => async (dispatch) => {
  try {
    const fig = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    await api
      .hideMentor(fig, user)
      .then((res) => {
        dispatch(mentorProfile(user, router, true));
        alert(res.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        dispatch({ type: MENTOR_DELETE_FAILURE });
        alert(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getMentorProfileById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MENTOR_REQUEST });
    await api.getMentorById(id).then((res) => {
      dispatch({ type: GET_MENTOR_SUCCESS, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: GET_MENTOR_FAILURE, payload: error });
    console.log(error);
  }
};
