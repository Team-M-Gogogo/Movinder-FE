import axios from "axios";

const api = axios.create({
    // baseURL: "https://63996b6029930e2bb3d23bfc.mockapi.io/",
    baseURL: "http://localhost:8888",
});

export const getCinemas = () => {
    return api.get("/movie/cinemas");
};

export const getCinemasById = (cinemaId) => {
    return api.get("/movie/cinemas"+cinemaId);
};

export const getCinemasByMovieId = (cinemaId) => {
    return api.get("/movie/cinemas"+cinemaId);
};

