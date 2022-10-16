import * as api from "../api/index.js";

export const saveEducationalDetailsAction = (email, education) => async () => {
    try {
        const res = await api.saveEducationalDetails({ email, education });
        alert(res.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const saveExperienceDetailsAction = (email, experience) => async () => {
    try {
        const res = await api.saveEducationalDetails({ email, experience });
        alert(res.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const savePersonalDetailsAction = (data) => async () => {
    try {
        const res = await api.savePersonalDetails(data);
        alert(res.data.message);
    } catch (error) {
        console.log(error);
    }
};