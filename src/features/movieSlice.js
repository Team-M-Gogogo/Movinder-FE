import { createSlice } from "@reduxjs/toolkit";

const initMovies = [];
const initSelectedMovie = [];
const initCinemas = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: initMovies,
    selectedMovie: initSelectedMovie,
    cinemas: initCinemas,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
  },
});

export const { addMovies, addSelectedMovie, addCinemas } = movieSlice.actions;

export default movieSlice.reducer;
