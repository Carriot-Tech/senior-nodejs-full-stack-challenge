import { message } from "antd";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("user") || "{}").access_token
        : ""
    }`,
  },
});

api.interceptors.request.use(
  async (config) => {
    const user =
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("user") || "{}")
        : undefined;

    if (user?.access_token) {
      config.headers.Authorization = `Bearer ${user?.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
