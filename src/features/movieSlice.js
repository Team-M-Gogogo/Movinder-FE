import { createSlice } from "@reduxjs/toolkit";
const initSelectedMovie = {};
const initSelectedSession = {};
const initSelectedCinema = {};
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: initSelectedMovie,
    selectedSession: initSelectedSession,
    selectedCinema: initSelectedCinema,
    selectedSeats: [],
    selectedTickets: [],
    foodTotal: 0,
    showLogin: false,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addSelectedCinema: (state, action) => {
      state.selectedCinema = action.payload;
    },
    addSelectedSession: (state, action) => {
      state.selectedSession = action.payload;
    },
    changeFoodTotal: (state, action) => {
      state.foodTotal += action.payload;
    },
    changeShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    updateSelectedSeats: (state, action) => {
      state.selectedSeats = action.payload;
    },
    updateSelectedTickets: (state, action) => {
      state.selectedTickets = action.payload;
    },
  },
});

export const {
  addSelectedMovie,
  addSelectedCinema,
  addSelectedSession,
  changeFoodTotal,
  changeShowLogin,
  updateSelectedSeats,
  updateSelectedTickets,
} = movieSlice.actions;

export default movieSlice.reducer;
