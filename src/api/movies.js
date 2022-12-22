import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8888/",
  baseURL: process.env.REACT_APP_BASE_URL,
 // baseURL: "https://movinder-be-qa.up.railway.app",
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

export const getFoods = () => {
  return api.get("/booking/foods");
};

export const getSessionById = (sessionId) => {
  return api.get("/movie/sessions/" + sessionId);
};

export const postLogin = (loginInfo) => {
  return api.post("/customers/authenticate", loginInfo);
};

export const updateUserInfo = (user) => {
  return api.put("/customers", user);
};

export const getTicketById = (ticketId) => {
  return api.get("/booking/tickets/" + ticketId);
};

export const getCustomerBookings = (customerId) =>{
  return api.get("/booking/orders/" + customerId);
}

export const sanityCheck = () => {
  return api.get("/customers");
};

export const addMessage = (messageEntity) => {
  return api.put("/forum/rooms", messageEntity);
}

export const getRoomMessage = (movieId) => {
  return api.get("/forum/rooms?movieID="+movieId);
}

export const getCustomerActiveRooms = (customerId) => {
  return api.get("/forum/rooms/" + customerId);
}

export const getCustomerById = (customerId) => {
  return api.get("/customers/"+customerId);
}
