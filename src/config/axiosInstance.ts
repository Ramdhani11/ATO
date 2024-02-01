import Cookies from "js-cookie";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${Cookies.get("access")}`;

  return config;
});
