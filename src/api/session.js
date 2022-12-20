import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8888/",
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getSessions = (movieId, cinemaId) => {
  return api.get("/movie/sessions?filmID=" + movieId + "&cinemaID=" + cinemaId);
};
