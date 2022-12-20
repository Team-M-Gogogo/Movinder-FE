import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8888/",
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "https://movinder-be-qa.up.railway.app",
});

export const getMovies = () => {
  console.log(process.env);
  return api.get("/movie/films");
};

export const getMovieById = (movieId) => {
  return api.get("/movie/films/" + movieId);
};

export const getCinemas = () => {
  return api.get("/movie/cinemas");
};

export const getCinemasById = (cinemaId) => {
  return api.get("/movie/cinemas/" + cinemaId);
};

export const getCinemasByMovieId = (cinemaId) => {
  return api.get("/movie/films/" + cinemaId + "/cinemas");
};

export const getSessions = (movieId, cinemaId) => {
  return api.get("/movie/sessions?filmID=" + movieId + "&cinemaID=" + cinemaId);
};
