import * as api from "../api/index.js";
import { MENTORS_LIST_FAILURE, MENTORS_LIST_REQUEST, MENTORS_LIST_SUCCESS } from "../constants/actionTypes.js";

export const getMentorsAction = () => async (dispatch) => {
    try {
        dispatch({ type: MENTORS_LIST_REQUEST });
        const res = await api.getMentors();
        dispatch({ type: MENTORS_LIST_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: MENTORS_LIST_FAILURE });
        alert(error);
    }
};


