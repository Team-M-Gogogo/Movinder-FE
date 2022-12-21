import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "https://movinder-be-qa.up.railway.app",
  // baseURL: "http://localhost:8888",
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
  return api.get("/movie/cinemas/" + cinemaId);
};

export const getCinemasByMovieId = (cinemaId) => {
  return api.get("/movie/films/" + cinemaId + "/cinemas");
};

export const getSessions = (movieId, cinemaId) => {
  return api.get("/movie/sessions?filmID=" + movieId + "&cinemaID=" + cinemaId);
};

export const getSessionById = (sessionId) => {
  return api.get("/movie/sessions/" + sessionId);
}

export const postLogin = (loginInfo) => {
  return api.post("/customers/authenticate", loginInfo);
}

export const getTicketById = (ticketId) =>{
  return api.get("/booking/tickets/"+ ticketId);
}

export const sanityCheck = () =>{
  return api.get("/customers");
}
