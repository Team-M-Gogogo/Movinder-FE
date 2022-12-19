import { createSlice } from "@reduxjs/toolkit";

const initMovies = [];
const initSelectedMovie = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: initMovies,
    selectedMovie: initSelectedMovie,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    }
  },
});

export const { addMovies, addSelectedMovie } = movieSlice.actions;

export default movieSlice.reducer;
