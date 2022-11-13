import axios from "axios";
import Constants from "../constants/Constants";

// for developemnt
let API = axios.create({ baseURL: "/api" });
// let API = axios.create({ baseURL: "https://dev.edukith.com/api" });
// for deployment
// let API = axios.create({ baseURL: "https://edukith.com/api" });

const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

let config = {
  headers: {
    Authorization: "Bearer " + inf.token,
  },
};

export const signIn = (formData, config) =>
  API.post("/users/signin", formData, config);

export const signUp = (formData) => API.post("/users/signup", formData);

export const signUpWithGoogle = (formData) =>
  API.post("/users/signupwithgoogle", formData);

export const loginWithGoogle = (formData) =>
  API.post("/users/loginGooglerUser", formData);

export const gets3url = (config) => API.get("/users/gets3url", config);

export const contactUs = (data) => API.post("/web/contact", data);

export const saveEducationalDetails = (data) =>
  API.post("/users/saveEducationalDetails", data);

export const saveMentorshipDetails = (data) =>
  API.post("/mentors/mentorRequest", data);

export const saveExperienceDetails = (data) =>
  API.post("/users/saveProfessionalDetails", data);

export const savePersonalDetails = (data) =>
  API.post("/users/savePersonalDetails", data);

export const getUserDetails = (id) => API.get(`/users/userDetails?id=${id}`, config);
export const getSession = (id) => API.get(`/session?id=${id}`, config);
export const getSlots = (id) => API.get(`/mentors/slots?userId=${id}`, config);

export const postSlots = (data, id) =>
  API.post(`/mentors/slots?userId=${id}`, data, config);
// export const postSlots = (data) => API.post("/mentors/slots", data);

export const getMentors = () => API.get("/mentors");
