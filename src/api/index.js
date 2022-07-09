import axios from "axios";

// for developemnt
// let API = axios.create({ baseURL: "/" });
// for deployment
let API = axios.create({ baseURL: "http://localhost:8000" });

export const signIn = (formData, config) =>
  API.post("/api/user/signin", formData, config);
export const signUp = (formData) => API.post("/api/user/signup", formData);

// forms
export const bookCall = (formData) =>
  API.post("/api/forms/requestcall", formData);
export const contact = (formData) => API.post("/api/forms/contact", formData);

// mentors
export const updateMentorProfile = (user, config) =>
  API.post("/api/user/updateprofile", user, config);

export const gets3url = (config) => API.get("/api/user/gets3url", config);

export const addMentor = (config, mentor) =>
  API.post("/api/mentors/addmentor", mentor, config);

export const removeMentor = (config, mentor) =>
  API.post("/api/mentors/deletementor", mentor, config);

export const getMentorProfile = (config) =>
  API.get("/api/mentors/mentorprofile", config);

export const getAllMentors = (config) => API.get("/api/mentors", config);

export const hideMentor = (config, user) =>
  API.post("/api/mentors/disablementor", user, config);

export const getMentorById = (id) => API.get(`/api/mentors/${id}`);
