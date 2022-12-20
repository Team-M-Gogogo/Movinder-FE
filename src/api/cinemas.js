import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8888",
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getCinemas = () => {
  return api.get("/movie/cinemas");
};

export const getCinemasById = (cinemaId) => {
  return api.get("/movie/cinemas" + cinemaId);
};

export const getCinemasByMovieId = (cinemaId) => {
  return api.get("/movie/cinemas" + cinemaId);
};
