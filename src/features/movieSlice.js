import { createSlice } from "@reduxjs/toolkit";
const initSelectedMovie = [];
const initCinemas = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    selectedMovie: initSelectedMovie,
    cinemas: initCinemas,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
  },
});

export const { addSelectedMovie, addCinemas } = movieSlice.actions;

export default movieSlice.reducer;
