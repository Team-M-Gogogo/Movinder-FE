import { createSlice } from "@reduxjs/toolkit";

const initMovies = [];
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: initMovies,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;
