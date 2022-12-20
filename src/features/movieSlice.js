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
  },
});

export const { addSelectedMovie, addSelectedCinema, addSelectedSession } =
  movieSlice.actions;

export default movieSlice.reducer;
