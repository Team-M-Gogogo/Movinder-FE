import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/",
});

export const getSessions = (movieId, cinemaId) => {
  return api.get("/movie/sessions?filmID="+movieId+"&cinemaID="+cinemaId);
};
