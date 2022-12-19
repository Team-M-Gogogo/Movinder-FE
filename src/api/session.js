import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const getSessions = () => {
  return api.get("/sessions");
};
