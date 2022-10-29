import axios from "axios";

// for developemnt
let API = axios.create({ baseURL: "http://localhost:8000/" });
// for deployment
// let API = axios.create({ baseURL: "https://edukith.com/api" });

export const signIn = (formData, config) => API.post("/users/signin", formData, config);

export const signUp = (formData) => API.post("/users/signup", formData);

export const signUpWithGoogle = (formData) => API.post("/users/signupwithgoogle", formData);

export const loginWithGoogle = (formData) => API.post("/users/loginGooglerUser", formData);

export const gets3url = (config) => API.get("/users/gets3url", config);

export const contactUs = (data) => API.post("/web/contact", data);

export const saveEducationalDetails = (data) => API.post("/users/saveEducationalDetails", data);

export const saveMentorshipDetails = (data) => API.post("/mentors/mentorRequest", data);

export const saveExperienceDetails = (data) => API.post("/users/saveProfessionalDetails", data);

export const savePersonalDetails = (data) => API.post("/users/savePersonalDetails", data);

export const getUserDetails = (id) => API.get(`/users/userDetails?id=${id}`);

export const getMentors = () => API.get('/mentors');