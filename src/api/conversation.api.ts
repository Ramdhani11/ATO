import { axiosInstance } from "../config/axiosInstance";

export const getAll = async () => {
  const response = await axiosInstance.get("/conversations");

  return response.data;
};
