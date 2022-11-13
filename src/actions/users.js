import * as api from "../api/index.js";
import {
  GET_MENTOR_FAILURE,
  GET_MENTOR_REQUEST,
  GET_MENTOR_SUCCESS,
} from "../constants/actionTypes.js";

export const saveEducationalDetailsAction = (email, education) => async () => {
  try {
    const res = await api.saveEducationalDetails({ email, education });
    alert(res.data.message);
  } catch (error) {
    alert(error);
  }
};

export const saveExperienceDetailsAction = (email, experience) => async () => {
  try {
    const res = await api.saveExperienceDetails({
      email,
      workExperience: experience,
    });
    alert(res.data.message);
  } catch (error) {
    alert(error);
  }
};

export const saveDateTime = (data, id) => async () => {
  await api
    .postSlots(data, id)
    .then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
      } else {
        alert("There is Some error occured");
      }
    })
    .catch((res) => {
      alert("There is Some error occured");
    });
};

export const savePersonalDetailsAction = (data) => async () => {
  await api
    .savePersonalDetails(data)
    .then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
      } else {
        alert("There is Some error occured");
      }
    })
    .catch((res) => {
      alert("There is Some error occured");
    });
};

export const saveMentorshipDetailsAction = (data) => async () => {
  await api
    .saveMentorshipDetails(data)
    .then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
      } else {
        alert("There is Some error occured");
      }
    })
    .catch((res) => {
      alert("There is Some error occured");
    });
};

export const getUserDetailsAction = (id) => async (dispatch) => {
  dispatch({ type: GET_MENTOR_REQUEST });
  await api
    .getUserDetails(id)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: GET_MENTOR_SUCCESS, payload: res.data });
      } else {
        dispatch({ type: GET_MENTOR_FAILURE });
        alert("There is Some error occured");
      }
    })
    .catch((res) => {
      dispatch({ type: GET_MENTOR_FAILURE });
      alert("There is Some error occured");
    });
};
