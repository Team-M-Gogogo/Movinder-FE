import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8888/",
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getMovies = () => {
  return api.get("/movie/films");
};

export const getMovieById = (movieId) => {
  return api.get("/movie/films/" + movieId);
};
