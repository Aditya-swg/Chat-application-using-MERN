import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-using-mern-8tsf.onrender.com/api" : "/api",
  withCredentials: true,
});
