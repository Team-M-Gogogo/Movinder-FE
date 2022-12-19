import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/",
});

export const getMovies = () => {
  return api.get("/movie/films");
};

export const getMovieById = (movieId) => {
  return api.get("/movie/films/" + movieId);
}
