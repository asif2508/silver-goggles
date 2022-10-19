import * as api from "../api/index.js";

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
