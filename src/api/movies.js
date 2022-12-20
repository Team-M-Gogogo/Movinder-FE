import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://localhost:8888/",
});

export const getMovies = () => {
  return api.get("/movie/films");
};

export const getMovieById = (movieId) => {
  return api.get("/movie/films/" + movieId);
};

export const getCinemas = () => {
  return api.get("/movie/cinemas");
};

export const getCinemasById = (cinemaId) => {
  return api.get("/movie/cinemas" + cinemaId);
};

export const getCinemasByMovieId = (cinemaId) => {
  return api.get("/movie/cinemas" + cinemaId);
};

export const getSessions = (movieId, cinemaId) => {
  return api.get("/movie/sessions?filmID=" + movieId + "&cinemaID=" + cinemaId);
};

export const postLogin = (loginInfo) => {
  return api.post("/customers/authenticate", loginInfo);
}
