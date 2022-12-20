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
    foodTotal: 0
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addSelectedCinema: (state, action) => {
      state.selectedCinema = action.payload;
    },
    addSelectedSession: (state, action) => {
      console.log(action.payload);
      state.selectedSession = action.payload;
    },
    changeFoodTotal: (state, action) => {
      state.foodTotal += action.payload;
      console.log(state.foodTotal);
    },
  },
});

export const { addSelectedMovie, addSelectedCinema, addSelectedSession, changeFoodTotal } =
  movieSlice.actions;

export default movieSlice.reducer;
