import { CONTACT_FORM_FAILURE, CONTACT_FORM_REQUEST, CONTACT_FORM_SUCCESS } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const contactFormSubmission = (name, email, query) => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_FORM_REQUEST });
        const response = await api.contactUs({ name, email, query });
        if (response) {
            dispatch({ type: CONTACT_FORM_SUCCESS });
        } else {
            dispatch({ type: CONTACT_FORM_FAILURE });
        }
    } catch (error) {
        alert(error.response.data.msg);
    }
};