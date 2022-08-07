import axios from "axios";

// for developemnt
// let API = axios.create({ baseURL: "/" });
// for deployment
let API = axios.create({ baseURL: "http://localhost:8000" });

export const signIn = (formData, config) =>
  API.post("/user/signin", formData, config);
export const signUp = (formData) => API.post("/user/signup", formData);

export const gets3url = (config) => API.get("/user/gets3url", config);