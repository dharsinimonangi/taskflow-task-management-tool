import API from "./api";

export const getTasks = async () => {
  const response = await API.get("/tasks");

  return response.data;
};